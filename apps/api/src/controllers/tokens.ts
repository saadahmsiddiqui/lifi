import { getErc20Tokens } from "../api/alchemy";
import { FastifyReply, FastifyRequest } from "fastify";
import {
  getCachedBalances,
  cacheBalance,
  getCachedErc20Metadata,
  cacheErc20Metadata,
} from "../services/cache";
import { Erc20Metadata, getErc20Metadata } from "../services/erc20";

export const getErc20Holdings = async (
  request: FastifyRequest & { address?: string },
  reply: FastifyReply,
) => {
  const address = request.address!.toLowerCase();
  let data = await getCachedBalances(address);
  if (!data) {
    console.log(`\n Hitting API cache unavailable \n`);
    data = await getErc20Tokens(address);
    cacheBalance(address, data);
  }

  let tokens: Record<string, Erc20Metadata> = {};
  for (let balance of data.result.tokenBalances) {
    const tokenContractAddress = balance.contractAddress.toLowerCase();
    let metadata = await getCachedErc20Metadata(tokenContractAddress);
    if (!metadata) {
      metadata = await getErc20Metadata(balance.contractAddress);
      cacheErc20Metadata(tokenContractAddress, metadata);
    }
    tokens[tokenContractAddress] = metadata;
  }

  return reply.send({ balances: data.result, tokens });
};

export default {
  getErc20Holdings,
};

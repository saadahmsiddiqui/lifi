import { getErc20Tokens } from "../api/alchemy";
import { FastifyReply, FastifyRequest } from "fastify";
import { getCachedBalances, cacheBalance } from "../redis";

export const getErc20Holdings = async (
  request: FastifyRequest & { address?: string },
  reply: FastifyReply,
) => {
  const address = request.address!.toLowerCase();
  let data = await getCachedBalances(address);
  if (!data) {
    console.log(`\n Hitting API cache unavailable \n`);
    let data = await getErc20Tokens(address);
    cacheBalance(address, data);
  }
  return reply.send(data);
};

export default {
  getErc20Holdings,
};

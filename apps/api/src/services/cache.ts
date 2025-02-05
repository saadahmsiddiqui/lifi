import { AlchemyBalancesResponse } from "../api/alchemy";
import { redisClient } from "../redis";
import { Erc20Metadata } from "./erc20";

async function getCachedBalances(
  address: string,
): Promise<AlchemyBalancesResponse | null> {
  if (redisClient) {
    const cachedJson = await redisClient.json.get(address);
    // @ts-ignore
    if (cachedJson) return JSON.parse(cachedJson) as AlchemyBalancesResponse;
  }

  return null;
}

async function cacheBalance(address: string, data: AlchemyBalancesResponse) {
  if (redisClient) {
    await redisClient.json.set(address, "$", JSON.stringify(data));
  }
}

async function getCachedErc20Metadata(
  address: string,
): Promise<Erc20Metadata | null> {
  if (redisClient) {
    const cachedMetadata = await redisClient.json.get(address);
    // @ts-ignore
    if (cachedMetadata) return JSON.parse(cachedMetadata) as Erc20Metadata;
  }
  return null;
}

async function cacheErc20Metadata(address: string, metadata: Erc20Metadata) {
  if (redisClient) {
    await redisClient.json.set(address, "$", JSON.stringify(metadata));
  }
  return null;
}

export {
  getCachedBalances,
  cacheBalance,
  getCachedErc20Metadata,
  cacheErc20Metadata,
};

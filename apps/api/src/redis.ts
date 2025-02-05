import { createClient } from "redis";
import { RedisClientType } from "redis";
import { AlchemyBalancesResponse } from "./api/alchemy";
import { Erc20Metadata } from "./services/erc20";

let redisClient: RedisClientType | null = null;

async function setupLeaderBoardClient() {
  const client = createClient();

  client.on("error", (err) => {
    console.error("RedisConnectionError", err);
    // failure plan
  });

  await client.connect();
  // @ts-ignore
  redisClient = client;
  return client;
}

async function getCachedBalances(address: string): Promise<AlchemyBalancesResponse | null> {
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

async function getCachedErc20Metadata(address: string): Promise<Erc20Metadata | null> {
  if (redisClient) {
    const cachedMetadata = await redisClient.json.get(address);
    // @ts-ignore
    if (cachedMetadata) return JSON.parse(cachedMetadata) as Erc20Metadata
  }
  return null;
}

async function cacheErc20Metadata(address: string, metadata: Erc20Metadata) {
  if (redisClient) {
    await redisClient.json.set(address, "$", JSON.stringify(metadata));
  }
  return null;
}

export { setupLeaderBoardClient, redisClient, getCachedBalances, cacheBalance, getCachedErc20Metadata, cacheErc20Metadata };

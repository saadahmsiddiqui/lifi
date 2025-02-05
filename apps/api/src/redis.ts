import { createClient } from "redis";
import { RedisClientType } from "redis";

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

async function getCachedBalances(address: string) {
  if (redisClient) {
    const cachedJson = await redisClient.json.get(address);

    if (cachedJson) return cachedJson;
  }
}

async function cacheBalance(address: string, data: string) {
  if (redisClient) {
    await redisClient.json.set(address, "$", data);
  }
}

export { setupLeaderBoardClient, redisClient, getCachedBalances, cacheBalance };

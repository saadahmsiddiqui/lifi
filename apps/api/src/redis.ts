import { createClient } from "redis";
import { RedisClientType } from "redis";

let redisClient: RedisClientType | null = null;

async function setupClient() {
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

export { setupClient, redisClient };

import { createClient } from "redis";

let leaderBoardClient = null;

async function setupLeaderBoardClient() {
  const client = createClient();

  client.on("error", (err) => {
    console.error("RedisConnectionError", err);
    // failure plan
  });

  await client.connect();
  leaderBoardClient = client;
  return client;
}

export { setupLeaderBoardClient, leaderBoardClient };

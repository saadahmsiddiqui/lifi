import { redisClient } from "../redis";

const SSET_KEY = "leaderboard";

async function updateScore(address: string) {
  if (redisClient) {
    const res = await redisClient.zIncrBy(SSET_KEY, 1, address);
    return res;
  }
  return null;
}

async function getLeaderboard() {
  if (redisClient) {
    const leaderBoard = await redisClient.zRange(SSET_KEY, 0, 100);
    return leaderBoard.reverse();
  }
}

export { updateScore, getLeaderboard };

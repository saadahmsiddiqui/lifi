import { FastifyReply, FastifyRequest } from "fastify";
import { updateScore as redisUpdateScore, getLeaderboard as redisGetLeaderboard } from "../services/leaderboard";

export const updateScore = async (
  request: FastifyRequest & { address?: string },
  reply: FastifyReply,
) => {
    const score = await redisUpdateScore(request.address!);
    return reply.send(score);
};

export const getLeaderboard = async (
    request: FastifyRequest & { address?: string },
    reply: FastifyReply,
) => {
    const leaderboard = await redisGetLeaderboard();
    return reply.send(leaderboard);
}

export default {
  updateScore,
};

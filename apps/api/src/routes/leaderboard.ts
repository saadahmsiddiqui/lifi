import { FastifyInstance } from "fastify";
import { getLeaderboard, updateScore } from "../controllers/leaderboard";
import { verifyToken } from "../middleware/auth";

const leaderboardRouter = async (app: FastifyInstance) => {
  app.get(
    "/",
    getLeaderboard
  );

  app.post(
    "/updateScore",
    { preHandler: verifyToken },
    updateScore
  );
};

export default leaderboardRouter;

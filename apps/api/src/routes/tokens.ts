import { FastifyInstance, FastifyRequest } from "fastify";
import { verifyToken } from "../middleware/auth";
import { getErc20Holdings } from "../controllers/tokens";

const tokensRouter = async (app: FastifyInstance) => {
  app.get(
    "/",
    {
      preHandler: verifyToken,
    },
    getErc20Holdings,
  );
};

export default tokensRouter;

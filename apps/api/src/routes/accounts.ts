import { FastifyInstance } from "fastify";
import { handleCreate } from "../controllers/accounts";

const accountsRouter = async (app: FastifyInstance) => {
  app.post(
    "/create",
    {
      schema: {
        body: { $ref: "createAccountSchema#" },
      },
    },
    handleCreate,
  );
};

export default accountsRouter;

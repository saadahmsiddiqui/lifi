import { FastifyInstance } from "fastify";
import { handleCreate } from "../controllers/accounts";

const accountsRouter = async (app: FastifyInstance) => {
    app.post('create', handleCreate);
}

export default accountsRouter;
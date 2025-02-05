import { FastifyInstance, FastifyServerOptions } from "fastify";
import App from "./app";
import { setupLeaderBoardClient } from "./redis";
import { config } from "dotenv";

config();

const options: FastifyServerOptions = {
  logger: true,
};

const app: FastifyInstance = App(options);
const port = Number(process.env.PORT);

async function start() {
  await setupLeaderBoardClient();

  app.listen({ port }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    app.log.info(`server listening on ${port}`);
  });
}

start();

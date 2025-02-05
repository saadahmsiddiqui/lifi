import { FastifyInstance, FastifyServerOptions } from "fastify"
import App from "./app"
import { setupLeaderBoardClient } from "./redis"

const options: FastifyServerOptions = {
	logger: true
}

const app: FastifyInstance = App(options)
const PORT = 3000

async function start() {
	await setupLeaderBoardClient();

	app.listen({port:Number(PORT)}, (err) => {
		if (err) {
			app.log.error(err);
			process.exit(1)
		}
		app.log.info(`server listening on ${PORT}`)
	})
}


start()
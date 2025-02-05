import fastify, { FastifyServerOptions } from "fastify";
import { accountsRouter } from "./routes";


const App = (options: FastifyServerOptions) => {
	const app = fastify(options)

	app.register(require('@fastify/cors'), (instance) => {
		return (req:any, callback:any) => {
		  const corsOptions = {
			// This is NOT recommended for production as it enables reflection exploits
			origin: true
		  };
	  
		  // do not include CORS headers for requests from localhost
		  if (/^localhost$/m.test(req.headers.origin)) {
			corsOptions.origin = false
		  }
	  
		  // callback expects two parameters: error and options
		  callback(null, corsOptions)
		}
	  })

	app.register(accountsRouter, { prefix: "/api/account" });

	return app
}

export default App;
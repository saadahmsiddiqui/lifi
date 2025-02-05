"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
const App = (options) => {
    const app = (0, fastify_1.default)(options);
    app.register(require('@fastify/cors'), (instance) => {
        return (req, callback) => {
            const corsOptions = {
                // This is NOT recommended for production as it enables reflection exploits
                origin: true
            };
            // do not include CORS headers for requests from localhost
            if (/^localhost$/m.test(req.headers.origin)) {
                corsOptions.origin = false;
            }
            // callback expects two parameters: error and options
            callback(null, corsOptions);
        };
    });
    app.register(routes_1.accountsRouter, { prefix: "/api/account" });
    return app;
};
exports.default = App;

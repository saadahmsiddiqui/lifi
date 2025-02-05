"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const redis_1 = require("./redis");
const options = {
    logger: true
};
const app = (0, app_1.default)(options);
const PORT = 3000;
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, redis_1.setupLeaderBoardClient)();
        app.listen({ port: Number(PORT) }, (err) => {
            if (err) {
                app.log.error(err);
                process.exit(1);
            }
            app.log.info(`server listening on ${PORT}`);
        });
    });
}
start();

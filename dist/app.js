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
const routing_controllers_1 = require("routing-controllers");
const body_parser_1 = __importDefault(require("body-parser"));
const express_http_context_1 = __importDefault(require("express-http-context"));
const typedi_1 = require("typedi");
const controllers_1 = require("./controllers");
const middleware_1 = require("./middleware");
const sequelize_1 = __importDefault(require("./sequelize"));
const express_ws_1 = __importDefault(require("express-ws"));
require("./services");
routing_controllers_1.useContainer(typedi_1.Container);
const app = routing_controllers_1.createExpressServer({
    controllers: [controllers_1.UserController],
    middlewares: [middleware_1.GlobalErrorHandler],
    defaultErrorHandler: false
});
express_ws_1.default(app);
app.use(body_parser_1.default.json());
app.use(express_http_context_1.default.middleware);
app.ws('/websockets', function (ws, req) {
    ws.on('message', function (msg) {
        console.log(msg);
        ws.send(msg);
    });
});
sequelize_1.default.authenticate()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    const PORT = process.env.PORT || 8080;
    const server = app.listen(PORT, () => console.log(`App running on port ${PORT}`));
    // websocket(server);
}))
    .catch(console.error);
//# sourceMappingURL=app.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
const models_1 = __importDefault(require("../db/models"));
// export function getApp([mysql]: [Sequelize]) {
//   const app: Express = express();
//   app.use(bodyParser.json());
//   app.use(httpContext.middleware);
//   useExpressServer(app, {
//     controllers: [UserController],
//     middlewares: [GlobalErrorHandler],
//     defaultErrorHandler: false
//   });
//   // app.use((req, res, next) => {
//   //   httpContext.ns.bindEmitter(req);
//   //   httpContext.ns.bindEmitter(res);
//   //   next();
//   // });
//   return app;
// }
routing_controllers_1.useContainer(typedi_1.Container);
const app = routing_controllers_1.createExpressServer({
    controllers: [controllers_1.UserController],
    middlewares: [middleware_1.GlobalErrorHandler],
    defaultErrorHandler: false
});
app.use(body_parser_1.default.json());
app.use(express_http_context_1.default.middleware);
models_1.default.authenticate()
    .then(() => __awaiter(this, void 0, void 0, function* () {
    try {
        yield models_1.default.sync({ force: true });
        app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}`));
    }
    catch (error) {
        console.error(error);
    }
}))
    .catch(console.error);
//# sourceMappingURL=app.js.map
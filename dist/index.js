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
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./src/app");
const services_1 = require("./src/services");
dotenv_1.default.config();
const port = process.env.PORT;
(() => __awaiter(this, void 0, void 0, function* () {
    return Promise.all([
        new services_1.MysqlConnector("").sequelize,
    ]);
}))()
    .then(([mysql]) => {
    const app = app_1.getApp([mysql]);
    app.listen(port, () => {
        return console.log(`server is listening on ${port}`);
    });
})
    .catch((error) => console.error(error));
//# sourceMappingURL=index.js.map
"use strict";
// import { Sequelize } from "sequelize";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// export class MysqlConnector {
//   sequelize: Sequelize;
//   constructor(url: string) {
//     this.sequelize = new Sequelize(url, {
//       dialect: 'mysql',
//       logging: false,
//       define: {
//         charset: 'utf8mb4',
//       },
//       pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//       },
//     });
//   }
// }
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("config"));
exports.sequelizeConnection = new sequelize_typescript_1.Sequelize(Object.assign({}, config_1.default[process.env.ENV], { models: [__dirname + '/models/**/*.model.ts'], modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
    }, pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    } }));
//# sourceMappingURL=mysql-connector.js.map
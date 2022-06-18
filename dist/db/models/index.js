"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = __importDefault(require("./user"));
const db = {};
const env = process.env.ENV || 'development';
const config = require('../../config/config')[env];
const sequelize = new sequelize_typescript_1.Sequelize(Object.assign({}, config, { validateOnly: false, models: [user_1.default] }));
db.sequelize = sequelize;
db.Sequelize = sequelize_typescript_1.Sequelize;
module.exports = db;
//# sourceMappingURL=index.js.map
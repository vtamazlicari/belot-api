"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const env = process.env.ENV || 'development';
const { username, password, database, host, dialect } = require('../config/config')[env];
exports.default = new sequelize_typescript_1.Sequelize({
    username,
    password,
    database,
    host,
    dialect,
    validateOnly: false,
    models: [__dirname + '/db/models/'],
    storage: ':memory:',
});
//# sourceMappingURL=sequelize.js.map
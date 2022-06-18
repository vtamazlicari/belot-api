'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
/**
 * Actions summary:
 *
 * createTable "Users", deps: []
 *
 **/
exports.info = {
    "revision": 1,
    "name": "user",
    "created": "2021-10-15T11:23:37.536Z",
    "comment": ""
};
const migrationCommands = [{
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": sequelize_typescript_1.DataType.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "name": {
                    "type": sequelize_typescript_1.DataType.STRING,
                    "field": "name"
                },
                "email": {
                    "type": sequelize_typescript_1.DataType.STRING,
                    "field": "email"
                },
                "password": {
                    "type": sequelize_typescript_1.DataType.STRING,
                    "field": "password"
                },
                "createdAt": {
                    "type": sequelize_typescript_1.DataType.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": sequelize_typescript_1.DataType.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }];
exports.up = (queryInterface, Sequelize, pos = 0) => {
    let index = pos;
    return new Promise(function (resolve, reject) {
        function next() {
            if (index < migrationCommands.length) {
                let command = migrationCommands[index];
                console.log("[#" + index + "] execute: " + command.fn);
                index++;
                queryInterface[command.fn]
                    .apply(queryInterface, command.params)
                    .then(next, reject);
            }
            else {
                resolve();
            }
        }
        next();
    });
};
//# sourceMappingURL=1-user.js.map
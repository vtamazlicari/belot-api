'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = exports.info = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
/**
 * Actions summary:
 *
 * createTable "Users", deps: []
 * createTable "Sessions", deps: []
 * createTable "Points", deps: [Users, Sessions]
 * createTable "SessionUsers", deps: [Sessions, Users]
 *
 **/
exports.info = {
    "revision": 1,
    "name": "create-tables",
    "created": "2021-11-29T16:58:04.998Z",
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
                "isGuest": {
                    "type": sequelize_typescript_1.DataType.BOOLEAN,
                    "field": "isGuest"
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
    },
    {
        fn: "createTable",
        params: [
            "Sessions",
            {
                "id": {
                    "type": sequelize_typescript_1.DataType.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "code": {
                    "type": sequelize_typescript_1.DataType.STRING,
                    "field": "code"
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
    },
    {
        fn: "createTable",
        params: [
            "Points",
            {
                "id": {
                    "type": sequelize_typescript_1.DataType.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "point": {
                    "type": sequelize_typescript_1.DataType.INTEGER,
                    "field": "point"
                },
                "idUser": {
                    "type": sequelize_typescript_1.DataType.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "name": "idUser",
                    "allowNull": true,
                    "field": "idUser"
                },
                "idSession": {
                    "type": sequelize_typescript_1.DataType.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "Sessions",
                        "key": "id"
                    },
                    "name": "idSession",
                    "allowNull": true,
                    "field": "idSession"
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
    },
    {
        fn: "createTable",
        params: [
            "SessionUsers",
            {
                "idSession": {
                    "type": sequelize_typescript_1.DataType.INTEGER,
                    "unique": "SessionUsers_idSession_idUser_unique",
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Sessions",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "name": "idSession",
                    "field": "idSession"
                },
                "idUser": {
                    "type": sequelize_typescript_1.DataType.INTEGER,
                    "unique": "SessionUsers_idSession_idUser_unique",
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "name": "idUser",
                    "field": "idUser"
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
    }
];
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
//# sourceMappingURL=1-create-tables.js.map
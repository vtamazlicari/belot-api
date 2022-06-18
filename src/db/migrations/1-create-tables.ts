'use strict';

import Sequelize, { DataType } from "sequelize-typescript";

/**
 * Actions summary:
 *
 * createTable "Users", deps: []
 * createTable "Sessions", deps: []
 * createTable "Points", deps: [Users, Sessions]
 * createTable "SessionUsers", deps: [Sessions, Users]
 *
 **/

export const info = {
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
                    "type": DataType.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "name": {
                    "type": DataType.STRING,
                    "field": "name"
                },
                "email": {
                    "type": DataType.STRING,
                    "field": "email"
                },
                "password": {
                    "type": DataType.STRING,
                    "field": "password"
                },
                "isGuest": {
                    "type": DataType.BOOLEAN,
                    "field": "isGuest"
                },
                "createdAt": {
                    "type": DataType.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": DataType.DATE,
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
                    "type": DataType.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "code": {
                    "type": DataType.STRING,
                    "field": "code"
                },
                "createdAt": {
                    "type": DataType.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": DataType.DATE,
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
                    "type": DataType.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "point": {
                    "type": DataType.INTEGER,
                    "field": "point"
                },
                "idUser": {
                    "type": DataType.INTEGER,
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
                    "type": DataType.INTEGER,
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
                    "type": DataType.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": DataType.DATE,
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
                    "type": DataType.INTEGER,
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
                    "type": DataType.INTEGER,
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
                    "type": DataType.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": DataType.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

export const up = (queryInterface, Sequelize, pos = 0) =>  {
  let index = pos;
  return new Promise<void>(function(resolve, reject) {
    function next() {
      if (index < migrationCommands.length) {
        let command = migrationCommands[index];
        console.log("[#" + index + "] execute: " + command.fn);
        index++;

        queryInterface[command.fn]
          .apply(queryInterface, command.params)
          .then(next, reject);
      } else {
        resolve();
      }
    }
    next();
  });
};

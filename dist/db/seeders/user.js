"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const users = [
    {
        name: 'Jon Doe',
        email: 'jondoe@mail.com',
        password: 'naksdhaskd',
        isGuest: false,
    },
    {
        name: 'Vasile Schiopu',
        email: 'vasileshchiopu@mail.com',
        password: 'naksddsahaskd',
        isGuest: false,
    },
    {
        name: 'Ion Noroc',
        email: 'ionnoroc@mail.com',
        password: 'naksdaAhsasdaskd',
        isGuest: false,
    }
];
exports.default = models_1.default.User.bulk;
//# sourceMappingURL=user.js.map
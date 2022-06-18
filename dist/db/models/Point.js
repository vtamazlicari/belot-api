"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = __importDefault(require("./User"));
const Session_1 = __importDefault(require("./Session"));
let Point = class Point extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Point.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Point.prototype, "point", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Point.prototype, "idUser", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.default),
    __metadata("design:type", User_1.default)
], Point.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Session_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Point.prototype, "idSession", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Session_1.default),
    __metadata("design:type", Session_1.default)
], Point.prototype, "session", void 0);
Point = __decorate([
    sequelize_typescript_1.Table({})
], Point);
exports.default = Point;
//# sourceMappingURL=Point.js.map
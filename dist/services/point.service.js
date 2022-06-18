"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointService = void 0;
const typedi_1 = require("typedi");
const Point_1 = __importDefault(require("../db/models/Point"));
let PointService = class PointService {
    findAll() {
        return Point_1.default.findAll({ raw: true });
    }
    findOne(id) {
        return Point_1.default.findByPk(id, { raw: true });
    }
    updateOne(id, point) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Point_1.default.update(point, { where: { id } });
            return this.findOne(id);
        });
    }
    deleteOne(id) {
        return Point_1.default.destroy({ where: { id } });
    }
    createOne(point) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield Point_1.default.create(point);
            return newUser.toJSON();
        });
    }
};
PointService = __decorate([
    typedi_1.Service()
], PointService);
exports.PointService = PointService;
//# sourceMappingURL=point.service.js.map
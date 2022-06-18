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
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_migration_1 = require("sequelize-typescript-migration");
const path_1 = __importDefault(require("path"));
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql'
});
function func() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sequelize_typescript_migration_1.SequelizeTypescriptMigration.makeMigration(sequelize, {
            outDir: path_1.default.join(__dirname, "/db/migrations"),
            migrationName: "add-awesome-field-in-my-table",
            preview: false,
        });
    });
}
func();
//# sourceMappingURL=migrations-create.js.map
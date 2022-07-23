"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
var table_1 = __importDefault(require("../vendor/database/table"));
var up = function () {
    return {
        name: "users",
        columns: [
            table_1.default.id(),
            table_1.default.string("name").nullable(),
            table_1.default.string("email").unique(),
            table_1.default.timestamp("email_verified_at").nullable(),
            table_1.default.string("password"),
            table_1.default.timestamps(),
        ],
    };
};
exports.up = up;
var down = function () {
    return {
        name: "users",
    };
};
exports.down = down;

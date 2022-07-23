"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var collection_1 = __importDefault(require("./collection"));
var Where = /** @class */ (function () {
    function Where() {
        this.table = "";
    }
    Where.prototype.where = function (column, operator, value) {
        var params = "WHERE ".concat(column, " ").concat(operator, " '").concat(value, "'");
        return new collection_1.default(this.table, params);
    };
    return Where;
}());
exports.default = Where;

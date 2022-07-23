"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Str = /** @class */ (function () {
    function Str() {
    }
    Str.prototype.random = function (length) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    return Str;
}());
exports.default = new Str();

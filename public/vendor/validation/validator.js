"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var validatorMessage_1 = require("./validatorMessage");
var Validator = /** @class */ (function () {
    function Validator() {
        this.rules = [];
    }
    Validator.prototype.make = function (_a, rule) {
        var e_1, _b, e_2, _c;
        var req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var rules, rules_1, rules_1_1, r1, rows, rows_1, rows_1_1, r2, found, b, key, _d, required, email, min, confirm_1, e_2_1, e_1_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        rules = Object.getOwnPropertyNames(rule);
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 27, 28, 33]);
                        rules_1 = __asyncValues(rules);
                        _e.label = 2;
                    case 2: return [4 /*yield*/, rules_1.next()];
                    case 3:
                        if (!(rules_1_1 = _e.sent(), !rules_1_1.done)) return [3 /*break*/, 26];
                        r1 = rules_1_1.value;
                        rows = rule[r1];
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 19, 20, 25]);
                        rows_1 = (e_2 = void 0, __asyncValues(rows));
                        _e.label = 5;
                    case 5: return [4 /*yield*/, rows_1.next()];
                    case 6:
                        if (!(rows_1_1 = _e.sent(), !rows_1_1.done)) return [3 /*break*/, 18];
                        r2 = rows_1_1.value;
                        found = false;
                        b = null;
                        key = r2.split(":");
                        _d = key[0];
                        switch (_d) {
                            case "required": return [3 /*break*/, 7];
                            case "email": return [3 /*break*/, 9];
                            case "min": return [3 /*break*/, 11];
                            case "confirm": return [3 /*break*/, 13];
                        }
                        return [3 /*break*/, 15];
                    case 7: return [4 /*yield*/, (0, express_validator_1.body)(r1).not().isEmpty().run(req)];
                    case 8:
                        required = _e.sent();
                        found = !required.isEmpty();
                        b = (0, express_validator_1.body)(r1, validatorMessage_1.validatorMessage.required).not().isEmpty();
                        return [3 /*break*/, 16];
                    case 9: return [4 /*yield*/, (0, express_validator_1.body)(r1).isEmail().run(req)];
                    case 10:
                        email = _e.sent();
                        found = !email.isEmpty();
                        b = (0, express_validator_1.body)(r1, validatorMessage_1.validatorMessage.email).isEmail();
                        return [3 /*break*/, 16];
                    case 11: return [4 /*yield*/, (0, express_validator_1.body)(r1)
                            .isLength({
                            min: key[1],
                            max: undefined,
                        })
                            .run(req)];
                    case 12:
                        min = _e.sent();
                        found = !min.isEmpty();
                        b = (0, express_validator_1.body)(r1, validatorMessage_1.validatorMessage.min).isLength({
                            min: key[1],
                            max: undefined,
                        });
                        return [3 /*break*/, 16];
                    case 13: return [4 /*yield*/, (0, express_validator_1.body)(r1).equals(req.body[key[1]]).run(req)];
                    case 14:
                        confirm_1 = _e.sent();
                        found = !confirm_1.isEmpty();
                        b = (0, express_validator_1.body)(r1).equals(req.body[key[1]]);
                        return [3 /*break*/, 16];
                    case 15: throw new Error("Rule ".concat(key[0], " don\"t exists!"));
                    case 16:
                        if (found) {
                            if (b != null) {
                                this.rules.push(b);
                            }
                            return [3 /*break*/, 18];
                        }
                        _e.label = 17;
                    case 17: return [3 /*break*/, 5];
                    case 18: return [3 /*break*/, 25];
                    case 19:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 25];
                    case 20:
                        _e.trys.push([20, , 23, 24]);
                        if (!(rows_1_1 && !rows_1_1.done && (_c = rows_1.return))) return [3 /*break*/, 22];
                        return [4 /*yield*/, _c.call(rows_1)];
                    case 21:
                        _e.sent();
                        _e.label = 22;
                    case 22: return [3 /*break*/, 24];
                    case 23:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 24: return [7 /*endfinally*/];
                    case 25: return [3 /*break*/, 2];
                    case 26: return [3 /*break*/, 33];
                    case 27:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 33];
                    case 28:
                        _e.trys.push([28, , 31, 32]);
                        if (!(rules_1_1 && !rules_1_1.done && (_b = rules_1.return))) return [3 /*break*/, 30];
                        return [4 /*yield*/, _b.call(rules_1)];
                    case 29:
                        _e.sent();
                        _e.label = 30;
                    case 30: return [3 /*break*/, 32];
                    case 31:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 32: return [7 /*endfinally*/];
                    case 33: return [2 /*return*/, this];
                }
            });
        });
    };
    Validator.prototype.validate = function (_a) {
        var req = _a.req;
        return __awaiter(this, void 0, void 0, function () {
            var errors;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all(this.rules.map(function (validation) { return validation.run(req); }))];
                    case 1:
                        _b.sent();
                        errors = (0, express_validator_1.validationResult)(req);
                        if (!errors.isEmpty()) {
                            return [2 /*return*/, {
                                    errors: errors.array(),
                                }];
                        }
                        return [2 /*return*/, {
                                errors: [],
                            }];
                }
            });
        });
    };
    return Validator;
}());
exports.default = new Validator();

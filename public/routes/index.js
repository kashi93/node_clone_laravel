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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var web_1 = require("./web");
dotenv_1.default.config();
var env = process.env;
var app = (0, express_1.default)();
var port = env.APP_PORT;
var host = env.APP_URL;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _loop_1, routes_1, routes_1_1, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 11]);
                _loop_1 = function () {
                    var router = routes_1_1.value;
                    var p = router.path;
                    var c = new router.controller();
                    var m = router.method;
                    var rm = router.routeMethod;
                    app[rm](p, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
                        var cb, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, c[m]({
                                            req: req,
                                            res: res,
                                        })];
                                case 1:
                                    cb = _a.sent();
                                    if (cb != null) {
                                        res.setHeader("Content-Type", "application/json");
                                        res.end(JSON.stringify(cb));
                                    }
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    next(new Error(err_1));
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); });
                };
                routes_1 = __asyncValues(web_1.web);
                _b.label = 1;
            case 1: return [4 /*yield*/, routes_1.next()];
            case 2:
                if (!(routes_1_1 = _b.sent(), !routes_1_1.done)) return [3 /*break*/, 4];
                _loop_1();
                _b.label = 3;
            case 3: return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 11];
            case 5:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 11];
            case 6:
                _b.trys.push([6, , 9, 10]);
                if (!(routes_1_1 && !routes_1_1.done && (_a = routes_1.return))) return [3 /*break*/, 8];
                return [4 /*yield*/, _a.call(routes_1)];
            case 7:
                _b.sent();
                _b.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 10: return [7 /*endfinally*/];
            case 11:
                app.listen(port, function () {
                    console.log("Example app listening at http://%s:%s", host, port);
                });
                return [2 /*return*/];
        }
    });
}); })();
exports.default = app;

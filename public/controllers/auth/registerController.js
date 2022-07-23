"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../../models/user"));
var hash_1 = __importDefault(require("../../vendor/password/hash"));
var controller_1 = __importDefault(require("../controller"));
var registerController = /** @class */ (function (_super) {
    __extends(registerController, _super);
    function registerController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    registerController.prototype.index = function (_a) {
        var req = _a.req, res = _a.res;
        return __awaiter(this, void 0, void 0, function () {
            var errorBag;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.validatorToBag(req.session.errors)];
                    case 1:
                        errorBag = _b.sent();
                        res.render("register/register", {
                            error: errorBag,
                            request: req.session.request,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    registerController.prototype.store = function (_a) {
        var req = _a.req, res = _a.res;
        return __awaiter(this, void 0, void 0, function () {
            var v, password;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.validate({
                            req: req,
                        }, {
                            name: ["required"],
                            email: ["required", "email"],
                            password: ["required", "min:8"],
                            password_confirmation: ["required", "confirm:password"],
                        })];
                    case 1:
                        v = _b.sent();
                        if (!(v.errors.length > 0)) return [3 /*break*/, 2];
                        req.session.request = req.body;
                        req.session.errors = v.errors;
                        res.redirect("/register");
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, hash_1.default.make(req.body.password)];
                    case 3:
                        password = _b.sent();
                        return [4 /*yield*/, user_1.default.create({
                                name: req.body.name,
                                email: req.body.email,
                                password: password,
                            })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, req.body];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return registerController;
}(controller_1.default));
exports.default = registerController;

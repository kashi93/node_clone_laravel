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
var yargs_1 = __importDefault(require("yargs"));
var fs_1 = __importDefault(require("fs"));
var migrations_1 = require("../template/migrations");
exports.default = yargs_1.default.command({
    command: "migration",
    describe: "Create a new controller class",
    builder: {
        create: {
            alias: "c",
            required: true,
            type: "string",
        },
    },
    handler: function (argv) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var migrations, fileName, migrations_2, migrations_2_1, migrate, m1, m2, e_1_1, p, m;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fs_1.default.promises.readdir("app/migrations")];
                    case 1:
                        migrations = _b.sent();
                        fileName = "";
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 13]);
                        migrations_2 = __asyncValues(migrations);
                        _b.label = 3;
                    case 3: return [4 /*yield*/, migrations_2.next()];
                    case 4:
                        if (!(migrations_2_1 = _b.sent(), !migrations_2_1.done)) return [3 /*break*/, 6];
                        migrate = migrations_2_1.value;
                        m1 = require("../../migrations/".concat(migrate));
                        if (m1.up != null) {
                            m2 = m1.up();
                            if (m2.name == argv.create) {
                                throw new Error("Migration ".concat(argv.create, " already exist!"));
                            }
                        }
                        _b.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(migrations_2_1 && !migrations_2_1.done && (_a = migrations_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(migrations_2)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13:
                        p = "app/migrations/";
                        m = null;
                        if (!Number.isNaN(parseInt(String(argv.name)))) {
                            console.log("Migrations name invalid!");
                            return [2 /*return*/];
                        }
                        if (argv.create != "") {
                            m = (0, migrations_1.migration)(String(argv.create));
                            fileName = "".concat(argv.create, "_").concat(new Date().getTime());
                        }
                        if (!(m != null)) return [3 /*break*/, 15];
                        return [4 /*yield*/, fs_1.default.promises.writeFile("".concat(p).concat(fileName, ".ts"), m, "utf-8")];
                    case 14:
                        _b.sent();
                        _b.label = 15;
                    case 15: return [2 /*return*/];
                }
            });
        });
    },
});

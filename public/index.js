"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_session_1 = __importDefault(require("express-session"));
var env = process.env;
var is_dev = env.APP_ENV == "local";
var root = env.PWD;
routes_1.default.use(body_parser_1.default.urlencoded({ extended: false }));
routes_1.default.use((0, cookie_parser_1.default)());
routes_1.default.use((0, express_session_1.default)({ secret: "kashi", saveUninitialized: false, resave: false }));
routes_1.default.use(express_1.default.urlencoded({
    extended: true,
}));
routes_1.default.use(express_1.default.static("".concat(root, "/public/assets")));
routes_1.default.set("views", __dirname + "/views");
routes_1.default.set("view engine", is_dev ? "tsx" : "js");
routes_1.default.engine(is_dev ? "tsx" : "js", require("express-react-views").createEngine());

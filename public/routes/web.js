"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
var homeController_1 = __importDefault(require("../controllers/homeController"));
var loginController_1 = __importDefault(require("../controllers/auth/loginController"));
var registerController_1 = __importDefault(require("../controllers/auth/registerController"));
exports.web = [
    {
        routeMethod: "get",
        path: "/",
        controller: homeController_1.default,
        method: "index",
    },
    {
        routeMethod: "get",
        path: "/login",
        controller: loginController_1.default,
        method: "index",
    },
    {
        routeMethod: "post",
        path: "/login",
        controller: loginController_1.default,
        method: "login",
    },
    {
        routeMethod: "get",
        path: "/register",
        controller: registerController_1.default,
        method: "index",
    },
    {
        routeMethod: "post",
        path: "/register",
        controller: registerController_1.default,
        method: "store",
    },
];

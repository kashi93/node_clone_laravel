"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var app_1 = __importDefault(require("../app/app"));
var home = function () {
    return (react_1.default.createElement(app_1.default, null,
        react_1.default.createElement("div", { className: "container-fluid" },
            react_1.default.createElement("h1", { className: "h3 mb-4 text-gray-800" }, "Blank Page 1"))));
};
exports.default = home;

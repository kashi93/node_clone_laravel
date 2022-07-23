"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function header() {
    return (react_1.default.createElement("head", null,
        react_1.default.createElement("link", { href: "/sb-admin/vendor/fontawesome-free/css/all.min.css", rel: "stylesheet", type: "text/css" }),
        react_1.default.createElement("link", { href: "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i", rel: "stylesheet" }),
        react_1.default.createElement("link", { href: "/sb-admin/css/sb-admin-2.min.css", rel: "stylesheet" })));
}
exports.default = header;

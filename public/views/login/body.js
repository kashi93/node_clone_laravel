"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var methods_1 = require("./methods");
function body() {
    var error = methods_1.method.parent.error;
    var _a = methods_1.method.state(), email = _a.email, setEmail = _a.setEmail, password = _a.password, setPassword = _a.setPassword;
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "row justify-content-center" },
            react_1.default.createElement("div", { className: "col-xl-10 col-lg-12 col-md-9" },
                react_1.default.createElement("div", { className: "card o-hidden border-0 shadow-lg my-5" },
                    react_1.default.createElement("div", { className: "card-body p-0" },
                        react_1.default.createElement("div", { className: "row" },
                            react_1.default.createElement("div", { className: "col-lg-6 d-none d-lg-block bg-login-image" }),
                            react_1.default.createElement("div", { className: "col-lg-6" },
                                react_1.default.createElement("div", { className: "p-5" },
                                    react_1.default.createElement("div", { className: "text-center" },
                                        react_1.default.createElement("h1", { className: "h4 text-gray-900 mb-4" }, "Welcome Back!")),
                                    react_1.default.createElement("form", { action: "/login", method: "post", className: "user" },
                                        react_1.default.createElement("div", { className: "form-group" },
                                            react_1.default.createElement("input", { type: "text", className: "form-control form-control-user", id: "exampleInputEmail", "aria-describedby": "emailHelp", placeholder: "Enter Email Address...", name: "email", value: email, onChange: function (e) { return setEmail(e.target.value); } }),
                                            error.email != null ? (react_1.default.createElement("small", { className: "ml-3 mt-1" },
                                                react_1.default.createElement("b", { className: "text-danger" }, error.email.msg))) : ("")),
                                        react_1.default.createElement("div", { className: "form-group" },
                                            react_1.default.createElement("input", { type: "password", className: "form-control form-control-user", id: "exampleInputPassword", placeholder: "Password", name: "password" }),
                                            error.password != null ? (react_1.default.createElement("small", { className: "ml-3 mt-1" },
                                                react_1.default.createElement("b", { className: "text-danger" }, error.password.msg))) : ("")),
                                        react_1.default.createElement("div", { className: "form-group" },
                                            react_1.default.createElement("div", { className: "custom-control custom-checkbox small" },
                                                react_1.default.createElement("input", { type: "checkbox", className: "custom-control-input", id: "customCheck" }),
                                                react_1.default.createElement("label", { className: "custom-control-label", htmlFor: "customCheck" }, "Remember Me"))),
                                        react_1.default.createElement("button", { type: "submit", className: "btn btn-primary btn-user btn-block" }, "Login"),
                                        react_1.default.createElement("hr", null)),
                                    react_1.default.createElement("div", { className: "text-center" },
                                        react_1.default.createElement("a", { className: "small", href: "forgot-password.html" }, "Forgot Password?")),
                                    react_1.default.createElement("div", { className: "text-center" },
                                        react_1.default.createElement("a", { className: "small", href: "/register" }, "Create an Account!")))))))))));
}
exports.default = body;

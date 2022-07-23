"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var methods_1 = require("./methods");
function body() {
    var error = methods_1.method.parent.error;
    var _a = methods_1.method.state(), name = _a.name, setName = _a.setName, email = _a.email, setEmail = _a.setEmail;
    return (react_1.default.createElement("div", { className: "container" },
        react_1.default.createElement("div", { className: "card o-hidden border-0 shadow-lg my-5" },
            react_1.default.createElement("div", { className: "card-body p-0" },
                react_1.default.createElement("div", { className: "row" },
                    react_1.default.createElement("div", { className: "col-lg-5 d-none d-lg-block bg-register-image" }),
                    react_1.default.createElement("div", { className: "col-lg-7" },
                        react_1.default.createElement("div", { className: "p-5" },
                            react_1.default.createElement("div", { className: "text-center" },
                                react_1.default.createElement("h1", { className: "h4 text-gray-900 mb-4" }, "Create an Account!")),
                            react_1.default.createElement("form", { action: "/register", method: "post", className: "user" },
                                react_1.default.createElement("div", { className: "form-group" },
                                    react_1.default.createElement("input", { autoComplete: "off", type: "text", className: "form-control form-control-user", placeholder: "Name", name: "name", value: name, onChange: function (e) { return setName(e.target.value); } }),
                                    error.name != null ? (react_1.default.createElement("small", { className: "ml-3 mt-1" },
                                        react_1.default.createElement("b", { className: "text-danger" }, error.name.msg))) : ("")),
                                react_1.default.createElement("div", { className: "form-group" },
                                    react_1.default.createElement("input", { type: "text", className: "form-control form-control-user", placeholder: "Email Address", name: "email", value: email, onChange: function (e) { return setEmail(e.target.value); } }),
                                    error.email != null ? (react_1.default.createElement("small", { className: "ml-3 mt-1" },
                                        react_1.default.createElement("b", { className: "text-danger" }, error.email.msg))) : ("")),
                                react_1.default.createElement("div", { className: "form-group row" },
                                    react_1.default.createElement("div", { className: "col-sm-6 mb-3 mb-sm-0" },
                                        react_1.default.createElement("input", { type: "password", className: "form-control form-control-user", id: "exampleInputPassword", placeholder: "Password", name: "password" }),
                                        error.password != null ? (react_1.default.createElement("small", { className: "ml-3 mt-1" },
                                            react_1.default.createElement("b", { className: "text-danger" }, error.password.msg))) : ("")),
                                    react_1.default.createElement("div", { className: "col-sm-6" },
                                        react_1.default.createElement("input", { type: "password", className: "form-control form-control-user", id: "exampleRepeatPassword", placeholder: "Repeat Password", name: "password_confirmation" }),
                                        error.password_confirmation != null ? (react_1.default.createElement("small", { className: "ml-3 mt-1" },
                                            react_1.default.createElement("b", { className: "text-danger" }, error.password_confirmation.msg))) : (""))),
                                react_1.default.createElement("button", { type: "submit", className: "btn btn-primary btn-user btn-block" }, "Register Account")),
                            react_1.default.createElement("hr", null),
                            react_1.default.createElement("div", { className: "text-center" },
                                react_1.default.createElement("a", { className: "small", href: "forgot-password.html" }, "Forgot Password?")),
                            react_1.default.createElement("div", { className: "text-center" },
                                react_1.default.createElement("a", { className: "small", href: "/login" }, "Already have an account? Login!")))))))));
}
exports.default = body;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var sidebar_1 = __importDefault(require("./sidebar"));
var topbar_1 = __importDefault(require("./topbar"));
function body(props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { id: "wrapper" },
            react_1.default.createElement(sidebar_1.default, null),
            react_1.default.createElement("div", { id: "content-wrapper", className: "d-flex flex-column" },
                react_1.default.createElement("div", { id: "content" },
                    react_1.default.createElement(topbar_1.default, null),
                    props.children),
                react_1.default.createElement("footer", { className: "sticky-footer bg-white" },
                    react_1.default.createElement("div", { className: "container my-auto" },
                        react_1.default.createElement("div", { className: "copyright text-center my-auto" },
                            react_1.default.createElement("span", null, "Copyright \u00A9 Your Website 2020")))))),
        react_1.default.createElement("a", { className: "scroll-to-top rounded", href: "#page-top" },
            react_1.default.createElement("i", { className: "fas fa-angle-up" })),
        react_1.default.createElement("div", { className: "modal fade", id: "logoutModal", tabIndex: -1, role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" },
            react_1.default.createElement("div", { className: "modal-dialog", role: "document" },
                react_1.default.createElement("div", { className: "modal-content" },
                    react_1.default.createElement("div", { className: "modal-header" },
                        react_1.default.createElement("h5", { className: "modal-title", id: "exampleModalLabel" }, "Ready to Leave?"),
                        react_1.default.createElement("button", { className: "close", type: "button", "data-dismiss": "modal", "aria-label": "Close" },
                            react_1.default.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                    react_1.default.createElement("div", { className: "modal-body" }, "Select \"Logout\" below if you are ready to end your current session."),
                    react_1.default.createElement("div", { className: "modal-footer" },
                        react_1.default.createElement("button", { className: "btn btn-secondary", type: "button", "data-dismiss": "modal" }, "Cancel"),
                        react_1.default.createElement("a", { className: "btn btn-primary", href: "login.html" }, "Logout")))))));
}
exports.default = body;

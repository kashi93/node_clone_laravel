"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function topbar() {
    return (react_1.default.createElement("nav", { className: "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" },
        react_1.default.createElement("button", { id: "sidebarToggleTop", className: "btn btn-link d-md-none rounded-circle mr-3" },
            react_1.default.createElement("i", { className: "fa fa-bars" })),
        react_1.default.createElement("form", { className: "d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" },
            react_1.default.createElement("div", { className: "input-group" },
                react_1.default.createElement("input", { type: "text", className: "form-control bg-light border-0 small", placeholder: "Search for...", "aria-label": "Search", "aria-describedby": "basic-addon2" }),
                react_1.default.createElement("div", { className: "input-group-append" },
                    react_1.default.createElement("button", { className: "btn btn-primary", type: "button" },
                        react_1.default.createElement("i", { className: "fas fa-search fa-sm" }))))),
        react_1.default.createElement("ul", { className: "navbar-nav ml-auto" },
            react_1.default.createElement("li", { className: "nav-item dropdown no-arrow d-sm-none" },
                react_1.default.createElement("a", { className: "nav-link dropdown-toggle", href: "#", id: "searchDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                    react_1.default.createElement("i", { className: "fas fa-search fa-fw" })),
                react_1.default.createElement("div", { className: "dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in", "aria-labelledby": "searchDropdown" },
                    react_1.default.createElement("form", { className: "form-inline mr-auto w-100 navbar-search" },
                        react_1.default.createElement("div", { className: "input-group" },
                            react_1.default.createElement("input", { type: "text", className: "form-control bg-light border-0 small", placeholder: "Search for...", "aria-label": "Search", "aria-describedby": "basic-addon2" }),
                            react_1.default.createElement("div", { className: "input-group-append" },
                                react_1.default.createElement("button", { className: "btn btn-primary", type: "button" },
                                    react_1.default.createElement("i", { className: "fas fa-search fa-sm" }))))))),
            react_1.default.createElement("li", { className: "nav-item dropdown no-arrow mx-1" },
                react_1.default.createElement("a", { className: "nav-link dropdown-toggle", href: "#", id: "alertsDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                    react_1.default.createElement("i", { className: "fas fa-bell fa-fw" }),
                    react_1.default.createElement("span", { className: "badge badge-danger badge-counter" }, "3+")),
                react_1.default.createElement("div", { className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in", "aria-labelledby": "alertsDropdown" },
                    react_1.default.createElement("h6", { className: "dropdown-header" }, "Alerts Center"),
                    react_1.default.createElement("a", { className: "dropdown-item d-flex align-items-center", href: "#" },
                        react_1.default.createElement("div", { className: "mr-3" },
                            react_1.default.createElement("div", { className: "icon-circle bg-primary" },
                                react_1.default.createElement("i", { className: "fas fa-file-alt text-white" }))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "small text-gray-500" }, "December 12, 2019"),
                            react_1.default.createElement("span", { className: "font-weight-bold" }, "A new monthly report is ready to download!"))),
                    react_1.default.createElement("a", { className: "dropdown-item d-flex align-items-center", href: "#" },
                        react_1.default.createElement("div", { className: "mr-3" },
                            react_1.default.createElement("div", { className: "icon-circle bg-success" },
                                react_1.default.createElement("i", { className: "fas fa-donate text-white" }))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "small text-gray-500" }, "December 7, 2019"),
                            "$290.29 has been deposited into your account!")),
                    react_1.default.createElement("a", { className: "dropdown-item d-flex align-items-center", href: "#" },
                        react_1.default.createElement("div", { className: "mr-3" },
                            react_1.default.createElement("div", { className: "icon-circle bg-warning" },
                                react_1.default.createElement("i", { className: "fas fa-exclamation-triangle text-white" }))),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "small text-gray-500" }, "December 2, 2019"),
                            "Spending Alert: We've noticed unusually high spending for your account.")),
                    react_1.default.createElement("a", { className: "dropdown-item text-center small text-gray-500", href: "#" }, "Show All Alerts"))),
            react_1.default.createElement("li", { className: "nav-item dropdown no-arrow mx-1" },
                react_1.default.createElement("a", { className: "nav-link dropdown-toggle", href: "#", id: "messagesDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                    react_1.default.createElement("i", { className: "fas fa-envelope fa-fw" }),
                    react_1.default.createElement("span", { className: "badge badge-danger badge-counter" }, "7")),
                react_1.default.createElement("div", { className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in", "aria-labelledby": "messagesDropdown" },
                    react_1.default.createElement("h6", { className: "dropdown-header" }, "Message Center"),
                    react_1.default.createElement("a", { className: "dropdown-item d-flex align-items-center", href: "#" },
                        react_1.default.createElement("div", { className: "dropdown-list-image mr-3" },
                            react_1.default.createElement("img", { className: "rounded-circle", src: "/sb-admin/img/undraw_profile_1.svg", alt: "..." }),
                            react_1.default.createElement("div", { className: "status-indicator bg-success" })),
                        react_1.default.createElement("div", { className: "font-weight-bold" },
                            react_1.default.createElement("div", { className: "text-truncate" }, "Hi there! I am wondering if you can help me with a problem I've been having."),
                            react_1.default.createElement("div", { className: "small text-gray-500" }, "Emily Fowler \u00B7 58m"))),
                    react_1.default.createElement("a", { className: "dropdown-item d-flex align-items-center", href: "#" },
                        react_1.default.createElement("div", { className: "dropdown-list-image mr-3" },
                            react_1.default.createElement("img", { className: "rounded-circle", src: "/sb-admin/img/undraw_profile_2.svg", alt: "..." }),
                            react_1.default.createElement("div", { className: "status-indicator" })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "text-truncate" }, "I have the photos that you ordered last month, how would you like them sent to you?"),
                            react_1.default.createElement("div", { className: "small text-gray-500" }, "Jae Chun \u00B7 1d"))),
                    react_1.default.createElement("a", { className: "dropdown-item d-flex align-items-center", href: "#" },
                        react_1.default.createElement("div", { className: "dropdown-list-image mr-3" },
                            react_1.default.createElement("img", { className: "rounded-circle", src: "/sb-admin/img/undraw_profile_3.svg", alt: "..." }),
                            react_1.default.createElement("div", { className: "status-indicator bg-warning" })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "text-truncate" }, "Last month's report looks great, I am very happy with the progress so far, keep up the good work!"),
                            react_1.default.createElement("div", { className: "small text-gray-500" }, "Morgan Alvarez \u00B7 2d"))),
                    react_1.default.createElement("a", { className: "dropdown-item d-flex align-items-center", href: "#" },
                        react_1.default.createElement("div", { className: "dropdown-list-image mr-3" },
                            react_1.default.createElement("img", { className: "rounded-circle", src: "https://source.unsplash.com/Mv9hjnEUHR4/60x60", alt: "..." }),
                            react_1.default.createElement("div", { className: "status-indicator bg-success" })),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("div", { className: "text-truncate" }, "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..."),
                            react_1.default.createElement("div", { className: "small text-gray-500" }, "Chicken the Dog \u00B7 2w"))),
                    react_1.default.createElement("a", { className: "dropdown-item text-center small text-gray-500", href: "#" }, "Read More Messages"))),
            react_1.default.createElement("div", { className: "topbar-divider d-none d-sm-block" }),
            react_1.default.createElement("li", { className: "nav-item dropdown no-arrow" },
                react_1.default.createElement("a", { className: "nav-link dropdown-toggle", href: "#", id: "userDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                    react_1.default.createElement("span", { className: "mr-2 d-none d-lg-inline text-gray-600 small" }, "Douglas McGee"),
                    react_1.default.createElement("img", { className: "img-profile rounded-circle", src: "/sb-admin/img/undraw_profile.svg" })),
                react_1.default.createElement("div", { className: "dropdown-menu dropdown-menu-right shadow animated--grow-in", "aria-labelledby": "userDropdown" },
                    react_1.default.createElement("a", { className: "dropdown-item", href: "#" },
                        react_1.default.createElement("i", { className: "fas fa-user fa-sm fa-fw mr-2 text-gray-400" }),
                        "Profile"),
                    react_1.default.createElement("a", { className: "dropdown-item", href: "#" },
                        react_1.default.createElement("i", { className: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" }),
                        "Settings"),
                    react_1.default.createElement("a", { className: "dropdown-item", href: "#" },
                        react_1.default.createElement("i", { className: "fas fa-list fa-sm fa-fw mr-2 text-gray-400" }),
                        "Activity Log"),
                    react_1.default.createElement("div", { className: "dropdown-divider" }),
                    react_1.default.createElement("a", { className: "dropdown-item", href: "#", "data-toggle": "modal", "data-target": "#logoutModal" },
                        react_1.default.createElement("i", { className: "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" }),
                        "Logout"))))));
}
exports.default = topbar;
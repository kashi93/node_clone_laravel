"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.method = void 0;
var react_1 = require("react");
exports.method = {
    parent: {},
    state: function () {
        var request = this.parent.request;
        var _a = (0, react_1.useState)(function () {
            if (request != null) {
                if (request.name != null) {
                    return request.name;
                }
            }
            return "";
        }), name = _a[0], setName = _a[1];
        var _b = (0, react_1.useState)(function () {
            if (request != null) {
                if (request.email != null) {
                    return request.email;
                }
            }
            return "";
        }), email = _b[0], setEmail = _b[1];
        return {
            name: name,
            setName: setName,
            email: email,
            setEmail: setEmail,
        };
    },
};

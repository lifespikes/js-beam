"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inertia_react_1 = require("@inertiajs/inertia-react");
var resolve_1 = require("./resolve");
var createInertiaViteApp = function (pages, _a) {
    var resolve = _a.resolve, options = __rest(_a, ["resolve"]);
    var defaultResolver = function (name) {
        return (0, resolve_1.default)(name, pages);
    };
    return (0, inertia_react_1.createInertiaApp)(__assign({ resolve: resolve || defaultResolver }, options));
};
exports.default = createInertiaViteApp;

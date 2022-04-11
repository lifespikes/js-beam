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
exports.__esModule = true;
var inertia_react_1 = require("@inertiajs/inertia-react");
var resolve_1 = require("./resolve");
var createInertiaBeam = function (options) {
    var _a;
    var defaultResolver = function (name) { var _a; return (0, resolve_1["default"])(name, (_a = options.pages) !== null && _a !== void 0 ? _a : {}); };
    return (0, inertia_react_1.createInertiaApp)(__assign({ resolve: (_a = options.resolve) !== null && _a !== void 0 ? _a : defaultResolver }, options));
};
exports["default"] = createInertiaBeam;

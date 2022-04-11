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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var vite_plugin_laravel_1 = require("vite-plugin-laravel");
var http_1 = require("./http");
var vite_plugin_css_injected_by_js_1 = require("vite-plugin-css-injected-by-js");
var generateViteConfig = function (config) {
    var _a, _b;
    // https://vitejs.dev/config/
    return (0, vite_1.defineConfig)(__assign(__assign({}, config), { plugins: __spreadArray([(0, vite_plugin_css_injected_by_js_1["default"])(), (0, plugin_react_1["default"])(), (0, vite_plugin_laravel_1["default"])()], ((_a = config === null || config === void 0 ? void 0 : config.plugins) !== null && _a !== void 0 ? _a : []), true), 
        /* Do not disable. If you're having issues with this contact @CristianHG */
        server: (0, http_1["default"])(), build: __assign({ target: 'es2015', minify: 'terser' }, ((_b = config === null || config === void 0 ? void 0 : config.build) !== null && _b !== void 0 ? _b : {})) }));
};
exports["default"] = generateViteConfig;

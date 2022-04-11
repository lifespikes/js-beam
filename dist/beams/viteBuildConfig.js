"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_plugin_laravel_1 = __importDefault(require("vite-plugin-laravel"));
const viteServerConfig_1 = __importDefault(require("./viteServerConfig"));
const vite_plugin_css_injected_by_js_1 = __importDefault(require("vite-plugin-css-injected-by-js"));
const viteBuildConfig = (config) => {
    var _a, _b;
    // https://vitejs.dev/config/
    return (0, vite_1.defineConfig)(Object.assign(Object.assign({}, config), { plugins: [(0, vite_plugin_css_injected_by_js_1.default)(), (0, plugin_react_1.default)(), (0, vite_plugin_laravel_1.default)(), ...((_a = config === null || config === void 0 ? void 0 : config.plugins) !== null && _a !== void 0 ? _a : [])], 
        /* Do not disable. If you're having issues with this contact @CristianHG */
        server: (0, viteServerConfig_1.default)(), build: Object.assign({ target: 'es2015', minify: 'terser' }, ((_b = config === null || config === void 0 ? void 0 : config.build) !== null && _b !== void 0 ? _b : {})) }));
};
exports.default = viteBuildConfig;

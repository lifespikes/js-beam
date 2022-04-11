"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const inertia_react_1 = require("@inertiajs/inertia-react");
const rollupPageResolver_1 = __importDefault(require("./rollupPageResolver"));
const react_dom_1 = require("react-dom");
const simpleInertiaApp = (options) => {
    const defaultResolver = (name) => (0, rollupPageResolver_1.default)(name, options.pages ?? {});
    const defaultSetup = ({ el, App, props }) => (0, react_dom_1.render)(react_1.default.createElement(App, props), el);
    const { resolve, setup, pages, ...opts } = options;
    return (0, inertia_react_1.createInertiaApp)({
        ...opts,
        resolve: resolve ?? defaultResolver,
        setup: setup ?? defaultSetup,
    });
};
exports.default = simpleInertiaApp;
//# sourceMappingURL=simpleInertiaApp.js.map
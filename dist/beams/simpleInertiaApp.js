"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inertia_react_1 = require("@inertiajs/inertia-react");
const rollupPageResolver_1 = __importDefault(require("./rollupPageResolver"));
const simpleInertiaApp = (options) => {
    const defaultResolver = (name) => (0, rollupPageResolver_1.default)(name, options.pages ?? {});
    const { resolve, pages, ...opts } = options;
    return (0, inertia_react_1.createInertiaApp)({
        ...opts,
        resolve: resolve ?? defaultResolver
    });
};
exports.default = simpleInertiaApp;
//# sourceMappingURL=simpleInertiaApp.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viteServerConfig = exports.simpleInertiaApp = exports.viteBuildConfig = exports.rollupPageResolver = void 0;
const rollupPageResolver_1 = __importDefault(require("./beams/rollupPageResolver"));
exports.rollupPageResolver = rollupPageResolver_1.default;
const viteBuildConfig_1 = __importDefault(require("./beams/viteBuildConfig"));
exports.viteBuildConfig = viteBuildConfig_1.default;
const simpleInertiaApp_1 = __importDefault(require("./beams/simpleInertiaApp"));
exports.simpleInertiaApp = simpleInertiaApp_1.default;
const viteServerConfig_1 = __importDefault(require("./beams/viteServerConfig"));
exports.viteServerConfig = viteServerConfig_1.default;

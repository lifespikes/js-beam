"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolve_1 = require("./utils/resolve");
var config_1 = require("./utils/config");
var inertia_1 = require("./utils/inertia");
var http_1 = require("./utils/http");
exports.default = {
    resolve: resolve_1.default,
    config: config_1.default,
    jsBeamApp: inertia_1.default,
    http: http_1.default,
};

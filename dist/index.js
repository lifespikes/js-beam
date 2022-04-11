"use strict";
exports.__esModule = true;
var resolve_1 = require("./utils/resolve");
var config_1 = require("./utils/config");
var createInertiaBeam_1 = require("./utils/createInertiaBeam");
var http_1 = require("./utils/http");
exports["default"] = {
    resolve: resolve_1["default"],
    config: config_1["default"],
    jsBeamApp: createInertiaBeam_1["default"],
    http: http_1["default"]
};

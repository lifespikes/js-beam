"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var dotEnvExpand = require("dotenv-expand");
/* Parse dotenv */
var env = dotenv.config();
dotEnvExpand.expand(env);
var _a = process.env, VITE_URL = _a.VITE_URL, VITE_PORT = _a.VITE_PORT, VITE_PUBLIC_URL = _a.VITE_PUBLIC_URL, VITE_SSL = _a.VITE_SSL, VITE_SSL_KEY = _a.VITE_SSL_KEY, VITE_SSL_CERT = _a.VITE_SSL_CERT;
var origin = VITE_PUBLIC_URL !== null && VITE_PUBLIC_URL !== void 0 ? VITE_PUBLIC_URL : '';
var hostFromUrl = function (url) { return new URL(url).hostname; };
var getSslParams = function () {
    var _a = [VITE_SSL, VITE_SSL_KEY, VITE_SSL_CERT], enabled = _a[0], key = _a[1], cert = _a[2];
    return enabled !== 'true' ? false : key && cert ? { key: key, cert: cert } : true;
};
var getHmrParams = function () { return ({
    host: hostFromUrl(origin)
}); };
var getConfig = function () {
    var _a;
    try {
        return {
            host: hostFromUrl(VITE_URL !== null && VITE_URL !== void 0 ? VITE_URL : ''),
            port: Number(VITE_PORT),
            https: getSslParams(),
            hmr: getHmrParams(),
            /* Mitigate HTTP2 errors */
            proxy: (_a = {}, _a[origin] = origin, _a)
        };
    }
    catch (e) {
        console.log(process.env);
        throw e;
    }
};
exports["default"] = getConfig;

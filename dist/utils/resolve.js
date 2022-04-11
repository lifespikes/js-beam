"use strict";
exports.__esModule = true;
var resolve = function (name, pages) {
    for (var path in pages) {
        if (path.endsWith("".concat(name.replace('.', '/'), ".tsx")) ||
            path.endsWith("".concat(name.replace('.', '/'), "/index.tsx"))) {
            return typeof pages[path] === 'function' ? pages[path]() : pages[path];
        }
    }
    throw new Error("Page not found: ".concat(name));
};
exports["default"] = resolve;

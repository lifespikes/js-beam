"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const rollupPageResolver = (name, pages) => {
  for (const path in pages) {
    if (path.endsWith(`${name.replace('.', '/')}.tsx`) ||
      path.endsWith(`${name.replace('.', '/')}/index.tsx`)) {
      return typeof pages[path] === 'function' ? pages[path]() : pages[path];
    }
  }
  throw new Error(`Page not found: ${name}`);
};
exports.default = rollupPageResolver;
//# sourceMappingURL=rollupPageResolver.js.map

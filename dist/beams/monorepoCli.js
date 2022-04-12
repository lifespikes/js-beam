#!/usr/bin/env node
"use strict";
/**
 * Package creation script for monorepo using
 * yarn workspaces.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const process = __importStar(require("process"));
const fs = __importStar(require("fs"));
const child_process = __importStar(require("child_process"));
const [subCommand, ...args] = process.argv.slice(2);
const getPkgManifest = () => {
    const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    return {
        version: pkg.version ?? '0.0.1',
        workspaces: pkg.workspaces ?? [],
        ...pkg
    };
};
const createPackageCmd = () => {
    const packageName = args[0];
    const directory = args.find(opt => opt.startsWith('--directory'))?.split('=')[1] ?? 'packages';
    console.log(`Creating package ${packageName} in ${directory}`);
    const packagePath = `${directory}/${packageName}`;
    if (fs.existsSync(packagePath)) {
        console.error(`Package ${packageName} already exists`);
        process.exit(1);
    }
    const mainManifest = getPkgManifest();
    const { name, version } = mainManifest;
    const vendor = name.indexOf('@') > -1
        ? name.split('/')[0] : name;
    fs.mkdirSync(packagePath);
    fs.writeFileSync(`${packagePath}/package.json`, JSON.stringify({
        name: `${vendor}/${packageName}`,
        version,
        dependencies: {}
    }, null, 2));
    fs.mkdirSync(`${packagePath}/src`);
    fs.writeFileSync(`${packagePath}/src/index.ts`, `export default () => console.log('Hello world :)');`);
    console.log(`Registering yarn workspace`);
    fs.writeFileSync(`./package.json`, JSON.stringify({
        ...mainManifest,
        workspaces: [
            ...mainManifest.workspaces,
            packagePath,
        ]
    }, null, 2));
    console.log(`Running yarn install`);
    child_process.execSync('yarn install');
    console.log(`Package ${packageName} added to monorepo`);
};
switch (subCommand) {
    case 'create-workspace':
        createPackageCmd();
        break;
    default:
        console.error(`Unknown subcommand ${subCommand}`);
        process.exit(1);
}
//# sourceMappingURL=monorepoCli.js.map
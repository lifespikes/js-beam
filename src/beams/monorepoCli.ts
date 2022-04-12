#!/usr/bin/env node
/**
 * Package creation script for monorepo using
 * yarn workspaces.
 */

import * as process from 'process';
import * as fs from 'fs';
import * as child_process from 'child_process';

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
  const directory = args.find(
    opt => opt.startsWith('--directory')
  )?.split('=')[1] ?? 'packages';

  console.log(`Creating package ${packageName} in ${directory}`);
  const packagePath = `${directory}/${packageName}`;

  if (fs.existsSync(packagePath)) {
    console.error(`Package ${packageName} already exists`);
    process.exit(1);
  }

  const mainManifest = getPkgManifest();
  const {name, version} = mainManifest;

  const vendor = name.indexOf('@') > -1
    ? name.split('/')[0] : name;

  fs.mkdirSync(packagePath);
  fs.writeFileSync(
    `${packagePath}/package.json`,
    JSON.stringify({
      name: `${vendor}/${packageName}`,
      version,
      dependencies: {}
    }, null, 2)
  );
  fs.mkdirSync(`${packagePath}/src`);
  fs.writeFileSync(
    `${packagePath}/src/index.ts`,
    `export default () => console.log('Hello world :)');`
  );

  console.log(`Registering yarn workspace`);

  fs.writeFileSync(
    `./package.json`,
    JSON.stringify({
      ...mainManifest,
      private: true,
      workspaces: [
        ...mainManifest.workspaces,
        packagePath,
      ]
    }, null, 2)
  );

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

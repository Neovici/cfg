/* eslint-disable */
const resolve = require('enhanced-resolve'),
 path = require('path'),
 isCore = require('is-core-module');

exports.interfaceVersion = 2;

exports.resolve = function (source, file, config) {
  let resolvedPath;

  if (isCore(source)) {
    return { found: true, path: null };
  }

  try {
    const cachedFilter = function (pkg, dir) { return packageFilter(pkg, dir, config); };
    resolvedPath = resolve.sync(source, opts(file, config, cachedFilter));
    return { found: true, path: resolvedPath };
  } catch (err) {
    return { found: false };
  }
};

function opts(file, config, packageFilter) {
  return Object.assign({
    // more closely matches Node (#333)
    // plus 'mjs' for native modules! (#939)
    extensions: ['.mjs', '.js', '.json', '.node'],
  },
  config,
  {
    // path.resolve will handle paths relative to CWD
    basedir: path.dirname(path.resolve(file)),
    packageFilter,
  });
}

function identity(x) { return x; }

function packageFilter(pkg, dir, config) {
  let found = false;
  const file = path.join(dir, 'dummy.js');
  if (pkg.module) {
    try {
      resolve.sync(String(pkg.module).replace(/^(?:\.\/)?/, './'), opts(file, config, identity));
      pkg.main = pkg.module;
      found = true;
    } catch (err) {
    }
  }
  if (!found && pkg['jsnext:main']) {
    try {
      resolve.sync(String(pkg['jsnext:main']).replace(/^(?:\.\/)?/, './'), opts(file, config, identity));
      pkg.main = pkg['jsnext:main'];
      found = true;
    } catch (err) {
    }
  }
  return pkg;
}

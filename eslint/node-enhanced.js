/* eslint-env node */
/* eslint-disable import/group-exports */
const { create } = require('enhanced-resolve'),
	path = require('path'),
	isCore = require('is-core-module');

let resolver;

exports.interfaceVersion = 2;

exports.resolve = (source, file, config = {}) => {
	resolver = resolver || create.sync(config);
	if (isCore(source)) {
		return { found: true, path: null };
	}

	try {
		const resolved = resolver({}, path.dirname(file), source);
		return {
			found: true,
			path: resolved,
		};
	} catch (err) {
		return { found: false };
	}
};

#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Check for duplicate singleton packages in package-lock.json
 *
 * Some packages must only exist as a single copy in the dependency tree:
 * - @neovici/cosmoz-* web components register globally via customElements.define()
 * - @pionjs/pion manages component lifecycle and scheduler state
 * - lit-html and lit maintain internal template caches and reactive internals
 * - i18next maintains a singleton translation context
 *
 * Having multiple versions of these packages causes runtime conflicts and errors.
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const LOCKFILE = 'package-lock.json',
	PACKAGE_PATTERNS = [
		/^@neovici\/cosmoz-/u,
		/^@pionjs\/pion$/u,
		/^lit-html$/u,
		/^lit$/u,
		/^i18next$/u,
	],
	PACKAGE_NAME_PATTERN = /node_modules\/(@[^/]+\/[^/]+|[^/]+)$/u;

const readLockfile = (lockfilePath) => {
	if (!existsSync(lockfilePath)) {
		console.error(`ERROR: ${lockfilePath} not found`);
		process.exit(1);
	}

	const lockfile = JSON.parse(readFileSync(lockfilePath, 'utf8'));

	if (lockfile.lockfileVersion < 2) {
		console.error('ERROR: This script requires lockfileVersion >= 2');
		process.exit(1);
	}

	return lockfile;
};

const extractPackageName = (path) => {
	const match = path.match(PACKAGE_NAME_PATTERN);
	return match?.[1];
};

const collectComponentVersions = (packages) => {
	const componentVersions = new Map();

	for (const [path, info] of Object.entries(packages)) {
		if (!path.startsWith('node_modules/')) continue;

		const packageName = extractPackageName(path);
		if (!packageName || !PACKAGE_PATTERNS.some((p) => p.test(packageName))) {
			continue;
		}

		const { version } = info;
		if (!version) continue;

		if (!componentVersions.has(packageName)) {
			componentVersions.set(packageName, []);
		}
		componentVersions.get(packageName).push({ version, path });
	}

	return componentVersions;
};

const findDuplicates = (componentVersions) =>
	[...componentVersions.entries()]
		.filter(([, instances]) => {
			const uniqueVersions = new Set(instances.map((i) => i.version));
			return uniqueVersions.size > 1;
		})
		.map(([packageName, instances]) => ({ packageName, instances }));

const printDuplicates = (duplicates) => {
	console.error('ERROR: Duplicate singleton packages detected!\n');
	console.error('These packages must exist as a single copy. Having multiple');
	console.error('versions will cause runtime conflicts and errors.\n');

	for (const { packageName, instances } of duplicates) {
		console.error(`${packageName}:`);
		for (const { version, path } of instances) {
			console.error(`  - ${version} at ${path}`);
		}
		console.error('');
	}

	console.error('Fix: Update your dependencies to ensure all packages use');
	console.error('compatible version ranges, or add overrides to package.json.\n');
	console.error('Run `npm ls <package-name>` to see the dependency tree');
	console.error('and identify which packages need updating.');
};

const main = () => {
	const lockfilePath = join(process.cwd(), LOCKFILE),
		lockfile = readLockfile(lockfilePath),
		componentVersions = collectComponentVersions(lockfile.packages || {}),
		duplicates = findDuplicates(componentVersions);

	if (duplicates.length === 0) {
		console.log('✓ No duplicate singleton packages found');
		process.exit(0);
	}

	printDuplicates(duplicates);
	process.exit(1);
};

main();

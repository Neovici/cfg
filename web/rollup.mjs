export const nodeResolve = {
	mainFields: ['module', 'jsnext:main', 'main'],
	extensions: ['.ts', '.mjs', '.js', '.cjs', '.json', '.node'],
	dedupe: (pkg) =>
		['@neovici', '@polymer', 'lit', 'haunted', 'i18next'].find((prefix) =>
			pkg.startsWith(prefix)
		),
};

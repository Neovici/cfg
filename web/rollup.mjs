export const nodeResolve = {
	mainFields: ['module', 'jsnext:main', 'main'],
	extensions: ['.ts', '.mjs', '.js', '.cjs', '.json', '.node'],
	dedupe: (pkg) =>
		[
			'@neovici',
			'@polymer',
			'lit',
			'lit-html',
			'haunted',
			'@pionjs/pion',
			'i18next',
		].find((prefix) => pkg.startsWith(prefix)),
};

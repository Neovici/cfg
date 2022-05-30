import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
	open: true,
	preserveSymlinks: true,
	nodeResolve: {
		mainFields: ['module', 'jsnext:main', 'main'],
		dedupe: (pkg) =>
			['@neovici', '@polymer', 'lit', 'haunted'].find((prefix) =>
				pkg.startsWith(prefix)
			),
	},
	plugins: [
		esbuildPlugin({ ts: true }),
	],
};

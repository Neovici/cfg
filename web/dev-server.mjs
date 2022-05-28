import { esbuildPlugin } from '@web/dev-server-esbuild';
import { storybookPlugin } from '@web/dev-server-storybook';

export default {
	preserveSymlinks: true,
	nodeResolve: {
		mainFields: ['module', 'jsnext:main', 'main'],
		dedupe: (pkg) =>
			['@neovici', '@polymer', 'lit', 'haunted'].find((prefix) =>
				pkg.startsWith(prefix)
			),
	},
	plugins: [
		esbuildPlugin({ ts: true, target: 'auto' }),
		storybookPlugin({ type: 'web-components' }),
	],
};

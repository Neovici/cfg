import { storybookPlugin } from '@web/dev-server-storybook';
import { esbuildPlugin } from '@web/dev-server-esbuild';

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
		storybookPlugin({ type: 'web-components' }),
		esbuildPlugin({ ts: true, target: 'auto' }),
	],
};

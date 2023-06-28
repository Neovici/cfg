import { esbuildPlugin } from '@web/dev-server-esbuild';
import { nodeResolve } from './rollup.mjs';

export default {
	open: false,
	preserveSymlinks: true,
	nodeResolve,
	plugins: [esbuildPlugin({ ts: true })],
};

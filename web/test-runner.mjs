import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { nodeResolve } from './rollup.mjs';
import { performer } from './performer.mjs';

export default {
	browsers: process.env.HEADED
		? [
				playwrightLauncher({
					product: 'chromium',
					launchOptions: { headless: false },
				}),
			]
		: [
				playwrightLauncher({ product: 'chromium' }),
				playwrightLauncher({ product: 'firefox', concurrency: 1 }),
			],
	coverageConfig: {
		reportDir: 'coverage',
		threshold: {
			statements: 70,
			branches: 70,
			functions: 50,
			lines: 70,
		},
	},
	files: ['**!(node_modules)/*.test.(j|t)s'],
	testFramework: { config: { ui: 'tdd' } },
	nodeResolve,
	plugins: [esbuildPlugin({ ts: true }), performer()],
};

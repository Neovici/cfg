import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
	nodeResolve: true,
	browsers: process.env.HEADED
		? [
				playwrightLauncher({
					product: 'chromium',
					launchOptions: { headless: false },
				}),
		  ]
		: [
				playwrightLauncher({ product: 'chromium' }),
				playwrightLauncher({ product: 'firefox' }),
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
	plugins: [esbuildPlugin({ ts: true })],
};

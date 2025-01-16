import mochaPlugin from 'eslint-plugin-mocha';

export default [
	mochaPlugin.configs.flat.recommended,

	{
		files: ['**/*.test.+(t|j)s'],

		// env: {
		// 	mocha: true,
		// },
		// plugins: ['mocha'],
		globals: {
			// added by mocha
			test: 'readonly',
			// added by chai
			chai: 'readonly',
			assert: 'readonly',
			expect: 'readonly',
			// added by test-fixture-mocha
			fixture: 'readonly',
			// added by sinon
			sinon: 'readonly',
			// added by wct-mocha
			WCT: 'readonly',
			flush: 'readonly',
		},
		rules: {
			// tests can be as long as they need to be
			'max-lines-per-function': 'off',
			'max-statements': 'off',
			// for chai expect syntax: `expect().to.be.ok`
			'no-unused-expressions': 'off',
		},
	},
];

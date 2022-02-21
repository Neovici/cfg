module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
	plugins: ['html'],
	parser: '@babel/eslint-parser', // so dynamic `import` is recognized
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018,
		requireConfigFile: false
	},
	rules: {
		'accessor-pairs': 'error',
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': ['error', 'consistent'],
		'array-callback-return': 'warn',
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'block-scoped-var': 'error',
		'block-spacing': 'error',
		'brace-style': 'error',
		camelcase: 'error',
		'comma-dangle': ['error', 'never'],
		'comma-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'comma-style': ['error', 'last'],
		complexity: ['warn', 20],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': ['error', 'that'],
		'constructor-super': 'error',
		curly: ['error', 'all'],
		'eol-last': ['error', 'always'],
		eqeqeq: ['error', 'smart'],
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['error', 'always'],
		'func-names': ['error', 'never'],
		'func-style': ['error', 'expression'],
		'guard-for-in': 'error',
		'import/no-extraneous-dependencies': 'warn',
		'import/group-exports': 'error',
		indent: ['error', 'tab'],
		'key-spacing': [
			'error',
			{
				afterColon: true,
				beforeColon: false,
				mode: 'strict'
			}
		],
		'keyword-spacing': [
			'error',
			{
				after: true,
				before: true
			}
		],
		'max-depth': ['error', 4],
		'max-len': [
			'warn',
			{
				code: 160,
				tabWidth: 2
			}
		],
		'max-lines': [
			'warn',
			{
				max: 350,
				skipBlankLines: true,
				skipComments: true
			}
		],
		'max-lines-per-function': [
			'warn',
			{
				max: 50,
				IIFEs: false,
				skipBlankLines: true,
				skipComments: true
			}
		],
		'max-nested-callbacks': ['error', 5],
		'max-params': ['error', 5],
		'max-statements': ['warn', 15],
		'max-statements-per-line': [
			'error',
			{
				max: 1
			}
		],
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': [
			'error',
			{
				capIsNew: true,
				newIsCap: true
			}
		],
		'new-parens': 'error',
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 3
			}
		],
		'no-alert': 'error',
		'no-console': 'error',
		'no-debugger': 'error',
		'no-bitwise': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty': 'error',
		'no-empty-function': 'error',
		'no-eval': 'error',
		'no-extra-bind': 'error',
		'no-extra-parens': 'error',
		'no-global-assign': 'error',
		'no-implicit-globals': 'error',
		'no-invalid-this': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-nested-ternary': 'error',
		'no-param-reassign': 'error',
		'no-redeclare': 'error',
		'no-return-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unused-expressions': 'error',
		'no-unused-vars': 'error',
		'no-use-before-define': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'object-curly-spacing': [
			'warn',
			'always',
			{
				arraysInObjects: false,
				objectsInObjects: false
			}
		],
		'object-shorthand': ['error', 'always'],
		'one-var': [
			'error',
			{
				const: 'consecutive',
				let: 'always',
				var: 'always'
			}
		],
		'one-var-declaration-per-line': ['error', 'always'],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'quote-props': ['error', 'as-needed'],
		quotes: ['error', 'single'],
		radix: 'error',
		'require-unicode-regexp': 'error',
		semi: ['error', 'always'],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'semi-style': ['error', 'last'],
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				asyncArrow: 'always',
				named: 'never'
			}
		],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		strict: 'error',
		'switch-colon-spacing': 'error',
		'template-curly-spacing': ['error', 'always'],
		'valid-jsdoc': 'error'
	},
	overrides: [
		{
			files: ['**/*.test.js'],
			extends: './test'
		}
	]
};

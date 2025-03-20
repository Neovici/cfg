import tseslint from 'typescript-eslint';

export default tseslint.config({
	files: ['**/*.+(ts|tsx)'],
	extends: [tseslint.configs.recommended],
	rules: {
		'import/named': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				caughtErrors: 'none',
			},
		],
		'@typescript-eslint/no-explicit-any': 'warn',
		'import/group-exports': 'off',
		'new-cap': 'off',
		'func-style': 'off',
	},
});

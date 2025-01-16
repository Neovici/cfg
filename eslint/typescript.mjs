import tseslint from 'typescript-eslint';

export default [
	...tseslint.configs.recommended,
	{
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'import/group-exports': 'off',
			'new-cap': 'off',
			'func-style': 'off',
		},
	},
];

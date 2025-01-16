import tseslint from 'typescript-eslint';

export default [
	...tseslint.configs.recommended,
	{
		name: 'ts-overrides',
		files: ['**/*.+(ts|tsx)'],
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

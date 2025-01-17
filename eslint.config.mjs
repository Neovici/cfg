import cfg from './eslint/index.mjs';
import globals from 'globals';

export default [
	...cfg,
	{
		languageOptions: {
			globals: { ...globals.node },
		},
	},
];

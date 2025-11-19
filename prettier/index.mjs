import plugin from 'prettier-plugin-organize-imports';

export default {
	singleQuote: true,
	plugins: [plugin],
	organizeImportsSkipDestructiveCodeActions: true,
};

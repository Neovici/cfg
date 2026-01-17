import { expect } from '@playwright/test';

const perform = async (payload, context) => {
	// eslint-disable-next-line no-eval
	const fn = eval(payload.fn);
	const result = await fn(context, ...payload.args);
	await context.page.evaluate(
		([grabber, result]) => window[grabber](result),
		[payload.resultGrabber, result],
	);
	return true;
};

export const performer = () => ({
	name: 'cz-performer',
	async executeCommand({ command, payload, session }) {
		if (command !== 'cz-perform') return;
		if (session.browser.type !== 'playwright') return;

		const page = session.browser.getPage(session.id);
		return perform(payload, { session, page, expect });
	},
});

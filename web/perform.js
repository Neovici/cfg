import { executeServerCommand } from '@web/test-runner-commands';

let i = 0;
export const perform = async (fn, ...args) => {
	let result;

	const resultGrabber = `__grabCommandResult${++i}`;
	window[resultGrabber] = (_result) => (result = _result);

	await executeServerCommand('cz-perform', {
		fn: fn.toString(),
		args,
		resultGrabber,
	});

	delete window[resultGrabber];
	return result;
};

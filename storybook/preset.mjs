// vite 8 minifies CSS with lightningcss, whose default targets predate
// light-dark(). Left alone it rewrites every call into undefined
// --lightningcss-light/-dark vars, so all of @neovici/cosmoz-tokens'
// semantic colours resolve to transparent. Older browsers are served by the
// tokens fallback.css, so pinning to the light-dark support floor is safe.
const lightDarkFloor = ['chrome123', 'edge123', 'firefox120', 'safari17.5'];

export const viteFinal = async (config) => ({
	...config,
	build: {
		...config.build,
		cssTarget: config.build?.cssTarget ?? lightDarkFloor,
	},
});

---
'@neovici/cfg': minor
---

Add a Storybook preset that stops the CSS minifier downleveling `light-dark()`

vite 8 minifies CSS with lightningcss, whose default targets predate
`light-dark()` support. Left alone it rewrites every call into
`var(--lightningcss-light, A) var(--lightningcss-dark, B)`; neither var is
defined anywhere, so the values concatenate into garbage and every semantic
colour in `@neovici/cosmoz-tokens` v4 computes to transparent. Storybooks look
fine locally on vite 7 and break the moment a lockfile floats to vite 8.

Opt in from `.storybook/main.js`:

```js
addons: ['@neovici/cfg/storybook/preset.mjs'],
```

That pins `build.cssTarget` to the light-dark support floor (Chrome/Edge 123,
Firefox 120, Safari 17.5) so the minifier leaves the calls alone. Older
browsers are covered by the tokens `fallback.css`. A `cssTarget` you set
yourself is left alone.

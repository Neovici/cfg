---
"@neovici/cfg": patch
---

fix(eslint): swap `no-duplicate-imports` for `import/no-duplicates`

The core `no-duplicate-imports` rule reports a type-only import of a
module that is also imported for side effects — e.g. a web-component
test that loads the element via `import '../src/cosmoz-slideout'` and
separately imports `SlideoutBase` as a type. The pairing is
deliberate: bundlers erase named imports whose usages are all in type
positions, so the side-effect import is the only form guaranteed to
load the element and register it with `customElements.define`. The
core rule has no option to allow this, forcing disable comments.

`import/no-duplicates` (of eslint-plugin-import, already a dependency
and already loaded by this config) checks type-only and value imports
in separate buckets, so a side-effect + type pair is not reported,
while duplicate value imports — and the mergeable-import autofix —
still are.

Repos that carry `eslint-disable-next-line no-duplicate-imports`
comments can remove them after upgrading.

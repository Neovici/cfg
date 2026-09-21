---
'@neovici/cfg': minor
---

feat: only check runtime dependencies for duplicates

`check-duplicate-components` now skips lockfile packages flagged `dev`.
npm marks an entry `dev: true` only when it's reachable exclusively via
devDependencies — such packages never ship in a consumer's tree, so
duplicates among them cannot cause runtime
`customElements.define` conflicts.

Runtime dependencies keep the full strictness: any package reachable
through non-dev edges is still validated, including nested copies
caused by range conflicts between runtime deps.

---
"@neovici/cfg": patch
---

Fix changesets/action v2 input names in foundry workflow: `publish` → `publish-script`, `commit` → `commit-message`, `title` → `pr-title`. Restores the "Create Release Pull Request or Publish" step for cfg and all repos consuming `foundry.yml@master`. Fixes FE-1114
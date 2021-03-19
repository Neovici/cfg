# nix
Nix for Neovici frontend development

# flakes
See https://nixos.wiki/wiki/Flakes

# usage
```
# basic shell
nix develop github:Neovici/nix

# test shell
nix develop github:Neovici/nix#testShell --impure -c 'npm test'
```

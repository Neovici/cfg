{
  description = "Basic dependencies";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    android.url = "github:tadfisher/android-nixpkgs";
    android.inputs.nixpkgs.follows = "nixpkgs";
    dev.url = "github:plumelo/dev";
    dev.inputs.nixpkgs.follows = "nixpkgs";
    dev.inputs.flake-utils.follows = "flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils, android, dev }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      rec {
        devShell = dev.lib.shell { inherit pkgs; extraDeps = (with pkgs;[ azure-storage-azcopy ]); };
        packages = {
          patch-playwright = dev.lib.patch-playwright pkgs;
          androidShell =
            let
              android-sdk = android.sdk.${system} (sdkPkgs: with sdkPkgs; [
                cmdline-tools-latest
                build-tools-30-0-2
                platform-tools
                platforms-android-30
                system-images-android-31-google-apis-x86-64
                emulator
              ]);
            in
            pkgs.mkShell rec {
              packages = [ pkgs.jdk android-sdk pkgs.android-studio ];
              JAVA_HOME = pkgs.jdk.home;
              _JAVA_AWT_WM_NONREPARENTING = 1;
              shellHook = ''
                acap() {
                  GRADLE_OPTS="-Dorg.gradle.project.android.aapt2FromMavenOverride=$(realpath $ANDROID_SDK_ROOT/build-tools/*/aapt2)" npx cap $@
                }
              '';
            };
          dotnetShell = pkgs.mkShell rec {
            packages = with pkgs; [
              omnisharp-roslyn
              dotnet-sdk_6
              powershell
              dotnetPackages.Nuget
              msbuild
            ];
          };

        };

      }
    );
}

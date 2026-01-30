{
  lib,
  buildNpmPackage,
  importNpmLock,
}:
let
  name = "crillios-ls";
  pkg = builtins.fromJSON (builtins.readFile ./../package.json);
in
buildNpmPackage {
  pname = name;
  inherit (pkg) version;
  src = ./..;

  npmDeps = importNpmLock { npmRoot = ./..; };
  inherit (importNpmLock) npmConfigHook;
  dontNpmPrune = true;

  preBuild = ''
    npm run langium:generate
  '';

  postInstall = ''
    wrapProgram $out/bin/crillios-ls \
      --add-flags "--stdio"
  '';

  meta = {
    description = "Crill-IOS-Scripting is a Language Server Protocol based tool that optimizes the Cisco IOS scripting experience.";
    homepage = "https://crillios.com";
    license = lib.licenses.mit;
    maintainers = with lib.maintainers; [ MrSom3body ];
    mainProgram = name;
  };
}

{
  self,
  pkgs,
}:
{
  default = pkgs.mkShell {
    packages = builtins.attrValues {
      inherit (pkgs)
        git
        ;
    };

    buildInputs = [
      pkgs.nodePackages_latest.nodejs
      pkgs.typescript
    ];

    shellHook = ''
      ${self.checks.${pkgs.stdenv.hostPlatform.system}.pre-commit-check.shellHook}
    '';
  };
}

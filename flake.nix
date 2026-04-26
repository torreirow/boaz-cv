{
  description = "Boaz CV - Hugo development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_20
            pkgs.git
            pkgs.go
          ];

          shellHook = ''
            echo "🚀 Boaz CV Development Environment"
            echo ""

            # Use the local Hugo binary if available
            if [ -f "./hugo" ]; then
              export PATH="$PWD:$PATH"
              echo "✓ Using Hugo v0.160.1 from ./hugo"
              echo "  Version: $(./hugo version | head -1)"
            else
              echo "⚠ Hugo binary not found in project directory"
              echo "  The hugo binary should be in: $PWD/hugo"
            fi

            # Check if node_modules exists
            if [ ! -d "./node_modules" ]; then
              echo ""
              echo "⚠ Node modules not installed"
              echo "  Run: npm install"
            fi

            echo ""
            echo "Commands:"
            echo "  hugo server    - Start development server"
            echo "  hugo --minify  - Build for production"
            echo "  npm install    - Install Node dependencies"
            echo ""
          '';
        };
      }
    );
}

#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

echo "🏗️  Building Boaz CV site..."

# Clean previous build
rm -rf public/

# Build with system Hugo
hugo --cleanDestinationDir --minify

echo "✅ Build complete!"
echo "   Output: ./public/"

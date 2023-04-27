#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# commit
git add dist && git commit -m "subtree deployment commit"

# deploy
git subtree push --prefix dist origin gh-pages
#!/bin/bash

# Update version in package.json
npm version patch

# Commit changes
git add .
git commit -S -m "Update to version $(node -p "require('./package.json').version") with new features and bug fixes"

# Create signed tag
git tag -s v$(node -p "require('./package.json').version") -m "Version $(node -p "require('./package.json').version")"

# Push changes and tags
git push origin master
git push origin --tags

# Publish to npm
npm publish

#!/bin/bash

# Build the React project
npm run build

# Create a new gh-pages branch and check it out
git checkout -b gh-pages

# Remove everything in the branch except the built files from the dist folder
git rm -r .
git restore --source=HEAD --staged ./dist
git restore --source=HEAD ./dist

# Move the files from dist to the root of the repository
mv ./dist/* ./
rm -r dist

# Commit the changes
git add .
git commit -m "Deploy to GitHub Pages"

# Push the changes to the gh-pages branch on GitHub
git push -f origin gh-pages

# Switch back to the previous branch (master in this case)
git checkout master

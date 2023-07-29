#!/bin/bash

# Remove any existing gh-pages branch
git branch -D gh-pages

# Create a new gh-pages branch and check it out
git checkout -b gh-pages

# Remove everything in the branch except the built files from the client/build folder
git rm -r .
git restore --source=HEAD --staged ./client/build
git restore --source=HEAD ./client/build

# Move the files from client/build to the root of the repository
mv ./client/build/* ./
rm -r client

# Commit the changes
git add .
git commit -m "Deploy to GitHub Pages"

# Push the changes to the gh-pages branch on GitHub
git push -f origin gh-pages

# Switch back to the previous branch
git checkout master  # or the branch you were previously on

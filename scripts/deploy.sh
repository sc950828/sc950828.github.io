#! /bin/bash

npm install

npm run build

cd dist
git init
git add .
git commit -m 'deploy'
git push --force --quiet "https://${TOKEN}@github.com/sc950828/sc950828.github.io.git" master:master


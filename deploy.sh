#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:8ecomeDreamer/8ecomeDreamer.github.io.git

git remote -v

# 移除
git remote rm origin
# 再次连接
git remote add origin git@github.com:8ecomeDreamer/8ecomeDreamer.github.io.git master

git remote -v

# git push --set-upstream git@github.com:8ecomeDreamer/8ecomeDreamer.github.io.git master

cd -
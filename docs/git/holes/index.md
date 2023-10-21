# git 踩坑记录

gitignore屏蔽文件不生效
Git已经跟踪了该文件，而gitignore只能屏蔽上传未跟踪区域的文件
解决办法：
git rm -r --cached  【文件名】
如果需要该文件比较重要，请记得备份！

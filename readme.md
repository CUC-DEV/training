# 安装脚本及配置开发环境（北京时间2015年10月14日07:00:00前完成）
- 阅读[会议总结](http://cuc-dev.github.io/2015/10/12/20151010MeetingSummary/)
- 在VirtualBox中安装Mint Cinnamon 64bit操作系统。
- 在虚拟机中进入Document目录，虚拟机中浏览器打github此页面，拷贝后面出现的命令。 与Document右键打开terminal执行`wget https://raw.githubusercontent.com/CUC-DEV/training/master/install.sh`下载此文件。
- 执行`sudo chmod +x install.sh`，给此脚本添加执行权限
- 执行`./install.sh`安装所需软件
- 关闭terminal，再打开termina（不必重启）
- 执行`wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash`
- `source ~/.zshrc`
- 执行`nvm install 4.1.2`
- `nvm default default stable`,然后执行`node -v`，出现`4.1.2`表示安装成功
- 为github配置ssh，参见[文档](https://help.github.com/articles/generating-ssh-keys/)
- 完成*会议总结*中要求的
- **当夜00：00前简聊发布Daily报告，格式参考Daily话题中已发布的**


# JavaScript练习(2)和git练习(2)（北京时间2015年10月14日14:00:00前提交1-8，北京时间2015年10月15日12:00:00前提交9,10）

1. 务必先配置开发环境，在terminal中执行`node -v`，如有输出如`v4.1.2`，则配置成功
2. 阅读并实践[Git-分支-分支的新建与合并](http://git-scm.com/book/zh/v2/Git-分支-分支的新建与合并)
3. `git fetch`抓取最新的代码
3. 切换项目到master分支 `git checkout master`；更新项目`git pull origin master`
4. 跟踪自己的分支`git checkout --track origin/xxx`
5. 切换项目到自己的分支 `git checkout xxx`;合并master分支到自己分支`git merge master`,如有冲突参考教程
6. 安装mocha框架，`npm install -g mocha`
7. 在项目目录下打开terminal，执行`mocha`，观察输出。正常情况下，所有测试通过并绿色标记。
8. 学习[mocha](http://mochajs.org)测试框架
9. 
 - 补充test目录的task1-test.js里面的单元测试（已被TODO标记），再运行`mocha`直到所有测试通过
 - 按照task1-example.js导出(exports)自己的task1.js中的函数。在task1-test.js引入自己的task1.js，运行测试，修改bug直至所有测试通过
9. 学习task1的单元测试，在test目录下新建task2-test.js和task3-test.js并完成相应的单元测试
10. 学习编辑器code, 如有疑惑，请提交

# Git学习(北京时间2015年10月17日14点前)
1. 仔细阅读并实践git中文教程[前三章](http://git-scm.com/book/zh/v2)
2. 完成一个presentation介绍你了解的git和其主要的部分(20页以内)，完成ppt发送至mengyu.dev@outlook.com

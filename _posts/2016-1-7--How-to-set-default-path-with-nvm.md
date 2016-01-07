---
layout: post
title: 设置nvm默认node版本
date: 2016-01-07
categories: blog
tags: [nvm,node,shell]
description: 第一次接触nvm，感觉安装后每次启动Termianl都要运行一次，install很不方便，而且部分程序无法读取nvm中路径，每次都需要手动配置path，所以特有此文。
---

# 设置nvm默认node版本
- 配置nvm
- 设置node默认版本
- 自动软连接到local目录
## 配置nvm
在shell配置文件中添加以下代码
`
    export NVM_DIR=~/.nvm
    source $(brew --prefix nvm)/nvm.sh
`
## 设置node默认版本
在Termianl中运行一下命令
`
$ nvm alias default stable
`
## 自动软连接到local目录
在shell配置文件中添加以下代码
`
    if [ -e /usr/local/bin/node ]; then
        rm /usr/local/bin/node
        rm /usr/local/bin/npm
    fi
    ln -s $(which node) /usr/local/bin/
    ln -s $(which npm) /usr/local/bin/
`
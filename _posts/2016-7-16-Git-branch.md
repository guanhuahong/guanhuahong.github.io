---
layout: post
title: git分支管理
date: 2016-07-16
categories: blog
tags: [git, branch]
description: git分支全流程
---


git分支管理
=============================================

命令：

```sh
# 创建分支
$ git branch <BranchName>
$ git checkout <BranchName>
# OR
$ git checkout -b <BranchName>

# 查看分支情况
$ git branch
#> * <BranchName>
#>   master

# 提交分支
$ git commit -m 'This is a commit'

# 返回主分支
$ git checkout master


# 合并分支
$ git merge <BranchName>

# 删除分支
$ git branch -d <BranchName>

# 查看分支
$ git branch
#> * master
```
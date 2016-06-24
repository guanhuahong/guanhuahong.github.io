---
layout: post
title: 如何更新GitHub中的博客
date: 2016-06-24
categories: blog
tags: [git, how, blog, update]
description: 很久没更新了，本人也不大开写博客，所以经常忘记各种更新博客的命令，现在把更新的步骤写下来，以后再要更新博客，就不用到处去查找git命令了。
---


clone博客
-----------------------------

1. 第一步clone GitHub上的博客下来，前提你已经在上传了博客网站到GitHub上。

> git clone https://github.com/guanhuahong/guanhuahong.github.io.git


2. 第二部添加博客到_post文件夹中，文件名以日期+名称+.md结尾的格式。

> vim _post 2016-6-24-How-to-update-the-blog.md

3. 添加博客文件到git库中。

> git add _post/2016-6-24-How-to-update-the-blog.md

4. 查看修改和状态

> git status

5. 提交修改

> git commit -m "如何更新博客到GitHub。"

6. 更新到GitHub

> git push origin master

- 第一次提交需要输入GitHub的用户名和密码

到此，一篇博客就添加成功了。
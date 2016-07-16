---
layout: post
title: 修复关于上传无法正常更新博客的bug
date: 2016-06-24
categories: blog
tags: [jekyll]
description: Jekyll 更新换代出现的bug
---


修复关于上传无法正常更新博客的bug
============================

已经很久一段时间没写博客了，今天clone了博客下来，重新开始写博客，但是上传的时候发现github上的博客没有更新。

最终在巧合下解决了这个问题。

发现无法更新博客之后再网上百度了问题，但是因为原因不明，一直无法定位关键字，找不到问题所在。

于是看了Jekyll的问题，想在本地运行一下，运行之后发现报了两个错误：

1. Deprecation: You appear to have pagination turned on, but you haven't included the `jekyll-paginate` gem. Ensure you have `gems: [jekyll-paginate]` in your configuration file.

2. Since v3.0, permalinks for pages in subfolders must be relative to the site source directory, not the parent directory. Check http://jekyllrb.com/docs/upgrading/ for more info.

有错误就百度，发现是因为jekyll升级了还有缺乏控件的问题。

1. 缺乏`jekyll-paginate`控件，在`_config.yml`中添加`gems: [jekyll-paginate]`，并在命令行运行以下命令

    ```
    $ gem install jekyll-paginate
    ```

2. 把`_config.yml`中34行`relative_premalinks: true`注释掉或者删除


完成以上两步重新提交`_config.yml`文件就可以正常生产blog文件了
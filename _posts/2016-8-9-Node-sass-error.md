---
layout: post
title: Node-sass 运行报错 
date: 2016-8-9 
categories: blog
tags: [node, node-sass, sass, binding.node]
description: ERROR in %1 is not a valid Win32 application.
---

Node-sass 运行报错
------------------------------------------

系统信息：

```
{ http_parser: '2.7.0',
  node: '6.2.2',
  v8: '5.0.71.52',
  uv: '1.9.1',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '57.1',
  modules: '48',
  openssl: '1.0.2h' }
```

错误信息：

```
> require('node-sass')
Error: %1 is not a valid Win32 application.
\\?\E:\wwwroot\ReduxBackstage\node_modules\node-sass\vendor\win32-x64-48\binding.node
    at Error (native)
    at Object.Module._extensions..node (module.js:568:18)
    at Module.load (module.js:458:32)
    at tryModuleLoad (module.js:417:12)
    at Function.Module._load (module.js:409:3)
    at Module.require (module.js:468:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (E:\wwwroot\ReduxBackstage\node_modules\node-sass\lib\index.js:24:15)
    at Module._compile (module.js:541:32)
    at Object.Module._extensions..js (module.js:550:10)
```

解决办法：

前往[node-sass-binaries](https://github.com/sass/node-sass-binaries)下载相关二进制文件，替换原来的binding.node文件

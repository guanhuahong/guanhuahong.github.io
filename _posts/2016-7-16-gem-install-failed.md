关于国内gem install失败的原因
=================================================

什么都不说，先上错误信息

```sh
>gem install jekyll
ERROR:  While executing gem ... (OpenSSL::SSL::SSLError)
    SSL_connect SYSCALL returned=5 errno=0 state=SSLv3 read server hello A

>gem install jekyll
ERROR:  While executing gem ... (Gem::RemoteFetcher::UnknownHostError)
    timed out (https://api.rubygems.org/quick/Marshal.4.8/jekyll-3.1.6.gemspec.rz)

>gem update --system
ERROR:  While executing gem ... (Gem::RemoteFetcher::UnknownHostError)
    timed out (https://api.rubygems.org/specs.4.8.gz)
```

此前我的电脑初始化过一次，所有的安装程序都清零了，现在的ruby是新装的，没有把资源链接改成国内的。今天第一次使用就提示SSH错误。百度也百度过了，rubygems.org的issue也看过了（英文多，没看懂），还是无法找到原因。后来注意到`UnknownHostError`这个单词，就ping了一次`api.rubygems.org`发现无法ping得通。以前只是下载慢，不稳定，重来没有试过ping不通的，万恶的墙啊。你又干了什么。只好打开vpn试试，结果成功运行`gem update --system`和`gem install`了，无奈以后没有vpn情况还是赶紧把资源链接改成本地的，就不用那么麻烦了。
下面是我常用的资源链接:

`https://ruby.taobao.org/`

以下代码出自 [https://ruby.taobao.org/](https://ruby.taobao.org/)

```sh
$ gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org
# 请确保只有 ruby.taobao.org
$ gem install rails
```


---
layout:         post
title:          在 mac 上使用 jekyll
description:    在 mac 下搭建jekyll环境,并经行一些配置.这是第一个博客，此文记录博客搭建的过程，属于边搭建边记录。
    搭建的环境为继伟 的MacBook Pro OS X 10.8.3
tags:           jekyll
keywords: mac, jekyll
---
博客搭建
===================
    这是第一个博客，此文记录博客搭建的过程，属于边搭建边记录。
    搭建的环境为继伟 的MacBook Pro OS X 10.8.3

+ ##安装jekyll
    *命令行输入*: gem install jekyll   (gem install jekyll -V 可以查看执行过程)
    *报错*:ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions into the /Library/Ruby/Gems/1.8 directory.
    *原因*:mac自带的ruby是提供给内部程序使用的，需要自己装ruby
    *解决*:mac安装ruby, [参考](http://kingplesk.org/2011/11/mac-%E7%B3%BB%E7%BB%9F%E5%AE%89%E8%A3%85ruby-rvm/):
        1.    user$ sudo bash < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer )
        2.    $ rvm list known  列出所有可以安装的ruby 版本
        3. 确保xcode中的(Preference->Downloads->Command Line Tools)已经安装
        4. 执行安装**开vpn**ruby $ rvm install 2.0.0 -C --with-openssl-dir=$HOME/.rvm/usr
        5. Installing macports.......     等好久.......
           (错误:'requirements_osx_port_install_port'.
            原因:使用了一个beta版的xcode.
            解决:sudo xcode-select -switch /Applications/Xcode.app/)
            *Just wait even longer. Took me about a half hour, hour maybe? I haven't figured out how to get more verbose output on which steps are taking place, but "waiting longer" is a valid step to try.*
        6. $ rvm use 2.0.0 --default   #将ruby改成2.0.0版本
           (又报错,使用--debug看异常Exception `Errno::ENOENT' at /usr/local/rvm/rubies/ruby-2.0.0-p247/lib/ruby/2.0.0/rubygems/remote_fetcher.rb:296 - No such file or directory - /Users/LJW/.gem/specs/rubygems.org%443/latest_specs.4.8)
        7. 6中问题无法解决,睡一觉起来改用ruby 1.9.3,喵的又报错:ERROR:Could not find a valid gem 'jekyll' (>= 0) in any repository
        ERROR:  Possible alternatives: jekyll`
        (解决:后来在[这里](http://blog.ownlinux.net/2012/08/fix-gem-install-jekyll-problem.html/)找到了答案。原来rubygems.org是因为国内网络的原因。至于github的源，打开这个页面可以看到提示，"We've stopped building gems"。
        $ gem sources --remove http://rubygems.org/
        $ gem sources -a http://ruby.taobao.org/
        $ gem sources -l
        *** CURRENT SOURCES ***
        http://ruby.taobao.org    
        $ gem install rack
        确保只有taobao的源，我试过仅仅增加taobao的源还是不可以，使用gem sources --remove url删除其它的源。
        然后执行gem install jekyll
        OK,没问题了.)
    至此,**jekyll安装成功 T^T**桑心啊....折腾....
        LJW-Mac:~ LJW$ jekyll -v
        jekyll 1.2.0
    ***mac每次使用的时候都要rvm use 1.9.3切换到新版本的ruby才可以使用jekyll***

+ ##使用RDiscount,作为Markdown的解释器
    (有好事者做了一个比较，Maruku是纯ruby的Markdown模版解释器；RDiscount则是c写的模版解释器，两者的效率显然不同：

    * BlueCloth: 13.029987s total time, 00.130300s average
    * Maruku: 08.424132s total time, 00.084241s average
    * RDiscount: 00.082019s total time, 00.000820s average)

    如果不需要用默认的模版Maruku,想使用RDiscount，则请安装：
    gem install RDiscount
    (喵的错误:could not find gem RDiscount locally or in a repository
        解决:下载源码自己编译.
            通过[github](https://github.com/davidfstr/rdiscount/)下载源码
            cd rdiscount
            LJW-Mac:rdiscount LJW$ sudo rake install)

参考:[像黑客一样写博客——Jekyll入门](http://www.soimort.org/posts/101/)
    [告别wordpress，拥抱jekyll](http://www.yangzhiping.com/tech/wordpress-to-jekyll.html/)
    [通过GitHub Pages建立个人站点（详细步骤）](http://www.cnblogs.com/purediy/archive/2013/03/07/2948892.html/)



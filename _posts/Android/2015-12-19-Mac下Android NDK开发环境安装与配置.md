---
layout:         post
title:          Mac下Android NDK开发环境安装与配置
description:    之前配置NDK环境的时候后悔没有记录下来, 这次刚好赶上了, 记下来, 免得到时候再百度
tags:           Android, Mac, NDK
keywords:       Android, Mac, NDK
noToc: 			  true
---



#下载NDK
首先到Google官网下载: [NDK](http://developer.android.com/ndk/downloads/index.html)
选择: Mac OS X 64-bit版本

下载完成后:
1. 用terminal cd到刚刚下载的文件路径下
2. 执行`chmod a+x`命令
3. 开始解压

完整命令如下:

```
LJW$ chmod a+x android-ndk-r10c-darwin-x86_64.bin
LJW$ ./android-ndk-r10c-darwin-x86_64.bin
```

#AndroidStudio中配置路径
在项目根路径的`gradle.properties`中添加:

```
ndk.path=/Users/LJW/Documents/local/android-ndk-r10e
```


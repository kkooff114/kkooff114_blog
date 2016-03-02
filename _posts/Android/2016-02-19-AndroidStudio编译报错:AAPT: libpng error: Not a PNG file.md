---
layout:         post
title:          AS编译报错:AAPT: libpng error: Not a PNG file
description:    项目从Eclipse迁移到AS后, 编译报错, 图片报错
tags:           Android
keywords:       Android
noToc: 			  true
---

###最开始报错
>AAPT: /Users/LJW/Documents/workspacewxy/cestbon2/CestbonSales/CestbonTerminal/res/drawable-hdpi/shop_info.png: libpng warning: iCCP: Not recognizing known sRGB profile that has been edited

原因: 
参考1.中有解释

解决方法:
删除png图片内嵌的iCCP profile sRGB
GIMP使用举例：

```
删除内嵌profile, 可先进入Image > Mode > Assign Color Profile并设置为RGB workspace(sRGB built-in), 然后File > Overwrite add_green.png覆盖原来的png文件。

修改内嵌profile, 可进入Image > Mode > Convert to Color Profile, 可选择一种profile。
```

###接着报错
>AAPT err(Facade for 2100261316) : No Delegate set : lost message:libpng error: Not a PNG file
![H$R3}P8@3XD8F0T8LM{VN@6](/media/H$R3%7DP8@3XD8F0T8LM%7BVN@6.jpg)



解决方法:
在build.gradle中添加
	aaptOptions.cruncherEnabled = false
	aaptOptions.useNewCruncher = false
即可.

```
android {
	compileSdkVersion 22
	buildToolsVersion "23.0.1"

	aaptOptions.cruncherEnabled = false
	aaptOptions.useNewCruncher = false

	defaultConfig {
		minSdkVersion 5
		targetSdkVersion 17
}
```





###参考
1. [AS问题解决系列3—iCCP: Not recognizing known sRGB ](http://my.oschina.net/1pei/blog/479162?fromerr=2Cp1AYg9)


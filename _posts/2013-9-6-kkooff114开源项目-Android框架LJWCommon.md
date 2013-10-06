---
layout:         post
title:          kkooff114开源项目--Android框架LJWCommon
description:    以lib的形式,在RTCommon上进行二次开发,集成Android常用的工具类及企业开发所需的一些工具
tags:           android
keywords: kkooff114,android,框架
---
#### Structure
以下是工程包结构，分别封装了自定义的Activity及Adapter，另外在db包下对db4o对象形数据库进行了封装，在pulllistview包下对下拉刷新控件进行了封装，utils包下封装各种类型的工具方法，slidingmenu包下是对滑动菜单SlidingMenu的封装。

- *com.loujiwei.common.activity*
- -LJWActivityManager.java 基础activity管理
- -LJWBaseActivity.java 基础activity类,直接继承他
- -LJWScrollableTabActivity.java *功能编号1.1*基础继承activity
- -TakePhotoActivity.java *功能编号3.1*相册相机获取图片
- *com.loujiwei.common.adapter*
- *com.loujiwei.common.db*
- *com.loujiwei.common.rely*
- *com.loujiwei.common.rely.mobyfactory* 功能编号1.1 依赖包
- *com.loujiwei.common.pulllistview*
- *com.loujiwei.common.utils*
- -CommonLog.java *功能编号2.1*
- -Base64.java *功能编号2.2*
- -Constant.java *功能编号2.3*
- -ImageUtils.java *功能编号2.6*
- *com.slidingmenu.lib*
- *com.slidingmenu.lib.app*

####功能编号
+   1 基础控件
+ + 1.1 ScrollableTabHost
+   2 工具类
+ + 2.1 CommonLog日志类,建议工程中使用该类打印日志
+ + 2.2 Base64工具类,提供Base64加解密
+ + 2.3 Constant工具类,提供常用的如SUCCESS=1等,使用将提高系统效率
+ + 2.4 HttpRequestUtils网络请求工具类,增加需验证报文交互,xml解析,需验证图片下载
+ + 2.5 UpLoadUtils上传工具类(添加支持用户名密码验证)，主要实现了图片的上传，上传过程的初始化监听和上传完成的监听，还有上传耗时的计算 [参考](http://blog.csdn.net/springsky_/article/details/8213898/)
+ + 2.6 ImageUtil图片相关处理
+ 3 功能类
+ + 3.1 相册相机获取图片

## log
+2013-9-6    集成ScrollableTabHost-for-Android
+2013-9-28   加入CommonLog日志类,日志内容更清新,可控制是否输入日志,方便管理
+2013-9-28   梳理增加Base64,Constant,HttpRequestUtils,UpLoadUtils工具类
+2013-10-5   相机相册获取图片
+2013-10-5   ImageUtil功能增加


##goto
1.第三方程序跳转
2.网络监听
3.时间选择,使用反射进行自定义
4.<del>相机,图片处理工具类</del>
5.地图
6.数据库相关操作
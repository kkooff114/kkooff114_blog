---
layout:         post
title:          kkooff114开源项目--Android框架LJWCommon
description:    以lib的形式,在RTCommon上进行二次开发,集成Android常用的工具类及企业开发所需的一些工具
tags:           android
keywords: kkooff114,android,框架
---
#### Structure
以下是工程包结构，分别封装了自定义的Activity及Adapter，另外在db包下对db4o对象形数据库进行了封装，在pulllistview包下对下拉刷新控件进行了封装，utils包下封装各种类型的工具方法，slidingmenu包下是对滑动菜单SlidingMenu的封装。

- -*com.loujiwei.common.activity*
- - - -LJWActivityManager.java 基础activity管理
- - - -LJWBaseActivity.java 基础activity类,直接继承他
- - - -LJWScrollableTabActivity.java *功能编号1*基础继承activity
- -*com.loujiwei.common.adapter*
- -*com.loujiwei.common.db*
- -*com.loujiwei.common.rely*
- -*com.loujiwei.common.rely.mobyfactory* 功能编号1 依赖包
- -*com.loujiwei.common.pulllistview*
- -*com.loujiwei.common.utils*
- -*com.slidingmenu.lib*
- -*com.slidingmenu.lib.app*

####功能编号
+ 1: ScrollableTabHost, 

+ ## log
9.6 集成ScrollableTabHost-for-Android

+ ##goto
1.第三方程序跳转
2.网络监听
3.时间选择,使用反射进行自定义
4自定义log类
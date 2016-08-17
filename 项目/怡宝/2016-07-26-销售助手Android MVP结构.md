---
layout:         post
title:          销售助手Android MVP结构
description:    销售助手Android MVP结构
tags:           项目,架构
keywords:       架构
noToc: 			  true
---
[TOC]

##MVP结构示意图
![](/media/14695020872174.jpg)

注解:
* 所有业务逻辑写在`presenter`中, 页面展示写在`view`中
* `view`层次直接创建`presenter`的实例, 并调用其业务逻辑方法
* `presenter`通过`view`的接口回传业务反馈到界面
* `persenter`直接通过数据层静态方法与数据库交互


##MBO架构
![](/media/14695021005665.jpg)


##代码package组织
![](/media/14695027579001.jpg)

注解:
* 先按功能模块分好几个常用的模块
* `features`中书写业务代码, 并按业务模块分包, 分包层级不宜过多
* 每个features package中按`activity`, `controller`, `iView`进行代码书写, 如有`adapter`也放入该features package

##第三方框架使用
* 网络请求: [retrofit](http://square.github.io/retrofit/)
* 数据库: [realm](https://realm.io/cn/)
* crash上报分析: [Bugly](https://bugly.qq.com)
* 事件总线: [eventbus](https://github.com/greenrobot/EventBus)
* 依赖注入: [butterknife](http://jakewharton.github.io/butterknife/)
* 行为日志记录: [cblogger](https://github.com/kkooff114/CBLogger2)
* 流程控制: [RxJava](https://github.com/ReactiveX/RxJava)
* 图片缓存: [universalimageloader](https://github.com/nostra13/Android-Universal-Image-Loader)


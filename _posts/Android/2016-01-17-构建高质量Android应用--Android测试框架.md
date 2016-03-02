---
layout:         post
title:          构建高质量Android应用--Android测试框架
description:    实践Android测试框架
tags:           Android
keywords:       Android
noToc: 			  true
---

[TOC]

#几款常用测试框架地址
* [Android Testing Support Library](https://google.github.io/android-testing-support-library/)
* [Espresso](https://google.github.io/android-testing-support-library/docs/espresso/index.html)
* [AndroidJUnitRunner](https://google.github.io/android-testing-support-library/docs/androidjunitrunner-guide/index.html)
* [JUnit4 Rules](https://google.github.io/android-testing-support-library/docs/rules/index.html)
* [UI Automator](https://google.github.io/android-testing-support-library/docs/uiautomator/index.html)

#Espresso
## 安装
在`build.gradle`文件中dependencies添加:

```
androidTestCompile 'com.android.support.test.espresso:espresso-core:2.2.1'
androidTestCompile 'com.android.support.test:runner:0.4.1'
```

在`android.defaultConfig`中添加配置

```
testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"
```

###问题
>Warning:Conflict with dependency 'com.android.support:support-annotations'. Resolved versions for app (23.1.1) and test app (23.0.1) differ.

解决方法:
添加

```
androidTestCompile 'com.android.support:support-annotations:23.1.1'
```


##基本概念
* Espresso: 所有View的切入点(如: onView, onData)
* ViewMatchers: 实现了` Matcher<? super View>`接口的集合, 
* ViewActions:
* ViewAssertions




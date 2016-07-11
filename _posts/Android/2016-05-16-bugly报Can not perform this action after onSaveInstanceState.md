---
layout:         post
title:          bugly报Can not perform this action after onSaveInstanceState
description:    使用Realm做了一个项目之后的踩坑总结
tags:           Android
keywords:       Android
noToc: 			  true
---

![](/media/14633627938176.jpg)


是在使用FragmentTransition的 commit方法添加一个Fragment的时候出现的，后来在官网找到了相关的
说明：http://developer.Android.com/reference/android/app/FragmentTransaction.html#commitAllowingStateLoss()
public abstract int commitAllowingStateLoss ()                                    Added in API level 11

Like commit() but allows the commit to be executed after an activity's state is saved. This is dangerous 

because the commit can be lost if the activity needs to later be restored from its state, so this should 

only be used for cases where it is okay for the UI state to change unexpectedly on the user.

大致意思是说我使用的 commit方法是在Activity的onSaveInstanceState()之后调用的，这样会出错，因为onSaveInstanceState
方法是在该Activity即将被销毁前调用，来保存Activity数据的，如果在保存玩状态后再给它添加Fragment就会出错。解决办法就
是把commit（）方法替换成 commitAllowingStateLoss()就行了，其效果是一样的。


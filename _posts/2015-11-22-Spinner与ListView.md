---
layout:         post
title:          Spinner与ListView
description:    Spinner与ListView
tags:           项目
keywords:       项目
noToc: 			  true
---


#几个比较有用的方法
`ListView.getFirstVisiblePosition()`      

返回值是当前可以看到的第一个item，在所有item中（包括看不到的）的位置。

`ListView.getChildAt(int position)`
getChildAt（int position)返回的item都是指的***可视区域***内的第position个元素。

`View.getTop()`
返回值是这个View相对于它的父控件的top值，对于item而言，如果item只有一半显示出来（下半部分），那么返回值应该是 - 这个item的高度

`ListView.getChildCount()`
返回的是这个listView***当前显示***出来的item数量，也就是在屏幕上可以看到的数量。



----

下面开始说明如何判断ListView的第一个item是否完全显示出来

```Java
if (mListView.getFirstVisiblePosition() == 0){  
    // 当前显示出来的第一项就是所有item中的第一项，下面判断是否完全显示  
    if (mListView.getChildAt(0).getTop() >= 0) {  
        // 第一项完全显示出来  
    }  
}  
```


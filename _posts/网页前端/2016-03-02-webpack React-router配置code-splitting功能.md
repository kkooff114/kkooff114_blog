---
layout:         post
title:          webpack React-router配置code-splitting功能
description:    使用react-router开启webpack的code-splitting功能
tags:           React
keywords:       React
noToc: 			  true
---

[TOC]


#什么是code-splitting?

   使用react开发, 编译后会默认生成一个app.js, 如果项目很大的情况下, app.js的size就会随之变得很大, 问题是, app.js在index初次加载的时候就会被加载, 这样用户在第一次登陆网站的时候就会加载很大size的js包, 体验会下降;
		
   因为app.js包含了项目中所有的组件的编译内容, 所以显而易见的解决方案就是讲组件编译的内容拆分开来, 按照页面来加载, 即, 将app.js按照页面功能拆分开.
   
   webpack的code-splitting功能就是实现了这样的需求.
   
#webpack的code-splitting(官方文档)
##定义code-splitting
CommonJs: `require.ensure`

```
require.ensure(dependencies, callback)
```
例子:

```
require.ensure(["module-a", "module-b"], function(require) {
    var a = require("module-a");
    // ...
});
```
注意: `ensure`仅仅加载相关模块, 而不运行他们


AMD: `require`

```
require(dependencies, callback)
```
例子:

```
require(["module-a", "module-b"], function(a, b) {
    // ...
});
```

##Chunk类型
###Entry chunk
包含运行时的相关依赖包, 如果这个chunk中包含了module`0`,那就在运行的时候运行它; 如果不包含, 那就要等他那个包含module`0`的chunks加载完,然后才去运行它
###Normal chunk
不包含运行时的相关组件代码, 纯粹的组件模块代码, chunk的结构依赖chunk加载的算法
###Initial chunk (non-entry)
本质上就是`Normal chunk`, 唯一的区别就是因为他需要在第一次加载的时候加载, 所以本身会做很多的优化

#在React-router中使用

```
import React from 'react';
import {Router, Route, browserHistory} from "react-router"

const router = {
  component: require('./components/AppWrap/AppWrap'),
  childRoutes: [
    {
      path: '/',
      component: require('./components/Index/Index')

    },
    {
      path: '/index',
      component: require('./components/Index/Index')

    },
    {
      path: '/classify',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/Classify/Classify/Classify'))
        })
      }
    },
    {
      path: '/shopcart',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/Shopcart/Shopcart/Shopcart'))
        })
      }
    },
    {
      path: '/my',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/Shopcart/Shopcart/Shopcart'))
        })
      }
    },
    {
      path: '/goodslist',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/GoodsList/GoodsList'))
        })
      }
    },
    {
      path: '/goodsdetail',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/GoodsDetail/GoodsDetail'))
        })
      }
    }
  ]
}

const Routers = (
  <Router history={browserHistory} routes={router}/>
);


export default Routers;
```


#遗留问题
在使用开发模式编译时, 会编译出一个app.js, 4个chunk.js
![](/media/14569067406586.jpg)


但是使用release编译时, 只有一个app.js, 1个chunk.js, 而且随着组件的增多, chunk.js的size增加


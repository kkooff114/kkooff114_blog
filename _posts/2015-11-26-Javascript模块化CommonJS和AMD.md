---
layout:         post
title:          JavaScript模块化CommonJS和AMD
description:    JavaScript模块化CommonJS和AMD
tags:           JavaScript
keywords:       js,模块化,CommonJS,AMD,JavaScript
noToc: 			  true
---

[TOC]

# 模块化概念
NodeJS的诞生, js可以应用于服务器的开发, 之前js只运行在浏览器, 所以复杂度有限, 但是在服务器端, 由于复杂度的提升, 必须采取模块化的开发

## 什么是模块化?
像下面这样调用即是模块化

```JavaScript
var math = require('math');

math.add(2,3); // 5
```

## 模块化的分类

### CommonJS:
CommonJS主要应用于服务器端, 因为像以下方式调用, 程序是同步的, 换句话说,如果`require('math')`没有加载完成, 下面的代码就不会跑.
所以CommonJS不适合在前端使用

```JavaScript
var math = require('math');

math.add(2,3); // 5
```

### AMD:
AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

所以AMD的请求大概长这个样子

```JavaScript
require([module], callback);
```
没错, 他有个callback, 这样就可以实现异步的任务!

`[module]`:是一个数组，里面的成员就是要加载的模块
`callback`:是加载成功之后的回调函数

AMD版本的math.add:

```JavaScript
require(['math'], function (math) {
　　　　math.add(2, 3);
　　});
```

 目前，主要有两个Javascript库实现了AMD规范：`require.js`和`curl.js`



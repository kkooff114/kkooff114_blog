---
layout:         post
title:          自创建React,gulp项目
description:    自创建React,gulp项目
tags:           javascript, React, gulp
keywords:       js, React, gulp
noToc: 			  true
---

# 全局环境安装
* 安装node

* 安装node-gyp

```
$ sudo npm install -g node-gyp
```
* 全局安装gulp

```
$ sudo npm install gulp -g
```

----
* 安装react-router

如果执行`gulp`的时候报错

```
npm WARN EPEERINVALID react-router@1.0.0 requires a peer of history@^1.12.0 but none was installed.
```

则需要安装: 

```
$ npm install history react-router@latest
```

----

# gulp配置

#### .babelrc
在项目根目录创建`.babelrc`文件

```
$ touch .babelrc
```
添加如下内容:

```json
{
  "presets": [
    "es2015",
    "stage-0",
    "react"
  ],
  "plugins": [
    "transform-object-rest-spread",
    "transform-object-assign"
  ]
}
```


#### gulpfile.babel.js
创建gulpfile.babel.js文件

#### 执行gulp
```
$ gulp
```



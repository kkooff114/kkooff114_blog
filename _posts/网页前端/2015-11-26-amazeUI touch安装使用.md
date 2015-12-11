---
layout:         post
title:          amazeUI touch安装使用
description:    amazeUI touch安装使用
tags:           JavaScript
keywords:       js
noToc: 			  true
---

[TOC]

## 开发环境安装
* 安装node

* 安装node-gyp

```
$ sudo npm install -g node-gyp
```
* 全局安装gulp

```
sudo npm install gulp -g
```

----
* 安装react-router

如果报错

```
npm WARN EPEERINVALID react-router@1.0.0 requires a peer of history@^1.12.0 but none was installed.
```

则需要安装: 

```
$ npm install history react-router@latest
```

----

## 安装开发依赖
1. 克隆或下载项目代码[这里](https://github.com/amazeui/amt-starter-kit) ;
2. 进入项目目录, 执行`npm install` ;

## 开发

```
gulp
```



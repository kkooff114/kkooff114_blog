---
layout:         post
title:          react-router URL参数获取
description:    2016-03-02-react-router URL参数获取
tags:           React
keywords:       React
noToc: 			  true
---




##

>'www.g.com/project/goodsDetail/33'

路由配置:
`path: '/goodsdetail/:goodsid'`

获取:
`this.props.params.goodsid`

##

>'www.g.com/project/goodsDetail?id=33'

路由配置
`path: '/goodsdetail'`

获取
`this.props.location.query.id`


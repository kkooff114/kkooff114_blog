---
layout:         post
title:          linux抓包工具tcpdump使用
description:    linux抓包工具tcpdump使用
tags:           linux, tcpdump
keywords:       linux, tcpdump
noToc: 			  true
---

```
tcpdump host 10.0.97.72  and \( port 8080 or 8088 \) -A -vv >>out2.txt
```

`host` 需要监控的ip, 目前即本机ip
`port` 需要监控的port, 目前tomcat的端口
`-A` 以ASCII格式打印出所有分组，并将链路层的头最小化。
`-vv` 输出信息的详细程度, 还可以是`-v`, `-vvv`
`>>out2.txt` 输出到文件out2.txt中


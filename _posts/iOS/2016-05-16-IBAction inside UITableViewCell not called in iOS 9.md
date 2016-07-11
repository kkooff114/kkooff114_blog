---
layout:         post
title:          IBAction inside UITableViewCell not called in iOS 9
description:    在UITableViewCell中通过IBAction添加UIButton的点击事件的时候, 无效. 
tags:           iOS
keywords:       iOS
noToc: 			  true
---

#
在UITableViewCell中通过IBAction添加UIButton的点击事件的时候, 无效.

>I figured out the solution, hopefully this answer will save someone else the time.

>I inherited this code base and it had some issues. The UITableViewCell's that were not working under iOS 9 were not using UITableViewCell nibs w/ a ContentView. Instead, someone had created a UIView nib and then pointed it to a custom UITableViewCell subclass. The nibs did not have a ContentView and apparently iOS 9 is a little more picky about that. This implementation worked fine under iOS 8 and there were no compiler or runtime errors or warnings.

>The solution was to create a new UITableViewCell subclass and let Xcode auto create the nib for it. Then I copied over all of the UI and code from the old nib and pasted it into the ContentView of the new nib. I then had to fix up the constraints and rewire the connections to the custom subclass.

***所以在tableviewcell中添加button还是使用代码添加吧***


[IBAction inside UITableViewCell not called in iOS 9](http://stackoverflow.com/questions/32705171/ibaction-inside-uitableviewcell-not-called-in-ios-9)


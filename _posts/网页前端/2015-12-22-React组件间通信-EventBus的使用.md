---
layout:         post
title:          React组件间通信-EventBus的使用
description:    React组件间通信, EventBus在React中的使用
tags:           React, EventBus, 通信
keywords:       React, EventBus, 通信
noToc: 			  true
---

[TOC]

#前言
在React由于数据的单项流动性, 组件间通信不能很好的被支持, 通信共分为`父子`, `子父`, `组件间`

#父子
此方式直接通过props的方式来传递信息

#子父
还是通过props,将父的函数传给子, 在此函数中, 实现修改父的参数, 这样在子调用函数的时候, 即子向父通信.

#组件间
这是本文的重点, 综合起来,使用EventBus的思想是最简单的
案例:
![](/media/14517926018451.jpg)
在GoodsName中选择商品的数量, 在GoodsToolBar中点击添加购物车按钮的时候, 需获取到GoodsName中商品的数量

GoodsToolBar.js:

```javascript
var goodsNum = {"type":"goodsSelectedNum","target":0};//EventBus传过来的对象, 有type,target,可能还有args这几个字段

// 回调触发的函数, 接受GoodsName传过来得参数
var goodsSelectedNum= function (nums){
    goodsNum = nums;
 }

const GoodsToolBar = React.createClass({

    getInitialState: function () {
        return {
            num: 0
        };
    },

    componentDidMount: function () {
    		//注册监听, 第一个参数是key值,第二个参数是回调函数
        EventBus.addEventListener("goodsSelectedNum", goodsSelectedNum)
    },
    
    return(
    	...
    )
});
```

GoodsName.js:

```javascript
    addNum: function(){

        var n = this.state.num +1;
        this.setState({num: n});
			
			//分发事件, 第一个参数是key值, 第二个是传过去的target, 这里当args使用
        EventBus.dispatch("goodsSelectedNum", n);
    },

    reduceNum: function(){
        var n = this.state.num -1;
        if(n<0){
            n =0;
        }
        this.setState({num: n});
        
			//分发事件, 第一个参数是key值, 第二个是传过去的target, 这里当args使用
        EventBus.dispatch("goodsSelectedNum", this.state.num);
    },
```

分发事件的时候dispatch一共有三个参数`type`, `target`, `args ...`, 如果写了第三个参数, 后面使用JSON.stringify会序列化失败, 所以这里可以直接将参数当成targget中传过去, 反正也不影响, 传过去就行.


#附录
###EventBus API:
```
// adds event listener
// @type - string
// @callback - function
// @scope - the scope where the @callback is defined
EventBus.addEventListener(type, callback, scope)

// removes event listener
// @type - string
// @callback - function
// @scope - the scope where the @callback is defined
EventBus.removeEventListener(type, callback, scope)

// checks for listener
// @type - string
// @callback - function
// @scope - the scope where the @callback is defined
EventBus.hasEventListener(type, callback, scope)

// dispatch an event
// @type - string
// @target - the caller
// @args - pass as many arguments as you want
EventBus.dispatch(type, target, args ...)

// for debugging purpose, it just prints out the added listeners
EventBus.getEvents()
```


###EventBus源码:

```javascript
var EventBusClass = {};
EventBusClass = function() {
	this.listeners = {};
};
EventBusClass.prototype = {
	addEventListener:function(type, callback, scope) {
		var args = [];
		var numOfArgs = arguments.length;
		for(var i=0; i<numOfArgs; i++){
			args.push(arguments[i]);
		}		
		args = args.length > 3 ? args.splice(3, args.length-1) : [];
		if(typeof this.listeners[type] != "undefined") {
			this.listeners[type].push({scope:scope, callback:callback, args:args});
		} else {
			this.listeners[type] = [{scope:scope, callback:callback, args:args}];
		}
	},
	removeEventListener:function(type, callback, scope) {
		if(typeof this.listeners[type] != "undefined") {
			var numOfCallbacks = this.listeners[type].length;
			var newArray = [];
			for(var i=0; i<numOfCallbacks; i++) {
				var listener = this.listeners[type][i];
				if(listener.scope == scope && listener.callback == callback) {
					
				} else {
					newArray.push(listener);
				}
			}
			this.listeners[type] = newArray;
		}
	},
	hasEventListener:function(type, callback, scope) {
		if(typeof this.listeners[type] != "undefined") {
			var numOfCallbacks = this.listeners[type].length;
			if(callback === undefined && scope === undefined){
				return numOfCallbacks > 0;
			}
			for(var i=0; i<numOfCallbacks; i++) {
				var listener = this.listeners[type][i];
				if((scope ? listener.scope == scope : true) && listener.callback == callback) {
					return true;
				}
			}
		}
		return false;
	},
	dispatch:function(type, target) {
		var numOfListeners = 0;
		var event = {
			type:type,
			target:target
		};
		var args = [];
		var numOfArgs = arguments.length;
		for(var i=0; i<numOfArgs; i++){
			args.push(arguments[i]);
		};				
		args = args.length > 2 ? args.splice(2, args.length-1) : [];
		args = [event].concat(args);
		if(typeof this.listeners[type] != "undefined") {
			var numOfCallbacks = this.listeners[type].length;
			for(var i=0; i<numOfCallbacks; i++) {
				var listener = this.listeners[type][i];
				if(listener && listener.callback) {					
					var concatArgs = args.concat(listener.args);
					listener.callback.apply(listener.scope, concatArgs);
					numOfListeners += 1;
				}
			}
		}
	},
	getEvents:function() {
		var str = "";
		for(var type in this.listeners) {
			var numOfCallbacks = this.listeners[type].length;
			for(var i=0; i<numOfCallbacks; i++) {
				var listener = this.listeners[type][i];
				str += listener.scope && listener.scope.className ? listener.scope.className : "anonymous";
				str += " listen for '" + type + "'\n";
			}
		}
		return str;
	}
};
var EventBus = new EventBusClass();
```


参考:
[EventBus github地址](https://github.com/krasimir/EventBus)

[AlloyTeam blog React组件间通信](http://www.alloyteam.com/2015/07/react-zu-jian-jian-tong-xin/)





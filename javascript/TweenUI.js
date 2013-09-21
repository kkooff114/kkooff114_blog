(function(tweenui) {
var timeline;
function startPlaying() { timeline.play(0); }
function g(name) { name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"); var results = regex.exec(window.location.search); if(results == null) return ""; else return decodeURIComponent(results[1].replace(/\+/g, " ")); }
var loadcnt = 3; function tui_go() { --loadcnt; if (loadcnt==0) { var l = g("l"); var ctl = document.getElementById("tui-ctl"); if (l!="" && ctl) ctl.href=l; if (typeof(tweenui.exp) == "function") { tweenui.exp(); } TweenLite.set(document.getElementById("tui-ct"), {css: {alpha: 0}}); startPlaying(); }}
tweenui.init = function() {
timeline = new TimelineLite({paused:true, onComplete:startPlaying});
TweenLite.defaultOverwrite = "none";
timeline.insert(new TweenLite({}, 0.0, {}), 4.0);

// var mylayer_1=document.getElementById("header");
// timeline.insert(TweenLite.to(mylayer_1, 2,{css: {top:200,left:0},ease: Bounce.easeOut}),0.5);
// TweenLite.set(mylayer_1, {css: {autoAlpha: 1.0, left: 0, top: 0, scale: 1.0, rotation: 0.0}});

var layer_1 = document.getElementById("tui-9");
timeline.insert(TweenLite.to(layer_1, 0.74, {css: {top: 305, left: 382}, ease: Bounce.easeOut}), 3.6);//第二个时间是等待时间
timeline.insert(TweenLite.to(layer_1, 0.42, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 3.6);
timeline.insert(TweenLite.to(layer_1, 1.74, {css: {top: -10, left: 23}, ease: Linear.easeNone}), 6.1);//移动
timeline.insert(TweenLite.to(layer_1, 1.74, {css: {scale: 0.6}, ease: Linear.easeNone}), 6.1);//变小
TweenLite.set(layer_1, {css: {autoAlpha: 0.0, left: 382, top: -84, scale: 1.0, rotation: 0.0}});
var layer_2 = document.getElementById("tui-8");
timeline.insert(TweenLite.to(layer_2, 0.72, {css: {top: 283, left: 643}, ease: Power4.easeOut}), 1.2);
timeline.insert(TweenLite.to(layer_2, 0.36, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 1.2);
timeline.insert(TweenLite.to(layer_2, 0.44, {css: {scale: 1.84}, ease: Power4.easeOut}), 2.3);
timeline.insert(TweenLite.to(layer_2, 0.6, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 2.26);
timeline.insert(TweenLite.to(layer_2, 0.6, {css: {rotation: 720.0}, ease: Power1.easeOut}), 2.24);
TweenLite.set(layer_2, {css: {autoAlpha: 0.0, left: 930, top: 284, scale: 0.6, rotation: 0.0}});
var layer_3 = document.getElementById("tui-7");
timeline.insert(TweenLite.to(layer_3, 1.08, {css: {scale: 1.7}, ease: Elastic.easeOut}), 0.14);
timeline.insert(TweenLite.to(layer_3, 0.5, {css: {scale: 4.0}, ease: Power4.easeOut}), 2.3);
timeline.insert(TweenLite.to(layer_3, 0.6, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 2.3);
timeline.insert(TweenLite.to(layer_3, 0.56, {css: {rotation: 720.0}, ease: Power1.easeOut}), 2.3);
TweenLite.set(layer_3, {css: {autoAlpha: 1.0, left: 492, top: 228, scale: 0.4, rotation: 0.0}});
tui_go();
}
WebFontConfig = {google: { families: ['Lora', 'Permanent Marker'] }, active: function() { tui_go(); },inactive: function() { tui_go(); } };(function() {var wf = document.createElement('script');wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +'://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js';wf.type = 'text/javascript';wf.async = 'true';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(wf, s);})();
var imgcnt = 1;
tweenui.imgcntd = function(e) { var id = e.id.replace(/[^0-9.]/g, "");e.parentNode.removeChild(e);document.getElementById('tui-' + id).appendChild(e); --imgcnt; if (imgcnt==0) { tui_go(); }}
}(window.tweenui = window.tweenui || {}));
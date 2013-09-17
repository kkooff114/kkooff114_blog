(function(tweenui) {
var timeline;
function startPlaying() { timeline.play(0); }
function g(name) { name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"); var results = regex.exec(window.location.search); if(results == null) return ""; else return decodeURIComponent(results[1].replace(/\+/g, " ")); }
var loadcnt = 3; function tui_go() { --loadcnt; if (loadcnt==0) { var l = g("l"); var ctl = document.getElementById("tui-ctl"); if (l!="" && ctl) ctl.href=l; if (typeof(tweenui.exp) == "function") { tweenui.exp(); } TweenLite.set(document.getElementById("tui-ct"), {css: {alpha: 0}}); startPlaying(); }}
tweenui.init = function() {
timeline = new TimelineLite({paused:true, onComplete:startPlaying});
TweenLite.defaultOverwrite = "none";
timeline.insert(new TweenLite({}, 0.0, {}), 10.0);
var layer_1 = document.getElementById("tui-9");
timeline.insert(TweenLite.to(layer_1, 0.7414829659318637, {css: {top: 185, left: 282}, ease: Bounce.easeOut}), 3.6072144288577155);
timeline.insert(TweenLite.to(layer_1, 0.42084168336673344, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 3.6072144288577155);
timeline.insert(TweenLite.to(layer_1, 0.7414829659318637, {css: {top: -22, left: -13}, ease: Power1.easeOut}), 6.092184368737475);
timeline.insert(TweenLite.to(layer_1, 0.5, {css: {scale: 0.5057471264367817}, ease: Power1.easeOut}), 6.293587174348698);
TweenLite.set(layer_1, {css: {autoAlpha: 0.0, left: 282, top: -84, scale: 1.0, rotation: 0.0}});
var layer_2 = document.getElementById("tui-8");
timeline.insert(TweenLite.to(layer_2, 0.721442885771543, {css: {top: 253, left: 543}, ease: Power4.easeOut}), 1.1823647294589177);
timeline.insert(TweenLite.to(layer_2, 0.3607214428857715, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 1.1823647294589177);
timeline.insert(TweenLite.to(layer_2, 0.4408817635270541, {css: {scale: 1.839080459770115}, ease: Power4.easeOut}), 2.284569138276553);
timeline.insert(TweenLite.to(layer_2, 0.6012024048096192, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 2.2645290581162323);
timeline.insert(TweenLite.to(layer_2, 0.6012024048096192, {css: {rotation: 720.0}, ease: Power1.easeOut}), 2.244488977955912);
TweenLite.set(layer_2, {css: {autoAlpha: 0.0, left: 830, top: 254, scale: 0.5977011494252874, rotation: 0.0}});
var layer_3 = document.getElementById("tui-7");
timeline.insert(TweenLite.to(layer_3, 1.0821643286573146, {css: {scale: 1.7011494252873562}, ease: Elastic.easeOut}), 0.1402805611222445);
timeline.insert(TweenLite.to(layer_3, 0.501002004008016, {css: {scale: 4.0}, ease: Power4.easeOut}), 2.284569138276553);
timeline.insert(TweenLite.to(layer_3, 0.6012024048096192, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 2.3046092184368736);
timeline.insert(TweenLite.to(layer_3, 0.561122244488978, {css: {rotation: 720.0}, ease: Power1.easeOut}), 2.3046092184368736);
TweenLite.set(layer_3, {css: {autoAlpha: 1.0, left: 392, top: 198, scale: 0.41379310344827586, rotation: 0.0}});
tui_go();
}
WebFontConfig = {google: { families: ['Lora', 'Permanent Marker'] }, active: function() { tui_go(); },inactive: function() { tui_go(); } };(function() {var wf = document.createElement('script');wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +'://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js';wf.type = 'text/javascript';wf.async = 'true';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(wf, s);})();
var imgcnt = 1;
tweenui.imgcntd = function(e) { var id = e.id.replace(/[^0-9.]/g, "");e.parentNode.removeChild(e);document.getElementById('tui-' + id).appendChild(e); --imgcnt; if (imgcnt==0) { tui_go(); }}
}(window.tweenui = window.tweenui || {}));
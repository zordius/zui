YUI.add("gallery-zui-rascroll",function(e,t){var n=0,r=!1,i=!1,s=function(){s.superclass.constructor.apply(this,arguments)};s.NAME="pluginRAScroll",s.NS="zras",s.ATTRS={horizontal:{value:!0,lazyAdd:!1,validator:e.Lang.isBoolean,setter:function(e){return this._hori=e,e}},cooperation:{value:!1,lazyAdd:!1,validator:e.Lang.isBoolean,setter:function(e){return this._coop=e,e}}},e.namespace("zui").RAScroll=e.extend(s,e.Plugin.Base,{initializer:function(){this._host=this.get("host"),this._node=this._host.get("boundingBox"),this._cnt=this._host.get("contentBox"),this._start=!1,this._hori||this._cnt.setStyles({overflowX:"hidden",height:"auto"}),this._handles.push(new e.EventHandle([this._node.on("gesturemovestart",this.handleGestureMoveStart),this._node.on("gesturemove",e.bind(this.handleGestureMove,this)),this._cnt.on("gesturemoveend",e.bind(this.handleGestureMoveEnd,this),{standAlone:!0})])),this.syncScroll()},handleGestureMoveStart:function(){n++},handleGestureMove:function(e){if(this._start)return;this._start=!0,r||(i=Math.abs(this._host._startClientX-e.clientX)>Math.abs(this._host._startClientY-e.clientY),r=!0);if(this._coop&&n<2)return;(this._hori?!i:i)?this._host.set("disabled",!0):e.preventDefault()},handleGestureMoveEnd:function(){this._start=!1,r=!1,n=0;if(this._hori?!i:i)e.UA.ipad+e.UA.iphone+e.UA.ipod>=6?this._host.set("disabled",!1):e.later(1,this._host,this._host.set,["disabled",!1])},syncScroll:function(){this._hori?this._node.set("offsetHeight",this._node.get("scrollHeight")):this.syncWidth()},syncWidth:function(){var e=this._cnt,t=this._node.get("scrollWidth"),n=this._node.get("offsetWidth"),r=e.get("offsetWidth");r&&t>n&&e.set("offsetWidth",r+n-t)}})},"@VERSION@",{skinnable:!1,requires:["scrollview"]});

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define('editor',[],e):"object"==typeof exports?exports.wangEditor=e():t.wangEditor=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=126)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){t.exports=n(127)},function(t,e,n){"use strict";var o=n(0),r=o(n(108)),i=o(n(81)),a=o(n(82)),u=o(n(50)),l=o(n(109)),c=o(n(23)),s=o(n(40)),f=o(n(6)),d=o(n(113)),p=o(n(1));(0,p.default)(e,"__esModule",{value:!0}),e.DomElement=void 0;var A=n(7),h=[];function v(t){var e=[],n=[];return e=(0,d.default)(t)?t:t.split(";"),(0,f.default)(e).call(e,(function(t){var e,o=(0,s.default)(e=t.split(":")).call(e,(function(t){return(0,c.default)(t).call(t)}));2===o.length&&n.push(o[0]+":"+o[1])})),n}var g=function(){function t(e){if(this.selector="",this.elems=[],this.length=this.elems.length,this.dataSource=new l.default,e){if(e instanceof t)return e;var n=[];this.selector=e;var o=e.nodeType;if(9===o)n=[e];else if(1===o)n=[e];else if(function(t){return!!t&&(t instanceof HTMLCollection||t instanceof NodeList)}(e))n=A.toArray(e);else if(e instanceof Array)n=e;else if("string"==typeof e){var r;e=(0,c.default)(r=e.replace("/\n/mg","")).call(r),n=0===(0,u.default)(e).call(e,"<")?function(t){var e=document.createElement("div");e.innerHTML=t;var n=e.children;return A.toArray(n)}(e):function(t){var e=document.querySelectorAll(t);return A.toArray(e)}(e)}var i=n.length;if(!i)return this;for(var a=0;a<i;a++)this.elems.push(n[a]);this.length=i}}return(0,p.default)(t.prototype,"id",{get:function(){return this.elems[0].id},enumerable:!1,configurable:!0}),t.prototype.forEach=function(t){for(var e=0;e<this.length;e++){var n=this.elems[e];if(!1===t.call(n,n,e))break}return this},t.prototype.clone=function(t){var e;void 0===t&&(t=!1);var n=[];return(0,f.default)(e=this.elems).call(e,(function(e){n.push(e.cloneNode(!!t))})),m(n)},t.prototype.get=function(t){void 0===t&&(t=0);var e=this.length;return t>=e&&(t%=e),m(this.elems[t])},t.prototype.first=function(){return this.get(0)},t.prototype.last=function(){var t=this.length;return this.get(t-1)},t.prototype.on=function(t,e,n){var o;return t?("function"==typeof e&&(n=e,e=""),(0,f.default)(o=this).call(o,(function(o){if(e){var r=function(t){var o=t.target;o.matches(e)&&n.call(o,t)};o.addEventListener(t,r),h.push({elem:o,selector:e,fn:n,agentFn:r})}else o.addEventListener(t,n)}))):this},t.prototype.off=function(t,e,n){var o;return t?("function"==typeof e&&(n=e,e=""),(0,f.default)(o=this).call(o,(function(o){if(e){for(var r=-1,i=0;i<h.length;i++){var u=h[i];if(u.selector===e&&u.fn===n&&u.elem===o){r=i;break}}if(-1!==r){var l=(0,a.default)(h).call(h,r,1)[0].agentFn;o.removeEventListener(t,l)}}else o.removeEventListener(t,n)}))):this},t.prototype.attr=function(t,e){var n;return null==e?this.elems[0].getAttribute(t)||"":(0,f.default)(n=this).call(n,(function(n){n.setAttribute(t,e)}))},t.prototype.removeAttr=function(t){var e;(0,f.default)(e=this).call(e,(function(e){e.removeAttribute(t)}))},t.prototype.addClass=function(t){var e;return t?(0,f.default)(e=this).call(e,(function(e){if(e.className){var n=e.className.split(/\s/);n=(0,i.default)(n).call(n,(function(t){return!!(0,c.default)(t).call(t)})),(0,u.default)(n).call(n,t)<0&&n.push(t),e.className=n.join(" ")}else e.className=t})):this},t.prototype.removeClass=function(t){var e;return t?(0,f.default)(e=this).call(e,(function(e){if(e.className){var n=e.className.split(/\s/);n=(0,i.default)(n).call(n,(function(e){return!(!(e=(0,c.default)(e).call(e))||e===t)})),e.className=n.join(" ")}})):this},t.prototype.hasClass=function(t){if(void 0===t&&(t=""),!t)return!1;var e=this.elems[0];if(!e.className)return!1;var n=e.className.split(/\s/);return(0,r.default)(n).call(n,t)},t.prototype.css=function(t,e){var n,o;return o=""==e?"":t+":"+e+";",(0,f.default)(n=this).call(n,(function(e){var n,r=(0,c.default)(n=e.getAttribute("style")||"").call(n);if(r){var i=v(r);i=(0,s.default)(i).call(i,(function(e){return 0===(0,u.default)(e).call(e,t)?o:e})),""!=o&&(0,u.default)(i).call(i,o)<0&&i.push(o),""==o&&(i=v(i)),e.setAttribute("style",i.join("; "))}else e.setAttribute("style",o)}))},t.prototype.getBoundingClientRect=function(){return this.elems[0].getBoundingClientRect()},t.prototype.show=function(){return this.css("display","block")},t.prototype.hide=function(){return this.css("display","none")},t.prototype.children=function(){var t=this.elems[0];return t?m(t.children):null},t.prototype.childNodes=function(){var t=this.elems[0];return t?m(t.childNodes):null},t.prototype.append=function(t){var e;return(0,f.default)(e=this).call(e,(function(e){(0,f.default)(t).call(t,(function(t){e.appendChild(t)}))}))},t.prototype.remove=function(){var t;return(0,f.default)(t=this).call(t,(function(t){if(t.remove)t.remove();else{var e=t.parentElement;e&&e.removeChild(t)}}))},t.prototype.isContain=function(t){var e=this.elems[0],n=t.elems[0];return e.contains(n)},t.prototype.getSizeData=function(){return this.elems[0].getBoundingClientRect()},t.prototype.getNodeName=function(){return this.elems[0].nodeName},t.prototype.getClientHeight=function(){return this.elems[0].clientHeight},t.prototype.find=function(t){return m(this.elems[0].querySelectorAll(t))},t.prototype.text=function(t){var e;return t?(0,f.default)(e=this).call(e,(function(e){e.innerHTML=t})):this.elems[0].innerHTML.replace(/<[^>]+>/g,(function(){return""}))},t.prototype.html=function(t){var e=this.elems[0];return t?(e.innerHTML=t,this):e.innerHTML},t.prototype.val=function(){var t,e=this.elems[0];return(0,c.default)(t=e.value).call(t)},t.prototype.focus=function(){var t;return(0,f.default)(t=this).call(t,(function(t){t.focus()}))},t.prototype.prev=function(){return m(this.elems[0].previousElementSibling)},t.prototype.next=function(){return m(this.elems[0].nextElementSibling)},t.prototype.parent=function(){return m(this.elems[0].parentElement)},t.prototype.parentUntil=function(t,e){var n=e||this.elems[0];if("BODY"===n.nodeName)return null;var o=n.parentElement;return null==o?null:o.matches(t)?m(o):this.parentUntil(t,o)},t.prototype.equal=function(e){return e instanceof t?this.elems[0]===e.elems[0]:e instanceof HTMLElement&&this.elems[0]===e},t.prototype.insertBefore=function(t){var e,n=m(t).elems[0];return n?(0,f.default)(e=this).call(e,(function(t){n.parentNode.insertBefore(t,n)})):this},t.prototype.insertAfter=function(t){var e,n=m(t).elems[0],o=n&&n.nextSibling;return n?(0,f.default)(e=this).call(e,(function(t){var e=n.parentNode;o?e.insertBefore(t,o):e.appendChild(t)})):this},t.prototype.data=function(t,e){if(null==e)return this.dataSource.get(t);this.dataSource.set(t,e)},t.prototype.getNodeTop=function(t){if(this.length<1)return this;var e=this.parent();return t.$textElem.equal(e)?this:e.getNodeTop(t)},t.prototype.getOffsetData=function(){var t=this.elems[0];return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight,parent:t.offsetParent}},t}();function m(t){return new g(t)}e.DomElement=g,e.default=m},function(t,e,n){t.exports=n(174)},function(t,e,n){t.exports=n(297)},function(t,e,n){"use strict";var o=n(8),r=n(65).f,i=n(90),a=n(11),u=n(44),l=n(18),c=n(15),s=function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var n,f,d,p,A,h,v,g,m=t.target,y=t.global,w=t.stat,x=t.proto,b=y?o:w?o[m]:(o[m]||{}).prototype,E=y?a:a[m]||(a[m]={}),_=E.prototype;for(d in e)n=!i(y?d:m+(w?".":"#")+d,t.forced)&&b&&c(b,d),A=E[d],n&&(h=t.noTargetGet?(g=r(b,d))&&g.value:b[d]),p=n&&h?h:e[d],n&&typeof A==typeof p||(v=t.bind&&n?u(p,o):t.wrap&&n?s(p):x&&"function"==typeof p?u(Function.call,p):p,(t.sham||p&&p.sham||A&&A.sham)&&l(v,"sham",!0),E[d]=v,x&&(c(a,f=m+"Prototype")||l(a,f,{}),a[f][d]=p,t.real&&_&&!_[d]&&l(_,d,p)))}},function(t,e,n){t.exports=n(169)},function(t,e,n){"use strict";var o=n(0),r=o(n(113)),i=o(n(114)),a=o(n(118)),u=o(n(63)),l=o(n(249)),c=o(n(1)),s=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var o=Array(t),r=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,r++)o[r]=i[a];return o};(0,c.default)(e,"__esModule",{value:!0}),e.toArray=e.deepClone=e.isFunction=e.debounce=e.throttle=e.arrForEach=e.forEach=e.replaceSpecialSymbol=e.replaceHtmlSymbol=e.getRandom=e.UA=void 0;var f=function(){function t(){this._ua=navigator.userAgent;var t=this._ua.match(/(Edge?)\/(\d+)/);this.isOldEdge=!!(t&&"Edge"==t[1]&&(0,l.default)(t[2])<19),this.isFirefox=!(!/Firefox\/\d+/.test(this._ua)||/Seamonkey\/\d+/.test(this._ua))}return t.prototype.isIE=function(){return"ActiveXObject"in window},t.prototype.isWebkit=function(){return/webkit/i.test(this._ua)},t}();e.UA=new f,e.getRandom=function(t){var e;return void 0===t&&(t=""),t+(0,u.default)(e=Math.random().toString()).call(e,2)},e.replaceHtmlSymbol=function(t){return t.replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;").replace(/(\r\n|\r|\n)/g,"<br/>")},e.replaceSpecialSymbol=function(t){return t.replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"')},e.forEach=function(t,e){for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n))if(!1===e(n,t[n]))break}},e.arrForEach=function(t,e){var n,o,r=t.length||0;for(n=0;n<r&&(o=t[n],!1!==e.call(t,o,n));n++);},e.throttle=function(t,e){void 0===e&&(e=200);var n=!1;return function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];n||(n=!0,(0,a.default)((function(){n=!1,t.call.apply(t,s([null],o))}),e))}},e.debounce=function(t,e){void 0===e&&(e=200);var n=0;return function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];n&&window.clearTimeout(n),n=window.setTimeout((function(){n=0,t.call.apply(t,s([null],o))}),e)}},e.isFunction=function(t){return"function"==typeof t},e.deepClone=function t(e){if("object"!==(0,i.default)(e)||"function"==typeof e||null===e)return e;var n;for(var o in(0,r.default)(e)&&(n=[]),(0,r.default)(e)||(n={}),e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=t(e[o]));return n},e.toArray=function(t){return(0,u.default)(Array.prototype).call(t)}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(130))},function(t,e,n){var o=n(8),r=n(68),i=n(15),a=n(57),u=n(70),l=n(95),c=r("wks"),s=o.Symbol,f=l?s:s&&s.withoutSetter||a;t.exports=function(t){return i(c,t)||(u&&i(s,t)?c[t]=s[t]:c[t]=f("Symbol."+t)),c[t]}},function(t,e,n){var o=n(11),r=n(15),i=n(85),a=n(16).f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||a(e,t,{value:i.f(t)})}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(12);t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(14),r=n(89),i=n(20),a=n(52),u=Object.defineProperty;e.f=o?u:function(t,e,n){if(i(t),e=a(e,!0),i(n),r)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(11);t.exports=function(t){return o[t+"Prototype"]}},function(t,e,n){var o=n(14),r=n(16),i=n(42);t.exports=o?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){"use strict";var o,r=n(0),i=r(n(6)),a=r(n(1)),u=r(n(3)),l=r(n(4)),c=(o=function(t,e){return(o=l.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,u.default)(e):(n.prototype=e.prototype,new n)}),s=function(t){return t&&t.__esModule?t:{default:t}};(0,a.default)(e,"__esModule",{value:!0});var f=s(n(2)),d=s(n(86)),p=s(n(123)),A=function(t){function e(e,n,o){var r=t.call(this,e,n)||this;o.title=n.i18next.t("menus.dropListMenu."+o.title);var a,u="zh-CN"===n.config.lang?"":"w-e-drop-list-tl";""!==u&&"list"===o.type&&(0,i.default)(a=o.list).call(a,(function(t){var e=t.$elem,n=f.default(e.children());if(n.length>0){var o=null==n?void 0:n.getNodeName();o&&"I"===o&&e.addClass(u)}}));var l=new p.default(r,o);return r.dropList=l,e.on("mouseenter",(function(){var t;null!=n.selection.getRange()&&(e.css("z-index",n.zIndex.get("menu")),(0,i.default)(t=n.txt.eventHooks.dropListMenuHoverEvents).call(t,(function(t){return t()})),l.showTimeoutId=window.setTimeout((function(){l.show()}),200))})).on("mouseleave",(function(){e.css("z-index","auto"),l.hideTimeoutId=window.setTimeout((function(){l.hide()}))})),r}return c(e,t),e}(d.default);e.default=A},function(t,e,n){var o=n(13);t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function u(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],l=e.base?i[0]+e.base:i[0],c=n[l]||0,s="".concat(l," ").concat(c);n[l]=c+1;var f=u(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:v(d,e),references:1}),o.push(s)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function d(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var A=null,h=0;function v(t,e){var n,o,r;if(e.singleton){var i=h++;n=A||(A=c(e)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=c(e),o=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=u(n[o]);a[r].references--}for(var i=l(t,e),c=0;c<n.length;c++){var s=u(n[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(l," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var a,u,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){t.exports=n(202)},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=function(t){function e(e,n){return t.call(this,e,n)||this}return l(e,t),e}(c(n(86)).default);e.default=s},function(t,e,n){var o=n(66),r=n(43);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(14),r=n(12),i=n(15),a=Object.defineProperty,u={},l=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],c=!!i(e,"ACCESSORS")&&e.ACCESSORS,s=i(e,0)?e[0]:l,f=i(e,1)?e[1]:void 0;return u[t]=!!n&&!r((function(){if(c&&!o)return!0;var t={length:-1};c?a(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,s,f)}))}},function(t,e,n){"use strict";var o=n(0),r=o(n(121)),i=o(n(64)),a=o(n(6)),u=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var l=u(n(2)),c=n(30),s=function(){function t(e,n){this.menu=e,this.conf=n,this.$container=l.default('<div class="w-e-panel-container"></div>');var o=e.editor;o.txt.eventHooks.clickEvents.push(t.hideCurAllPanels),o.txt.eventHooks.toolbarClickEvents.push(t.hideCurAllPanels),o.txt.eventHooks.dropListMenuHoverEvents.push(t.hideCurAllPanels)}return t.prototype.create=function(){var e=this,n=this.menu;if(!t.createdMenus.has(n)){var o=this.conf,r=this.$container,u=o.width||300,s=n.editor.$toolbarElem.getBoundingClientRect(),f=n.$elem.getBoundingClientRect(),d=s.height+s.top-f.top,p=(s.width-u)/2+s.left-f.left;r.css("width",u+"px").css("margin-top",d+"px").css("margin-left",p+"px").css("z-index",n.editor.zIndex.get("panel"));var A=l.default('<i class="w-e-icon-close w-e-panel-close"></i>');r.append(A),A.on("click",(function(){e.remove()}));var h=l.default('<ul class="w-e-panel-tab-title"></ul>'),v=l.default('<div class="w-e-panel-tab-content"></div>');r.append(h).append(v);var g=o.height;g&&v.css("height",g+"px").css("overflow-y","auto");var m=o.tabs||[],y=[],w=[];(0,a.default)(m).call(m,(function(t,e){if(t){var n=t.title||"",o=t.tpl||"",r=l.default('<li class="w-e-item">'+n+"</li>");h.append(r);var i=l.default(o);v.append(i),y.push(r),w.push(i),0===e?(r.data("active",!0),r.addClass("w-e-active")):i.hide(),r.on("click",(function(){r.data("active")||((0,a.default)(y).call(y,(function(t){t.data("active",!1),t.removeClass("w-e-active")})),(0,a.default)(w).call(w,(function(t){t.hide()})),r.data("active",!0),r.addClass("w-e-active"),i.show())}))}})),r.on("click",(function(t){t.stopPropagation()})),n.$elem.append(r),(0,a.default)(m).call(m,(function(t,n){if(t){var o=t.events||[];(0,a.default)(o).call(o,(function(t){var o=t.selector,r=t.type,a=t.fn||c.EMPTY_FN,u=w[n];(0,i.default)(u).call(u,o).on(r,(function(t){t.stopPropagation(),a(t)&&e.remove()}))}))}}));var x=(0,i.default)(r).call(r,"input[type=text],textarea");x.length&&x.get(0).focus(),t.hideCurAllPanels(),n.setPanel(this),t.createdMenus.add(n)}},t.prototype.remove=function(){var e=this.menu,n=this.$container;n&&n.remove(),t.createdMenus.delete(e)},t.hideCurAllPanels=function(){var e;0!==t.createdMenus.size&&(0,a.default)(e=t.createdMenus).call(e,(function(t){var e=t.panel;e&&e.remove()}))},t.createdMenus=new r.default,t}();e.default=s},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(74),r=n(16).f,i=n(18),a=n(15),u=n(155),l=n(9)("toStringTag");t.exports=function(t,e,n,c){if(t){var s=n?t:t.prototype;a(s,l)||r(s,l,{configurable:!0,value:e}),c&&!o&&i(s,"toString",u)}}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.urlRegex=e.imgRegex=e.EMPTY_FN=void 0,e.EMPTY_FN=function(){},e.imgRegex=/\.(gif|jpg|jpeg|png)$/i,e.urlRegex=/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=function(t){function e(e,n){return t.call(this,e,n)||this}return l(e,t),e.prototype.setPanel=function(t){this.panel=t},e}(c(n(86)).default);e.default=s},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var o,r,i,a=n(150),u=n(8),l=n(13),c=n(18),s=n(15),f=n(56),d=n(45),p=u.WeakMap;if(a){var A=new p,h=A.get,v=A.has,g=A.set;o=function(t,e){return g.call(A,t,e),e},r=function(t){return h.call(A,t)||{}},i=function(t){return v.call(A,t)}}else{var m=f("state");d[m]=!0,o=function(t,e){return c(t,m,e),e},r=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:o,get:r,has:i,enforce:function(t){return i(t)?r(t):o(t,{})},getterFor:function(t){return function(e){var n;if(!l(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){t.exports=!0},function(t,e,n){var o=n(43);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(55),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(11),r=n(8),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(o[t])||i(r[t]):o[t]&&o[t][e]||r[t]&&r[t][e]}},function(t,e){t.exports={}},function(t,e,n){var o=n(44),r=n(66),i=n(35),a=n(36),u=n(80),l=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,s=4==t,f=6==t,d=5==t||f;return function(p,A,h,v){for(var g,m,y=i(p),w=r(y),x=o(A,h,3),b=a(w.length),E=0,_=v||u,M=e?_(p,b):n?_(p,0):void 0;b>E;E++)if((d||E in w)&&(m=x(g=w[E],E,y),t))if(e)M[E]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:l.call(M,g)}else if(s)return!1;return f?-1:c||s?s:M}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},function(t,e,n){t.exports=n(207)},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=o(n(1)),a=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var u=a(n(2)),l=function(){function t(t,e,n){this.editor=t,this.$targetElem=e,this.conf=n,this._show=!1,this._isInsertTextContainer=!1;var o=u.default("<div></div>");o.addClass("w-e-tooltip"),this.$container=o}return t.prototype.getPositionData=function(){var t=this.$container,e=0,n=0,o=document.documentElement.scrollTop,r=this.$targetElem.getBoundingClientRect(),i=this.editor.$textElem.getBoundingClientRect(),a=this.$targetElem.getOffsetData(),l=u.default(a.parent),c=this.editor.$textElem.elems[0].scrollTop;if(this._isInsertTextContainer=l.equal(this.editor.$textContainerElem),this._isInsertTextContainer){var s=l.getClientHeight(),f=a.top,d=a.left,p=a.height,A=f-c;A>25?(e=A-20-15,t.addClass("w-e-tooltip-up")):A+p+20<s?(e=A+p+10,t.addClass("w-e-tooltip-down")):(e=(A>0?A:0)+20+10,t.addClass("w-e-tooltip-down")),n=d<0?0:d}else r.top<20||r.top-i.top<20?(e=r.bottom+o+5,t.addClass("w-e-tooltip-down")):(e=r.top+o-20-15,t.addClass("w-e-tooltip-up")),n=r.left<0?0:r.left;return{top:e,left:n}},t.prototype.appendMenus=function(){var t=this,e=this.conf,n=this.editor,o=this.$targetElem,i=this.$container;e.length;(0,r.default)(e).call(e,(function(e,r){var a=e.$elem,l=u.default("<div></div>");l.addClass("w-e-tooltip-item-wrapper "),l.append(a),i.append(l),a.on("click",(function(r){r.preventDefault(),e.onClick(n,o)&&t.remove()}))}))},t.prototype.create=function(){var t=this.editor,e=this.$container;this.appendMenus();var n=this.getPositionData(),o=n.top,r=n.left;e.css("top",o+"px"),e.css("left",r+"px"),e.css("z-index",t.zIndex.get("tooltip")),this._isInsertTextContainer?this.editor.$textContainerElem.append(e):u.default("body").append(e),this._show=!0},t.prototype.remove=function(){this.$container.remove(),this._show=!1},(0,i.default)(t.prototype,"isShow",{get:function(){return this._show},enumerable:!1,configurable:!0}),t}();e.default=l},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var o=n(32);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports={}},function(t,e,n){var o=n(18);t.exports=function(t,e,n,r){r&&r.enumerable?t[e]=n:o(t,e,n)}},function(t,e,n){n(157);var o=n(158),r=n(8),i=n(60),a=n(18),u=n(38),l=n(9)("toStringTag");for(var c in o){var s=r[c],f=s&&s.prototype;f&&i(f)!==l&&a(f,l,c),u[c]=u.Array}},function(t,e,n){var o=n(28);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(12),r=n(9),i=n(79),a=r("species");t.exports=function(t){return i>=51||!o((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){t.exports=n(194)},function(t,e,n){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:o},function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){},function(t,e,n){"use strict";var o=n(149).charAt,r=n(33),i=n(69),a=r.set,u=r.getterFor("String Iterator");i(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=o(n,r),e.index+=t.length,{value:t,done:!1})}))},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(68),r=n(57),i=o("keys");t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+o).toString(36)}},function(t,e,n){var o,r=n(20),i=n(154),a=n(73),u=n(45),l=n(97),c=n(67),s=n(56),f=s("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"<\/script>"},A=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;A=o?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(o):((e=c("iframe")).style.display="none",l.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete A.prototype[a[n]];return A()};u[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(d.prototype=r(t),n=new d,d.prototype=null,n[f]=t):n=A(),void 0===e?n:i(n,e)}},function(t,e,n){var o=n(96),r=n(73);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e,n){var o=n(74),r=n(28),i=n(9)("toStringTag"),a="Arguments"==r(function(){return arguments}());t.exports=o?r:function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?r(e):"Object"==(o=r(e))&&"function"==typeof e.callee?"Arguments":o}},function(t,e,n){var o=n(20),r=n(160),i=n(36),a=n(44),u=n(161),l=n(162),c=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,s,f){var d,p,A,h,v,g,m,y=a(e,n,s?2:1);if(f)d=t;else{if("function"!=typeof(p=u(t)))throw TypeError("Target is not iterable");if(r(p)){for(A=0,h=i(t.length);h>A;A++)if((v=s?y(o(m=t[A])[0],m[1]):y(t[A]))&&v instanceof c)return v;return new c(!1)}d=p.call(t)}for(g=d.next;!(m=g.call(d)).done;)if("object"==typeof(v=l(d,y,m.value,s))&&v&&v instanceof c)return v;return new c(!1)}).stop=function(t){return new c(!0,t)}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e,n){t.exports=n(245)},function(t,e,n){t.exports=n(272)},function(t,e,n){var o=n(14),r=n(51),i=n(42),a=n(25),u=n(52),l=n(15),c=n(89),s=Object.getOwnPropertyDescriptor;e.f=o?s:function(t,e){if(t=a(t),e=u(e,!0),c)try{return s(t,e)}catch(t){}if(l(t,e))return i(!r.f.call(t,e),t[e])}},function(t,e,n){var o=n(12),r=n(28),i="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var o=n(8),r=n(13),i=o.document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,n){var o=n(34),r=n(92);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){"use strict";var o=n(5),r=n(152),i=n(94),a=n(98),u=n(29),l=n(18),c=n(46),s=n(9),f=n(34),d=n(38),p=n(93),A=p.IteratorPrototype,h=p.BUGGY_SAFARI_ITERATORS,v=s("iterator"),g=function(){return this};t.exports=function(t,e,n,s,p,m,y){r(n,e,s);var w,x,b,E=function(t){if(t===p&&B)return B;if(!h&&t in C)return C[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},_=e+" Iterator",M=!1,C=t.prototype,S=C[v]||C["@@iterator"]||p&&C[p],B=!h&&S||E(p),k="Array"==e&&C.entries||S;if(k&&(w=i(k.call(new t)),A!==Object.prototype&&w.next&&(f||i(w)===A||(a?a(w,A):"function"!=typeof w[v]&&l(w,v,g)),u(w,_,!0,!0),f&&(d[_]=g))),"values"==p&&S&&"values"!==S.name&&(M=!0,B=function(){return S.call(this)}),f&&!y||C[v]===B||l(C,v,B),d[e]=B,p)if(x={values:E("values"),keys:m?B:E("keys"),entries:E("entries")},y)for(b in x)(h||M||!(b in C))&&c(C,b,x[b]);else o({target:e,proto:!0,forced:h||M},x);return x}},function(t,e,n){var o=n(12);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},function(t,e,n){var o=n(25),r=n(36),i=n(72),a=function(t){return function(e,n,a){var u,l=o(e),c=r(l.length),s=i(a,c);if(t&&n!=n){for(;c>s;)if((u=l[s++])!=u)return!0}else for(;c>s;s++)if((t||s in l)&&l[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,n){var o=n(55),r=Math.max,i=Math.min;t.exports=function(t,e){var n=o(t);return n<0?r(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var o={};o[n(9)("toStringTag")]="z",t.exports="[object z]"===String(o)},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var o=n(37);t.exports=o("navigator","userAgent")||""},function(t,e,n){"use strict";var o=n(32),r=function(t){var e,n;this.promise=new t((function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o})),this.resolve=o(e),this.reject=o(n)};t.exports.f=function(t){return new r(t)}},function(t,e,n){var o,r,i=n(8),a=n(77),u=i.process,l=u&&u.versions,c=l&&l.v8;c?r=(o=c.split("."))[0]+o[1]:a&&(!(o=a.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=a.match(/Chrome\/(\d+)/))&&(r=o[1]),t.exports=r&&+r},function(t,e,n){var o=n(13),r=n(48),i=n(9)("species");t.exports=function(t,e){var n;return r(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!r(n.prototype)?o(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){t.exports=n(186)},function(t,e,n){t.exports=n(190)},function(t,e,n){"use strict";var o=n(52),r=n(16),i=n(42);t.exports=function(t,e,n){var a=o(e);a in t?r.f(t,a,i(0,n)):t[a]=n}},function(t,e,n){var o=n(43),r="["+n(62)+"]",i=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),u=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,e,n){var o=n(9);e.f=o},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=o(n(1)),a=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var u=a(n(27)),l=function(){function t(t,e){var n=this;this.$elem=t,this.editor=e,this._active=!1,t.on("click",(function(t){var o;u.default.hideCurAllPanels(),(0,r.default)(o=e.txt.eventHooks.menuClickEvents).call(o,(function(t){return t()})),t.stopPropagation(),null!=e.selection.getRange()&&n.clickHandler(t)}))}return t.prototype.clickHandler=function(t){},t.prototype.active=function(){this._active=!0,this.$elem.addClass("w-e-active")},t.prototype.unActive=function(){this._active=!1,this.$elem.removeClass("w-e-active")},(0,i.default)(t.prototype,"isActive",{get:function(){return this._active},enumerable:!1,configurable:!0}),t}();e.default=l},function(t,e,n){"use strict";var o=n(0),r=o(n(50)),i=o(n(6)),a=o(n(122)),u=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var l=n(7),c=u(n(320)),s=u(n(321)),f=function(){function t(t){this.editor=t}return t.prototype.alert=function(t,e){var n=this.editor.config.customAlert;n?n(t):window.alert(t),e&&console.error("wangEditor: "+e)},t.prototype.insertImg=function(t){var e=this,n=this.editor,o=n.config,r=function(t,e){return void 0===e&&(e="validate."),n.i18next.t(e+t)};n.cmd.do("insertHTML",'<img src="'+t+'" style="max-width:100%;"/>'),o.linkImgCallback(t);var i=document.createElement("img");i.onload=function(){i=null},i.onerror=function(){e.alert(r("插入图片错误"),"wangEditor: "+r("插入图片错误")+"，"+r("图片链接")+' "'+t+'"，'+r("下载链接失败")),i=null},i.onabort=function(){return i=null},i.src=t},t.prototype.uploadImg=function(t){var e=this;if(t.length){var n=this.editor,o=n.config,u=function(t){return n.i18next.t("validate."+t)},f=o.uploadImgServer,d=o.uploadImgShowBase64,p=o.uploadImgMaxSize,A=p/1024/1024,h=o.uploadImgMaxLength,v=o.uploadFileName,g=o.uploadImgParams,m=o.uploadImgParamsWithUrl,y=o.uploadImgHeaders,w=o.uploadImgHooks,x=o.uploadImgTimeout,b=o.withCredentials,E=o.customUploadImg;if(E||f||d){var _=[],M=[];if(l.arrForEach(t,(function(t){var e=t.name,n=t.size;e&&n&&(!1!==/\.(jpg|jpeg|png|bmp|gif|webp)$/i.test(e)?p<n?M.push("【"+e+"】"+u("大于")+" "+A+"M"):_.push(t):M.push("【"+e+"】"+u("不是图片")))})),M.length)this.alert(u("图片验证未通过")+": \n"+M.join("\n"));else if(_.length>h)this.alert(u("一次最多上传")+h+u("张图片"));else if(E&&"function"==typeof E){var C;E(_,(0,a.default)(C=this.insertImg).call(C,this))}else{var S=new FormData;if((0,i.default)(_).call(_,(function(t,e){var n=v||t.name;_.length>1&&(n+=e+1),S.append(n,t)})),f){var B=f.split("#");f=B[0];var k=B[1]||"";(0,i.default)(l).call(l,g,(function(t,e){m&&((0,r.default)(f).call(f,"?")>0?f+="&":f+="?",f=f+t+"="+e),S.append(t,e)})),k&&(f+="#"+k);var I=c.default(f,{timeout:x,formData:S,headers:y,withCredentials:!!b,beforeSend:function(t){if(w.before)return w.before(t,n,_)},onTimeout:function(t){e.alert(u("上传图片超时")),w.timeout&&w.timeout(t,n)},onProgress:function(t,e){var o=new s.default(n);e.lengthComputable&&(t=e.loaded/e.total,o.show(t))},onError:function(t){e.alert(u("上传图片错误"),u("上传图片错误")+"，"+u("服务器返回状态")+": "+t.status),w.error&&w.error(t,n)},onFail:function(t,o){e.alert(u("上传图片失败"),u("上传图片返回结果错误")+"，"+u("返回结果")+": "+o),w.fail&&w.fail(t,n,o)},onSuccess:function(t,o){if(w.customInsert){var r;w.customInsert((0,a.default)(r=e.insertImg).call(r,e),o,n)}else{if("0"!=o.errno)return e.alert(u("上传图片失败"),u("上传图片返回结果错误")+"，"+u("返回结果")+" errno="+o.errno),void(w.fail&&w.fail(t,n,o));var l=o.data;(0,i.default)(l).call(l,(function(t){e.insertImg(t)})),w.success&&w.success(t,n,o)}}});"string"==typeof I&&this.alert(I)}else d&&l.arrForEach(t,(function(t){var n=e,o=new FileReader;o.readAsDataURL(t),o.onload=function(){this.result&&n.insertImg(this.result.toString())}}))}}}},t}();e.default=f},function(t,e,n){"use strict";var o=n(0)(n(1));(0,o.default)(e,"__esModule",{value:!0});var r=n(378),i=function(){function t(t){this.maxSize=t,this.isRe=!1,this.data=new r.CeilStack(t),this.revokeData=new r.CeilStack(t)}return(0,o.default)(t.prototype,"size",{get:function(){return[this.data.size,this.revokeData.size]},enumerable:!1,configurable:!0}),t.prototype.resetMaxSize=function(t){this.data.resetMax(t),this.revokeData.resetMax(t)},t.prototype.save=function(t){return this.isRe&&(this.revokeData.clear(),this.isRe=!1),this.data.instack(t),this},t.prototype.revoke=function(t){!this.isRe&&(this.isRe=!0);var e=this.data.outstack();return!!e&&(this.revokeData.instack(e),t(e),!0)},t.prototype.restore=function(t){!this.isRe&&(this.isRe=!0);var e=this.revokeData.outstack();return!!e&&(this.data.instack(e),t(e),!0)},t}();e.default=i},function(t,e,n){var o=n(14),r=n(12),i=n(67);t.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(12),r=/#|\.prototype\./,i=function(t,e){var n=u[a(t)];return n==c||n!=l&&("function"==typeof e?o(e):!!e)},a=i.normalize=function(t){return String(t).replace(r,".").toLowerCase()},u=i.data={},l=i.NATIVE="N",c=i.POLYFILL="P";t.exports=i},function(t,e,n){var o=n(92),r=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(t){return r.call(t)}),t.exports=o.inspectSource},function(t,e,n){var o=n(8),r=n(151),i=o["__core-js_shared__"]||r("__core-js_shared__",{});t.exports=i},function(t,e,n){"use strict";var o,r,i,a=n(94),u=n(18),l=n(15),c=n(9),s=n(34),f=c("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(r=a(a(i)))!==Object.prototype&&(o=r):d=!0),null==o&&(o={}),s||l(o,f)||u(o,f,(function(){return this})),t.exports={IteratorPrototype:o,BUGGY_SAFARI_ITERATORS:d}},function(t,e,n){var o=n(15),r=n(35),i=n(56),a=n(153),u=i("IE_PROTO"),l=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=r(t),o(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?l:null}},function(t,e,n){var o=n(70);t.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var o=n(15),r=n(25),i=n(71).indexOf,a=n(45);t.exports=function(t,e){var n,u=r(t),l=0,c=[];for(n in u)!o(a,n)&&o(u,n)&&c.push(n);for(;e.length>l;)o(u,n=e[l++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var o=n(37);t.exports=o("document","documentElement")},function(t,e,n){var o=n(20),r=n(156);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return o(n),r(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var o=n(8);t.exports=o.Promise},function(t,e,n){var o=n(46);t.exports=function(t,e,n){for(var r in e)n&&n.unsafe&&t[r]?t[r]=e[r]:o(t,r,e[r],n);return t}},function(t,e,n){"use strict";var o=n(37),r=n(16),i=n(9),a=n(14),u=i("species");t.exports=function(t){var e=o(t),n=r.f;a&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var o=n(20),r=n(32),i=n(9)("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||null==(n=o(a)[i])?e:r(n)}},function(t,e,n){var o,r,i,a=n(8),u=n(12),l=n(28),c=n(44),s=n(97),f=n(67),d=n(104),p=a.location,A=a.setImmediate,h=a.clearImmediate,v=a.process,g=a.MessageChannel,m=a.Dispatch,y=0,w={},x=function(t){if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}},b=function(t){return function(){x(t)}},E=function(t){x(t.data)},_=function(t){a.postMessage(t+"",p.protocol+"//"+p.host)};A&&h||(A=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return w[++y]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},o(y),y},h=function(t){delete w[t]},"process"==l(v)?o=function(t){v.nextTick(b(t))}:m&&m.now?o=function(t){m.now(b(t))}:g&&!d?(i=(r=new g).port2,r.port1.onmessage=E,o=c(i.postMessage,i,1)):!a.addEventListener||"function"!=typeof postMessage||a.importScripts||u(_)||"file:"===p.protocol?o="onreadystatechange"in f("script")?function(t){s.appendChild(f("script")).onreadystatechange=function(){s.removeChild(this),x(t)}}:function(t){setTimeout(b(t),0)}:(o=_,a.addEventListener("message",E,!1))),t.exports={set:A,clear:h}},function(t,e,n){var o=n(77);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(o)},function(t,e,n){var o=n(20),r=n(13),i=n(78);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){"use strict";var o=n(12);t.exports=function(t,e){var n=[][t];return!!n&&o((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){t.exports=n(177)},function(t,e,n){t.exports=n(198)},function(t,e,n){"use strict";var o=n(5),r=n(8),i=n(111),a=n(12),u=n(18),l=n(61),c=n(76),s=n(13),f=n(29),d=n(16).f,p=n(39).forEach,A=n(14),h=n(33),v=h.set,g=h.getterFor;t.exports=function(t,e,n){var h,m=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),w=m?"set":"add",x=r[t],b=x&&x.prototype,E={};if(A&&"function"==typeof x&&(y||b.forEach&&!a((function(){(new x).entries().next()})))){h=e((function(e,n){v(c(e,h,t),{type:t,collection:new x}),null!=n&&l(n,e[w],e,m)}));var _=g(t);p(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(t){var e="add"==t||"set"==t;!(t in b)||y&&"clear"==t||u(h.prototype,t,(function(n,o){var r=_(this).collection;if(!e&&y&&!s(n))return"get"==t&&void 0;var i=r[t](0===n?0:n,o);return e?this:i}))})),y||d(h.prototype,"size",{configurable:!0,get:function(){return _(this).collection.size}})}else h=n.getConstructor(e,t,m,w),i.REQUIRED=!0;return f(h,t,!1,!0),E[t]=h,o({global:!0,forced:!0},E),y||n.setStrong(h,t,m),h}},function(t,e,n){var o=n(45),r=n(13),i=n(15),a=n(16).f,u=n(57),l=n(201),c=u("meta"),s=0,f=Object.isExtensible||function(){return!0},d=function(t){a(t,c,{value:{objectID:"O"+ ++s,weakData:{}}})},p=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,c)){if(!f(t))return"F";if(!e)return"E";d(t)}return t[c].objectID},getWeakData:function(t,e){if(!i(t,c)){if(!f(t))return!0;if(!e)return!1;d(t)}return t[c].weakData},onFreeze:function(t){return l&&p.REQUIRED&&f(t)&&!i(t,c)&&d(t),t}};o[c]=!0},function(t,e,n){"use strict";var o=n(16).f,r=n(58),i=n(100),a=n(44),u=n(76),l=n(61),c=n(69),s=n(101),f=n(14),d=n(111).fastKey,p=n(33),A=p.set,h=p.getterFor;t.exports={getConstructor:function(t,e,n,c){var s=t((function(t,o){u(t,s,e),A(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),null!=o&&l(o,t[c],t,n)})),p=h(e),v=function(t,e,n){var o,r,i=p(t),a=g(t,e);return a?a.value=n:(i.last=a={index:r=d(e,!0),key:e,value:n,previous:o=i.last,next:void 0,removed:!1},i.first||(i.first=a),o&&(o.next=a),f?i.size++:t.size++,"F"!==r&&(i.index[r]=a)),t},g=function(t,e){var n,o=p(t),r=d(e);if("F"!==r)return o.index[r];for(n=o.first;n;n=n.next)if(n.key==e)return n};return i(s.prototype,{clear:function(){for(var t=p(this),e=t.index,n=t.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete e[n.index],n=n.next;t.first=t.last=void 0,f?t.size=0:this.size=0},delete:function(t){var e=p(this),n=g(this,t);if(n){var o=n.next,r=n.previous;delete e.index[n.index],n.removed=!0,r&&(r.next=o),o&&(o.previous=r),e.first==n&&(e.first=o),e.last==n&&(e.last=r),f?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=p(this),o=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(o(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!g(this,t)}}),i(s.prototype,n?{get:function(t){var e=g(this,t);return e&&e.value},set:function(t,e){return v(this,0===t?0:t,e)}}:{add:function(t){return v(this,t=0===t?0:t,t)}}),f&&o(s.prototype,"size",{get:function(){return p(this).size}}),s},setStrong:function(t,e,n){var o=e+" Iterator",r=h(e),i=h(o);c(t,e,(function(t,e){A(this,{type:o,target:t,state:r(t),kind:e,last:void 0})}),(function(){for(var t=i(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),s(e)}}},function(t,e,n){t.exports=n(211)},function(t,e,n){var o=n(214),r=n(217);function i(e){return t.exports=i="function"==typeof r&&"symbol"==typeof o?function(t){return typeof t}:function(t){return t&&"function"==typeof r&&t.constructor===r&&t!==r.prototype?"symbol":typeof t},i(e)}t.exports=i},function(t,e,n){n(10)("iterator")},function(t,e,n){var o=n(96),r=n(73).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){t.exports=n(243)},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default={zIndex:1e4}},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0}),e.getPasteImgs=e.getPasteHtml=e.getPasteText=void 0;var a=n(7),u=i(n(281));function l(t){var e=t.clipboardData,n="";return n=null==e?window.clipboardData&&window.clipboardData.getData("text"):e.getData("text/plain"),a.replaceHtmlSymbol(n)}e.getPasteText=l,e.getPasteHtml=function(t,e,n){void 0===e&&(e=!0),void 0===n&&(n=!1);var o=t.clipboardData,r="";if(o&&(r=o.getData("text/html")),!r){var i=l(t);if(!i)return"";r="<p>"+i+"</p>"}return r=u.default(r,e,n)},e.getPasteImgs=function(t){var e=[];if(l(t))return e;var n=t.clipboardData.items;return n?((0,r.default)(a).call(a,n,(function(t,n){var o=n.type;/image/i.test(o)&&e.push(n.getAsFile())})),e):e}},function(t,e,n){t.exports=n(283)},function(t,e,n){t.exports=n(290)},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=o(n(1)),a=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var u=a(n(2)),l=n(30),c=function(){function t(t,e){var n=this;this.hideTimeoutId=0,this.showTimeoutId=0,this.menu=t,this.conf=e;var o=u.default('<div class="w-e-droplist"></div>'),i=u.default("<p>"+e.title+"</p>");i.addClass("w-e-dp-title"),o.append(i);var a=e.list||[],c=e.type||"list",s=e.clickHandler||l.EMPTY_FN,f=u.default('<ul class="'+("list"===c?"w-e-list":"w-e-block")+'"></ul>');(0,r.default)(a).call(a,(function(t){var e=t.$elem,o=t.value,r=u.default('<li class="w-e-item"></li>');e&&(r.append(e),f.append(r),r.on("click",(function(){s(o),n.hideTimeoutId=window.setTimeout((function(){n.hide()}))})))})),o.append(f),o.on("mouseleave",(function(){n.hideTimeoutId=window.setTimeout((function(){n.hide()}))})),this.$container=o,this.rendered=!1,this._show=!1}return t.prototype.show=function(){this.hideTimeoutId&&clearTimeout(this.hideTimeoutId);var t=this.menu.$elem,e=this.$container;if(!this._show){if(this.rendered)e.show();else{var n=t.getSizeData().height||0,o=this.conf.width||100;e.css("margin-top",n+"px").css("width",o+"px"),t.append(e),this.rendered=!0}this._show=!0}},t.prototype.hide=function(){this.showTimeoutId&&clearTimeout(this.showTimeoutId);var t=this.$container;this._show&&(t.hide(),this._show=!1)},(0,i.default)(t.prototype,"isShow",{get:function(){return this._show},enumerable:!1,configurable:!0}),t}();e.default=c},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default=function(t){var e=t.selection.getSelectionContainerElem();return!!e&&"A"===e.getNodeName()}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default=function(t){var e=t.selection.getSelectionContainerElem();return!!e&&!("CODE"!=e.getNodeName()&&"PRE"!=e.getNodeName()&&"CODE"!=e.parent().getNodeName()&&"PRE"!=e.parent().getNodeName()&&!/hljs/.test(e.parent().attr("class")))}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),n(131),n(133),n(137),n(139),n(141),n(143),n(145);var r=o(n(168));try{document}catch(t){throw new Error("请在浏览器环境下运行")}e.default=r.default},function(t,e,n){var o=n(128);t.exports=o},function(t,e,n){n(129);var o=n(11).Object,r=t.exports=function(t,e,n){return o.defineProperty(t,e,n)};o.defineProperty.sham&&(r.sham=!0)},function(t,e,n){var o=n(5),r=n(14);o({target:"Object",stat:!0,forced:!r,sham:!r},{defineProperty:n(16).f})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(21),r=n(132);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){(e=n(22)(!1)).push([t.i,'.w-e-toolbar,\n.w-e-text-container,\n.w-e-menu-panel {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: #fff;\n  /*表情菜单样式*/\n  /*分割线样式*/\n}\n.w-e-toolbar .eleImg,\n.w-e-text-container .eleImg,\n.w-e-menu-panel .eleImg {\n  cursor: pointer;\n  display: inline-block;\n  font-size: 18px;\n  padding: 0 3px;\n}\n.w-e-toolbar *,\n.w-e-text-container *,\n.w-e-menu-panel * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.w-e-toolbar hr,\n.w-e-text-container hr,\n.w-e-menu-panel hr {\n  cursor: pointer;\n  display: block;\n  height: 0px;\n  border: 0;\n  border-top: 3px solid #ccc;\n  margin: 20px 0;\n}\n.w-e-clear-fix:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.w-e-drop-list-item {\n  position: relative;\n  top: 1px;\n  padding-right: 7px;\n  color: #333 !important;\n}\n.w-e-drop-list-tl {\n  padding-left: 10px;\n  text-align: left;\n}\n',""]),t.exports=e},function(t,e,n){var o=n(21),r=n(134);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){var o=n(22),r=n(135),i=n(136);e=o(!1);var a=r(i);e.push([t.i,"@font-face {\n  font-family: 'w-e-icon';\n  src: url("+a+') format(\'truetype\');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="w-e-icon-"],\n[class*=" w-e-icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'w-e-icon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.w-e-icon-close:before {\n  content: "\\f00d";\n}\n.w-e-icon-upload2:before {\n  content: "\\e9c6";\n}\n.w-e-icon-trash-o:before {\n  content: "\\f014";\n}\n.w-e-icon-header:before {\n  content: "\\f1dc";\n}\n.w-e-icon-pencil2:before {\n  content: "\\e906";\n}\n.w-e-icon-paint-brush:before {\n  content: "\\f1fc";\n}\n.w-e-icon-image:before {\n  content: "\\e90d";\n}\n.w-e-icon-play:before {\n  content: "\\e912";\n}\n.w-e-icon-location:before {\n  content: "\\e947";\n}\n.w-e-icon-undo:before {\n  content: "\\e965";\n}\n.w-e-icon-redo:before {\n  content: "\\e966";\n}\n.w-e-icon-quotes-left:before {\n  content: "\\e977";\n}\n.w-e-icon-list-numbered:before {\n  content: "\\e9b9";\n}\n.w-e-icon-list2:before {\n  content: "\\e9bb";\n}\n.w-e-icon-link:before {\n  content: "\\e9cb";\n}\n.w-e-icon-happy:before {\n  content: "\\e9df";\n}\n.w-e-icon-bold:before {\n  content: "\\ea62";\n}\n.w-e-icon-underline:before {\n  content: "\\ea63";\n}\n.w-e-icon-italic:before {\n  content: "\\ea64";\n}\n.w-e-icon-strikethrough:before {\n  content: "\\ea65";\n}\n.w-e-icon-table2:before {\n  content: "\\ea71";\n}\n.w-e-icon-paragraph-left:before {\n  content: "\\ea77";\n}\n.w-e-icon-paragraph-center:before {\n  content: "\\ea78";\n}\n.w-e-icon-paragraph-right:before {\n  content: "\\ea79";\n}\n.w-e-icon-terminal:before {\n  content: "\\f120";\n}\n.w-e-icon-page-break:before {\n  content: "\\ea68";\n}\n.w-e-icon-cancel-circle:before {\n  content: "\\ea0d";\n}\n.w-e-icon-font:before {\n  content: "\\ea5c";\n}\n.w-e-icon-text-heigh:before {\n  content: "\\ea5f";\n}\n.w-e-icon-paint-format:before {\n  content: "\\e90c";\n}\n.w-e-icon-indent-increase:before {\n  content: "\\ea7b";\n}\n.w-e-icon-indent-decrease:before {\n  content: "\\ea7c";\n}\n.w-e-icon-row-height:before {\n  content: "\\e9be";\n}\n.w-e-icon-fullscreen_exit:before {\n  content: "\\e900";\n}\n.w-e-icon-fullscreen:before {\n  content: "\\e901";\n}\n.w-e-icon-split-line:before {\n  content: "\\ea0b";\n}\n.w-e-icon-checkbox-checked:before {\n  content: "\\ea52";\n}\n',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){"use strict";n.r(e),e.default="data:font/woff;base64,d09GRgABAAAAABrcAAsAAAAAGpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABJAAAAST/4dF7Z2FzcAAAAowAAAAIAAAACAAAABBnbHlmAAAClAAAFTAAABUwrNIRu2hlYWQAABfEAAAANgAAADYbkuK6aGhlYQAAF/wAAAAkAAAAJAkjBWhobXR4AAAYIAAAAKAAAACglYcEbmxvY2EAABjAAAAAUgAAAFJegllAbWF4cAAAGRQAAAAgAAAAIAAzALZuYW1lAAAZNAAAAYYAAAGGmUoJ+3Bvc3QAABq8AAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQgAAAA+ACAABAAeAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqeep88A3wFPEg8dzx/P/9//8AAAAAACDpAOkG6QzpEulH6WXpd+m56bvpvunG6cvp3+oL6g3qUupc6l/qYupx6nfqe/AN8BTxIPHc8fz//f//AAH/4xcEFwAW+xb3FsMWphaWFlUWVBZSFksWRxY0FgkWCBXEFbsVuRW3FawVpxWmEBYQEA8FDkoOKwADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAQAQQABA78DfwAFAAsAEQAXAAABMxUhETMDESEVIxUBNTMRITURNSERIzUC/8D+wn5+AT7A/gJ+/sIBPn4Cv34BPvyCAT5+wAK+wP7Cfv4Cfv7CwAAAAAAEAEEAAQO/A38ABQALABEAFwAAASERIzUjEzUzESE1AREhFSMVERUzFSERAoEBPn7AwH7+wv3AAT7AwP7CA3/+wsD9fsD+wn4BwgE+fsD+/sB+AT4AAAAAAgAA/8AEAAPAAAQAEwAAATcBJwEDLgEnEzcBIwEDJQE1AQcBgIABwED+QJ8XOzJjgAGAwP6AwAKAAYD+gE4BQEABwED+QP6dMjsXARFOAYD+gP2AwAGAwP6AgAACAAD/wAQAA4AAKQAtAAABESM1NCYjISIGHQEUFjMhMjY9ATMRIRUjIgYVERQWOwEyNjURNCYrATUBITUhBADAJhr9QBomJhoCwBomgP3AIA0TEw2ADRMTDSABQP1AAsABgAGAQBomJhrAGiYmGkD/AIATDf7ADRMTDQFADRNAAYBAAAAEAAAAAAQAA4AAEAAhAC0ANAAAATgBMRE4ATEhOAExETgBMSE1ISIGFREUFjMhMjY1ETQmIwcUBiMiJjU0NjMyFhMhNRMBMzcDwPyAA4D8gBomJhoDgBomJhqAOCgoODgoKDhA/QDgAQBA4ANA/QADAEAmGv0AGiYmGgMAGibgKDg4KCg4OP24gAGA/sDAAAACAAAAQAQAA0AAOAA8AAABJicuAScmIyIHDgEHBgcGBw4BBwYVFBceARcWFxYXHgEXFjMyNz4BNzY3Njc+ATc2NTQnLgEnJicBEQ0BA9U2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHCzY4OXY8PT8/PTx2OTg2CwcICwMDAwMLCAcL/asBQP7AAyAIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKQgGBggCAgICCAYGCCkqKlktLi8vLi1ZKiop/eABgMDAAAAAAAIAwP/AA0ADwAAbACcAAAEiBw4BBwYVFBceARcWMTA3PgE3NjU0Jy4BJyYDIiY1NDYzMhYVFAYCAEI7OlcZGTIyeDIyMjJ4MjIZGVc6O0JQcHBQUHBwA8AZGVc6O0J4fX3MQUFBQcx9fXhCOzpXGRn+AHBQUHBwUFBwAAABAAAAAAQAA4AAKwAAASIHDgEHBgcnESEnPgEzMhceARcWFRQHDgEHBgcXNjc+ATc2NTQnLgEnJiMCADUyMlwpKSOWAYCQNYtQUEVGaR4eCQkiGBgeVSggIC0MDCgoi15dagOACgsnGxwjlv6AkDQ8Hh5pRkVQKygpSSAhGmAjKytiNjY5al1eiygoAAEAAAAABAADgAAqAAATFBceARcWFzcmJy4BJyY1NDc+ATc2MzIWFwchEQcmJy4BJyYjIgcOAQcGAAwMLSAgKFUeGBgiCQkeHmlGRVBQizWQAYCWIykpXDIyNWpdXosoKAGAOTY2YisrI2AaISBJKSgrUEVGaR4ePDSQAYCWIxwbJwsKKCiLXl0AAAAAAgAAAEAEAQMAACYATQAAEzIXHgEXFhUUBw4BBwYjIicuAScmNSc0Nz4BNzYzFSIGBw4BBz4BITIXHgEXFhUUBw4BBwYjIicuAScmNSc0Nz4BNzYzFSIGBw4BBz4B4S4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgJJLikpPRESEhE9KSkuLikpPRESASMjelJRXUB1LQkQBwgSAgASET0pKS4uKSk9ERISET0pKS4gXVFSeiMjgDAuCBMKAgESET0pKS4uKSk9ERISET0pKS4gXVFSeiMjgDAuCBMKAgEAAAYAQP/ABAADwAADAAcACwARAB0AKQAAJSEVIREhFSERIRUhJxEjNSM1ExUzFSM1NzUjNTMVFREjNTM1IzUzNSM1AYACgP2AAoD9gAKA/YDAQEBAgMCAgMDAgICAgICAAgCAAgCAwP8AwED98jJAkjwyQJLu/sBAQEBAQAAGAAD/wAQAA8AAAwAHAAsAFwAjAC8AAAEhFSERIRUhESEVIQE0NjMyFhUUBiMiJhE0NjMyFhUUBiMiJhE0NjMyFhUUBiMiJgGAAoD9gAKA/YACgP2A/oBLNTVLSzU1S0s1NUtLNTVLSzU1S0s1NUsDgID/AID/AIADQDVLSzU1S0v+tTVLSzU1S0v+tTVLSzU1S0sABQAAAEAFYAMAAAMABwALAA4AEQAAEyEVIRUhFSEVIRUhARc3NScHAAOA/IADgPyAA4D8gAPgwMDAwAMAwEDAQMABQMDAQMDAAAAAAAMAAAAABAADoAADAA0AFAAANyEVISUVITUTIRUhNSElCQEjESMRAAQA/AAEAPwAgAEAAQABAP1gASABIOCAQEDAQEABAICAwAEg/uD/AAEAAAAAAAIAHv/MA+IDtAAzAGQAAAEiJicmJyY0NzY/AT4BMzIWFxYXFhQHBg8BBiInJjQ/ATY0Jy4BIyIGDwEGFBcWFAcOASMDIiYnJicmNDc2PwE2MhcWFA8BBhQXHgEzMjY/ATY0JyY0NzYyFxYXFhQHBg8BDgEjAbgKEwgjEhISEiPAI1kxMVkjIxISEhIjWA8sDw8PWCkpFDMcHDMUwCkpDw8IEwq4MVkjIxISEhIjWA8sDw8PWCkpFDMcHDMUwCkpDw8PKxAjEhISEiPAI1kxAUQIByQtLV4tLSTAIiUlIiQtLV4tLSRXEBAPKw9YKXQpFBUVFMApdCkPKxAHCP6IJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQDw8kLS1eLS0kwCIlAAAAAAUAAP/ABAADwAAbADcAUwBfAGsAAAUyNz4BNzY1NCcuAScmIyIHDgEHBhUUFx4BFxYTMhceARcWFRQHDgEHBiMiJy4BJyY1NDc+ATc2EzI3PgE3NjcGBw4BBwYjIicuAScmJxYXHgEXFic0NjMyFhUUBiMiJiU0NjMyFhUUBiMiJgIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExWKysqUSYmIwUcG1Y4Nz8/NzhWGxwFIyYmUSor1SUbGyUlGxslAYAlGxslJRsbJUAoKIteXWpqXV6LKCgoKIteXWpqXV6LKCgDoCEgcUxMVlZMTHEgISEgcUxMVlZMTHEgIf4JBgYVEBAUQzo6VhgZGRhWOjpDFBAQFQYG9yg4OCgoODgoKDg4KCg4OAAAAQAAAUAEAAJAAA8AABMVFBYzITI2PQE0JiMhIgYAEw0DwA0TEw38QA0TAiDADRMTDcANExMAAAADAAD/wAQAA8AAGwA3AEMAAAEiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYDIicuAScmNTQ3PgE3NjMyFx4BFxYVFAcOAQcGEwcnBxcHFzcXNyc3AgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpWTExxICEhIHFMTFZWTExxICEhIHFMTEqgoGCgoGCgoGCgoAPAKCiLXl1qal1eiygoKCiLXl1qal1eiygo/GAhIHFMTFZWTExxICEhIHFMTFZWTExxICECoKCgYKCgYKCgYKCgAAIAAP/ABAADwAAPABUAAAEhIgYVERQWMyEyNjURNCYBJzcXARcDgP0ANUtLNQMANUtL/gvtWpMBM1oDwEs1/QA1S0s1AwA1S/zl7lqSATJaAAAAAAEAZf/AA5sDwAApAAABIiYjIgcOAQcGFRQWMy4BNTQ2NzAHBgIHBgcVIRMzNyM3HgEzMjY3DgEDIERoRnFTVG0aG0lIBg1lShAQSzw8WQE9bMYs1zQtVSYuUBgdPQOwEB4dYT4/QU07CyY3mW8DfX7+xY+QIxkCAID2CQ83awkHAAAAAAIAAAAABAADgAAJABcAACUzByczESM3FyMlEScjETMVITUzESMHEQOAgKCggICgoID/AEDAgP6AgMBAwMDAAgDAwMD/AID9QEBAAsCAAQAAAwDAAAADQAOAABYAHwAoAAABPgE1NCcuAScmIyERITI3PgE3NjU0JgEzMhYVFAYrARMjETMyFhUUBgLEHCAUFEYuLzX+wAGANS8uRhQURP6EZSo8PClmn5+fLD4+AdsiVC81Ly5GFBT8gBQURi4vNUZ0AUZLNTVL/oABAEs1NUsAAAAAAgDAAAADQAOAAB8AIwAAATMRFAcOAQcGIyInLgEnJjURMxEUFhceATMyNjc+ATUBIRUhAsCAGRlXOjtCQjs6VxkZgBsYHEkoKEkcGBv+AAKA/YADgP5gPDQ1ThYXFxZONTQ8AaD+YB44FxgbGxgXOB7+oIAAAAAAAQCAAAADgAOAAAsAAAEVIwEzFSE1MwEjNQOAgP7AgP5AgAFAgAOAQP0AQEADAEAAAQAAAAAEAAOAAD0AAAEVIx4BFRQGBw4BIyImJy4BNTMUFjMyNjU0JiMhNSEuAScuATU0Njc+ATMyFhceARUjNCYjIgYVFBYzMhYXBADrFRY1MCxxPj5xLDA1gHJOTnJyTv4AASwCBAEwNTUwLHE+PnEsMDWAck5OcnJOO24rAcBAHUEiNWIkISQkISRiNTRMTDQ0TEABAwEkYjU1YiQhJCQhJGI1NExMNDRMIR8AAAAKAAAAAAQAA4AAAwAHAAsADwATABcAGwAfACMAJwAAExEhEQE1IRUdASE1ARUhNSMVITURIRUhJSEVIRE1IRUBIRUhITUhFQAEAP2AAQD/AAEA/wBA/wABAP8AAoABAP8AAQD8gAEA/wACgAEAA4D8gAOA/cDAwEDAwAIAwMDAwP8AwMDAAQDAwP7AwMDAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFSEVIREhFSERIRUhESEVIQAEAPwAAoD9gAKA/YAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEXIRUhESEVIQMhFSERIRUhAAQA/ADAAoD9gAKA/YDABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIQUhFSERIRUhASEVIREhFSEABAD8AAGAAoD9gAKA/YD+gAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAAABgAAAAAEAAOAAAMABwALAA8AEwAWAAATIRUhBSEVIRUhFSEVIRUhBSEVIRkBBQAEAPwAAYACgP2AAoD9gAKA/YD+gAQA/AABAAOAgECAQIBAgECAAQABgMAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhARElAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEA/wADgIBAgECAQIBAgAKA/oDAAAEAPwA/AuYC5gAsAAAlFA8BBiMiLwEHBiMiLwEmNTQ/AScmNTQ/ATYzMh8BNzYzMh8BFhUUDwEXFhUC5hBOEBcXEKioEBcWEE4QEKioEBBOEBYXEKioEBcXEE4QEKioEMMWEE4QEKioEBBOEBYXEKioEBcXEE4QEKioEBBOEBcXEKioEBcAAAAGAAAAAAMlA24AFAAoADwATQBVAIIAAAERFAcGKwEiJyY1ETQ3NjsBMhcWFTMRFAcGKwEiJyY1ETQ3NjsBMhcWFxEUBwYrASInJjURNDc2OwEyFxYTESERFBcWFxYzITI3Njc2NQEhJyYnIwYHBRUUBwYrAREUBwYjISInJjURIyInJj0BNDc2OwE3Njc2OwEyFxYfATMyFxYVASUGBQgkCAUGBgUIJAgFBpIFBQglCAUFBQUIJQgFBZIFBQglCAUFBQUIJQgFBUn+AAQEBQQCAdsCBAQEBP6AAQAbBAa1BgQB9wYFCDcaGyb+JSYbGzcIBQUFBQixKAgXFhe3FxYWCSiwCAUGAhL+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYFCP63CAUFBQUIAUkIBQYGBf5bAh394w0LCgUFBQUKCw0CZkMFAgIFVSQIBgX94zAiIyEiLwIgBQYIJAgFBWAVDw8PDxVgBQUIAAIABwBJA7cCrwAaAC4AAAkBBiMiLwEmNTQ/AScmNTQ/ATYzMhcBFhUUBwEVFAcGIyEiJyY9ATQ3NjMhMhcWAU7+9gYHCAUdBgbh4QYGHQUIBwYBCgYGAmkFBQj92wgFBQUFCAIlCAUFAYX+9gYGHAYIBwbg4QYHBwYdBQX+9QUIBwb++yUIBQUFBQglCAUFBQUAAAABACMAAAPdA24AswAAJSInJiMiBwYjIicmNTQ3Njc2NzY3Nj0BNCcmIyEiBwYdARQXFhcWMxYXFhUUBwYjIicmIyIHBiMiJyY1NDc2NzY3Njc2PQERNDU0NTQnNCcmJyYnJicmJyYjIicmNTQ3NjMyFxYzMjc2MzIXFhUUBwYjBgcGBwYdARQXFjMhMjc2PQE0JyYnJicmNTQ3NjMyFxYzMjc2MzIXFhUUBwYHIgcGBwYVERQXFhcWFzIXFhUUBwYjA8EZMzIaGTIzGQ0IBwkKDQwREAoSAQcV/n4WBwEVCRITDg4MCwcHDhs1NRoYMTEYDQcHCQkLDBAPCRIBAgECAwQEBQgSEQ0NCgsHBw4aNTUaGDAxGA4HBwkKDA0QEAgUAQcPAZAOBwEUChcXDw4HBw4ZMzIZGTExGQ4HBwoKDQ0QEQgUFAkREQ4NCgsHBw4AAgICAgwLDxEJCQEBAwMFDETgDAUDAwUM1FENBgECAQgIEg8MDQICAgIMDA4RCAkBAgMDBQ1FIQHQAg0NCAgODgoKCwsHBwMGAQEICBIPDA0CAgICDQwPEQgIAQIBBgxQtgwHAQEHDLZQDAYBAQYHFg8MDQICAgINDA8RCAgBAQIGDU/95kQMBgICAQkIEQ8MDQAAAgAA/7cD/wO3ABMAOQAAATIXFhUUBwIHBiMiJyY1NDcBNjMBFhcWHwEWBwYjIicmJyYnJjUWFxYXFhcWMzI3Njc2NzY3Njc2NwObKB4eGr5MN0VINDQ1AW0hKf34FyYnLwECTEx7RzY2ISEQEQQTFBAQEhEJFwgPEhMVFR0dHh4pA7cbGigkM/6ZRjQ1NElJMAFLH/2xKx8fDSh6TUwaGy4vOjpEAw8OCwsKChYlGxoREQoLBAQCAAEAAAAAAABiKug1Xw889QALBAAAAAAA24pPIwAAAADbik8jAAD/twVgA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABYAAAP//BWAAAQAAAAAAAAAAAAAAAAAAACgEAAAAAAAAAAAAAAACAAAABAAAQQQAAEEEAAAABAAAAAQAAAAEAAAABAAAwAQAAAAEAAAABAAAAAQAAEAEAAAABYAAAAQAAAAEAAAeBAAAAAQAAAAEAAAABAAAAAQAAGUEAAAABAAAwAQAAMAEAACABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gH1ggECEgJAAlKCjwKmAAAAAEAAAAoALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(t,e,n){var o=n(21),r=n(138);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){(e=n(22)(!1)).push([t.i,".w-e-toolbar {\n  display: flex;\n  padding: 0 6px;\n  flex-wrap: wrap;\n  /* 单个菜单 */\n}\n.w-e-toolbar .w-e-menu {\n  position: relative;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n}\n.w-e-toolbar .w-e-menu i {\n  color: #999;\n}\n.w-e-toolbar .w-e-menu:hover {\n  background-color: #F6F6F6;\n}\n.w-e-toolbar .w-e-menu:hover i {\n  color: #333;\n}\n.w-e-toolbar .w-e-active i {\n  color: #1e88e5;\n}\n.w-e-toolbar .w-e-active:hover i {\n  color: #1e88e5;\n}\n",""]),t.exports=e},function(t,e,n){var o=n(21),r=n(140);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){(e=n(22)(!1)).push([t.i,'.w-e-text-container {\n  position: relative;\n}\n.w-e-text-container .w-e-progress {\n  position: absolute;\n  background-color: #1e88e5;\n  top: 0;\n  left: 0;\n  height: 1px;\n}\n.w-e-text-container .placeholder {\n  color: #D4D4D4;\n  position: absolute;\n  font-size: 11pt;\n  line-height: 22px;\n  left: 10px;\n  top: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: -1;\n}\n.w-e-text {\n  padding: 0 10px;\n  overflow-y: auto;\n}\n.w-e-text p,\n.w-e-text h1,\n.w-e-text h2,\n.w-e-text h3,\n.w-e-text h4,\n.w-e-text h5,\n.w-e-text table,\n.w-e-text pre {\n  margin: 10px 0;\n  line-height: 1.5;\n}\n.w-e-text ul,\n.w-e-text ol {\n  margin: 10px 0 10px 20px;\n}\n.w-e-text blockquote {\n  display: block;\n  border-left: 8px solid #d0e5f2;\n  padding: 5px 10px;\n  margin: 10px 0;\n  line-height: 1.4;\n  font-size: 100%;\n  background-color: #f1f1f1;\n}\n.w-e-text code {\n  display: inline-block;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 3px 5px;\n  margin: 0 3px;\n}\n.w-e-text pre code {\n  display: block;\n}\n.w-e-text table {\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n}\n.w-e-text table td,\n.w-e-text table th {\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 3px 5px;\n  min-height: 30px;\n}\n.w-e-text table th {\n  border-bottom: 2px solid #ccc;\n  text-align: center;\n  background-color: #f1f1f1;\n}\n.w-e-text:focus {\n  outline: none;\n}\n.w-e-text img {\n  cursor: pointer;\n}\n.w-e-text img:hover {\n  box-shadow: 0 0 5px #333;\n}\n.w-e-tooltip {\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  position: absolute;\n}\n.w-e-tooltip-up::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-down::after {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-item-wrapper {\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0 5px;\n}\n.w-e-tooltip-item-wrapper:hover {\n  color: #ccc;\n  text-decoration: underline;\n}\n',""]),t.exports=e},function(t,e,n){var o=n(21),r=n(142);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){(e=n(22)(!1)).push([t.i,'.w-e-menu .w-e-panel-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border: 1px solid #ccc;\n  border-top: 0;\n  box-shadow: 1px 1px 2px #ccc;\n  color: #333;\n  background-color: #fff;\n  text-align: left;\n  /* 为 emotion panel 定制的样式 */\n  /* 上传图片的 panel 定制样式 */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px;\n  margin: 2px 5px 0 0;\n  cursor: pointer;\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close:hover {\n  color: #333;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title {\n  list-style: none;\n  display: flex;\n  font-size: 14px;\n  margin: 2px 10px 0 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {\n  padding: 3px 5px;\n  color: #999;\n  cursor: pointer;\n  margin: 0 3px;\n  position: relative;\n  top: 1px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {\n  color: #333;\n  border-bottom: 1px solid #333;\n  cursor: default;\n  font-weight: 700;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content {\n  padding: 10px 15px 10px 15px;\n  font-size: 16px;\n  /* 输入框的样式 */\n  /* 按钮的样式 */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {\n  outline: none;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  margin-top: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {\n  border-color: #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-size: 14px;\n  height: 20px;\n  color: #333;\n  text-align: left;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {\n  width: 30px;\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {\n  border-bottom: 2px solid #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {\n  font-size: 14px;\n  color: #1e88e5;\n  border: none;\n  padding: 5px 10px;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {\n  float: left;\n  margin-right: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {\n  float: right;\n  margin-left: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {\n  color: #c24f4a;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {\n  background-color: #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0 3px;\n  display: inline-block;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container {\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn {\n  display: inline-block;\n  color: #999;\n  cursor: pointer;\n  font-size: 60px;\n  line-height: 1;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover {\n  color: #333;\n}\n',""]),t.exports=e},function(t,e,n){var o=n(21),r=n(144);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){(e=n(22)(!1)).push([t.i,".w-e-toolbar .w-e-droplist {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n  border: 1px solid #f1f1f1;\n  border-right-color: #ccc;\n  border-bottom-color: #ccc;\n}\n.w-e-toolbar .w-e-droplist .w-e-dp-title {\n  text-align: center;\n  color: #999;\n  line-height: 2;\n  border-bottom: 1px solid #f1f1f1;\n  font-size: 13px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list {\n  list-style: none;\n  line-height: 1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {\n  color: #333;\n  padding: 5px 0;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block {\n  list-style: none;\n  text-align: left;\n  padding: 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {\n  display: inline-block;\n  padding: 3px 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";var o=n(0)(n(146));Element.prototype.matches||(Element.prototype.matches=function(t){for(var e=this.ownerDocument.querySelectorAll(t),n=e.length;n>=0&&e.item(n)!==this;n--);return n>-1}),window.Promise=o.default},function(t,e,n){t.exports=n(147)},function(t,e,n){var o=n(148);t.exports=o},function(t,e,n){n(53),n(54),n(47),n(159),n(166),n(167);var o=n(11);t.exports=o.Promise},function(t,e,n){var o=n(55),r=n(43),i=function(t){return function(e,n){var i,a,u=String(r(e)),l=o(n),c=u.length;return l<0||l>=c?t?"":void 0:(i=u.charCodeAt(l))<55296||i>56319||l+1===c||(a=u.charCodeAt(l+1))<56320||a>57343?t?u.charAt(l):i:t?u.slice(l,l+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var o=n(8),r=n(91),i=o.WeakMap;t.exports="function"==typeof i&&/native code/.test(r(i))},function(t,e,n){var o=n(8),r=n(18);t.exports=function(t,e){try{r(o,t,e)}catch(n){o[t]=e}return e}},function(t,e,n){"use strict";var o=n(93).IteratorPrototype,r=n(58),i=n(42),a=n(29),u=n(38),l=function(){return this};t.exports=function(t,e,n){var c=e+" Iterator";return t.prototype=r(o,{next:i(1,n)}),a(t,c,!1,!0),u[c]=l,t}},function(t,e,n){var o=n(12);t.exports=!o((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var o=n(14),r=n(16),i=n(20),a=n(59);t.exports=o?Object.defineProperties:function(t,e){i(t);for(var n,o=a(e),u=o.length,l=0;u>l;)r.f(t,n=o[l++],e[n]);return t}},function(t,e,n){"use strict";var o=n(74),r=n(60);t.exports=o?{}.toString:function(){return"[object "+r(this)+"]"}},function(t,e,n){var o=n(13);t.exports=function(t){if(!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var o=n(25),r=n(75),i=n(38),a=n(33),u=n(69),l=a.set,c=a.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,e){l(this,{type:"Array Iterator",target:o(t),index:0,kind:e})}),(function(){var t=c(this),e=t.target,n=t.kind,o=t.index++;return!e||o>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:o,done:!1}:"values"==n?{value:e[o],done:!1}:{value:[o,e[o]],done:!1}}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var o,r,i,a,u=n(5),l=n(34),c=n(8),s=n(37),f=n(99),d=n(46),p=n(100),A=n(29),h=n(101),v=n(13),g=n(32),m=n(76),y=n(28),w=n(91),x=n(61),b=n(163),E=n(102),_=n(103).set,M=n(164),C=n(105),S=n(165),B=n(78),k=n(106),I=n(33),N=n(90),T=n(9),R=n(79),D=T("species"),Q="Promise",H=I.get,P=I.set,F=I.getterFor(Q),O=f,L=c.TypeError,j=c.document,U=c.process,Y=s("fetch"),z=B.f,G=z,$="process"==y(U),J=!!(j&&j.createEvent&&c.dispatchEvent),V=N(Q,(function(){if(!(w(O)!==String(O))){if(66===R)return!0;if(!$&&"function"!=typeof PromiseRejectionEvent)return!0}if(l&&!O.prototype.finally)return!0;if(R>=51&&/native code/.test(O))return!1;var t=O.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[D]=e,!(t.then((function(){}))instanceof e)})),K=V||!b((function(t){O.all(t).catch((function(){}))})),W=function(t){var e;return!(!v(t)||"function"!=typeof(e=t.then))&&e},X=function(t,e,n){if(!e.notified){e.notified=!0;var o=e.reactions;M((function(){for(var r=e.value,i=1==e.state,a=0;o.length>a;){var u,l,c,s=o[a++],f=i?s.ok:s.fail,d=s.resolve,p=s.reject,A=s.domain;try{f?(i||(2===e.rejection&&et(t,e),e.rejection=1),!0===f?u=r:(A&&A.enter(),u=f(r),A&&(A.exit(),c=!0)),u===s.promise?p(L("Promise-chain cycle")):(l=W(u))?l.call(u,d,p):d(u)):p(r)}catch(t){A&&!c&&A.exit(),p(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&Z(t,e)}))}},q=function(t,e,n){var o,r;J?((o=j.createEvent("Event")).promise=e,o.reason=n,o.initEvent(t,!1,!0),c.dispatchEvent(o)):o={promise:e,reason:n},(r=c["on"+t])?r(o):"unhandledrejection"===t&&S("Unhandled promise rejection",n)},Z=function(t,e){_.call(c,(function(){var n,o=e.value;if(tt(e)&&(n=k((function(){$?U.emit("unhandledRejection",o,t):q("unhandledrejection",t,o)})),e.rejection=$||tt(e)?2:1,n.error))throw n.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,e){_.call(c,(function(){$?U.emit("rejectionHandled",t):q("rejectionhandled",t,e.value)}))},nt=function(t,e,n,o){return function(r){t(e,n,r,o)}},ot=function(t,e,n,o){e.done||(e.done=!0,o&&(e=o),e.value=n,e.state=2,X(t,e,!0))},rt=function(t,e,n,o){if(!e.done){e.done=!0,o&&(e=o);try{if(t===n)throw L("Promise can't be resolved itself");var r=W(n);r?M((function(){var o={done:!1};try{r.call(n,nt(rt,t,o,e),nt(ot,t,o,e))}catch(n){ot(t,o,n,e)}})):(e.value=n,e.state=1,X(t,e,!1))}catch(n){ot(t,{done:!1},n,e)}}};V&&(O=function(t){m(this,O,Q),g(t),o.call(this);var e=H(this);try{t(nt(rt,this,e),nt(ot,this,e))}catch(t){ot(this,e,t)}},(o=function(t){P(this,{type:Q,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=p(O.prototype,{then:function(t,e){var n=F(this),o=z(E(this,O));return o.ok="function"!=typeof t||t,o.fail="function"==typeof e&&e,o.domain=$?U.domain:void 0,n.parent=!0,n.reactions.push(o),0!=n.state&&X(this,n,!1),o.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new o,e=H(t);this.promise=t,this.resolve=nt(rt,t,e),this.reject=nt(ot,t,e)},B.f=z=function(t){return t===O||t===i?new r(t):G(t)},l||"function"!=typeof f||(a=f.prototype.then,d(f.prototype,"then",(function(t,e){var n=this;return new O((function(t,e){a.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof Y&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return C(O,Y.apply(c,arguments))}}))),u({global:!0,wrap:!0,forced:V},{Promise:O}),A(O,Q,!1,!0),h(Q),i=s(Q),u({target:Q,stat:!0,forced:V},{reject:function(t){var e=z(this);return e.reject.call(void 0,t),e.promise}}),u({target:Q,stat:!0,forced:l||V},{resolve:function(t){return C(l&&this===i?O:this,t)}}),u({target:Q,stat:!0,forced:K},{all:function(t){var e=this,n=z(e),o=n.resolve,r=n.reject,i=k((function(){var n=g(e.resolve),i=[],a=0,u=1;x(t,(function(t){var l=a++,c=!1;i.push(void 0),u++,n.call(e,t).then((function(t){c||(c=!0,i[l]=t,--u||o(i))}),r)})),--u||o(i)}));return i.error&&r(i.value),n.promise},race:function(t){var e=this,n=z(e),o=n.reject,r=k((function(){var r=g(e.resolve);x(t,(function(t){r.call(e,t).then(n.resolve,o)}))}));return r.error&&o(r.value),n.promise}})},function(t,e,n){var o=n(9),r=n(38),i=o("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[i]===t)}},function(t,e,n){var o=n(60),r=n(38),i=n(9)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||r[o(t)]}},function(t,e,n){var o=n(20);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},function(t,e,n){var o=n(9)("iterator"),r=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){r=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i={};i[o]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var o,r,i,a,u,l,c,s,f=n(8),d=n(65).f,p=n(28),A=n(103).set,h=n(104),v=f.MutationObserver||f.WebKitMutationObserver,g=f.process,m=f.Promise,y="process"==p(g),w=d(f,"queueMicrotask"),x=w&&w.value;x||(o=function(){var t,e;for(y&&(t=g.domain)&&t.exit();r;){e=r.fn,r=r.next;try{e()}catch(t){throw r?a():i=void 0,t}}i=void 0,t&&t.enter()},y?a=function(){g.nextTick(o)}:v&&!h?(u=!0,l=document.createTextNode(""),new v(o).observe(l,{characterData:!0}),a=function(){l.data=u=!u}):m&&m.resolve?(c=m.resolve(void 0),s=c.then,a=function(){s.call(c,o)}):a=function(){A.call(f,o)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),r||(r=e,a()),i=e}},function(t,e,n){var o=n(8);t.exports=function(t,e){var n=o.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e,n){"use strict";var o=n(5),r=n(32),i=n(78),a=n(106),u=n(61);o({target:"Promise",stat:!0},{allSettled:function(t){var e=this,n=i.f(e),o=n.resolve,l=n.reject,c=a((function(){var n=r(e.resolve),i=[],a=0,l=1;u(t,(function(t){var r=a++,u=!1;i.push(void 0),l++,n.call(e,t).then((function(t){u||(u=!0,i[r]={status:"fulfilled",value:t},--l||o(i))}),(function(t){u||(u=!0,i[r]={status:"rejected",reason:t},--l||o(i))}))})),--l||o(i)}));return c.error&&l(c.value),n.promise}})},function(t,e,n){"use strict";var o=n(5),r=n(34),i=n(99),a=n(12),u=n(37),l=n(102),c=n(105),s=n(46);o({target:"Promise",proto:!0,real:!0,forced:!!i&&a((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=l(this,u("Promise")),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then((function(){return n}))}:t,n?function(n){return c(e,t()).then((function(){throw n}))}:t)}}),r||"function"!=typeof i||i.prototype.finally||s(i.prototype,"finally",u("Promise").prototype.finally)},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=o(n(1)),a=o(n(3)),u=a.default?function(t,e,n,o){void 0===o&&(o=n),(0,i.default)(t,o,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,o){void 0===o&&(o=n),t[o]=e[n]},l=a.default?function(t,e){(0,i.default)(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e},c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&u(e,t,n);return l(e,t),e},s=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var f=s(n(2)),d=n(7),p=s(n(254)),A=s(n(268)),h=s(n(270)),v=s(n(271)),g=s(n(289)),m=s(n(365)),y=s(n(366)),w=s(n(367)),x=s(n(368)),b=c(n(369)),E=s(n(372)),_=s(n(373)),M=s(n(375)),C=s(n(24)),S=s(n(123)),B=s(n(19)),k=s(n(27)),I=s(n(31)),N=s(n(41)),T=1,R=function(){function t(t,e){if(this.beforeDestroyHooks=[],this.id="wangEditor-"+T++,this.toolbarSelector=t,this.textSelector=e,null==t)throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");this.config=d.deepClone(p.default),this.$toolbarElem=f.default("<div></div>"),this.$textContainerElem=f.default("<div></div>"),this.$textElem=f.default("<div></div>"),this.toolbarElemId="",this.textElemId="",this.isFocus=!1,this.isComposing=!1,this.isCompatibleMode=!1,this.selection=new A.default(this),this.cmd=new h.default(this),this.txt=new v.default(this),this.menus=new g.default(this),this.zIndex=new E.default,this.change=new _.default(this),this.history=new M.default(this)}return t.prototype.initSelection=function(t){y.default(this,t)},t.prototype.create=function(){this.zIndex.init(this),this.isCompatibleMode=this.config.compatibleMode(),x.default(this),m.default(this),this.txt.init(),this.menus.init(),b.default(this),this.initSelection(!0),w.default(this),this.change.observe(),this.history.observe()},t.prototype.beforeDestroy=function(t){return this.beforeDestroyHooks.push(t),this},t.prototype.destroy=function(){var t,e=this;(0,r.default)(t=this.beforeDestroyHooks).call(t,(function(t){return t.call(e)})),this.$toolbarElem.remove(),this.$textContainerElem.remove()},t.prototype.fullScreen=function(){b.setFullScreen(this)},t.prototype.unFullScreen=function(){b.setUnFullScreen(this)},t.menuConstructors={},t.$=f.default,t}();R.menuConstructors={BtnMenu:C.default,DropList:S.default,DropListMenu:B.default,Panel:k.default,PanelMenu:I.default,Tooltip:N.default},e.default=R},function(t,e,n){n(47);var o=n(170),r=n(60),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};t.exports=function(t){var e=t.forEach;return t===i||t instanceof Array&&e===i.forEach||a.hasOwnProperty(r(t))?o:e}},function(t,e,n){var o=n(171);t.exports=o},function(t,e,n){n(172);var o=n(17);t.exports=o("Array").forEach},function(t,e,n){"use strict";var o=n(5),r=n(173);o({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},function(t,e,n){"use strict";var o=n(39).forEach,r=n(107),i=n(26),a=r("forEach"),u=i("forEach");t.exports=a&&u?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var o=n(175);t.exports=o},function(t,e,n){n(176);var o=n(11).Object;t.exports=function(t,e){return o.create(t,e)}},function(t,e,n){n(5)({target:"Object",stat:!0,sham:!n(14)},{create:n(58)})},function(t,e,n){var o=n(178);t.exports=o},function(t,e,n){var o=n(179),r=n(181),i=Array.prototype,a=String.prototype;t.exports=function(t){var e=t.includes;return t===i||t instanceof Array&&e===i.includes?o:"string"==typeof t||t===a||t instanceof String&&e===a.includes?r:e}},function(t,e,n){n(180);var o=n(17);t.exports=o("Array").includes},function(t,e,n){"use strict";var o=n(5),r=n(71).includes,i=n(75);o({target:"Array",proto:!0,forced:!n(26)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,e,n){n(182);var o=n(17);t.exports=o("String").includes},function(t,e,n){"use strict";var o=n(5),r=n(183),i=n(43);o({target:"String",proto:!0,forced:!n(185)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var o=n(184);t.exports=function(t){if(o(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,n){var o=n(13),r=n(28),i=n(9)("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},function(t,e,n){var o=n(9)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(t){}}return!1}},function(t,e,n){var o=n(187);t.exports=o},function(t,e,n){var o=n(188),r=Array.prototype;t.exports=function(t){var e=t.filter;return t===r||t instanceof Array&&e===r.filter?o:e}},function(t,e,n){n(189);var o=n(17);t.exports=o("Array").filter},function(t,e,n){"use strict";var o=n(5),r=n(39).filter,i=n(49),a=n(26),u=i("filter"),l=a("filter");o({target:"Array",proto:!0,forced:!u||!l},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var o=n(191);t.exports=o},function(t,e,n){var o=n(192),r=Array.prototype;t.exports=function(t){var e=t.splice;return t===r||t instanceof Array&&e===r.splice?o:e}},function(t,e,n){n(193);var o=n(17);t.exports=o("Array").splice},function(t,e,n){"use strict";var o=n(5),r=n(72),i=n(55),a=n(36),u=n(35),l=n(80),c=n(83),s=n(49),f=n(26),d=s("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),A=Math.max,h=Math.min;o({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,e){var n,o,s,f,d,p,v=u(this),g=a(v.length),m=r(t,g),y=arguments.length;if(0===y?n=o=0:1===y?(n=0,o=g-m):(n=y-2,o=h(A(i(e),0),g-m)),g+n-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=l(v,o),f=0;f<o;f++)(d=m+f)in v&&c(s,f,v[d]);if(s.length=o,n<o){for(f=m;f<g-o;f++)p=f+n,(d=f+o)in v?v[p]=v[d]:delete v[p];for(f=g;f>g-o+n;f--)delete v[f-1]}else if(n>o)for(f=g-o;f>m;f--)p=f+n-1,(d=f+o-1)in v?v[p]=v[d]:delete v[p];for(f=0;f<n;f++)v[f+m]=arguments[f+2];return v.length=g-o+n,s}})},function(t,e,n){var o=n(195);t.exports=o},function(t,e,n){var o=n(196),r=Array.prototype;t.exports=function(t){var e=t.indexOf;return t===r||t instanceof Array&&e===r.indexOf?o:e}},function(t,e,n){n(197);var o=n(17);t.exports=o("Array").indexOf},function(t,e,n){"use strict";var o=n(5),r=n(71).indexOf,i=n(107),a=n(26),u=[].indexOf,l=!!u&&1/[1].indexOf(1,-0)<0,c=i("indexOf"),s=a("indexOf",{ACCESSORS:!0,1:0});o({target:"Array",proto:!0,forced:l||!c||!s},{indexOf:function(t){return l?u.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var o=n(199);t.exports=o},function(t,e,n){n(200),n(53),n(54),n(47);var o=n(11);t.exports=o.Map},function(t,e,n){"use strict";var o=n(110),r=n(112);t.exports=o("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},function(t,e,n){var o=n(12);t.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(t,e,n){var o=n(203);t.exports=o},function(t,e,n){var o=n(204),r=String.prototype;t.exports=function(t){var e=t.trim;return"string"==typeof t||t===r||t instanceof String&&e===r.trim?o:e}},function(t,e,n){n(205);var o=n(17);t.exports=o("String").trim},function(t,e,n){"use strict";var o=n(5),r=n(84).trim;o({target:"String",proto:!0,forced:n(206)("trim")},{trim:function(){return r(this)}})},function(t,e,n){var o=n(12),r=n(62);t.exports=function(t){return o((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},function(t,e,n){var o=n(208);t.exports=o},function(t,e,n){var o=n(209),r=Array.prototype;t.exports=function(t){var e=t.map;return t===r||t instanceof Array&&e===r.map?o:e}},function(t,e,n){n(210);var o=n(17);t.exports=o("Array").map},function(t,e,n){"use strict";var o=n(5),r=n(39).map,i=n(49),a=n(26),u=i("map"),l=a("map");o({target:"Array",proto:!0,forced:!u||!l},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var o=n(212);t.exports=o},function(t,e,n){n(213);var o=n(11);t.exports=o.Array.isArray},function(t,e,n){n(5)({target:"Array",stat:!0},{isArray:n(48)})},function(t,e,n){t.exports=n(215)},function(t,e,n){var o=n(216);t.exports=o},function(t,e,n){n(115),n(54),n(47);var o=n(85);t.exports=o.f("iterator")},function(t,e,n){t.exports=n(218)},function(t,e,n){var o=n(219);n(238),n(239),n(240),n(241),n(242),t.exports=o},function(t,e,n){n(220),n(53),n(221),n(223),n(224),n(225),n(226),n(115),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237);var o=n(11);t.exports=o.Symbol},function(t,e,n){"use strict";var o=n(5),r=n(12),i=n(48),a=n(13),u=n(35),l=n(36),c=n(83),s=n(80),f=n(49),d=n(9),p=n(79),A=d("isConcatSpreadable"),h=p>=51||!r((function(){var t=[];return t[A]=!1,t.concat()[0]!==t})),v=f("concat"),g=function(t){if(!a(t))return!1;var e=t[A];return void 0!==e?!!e:i(t)};o({target:"Array",proto:!0,forced:!h||!v},{concat:function(t){var e,n,o,r,i,a=u(this),f=s(a,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(g(i=-1===e?a:arguments[e])){if(d+(r=l(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,d++)n in i&&c(f,d,i[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(f,d++,i)}return f.length=d,f}})},function(t,e,n){"use strict";var o=n(5),r=n(8),i=n(37),a=n(34),u=n(14),l=n(70),c=n(95),s=n(12),f=n(15),d=n(48),p=n(13),A=n(20),h=n(35),v=n(25),g=n(52),m=n(42),y=n(58),w=n(59),x=n(116),b=n(222),E=n(117),_=n(65),M=n(16),C=n(51),S=n(18),B=n(46),k=n(68),I=n(56),N=n(45),T=n(57),R=n(9),D=n(85),Q=n(10),H=n(29),P=n(33),F=n(39).forEach,O=I("hidden"),L=R("toPrimitive"),j=P.set,U=P.getterFor("Symbol"),Y=Object.prototype,z=r.Symbol,G=i("JSON","stringify"),$=_.f,J=M.f,V=b.f,K=C.f,W=k("symbols"),X=k("op-symbols"),q=k("string-to-symbol-registry"),Z=k("symbol-to-string-registry"),tt=k("wks"),et=r.QObject,nt=!et||!et.prototype||!et.prototype.findChild,ot=u&&s((function(){return 7!=y(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=$(Y,e);o&&delete Y[e],J(t,e,n),o&&t!==Y&&J(Y,e,o)}:J,rt=function(t,e){var n=W[t]=y(z.prototype);return j(n,{type:"Symbol",tag:t,description:e}),u||(n.description=e),n},it=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},at=function(t,e,n){t===Y&&at(X,e,n),A(t);var o=g(e,!0);return A(n),f(W,o)?(n.enumerable?(f(t,O)&&t[O][o]&&(t[O][o]=!1),n=y(n,{enumerable:m(0,!1)})):(f(t,O)||J(t,O,m(1,{})),t[O][o]=!0),ot(t,o,n)):J(t,o,n)},ut=function(t,e){A(t);var n=v(e),o=w(n).concat(ft(n));return F(o,(function(e){u&&!lt.call(n,e)||at(t,e,n[e])})),t},lt=function(t){var e=g(t,!0),n=K.call(this,e);return!(this===Y&&f(W,e)&&!f(X,e))&&(!(n||!f(this,e)||!f(W,e)||f(this,O)&&this[O][e])||n)},ct=function(t,e){var n=v(t),o=g(e,!0);if(n!==Y||!f(W,o)||f(X,o)){var r=$(n,o);return!r||!f(W,o)||f(n,O)&&n[O][o]||(r.enumerable=!0),r}},st=function(t){var e=V(v(t)),n=[];return F(e,(function(t){f(W,t)||f(N,t)||n.push(t)})),n},ft=function(t){var e=t===Y,n=V(e?X:v(t)),o=[];return F(n,(function(t){!f(W,t)||e&&!f(Y,t)||o.push(W[t])})),o};(l||(B((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===Y&&n.call(X,t),f(this,O)&&f(this[O],e)&&(this[O][e]=!1),ot(this,e,m(1,t))};return u&&nt&&ot(Y,e,{configurable:!0,set:n}),rt(e,t)}).prototype,"toString",(function(){return U(this).tag})),B(z,"withoutSetter",(function(t){return rt(T(t),t)})),C.f=lt,M.f=at,_.f=ct,x.f=b.f=st,E.f=ft,D.f=function(t){return rt(R(t),t)},u&&(J(z.prototype,"description",{configurable:!0,get:function(){return U(this).description}}),a||B(Y,"propertyIsEnumerable",lt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:z}),F(w(tt),(function(t){Q(t)})),o({target:"Symbol",stat:!0,forced:!l},{for:function(t){var e=String(t);if(f(q,e))return q[e];var n=z(e);return q[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),o({target:"Object",stat:!0,forced:!l,sham:!u},{create:function(t,e){return void 0===e?y(t):ut(y(t),e)},defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:ct}),o({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:st,getOwnPropertySymbols:ft}),o({target:"Object",stat:!0,forced:s((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(h(t))}}),G)&&o({target:"JSON",stat:!0,forced:!l||s((function(){var t=z();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}))},{stringify:function(t,e,n){for(var o,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(o=e,(p(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!it(e))return e}),r[1]=e,G.apply(null,r)}});z.prototype[L]||S(z.prototype,L,z.prototype.valueOf),H(z,"Symbol"),N[O]=!0},function(t,e,n){var o=n(25),r=n(116).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return r(t)}catch(t){return a.slice()}}(t):r(o(t))}},function(t,e,n){n(10)("asyncIterator")},function(t,e){},function(t,e,n){n(10)("hasInstance")},function(t,e,n){n(10)("isConcatSpreadable")},function(t,e,n){n(10)("match")},function(t,e,n){n(10)("matchAll")},function(t,e,n){n(10)("replace")},function(t,e,n){n(10)("search")},function(t,e,n){n(10)("species")},function(t,e,n){n(10)("split")},function(t,e,n){n(10)("toPrimitive")},function(t,e,n){n(10)("toStringTag")},function(t,e,n){n(10)("unscopables")},function(t,e,n){n(29)(Math,"Math",!0)},function(t,e,n){var o=n(8);n(29)(o.JSON,"JSON",!0)},function(t,e,n){n(10)("asyncDispose")},function(t,e,n){n(10)("dispose")},function(t,e,n){n(10)("observable")},function(t,e,n){n(10)("patternMatch")},function(t,e,n){n(10)("replaceAll")},function(t,e,n){n(244);var o=n(11);t.exports=o.setTimeout},function(t,e,n){var o=n(5),r=n(8),i=n(77),a=[].slice,u=function(t){return function(e,n){var o=arguments.length>2,r=o?a.call(arguments,2):void 0;return t(o?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,n)}};o({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(r.setTimeout),setInterval:u(r.setInterval)})},function(t,e,n){var o=n(246);t.exports=o},function(t,e,n){var o=n(247),r=Array.prototype;t.exports=function(t){var e=t.slice;return t===r||t instanceof Array&&e===r.slice?o:e}},function(t,e,n){n(248);var o=n(17);t.exports=o("Array").slice},function(t,e,n){"use strict";var o=n(5),r=n(13),i=n(48),a=n(72),u=n(36),l=n(25),c=n(83),s=n(9),f=n(49),d=n(26),p=f("slice"),A=d("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),v=[].slice,g=Math.max;o({target:"Array",proto:!0,forced:!p||!A},{slice:function(t,e){var n,o,s,f=l(this),d=u(f.length),p=a(t,d),A=a(void 0===e?d:e,d);if(i(f)&&("function"!=typeof(n=f.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[h])&&(n=void 0):n=void 0,n===Array||void 0===n))return v.call(f,p,A);for(o=new(void 0===n?Array:n)(g(A-p,0)),s=0;p<A;p++,s++)p in f&&c(o,s,f[p]);return o.length=s,o}})},function(t,e,n){t.exports=n(250)},function(t,e,n){var o=n(251);t.exports=o},function(t,e,n){n(252);var o=n(11);t.exports=o.parseInt},function(t,e,n){var o=n(5),r=n(253);o({global:!0,forced:parseInt!=r},{parseInt:r})},function(t,e,n){var o=n(8),r=n(84).trim,i=n(62),a=o.parseInt,u=/^[+-]?0[Xx]/,l=8!==a(i+"08")||22!==a(i+"0x16");t.exports=l?function(t,e){var n=r(String(t));return a(n,e>>>0||(u.test(n)?16:10))}:a},function(t,e,n){"use strict";var o=n(0),r=o(n(255)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=i(n(260)),u=i(n(261)),l=i(n(119)),c=i(n(262)),s=i(n(263)),f=i(n(264)),d=i(n(265)),p=i(n(266)),A=i(n(267)),h=(0,r.default)({},a.default,u.default,l.default,s.default,c.default,f.default,d.default,p.default,A.default,{linkCheck:function(t,e){return!0}},{linkImgCheck:function(t){return!0}});e.default=h},function(t,e,n){t.exports=n(256)},function(t,e,n){var o=n(257);t.exports=o},function(t,e,n){n(258);var o=n(11);t.exports=o.Object.assign},function(t,e,n){var o=n(5),r=n(259);o({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},function(t,e,n){"use strict";var o=n(14),r=n(12),i=n(59),a=n(117),u=n(51),l=n(35),c=n(66),s=Object.assign,f=Object.defineProperty;t.exports=!s||r((function(){if(o&&1!==s({b:1},s(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol();return t[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||"abcdefghijklmnopqrst"!=i(s({},e)).join("")}))?function(t,e){for(var n=l(t),r=arguments.length,s=1,f=a.f,d=u.f;r>s;)for(var p,A=c(arguments[s++]),h=f?i(A).concat(f(A)):i(A),v=h.length,g=0;v>g;)p=h[g++],o&&!d.call(A,p)||(n[p]=A[p]);return n}:s},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var o="http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal",r="http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal";e.default={menus:["head","bold","fontSize","fontName","italic","underline","strikeThrough","indent","lineHeight","foreColor","backColor","link","list","justify","quote","emoticon","image","video","table","code","splitLine","undo","redo"],fontNames:["黑体","仿宋","楷体","标楷体","华文仿宋","华文楷体","宋体","微软雅黑","Arial","Tahoma","Verdana","Times New Roman","Courier New"],fontSizes:{"x-small":{name:"10px",value:"1"},small:{name:"13px",value:"2"},normal:{name:"16px",value:"3"},large:{name:"18px",value:"4"},"x-large":{name:"24px",value:"5"},"xx-large":{name:"32px",value:"6"},"xxx-large":{name:"48px",value:"7"}},colors:["#000000","#eeece0","#1c487f","#4d80bf","#c24f4a","#8baa4a","#7b5ba1","#46acc8","#f9963b","#ffffff"],languageType:["Bash","C","C#","C++","CSS","Java","JavaScript","JSON","TypeScript","Plain text","Html","XML","SQL","Go","Kotlin","Lua","Markdown","PHP","Python","Shell Session","Ruby"],languageTab:"　　　　",emotions:[{title:"默认",type:"image",content:[{alt:"[坏笑]",src:o+"/50/pcmoren_huaixiao_org.png"},{alt:"[舔屏]",src:o+"/40/pcmoren_tian_org.png"},{alt:"[污]",src:o+"/3c/pcmoren_wu_org.png"}]},{title:"新浪",type:"image",content:[{src:r+"/7a/shenshou_thumb.gif",alt:"[草泥马]"},{src:r+"/60/horse2_thumb.gif",alt:"[神马]"},{src:r+"/bc/fuyun_thumb.gif",alt:"[浮云]"}]},{title:"emoji",type:"emoji",content:"😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐".split(/\s/)},{title:"手势",type:"emoji",content:["🙌","👏","👋","👍","👎","👊","✊","️👌","✋","👐","💪","🙏","️👆","👇","👈","👉","🖕","🖐","🤘"]}],lineHeights:["1","1.15","1.6","2","2.5","3"],undoLimit:20}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var o=n(30);e.default={onchangeTimeout:200,onchange:o.EMPTY_FN,onfocus:o.EMPTY_FN,onblur:o.EMPTY_FN}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default={pasteFilterStyle:!0,pasteIgnoreImg:!1,pasteTextHandle:function(t){return t}}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default={styleWithCSS:!1}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var o=n(30);e.default={showLinkImg:!0,linkImgCallback:o.EMPTY_FN,uploadImgServer:"",uploadImgShowBase64:!1,uploadImgMaxSize:5242880,uploadImgMaxLength:100,uploadFileName:"",uploadImgParams:{},uploadImgParamsWithUrl:!1,uploadImgHeaders:{},uploadImgHooks:{},uploadImgTimeout:1e4,withCredentials:!1,customUploadImg:null}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default={focus:!0,height:300,placeholder:"请输入正文",zIndexFullScreen:1e4,showFullScreen:!0}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default={lang:"zh-CN",languages:{"zh-CN":{wangEditor:{"插入":"插入","默认":"默认","创建":"创建","修改":"修改","如":"如","请输入正文":"请输入正文",menus:{dropListMenu:{"设置标题":"设置标题","背景颜色":"背景颜色","文字颜色":"文字颜色","设置字号":"设置字号","设置字体":"设置字体","设置缩进":"设置缩进","对齐方式":"对齐方式","设置行高":"设置行高","序列":"序列",head:{"正文":"正文"},indent:{"增加缩进":"增加缩进","减少缩进":"减少缩进"},justify:{"靠左":"靠左","居中":"居中","靠右":"靠右"},list:{"无序列表":"无序列表","有序列表":"有序列表"}},panelMenus:{emoticon:{"默认":"默认","新浪":"新浪",emoji:"emoji","手势":"手势"},image:{"图片链接":"图片链接","上传图片":"上传图片","网络图片":"网络图片"},link:{"链接":"链接","链接文字":"链接文字","取消链接":"取消链接","查看链接":"查看链接"},video:{"插入视频":"插入视频"},table:{"行":"行","列":"列","的":"的","表格":"表格","添加行":"添加行","删除行":"删除行","添加列":"添加列","删除列":"删除列","设置表头":"设置表头","取消表头":"取消表头","插入表格":"插入表格","删除表格":"删除表格"},code:{"删除代码":"删除代码","修改代码":"修改代码","插入代码":"插入代码"}}},validate:{"张图片":"张图片","大于":"大于","图片链接":"图片链接","不是图片":"不是图片","返回结果":"返回结果","上传图片超时":"上传图片超时","上传图片错误":"上传图片错误","上传图片失败":"上传图片失败","插入图片错误":"插入图片错误","一次最多上传":"一次最多上传","下载链接失败":"下载链接失败","图片验证未通过":"图片验证未通过","服务器返回状态":"服务器返回状态","上传图片返回结果错误":"上传图片返回结果错误","请替换为支持的图片类型":"请替换为支持的图片类型","您插入的网络图片无法识别":"您插入的网络图片无法识别","您刚才插入的图片链接未通过编辑器校验":"您刚才插入的图片链接未通过编辑器校验"}}},en:{wangEditor:{"插入":"insert","默认":"default","创建":"create","修改":"edit","如":"like","请输入正文":"please enter the text",menus:{dropListMenu:{"设置标题":"title","背景颜色":"background","文字颜色":"font color","设置字号":"font size","设置字体":"font family","设置缩进":"indent","对齐方式":"align","设置行高":"line heihgt","序列":"list",head:{"正文":"text"},indent:{"增加缩进":"indent","减少缩进":"outdent"},justify:{"靠左":"left","居中":"center","靠右":"right"},list:{"无序列表":"unordered","有序列表":"ordered"}},panelMenus:{emoticon:{"默认":"default","新浪":"sina",emoji:"emoji","手势":"gesture"},image:{"图片链接":"image link","上传图片":"upload image","网络图片":"network image"},link:{"链接":"link","链接文字":"link text","取消链接":"unlink","查看链接":"view links"},video:{"插入视频":"insert video"},table:{"行":"rows","列":"columns","的":" ","表格":"table","添加行":"insert row","删除行":"delete row","添加列":"insert column","删除列":"delete column","设置表头":"set header","取消表头":"cancel header","插入表格":"insert table","删除表格":"delete table"},code:{"删除代码":"delete code","修改代码":"edit code","插入代码":"insert code"}}},validate:{"张图片":"images","大于":"greater than","图片链接":"image link","不是图片":"is not image","返回结果":"return results","上传图片超时":"upload image timeout","上传图片错误":"upload image error","上传图片失败":"upload image failed","插入图片错误":"insert image error","一次最多上传":"once most at upload","下载链接失败":"download link failed","图片验证未通过":"image validate failed","服务器返回状态":"server return status","上传图片返回结果错误":"upload image return results error","请替换为支持的图片类型":"please replace with a supported image type","您插入的网络图片无法识别":"the network picture you inserted is not recognized","您刚才插入的图片链接未通过编辑器校验":"the image link you just inserted did not pass the editor verification"}}}}}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var o=n(7);e.default={compatibleMode:function(){return!(!o.UA.isIE()&&!o.UA.isOldEdge)},historyMaxSize:30}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(2)),i=n(7),a=o(n(269)),u=function(){function t(t){this.editor=t,this._currentRange=null}return t.prototype.getRange=function(){return this._currentRange},t.prototype.saveRange=function(t){if(t)this._currentRange=t;else{var e=window.getSelection();if(0!==e.rangeCount){var n=e.getRangeAt(0),o=this.getSelectionContainerElem(n);if(o)if("false"!==o.attr("contenteditable")&&!o.parentUntil("[contenteditable=false]"))this.editor.$textElem.isContain(o)&&(this._currentRange=n)}}},t.prototype.collapseRange=function(t){void 0===t&&(t=!1);var e=this._currentRange;e&&e.collapse(t)},t.prototype.getSelectionText=function(){var t=this._currentRange;return t?t.toString():""},t.prototype.getSelectionContainerElem=function(t){var e,n;if(e=t||this._currentRange)return n=e.commonAncestorContainer,r.default(1===n.nodeType?n:n.parentNode)},t.prototype.getSelectionStartElem=function(t){var e,n;if(e=t||this._currentRange)return n=e.startContainer,r.default(1===n.nodeType?n:n.parentNode)},t.prototype.getSelectionEndElem=function(t){var e,n;if(e=t||this._currentRange)return n=e.endContainer,r.default(1===n.nodeType?n:n.parentNode)},t.prototype.isSelectionEmpty=function(){var t=this._currentRange;return!(!t||!t.startContainer||t.startContainer!==t.endContainer||t.startOffset!==t.endOffset)},t.prototype.restoreSelection=function(){var t=window.getSelection(),e=this._currentRange;t&&e&&(t.removeAllRanges(),t.addRange(e))},t.prototype.createEmptyRange=function(){var t,e=this.editor,n=this.getRange();if(n&&this.isSelectionEmpty())try{i.UA.isWebkit()?(e.cmd.do("insertHTML","&#8203;"),n.setEnd(n.endContainer,n.endOffset+1),this.saveRange(n)):(t=r.default("<strong>&#8203;</strong>"),e.cmd.do("insertElem",t),this.createRangeByElem(t,!0))}catch(t){}},t.prototype.createRangeByElem=function(t,e,n){if(t.length){var o=t.elems[0],r=document.createRange();n?r.selectNodeContents(o):r.selectNode(o),null!=e&&r.collapse(e),this.saveRange(r)}},t.prototype.getSelectionRangeTopNodes=function(t){var e=new a.default(t);return e.init(),e.getSelectionNodes()},t}();e.default=u},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(2)),i=function(){function t(t){this.editor=t,this.$nodeList=[],this.$startElem=r.default(t.selection.getSelectionStartElem()).getNodeTop(this.editor),this.$endElem=r.default(t.selection.getSelectionEndElem()).getNodeTop(this.editor)}return t.prototype.init=function(){this.recordSelectionNodes(r.default(this.$startElem))},t.prototype.addNodeList=function(t){this.$nodeList.push(r.default(t))},t.prototype.isEndElem=function(t){var e;return null===(e=this.$endElem)||void 0===e?void 0:e.equal(t)},t.prototype.getNextSibling=function(t){return r.default(t.elems[0].nextSibling)},t.prototype.recordSelectionNodes=function(t){var e=t.getNodeTop(this.editor);e.length>0&&(this.addNodeList(e),this.isEndElem(e)||this.recordSelectionNodes(this.getNextSibling(e)))},t.prototype.getSelectionNodes=function(){return this.$nodeList},t}();e.default=i},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(2)),i=function(){function t(t){this.editor=t}return t.prototype.do=function(t,e){var n=this.editor;n.config.styleWithCSS&&document.execCommand("styleWithCSS",!1,"true");var o=n.selection;if(o.getRange()){switch(o.restoreSelection(),t){case"insertHTML":this.insertHTML(e);break;case"insertElem":this.insertElem(e);break;default:this.execCommand(t,e)}n.menus.changeActive(),o.saveRange(),o.restoreSelection()}},t.prototype.insertHTML=function(t){var e=this.editor,n=e.selection.getRange();null!=n&&(this.queryCommandSupported("insertHTML")?this.execCommand("insertHTML",t):n.insertNode&&(n.deleteContents(),n.insertNode(r.default(t).elems[0]),e.selection.collapseRange()))},t.prototype.insertElem=function(t){var e=this.editor.selection.getRange();null!=e&&e.insertNode&&(e.deleteContents(),e.insertNode(t.elems[0]))},t.prototype.execCommand=function(t,e){document.execCommand(t,!1,e)},t.prototype.queryCommandValue=function(t){return document.queryCommandValue(t)},t.prototype.queryCommandState=function(t){return document.queryCommandState(t)},t.prototype.queryCommandSupported=function(t){return document.queryCommandSupported(t)},t}();e.default=i},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=o(n(50)),a=o(n(23)),u=o(n(64)),l=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var c=l(n(2)),s=l(n(276)),f=n(7),d=l(n(288)),p=function(){function t(t){this.editor=t,this.eventHooks={changeEvents:[],dropEvents:[],clickEvents:[],keyupEvents:[],tabUpEvents:[],tabDownEvents:[],enterUpEvents:[],enterDownEvents:[],deleteUpEvents:[],deleteDownEvents:[],pasteEvents:[],linkClickEvents:[],codeClickEvents:[],textScrollEvents:[],toolbarClickEvents:[],imgClickEvents:[],imgDragBarMouseDownEvents:[],tableClickEvents:[],menuClickEvents:[],dropListMenuHoverEvents:[],splitLineEvents:[]}}return t.prototype.init=function(){this._saveRange(),this._bindEventHooks(),s.default(this)},t.prototype.togglePlaceholder=function(){var t,e=this.html(),n=(0,u.default)(t=this.editor.$textContainerElem).call(t,".placeholder");n.hide(),e&&"<p><br></p>"!==e&&" "!==e||n.show()},t.prototype.clear=function(){this.html("<p><br></p>")},t.prototype.html=function(t){var e=this.editor,n=e.$textElem;if(null==t){var o=n.html();return o=(o=(o=o.replace(/\u200b/gm,"")).replace(/<p><\/p>/gim,"")).replace(/<p><br\/?><\/p>$/gim,"")}""===(t=(0,a.default)(t).call(t))&&(t="<p><br></p>"),0!==(0,i.default)(t).call(t,"<")&&(t="<p>"+t+"</p>"),n.html(t),e.initSelection()},t.prototype.getJSON=function(){var t=this.editor.$textElem;return d.default(t)},t.prototype.text=function(t){var e=this.editor,n=e.$textElem;e.$textContainerElem;if(null==t){var o=n.text();return o=o.replace(/\u200b/gm,"")}n.text("<p>"+t+"</p>"),e.initSelection()},t.prototype.append=function(t){var e=this.editor,n=e.$textElem;0!==(0,i.default)(t).call(t,"<")&&(t="<p>"+t+"</p>"),n.append(c.default(t)),e.initSelection()},t.prototype._saveRange=function(){var t=this.editor,e=t.$textElem;function n(){t.selection.saveRange(),t.menus.changeActive()}e.on("keyup",n),e.on("mousedown",(function(){e.on("mouseleave",n)})),e.on("mouseup",(function(){n(),e.off("mouseleave",n)}))},t.prototype._bindEventHooks=function(){var t=this.editor,e=t.$textElem,n=this.eventHooks;function o(t){t.preventDefault()}e.on("click",(function(t){var e=n.clickEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))})),e.on("keyup",(function(t){if(13===t.keyCode){var e=n.enterUpEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))}})),e.on("keyup",(function(t){var e=n.keyupEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))})),e.on("keyup",(function(t){if(8===t.keyCode){var e=n.deleteUpEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))}})),e.on("keydown",(function(t){if(8===t.keyCode){var e=n.deleteDownEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))}})),e.on("paste",(function(t){if(!f.UA.isIE()){t.preventDefault();var e=n.pasteEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))}})),e.on("keydown",(function(e){(t.isFocus||t.isCompatibleMode)&&(e.ctrlKey||e.metaKey)&&90===e.keyCode&&(e.preventDefault(),e.shiftKey?t.history.restore():t.history.revoke())})),e.on("keyup",(function(t){if(9===t.keyCode){t.preventDefault();var e=n.tabUpEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))}})),e.on("keydown",(function(t){if(9===t.keyCode){t.preventDefault();var e=n.tabDownEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))}})),e.on("scroll",f.throttle((function(t){var e=n.textScrollEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))}),100)),c.default(document).on("dragleave",o).on("drop",o).on("dragenter",o).on("dragover",o),t.beforeDestroy((function(){c.default(document).off("dragleave",o).off("drop",o).off("dragenter",o).off("dragover",o)})),e.on("drop",(function(t){t.preventDefault();var e=n.dropEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))})),e.on("click",(function(t){var e=null,o=t.target,i=c.default(o);if("A"===i.getNodeName())e=i;else{var a=i.parentUntil("a");null!=a&&(e=a)}if(null!=e){var u=n.linkClickEvents;(0,r.default)(u).call(u,(function(t){return t(e)}))}})),e.on("click",(function(t){var e=null,o=t.target,i=c.default(o);if("IMG"!==i.getNodeName()||i.elems[0].getAttribute("class")&&"eleImg"===i.elems[0].getAttribute("class")||i.elems[0].getAttribute("alt")||(t.stopPropagation(),e=i),null!=e){var a=n.imgClickEvents;(0,r.default)(a).call(a,(function(t){return t(e)}))}})),e.on("click",(function(t){var e=null,o=t.target,i=c.default(o);if("PRE"===i.getNodeName())e=i;else{var a=i.parentUntil("pre");null!=a&&(e=a)}if(null!=e){var u=n.codeClickEvents;(0,r.default)(u).call(u,(function(t){return t(e)}))}})),e.on("click",(function(e){var o=null,i=e.target,a=c.default(i);if("HR"===a.getNodeName()&&(o=a),null!=o){t.selection.createRangeByElem(o),t.selection.restoreSelection();var u=n.splitLineEvents;(0,r.default)(u).call(u,(function(t){return t(o)}))}})),t.$toolbarElem.on("click",(function(t){var e=n.toolbarClickEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))})),t.$textContainerElem.on("mousedown",(function(t){var e=t.target;if(c.default(e).hasClass("w-e-img-drag-rb")){var o=n.imgDragBarMouseDownEvents;(0,r.default)(o).call(o,(function(t){return t()}))}})),e.on("click",(function(t){var e,o=t.target;if(null!=(e=c.default(o).parentUntil("TABLE",o))){var i=n.tableClickEvents;(0,r.default)(i).call(i,(function(t){return t(e)}))}})),e.on("keydown",(function(t){if(13===t.keyCode){var e=n.enterDownEvents;(0,r.default)(e).call(e,(function(e){return e(t)}))}}))},t}();e.default=p},function(t,e,n){var o=n(273);t.exports=o},function(t,e,n){var o=n(274),r=Array.prototype;t.exports=function(t){var e=t.find;return t===r||t instanceof Array&&e===r.find?o:e}},function(t,e,n){n(275);var o=n(17);t.exports=o("Array").find},function(t,e,n){"use strict";var o=n(5),r=n(39).find,i=n(75),a=n(26),u=!0,l=a("find");"find"in[]&&Array(1).find((function(){u=!1})),o({target:"Array",proto:!0,forced:u||!l},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(277)),i=o(n(278)),a=o(n(279)),u=o(n(280)),l=o(n(287));e.default=function(t){var e=t.editor,n=t.eventHooks;r.default(e,n.enterUpEvents,n.enterDownEvents),i.default(e,n.deleteUpEvents,n.deleteDownEvents),a.default(e,n.tabDownEvents),u.default(e,n.pasteEvents),l.default(e,n.imgClickEvents)}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(2));e.default=function(t,e,n){function o(e){var n=r.default("<p><br></p>");n.insertBefore(e),t.selection.createRangeByElem(n,!0),t.selection.restoreSelection(),e.remove()}e.push((function(){var e=t.$textElem,n=t.selection.getSelectionContainerElem(),r=n.parent();"<code><br></code>"!==r.html()?r.equal(e)&&"P"!==n.getNodeName()&&(n.text()||o(n)):o(n)})),n.push((function(e){var n;t.selection.saveRange(null===(n=getSelection())||void 0===n?void 0:n.getRangeAt(0)),t.selection.getSelectionContainerElem().id===t.textElemId&&(e.preventDefault(),t.cmd.do("insertHTML","<p><br></p>"))}))}},function(t,e,n){"use strict";var o=n(0),r=o(n(23)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=i(n(2));e.default=function(t,e,n){e.push((function(){var e,n=t.$textElem,o=(0,r.default)(e=n.html().toLowerCase()).call(e);if(!o||"<br>"===o){var i=a.default("<p><br/></p>");n.html(" "),n.append(i),t.selection.createRangeByElem(i,!1,!0),t.selection.restoreSelection()}})),n.push((function(e){var n,o=t.$textElem;"<p><br></p>"!==(0,r.default)(n=o.html().toLowerCase()).call(n)||e.preventDefault()}))}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default=function(t,e){e.push((function(){if(t.cmd.queryCommandSupported("insertHTML")){var e=t.selection.getSelectionContainerElem();if(e){var n=e.parent(),o=e.getNodeName(),r=n.getNodeName();"CODE"==o||"CODE"===r||"PRE"===r||/hljs/.test(r)?t.cmd.do("insertHTML",t.config.languageTab):t.cmd.do("insertHTML","&nbsp;&nbsp;&nbsp;&nbsp;")}}}))}},function(t,e,n){"use strict";var o=n(0),r=o(n(23));(0,o(n(1)).default)(e,"__esModule",{value:!0});var i=n(120),a=n(7),u=n(30);function l(t){var e=t;return e=(e=(e=e.replace(/<br>|<br\/>/gim,"")).replace(/<div>/gim,"<p>").replace(/<\/div>/gim,"</p>")).replace(/<p><\/p>/gim,"<p><br></p>"),(0,r.default)(e).call(e)}e.default=function(t,e){e.push((function(e){var n=t.config,o=n.pasteFilterStyle,r=n.pasteIgnoreImg,c=n.pasteTextHandle,s=i.getPasteHtml(e,o,r),f=i.getPasteText(e);f=f.replace(/\n/gm,"<br>");var d=t.selection.getSelectionContainerElem();if(d){var p,A=null==d?void 0:d.getNodeName(),h=null==d?void 0:d.getNodeTop(t),v="";if(h.elems[0]&&(v=null==h?void 0:h.getNodeName()),"CODE"===A||"PRE"===v)return c&&a.isFunction(c)&&(f=""+(c(f)||"")),void t.cmd.do("insertHTML",(p=f,p.replace(/<br>|<br\/>/gm,"\n").replace(/<[^>]+>/gm,"")));if(u.urlRegex.test(f))return t.cmd.do("insertHTML",'<a href="'+f+'" target="_blank">'+f+"</a>");if(s)try{c&&a.isFunction(c)&&(s=""+(c(s)||"")),t.cmd.do("insertHTML",""+l(s))}catch(e){c&&a.isFunction(c)&&(f=""+(c(f)||"")),t.cmd.do("insertHTML",""+l(f))}}}))}},function(t,e,n){"use strict";var o=n(0),r=o(n(108)),i=o(n(6)),a=o(n(23)),u=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var l=n(282),c=u(n(286));function s(t,e){var n;return t=(0,a.default)(n=t.toLowerCase()).call(n),!!l.IGNORE_TAGS.has(t)||!(!e||"img"!==t)}e.default=function(t,e,n){void 0===e&&(e=!0),void 0===n&&(n=!1);var o=[],u="";(new c.default).parse(t,{startElement:function(t,c){if(function(t){(t=(0,a.default)(t).call(t))&&(l.EMPTY_TAGS.has(t)||(u=t))}(t),!s(t,n)){var f=l.NECESSARY_ATTRS.get(t)||[],d=[];(0,i.default)(c).call(c,(function(t){var n=t.name;"style"!==n?!1!==(0,r.default)(f).call(f,n)&&d.push(t):e||d.push(t)}));var p=function(t,e){var n="";n="<"+t;var o=[];return(0,i.default)(e).call(e,(function(t){o.push(t.name+'="'+t.value+'"')})),o.length>0&&(n=n+" "+o.join(" ")),n=n+(l.EMPTY_TAGS.has(t)?"/":"")+">"}(t,d);o.push(p)}},characters:function(t){(t=(0,a.default)(t).call(t))&&(s(u,n)||o.push(t))},endElement:function(t){if(!s(t,n)){var e=function(t){return"</"+t+">"}(t);o.push(e),u=""}},comment:function(t){}});var f=o.join("");return f=function(t){var e=/<span>(.*?)<\/span>/;return t.replace(/<span>.*?<\/span>/gi,(function(t){var n=t.match(e);return null==n?"":n[1]}))}(f)}},function(t,e,n){"use strict";var o=n(0),r=o(n(109)),i=o(n(121));(0,o(n(1)).default)(e,"__esModule",{value:!0}),e.TOP_LEVEL_TAGS=e.EMPTY_TAGS=e.NECESSARY_ATTRS=e.IGNORE_TAGS=void 0,e.IGNORE_TAGS=new i.default(["doctype","!doctype","html","head","meta","body","script","style","link","frame","iframe","title","svg","center"]),e.NECESSARY_ATTRS=new r.default([["img",["src","alt"]],["a",["href","target"]],["td",["colspan","rowspan"]],["th",["colspan","rowspan"]]]),e.EMPTY_TAGS=new i.default(["area","base","basefont","br","col","hr","img","input","isindex","embed"]),e.TOP_LEVEL_TAGS=new i.default(["h1","h2","h3","h4","h5","p","ul","ol","table","blockquote","pre","hr","form"])},function(t,e,n){var o=n(284);t.exports=o},function(t,e,n){n(285),n(53),n(54),n(47);var o=n(11);t.exports=o.Set},function(t,e,n){"use strict";var o=n(110),r=n(112);t.exports=o("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},function(t,e){function n(){}n.prototype={handler:null,startTagRe:/^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,endTagRe:/^<\/([^>\s]+)[^>]*>/m,attrRe:/([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,parse:function(t,e){e&&(this.contentHandler=e);for(var n,o,r,i=!1,a=this;t.length>0;)"\x3c!--"==t.substring(0,4)?-1!=(r=t.indexOf("--\x3e"))?(this.contentHandler.comment(t.substring(4,r)),t=t.substring(r+3),i=!1):i=!0:"</"==t.substring(0,2)?this.endTagRe.test(t)?(RegExp.leftContext,n=RegExp.lastMatch,o=RegExp.rightContext,n.replace(this.endTagRe,(function(){return a.parseEndTag.apply(a,arguments)})),t=o,i=!1):i=!0:"<"==t.charAt(0)&&(this.startTagRe.test(t)?(RegExp.leftContext,n=RegExp.lastMatch,o=RegExp.rightContext,n.replace(this.startTagRe,(function(){return a.parseStartTag.apply(a,arguments)})),t=o,i=!1):i=!0),i&&(-1==(r=t.indexOf("<"))?(this.contentHandler.characters(t),t=""):(this.contentHandler.characters(t.substring(0,r)),t=t.substring(r))),i=!0},parseStartTag:function(t,e,n){var o=this.parseAttributes(e,n);this.contentHandler.startElement(e,o)},parseEndTag:function(t,e){this.contentHandler.endElement(e)},parseAttributes:function(t,e){var n=this,o=[];return e.replace(this.attrRe,(function(e,r,i,a,u,l,c){o.push(n.parseAttribute(t,e,r,i,a,u,l,c))})),o},parseAttribute:function(t,e,n){var o="";arguments[7]?o=arguments[8]:arguments[5]?o=arguments[6]:arguments[3]&&(o=arguments[4]);var r=!o&&!arguments[3];return{name:n,value:r?null:o}}},t.exports=n},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default=function(t,e){e.push((function(e){t.selection.createRangeByElem(e),t.selection.restoreSelection()}))}},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=n(7),u=i(n(2));e.default=function t(e){var n=[],o=e.childNodes()||[];return(0,r.default)(o).call(o,(function(e){var o,r=e.nodeType;if(3===r&&(o=e.textContent||"",o=a.replaceHtmlSymbol(o)),1===r){(o=o={}).tag=e.nodeName.toLowerCase();for(var i=[],l=e.attributes||[],c=l.length||0,s=0;s<c;s++){var f=l[s];i.push({name:f.name,value:f.value})}o.attrs=i,o.children=t(u.default(e))}o&&n.push(o)})),n}},function(t,e,n){"use strict";var o=n(0),r=o(n(122)),i=o(n(118)),a=o(n(6)),u=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var l=u(n(295)),c=function(){function t(t){this.editor=t,this.menuList=[],this.constructorList=l.default}return t.prototype.extend=function(t,e){e&&"function"==typeof e&&(this.constructorList[t]=e)},t.prototype.init=function(){var t,e=this,n=this.editor.config;(0,a.default)(t=n.menus).call(t,(function(t){var n=e.constructorList[t];if(null!=n&&"function"==typeof n){var o=new n(e.editor);o.key=t,e.menuList.push(o)}})),this._addToToolbar()},t.prototype._addToToolbar=function(){var t,e=this.editor.$toolbarElem;(0,a.default)(t=this.menuList).call(t,(function(t){var n=t.$elem;n&&e.append(n)}))},t.prototype.menuFind=function(t){for(var e=this.menuList,n=0,o=e.length;n<o;n++)if(e[n].key===t)return e[n];return e[0]},t.prototype.changeActive=function(){var t;(0,a.default)(t=this.menuList).call(t,(function(t){var e;(0,i.default)((0,r.default)(e=t.tryChangeActive).call(e,t),100)}))},t}();e.default=c},function(t,e,n){var o=n(291);t.exports=o},function(t,e,n){var o=n(292),r=Function.prototype;t.exports=function(t){var e=t.bind;return t===r||t instanceof Function&&e===r.bind?o:e}},function(t,e,n){n(293);var o=n(17);t.exports=o("Function").bind},function(t,e,n){n(5)({target:"Function",proto:!0},{bind:n(294)})},function(t,e,n){"use strict";var o=n(32),r=n(13),i=[].slice,a={},u=function(t,e,n){if(!(e in a)){for(var o=[],r=0;r<e;r++)o[r]="a["+r+"]";a[e]=Function("C,a","return new C("+o.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=o(this),n=i.call(arguments,1),a=function(){var o=n.concat(i.call(arguments));return this instanceof a?u(e,o.length,o):e.apply(t,o)};return r(e.prototype)&&(a.prototype=e.prototype),a}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(296)),i=o(n(300)),a=o(n(301)),u=o(n(305)),l=o(n(306)),c=o(n(307)),s=o(n(308)),f=o(n(310)),d=o(n(312)),p=o(n(313)),A=o(n(314)),h=o(n(315)),v=o(n(316)),g=o(n(318)),m=o(n(338)),y=o(n(342)),w=o(n(344)),x=o(n(345)),b=o(n(347)),E=o(n(348)),_=o(n(349)),M=o(n(358)),C=o(n(362));e.default={bold:r.default,head:i.default,italic:u.default,link:a.default,underline:l.default,strikeThrough:c.default,fontName:s.default,fontSize:f.default,justify:d.default,quote:p.default,backColor:A.default,foreColor:h.default,video:v.default,image:g.default,indent:m.default,emoticon:y.default,list:w.default,lineHeight:x.default,undo:b.default,redo:E.default,table:_.default,code:M.default,splitLine:C.default}},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(24)),f=c(n(2)),d=function(t){function e(e){var n=f.default('<div class="w-e-menu">\n                <i class="w-e-icon-bold"></i>\n            </div>');return t.call(this,n,e)||this}return l(e,t),e.prototype.clickHandler=function(){var t=this.editor,e=t.selection.isSelectionEmpty();e&&t.selection.createEmptyRange(),t.cmd.do("bold"),e&&(t.selection.collapseRange(),t.selection.restoreSelection())},e.prototype.tryChangeActive=function(){this.editor.cmd.queryCommandState("bold")?this.active():this.unActive()},e}(s.default);e.default=d},function(t,e,n){var o=n(298);t.exports=o},function(t,e,n){n(299);var o=n(11);t.exports=o.Object.setPrototypeOf},function(t,e,n){n(5)({target:"Object",stat:!0},{setPrototypeOf:n(98)})},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(19)),f=c(n(2)),d=function(t){function e(e){var n=this,o=f.default('<div class="w-e-menu"><i class="w-e-icon-header"></i></div>'),r={width:100,title:"设置标题",type:"list",list:[{$elem:f.default("<h1>H1</h1>"),value:"<h1>"},{$elem:f.default("<h2>H2</h2>"),value:"<h2>"},{$elem:f.default("<h3>H3</h3>"),value:"<h3>"},{$elem:f.default("<h4>H4</h4>"),value:"<h4>"},{$elem:f.default("<h5>H5</h5>"),value:"<h5>"},{$elem:f.default("<p>"+e.i18next.t("menus.dropListMenu.head.正文")+"</p>"),value:"<p>"}],clickHandler:function(t){n.command(t)}};return n=t.call(this,o,e,r)||this}return l(e,t),e.prototype.command=function(t){var e=this.editor,n=e.selection.getSelectionContainerElem();n&&e.$textElem.equal(n)||e.cmd.do("formatBlock",t)},e.prototype.tryChangeActive=function(){var t=this.editor.cmd.queryCommandValue("formatBlock");/^h/i.test(t)?this.active():this.unActive()},e}(s.default);e.default=d},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(31)),f=c(n(2)),d=c(n(302)),p=c(n(124)),A=c(n(27)),h=c(n(303)),v=function(t){function e(e){var n,o=f.default('<div class="w-e-menu"><i class="w-e-icon-link"></i></div>');return n=t.call(this,o,e)||this,h.default(e),n}return l(e,t),e.prototype.clickHandler=function(){var t,e=this.editor;if(this.isActive){if(!(t=e.selection.getSelectionContainerElem()))return;this.createPanel(t.text(),t.attr("href"))}else e.selection.isSelectionEmpty()?this.createPanel("",""):this.createPanel(e.selection.getSelectionText(),"")},e.prototype.createPanel=function(t,e){var n=d.default(this.editor,t,e);new A.default(this,n).create()},e.prototype.tryChangeActive=function(){var t=this.editor;p.default(t)?this.active():this.unActive()},e}(s.default);e.default=v},function(t,e,n){"use strict";var o=n(0),r=o(n(23)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=n(7),u=i(n(2)),l=i(n(124));e.default=function(t,e,n){var o,i=a.getRandom("input-link"),c=a.getRandom("input-text"),s=a.getRandom("btn-ok"),f=a.getRandom("btn-del"),d=l.default(t)?"inline-block":"none";function p(){if(l.default(t)){var e=t.selection.getSelectionContainerElem();e&&(t.selection.createRangeByElem(e),t.selection.restoreSelection(),o=e)}}return{width:300,height:0,tabs:[{title:t.i18next.t("menus.panelMenus.link.链接"),tpl:'<div>\n                        <input \n                            id="'+c+'" \n                            type="text" \n                            class="block" \n                            value="'+e+'" \n                            placeholder="'+t.i18next.t("menus.panelMenus.link.链接文字")+'"/>\n                        </td>\n                        <input \n                            id="'+i+'" \n                            type="text" \n                            class="block" \n                            value="'+n+'" \n                            placeholder="'+t.i18next.t("如")+' https://..."/>\n                        </td>\n                        <div class="w-e-button-container">\n                            <button id="'+s+'" class="right">\n                                '+t.i18next.t("插入")+'\n                            </button>\n                            <button id="'+f+'" class="gray right" style="display:'+d+'">\n                                '+t.i18next.t("menus.panelMenus.link.取消链接")+"\n                            </button>\n                        </div>\n                    </div>",events:[{selector:"#"+s,type:"click",fn:function(){var e,n,o=u.default("#"+i),a=u.default("#"+c),s=(0,r.default)(e=o.val()).call(e),f=(0,r.default)(n=a.val()).call(n);if(s&&(f||(f=s),function(e,n){var o=t.config.linkCheck(e,n);if(void 0===o);else{if(!0===o)return!0;alert(o)}return!1}(f,s)))return function(e,n){l.default(t)?(p(),t.cmd.do("insertHTML",'<a href="'+n+'" target="_blank">'+e+"</a>")):t.cmd.do("insertHTML",'<a href="'+n+'" target="_blank">'+e+"</a>")}(f,s),!0}},{selector:"#"+f,type:"click",fn:function(){return function(){if(l.default(t)){p();var e=o.text();t.cmd.do("insertHTML","<span>"+e+"</span>")}}(),!0}}]}]}}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(304));e.default=function(t){r.default(t)}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r,i,a=o(n(2)),u=o(n(41));function l(t){var e=[{$elem:a.default("<span>"+i.i18next.t("menus.panelMenus.link.查看链接")+"</span>"),onClick:function(t,e){var n=e.attr("href");return window.open(n,"_target"),!0}},{$elem:a.default("<span>"+i.i18next.t("menus.panelMenus.link.取消链接")+"</span>"),onClick:function(t,e){t.selection.createRangeByElem(e),t.selection.restoreSelection();var n=e.text();return t.cmd.do("insertHTML","<span>"+n+"</span>"),!0}}];(r=new u.default(i,t,e)).create()}function c(){r&&(r.remove(),r=null)}e.default=function(t){i=t,t.txt.eventHooks.linkClickEvents.push(l),t.txt.eventHooks.clickEvents.push(c),t.txt.eventHooks.keyupEvents.push(c),t.txt.eventHooks.toolbarClickEvents.push(c),t.txt.eventHooks.menuClickEvents.push(c),t.txt.eventHooks.textScrollEvents.push(c)}},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(24)),f=c(n(2)),d=function(t){function e(e){var n=f.default('<div class="w-e-menu">\n                <i class="w-e-icon-italic"></i>\n            </div>');return t.call(this,n,e)||this}return l(e,t),e.prototype.clickHandler=function(){var t=this.editor,e=t.selection.isSelectionEmpty();e&&t.selection.createEmptyRange(),t.cmd.do("italic"),e&&(t.selection.collapseRange(),t.selection.restoreSelection())},e.prototype.tryChangeActive=function(){this.editor.cmd.queryCommandState("italic")?this.active():this.unActive()},e}(s.default);e.default=d},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(24)),f=c(n(2)),d=function(t){function e(e){var n=f.default('<div class="w-e-menu">\n                <i class="w-e-icon-underline"></i>\n            </div>');return t.call(this,n,e)||this}return l(e,t),e.prototype.clickHandler=function(){var t=this.editor,e=t.selection.isSelectionEmpty();e&&t.selection.createEmptyRange(),t.cmd.do("underline"),e&&(t.selection.collapseRange(),t.selection.restoreSelection())},e.prototype.tryChangeActive=function(){this.editor.cmd.queryCommandState("underline")?this.active():this.unActive()},e}(s.default);e.default=d},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(24)),f=c(n(2)),d=function(t){function e(e){var n=f.default('<div class="w-e-menu">\n                <i class="w-e-icon-strikethrough"></i>\n            </div>');return t.call(this,n,e)||this}return l(e,t),e.prototype.clickHandler=function(){var t=this.editor,e=t.selection.isSelectionEmpty();e&&t.selection.createEmptyRange(),t.cmd.do("strikeThrough"),e&&(t.selection.collapseRange(),t.selection.restoreSelection())},e.prototype.tryChangeActive=function(){this.editor.cmd.queryCommandState("strikeThrough")?this.active():this.unActive()},e}(s.default);e.default=d},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(19)),f=c(n(2)),d=c(n(309)),p=function(t){function e(e){var n=this,o=f.default('<div class="w-e-menu">\n                <i class="w-e-icon-font"></i>\n            </div>'),r={width:100,title:"设置字体",type:"list",list:new d.default(e.config.fontNames).getItemList(),clickHandler:function(t){n.command(t)}};return n=t.call(this,o,e,r)||this}return l(e,t),e.prototype.command=function(t){this.editor.cmd.do("fontName",t)},e.prototype.tryChangeActive=function(){},e}(s.default);e.default=p},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=i(n(2)),u=function(){function t(t){var e=this;this.itemList=[],(0,r.default)(t).call(t,(function(t){e.itemList.push({$elem:a.default("<p style=\"font-family:'"+t+"'\">"+t+"</p>"),value:t})}))}return t.prototype.getItemList=function(){return this.itemList},t}();e.default=u},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(19)),f=c(n(2)),d=c(n(311)),p=function(t){function e(e){var n=this,o=f.default('<div class="w-e-menu">\n                <i class="w-e-icon-text-heigh"></i>\n            </div>'),r={width:160,title:"设置字号",type:"list",list:new d.default(e.config.fontSizes).getItemList(),clickHandler:function(t){n.command(t)}};return n=t.call(this,o,e,r)||this}return l(e,t),e.prototype.command=function(t){this.editor.cmd.do("fontSize",t)},e.prototype.tryChangeActive=function(){},e}(s.default);e.default=p},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(2)),i=function(){function t(t){for(var e in this.itemList=[],t){var n=t[e];this.itemList.push({$elem:r.default('<p style="font-size:'+e+'">'+n.name+"</p>"),value:n.value})}}return t.prototype.getItemList=function(){return this.itemList},t}();e.default=i},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(19)),f=c(n(2)),d=function(t){function e(e){var n=this,o=f.default('<div class="w-e-menu"><i class="w-e-icon-paragraph-left"></i></div>'),r={width:100,title:"对齐方式",type:"list",list:[{$elem:f.default('<p>\n                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>\n                            '+e.i18next.t("menus.dropListMenu.justify.靠左")+"\n                        </p>"),value:"justifyLeft"},{$elem:f.default('<p>\n                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>\n                            '+e.i18next.t("menus.dropListMenu.justify.居中")+"\n                        </p>"),value:"justifyCenter"},{$elem:f.default('<p>\n                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>\n                            '+e.i18next.t("menus.dropListMenu.justify.靠右")+"\n                        </p>"),value:"justifyRight"}],clickHandler:function(t){n.command(t)}};return n=t.call(this,o,e,r)||this}return l(e,t),e.prototype.command=function(t){var e=this.editor,n=e.selection.getSelectionContainerElem();n&&e.$textElem.equal(n)||e.cmd.do(t,t)},e.prototype.tryChangeActive=function(){},e}(s.default);e.default=d},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(2)),f=n(7),d=function(t){function e(e){var n=s.default('<div class="w-e-menu">\n                <i class="w-e-icon-quotes-left"></i>\n            </div>');return t.call(this,n,e)||this}return l(e,t),e.prototype.clickHandler=function(){var t=this.editor,e=t.selection.isSelectionEmpty(),n=t.selection.getSelectionContainerElem(),o=n.getNodeName();if(e&&t.selection.createEmptyRange(),f.UA.isIE()){var r=void 0;if("P"===o)return r=n.text(),s.default("<blockquote>"+r+"</blockquote>").insertAfter(n),void n.remove();"BLOCKQUOTE"===o&&(r=n.text(),s.default("<p>"+r+"</p>").insertAfter(n),n.remove())}else"BLOCKQUOTE"===o?t.cmd.do("formatBlock","<p>"):t.cmd.do("formatBlock","<blockquote>");e&&(t.selection.collapseRange(),t.selection.restoreSelection())},e.prototype.tryChangeActive=function(){"blockquote"===this.editor.cmd.queryCommandValue("formatBlock")?this.active():this.unActive()},e}(c(n(24)).default);e.default=d},function(t,e,n){"use strict";var o,r=n(0),i=r(n(40)),a=r(n(1)),u=r(n(3)),l=r(n(4)),c=(o=function(t,e){return(o=l.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,u.default)(e):(n.prototype=e.prototype,new n)}),s=function(t){return t&&t.__esModule?t:{default:t}};(0,a.default)(e,"__esModule",{value:!0});var f=s(n(19)),d=s(n(2)),p=function(t){function e(e){var n,o=this,r=d.default('<div class="w-e-menu">\n                <i class="w-e-icon-paint-brush"></i>\n            </div>'),a={width:120,title:"背景颜色",type:"inline-block",list:(0,i.default)(n=e.config.colors).call(n,(function(t){return{$elem:d.default('<i style="color:'+t+';" class="w-e-icon-paint-brush"></i>'),value:t}})),clickHandler:function(t){o.command(t)}};return o=t.call(this,r,e,a)||this}return c(e,t),e.prototype.command=function(t){this.editor.cmd.do("backColor",t)},e.prototype.tryChangeActive=function(){},e}(f.default);e.default=p},function(t,e,n){"use strict";var o,r=n(0),i=r(n(40)),a=r(n(1)),u=r(n(3)),l=r(n(4)),c=(o=function(t,e){return(o=l.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,u.default)(e):(n.prototype=e.prototype,new n)}),s=function(t){return t&&t.__esModule?t:{default:t}};(0,a.default)(e,"__esModule",{value:!0});var f=s(n(19)),d=s(n(2)),p=function(t){function e(e){var n,o=this,r=d.default('<div class="w-e-menu">\n                <i class="w-e-icon-pencil2"></i>\n            </div>'),a={width:120,title:"文字颜色",type:"inline-block",list:(0,i.default)(n=e.config.colors).call(n,(function(t){return{$elem:d.default('<i style="color:'+t+';" class="w-e-icon-pencil2"></i>'),value:t}})),clickHandler:function(t){o.command(t)}};return o=t.call(this,r,e,a)||this}return c(e,t),e.prototype.command=function(t){this.editor.cmd.do("foreColor",t)},e.prototype.tryChangeActive=function(){},e}(f.default);e.default=p},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(2)),f=c(n(27)),d=c(n(31)),p=c(n(317)),A=function(t){function e(e){var n=s.default('<div class="w-e-menu">\n                <i class="w-e-icon-play"></i>\n            </div>');return t.call(this,n,e)||this}return l(e,t),e.prototype.clickHandler=function(){this.createPanel("")},e.prototype.createPanel=function(t){var e=p.default(this.editor,t);new f.default(this,e).create()},e.prototype.tryChangeActive=function(){},e}(d.default);e.default=A},function(t,e,n){"use strict";var o=n(0),r=o(n(23)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=n(7),u=i(n(2));e.default=function(t,e){var n=a.getRandom("input-iframe"),o=a.getRandom("btn-ok");return{width:300,height:0,tabs:[{title:t.i18next.t("menus.panelMenus.video.插入视频"),tpl:'<div>\n                        <input \n                            id="'+n+'" \n                            type="text" \n                            class="block" \n                            placeholder="'+t.i18next.t("如")+'：<iframe src=... ></iframe>"/>\n                        </td>\n                        <div class="w-e-button-container">\n                            <button id="'+o+'" class="right">\n                                '+t.i18next.t("插入")+"\n                            </button>\n                        </div>\n                    </div>",events:[{selector:"#"+o,type:"click",fn:function(){var e,o=u.default("#"+n),i=(0,r.default)(e=o.val()).call(e);if(i)return function(e){t.cmd.do("insertHTML",e+"<p><br></p>")}(i),!0}}]}]}}},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(31)),f=c(n(2)),d=c(n(319)),p=c(n(27)),A=c(n(326)),h=function(t){function e(e){var n,o=f.default('<div class="w-e-menu"><i class="w-e-icon-image"></i></div>');return n=t.call(this,o,e)||this,A.default(e),n}return l(e,t),e.prototype.clickHandler=function(){this.createPanel()},e.prototype.createPanel=function(){var t=d.default(this.editor);new p.default(this,t).create()},e.prototype.tryChangeActive=function(){},e}(s.default);e.default=h},function(t,e,n){"use strict";var o=n(0),r=o(n(23)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=n(7),u=i(n(2)),l=i(n(87)),c=n(30);e.default=function(t){var e=t.config,n=new l.default(t),o=a.getRandom("up-trigger-id"),i=a.getRandom("up-file-id"),s=a.getRandom("input-link-url"),f=a.getRandom("btn-link"),d=function(e,n){return void 0===n&&(n="menus.panelMenus.image."),t.i18next.t(n+e)},p=1===e.uploadImgMaxLength?"":'multiple="multiple"',A=[{title:d("上传图片"),tpl:'<div class="w-e-up-img-container">\n                    <div id="'+o+'" class="w-e-up-btn">\n                        <i class="w-e-icon-upload2"></i>\n                    </div>\n                    <div style="display:none;">\n                        <input id="'+i+'" type="file" '+p+' accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp"/>\n                    </div>\n                </div>',events:[{selector:"#"+o,type:"click",fn:function(){var t=u.default("#"+i).elems[0];if(!t)return!0;t.click()}},{selector:"#"+i,type:"change",fn:function(){var t=u.default("#"+i).elems[0];if(!t)return!0;var e=t.files;return e.length&&n.uploadImg(e),!0}}]},{title:d("网络图片"),tpl:'<div>\n                    <input \n                        id="'+s+'" \n                        type="text" \n                        class="block"\n                        placeholder="'+d("图片链接")+'"/>\n                    </td>\n                    <div class="w-e-button-container">\n                        <button id="'+f+'" class="right">'+d("插入","")+"</button>\n                    </div>\n                </div>",events:[{selector:"#"+f,type:"click",fn:function(){var t,o=u.default("#"+s),i=(0,r.default)(t=o.val()).call(t);if(i&&function(t){var n=!0;c.imgRegex.test(t)||(n=!1);var o=e.linkImgCheck(t);if(void 0===o)!1===n&&console.log(d("您刚才插入的图片链接未通过编辑器校验","validate."));else if(!0===o){if(!1!==n)return!0;alert(d("您插入的网络图片无法识别","validate.")+"，"+d("请替换为支持的图片类型","validate.")+"：jpg | png | gif ...")}else alert(o);return!1}(i))return n.insertImg(i),!0}}]}],h={width:300,height:0,tabs:[]};return window.FileReader&&(e.uploadImgShowBase64||e.uploadImgServer||e.customUploadImg)&&h.tabs.push(A[0]),e.showLinkImg&&h.tabs.push(A[1]),h}},function(t,e,n){"use strict";var o=n(0),r=o(n(114)),i=o(n(6));(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=n(7);e.default=function(t,e){var n=new XMLHttpRequest;if(n.open("POST",t),n.timeout=e.timeout||1e4,n.ontimeout=function(){console.error("wangEditor - 请求超时"),e.onTimeout&&e.onTimeout(n)},n.upload&&(n.upload.onprogress=function(t){var n=t.loaded/t.total;e.onProgress&&e.onProgress(n,t)}),e.headers&&(0,i.default)(a).call(a,e.headers,(function(t,e){n.setRequestHeader(t,e)})),n.withCredentials=!!e.withCredentials,e.beforeSend){var o=e.beforeSend(n);if(o&&"object"===(0,r.default)(o)&&o.prevent)return o.msg}return n.onreadystatechange=function(){if(4===n.readyState){var t=n.status;if(!(t<200||t>=300&&t<400)){if(t>=400)return console.error("wangEditor - XHR 报错，状态码 "+t),void(e.onError&&e.onError(n));var o,i=n.responseText;if("object"!==(0,r.default)(i))try{o=JSON.parse(i)}catch(t){return console.error("wangEditor - 返回结果不是 JSON 格式",i),void(e.onFail&&e.onFail(n,i))}else o=i;e.onSuccess(n,o)}}},n.send(e.formData||null),n}},function(t,e,n){"use strict";var o=n(0),r=o(n(322)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=i(n(2)),u=function(){function t(t){this.editor=t,this.$textContainer=t.$textContainerElem,this.$bar=a.default('<div class="w-e-progress"></div>'),this.isShow=!1,this.time=0,this.timeoutId=0}return t.prototype.show=function(t){var e=this;if(!this.isShow){this.isShow=!0;var n=this.$bar;this.$textContainer.append(n),(0,r.default)()-this.time>100&&t<=1&&(n.css("width",100*t+"%"),this.time=(0,r.default)());var o=this.timeoutId;o&&clearTimeout(o),this.timeoutId=window.setTimeout((function(){e.hide()}),500)}},t.prototype.hide=function(){this.$bar.remove(),this.isShow=!1,this.time=0,this.timeoutId=0},t}();e.default=u},function(t,e,n){t.exports=n(323)},function(t,e,n){var o=n(324);t.exports=o},function(t,e,n){n(325);var o=n(11);t.exports=o.Date.now},function(t,e,n){n(5)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(327)),i=o(n(328)),a=o(n(329)),u=o(n(337));e.default=function(t){r.default(t),i.default(t),a.default(t),u.default(t)}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=n(120),i=o(n(87));function a(t,e){if(!function(t,e){var n=t.config,o=n.pasteFilterStyle,i=n.pasteIgnoreImg,a=r.getPasteHtml(e,o,i),u=r.getPasteText(e);return!!a||!!u}(e,t)){var n=r.getPasteImgs(t);if(n.length)new i.default(e).uploadImg(n)}}e.default=function(t){t.txt.eventHooks.pasteEvents.push((function(e){a(e,t)}))}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r,i=o(n(87));function a(t){var e=t.dataTransfer&&t.dataTransfer.files;e&&e.length&&new i.default(r).uploadImg(e)}e.default=function(t){r=t,t.txt.eventHooks.dropEvents.push(a)}},function(t,e,n){"use strict";var o=n(0),r=o(n(330)),i=o(n(64)),a=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var u=a(n(2));n(335);var l,c=n(7),s=function(t,e,n,o,r){t.attr("style","\n      width:"+e+"px;\n      height:"+n+"px;\n      left:"+o+"px;\n      top:"+r+"px;\n    ")},f=function(t,e){var n=u.default('<div class="w-e-img-drag-mask">\n            <div class="w-e-img-drag-show-size"></div>\n            <div class="w-e-img-drag-rb"></div>\n         </div>');return function(t,e,n){e.on("click",(function(t){t.stopPropagation()})),e.on("mousedown",".w-e-img-drag-rb",(function(t){if(t.preventDefault(),l){var o=t.clientX,a=t.clientY,c=n.getBoundingClientRect(),f=l.getBoundingClientRect(),d=f.width,p=f.height,A=f.left-c.left,h=f.top-c.top,v=d/p,g=d,m=p,y=u.default(document);y.on("mousemove",x),y.on("mouseup",b),y.on("mouseleave",w)}function w(){y.off("mousemove",x),y.off("mouseup",b)}function x(t){t.stopPropagation(),t.preventDefault(),g=d+(t.clientX-o),m=p+(t.clientY-a),g/m!=v&&(m=g/v),g=(0,r.default)(g.toFixed(2)),m=(0,r.default)(m.toFixed(2)),(0,i.default)(e).call(e,".w-e-img-drag-show-size").text(g.toFixed(2).replace(".00","")+"px * "+m.toFixed(2).replace(".00","")+"px"),s(e,g,m,A,h)}function b(){l.attr("width",g+""),l.attr("height",m+"");var t=l.getBoundingClientRect();s(e,g,m,t.left-c.left,t.top-c.top),w()}}))}(0,n,e),n.hide(),e.append(n),n};e.default=function(t){var e=t.$textContainerElem,n=f(0,e);t.txt.eventHooks.imgClickEvents.push((function(t){if(c.UA.isIE())return!1;t&&(l=t,function(t,e){var n=t.getBoundingClientRect(),o=l.getBoundingClientRect(),a=o.width.toFixed(2),u=o.height.toFixed(2);(0,i.default)(e).call(e,".w-e-img-drag-show-size").text(a+"px * "+u+"px"),s(e,(0,r.default)(a),(0,r.default)(u),o.left-n.left,o.top-n.top),e.show()}(e,n))}));var o=function(){!function(t){(0,i.default)(t).call(t,".w-e-img-drag-mask").hide()}(e)};t.txt.eventHooks.textScrollEvents.push(o),t.txt.eventHooks.keyupEvents.push(o),t.txt.eventHooks.toolbarClickEvents.push(o),t.txt.eventHooks.menuClickEvents.push(o),document.onclick=o,t.txt.eventHooks.changeEvents.push(o)}},function(t,e,n){t.exports=n(331)},function(t,e,n){var o=n(332);t.exports=o},function(t,e,n){n(333);var o=n(11);t.exports=o.parseFloat},function(t,e,n){var o=n(5),r=n(334);o({global:!0,forced:parseFloat!=r},{parseFloat:r})},function(t,e,n){var o=n(8),r=n(84).trim,i=n(62),a=o.parseFloat,u=1/a(i+"-0")!=-1/0;t.exports=u?function(t){var e=r(String(t)),n=a(e);return 0===n&&"-"==e.charAt(0)?-0:n}:a},function(t,e,n){var o=n(21),r=n(336);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){(e=n(22)(!1)).push([t.i,".w-e-text-container {\n  overflow: hidden;\n}\n.w-e-img-drag-mask {\n  position: absolute;\n  z-index: 1;\n  border: 1px dashed #ccc;\n  box-sizing: border-box;\n}\n.w-e-img-drag-mask .w-e-img-drag-rb {\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #ccc;\n  cursor: se-resize;\n}\n.w-e-img-drag-mask .w-e-img-drag-show-size {\n  min-width: 110px;\n  height: 22px;\n  line-height: 22px;\n  font-size: 14px;\n  color: #999;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #999;\n  color: #fff;\n  border-radius: 2px;\n  padding: 0 5px;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r,i,a=o(n(2)),u=o(n(41));function l(t){var e=[{$elem:a.default("<span class='w-e-icon-trash-o'></span>"),onClick:function(t,e){return t.selection.createRangeByElem(e),t.selection.restoreSelection(),t.cmd.do("delete"),!0}},{$elem:a.default("<span>30%</span>"),onClick:function(t,e){return e.attr("width","30%"),e.removeAttr("height"),!0}},{$elem:a.default("<span>50%</span>"),onClick:function(t,e){return e.attr("width","50%"),e.removeAttr("height"),!0}},{$elem:a.default("<span>100%</span>"),onClick:function(t,e){return e.attr("width","100%"),e.removeAttr("height"),!0}}];(r=new u.default(i,t,e)).create()}function c(){r&&(r.remove(),r=null)}e.default=function(t){i=t,t.txt.eventHooks.imgClickEvents.push(l),t.txt.eventHooks.clickEvents.push(c),t.txt.eventHooks.keyupEvents.push(c),t.txt.eventHooks.toolbarClickEvents.push(c),t.txt.eventHooks.menuClickEvents.push(c),t.txt.eventHooks.textScrollEvents.push(c),t.txt.eventHooks.imgDragBarMouseDownEvents.push(c),t.txt.eventHooks.changeEvents.push(c)}},function(t,e,n){"use strict";var o,r=n(0),i=r(n(6)),a=r(n(1)),u=r(n(3)),l=r(n(4)),c=(o=function(t,e){return(o=l.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,u.default)(e):(n.prototype=e.prototype,new n)}),s=function(t){return t&&t.__esModule?t:{default:t}};(0,a.default)(e,"__esModule",{value:!0});var f=s(n(2)),d=s(n(19)),p=s(n(339)),A=function(t){function e(e){var n=this,o=f.default('<div class="w-e-menu">\n                <i class="w-e-icon-indent-increase"></i>\n            </div>'),r={width:130,title:"设置缩进",type:"list",list:[{$elem:f.default('<p>\n                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>\n                            '+e.i18next.t("menus.dropListMenu.indent.增加缩进")+"\n                        <p>"),value:"increase"},{$elem:f.default('<p>\n                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>\n                            '+e.i18next.t("menus.dropListMenu.indent.减少缩进")+"\n                        <p>"),value:"decrease"}],clickHandler:function(t){n.command(t)}};return n=t.call(this,o,e,r)||this}return c(e,t),e.prototype.command=function(t){var e=this.editor,n=e.selection.getSelectionContainerElem();if(n&&e.$textElem.equal(n)){var o=e.selection.getSelectionRangeTopNodes(e);o.length>0&&(0,i.default)(o).call(o,(function(n){p.default(f.default(n),t,e)}))}else n&&n.length>0&&(0,i.default)(n).call(n,(function(n){p.default(f.default(n),t,e)}));e.selection.restoreSelection(),this.tryChangeActive()},e.prototype.tryChangeActive=function(){var t=this.editor,e=t.selection.getSelectionStartElem(),n=f.default(e).getNodeTop(t);n.length<=0||(""!=n.elems[0].style.paddingLeft?this.active():this.unActive())},e}(d.default);e.default=A},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(340)),i=o(n(341));e.default=function(t,e,n){var o=t.getNodeTop(n);/^P$/i.test(o.getNodeName())&&("increase"===e?r.default(o):"decrease"===e&&i.default(o))}},function(t,e,n){"use strict";var o=n(0),r=o(n(63));(0,o(n(1)).default)(e,"__esModule",{value:!0}),e.default=function(t){var e=t.elems[0];if(""===e.style.paddingLeft)t.css("padding-left","2em");else{var n=e.style.paddingLeft,o=(0,r.default)(n).call(n,0,n.length-2),i=Number(o)+2;t.css("padding-left",i+"em")}}},function(t,e,n){"use strict";var o=n(0),r=o(n(63));(0,o(n(1)).default)(e,"__esModule",{value:!0}),e.default=function(t){var e=t.elems[0];if(""!==e.style.paddingLeft){var n=e.style.paddingLeft,o=(0,r.default)(n).call(n,0,n.length-2),i=Number(o)-2;i>0?t.css("padding-left",i+"em"):t.css("padding-left","")}}},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(2)),f=c(n(31)),d=c(n(27)),p=c(n(343)),A=function(t){function e(e){var n=s.default('<div class="w-e-menu">\n                <i class="w-e-icon-happy"></i>\n            </div>');return t.call(this,n,e)||this}return l(e,t),e.prototype.createPanel=function(){var t=p.default(this.editor);new d.default(this,t).create()},e.prototype.clickHandler=function(){this.createPanel()},e.prototype.tryChangeActive=function(){},e}(f.default);e.default=A},function(t,e,n){"use strict";var o=n(0),r=o(n(23)),i=o(n(81)),a=o(n(40)),u=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var l=u(n(2));e.default=function(t){var e=t.config.emotions;function n(t){var e,n,o=[];"image"==t.type?(o=(0,a.default)(e=t.content).call(e,(function(t){return"string"==typeof t?"":'<span  title="'+t.alt+'">\n                    <img class="eleImg" style src="'+t.src+'" alt="['+t.alt+']">\n                </span>'})),o=(0,i.default)(o).call(o,(function(t){return""!==t}))):o=(0,a.default)(n=t.content).call(n,(function(t){return'<span class="eleImg" title="'+t+'">'+t+"</span>"}));return o.join("").replace(/&nbsp;/g,"")}return{width:300,height:230,tabs:(0,a.default)(e).call(e,(function(e){return{title:t.i18next.t("menus.panelMenus.emoticon."+e.title),tpl:"<div>"+n(e)+"</div>",events:[{selector:".eleImg",type:"click",fn:function(e){var n,o,i=l.default(e.target);"IMG"===i.getNodeName()?n=(0,r.default)(o=i.parent().html()).call(o):n="<span>"+i.html()+"</span>";return t.cmd.do("insertHTML",n),!0}}]}}))}}},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(2)),f=function(t){function e(e){var n=this,o=s.default('<div class="w-e-menu">\n                <i class="w-e-icon-list2"></i>\n            </div>'),r={width:130,title:"序列",type:"list",list:[{$elem:s.default('\n                        <p>\n                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>\n                            '+e.i18next.t("menus.dropListMenu.list.无序列表")+"\n                        <p>"),value:"insertUnorderedList"},{$elem:s.default('<p>\n                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>\n                            '+e.i18next.t("menus.dropListMenu.list.有序列表")+"\n                        <p>"),value:"insertOrderedList"}],clickHandler:function(t){n.command(t)}};return n=t.call(this,o,e,r)||this}return l(e,t),e.prototype.command=function(t){var e=this.editor,n=e.$textElem;if(e.selection.restoreSelection(),!e.cmd.queryCommandState(t)){var o=s.default(e.selection.getSelectionContainerElem()),r=s.default(o.elems[0]).parentUntil("TABLE",o.elems[0]);if(!(r&&"TABLE"===s.default(r.elems[0]).getNodeName()||(e.cmd.do(t),"LI"===o.getNodeName()&&(o=o.parent()),!1===/^ol|ul$/i.test(o.getNodeName())||o.equal(n)))){var i=o.parent();i.equal(n)||(o.insertAfter(i),i.remove(),e.selection.restoreSelection(),this.tryChangeActive())}}},e.prototype.tryChangeActive=function(){},e}(c(n(19)).default);e.default=f},function(t,e,n){"use strict";var o,r=n(0),i=r(n(50)),a=r(n(6)),u=r(n(1)),l=r(n(3)),c=r(n(4)),s=(o=function(t,e){return(o=c.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,l.default)(e):(n.prototype=e.prototype,new n)}),f=function(t){return t&&t.__esModule?t:{default:t}};(0,u.default)(e,"__esModule",{value:!0});var d=f(n(19)),p=f(n(2)),A=f(n(346)),h=n(7),v=function(t){function e(e){var n=this,o=p.default('<div class="w-e-menu">\n                    <i class="w-e-icon-row-height"></i>\n                </div>'),r={width:100,title:"设置行高",type:"list",list:new A.default(e,e.config.lineHeights).getItemList(),clickHandler:function(t){e.selection.saveRange(),n.command(t)}};return n=t.call(this,o,e,r)||this}return s(e,t),e.prototype.command=function(t){var e,n=this,o=window.getSelection?window.getSelection():document.getSelection(),r=["P"],u=this.editor,l="";u.selection.restoreSelection();var c=p.default(u.selection.getSelectionContainerElem()),s=p.default(u.selection.getSelectionContainerElem()),f=p.default(u.selection.getSelectionStartElem()).elems[0],d="",A=[],v="";if(c&&u.$textElem.equal(c)){if(h.UA.isIE())return;var g=[],m=[],y=[],w=p.default(u.selection.getSelectionStartElem()),x=p.default(u.selection.getSelectionEndElem()),b=null===(e=u.selection.getRange())||void 0===e?void 0:e.commonAncestorContainer.childNodes;m.push(this.getDom(w.elems[0])),null==b||(0,a.default)(b).call(b,(function(t,e){t===n.getDom(w.elems[0])&&g.push(e),t===n.getDom(x.elems[0])&&g.push(e)}));var E=0,_=void 0;for(y.push(this.getDom(w.elems[0]));m[E]!==this.getDom(x.elems[0]);)_=p.default(m[E].nextElementSibling).elems[0],-1!==(0,i.default)(r).call(r,p.default(_).getNodeName())?(y.push(_),m.push(_)):m.push(_),E++;if("P"!==p.default(m[0]).getNodeName()){E=0;for(var M=0;M<m.length;M++)if("P"===p.default(m[M]).getNodeName()){E=M;break}if(0===E)return;for(var C=0;C!==E;)m.shift(),C++}return this.setRange(m[0],m[m.length-1]),(0,a.default)(m).call(m,(function(e){d=e.getAttribute("style"),A=d?d.split(";"):[],v="","P"===p.default(e).getNodeName()?(v=t?n.styleProcessing(A)+"line-height:"+t+";":n.styleProcessing(A),l=l+"<"+p.default(e).getNodeName().toLowerCase()+' style="'+v+'">'+e.innerHTML+"</"+p.default(e).getNodeName().toLowerCase()+">"):(v=n.styleProcessing(A),l=l+"<"+p.default(e).getNodeName().toLowerCase()+' style="'+v+'">'+e.innerHTML+"</"+p.default(e).getNodeName().toLowerCase()+">")})),this.action(l,u),f=s.elems[0],void this.setRange(f.children[g[0]],f.children[g[1]])}f=this.getDom(f),-1!==(0,i.default)(r).call(r,p.default(f).getNodeName())&&(d=f.getAttribute("style"),A=d?d.split(";"):[],null==o||o.selectAllChildren(f),u.selection.saveRange(),t?(v=d?this.styleProcessing(A)+"line-height:"+t+";":"line-height:"+t+";",l="<"+p.default(f).getNodeName().toLowerCase()+' style="'+v+'">'+f.innerHTML+"</"+p.default(f).getNodeName().toLowerCase()+">","BLOCKQUOTE"===p.default(f).getNodeName()?p.default(f).css("line-height",t):this.action(l,u)):d&&(v=this.styleProcessing(A),l=""===v?"<"+p.default(f).getNodeName().toLowerCase()+">"+f.innerHTML+"</"+p.default(f).getNodeName().toLowerCase()+">":"<"+p.default(f).getNodeName().toLowerCase()+' style="'+v+'">'+f.innerHTML+"</"+p.default(f).getNodeName().toLowerCase()+">",this.action(l,u)))},e.prototype.getDom=function(t){var e=p.default(t).elems[0];if(!e.parentNode)return e;return e=function t(e,n){var o=p.default(e.parentNode);return n.$textElem.equal(o)?e:t(o.elems[0],n)}(e,this.editor)},e.prototype.action=function(t,e){e.cmd.do("insertHTML",t)},e.prototype.styleProcessing=function(t){var e="";return(0,a.default)(t).call(t,(function(t){""!==t&&-1===(0,i.default)(t).call(t,"line-height")&&(e=e+t+";")})),e},e.prototype.setRange=function(t,e){var n=this.editor,o=window.getSelection?window.getSelection():document.getSelection();null==o||o.removeAllRanges();var r=document.createRange(),i=t,a=e;r.setStart(i,0),r.setEnd(a,1),null==o||o.addRange(r),n.selection.saveRange(),null==o||o.removeAllRanges(),n.selection.restoreSelection()},e.prototype.tryChangeActive=function(){var t=this.editor,e=t.selection.getSelectionContainerElem();if(!e||!t.$textElem.equal(e)){var n=p.default(t.selection.getSelectionStartElem()),o=(n=this.getDom(n.elems[0])).getAttribute("style")?n.getAttribute("style"):"";o&&-1!==(0,i.default)(o).call(o,"line-height")?this.active():this.unActive()}},e}(d.default);e.default=v},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=i(n(2)),u=function(){function t(t,e){var n=this;this.itemList=[{$elem:a.default("<span>"+t.i18next.t("默认")+"</span>"),value:""}],(0,r.default)(e).call(e,(function(t){n.itemList.push({$elem:a.default("<span>"+t+"</span>"),value:t})}))}return t.prototype.getItemList=function(){return this.itemList},t}();e.default=u},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(2)),f=function(t){function e(e){var n=s.default('<div class="w-e-menu">\n                <i class="w-e-icon-undo"></i>\n            </div>');return t.call(this,n,e)||this}return l(e,t),e.prototype.clickHandler=function(){this.editor.history.revoke()},e.prototype.tryChangeActive=function(){this.editor.isCompatibleMode||(this.editor.history.size[0]?this.active():this.unActive())},e}(c(n(24)).default);e.default=f},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(2)),f=function(t){function e(e){var n=s.default('<div class="w-e-menu">\n                <i class="w-e-icon-redo"></i>\n            </div>');return t.call(this,n,e)||this}return l(e,t),e.prototype.clickHandler=function(){this.editor.history.restore()},e.prototype.tryChangeActive=function(){this.editor.isCompatibleMode||(this.editor.history.size[1]?this.active():this.unActive())},e}(c(n(24)).default);e.default=f},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(31)),f=c(n(2)),d=c(n(350)),p=c(n(27)),A=c(n(354)),h=function(t){function e(e){var n,o=f.default('<div class="w-e-menu"><i class="w-e-icon-table2"></i></div>');return n=t.call(this,o,e)||this,A.default(e),n}return l(e,t),e.prototype.clickHandler=function(){this.createPanel()},e.prototype.createPanel=function(){var t=d.default(this.editor);new p.default(this,t).create()},e.prototype.tryChangeActive=function(){},e}(s.default);e.default=h},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=n(7),i=o(n(2));n(351);var a=o(n(353));e.default=function(t){var e=new a.default(t),n=r.getRandom("w-col-id"),o=r.getRandom("w-row-id"),u=r.getRandom("btn-link"),l="menus.panelMenus.table.",c=function(e){return t.i18next.t(e)},s=[{title:c(l+"插入表格"),tpl:'<div>\n                    <div class="w-e-table">\n                        <span>'+c("创建")+'</span>\n                        <input id="'+o+'"  type="text" class="w-e-table-input" value="5"/></td>\n                        <span>'+c(l+"行")+'</span>\n                        <input id="'+n+'" type="text" class="w-e-table-input" value="5"/></td>\n                        <span>'+(c(l+"列")+c(l+"的")+c(l+"表格"))+'</span>\n                    </div>\n                    <div class="w-e-button-container">\n                        <button id="'+u+'" class="right">'+c("插入")+"</button>\n                    </div>\n                </div>",events:[{selector:"#"+u,type:"click",fn:function(){var t=Number(i.default("#"+n).val()),r=Number(i.default("#"+o).val());return t&&r&&e.createAction(r,t),!0}}]}],f={width:330,height:0,tabs:[]};return f.tabs.push(s[0]),f}},function(t,e,n){var o=n(21),r=n(352);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){(e=n(22)(!1)).push([t.i,".w-e-table {\n  display: flex;\n}\n.w-e-table .w-e-table-input {\n  width: 40px;\n  text-align: center!important;\n  margin: 0 5px;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(2)),i=function(){function t(t){this.editor=t}return t.prototype.createAction=function(t,e){var n=this.editor,o=r.default(n.selection.getSelectionContainerElem()),i=r.default(o.elems[0]).parentUntil("UL",o.elems[0]),a=r.default(o.elems[0]).parentUntil("OL",o.elems[0]);if(!i&&!a){var u=this.createTableHtml(t,e);n.cmd.do("insertHTML",u)}},t.prototype.createTableHtml=function(t,e){for(var n="",o="",r=0;r<t;r++){o="";for(var i=0;i<e;i++)o+=0===r?"<th></th>":"<td></td>";n=n+"<tr>"+o+"</tr>"}return'<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>'+n+"</tbody></table><p><br></p>"},t}();e.default=i},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(355));e.default=function(t){r.default(t)}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r,i,a=o(n(2)),u=o(n(41)),l=o(n(356)),c=o(n(357));function s(t){var e=new c.default(i),n=function(t,e){return void 0===e&&(e="menus.panelMenus.table."),i.i18next.t(e+t)},o=[{$elem:a.default("<span>"+n("删除表格")+"</span>"),onClick:function(t,e){return t.selection.createRangeByElem(e),t.selection.restoreSelection(),t.cmd.do("insertHTML","<p><br></p>"),!0}},{$elem:a.default("<span>"+n("添加行")+"</span>"),onClick:function(t,n){if(d(t))return!0;var o=a.default(t.selection.getSelectionStartElem()),r=e.getRowNode(o.elems[0]);if(!r)return!0;var i=Number(e.getCurrentRowIndex(n.elems[0],r)),u=e.getTableHtml(n.elems[0]),c=e.getTableHtml(l.default.ProcessingRow(a.default(u),i).elems[0]);return t.selection.createRangeByElem(n),t.selection.restoreSelection(),t.cmd.do("insertHTML",c),!0}},{$elem:a.default("<span>"+n("删除行")+"</span>"),onClick:function(t,n){if(d(t))return!0;var o=a.default(t.selection.getSelectionStartElem()),r=e.getRowNode(o.elems[0]);if(!r)return!0;var i=Number(e.getCurrentRowIndex(n.elems[0],r)),u=e.getTableHtml(n.elems[0]),c=l.default.DeleteRow(a.default(u),i).elems[0].childNodes[0].childNodes.length,s="";return t.selection.createRangeByElem(n),t.selection.restoreSelection(),s=0===c?"<p><br></p>":e.getTableHtml(l.default.DeleteRow(a.default(u),i).elems[0]),t.cmd.do("insertHTML",s),!0}},{$elem:a.default("<span>"+n("添加列")+"</span>"),onClick:function(t,n){if(d(t))return!0;var o=a.default(t.selection.getSelectionStartElem()),r=e.getCurrentColIndex(o.elems[0]),i=e.getTableHtml(n.elems[0]),u=e.getTableHtml(l.default.ProcessingCol(a.default(i),r).elems[0]);return t.selection.createRangeByElem(n),t.selection.restoreSelection(),t.cmd.do("insertHTML",u),!0}},{$elem:a.default("<span>"+n("删除列")+"</span>"),onClick:function(t,n){if(d(t))return!0;var o=a.default(t.selection.getSelectionStartElem()),r=e.getCurrentColIndex(o.elems[0]),i=e.getTableHtml(n.elems[0]),u=l.default.DeleteCol(a.default(i),r).elems[0].childNodes[0].childNodes[0].childNodes.length,c="";return t.selection.createRangeByElem(n),t.selection.restoreSelection(),c=1===u?"<p><br></p>":e.getTableHtml(l.default.DeleteCol(a.default(i),r).elems[0]),t.cmd.do("insertHTML",c),!0}},{$elem:a.default("<span>"+n("设置表头")+"</span>"),onClick:function(t,n){if(d(t))return!0;var o=a.default(t.selection.getSelectionStartElem()),r=e.getRowNode(o.elems[0]);if(!r)return!0;var i=Number(e.getCurrentRowIndex(n.elems[0],r));0!==i&&(i=0);var u=e.getTableHtml(n.elems[0]),c=e.getTableHtml(l.default.setTheHeader(a.default(u),i,"th").elems[0]);return t.selection.createRangeByElem(n),t.selection.restoreSelection(),t.cmd.do("insertHTML",c),!0}},{$elem:a.default("<span>"+n("取消表头")+"</span>"),onClick:function(t,n){var o=a.default(t.selection.getSelectionStartElem()),r=e.getRowNode(o.elems[0]);if(!r)return!0;var i=Number(e.getCurrentRowIndex(n.elems[0],r));0!==i&&(i=0);var u=e.getTableHtml(n.elems[0]),c=e.getTableHtml(l.default.setTheHeader(a.default(u),i,"td").elems[0]);return t.selection.createRangeByElem(n),t.selection.restoreSelection(),t.cmd.do("insertHTML",c),!0}}];(r=new u.default(i,t,o)).create()}function f(){r&&(r.remove(),r=null)}function d(t){var e=t.selection.getSelectionStartElem(),n=t.selection.getSelectionEndElem();return(null==e?void 0:e.elems[0])!==(null==n?void 0:n.elems[0])}e.default=function(t){i=t,t.txt.eventHooks.tableClickEvents.push(s),t.txt.eventHooks.clickEvents.push(f),t.txt.eventHooks.keyupEvents.push(f),t.txt.eventHooks.toolbarClickEvents.push(f),t.txt.eventHooks.menuClickEvents.push(f),t.txt.eventHooks.textScrollEvents.push(f)}},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=o(n(82)),a=o(n(63)),u=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var l=u(n(2));function c(t,e){for(;0!==t.childNodes.length;)t.removeChild(t.childNodes[0]);for(var n=0;n<e.length;n++)t.appendChild(e[n])}function s(t){var e=t.elems[0].childNodes[0];return"COLGROUP"===e.nodeName&&(e=t.elems[0].childNodes[t.elems[0].childNodes.length-1]),e}e.default={ProcessingRow:function(t,e){for(var n=s(t),o=(0,a.default)(Array.prototype).apply(n.childNodes),r=o[0].childNodes.length,u=document.createElement("tr"),f=0;f<r;f++){var d=document.createElement("td");u.appendChild(d)}return(0,i.default)(o).call(o,e+1,0,u),c(n,o),l.default(n.parentNode)},ProcessingCol:function(t,e){for(var n=s(t),o=(0,a.default)(Array.prototype).apply(n.childNodes),u=function(t){var n,a=[];for((0,r.default)(n=o[t].childNodes).call(n,(function(t){a.push(t)}));0!==o[t].childNodes.length;)o[t].removeChild(o[t].childNodes[0]);var u="TH"!==l.default(a[0]).getNodeName()?document.createElement("td"):document.createElement("th");(0,i.default)(a).call(a,e+1,0,u);for(var c=0;c<a.length;c++)o[t].appendChild(a[c])},f=0;f<o.length;f++)u(f);return c(n,o),l.default(n.parentNode)},DeleteRow:function(t,e){var n=s(t),o=(0,a.default)(Array.prototype).apply(n.childNodes);return(0,i.default)(o).call(o,e,1),c(n,o),l.default(n.parentNode)},DeleteCol:function(t,e){for(var n=s(t),o=(0,a.default)(Array.prototype).apply(n.childNodes),u=function(t){var n,a=[];for((0,r.default)(n=o[t].childNodes).call(n,(function(t){a.push(t)}));0!==o[t].childNodes.length;)o[t].removeChild(o[t].childNodes[0]);(0,i.default)(a).call(a,e,1);for(var u=0;u<a.length;u++)o[t].appendChild(a[u])},f=0;f<o.length;f++)u(f);return c(n,o),l.default(n.parentNode)},setTheHeader:function(t,e,n){for(var o=s(t),u=(0,a.default)(Array.prototype).apply(o.childNodes),f=u[e].childNodes,d=document.createElement("tr"),p=function(t){var e,o=document.createElement(n);(0,r.default)(e=f[t].childNodes).call(e,(function(t){o.appendChild(t)})),d.appendChild(o)},A=0;A<f.length;A++)p(A);return(0,i.default)(u).call(u,e,1,d),c(o,u),l.default(o.parentNode)}}},function(t,e,n){"use strict";var o=n(0),r=o(n(6)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=i(n(2)),u=function(){function t(t){this.editor=t}return t.prototype.getRowNode=function(t){var e,n=a.default(t).elems[0];return n.parentNode?n=null===(e=a.default(n).parentUntil("TR",n))||void 0===e?void 0:e.elems[0]:n},t.prototype.getCurrentRowIndex=function(t,e){var n,o=0,i=t.childNodes[0];return"COLGROUP"===i.nodeName&&(i=t.childNodes[t.childNodes.length-1]),(0,r.default)(n=i.childNodes).call(n,(function(t,n){t===e&&(o=n)})),o},t.prototype.getCurrentColIndex=function(t){var e,n,o=0,i="TD"===a.default(t).getNodeName()||"TH"===a.default(t).getNodeName()?t:null===(n=a.default(t).parentUntil("TD",t))||void 0===n?void 0:n.elems[0],u=a.default(i).parent();return(0,r.default)(e=u.elems[0].childNodes).call(e,(function(t,e){t===i&&(o=e)})),o},t.prototype.getTableHtml=function(t){return'<table border="0" width="100%" cellpadding="0" cellspacing="0">'+a.default(t).html()+"</table>"},t}();e.default=u},function(t,e,n){"use strict";var o,r=n(0),i=r(n(40)),a=r(n(1)),u=r(n(3)),l=r(n(4)),c=(o=function(t,e){return(o=l.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,u.default)(e):(n.prototype=e.prototype,new n)}),s=function(t){return t&&t.__esModule?t:{default:t}};(0,a.default)(e,"__esModule",{value:!0}),e.formatCodeHtml=void 0;var f=s(n(31)),d=s(n(2)),p=n(7),A=s(n(359)),h=s(n(125)),v=s(n(27)),g=s(n(360));e.formatCodeHtml=function(t,e){return e?(e=function(t){var e=t.match(/<pre[\s|\S]+?\/pre>/g);return null===e||(0,i.default)(e).call(e,(function(e){t=t.replace(e,e.replace(/<\/code><code>/g,"\n").replace(/<br>/g,""))})),t}(e=function t(e){var n,o=e.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);if(!o||!o.length)return e;for(var r=(0,i.default)(n=p.deepClone(o)).call(n,(function(t){return(t=t.replace(/<span\sclass="hljs[^>]+>/,"")).replace(/<\/span>/,"")})),a=0;a<o.length;a++)e=e.replace(o[a],r[a]);return t(e)}(e)),e=p.replaceSpecialSymbol(e)):e};var m=function(t){function e(e){var n,o=d.default('<div class="w-e-menu"><i class="w-e-icon-terminal"></i></div>');return n=t.call(this,o,e)||this,g.default(e),n}return c(e,t),e.prototype.insertLineCode=function(t){var e=this.editor,n=d.default("<code>"+t+"</code>");e.cmd.do("insertElem",n),e.selection.createRangeByElem(n,!1),e.selection.restoreSelection()},e.prototype.clickHandler=function(){var t=this.editor,e=t.selection.getSelectionText();this.isActive||(t.selection.isSelectionEmpty()?this.createPanel("",""):this.insertLineCode(e))},e.prototype.createPanel=function(t,e){var n=A.default(this.editor,t,e);new v.default(this,n).create()},e.prototype.tryChangeActive=function(){var t=this.editor;h.default(t)?this.active():this.unActive()},e}(f.default);e.default=m},function(t,e,n){"use strict";var o=n(0),r=o(n(40)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=n(7),u=i(n(2)),l=i(n(125));e.default=function(t,e,n){a.getRandom("code");var o,i=a.getRandom("input-iframe"),c=a.getRandom("select"),s=(a.getRandom("input-code"),a.getRandom("input-text"),a.getRandom("btn-ok"));function f(e){l.default(t)&&function(){if(!l.default(t))return;var e=t.selection.getSelectionStartElem(),n=null==e?void 0:e.getNodeTop(t);if(!n)return;t.selection.createRangeByElem(n),t.selection.restoreSelection(),n}(),t.cmd.do("insertHTML",e);var n=t.selection.getSelectionStartElem(),o=null==n?void 0:n.getNodeTop(t);u.default("<p><br></p>").insertAfter(o)}var d=function(e){return t.i18next.t(e)};return{width:500,height:0,tabs:[{title:d("menus.panelMenus.code.插入代码"),tpl:'<div>\n                        <select name="" id="'+c+'">\n                            '+(0,r.default)(o=t.config.languageType).call(o,(function(t){return"<option "+(n==t?"selected":"")+' value ="'+t+'">'+t+"</option>"}))+'\n                        </select>\n                        <textarea id="'+i+'" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">'+e.replace(/&quot;/g,'"')+'</textarea>\n                        <div class="w-e-button-container">\n                            <button id="'+s+'" class="right">'+(l.default(t)?d("修改"):d("插入"))+"</button>\n                        </div>\n                    </div>",events:[{selector:"#"+s,type:"click",fn:function(){var e,n=document.getElementById(i),o=u.default("#"+c).val(),r=n.value;if(e=t.highlight?t.highlight.highlightAuto(r).value:"<xmp>"+r+"</xmp>",r)return!l.default(t)&&(f('<pre type="'+o+'"><code>'+e+"</code></pre>"),!0)}}]}]}}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(361));e.default=function(t){r.default(t)}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r,i,a=o(n(2)),u=o(n(41));function l(t){var e,n,o=[{$elem:a.default("<span>"+(e="删除代码",void 0===n&&(n="menus.panelMenus.code."),i.i18next.t(n+e)+"</span>")),onClick:function(t,e){return e.remove(),!0}}];(r=new u.default(i,t,o)).create()}function c(){r&&(r.remove(),r=null)}e.default=function(t){i=t,t.txt.eventHooks.codeClickEvents.push(l),t.txt.eventHooks.clickEvents.push(c),t.txt.eventHooks.toolbarClickEvents.push(c),t.txt.eventHooks.menuClickEvents.push(c),t.txt.eventHooks.textScrollEvents.push(c)}},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(24)),f=c(n(2)),d=c(n(363)),p=function(t){function e(e){var n,o=f.default('<div class="w-e-menu"><i class="w-e-icon-split-line"></i></div>');return n=t.call(this,o,e)||this,d.default(e),n}return l(e,t),e.prototype.clickHandler=function(){var t=this.editor,e=t.selection.getRange(),n=t.selection.getSelectionContainerElem();if(n){var o=f.default(n.elems[0]),r=o.parentUntil("TABLE",n.elems[0]),i=o.children();"CODE"!==o.getNodeName()&&(r&&"TABLE"===f.default(r.elems[0]).getNodeName()||i&&0!==i.length&&"IMG"===f.default(i.elems[0]).getNodeName()&&!(null==e?void 0:e.collapsed)||this.createSplitLine())}},e.prototype.createSplitLine=function(){this.editor.cmd.do("insertHTML","<hr/>")},e.prototype.tryChangeActive=function(){},e}(s.default);e.default=p},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(364));e.default=function(t){r.default(t)}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r,i,a=o(n(2)),u=o(n(41));function l(t){var e=[{$elem:a.default("<span>"+i.i18next.t("menus.panelMenus.删除")+"</span>"),onClick:function(t,e){return t.selection.createRangeByElem(e),t.selection.restoreSelection(),t.cmd.do("delete"),!0}}];(r=new u.default(i,t,e)).create()}function c(){r&&(r.remove(),r=null)}e.default=function(t){i=t,t.txt.eventHooks.splitLineEvents.push(l),t.txt.eventHooks.clickEvents.push(c),t.txt.eventHooks.keyupEvents.push(c),t.txt.eventHooks.toolbarClickEvents.push(c),t.txt.eventHooks.menuClickEvents.push(c),t.txt.eventHooks.textScrollEvents.push(c)}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(2)),i=n(7),a="1px solid #c9d8db",u="#FFF",l="1px solid #EEE";e.default=function(t){var e,n,o,c,s=t.toolbarSelector,f=r.default(s),d=t.textSelector,p=t.config.height,A=t.i18next;null==d?(e=r.default("<div></div>"),n=r.default("<div></div>"),c=f.children(),f.append(e).append(n),e.css("background-color",u).css("border",a).css("border-bottom",l),n.css("border",a).css("border-top","none").css("height",p+"px")):(e=f,c=(n=r.default(d)).children()),(o=r.default("<div></div>")).attr("contenteditable","true").css("width","100%").css("height","100%");var h=r.default("<div>"+A.t(t.config.placeholder)+"</div>");h.addClass("placeholder"),c&&c.length?(o.append(c),h.hide()):o.append(r.default("<p><br></p>")),n.append(o),n.append(h),e.addClass("w-e-toolbar").css("z-index",t.zIndex.get("toolbar")),n.addClass("w-e-text-container"),n.css("z-index",t.zIndex.get()),o.addClass("w-e-text");var v=i.getRandom("toolbar-elem");e.attr("id",v);var g=i.getRandom("text-elem");o.attr("id",g);var m=n.getClientHeight();m!==o.getClientHeight()&&o.css("min-height",m+"px"),t.$toolbarElem=e,t.$textContainerElem=n,t.$textElem=o,t.toolbarElemId=v,t.textElemId=g}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(2));e.default=function t(e,n){var o=e.$textElem,i=o.children();if(!i||!i.length)return o.append(r.default("<p><br></p>")),void t(e);var a=i.last();if(n){var u=a.html().toLowerCase(),l=a.getNodeName();if("<br>"!==u&&"<br/>"!==u||"P"!==l)return o.append(r.default("<p><br></p>")),void t(e)}e.config.focus&&(e.selection.createRangeByElem(a,!1,!0),e.selection.restoreSelection())}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(2));e.default=function(t){!function(t){var e=t.config.onchange;t.txt.eventHooks.changeEvents.push((function(){var n=t.txt.html()||"";e(n),t.txt.togglePlaceholder()}))}(t),function(t){function e(e){var n=e.target,o=r.default(n),i=t.$textElem,a=t.$toolbarElem,u=i.isContain(o),l=a.isContain(o),c=a.elems[0]==e.target;if(u)t.isFocus||function(t){var e=t.config.onfocus,n=t.txt.html()||"";e(n)}(t),t.isFocus=!0;else{if(l&&!c)return;t.isFocus&&function(t){var e=t.config.onblur,n=t.txt.html()||"";e(n)}(t),t.isFocus=!1}}t.isFocus=!1,r.default(document).on("click",e),t.beforeDestroy((function(){r.default(document).off("click",e)}))}(t),function(t){t.$textElem.on("compositionstart",(function(){t.isComposing=!0})).on("compositionend",(function(){t.isComposing=!1}))}(t)}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0}),e.default=function(t){var e=t.config,n=e.lang,o=e.languages;if(null==t.i18next)t.i18next={t:function(t){var e=t.split(".");return e[e.length-1]}};else try{t.i18next.init({ns:"wangEditor",lng:n,defaultNS:"wangEditor",resources:o})}catch(t){throw new Error("i18next:"+t)}}},function(t,e,n){"use strict";var o=n(0),r=o(n(64)),i=function(t){return t&&t.__esModule?t:{default:t}};(0,o(n(1)).default)(e,"__esModule",{value:!0}),e.setUnFullScreen=e.setFullScreen=void 0;var a=i(n(2));n(370);e.setFullScreen=function(t){var e=a.default(t.toolbarSelector),n=t.$textContainerElem,o=t.$toolbarElem,i=(0,r.default)(o).call(o,"i.w-e-icon-fullscreen"),u=t.config;i.removeClass("w-e-icon-fullscreen"),i.addClass("w-e-icon-fullscreen_exit"),e.addClass("w-e-full-screen-editor"),e.css("z-index",u.zIndexFullScreen),n.css("height","100%")},e.setUnFullScreen=function(t){var e=a.default(t.toolbarSelector),n=t.$textContainerElem,o=t.$toolbarElem,i=(0,r.default)(o).call(o,"i.w-e-icon-fullscreen_exit"),u=t.config;i.removeClass("w-e-icon-fullscreen_exit"),i.addClass("w-e-icon-fullscreen"),e.removeClass("w-e-full-screen-editor"),e.css("z-index","auto"),n.css("height",u.height+"px")};e.default=function(t){if(!t.textSelector&&t.config.showFullScreen){var n=t.$toolbarElem,o=a.default('<div class="w-e-menu">\n            <i class="w-e-icon-fullscreen"></i>\n        </div>');o.on("click",(function(n){var o;(0,r.default)(o=a.default(n.currentTarget)).call(o,"i").hasClass("w-e-icon-fullscreen")?e.setFullScreen(t):e.setUnFullScreen(t)})),n.append(o)}}},function(t,e,n){var o=n(21),r=n(371);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){(e=n(22)(!1)).push([t.i,".w-e-full-screen-editor {\n  position: fixed;\n  width: 100%!important;\n  height: 100%!important;\n  left: 0;\n  top: 0;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(119)),i=function(){function t(){this.tier={menu:2,panel:2,toolbar:1,tooltip:1},this.baseZIndex=r.default.zIndex}return t.prototype.get=function(t){return t&&this.tier[t]?this.baseZIndex+this.tier[t]:this.baseZIndex},t.prototype.init=function(t){this.baseZIndex==r.default.zIndex&&(this.baseZIndex=t.config.zIndex)},t}();e.default=i},function(t,e,n){"use strict";var o,r=n(0),i=r(n(6)),a=r(n(81)),u=r(n(1)),l=r(n(3)),c=r(n(4)),s=(o=function(t,e){return(o=c.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,l.default)(e):(n.prototype=e.prototype,new n)}),f=function(t){return t&&t.__esModule?t:{default:t}};(0,u.default)(e,"__esModule",{value:!0});var d=f(n(374)),p=n(7),A=n(30),h=n(7);var v=function(t){function e(e){var n=t.call(this,(function(t,o){var r;if(t=function(t,e){return(0,a.default)(t).call(t,(function(t){var n=t.type,o=t.target,r=t.attributeName;return"attributes"!=n||"attributes"==n&&("contenteditable"==r||o!=e)}))}(t,o.target),(r=n.data).push.apply(r,t),e.isCompatibleMode)n.debounce();else if(n.data.length){if(h.UA.isFirefox)return n.save();if(!e.isComposing)return n.save()}}))||this;return n.editor=e,n.data=[],n.debounce=A.EMPTY_FN,n}return s(e,t),e.prototype.save=function(){this.editor.history.save(this.data),this.data.length=0,this.emit()},e.prototype.emit=function(){var t;(0,i.default)(t=this.editor.txt.eventHooks.changeEvents).call(t,(function(t){return t()}))},e.prototype.observe=function(){var e=this;if(t.prototype.observe.call(this,this.editor.$textElem.elems[0]),this.editor.isCompatibleMode){var n=this.editor.config.onchangeTimeout;this.debounce=p.debounce((function(){e.save()}),n)}},e}(d.default);e.default=v},function(t,e,n){"use strict";var o=n(0)(n(1));(0,o.default)(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=this;this.options={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,characterData:!0,characterDataOldValue:!0},this.callback=function(e){t(e,n)},this.observer=new MutationObserver(this.callback),e&&(this.options=e)}return(0,o.default)(t.prototype,"target",{get:function(){return this.node},enumerable:!1,configurable:!0}),t.prototype.observe=function(t){this.node instanceof Node||(this.node=t,this.connect())},t.prototype.connect=function(){if(this.node)return this.observer.observe(this.node,this.options),this;throw new Error("还未初始化绑定，请您先绑定有效的 Node 节点")},t.prototype.disconnect=function(){var t=this.observer.takeRecords();t.length&&this.callback(t),this.observer.disconnect()},t}();e.default=r},function(t,e,n){"use strict";var o=n(0)(n(1)),r=function(t){return t&&t.__esModule?t:{default:t}};(0,o.default)(e,"__esModule",{value:!0});var i=r(n(376)),a=r(n(388)),u=r(n(389)),l=function(){function t(t){this.editor=t,this.content=new i.default(t),this.scroll=new a.default(t),this.range=new u.default(t)}return(0,o.default)(t.prototype,"size",{get:function(){return this.scroll.size},enumerable:!1,configurable:!0}),t.prototype.observe=function(){this.content.observe(),this.scroll.observe(),!this.editor.isCompatibleMode&&this.range.observe()},t.prototype.save=function(t){t.length&&(this.content.save(t),this.scroll.save(),!this.editor.isCompatibleMode&&this.range.save())},t.prototype.revoke=function(){this.editor.change.disconnect();var t=this.content.revoke();t&&(this.scroll.revoke(),this.editor.isCompatibleMode||(this.range.revoke(),this.editor.$textElem.focus())),this.editor.change.connect(),t&&this.editor.change.emit()},t.prototype.restore=function(){this.editor.change.disconnect();var t=this.content.restore();t&&(this.scroll.restore(),this.editor.isCompatibleMode||(this.range.restore(),this.editor.$textElem.focus())),this.editor.change.connect(),t&&this.editor.change.emit()},t}();e.default=l},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var r=o(n(377)),i=o(n(386)),a=function(){function t(t){this.editor=t}return t.prototype.observe=function(){this.editor.isCompatibleMode?this.cache=new i.default(this.editor):this.cache=new r.default(this.editor),this.cache.observe()},t.prototype.save=function(t){this.editor.isCompatibleMode?this.cache.save():this.cache.compile(t)},t.prototype.revoke=function(){var t;return null===(t=this.cache)||void 0===t?void 0:t.revoke()},t.prototype.restore=function(){var t;return null===(t=this.cache)||void 0===t?void 0:t.restore()},t}();e.default=a},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(88)),f=c(n(379)),d=n(380),p=function(t){function e(e){var n=t.call(this,e.config.historyMaxSize)||this;return n.editor=e,n}return l(e,t),e.prototype.observe=function(){this.resetMaxSize(this.editor.config.historyMaxSize)},e.prototype.compile=function(t){return this.save(f.default(t)),this},e.prototype.revoke=function(){return t.prototype.revoke.call(this,(function(t){d.revoke(t)}))},e.prototype.restore=function(){return t.prototype.restore.call(this,(function(t){d.restore(t)}))},e}(s.default);e.default=p},function(t,e,n){"use strict";var o=n(0)(n(1));(0,o.default)(e,"__esModule",{value:!0}),e.CeilStack=void 0;var r=function(){function t(t){void 0===t&&(t=0),this.data=[],this.max=0,this.reset=!1,(t=Math.abs(t))&&(this.max=t)}return t.prototype.resetMax=function(t){t=Math.abs(t),this.reset||isNaN(t)||(this.max=t,this.reset=!0)},(0,o.default)(t.prototype,"size",{get:function(){return this.data.length},enumerable:!1,configurable:!0}),t.prototype.instack=function(t){return this.data.unshift(t),this.max&&this.size>this.max&&(this.data.length=this.max),this},t.prototype.outstack=function(){return this.data.shift()},t.prototype.clear=function(){return this.data.length=0,this},t}();e.CeilStack=r},function(t,e,n){"use strict";var o=n(0),r=o(n(50)),i=o(n(6));(0,o(n(1)).default)(e,"__esModule",{value:!0});var a=n(7);function u(t){switch(t){case"childList":return"node";case"attributes":return"attr";default:return"text"}}function l(t){switch(t.type){case"attributes":return t.target.getAttribute(t.attributeName)||"";case"characterData":return t.target.textContent;default:return""}}function c(t){var e={};return t.addedNodes.length&&(e.add=a.toArray(t.addedNodes)),t.removedNodes.length&&(e.remove=a.toArray(t.removedNodes)),e}function s(t){return t.previousSibling?{type:"before",target:t.previousSibling}:t.nextSibling?{type:"after",target:t.nextSibling}:{type:"parent",target:t.target}}var f=["UL","OL","H1","H2","H3","H4","H5","H6"];function d(t,e){for(var n=0,o=e.length-1;o>0&&t.contains(e[o]);o--)n++;return n}e.default=function(t){var e=[],n=!1,o=[];return(0,i.default)(t).call(t,(function(t,i){var p={type:u(t.type),target:t.target,attr:t.attributeName||"",value:l(t)||"",oldValue:t.oldValue||"",nodes:c(t),position:s(t)};if(e.push(p),a.UA.isFirefox){if(n&&t.addedNodes.length&&1==t.addedNodes[0].nodeType){var A=t.addedNodes[0],h={type:"node",target:A,attr:"",value:"",oldValue:"",nodes:{add:[n]},position:{type:"parent",target:A}};-1!=(0,r.default)(f).call(f,A.nodeName)?(h.nodes.add=a.toArray(A.childNodes),e.push(h)):3==n.nodeType?(d(A,o)&&(h.nodes.add=a.toArray(A.childNodes)),e.push(h)):-1==(0,r.default)(f).call(f,t.target.nodeName)&&d(A,o)&&(h.nodes.add=a.toArray(A.childNodes),e.push(h))}"node"==p.type&&1==t.removedNodes.length?(n=t.removedNodes[0],o.push(n)):(n=!1,o.length=0)}})),e}},function(t,e,n){"use strict";var o=n(0),r=o(n(381)),i=o(n(6));function a(t,e){var n=t.position.target;switch(t.position.type){case"before":n.nextSibling?(n=n.nextSibling,(0,i.default)(e).call(e,(function(e){t.target.insertBefore(e,n)}))):(0,i.default)(e).call(e,(function(e){t.target.appendChild(e)}));break;case"after":(0,i.default)(e).call(e,(function(e){t.target.insertBefore(e,n)}));break;default:(0,i.default)(e).call(e,(function(t){n.appendChild(t)}))}}(0,o(n(1)).default)(e,"__esModule",{value:!0}),e.restore=e.revoke=void 0;var u={node:function(t){for(var e=0,n=(0,r.default)(t.nodes);e<n.length;e++){var o=n[e],u=o[0],l=o[1];switch(u){case"add":(0,i.default)(l).call(l,(function(e){t.target.removeChild(e)}));break;default:a(t,l)}}},text:function(t){t.target.textContent=t.oldValue},attr:function(t){var e=t.target;null==t.oldValue?e.removeAttribute(t.attr):e.setAttribute(t.attr,t.oldValue)}};e.revoke=function(t){for(var e=t.length-1;e>-1;e--){var n=t[e];u[n.type](n)}};var l={node:function(t){for(var e=0,n=(0,r.default)(t.nodes);e<n.length;e++){var o=n[e],u=o[0],l=o[1];switch(u){case"add":a(t,l);break;default:(0,i.default)(l).call(l,(function(t){t.parentNode.removeChild(t)}))}}},text:function(t){t.target.textContent=t.value},attr:function(t){t.target.setAttribute(t.attr,t.value)}};e.restore=function(t){for(var e=0,n=t;e<n.length;e++){var o=n[e];l[o.type](o)}}},function(t,e,n){t.exports=n(382)},function(t,e,n){var o=n(383);t.exports=o},function(t,e,n){n(384);var o=n(11);t.exports=o.Object.entries},function(t,e,n){var o=n(5),r=n(385).entries;o({target:"Object",stat:!0},{entries:function(t){return r(t)}})},function(t,e,n){var o=n(14),r=n(59),i=n(25),a=n(51).f,u=function(t){return function(e){for(var n,u=i(e),l=r(u),c=l.length,s=0,f=[];c>s;)n=l[s++],o&&!a.call(u,n)||f.push(t?[n,u[n]]:u[n]);return f}};t.exports={entries:u(!0),values:u(!1)}},function(t,e,n){"use strict";(0,n(0)(n(1)).default)(e,"__esModule",{value:!0});var o=n(387),r=function(){function t(t){this.editor=t,this.data=new o.TailChain}return t.prototype.observe=function(){this.data.resetMax(this.editor.config.historyMaxSize),this.data.insertLast(this.editor.$textElem.html())},t.prototype.save=function(){return this.data.insertLast(this.editor.$textElem.html()),this},t.prototype.revoke=function(){var t=this.data.prev();return!!t&&(this.editor.$textElem.html(t),!0)},t.prototype.restore=function(){var t=this.data.next();return!!t&&(this.editor.$textElem.html(t),!0)},t}();e.default=r},function(t,e,n){"use strict";var o=n(0),r=o(n(82)),i=o(n(1));(0,i.default)(e,"__esModule",{value:!0}),e.TailChain=void 0;var a=function(){function t(){this.data=[],this.max=0,this.point=0,this.isRe=!1}return t.prototype.resetMax=function(t){(t=Math.abs(t))&&(this.max=t)},(0,i.default)(t.prototype,"size",{get:function(){return this.data.length},enumerable:!1,configurable:!0}),t.prototype.insertLast=function(t){var e;this.isRe&&((0,r.default)(e=this.data).call(e,this.point+1),this.isRe=!1);for(this.data.push(t);this.max&&this.size>this.max;)this.data.shift();return this.point=this.size-1,this},t.prototype.current=function(){return this.data[this.point]},t.prototype.prev=function(){if(!this.isRe&&(this.isRe=!0),this.point--,!(this.point<0))return this.current();this.point=0},t.prototype.next=function(){if(!this.isRe&&(this.isRe=!0),this.point++,!(this.point>=this.size))return this.current();this.point=this.size-1},t}();e.TailChain=a},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=function(t){function e(e){var n=t.call(this,e.config.historyMaxSize)||this;return n.editor=e,n.last=0,n.target=e.$textElem.elems[0],n}return l(e,t),e.prototype.observe=function(){var t=this;this.target=this.editor.$textElem.elems[0],this.editor.$textElem.on("scroll",(function(){t.last=t.target.scrollTop})),this.resetMaxSize(this.editor.config.historyMaxSize)},e.prototype.save=function(){return t.prototype.save.call(this,[this.last,this.target.scrollTop]),this},e.prototype.revoke=function(){var e=this;return t.prototype.revoke.call(this,(function(t){e.target.scrollTop=t[0]}))},e.prototype.restore=function(){var e=this;return t.prototype.restore.call(this,(function(t){e.target.scrollTop=t[1]}))},e}(c(n(88)).default);e.default=s},function(t,e,n){"use strict";var o,r=n(0),i=r(n(1)),a=r(n(3)),u=r(n(4)),l=(o=function(t,e){return(o=u.default||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?(0,a.default)(e):(n.prototype=e.prototype,new n)}),c=function(t){return t&&t.__esModule?t:{default:t}};(0,i.default)(e,"__esModule",{value:!0});var s=c(n(88)),f=c(n(2));function d(t){return{start:[t.startContainer,t.startOffset],end:[t.endContainer,t.endOffset],root:t.commonAncestorContainer,collapsed:t.collapsed}}var p=function(t){function e(e){var n=t.call(this,e.config.historyMaxSize)||this;return n.editor=e,n.lastRange=d(document.createRange()),n.root=e.$textElem.elems[0],n}return l(e,t),(0,i.default)(e.prototype,"rangeHandle",{get:function(){var t=document.getSelection();return t&&t.rangeCount?t.getRangeAt(0):document.createRange()},enumerable:!1,configurable:!0}),e.prototype.observe=function(){var t=this;function e(){var e=t.rangeHandle;(t.root===e.commonAncestorContainer||t.root.contains(e.commonAncestorContainer))&&(t.editor.isComposing||(t.lastRange=d(e)))}this.root=this.editor.$textElem.elems[0],this.resetMaxSize(this.editor.config.historyMaxSize),f.default(document).on("selectionchange",e),t.editor.$textElem.on("keydown",(function(e){"Backspace"!=e.key&&"Delete"!=e.key||(t.lastRange=d(t.rangeHandle))})),this.editor.beforeDestroy((function(){f.default(document).off("selectionchange",e)}))},e.prototype.save=function(){var e=d(this.rangeHandle);return t.prototype.save.call(this,[this.lastRange,e]),this.lastRange=e,this},e.prototype.set=function(t){if(t){var e=this.rangeHandle;return e.setStart.apply(e,t.start),e.setEnd.apply(e,t.end),this.editor.menus.changeActive(),!0}return!1},e.prototype.revoke=function(){var e=this;return t.prototype.revoke.call(this,(function(t){e.set(t[0])}))},e.prototype.restore=function(){var e=this;return t.prototype.restore.call(this,(function(t){e.set(t[1])}))},e}(s.default);e.default=p}]).default}));
/*
  Highlight.js 10.3.1 (3797c108)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs=function(){"use strict";function e(n){Object.freeze(n)
;var t="function"==typeof n
;return Object.getOwnPropertyNames(n).forEach((function(r){
!Object.hasOwnProperty.call(n,r)||null===n[r]||"object"!=typeof n[r]&&"function"!=typeof n[r]||t&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(n[r])||e(n[r])
})),n}class n{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}
ignoreMatch(){this.ignore=!0}}function t(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function r(e,...n){var t={};for(const n in e)t[n]=e[n]
;return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function a(e){
return e.nodeName.toLowerCase()}var i=Object.freeze({__proto__:null,
escapeHTML:t,inherit:r,nodeStream:function(e){var n=[];return function e(t,r){
for(var i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(n.push({
event:"start",offset:r,node:i}),r=e(i,r),a(i).match(/br|hr|img|input/)||n.push({
event:"stop",offset:r,node:i}));return r}(e,0),n},mergeStreams:function(e,n,r){
var i=0,s="",o=[];function l(){
return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n
}function c(e){s+="<"+a(e)+[].map.call(e.attributes,(function(e){
return" "+e.nodeName+'="'+t(e.value)+'"'})).join("")+">"}function u(e){
s+="</"+a(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}
for(;e.length||n.length;){var d=l()
;if(s+=t(r.substring(i,d[0].offset)),i=d[0].offset,d===e){o.reverse().forEach(u)
;do{g(d.splice(0,1)[0]),d=l()}while(d===e&&d.length&&d[0].offset===i)
;o.reverse().forEach(c)
}else"start"===d[0].event?o.push(d[0].node):o.pop(),g(d.splice(0,1)[0])}
return s+t(r.substr(i))}});const s=e=>!!e.kind;class o{constructor(e,n){
this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){
this.buffer+=t(e)}openNode(e){if(!s(e))return;let n=e.kind
;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){
s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={
children:[]},this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const n={kind:e,children:[]}
;this.add(n),this.stack.push(n)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){
return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),
n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}
addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}
addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root
;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){
return new o(this,this.options).value()}finalize(){return!0}}function u(e){
return e?"string"==typeof e?e:e.source:null}
const g="[a-zA-Z]\\w*",d="[a-zA-Z_]\\w*",h="\\b\\d+(\\.\\d+)?",f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",p="\\b(0b[01]+)",m={
begin:"\\\\[\\s\\S]",relevance:0},b={className:"string",begin:"'",end:"'",
illegal:"\\n",contains:[m]},v={className:"string",begin:'"',end:'"',
illegal:"\\n",contains:[m]},x={
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},E=function(e,n,t={}){var a=r({className:"comment",begin:e,end:n,contains:[]
},t);return a.contains.push(x),a.contains.push({className:"doctag",
begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a
},_=E("//","$"),w=E("/\\*","\\*/"),N=E("#","$");var y=Object.freeze({
__proto__:null,IDENT_RE:g,UNDERSCORE_IDENT_RE:d,NUMBER_RE:h,C_NUMBER_RE:f,
BINARY_NUMBER_RE:p,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){
return e.map((e=>u(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),r({
className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{
0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:m,APOS_STRING_MODE:b,
QUOTE_STRING_MODE:v,PHRASAL_WORDS_MODE:x,COMMENT:E,C_LINE_COMMENT_MODE:_,
C_BLOCK_COMMENT_MODE:w,HASH_COMMENT_MODE:N,NUMBER_MODE:{className:"number",
begin:h,relevance:0},C_NUMBER_MODE:{className:"number",begin:f,relevance:0},
BINARY_NUMBER_MODE:{className:"number",begin:p,relevance:0},CSS_NUMBER_MODE:{
className:"number",
begin:h+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",
begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,
relevance:0,contains:[m]}]}]},TITLE_MODE:{className:"title",begin:g,relevance:0
},UNDERSCORE_TITLE_MODE:{className:"title",begin:d,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){
return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},
"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}
}),R="of and for in not or if then".split(" ");function k(e){function n(n,t){
return RegExp(u(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{
constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,n){
n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),
this.matchAt+=function(e){return RegExp(e.toString()+"|").exec("").length-1
}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){
for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){
var s=r+=1,o=u(e[i]);for(i>0&&(a+=n),a+="(";o.length>0;){var l=t.exec(o)
;if(null==l){a+=o;break}
a+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),
"\\"===l[0][0]&&l[1]?a+="\\"+(Number(l[1])+s):(a+=l[0],"("===l[0]&&r++)}a+=")"}
return a}(e),!0),this.lastIndex=0}exec(e){
this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e)
;if(!n)return null
;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),r=this.matchIndexes[t]
;return n.splice(0,t),Object.assign(n,r)}}class a{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t
;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),
n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){
this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){
const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex
;let t=n.exec(e)
;if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{
const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}
return t&&(this.regexIndex+=t.position+1,
this.regexIndex===this.count&&this.considerAll()),t}}function i(e,n){
const t=e.input[e.index-1],r=e.input[e.index+e[0].length]
;"."!==t&&"."!==r||n.ignoreMatch()}
if(e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return function t(s,o){const l=s;if(s.compiled)return l
;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords
;let c=null
;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),
s.keywords&&(s.keywords=function(e,n){var t={}
;return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){
r(n,e[n])})),t;function r(e,r){
n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|")
;t[r[0]]=[e,O(r[0],r[1])]}))}
}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ")
;return l.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),
o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",
s.__beforeBegin=i),
s.begin||(s.begin=/\B|\b/),l.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),
s.end||s.endsWithParent||(s.end=/\B|\b/),
s.end&&(l.endRe=n(s.end)),l.terminator_end=u(s.end)||"",
s.endsWithParent&&o.terminator_end&&(l.terminator_end+=(s.end?"|":"")+o.terminator_end)),
s.illegal&&(l.illegalRe=n(s.illegal)),
void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),
s.contains=[].concat(...s.contains.map((function(e){return function(e){
return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){
return r(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:M(e)?r(e,{
starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?s:e)
}))),s.contains.forEach((function(e){t(e,l)
})),s.starts&&t(s.starts,o),l.matcher=function(e){const n=new a
;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"
}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function M(e){
return!!e&&(e.endsWithParent||M(e.starts))}function O(e,n){
return n?Number(n):function(e){return R.includes(e.toLowerCase())}(e)?0:1}
const L={props:["language","code","autodetect"],data:function(){return{
detectedLanguage:"",unknownLanguage:!1}},computed:{className(){
return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){
if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),
this.unknownLanguage=!0,t(this.code);let e
;return this.autoDetect?(e=hljs.highlightAuto(this.code),
this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),
this.detectectLanguage=this.language),e.value},autoDetect(){
return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},
ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{
class:this.className,domProps:{innerHTML:this.highlighted}})])}},j={install(e){
e.component("highlightjs",L)}
},I=t,T=r,{nodeStream:S,mergeStreams:A}=i,B=Symbol("nomatch")
;return function(t){
var r=[],a=Object.create(null),i=Object.create(null),s=[],o=!0,l=/(^(<[^>]+>|\t|)+|\n)/gm,u="Could not find the language '{}', did you forget to load/include a language module?"
;const g={disableAutodetect:!0,name:"Plain text",contains:[]};var d={
noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
tabReplace:null,useBR:!1,languages:null,__emitter:c};function h(e){
return d.noHighlightRe.test(e)}function f(e,n,t,r){var a={code:n,language:e}
;N("before:highlight",a);var i=a.result?a.result:p(a.language,a.code,t,r)
;return i.code=a.code,N("after:highlight",i),i}function p(e,t,r,i){var s=t
;function l(e,n){var t=_.case_insensitive?n[0].toLowerCase():n[0]
;return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}
function c(){null!=y.subLanguage?function(){if(""!==O){var e=null
;if("string"==typeof y.subLanguage){
if(!a[y.subLanguage])return void M.addText(O)
;e=p(y.subLanguage,O,!0,R[y.subLanguage]),R[y.subLanguage]=e.top
}else e=m(O,y.subLanguage.length?y.subLanguage:null)
;y.relevance>0&&(L+=e.relevance),M.addSublanguage(e.emitter,e.language)}
}():function(){if(!y.keywords)return void M.addText(O);let e=0
;y.keywordPatternRe.lastIndex=0;let n=y.keywordPatternRe.exec(O),t="";for(;n;){
t+=O.substring(e,n.index);const r=l(y,n);if(r){const[e,a]=r
;M.addText(t),t="",L+=a,M.addKeyword(n[0],e)}else t+=n[0]
;e=y.keywordPatternRe.lastIndex,n=y.keywordPatternRe.exec(O)}
t+=O.substr(e),M.addText(t)}(),O=""}function g(e){
return e.className&&M.openNode(e.className),y=Object.create(e,{parent:{value:y}
})}function h(e,t,r){let a=function(e,n){var t=e&&e.exec(n)
;return t&&0===t.index}(e.endRe,r);if(a){if(e["on:end"]){const r=new n(e)
;e["on:end"](t,r),r.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent
;return e}}if(e.endsWithParent)return h(e.parent,t,r)}function f(e){
return 0===y.matcher.regexIndex?(O+=e[0],1):(S=!0,0)}function b(e){
var n=e[0],t=s.substr(e.index),r=h(y,e,t);if(!r)return B;var a=y
;a.skip?O+=n:(a.returnEnd||a.excludeEnd||(O+=n),c(),a.excludeEnd&&(O=n));do{
y.className&&M.closeNode(),y.skip||y.subLanguage||(L+=y.relevance),y=y.parent
}while(y!==r.parent)
;return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),
g(r.starts)),a.returnEnd?0:n.length}var v={};function x(t,a){var i=a&&a[0]
;if(O+=t,null==i)return c(),0
;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===i){
if(O+=s.slice(a.index,a.index+1),!o){const n=Error("0 width match regex")
;throw n.languageName=e,n.badRule=v.rule,n}return 1}
if(v=a,"begin"===a.type)return function(e){var t=e[0],r=e.rule
;const a=new n(r),i=[r.__beforeBegin,r["on:begin"]]
;for(const n of i)if(n&&(n(e,a),a.ignore))return f(t)
;return r&&r.endSameAsBegin&&(r.endRe=RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),
r.skip?O+=t:(r.excludeBegin&&(O+=t),
c(),r.returnBegin||r.excludeBegin||(O=t)),g(r),r.returnBegin?0:t.length}(a)
;if("illegal"===a.type&&!r){
const e=Error('Illegal lexeme "'+i+'" for mode "'+(y.className||"<unnamed>")+'"')
;throw e.mode=y,e}if("end"===a.type){var l=b(a);if(l!==B)return l}
if("illegal"===a.type&&""===i)return 1
;if(T>1e5&&T>3*a.index)throw Error("potential infinite loop, way more iterations than matches")
;return O+=i,i.length}var _=E(e)
;if(!_)throw console.error(u.replace("{}",e)),Error('Unknown language: "'+e+'"')
;var w=k(_),N="",y=i||w,R={},M=new d.__emitter(d);!function(){
for(var e=[],n=y;n!==_;n=n.parent)n.className&&e.unshift(n.className)
;e.forEach((e=>M.openNode(e)))}();var O="",L=0,j=0,T=0,S=!1;try{
for(y.matcher.considerAll();;){
T++,S?S=!1:y.matcher.considerAll(),y.matcher.lastIndex=j
;const e=y.matcher.exec(s);if(!e)break;const n=x(s.substring(j,e.index),e)
;j=e.index+n}return x(s.substr(j)),M.closeAllNodes(),M.finalize(),N=M.toHTML(),{
relevance:L,value:N,language:e,illegal:!1,emitter:M,top:y}}catch(n){
if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{
msg:n.message,context:s.slice(j-100,j+100),mode:n.mode},sofar:N,relevance:0,
value:I(s),emitter:M};if(o)return{illegal:!1,relevance:0,value:I(s),emitter:M,
language:e,top:y,errorRaised:n};throw n}}function m(e,n){
n=n||d.languages||Object.keys(a);var t=function(e){const n={relevance:0,
emitter:new d.__emitter(d),value:I(e),illegal:!1,top:g}
;return n.emitter.addText(e),n}(e),r=t
;return n.filter(E).filter(w).forEach((function(n){var a=p(n,e,!1);a.language=n,
a.relevance>r.relevance&&(r=a),a.relevance>t.relevance&&(r=t,t=a)
})),r.language&&(t.second_best=r),t}function b(e){
return d.tabReplace||d.useBR?e.replace(l,(e=>"\n"===e?d.useBR?"<br>":e:d.tabReplace?e.replace(/\t/g,d.tabReplace):e)):e
}function v(e){let n=null;const t=function(e){var n=e.className+" "
;n+=e.parentNode?e.parentNode.className:"";const t=d.languageDetectRe.exec(n)
;if(t){var r=E(t[1])
;return r||(console.warn(u.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),
r?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||E(e)))}(e)
;if(h(t))return;N("before:highlightBlock",{block:e,language:t
}),d.useBR?(n=document.createElement("div"),
n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e
;const r=n.textContent,a=t?f(t,r,!0):m(r),s=S(n);if(s.length){
const e=document.createElement("div");e.innerHTML=a.value,a.value=A(s,S(e),r)}
a.value=b(a.value),N("after:highlightBlock",{block:e,result:a
}),e.innerHTML=a.value,e.className=function(e,n,t){var r=n?i[n]:t,a=[e.trim()]
;return e.match(/\bhljs\b/)||a.push("hljs"),
e.includes(r)||a.push(r),a.join(" ").trim()
}(e.className,t,a.language),e.result={language:a.language,re:a.relevance,
relavance:a.relevance},a.second_best&&(e.second_best={
language:a.second_best.language,re:a.second_best.relevance,
relavance:a.second_best.relevance})}const x=()=>{if(!x.called){x.called=!0
;var e=document.querySelectorAll("pre code");r.forEach.call(e,v)}}
;function E(e){return e=(e||"").toLowerCase(),a[e]||a[i[e]]}
function _(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{i[e]=n
}))}function w(e){var n=E(e);return n&&!n.disableAutodetect}function N(e,n){
var t=e;s.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(t,{highlight:f,
highlightAuto:m,fixMarkup:function(e){
return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),
console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),
b(e)},highlightBlock:v,configure:function(e){
e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),
console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),
d=T(d,e)},initHighlighting:x,initHighlightingOnLoad:function(){
window.addEventListener("DOMContentLoaded",x,!1)},
registerLanguage:function(e,n){var r=null;try{r=n(t)}catch(n){
if(console.error("Language definition for '{}' could not be registered.".replace("{}",e)),
!o)throw n;console.error(n),r=g}
r.name||(r.name=e),a[e]=r,r.rawDefinition=n.bind(null,t),
r.aliases&&_(r.aliases,{languageName:e})},listLanguages:function(){
return Object.keys(a)},getLanguage:E,registerAliases:_,
requireLanguage:function(e){var n=E(e);if(n)return n
;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},
autoDetection:w,inherit:T,addPlugin:function(e){s.push(e)},vuePlugin:j
}),t.debugMode=function(){o=!1},t.safeMode=function(){o=!0
},t.versionString="10.3.1";for(const n in y)"object"==typeof y[n]&&e(y[n])
;return Object.assign(t,y),t}({})}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);
hljs.registerLanguage("apache",function(){"use strict";return function(e){
var n={className:"number",
begin:"\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?"};return{
name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,
contains:[e.HASH_COMMENT_MODE,{className:"section",begin:"</?",end:">",
contains:[n,{className:"number",begin:":\\d{1,5}"
},e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",
begin:/\w+/,relevance:0,keywords:{
nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},
contains:[{className:"meta",begin:"\\s\\[",end:"\\]$"},{className:"variable",
begin:"[\\$%]\\{",end:"\\}",contains:["self",{className:"number",
begin:"[\\$%]\\d+"}]},n,{className:"number",begin:"\\d+"},e.QUOTE_STRING_MODE]}
}],illegal:/\S/}}}());
hljs.registerLanguage("bash",function(){"use strict";return function(e){
const s={};Object.assign(s,{className:"variable",variants:[{
begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,
contains:[s]}]}]});const n={className:"subst",begin:/\$\(/,end:/\)/,
contains:[e.BACKSLASH_ESCAPE]},t={begin:/<<-?\s*(?=\w+)/,starts:{
contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}
},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s,n]}
;n.contains.push(a);const i={begin:/\$\(\(/,end:/\)\)/,contains:[{
begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,s]},c=e.SHEBANG({
binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10}),o={
className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z._-]+\b/,
keyword:"if then else elif fi for while in do done case esac function",
literal:"true false",
built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
},contains:[c,e.SHEBANG(),o,i,e.HASH_COMMENT_MODE,t,a,{className:"",begin:/\\"/
},{className:"string",begin:/'/,end:/'/},s]}}}());
hljs.registerLanguage("c-like",function(){"use strict";return function(e){
function t(e){return"(?:"+e+")?"}var n=e.COMMENT("//","$",{contains:[{
begin:/\\\n/}]
}),r="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+t(r)+"[a-zA-Z_]\\w*"+t("<.*?>")+")",i={
className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",
variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},c={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(s,{className:"meta-string"}),{
className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"
},n,e.C_BLOCK_COMMENT_MODE]},l={className:"title",begin:t(r)+e.IDENT_RE,
relevance:0},d=t(r)+e.IDENT_RE+"\\s*\\(",u={
keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
literal:"true false nullptr NULL"},m=[c,i,n,e.C_BLOCK_COMMENT_MODE,o,s],p={
variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{
beginKeywords:"new throw return else",end:/;/}],keywords:u,contains:m.concat([{
begin:/\(/,end:/\)/,keywords:u,contains:m.concat(["self"]),relevance:0}]),
relevance:0},_={className:"function",begin:"("+a+"[\\*&\\s]+)+"+d,
returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:u,illegal:/[^\w\s\*&:<>]/,
contains:[{begin:"decltype\\(auto\\)",keywords:u,relevance:0},{begin:d,
returnBegin:!0,contains:[l],relevance:0},{className:"params",begin:/\(/,
end:/\)/,keywords:u,relevance:0,contains:[n,e.C_BLOCK_COMMENT_MODE,s,o,i,{
begin:/\(/,end:/\)/,keywords:u,relevance:0,
contains:["self",n,e.C_BLOCK_COMMENT_MODE,s,o,i]}]
},i,n,e.C_BLOCK_COMMENT_MODE,c]};return{
aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:u,
disableAutodetect:!0,illegal:"</",contains:[].concat(p,_,m,[c,{
begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
end:">",keywords:u,contains:["self",i]},{begin:e.IDENT_RE+"::",keywords:u},{
className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,
contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{
preprocessor:c,strings:s,keywords:u}}}}());
hljs.registerLanguage("c",function(){"use strict";return function(e){
var n=e.requireLanguage("c-like").rawDefinition()
;return n.name="C",n.aliases=["c","h"],n}}());
hljs.registerLanguage("coffeescript",function(){"use strict"
;const e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],a=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;return function(r){var t,i={
keyword:e.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((t=["var","const","let","function","static"],
e=>!t.includes(e))).join(" "),
literal:n.concat(["yes","no","on","off"]).join(" "),
built_in:a.concat(["npm","print"]).join(" ")},s="[A-Za-z$_][0-9A-Za-z$_]*",o={
className:"subst",begin:/#\{/,end:/}/,keywords:i
},c=[r.BINARY_NUMBER_MODE,r.inherit(r.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",
relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,
contains:[r.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[r.BACKSLASH_ESCAPE]
},{begin:/"""/,end:/"""/,contains:[r.BACKSLASH_ESCAPE,o]},{begin:/"/,end:/"/,
contains:[r.BACKSLASH_ESCAPE,o]}]},{className:"regexp",variants:[{begin:"///",
end:"///",contains:[o,r.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",
relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+s
},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{
begin:"```",end:"```"},{begin:"`",end:"`"}]}];o.contains=c
;var l=r.inherit(r.TITLE_MODE,{begin:s}),d="(\\(.*\\))?\\s*\\B[-=]>",g={
className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,
end:/\)/,keywords:i,contains:["self"].concat(c)}]};return{name:"CoffeeScript",
aliases:["coffee","cson","iced"],keywords:i,illegal:/\/\*/,
contains:c.concat([r.COMMENT("###","###"),r.HASH_COMMENT_MODE,{
className:"function",begin:"^\\s*"+s+"\\s*=\\s*"+d,end:"[-=]>",returnBegin:!0,
contains:[l,g]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",
begin:d,end:"[-=]>",returnBegin:!0,contains:[g]}]},{className:"class",
beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{
beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[l]},l]
},{begin:s+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}());
hljs.registerLanguage("cpp",function(){"use strict";return function(e){
var i=e.requireLanguage("c-like").rawDefinition();return i.disableAutodetect=!1,
i.name="C++",i.aliases=["cc","c++","h++","hpp","hh","hxx","cxx"],i}}());
hljs.registerLanguage("csharp",function(){"use strict";return function(e){
var n={
keyword:["abstract","as","base","break","case","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value","var","when","where","with","yield"]).join(" "),
built_in:"bool byte char decimal delegate double dynamic enum float int long nint nuint object sbyte short string ulong unit ushort",
literal:"default false null true"},i=e.inherit(e.TITLE_MODE,{
begin:"[a-zA-Z](\\.?\\w)*"}),a={className:"number",variants:[{
begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},s={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]
},t=e.inherit(s,{illegal:/\n/}),r={className:"subst",begin:"{",end:"}",
keywords:n},l=e.inherit(r,{illegal:/\n/}),c={className:"string",begin:/\$"/,
end:'"',illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},e.BACKSLASH_ESCAPE,l]
},o={className:"string",begin:/\$@"/,end:'"',contains:[{begin:"{{"},{begin:"}}"
},{begin:'""'},r]},d=e.inherit(o,{illegal:/\n/,contains:[{begin:"{{"},{
begin:"}}"},{begin:'""'},l]})
;r.contains=[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.C_BLOCK_COMMENT_MODE],
l.contains=[d,c,t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.inherit(e.C_BLOCK_COMMENT_MODE,{
illegal:/\n/})];var g={variants:[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},E={begin:"<",end:">",contains:[{beginKeywords:"in out"},i]
},_=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",b={
begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],
keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,
contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{
begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]
}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",
end:"$",keywords:{
"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"
}},g,a,{beginKeywords:"class interface",end:/[{;=]/,illegal:/[^\s:,]/,
contains:[{beginKeywords:"where class"
},i,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",
end:/[{;=]/,illegal:/[^\s:]/,
contains:[i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"record",end:/[{;=]/,illegal:/[^\s:]/,
contains:[i,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",
begin:"^\\s*\\[",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{
className:"meta-string",begin:/"/,end:/"/}]},{
beginKeywords:"new return throw await else",relevance:0},{className:"function",
begin:"("+_+"\\s+)+"+e.IDENT_RE+"\\s*(\\<.+\\>)?\\s*\\(",returnBegin:!0,
end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{
beginKeywords:"public private protected static internal protected abstract async extern override unsafe virtual new sealed partial"
},{begin:e.IDENT_RE+"\\s*(\\<.+\\>)?\\s*\\(",returnBegin:!0,
contains:[e.TITLE_MODE,E],relevance:0},{className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,
contains:[g,a,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},b]}}}());
hljs.registerLanguage("css",function(){"use strict";return function(e){var n={
begin:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",
endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",
excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{
begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/
},{begin:/\(/,end:/\)/,
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]
},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]
}}]};return{name:"CSS",case_insensitive:!0,illegal:/[=\/|'\$]/,
contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",
begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{
className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",
begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(page|font-face)",
lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",
illegal:/:/,returnBegin:!0,contains:[{className:"keyword",
begin:/@\-?\w[\w]*(\-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,
relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,
className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]
}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{
begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,n]}]}}}());
hljs.registerLanguage("diff",function(){"use strict";return function(e){return{
name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,
variants:[{begin:/^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},{
begin:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{begin:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{
className:"comment",variants:[{begin:/Index: /,end:/$/},{begin:/={3,}/,end:/$/
},{begin:/^\-{3}/,end:/$/},{begin:/^\*{3} /,end:/$/},{begin:/^\+{3}/,end:/$/},{
begin:/^\*{15}$/}]},{className:"addition",begin:"^\\+",end:"$"},{
className:"deletion",begin:"^\\-",end:"$"},{className:"addition",begin:"^\\!",
end:"$"}]}}}());
hljs.registerLanguage("go",function(){"use strict";return function(e){var n={
keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
literal:"true false iota nil",
built_in:"append cap close complex copy imag len make new panic print println real recover delete"
};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1
},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",
end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",
begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}}}());
hljs.registerLanguage("http",function(){"use strict";return function(e){
var n="HTTP/[0-9\\.]+";return{name:"HTTP",aliases:["https"],illegal:"\\S",
contains:[{begin:"^"+n,end:"$",contains:[{className:"number",
begin:"\\b\\d{3}\\b"}]},{begin:"^[A-Z]+ (.*?) "+n+"$",returnBegin:!0,end:"$",
contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{
begin:n},{className:"keyword",begin:"[A-Z]+"}]},{className:"attribute",
begin:"^\\w",end:": ",excludeEnd:!0,illegal:"\\n|\\s|=",starts:{end:"$",
relevance:0}},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}]}}}());
hljs.registerLanguage("ini",function(){"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function n(...n){
return n.map((n=>e(n))).join("")}return function(a){var s={className:"number",
relevance:0,variants:[{begin:/([\+\-]+)?[\d]+_[\d_]+/},{begin:a.NUMBER_RE}]
},i=a.COMMENT();i.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];var t={
className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)}/}]
},r={className:"literal",begin:/\bon|off|true|false|yes|no\b/},l={
className:"string",contains:[a.BACKSLASH_ESCAPE],variants:[{begin:"'''",
end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'
},{begin:"'",end:"'"}]},c={begin:/\[/,end:/\]/,contains:[i,r,t,l,s,"self"],
relevance:0
},g="("+[/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/].map((n=>e(n))).join("|")+")"
;return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,
contains:[i,{className:"section",begin:/\[+/,end:/\]+/},{
begin:n(g,"(\\s*\\.\\s*",g,")*",n("(?=",/\s*=\s*[^#\s]/,")")),className:"attr",
starts:{end:/$/,contains:[i,c,r,t,l,s]}}]}}}());
hljs.registerLanguage("java",function(){"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function n(e){return a("(",e,")?")}
function a(...n){return n.map((n=>e(n))).join("")}function s(...n){
return"("+n.map((n=>e(n))).join("|")+")"}return function(e){
var r="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",i={
className:"meta",begin:"@[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",
contains:[{begin:/\(/,end:/\)/,contains:["self"]}]
},t=e=>a("[",e,"]+([",e,"_]*[",e,"]+)?"),c={className:"number",variants:[{
begin:`\\b(0[bB]${t("01")})[lL]?`},{begin:`\\b(0${t("0-7")})[dDfFlL]?`},{
begin:a(/\b0[xX]/,s(a(t("a-fA-F0-9"),/\./,t("a-fA-F0-9")),a(t("a-fA-F0-9"),/\.?/),a(/\./,t("a-fA-F0-9"))),/([pP][+-]?(\d+))?/,/[fFdDlL]?/)
},{begin:a(/\b/,s(a(/\d*\./,t("\\d")),t("\\d")),/[eE][+-]?[\d]+[dDfF]?/)},{
begin:a(/\b/,t(/\d/),n(/\.?/),n(t(/\d/)),/[dDfFlL]?/)}],relevance:0};return{
name:"Java",aliases:["jsp"],keywords:r,illegal:/<\/|#/,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]
}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
className:"class",beginKeywords:"class interface enum",end:/[{;=]/,
excludeEnd:!0,keywords:"class interface enum",illegal:/[:"\[\]]/,contains:[{
beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"new throw return else",relevance:0},{className:"class",
begin:"record\\s+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,excludeEnd:!0,
end:/[{;=]/,keywords:r,contains:[{beginKeywords:"record"},{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,
keywords:r,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"function",
begin:"([\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(<[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(\\s*,\\s*[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*)*>)?\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",
returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:r,contains:[{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,
keywords:r,relevance:0,
contains:[i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},c,i]}}}());
hljs.registerLanguage("javascript",function(){"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;function r(e){return i("(?=",e,")")}function t(e){return i("(",e,")?")}
function i(...e){return e.map((e=>{
return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}
return function(c){const o=e,l={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,s=e.input[a];"<"!==s?">"===s&&(((e,{after:n})=>{
const a=e[0].replace("<","</");return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()):n.ignoreMatch()}},g={$pattern:e,keyword:n.join(" "),
literal:a.join(" "),built_in:s.join(" ")
},d=(e,n)=>`\\b0[${e}][${n}]([${n}_]*[${n}])?n?`,b=/[1-9]([0-9_]*\d)?/,E=/\d([0-9_]*\d)?/,u=i(/[eE][+-]?/,E),_={
className:"number",variants:[{begin:d("bB","01")},{begin:d("oO","0-7")},{
begin:d("xX","0-9a-fA-F")},{begin:i(/\b/,b,"n")},{begin:i(/(\b0)?\./,E,t(u))},{
begin:i(/\b/,b,t(i(/\./,t(E))),t(u))},{begin:/\b0[\.n]?/}],relevance:0},m={
className:"subst",begin:"\\$\\{",end:"\\}",keywords:g,contains:[]},N={
begin:"html`",end:"",starts:{end:"`",returnEnd:!1,
contains:[c.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},y={begin:"css`",end:"",
starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,m],subLanguage:"css"}
},f={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,m]},A={
className:"comment",variants:[c.COMMENT("/\\*\\*","\\*/",{relevance:0,
contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",
begin:"\\{",end:"\\}",relevance:0},{className:"variable",
begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,
relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]
},p=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,N,y,f,_,c.REGEXP_MODE]
;m.contains=p.concat({begin:/{/,end:/}/,keywords:g,contains:["self"].concat(p)})
;const O=[].concat(A,m.contains),T=O.concat([{begin:/\(/,end:/\)/,keywords:g,
contains:["self"].concat(O)}]),R={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:T};return{name:"Javascript",
aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{PARAMS_CONTAINS:T},
illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",
relevance:5}),{label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,N,y,f,A,_,{
begin:i(/[{,\n]\s*/,r(i(/(\/\/.*$)*/,/(\/\*(.|\n)*\*\/)*/,/\s*/,o+"\\s*:"))),
relevance:0,contains:[{className:"attr",begin:o+r("\\s*:"),relevance:0}]},{
begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",contains:[A,c.REGEXP_MODE,{className:"function",
begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",
returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
begin:c.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:T}]}]},{
begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{
begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],
subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]
}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,
excludeEnd:!0,keywords:g,contains:["self",c.inherit(c.TITLE_MODE,{begin:o}),R],
illegal:/%/},{className:"function",
begin:c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*{",
returnBegin:!0,contains:[R,c.inherit(c.TITLE_MODE,{begin:o})]},{variants:[{
begin:"\\."+o},{begin:"\\$"+o}],relevance:0},{className:"class",
beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{
beginKeywords:"extends"},c.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
end:/[\{;]/,excludeEnd:!0,contains:[c.inherit(c.TITLE_MODE,{begin:o}),"self",R]
},{begin:"(get|set)\\s+(?="+o+"\\()",end:/{/,keywords:"get set",
contains:[c.inherit(c.TITLE_MODE,{begin:o}),{begin:/\(\)/},R]},{begin:/\$[(.]/}]
}}}());
hljs.registerLanguage("json",function(){"use strict";return function(n){var e={
literal:"true false null"
},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],t=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],a={
end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:e},l={begin:"{",
end:"}",contains:[{className:"attr",begin:/"/,end:/"/,
contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(a,{begin:/:/
})].concat(i),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(a)],
illegal:"\\S"};return t.push(l,s),i.forEach((function(n){t.push(n)})),{
name:"JSON",contains:t,keywords:e,illegal:"\\S"}}}());
hljs.registerLanguage("kotlin",function(){"use strict";return function(e){
var n={
keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
literal:"true false null"},a={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"
},i={className:"subst",begin:"\\${",end:"}",contains:[e.C_NUMBER_MODE]},s={
className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},t={className:"string",
variants:[{begin:'"""',end:'"""(?=[^"])',contains:[s,i]},{begin:"'",end:"'",
illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,
contains:[e.BACKSLASH_ESCAPE,s,i]}]};i.contains.push(t);var r={className:"meta",
begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"
},l={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,
end:/\)/,contains:[e.inherit(t,{className:"meta-string"})]}]
},c=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),o={variants:[{
className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]
},d=o;return d.variants[1].contains=[o],o.variants[1].contains=[d],{
name:"Kotlin",aliases:["kt"],keywords:n,contains:[e.COMMENT("/\\*\\*","\\*/",{
relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]
}),e.C_LINE_COMMENT_MODE,c,{className:"keyword",
begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",
begin:/@\w+/}]}},a,r,l,{className:"function",beginKeywords:"fun",end:"[(]|$",
returnBegin:!0,excludeEnd:!0,keywords:n,
illegal:/fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,relevance:5,contains:[{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,
keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,
endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,
endsWithParent:!0,contains:[o,e.C_LINE_COMMENT_MODE,c],relevance:0
},e.C_LINE_COMMENT_MODE,c,r,l,t,e.C_NUMBER_MODE]},c]},{className:"class",
beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,
illegal:"extends implements",contains:[{
beginKeywords:"public protected internal private constructor"
},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,
excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,
excludeBegin:!0,returnEnd:!0},r,l]},t,{className:"meta",begin:"^#!/usr/bin/env",
end:"$",illegal:"\n"},{className:"number",
begin:"\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
relevance:0}]}}}());
hljs.registerLanguage("less",function(){"use strict";return function(e){
var n="([\\w-]+|@{[\\w-]+})",a=[],s=[],t=function(e){return{className:"string",
begin:"~?"+e+".*?"+e}},r=function(e,n,a){return{className:e,begin:n,relevance:a}
},i={begin:"\\(",end:"\\)",contains:s,relevance:0}
;s.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,t("'"),t('"'),e.CSS_NUMBER_MODE,{
begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
excludeEnd:!0}
},r("number","#[0-9A-Fa-f]+\\b"),i,r("variable","@@?[\\w-]+",10),r("variable","@{[\\w-]+}"),r("built_in","~?`[^`]*?`"),{
className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0
},{className:"meta",begin:"!important"});var c=s.concat({begin:"{",end:"}",
contains:a}),l={beginKeywords:"when",endsWithParent:!0,contains:[{
beginKeywords:"and not"}].concat(s)},o={begin:n+"\\s*:",returnBegin:!0,
end:"[;}]",relevance:0,contains:[{className:"attribute",begin:n,end:":",
excludeEnd:!0,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:s}
}]},g={className:"keyword",
begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
starts:{end:"[;{}]",returnEnd:!0,contains:s,relevance:0}},d={
className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{
begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:c}},b={variants:[{
begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:n,end:"{"}],returnBegin:!0,
returnEnd:!0,illegal:"[<='$\"]",relevance:0,
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,l,r("keyword","all\\b"),r("variable","@{[\\w-]+}"),r("selector-tag",n+"%?",0),r("selector-id","#"+n),r("selector-class","\\."+n,0),r("selector-tag","&",0),{
className:"selector-attr",begin:"\\[",end:"\\]"},{className:"selector-pseudo",
begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"\\(",end:"\\)",contains:c},{
begin:"!important"}]}
;return a.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,g,d,o,b),{
name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:a}}}());
hljs.registerLanguage("lua",function(){"use strict";return function(e){
var t="\\[=*\\[",a="\\]=*\\]",n={begin:t,end:a,contains:["self"]
},o=[e.COMMENT("--(?!\\[=*\\[)","$"),e.COMMENT("--\\[=*\\[",a,{contains:[n],
relevance:10})];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,
literal:"true false nil",
keyword:"and break do else elseif end for goto if in local not or repeat return then until while",
built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
},contains:o.concat([{className:"function",beginKeywords:"function",end:"\\)",
contains:[e.inherit(e.TITLE_MODE,{
begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",
begin:"\\(",endsWithParent:!0,contains:o}].concat(o)
},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",
begin:t,end:a,contains:[n],relevance:5}])}}}());
hljs.registerLanguage("makefile",function(){"use strict";return function(e){
var i={className:"variable",variants:[{
begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{
begin:/\$[@%<?\^\+\*]/}]},n={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,i]},a={className:"variable",begin:/\$\([\w-]+\s/,
end:/\)/,keywords:{
built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
},contains:[i]},r={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},s={
className:"section",begin:/^[^\s]+:/,end:/$/,contains:[i]};return{
name:"Makefile",aliases:["mk","mak"],keywords:{$pattern:/[\w-]+/,
keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
},contains:[e.HASH_COMMENT_MODE,i,n,a,r,{className:"meta",begin:/^\.PHONY:/,
end:/$/,keywords:{$pattern:/[\.\w]+/,"meta-keyword":".PHONY"}},s]}}}());
hljs.registerLanguage("xml",function(){"use strict";return function(e){var n={
className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},a={begin:"\\s",
contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]
},s=e.inherit(a,{begin:"\\(",end:"\\)"}),t=e.inherit(e.APOS_STRING_MODE,{
className:"meta-string"}),i=e.inherit(e.QUOTE_STRING_MODE,{
className:"meta-string"}),c={endsWithParent:!0,illegal:/</,relevance:0,
contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{
begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{
begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{
begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",
relevance:10,contains:[a,i,t,s,{begin:"\\[",end:"\\]",contains:[{
className:"meta",begin:"<![a-z]",end:">",contains:[a,s,i,t]}]}]
},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",
end:"\\]\\]>",relevance:10},n,{className:"meta",begin:/<\?xml/,end:/\?>/,
relevance:10},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{
name:"style"},contains:[c],starts:{end:"</style>",returnEnd:!0,
subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",
keywords:{name:"script"},contains:[c],starts:{end:"<\/script>",returnEnd:!0,
subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:"</?",
end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},c]}]}}
}());
hljs.registerLanguage("markdown",function(){"use strict";return function(n){
const e={begin:"<",end:">",subLanguage:"xml",relevance:0},a={
begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{
className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,
relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,
excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,
excludeEnd:!0}],relevance:10},i={className:"strong",contains:[],variants:[{
begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},s={className:"emphasis",
contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,
relevance:0}]};i.contains.push(s),s.contains.push(i);var c=[e,a]
;return i.contains=i.contains.concat(c),s.contains=s.contains.concat(c),{
name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",
variants:[{begin:"^#{1,6}",end:"$",contains:c=c.concat(i,s)},{
begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
contains:c}]}]},e,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
end:"\\s+",excludeEnd:!0},i,s,{className:"quote",begin:"^>\\s+",contains:c,
end:"$"},{className:"code",variants:[{begin:"(`{3,})(.|\\n)*?\\1`*[ ]*"},{
begin:"(~{3,})(.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",
end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{
begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"
},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",
begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",
begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}}());
hljs.registerLanguage("nginx",function(){"use strict";return function(e){var n={
className:"variable",variants:[{begin:/\$\d+/},{begin:/\$\{/,end:/}/},{
begin:"[\\$\\@]"+e.UNDERSCORE_IDENT_RE}]},a={endsWithParent:!0,keywords:{
$pattern:"[a-z/_]+",
literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
},relevance:0,illegal:"=>",contains:[e.HASH_COMMENT_MODE,{className:"string",
contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/
}]},{begin:"([a-z]+):/",end:"\\s",endsWithParent:!0,excludeEnd:!0,contains:[n]
},{className:"regexp",contains:[e.BACKSLASH_ESCAPE,n],variants:[{begin:"\\s\\^",
end:"\\s|{|;",returnEnd:!0},{begin:"~\\*?\\s+",end:"\\s|{|;",returnEnd:!0},{
begin:"\\*(\\.[a-z\\-]+)+"},{begin:"([a-z\\-]+\\.)+\\*"}]},{className:"number",
begin:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{
className:"number",begin:"\\b\\d+[kKmMgGdshdwy]*\\b",relevance:0},n]};return{
name:"Nginx config",aliases:["nginxconf"],contains:[e.HASH_COMMENT_MODE,{
begin:e.UNDERSCORE_IDENT_RE+"\\s+{",returnBegin:!0,end:"{",contains:[{
className:"section",begin:e.UNDERSCORE_IDENT_RE}],relevance:0},{
begin:e.UNDERSCORE_IDENT_RE+"\\s",end:";|{",returnBegin:!0,contains:[{
className:"attribute",begin:e.UNDERSCORE_IDENT_RE,starts:a}],relevance:0}],
illegal:"[^\\s\\}]"}}}());
hljs.registerLanguage("objectivec",function(){"use strict";return function(e){
var n=/[a-zA-Z@][a-zA-Z0-9_]*/,_={$pattern:n,
keyword:"@interface @class @protocol @implementation"};return{
name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],
keywords:{$pattern:n,
keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
literal:"false true FALSE TRUE nil YES NO NULL",
built_in:"BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
},illegal:"</",contains:[{className:"built_in",
begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,
keywords:{
"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{
className:"meta-string"}),{className:"meta-string",begin:/<.*?>/,end:/$/,
illegal:"\\n"},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
className:"class",begin:"("+_.keyword.split(" ").join("|")+")\\b",end:"({|$)",
excludeEnd:!0,keywords:_,contains:[e.UNDERSCORE_TITLE_MODE]},{
begin:"\\."+e.UNDERSCORE_IDENT_RE,relevance:0}]}}}());
hljs.registerLanguage("perl",function(){"use strict";return function(e){var n={
$pattern:/[\w.]+/,
keyword:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmget sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
},t={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:n},s={begin:"->{",
end:"}"},r={variants:[{begin:/\$\d/},{
begin:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{begin:/[\$%@][^\s\w{]/,
relevance:0}]
},i=[e.BACKSLASH_ESCAPE,t,r],a=[r,e.HASH_COMMENT_MODE,e.COMMENT("^\\=\\w","\\=cut",{
endsWithParent:!0}),s,{className:"string",contains:i,variants:[{
begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",
end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{
begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*\\<",
end:"\\>",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",
contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",
contains:[e.BACKSLASH_ESCAPE]},{begin:"{\\w+}",contains:[],relevance:0},{
begin:"-?\\w+\\s*\\=\\>",contains:[],relevance:0}]},{className:"number",
begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
relevance:0},{
begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",
keywords:"split return print reverse grep",relevance:0,
contains:[e.HASH_COMMENT_MODE,{className:"regexp",
begin:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",relevance:10},{
className:"regexp",begin:"(m|qr)?/",end:"/[a-z]*",contains:[e.BACKSLASH_ESCAPE],
relevance:0}]},{className:"function",beginKeywords:"sub",
end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{
begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",
subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]
}];return t.contains=a,s.contains=a,{name:"Perl",aliases:["pl","pm"],keywords:n,
contains:a}}}());
hljs.registerLanguage("php",function(){"use strict";return function(e){var r={
begin:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"},t={className:"meta",
variants:[{begin:/<\?php/,relevance:10},{begin:/<\?[=]?/},{begin:/\?>/}]},a={
className:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]
},n=e.inherit(e.APOS_STRING_MODE,{illegal:null
}),i=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,
contains:e.QUOTE_STRING_MODE.contains.concat(a)}),o=e.END_SAME_AS_BEGIN({
begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,
contains:e.QUOTE_STRING_MODE.contains.concat(a)}),l={className:"string",
contains:[e.BACKSLASH_ESCAPE,t],variants:[e.inherit(n,{begin:"b'",end:"'"
}),e.inherit(i,{begin:'b"',end:'"'}),i,n,o]},s={
variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]},c={
keyword:"__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match new object or private protected public real return string switch throw trait try unset use var void while xor yield",
literal:"false null true",
built_in:"Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
};return{aliases:["php","php3","php4","php5","php6","php7","php8"],
case_insensitive:!0,keywords:c,
contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$",{contains:[t]
}),e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]
}),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,
keywords:"__halt_compiler"}),t,{className:"keyword",begin:/\$this\b/},r,{
begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",
beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",
contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",
excludeBegin:!0,excludeEnd:!0,keywords:c,
contains:["self",r,e.C_BLOCK_COMMENT_MODE,l,s]}]},{className:"class",
beginKeywords:"class interface",end:"{",excludeEnd:!0,illegal:/[:\(\$"]/,
contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"namespace",end:";",illegal:/[\.']/,
contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",end:";",
contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"=>"},l,s]}}}());
hljs.registerLanguage("php-template",function(){"use strict";return function(n){
return{name:"PHP template",subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,
end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{
begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0
},n.inherit(n.APOS_STRING_MODE,{illegal:null,className:null,contains:null,
skip:!0}),n.inherit(n.QUOTE_STRING_MODE,{illegal:null,className:null,
contains:null,skip:!0})]}]}}}());
hljs.registerLanguage("plaintext",function(){"use strict";return function(t){
return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}}());
hljs.registerLanguage("properties",function(){"use strict";return function(e){
var n="[ \\t\\f]*",t="("+n+"[:=]"+n+"|[ \\t\\f]+)",a="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",s="([^\\\\:= \\t\\f\\n]|\\\\.)+",r={
end:t,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{
begin:"\\\\\\n"}]}};return{name:".properties",case_insensitive:!0,illegal:/\S/,
contains:[e.COMMENT("^\\s*[!#]","$"),{begin:a+t,returnBegin:!0,contains:[{
className:"attr",begin:a,endsParent:!0,relevance:0}],starts:r},{begin:s+t,
returnBegin:!0,relevance:0,contains:[{className:"meta",begin:s,endsParent:!0,
relevance:0}],starts:r},{className:"attr",relevance:0,begin:s+n+"$"}]}}}());
hljs.registerLanguage("python",function(){"use strict";return function(e){
const n={
keyword:"and as assert async await break class continue def del elif else except finally for  from global if import in is lambda nonlocal|10 not or pass raise return try while with yield",
built_in:"__import__ abs all any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval exec filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow print property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip",
literal:"__debug__ Ellipsis False None NotImplemented True"},a={
className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,
end:/\}/,keywords:n,illegal:/#/},i={begin:/\{\{/,relevance:0},r={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([uU]|[rR])'/,end:/'/,
relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
contains:[e.BACKSLASH_ESCAPE,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,i,s]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},t={
className:"number",relevance:0,variants:[{begin:e.BINARY_NUMBER_RE+"[lLjJ]?"},{
begin:"\\b(0o[0-7]+)[lLjJ]?"},{begin:e.C_NUMBER_RE+"[lLjJ]?"}]},l={
className:"params",variants:[{begin:/\(\s*\)/,skip:!0,className:null},{
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,
contains:["self",a,t,r,e.HASH_COMMENT_MODE]}]};return s.contains=[r,t,a],{
name:"Python",aliases:["py","gyp","ipython"],keywords:n,
illegal:/(<\/|->|\?)|=>/,contains:[a,t,{beginKeywords:"if",relevance:0
},r,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{
className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,
contains:[e.UNDERSCORE_TITLE_MODE,l,{begin:/->/,endsWithParent:!0,
keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,end:/$/},{
begin:/\b(print|exec)\(/}]}}}());
hljs.registerLanguage("python-repl",function(){"use strict";return function(n){
return{aliases:["pycon"],contains:[{className:"meta",starts:{end:/ |$/,starts:{
end:"$",subLanguage:"python"}},variants:[{begin:/^>>>(?=[ ]|$)/},{
begin:/^\.\.\.(?=[ ]|$)/}]}]}}}());
hljs.registerLanguage("ruby",function(){"use strict";return function(e){
var n="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",a={
keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
literal:"true false nil"},s={className:"doctag",begin:"@[A-Za-z]+"},i={
begin:"#<",end:">"},r=[e.COMMENT("#","$",{contains:[s]
}),e.COMMENT("^\\=begin","^\\=end",{contains:[s],relevance:10
}),e.COMMENT("^__END__","\\n$")],c={className:"subst",begin:"#\\{",end:"}",
keywords:a},t={className:"string",contains:[e.BACKSLASH_ESCAPE,c],variants:[{
begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{
begin:"%[qQwWx]?\\(",end:"\\)"},{begin:"%[qQwWx]?\\[",end:"\\]"},{
begin:"%[qQwWx]?{",end:"}"},{begin:"%[qQwWx]?<",end:">"},{begin:"%[qQwWx]?/",
end:"/"},{begin:"%[qQwWx]?%",end:"%"},{begin:"%[qQwWx]?-",end:"-"},{
begin:"%[qQwWx]?\\|",end:"\\|"},{
begin:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{
begin:/<<[-~]?'?(\w+)(?:.|\n)*?\n\s*\1\b/,returnBegin:!0,contains:[{
begin:/<<[-~]?'?/},e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,
contains:[e.BACKSLASH_ESCAPE,c]})]}]},b={className:"params",begin:"\\(",
end:"\\)",endsParent:!0,keywords:a},d=[t,i,{className:"class",
beginKeywords:"class module",end:"$|;",illegal:/=/,
contains:[e.inherit(e.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{
begin:"<\\s*",contains:[{begin:"("+e.IDENT_RE+"::)?"+e.IDENT_RE}]}].concat(r)},{
className:"function",beginKeywords:"def",end:"$|;",
contains:[e.inherit(e.TITLE_MODE,{begin:n}),b].concat(r)},{begin:e.IDENT_RE+"::"
},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(\\!|\\?)?:",relevance:0},{
className:"symbol",begin:":(?!\\s)",contains:[t,{begin:n}],relevance:0},{
className:"number",
begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
relevance:0},{begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{className:"params",
begin:/\|/,end:/\|/,keywords:a},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",
keywords:"unless",contains:[i,{className:"regexp",
contains:[e.BACKSLASH_ESCAPE,c],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"
},{begin:"%r{",end:"}[a-z]*"},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",
end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(r),relevance:0
}].concat(r);c.contains=d,b.contains=d;var g=[{begin:/^\s*=>/,starts:{end:"$",
contains:d}},{className:"meta",
begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
starts:{end:"$",contains:d}}];return{name:"Ruby",
aliases:["rb","gemspec","podspec","thor","irb"],keywords:a,illegal:/\/\*/,
contains:r.concat(g).concat(d)}}}());
hljs.registerLanguage("rust",function(){"use strict";return function(e){
var n="([ui](8|16|32|64|128|size)|f(32|64))?",t="drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!"
;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",
keyword:"abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
literal:"true false Some None Ok Err",built_in:t},illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
className:"string",variants:[{begin:/r(#*)"(.|\n)*?"\1(?!#)/},{
begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
begin:"\\b0b([01_]+)"+n},{begin:"\\b0o([0-7_]+)"+n},{
begin:"\\b0x([A-Fa-f0-9_]+)"+n},{
begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+n}],relevance:0},{
className:"function",beginKeywords:"fn",end:"(\\(|<)",excludeEnd:!0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"#\\!?\\[",
end:"\\]",contains:[{className:"meta-string",begin:/"/,end:/"/}]},{
className:"class",beginKeywords:"type",end:";",
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{endsParent:!0})],illegal:"\\S"},{
className:"class",beginKeywords:"trait enum struct union",end:"{",
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{endsParent:!0})],illegal:"[\\w\\d]"
},{begin:e.IDENT_RE+"::",keywords:{built_in:t}},{begin:"->"}]}}}());
hljs.registerLanguage("scss",function(){"use strict";return function(e){
var t="@[a-z-]+",i={className:"variable",begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
},r={className:"number",begin:"#[0-9A-Fa-f]+"}
;return e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,
e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{name:"SCSS",case_insensitive:!0,
illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"selector-id",begin:"\\#[A-Za-z0-9_-]+",relevance:0},{
className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{
className:"selector-attr",begin:"\\[",end:"\\]",illegal:"$"},{
className:"selector-tag",
begin:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
relevance:0},{className:"selector-pseudo",
begin:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
},{className:"selector-pseudo",
begin:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
},i,{className:"attribute",
begin:"\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
illegal:"[^\\s]"},{
begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
},{begin:":",end:";",
contains:[i,r,e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
className:"meta",begin:"!important"}]},{begin:"@(page|font-face)",lexemes:t,
keywords:"@page @font-face"},{begin:"@",end:"[{;]",returnBegin:!0,
keywords:"and or not only",contains:[{begin:t,className:"keyword"
},i,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,r,e.CSS_NUMBER_MODE]}]}}}());
hljs.registerLanguage("shell",function(){"use strict";return function(s){return{
name:"Shell Session",aliases:["console"],contains:[{className:"meta",
begin:"^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}
}]}}}());
hljs.registerLanguage("sql",function(){"use strict";return function(e){
var t=e.COMMENT("--","$");return{name:"SQL",case_insensitive:!0,
illegal:/[<>{}*]/,contains:[{
beginKeywords:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
end:/;/,endsWithParent:!0,keywords:{$pattern:/[\w\.]+/,
keyword:"as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
literal:"true false null unknown",
built_in:"array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varchar2 varying void"
},contains:[{className:"string",begin:"'",end:"'",contains:[{begin:"''"}]},{
className:"string",begin:'"',end:'"',contains:[{begin:'""'}]},{
className:"string",begin:"`",end:"`"
},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,e.HASH_COMMENT_MODE]
},e.C_BLOCK_COMMENT_MODE,t,e.HASH_COMMENT_MODE]}}}());
hljs.registerLanguage("swift",function(){"use strict";return function(e){var i={
keyword:"#available #colorLiteral #column #else #elseif #endif #file #fileLiteral #function #if #imageLiteral #line #selector #sourceLocation _ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
literal:"true false nil",
built_in:"abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c compactMap contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
},n=e.COMMENT("/\\*","\\*/",{contains:["self"]}),t={className:"subst",
begin:/\\\(/,end:"\\)",keywords:i,contains:[]},a={className:"string",
contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/"""/,end:/"""/},{begin:/"/,
end:/"/}]},r={className:"number",
begin:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
relevance:0};return t.contains=[r],{name:"Swift",keywords:i,
contains:[a,e.C_LINE_COMMENT_MODE,n,{className:"type",
begin:"\\b[A-Z][\\w\xc0-\u02b8']*[!?]"},{className:"type",
begin:"\\b[A-Z][\\w\xc0-\u02b8']*",relevance:0},r,{className:"function",
beginKeywords:"func",end:"{",excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{
begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{begin:/</,end:/>/},{className:"params",
begin:/\(/,end:/\)/,endsParent:!0,keywords:i,
contains:["self",r,a,e.C_BLOCK_COMMENT_MODE,{begin:":"}],illegal:/["']/}],
illegal:/\[|%/},{className:"class",
beginKeywords:"struct protocol class extension enum",keywords:i,end:"\\{",
excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{
begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})]},{className:"meta",
begin:"(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain|@dynamicMemberLookup|@propertyWrapper)\\b"
},{beginKeywords:"import",end:/$/,contains:[e.C_LINE_COMMENT_MODE,n]}]}}}());
hljs.registerLanguage("typescript",function(){"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;function t(e){return r("(?=",e,")")}function i(e){return r("(",e,")?")}
function r(...e){return e.map((e=>{
return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}
return function(c){const o={$pattern:e,
keyword:n.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]).join(" "),
literal:a.join(" "),
built_in:s.concat(["any","void","number","boolean","string","object","never","enum"]).join(" ")
},l={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},d=(e,n,a)=>{
const s=e.contains.findIndex((e=>e.label===n))
;if(-1===s)throw Error("can not find mode to replace");e.contains.splice(s,1,a)
},g=function(c){const o=e,l={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,s=e.input[a];"<"!==s?">"===s&&(((e,{after:n})=>{
const a=e[0].replace("<","</");return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()):n.ignoreMatch()}},d={$pattern:e,keyword:n.join(" "),
literal:a.join(" "),built_in:s.join(" ")
},g=(e,n)=>`\\b0[${e}][${n}]([${n}_]*[${n}])?n?`,b=/[1-9]([0-9_]*\d)?/,u=/\d([0-9_]*\d)?/,E=r(/[eE][+-]?/,u),m={
className:"number",variants:[{begin:g("bB","01")},{begin:g("oO","0-7")},{
begin:g("xX","0-9a-fA-F")},{begin:r(/\b/,b,"n")},{begin:r(/(\b0)?\./,u,i(E))},{
begin:r(/\b/,b,i(r(/\./,i(u))),i(E))},{begin:/\b0[\.n]?/}],relevance:0},y={
className:"subst",begin:"\\$\\{",end:"\\}",keywords:d,contains:[]},p={
begin:"html`",end:"",starts:{end:"`",returnEnd:!1,
contains:[c.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},_={begin:"css`",end:"",
starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,y],subLanguage:"css"}
},N={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,y]},f={
className:"comment",variants:[c.COMMENT("/\\*\\*","\\*/",{relevance:0,
contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",
begin:"\\{",end:"\\}",relevance:0},{className:"variable",
begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,
relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]
},A=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,p,_,N,m,c.REGEXP_MODE]
;y.contains=A.concat({begin:/{/,end:/}/,keywords:d,contains:["self"].concat(A)})
;const O=[].concat(f,y.contains),S=O.concat([{begin:/\(/,end:/\)/,keywords:d,
contains:["self"].concat(O)}]),T={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:d,contains:S};return{name:"Javascript",
aliases:["js","jsx","mjs","cjs"],keywords:d,exports:{PARAMS_CONTAINS:S},
illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",
relevance:5}),{label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,p,_,N,f,m,{
begin:r(/[{,\n]\s*/,t(r(/(\/\/.*$)*/,/(\/\*(.|\n)*\*\/)*/,/\s*/,o+"\\s*:"))),
relevance:0,contains:[{className:"attr",begin:o+t("\\s*:"),relevance:0}]},{
begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",contains:[f,c.REGEXP_MODE,{className:"function",
begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",
returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
begin:c.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:d,contains:S}]}]},{
begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{
begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],
subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]
}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,
excludeEnd:!0,keywords:d,contains:["self",c.inherit(c.TITLE_MODE,{begin:o}),T],
illegal:/%/},{className:"function",
begin:c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*{",
returnBegin:!0,contains:[T,c.inherit(c.TITLE_MODE,{begin:o})]},{variants:[{
begin:"\\."+o},{begin:"\\$"+o}],relevance:0},{className:"class",
beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{
beginKeywords:"extends"},c.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
end:/[\{;]/,excludeEnd:!0,contains:[c.inherit(c.TITLE_MODE,{begin:o}),"self",T]
},{begin:"(get|set)\\s+(?="+o+"\\()",end:/{/,keywords:"get set",
contains:[c.inherit(c.TITLE_MODE,{begin:o}),{begin:/\(\)/},T]},{begin:/\$[(.]/}]
}}(c)
;return Object.assign(g.keywords,o),g.exports.PARAMS_CONTAINS.push(l),g.contains=g.contains.concat([l,{
beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",
end:/\{/,excludeEnd:!0,keywords:"interface extends"
}]),d(g,"shebang",c.SHEBANG()),d(g,"use_strict",{className:"meta",relevance:10,
begin:/^\s*['"]use strict['"]/
}),g.contains.find((e=>"function"===e.className)).relevance=0,Object.assign(g,{
name:"TypeScript",aliases:["ts"]}),g}}());
hljs.registerLanguage("yaml",function(){"use strict";return function(e){
var n="true false yes no null",a="[\\w#;/?:@&=+$,.~*\\'()[\\]]+",s={
className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",
variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]},i=e.inherit(s,{
variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l={
end:",",endsWithParent:!0,excludeEnd:!0,contains:[],keywords:n,relevance:0},t={
begin:"{",end:"}",contains:[l],illegal:"\\n",relevance:0},g={begin:"\\[",
end:"\\]",contains:[l],illegal:"\\n",relevance:0},b=[{className:"attr",
variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{
begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
}]},{className:"meta",begin:"^---s*$",relevance:10},{className:"string",
begin:"[\\|>]([0-9]?[+-])?[ ]*\\n( *)[\\S ]+\\n(\\2[\\S ]+\\n?)*"},{
begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,
relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",
begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a
},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",
begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"\\-(?=[ ]|$)",
relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{
className:"number",
begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
},{className:"number",begin:e.C_NUMBER_RE+"\\b"},t,g,s],c=[...b];return c.pop(),
c.push(i),l.contains=c,{name:"YAML",case_insensitive:!0,aliases:["yml","YAML"],
contains:b}}}());
define("highlight", function(){});

// https://www.kancloud.cn/wangfupeng/wangeditor3/335775
define('pieceEditor',['editor', 'highlight'], function(editor, hls){
    var wEditor = null;
    var editorBox = null;

    // 全屏的事件
    var fullscreen = function () {
        var $mainBody = $('.piece-body-main').eq(0);
        // 判断是否有全屏的样式
        var hasFullScreen = $('#piece-editor').hasClass('w-e-full-screen-editor');
        if (hasFullScreen) {
            $mainBody.addClass('editor-fullscreen');
        } else {
            $mainBody.removeClass('editor-fullscreen');
        }
    };

    var init = function(obj) {
        editorBox = document.getElementById('piece-editor');
        wEditor = new editor(editorBox);
        setconfig();
        imgUpload(obj.server, obj.uploadFileName);
        // 如果传递了textareaID属性 那么就使用textarea储存
        if(obj.textareaID) {
            var $textarea = $('#' + obj.textareaID);
            useTextarea($textarea);
        }
        // new以后 必须要在所有配置项都配置好后，在执行create()
        wEditor.create();

        // 必须在create之后进行与textarea同步内容 以防富文本有内容编辑
        if(obj.textareaID) {
            $textarea.val(getHtml());
        }

        // 需要给富文本加一个name 否则JQ.validate会因为找不到富文本的name而报错
        wEditor.$textElem.attr('name', 'edit');
        // 添加编辑器工具栏点击的事件
        wEditor.txt.eventHooks.toolbarClickEvents.push(fullscreen);
    };

    var setconfig = function () {
        wEditor.config.debug = true;
        // 设置编辑区域高度为 500px
        wEditor.config.height = 400;
        // 取消自动 focus
        wEditor.config.focus = true;
        // 修改默认提示输入文字
        wEditor.config.placeholder = '请输入新的文章内容';
        // 配置全屏功能按钮是否展示
        wEditor.config.showFullScreen = true;
        // 是否过滤粘贴的文本样式
        wEditor.config.pasteFilterStyle = true;
        //插入代码语言配置
        wEditor.config.languageType = [
            'Html',
            'CSS',
            'JavaScript',
            'PHP',
            'SQL',
            'JSON',
            'TypeScript',
            'C',
            'Java',
            'XML',
            'Markdown',
            'Python'
        ];
        wEditor.highlight = hls;
        // 忽略从word等处粘贴来的图片 只保留文字信息
        wEditor.config.pasteIgnoreImg = true;
        // 自定义检查插入图片的链接, 不可用
        // wEditor.config.linkImgCheck = function(imgSrc) {
        //     return imgSrc + '图片 src 有 xxx 错误';
        // };
    };

    var getHtml = function() {
        return wEditor.txt.html();
    };

    var getText = function() {
        return wEditor.txt.text();
    };

    // 上传图片的相关配置
    var imgUpload = function(server, name) {
        // 配置服务器端地址
        // wEditor.config.uploadImgServer = server;
        // 文件名称也就是你在后台接受的参数值
        // wEditor.config.uploadFileName = "articleimg";
        //header头信息
        // wEditor.config.uploadImgHeaders = {
        //     'Accept': 'text/x-json'
        // }
        // 将图片大小限制为 6M
        wEditor.config.uploadImgMaxSize = 5 * 1024 * 1024;
        // 限制一次最多上传 5 张图片
        wEditor.config.uploadImgMaxLength = 5;
        // false隐藏插入网络图片的功能，即只保留上传本地图片
        wEditor.config.showLinkImg = true;
        // 上传图片时可自定义传递一些参数
        // wEditor.config.uploadImgParams = {
        //     token: 'workupload',
        // };
        // 上传返回的情况
        wEditor.config.uploadImgHooks = {
            fail:function (xhr, editor, result) {
                console.table(result);
                //上传错误时触发
                alert("上传图片失败");
            }
        };
        /**
         * 重写多图上传的方法
         * @param resultFiles 是 input 中选中的文件列表
         * @param insertImgFn 是获取图片 url 后，插入到编辑器的方法
         * 上传图片，返回结果，将图片插入到编辑器中
         * insertImgFn(imgUrl)
         */
        wEditor.config.customUploadImg = function(resultFiles, insertImgFn) {
            // 插件自带的仅支持单图上传，这里做成多图上传
            var formData = new FormData();
            for(var i = 0;i < resultFiles.length;i ++) {
                formData.append(name + "[" + i + "]", resultFiles[i]);
            }
            $.ajax({
                url: server,
                type: "POST",
                data: formData,
                // 当为false时候是同步的！
                async: true,
                cache: false,
                dataType: 'json',
                contentType: false,
                processData: false,
                success:function(res){
                    console.log(res)
                    if (res.error === 0) {
                        $.each(res.data, function () {
                            insertImgFn(this);
                        })
                    }
                }
            });
        };
    };

    // 编辑时，将内容同步到textarea中
    var useTextarea = function($textarea) {
        wEditor.config.onchange = function (html) {
            // 监控变化，同步更新到 textarea
            $textarea.val(html)
        }
    };

    return {
        init: init,
        getHtml: getHtml,
        getText: getText
    };
});
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*! WebUploader 0.1.5 */


/**
 * @fileOverview 让内部各个部件的代码可以用[amd](https://github.com/amdjs/amdjs-api/wiki/AMD)模块定义方式组织起来。
 *
 * AMD API 内部的简单不完全实现，请忽略。只有当WebUploader被合并成一个文件的时候才会引入。
 */
(function( root, factory ) {
    var modules = {},

        // 内部require, 简单不完全实现。
        // https://github.com/amdjs/amdjs-api/wiki/require
        _require = function( deps, callback ) {
            var args, len, i;

            // 如果deps不是数组，则直接返回指定module
            if ( typeof deps === 'string' ) {
                return getModule( deps );
            } else {
                args = [];
                for( len = deps.length, i = 0; i < len; i++ ) {
                    args.push( getModule( deps[ i ] ) );
                }

                return callback.apply( null, args );
            }
        },

        // 内部define，暂时不支持不指定id.
        _define = function( id, deps, factory ) {
            if ( arguments.length === 2 ) {
                factory = deps;
                deps = null;
            }

            _require( deps || [], function() {
                setModule( id, factory, arguments );
            });
        },

        // 设置module, 兼容CommonJs写法。
        setModule = function( id, factory, args ) {
            var module = {
                    exports: factory
                },
                returned;

            if ( typeof factory === 'function' ) {
                args.length || (args = [ _require, module.exports, module ]);
                returned = factory.apply( null, args );
                returned !== undefined && (module.exports = returned);
            }

            modules[ id ] = module.exports;
        },

        // 根据id获取module
        getModule = function( id ) {
            var module = modules[ id ] || root[ id ];

            if ( !module ) {
                throw new Error( '`' + id + '` is undefined' );
            }

            return module;
        },

        // 将所有modules，将路径ids装换成对象。
        exportsTo = function( obj ) {
            var key, host, parts, part, last, ucFirst;

            // make the first character upper case.
            ucFirst = function( str ) {
                return str && (str.charAt( 0 ).toUpperCase() + str.substr( 1 ));
            };

            for ( key in modules ) {
                host = obj;

                if ( !modules.hasOwnProperty( key ) ) {
                    continue;
                }

                parts = key.split('/');
                last = ucFirst( parts.pop() );

                while( (part = ucFirst( parts.shift() )) ) {
                    host[ part ] = host[ part ] || {};
                    host = host[ part ];
                }

                host[ last ] = modules[ key ];
            }

            return obj;
        },

        makeExport = function( dollar ) {
            root.__dollar = dollar;

            // exports every module.
            return exportsTo( factory( root, _define, _require ) );
        },

        origin;

    if ( typeof module === 'object' && typeof module.exports === 'object' ) {

        // For CommonJS and CommonJS-like environments where a proper window is present,
        module.exports = makeExport();
    } else if ( typeof define === 'function' && define.amd ) {

        // Allow using this built library as an AMD module
        // in another project. That other project will only
        // see this AMD call, not the internal modules in
        // the closure below.
        define('webuploader',[ 'jquery' ], makeExport );
    } else {

        // Browser globals case. Just assign the
        // result to a property on the global.
        origin = root.WebUploader;
        root.WebUploader = makeExport();
        root.WebUploader.noConflict = function() {
            root.WebUploader = origin;
        };
    }
})( window, function( window, define, require ) {


    /**
     * @fileOverview jQuery or Zepto
     */
    define('dollar-third',[],function() {
        var $ = window.__dollar || window.jQuery || window.Zepto;
    
        if ( !$ ) {
            throw new Error('jQuery or Zepto not found!');
        }
    
        return $;
    });
    /**
     * @fileOverview Dom 操作相关
     */
    define('dollar',[
        'dollar-third'
    ], function( _ ) {
        return _;
    });
    /**
     * @fileOverview 使用jQuery的Promise
     */
    define('promise-third',[
        'dollar'
    ], function( $ ) {
        return {
            Deferred: $.Deferred,
            when: $.when,
    
            isPromise: function( anything ) {
                return anything && typeof anything.then === 'function';
            }
        };
    });
    /**
     * @fileOverview Promise/A+
     */
    define('promise',[
        'promise-third'
    ], function( _ ) {
        return _;
    });
    /**
     * @fileOverview 基础类方法。
     */
    
    /**
     * Web Uploader内部类的详细说明，以下提及的功能类，都可以在`WebUploader`这个变量中访问到。
     *
     * As you know, Web Uploader的每个文件都是用过[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)规范中的`define`组织起来的, 每个Module都会有个module id.
     * 默认module id为该文件的路径，而此路径将会转化成名字空间存放在WebUploader中。如：
     *
     * * module `base`：WebUploader.Base
     * * module `file`: WebUploader.File
     * * module `lib/dnd`: WebUploader.Lib.Dnd
     * * module `runtime/html5/dnd`: WebUploader.Runtime.Html5.Dnd
     *
     *
     * 以下文档中对类的使用可能省略掉了`WebUploader`前缀。
     * @module WebUploader
     * @title WebUploader API文档
     */
    define('base',[
        'dollar',
        'promise'
    ], function( $, promise ) {
    
        var noop = function() {},
            call = Function.call;
    
        // http://jsperf.com/uncurrythis
        // 反科里化
        function uncurryThis( fn ) {
            return function() {
                return call.apply( fn, arguments );
            };
        }
    
        function bindFn( fn, context ) {
            return function() {
                return fn.apply( context, arguments );
            };
        }
    
        function createObject( proto ) {
            var f;
    
            if ( Object.create ) {
                return Object.create( proto );
            } else {
                f = function() {};
                f.prototype = proto;
                return new f();
            }
        }
    
    
        /**
         * 基础类，提供一些简单常用的方法。
         * @class Base
         */
        return {
    
            /**
             * @property {String} version 当前版本号。
             */
            version: '0.1.5',
    
            /**
             * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
             */
            $: $,
    
            Deferred: promise.Deferred,
    
            isPromise: promise.isPromise,
    
            when: promise.when,
    
            /**
             * @description  简单的浏览器检查结果。
             *
             * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
             * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
             * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
             * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
             * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
             * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
             *
             * @property {Object} [browser]
             */
            browser: (function( ua ) {
                var ret = {},
                    webkit = ua.match( /WebKit\/([\d.]+)/ ),
                    chrome = ua.match( /Chrome\/([\d.]+)/ ) ||
                        ua.match( /CriOS\/([\d.]+)/ ),
    
                    ie = ua.match( /MSIE\s([\d\.]+)/ ) ||
                        ua.match( /(?:trident)(?:.*rv:([\w.]+))?/i ),
                    firefox = ua.match( /Firefox\/([\d.]+)/ ),
                    safari = ua.match( /Safari\/([\d.]+)/ ),
                    opera = ua.match( /OPR\/([\d.]+)/ );
    
                webkit && (ret.webkit = parseFloat( webkit[ 1 ] ));
                chrome && (ret.chrome = parseFloat( chrome[ 1 ] ));
                ie && (ret.ie = parseFloat( ie[ 1 ] ));
                firefox && (ret.firefox = parseFloat( firefox[ 1 ] ));
                safari && (ret.safari = parseFloat( safari[ 1 ] ));
                opera && (ret.opera = parseFloat( opera[ 1 ] ));
    
                return ret;
            })( navigator.userAgent ),
    
            /**
             * @description  操作系统检查结果。
             *
             * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
             * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
             * @property {Object} [os]
             */
            os: (function( ua ) {
                var ret = {},
    
                    // osx = !!ua.match( /\(Macintosh\; Intel / ),
                    android = ua.match( /(?:Android);?[\s\/]+([\d.]+)?/ ),
                    ios = ua.match( /(?:iPad|iPod|iPhone).*OS\s([\d_]+)/ );
    
                // osx && (ret.osx = true);
                android && (ret.android = parseFloat( android[ 1 ] ));
                ios && (ret.ios = parseFloat( ios[ 1 ].replace( /_/g, '.' ) ));
    
                return ret;
            })( navigator.userAgent ),
    
            /**
             * 实现类与类之间的继承。
             * @method inherits
             * @grammar Base.inherits( super ) => child
             * @grammar Base.inherits( super, protos ) => child
             * @grammar Base.inherits( super, protos, statics ) => child
             * @param  {Class} super 父类
             * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
             * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
             * @param  {Object} [statics] 静态属性或方法。
             * @return {Class} 返回子类。
             * @example
             * function Person() {
             *     console.log( 'Super' );
             * }
             * Person.prototype.hello = function() {
             *     console.log( 'hello' );
             * };
             *
             * var Manager = Base.inherits( Person, {
             *     world: function() {
             *         console.log( 'World' );
             *     }
             * });
             *
             * // 因为没有指定构造器，父类的构造器将会执行。
             * var instance = new Manager();    // => Super
             *
             * // 继承子父类的方法
             * instance.hello();    // => hello
             * instance.world();    // => World
             *
             * // 子类的__super__属性指向父类
             * console.log( Manager.__super__ === Person );    // => true
             */
            inherits: function( Super, protos, staticProtos ) {
                var child;
    
                if ( typeof protos === 'function' ) {
                    child = protos;
                    protos = null;
                } else if ( protos && protos.hasOwnProperty('constructor') ) {
                    child = protos.constructor;
                } else {
                    child = function() {
                        return Super.apply( this, arguments );
                    };
                }
    
                // 复制静态方法
                $.extend( true, child, Super, staticProtos || {} );
    
                /* jshint camelcase: false */
    
                // 让子类的__super__属性指向父类。
                child.__super__ = Super.prototype;
    
                // 构建原型，添加原型方法或属性。
                // 暂时用Object.create实现。
                child.prototype = createObject( Super.prototype );
                protos && $.extend( true, child.prototype, protos );
    
                return child;
            },
    
            /**
             * 一个不做任何事情的方法。可以用来赋值给默认的callback.
             * @method noop
             */
            noop: noop,
    
            /**
             * 返回一个新的方法，此方法将已指定的`context`来执行。
             * @grammar Base.bindFn( fn, context ) => Function
             * @method bindFn
             * @example
             * var doSomething = function() {
             *         console.log( this.name );
             *     },
             *     obj = {
             *         name: 'Object Name'
             *     },
             *     aliasFn = Base.bind( doSomething, obj );
             *
             *  aliasFn();    // => Object Name
             *
             */
            bindFn: bindFn,
    
            /**
             * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
             * @grammar Base.log( args... ) => undefined
             * @method log
             */
            log: (function() {
                if ( window.console ) {
                    return bindFn( console.log, console );
                }
                return noop;
            })(),
    
            nextTick: (function() {
    
                return function( cb ) {
                    setTimeout( cb, 1 );
                };
    
                // @bug 当浏览器不在当前窗口时就停了。
                // var next = window.requestAnimationFrame ||
                //     window.webkitRequestAnimationFrame ||
                //     window.mozRequestAnimationFrame ||
                //     function( cb ) {
                //         window.setTimeout( cb, 1000 / 60 );
                //     };
    
                // // fix: Uncaught TypeError: Illegal invocation
                // return bindFn( next, window );
            })(),
    
            /**
             * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
             * 将用来将非数组对象转化成数组对象。
             * @grammar Base.slice( target, start[, end] ) => Array
             * @method slice
             * @example
             * function doSomthing() {
             *     var args = Base.slice( arguments, 1 );
             *     console.log( args );
             * }
             *
             * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
             */
            slice: uncurryThis( [].slice ),
    
            /**
             * 生成唯一的ID
             * @method guid
             * @grammar Base.guid() => String
             * @grammar Base.guid( prefx ) => String
             */
            guid: (function() {
                var counter = 0;
    
                return function( prefix ) {
                    var guid = (+new Date()).toString( 32 ),
                        i = 0;
    
                    for ( ; i < 5; i++ ) {
                        guid += Math.floor( Math.random() * 65535 ).toString( 32 );
                    }
    
                    return (prefix || 'wu_') + guid + (counter++).toString( 32 );
                };
            })(),
    
            /**
             * 格式化文件大小, 输出成带单位的字符串
             * @method formatSize
             * @grammar Base.formatSize( size ) => String
             * @grammar Base.formatSize( size, pointLength ) => String
             * @grammar Base.formatSize( size, pointLength, units ) => String
             * @param {Number} size 文件大小
             * @param {Number} [pointLength=2] 精确到的小数点数。
             * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
             * @example
             * console.log( Base.formatSize( 100 ) );    // => 100B
             * console.log( Base.formatSize( 1024 ) );    // => 1.00K
             * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
             * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
             * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
             * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
             */
            formatSize: function( size, pointLength, units ) {
                var unit;
    
                units = units || [ 'B', 'K', 'M', 'G', 'TB' ];
    
                while ( (unit = units.shift()) && size > 1024 ) {
                    size = size / 1024;
                }
    
                return (unit === 'B' ? size : size.toFixed( pointLength || 2 )) +
                        unit;
            }
        };
    });
    /**
     * 事件处理类，可以独立使用，也可以扩展给对象使用。
     * @fileOverview Mediator
     */
    define('mediator',[
        'base'
    ], function( Base ) {
        var $ = Base.$,
            slice = [].slice,
            separator = /\s+/,
            protos;
    
        // 根据条件过滤出事件handlers.
        function findHandlers( arr, name, callback, context ) {
            return $.grep( arr, function( handler ) {
                return handler &&
                        (!name || handler.e === name) &&
                        (!callback || handler.cb === callback ||
                        handler.cb._cb === callback) &&
                        (!context || handler.ctx === context);
            });
        }
    
        function eachEvent( events, callback, iterator ) {
            // 不支持对象，只支持多个event用空格隔开
            $.each( (events || '').split( separator ), function( _, key ) {
                iterator( key, callback );
            });
        }
    
        function triggerHanders( events, args ) {
            var stoped = false,
                i = -1,
                len = events.length,
                handler;
    
            while ( ++i < len ) {
                handler = events[ i ];
    
                if ( handler.cb.apply( handler.ctx2, args ) === false ) {
                    stoped = true;
                    break;
                }
            }
    
            return !stoped;
        }
    
        protos = {
    
            /**
             * 绑定事件。
             *
             * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
             * ```javascript
             * var obj = {};
             *
             * // 使得obj有事件行为
             * Mediator.installTo( obj );
             *
             * obj.on( 'testa', function( arg1, arg2 ) {
             *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
             * });
             *
             * obj.trigger( 'testa', 'arg1', 'arg2' );
             * ```
             *
             * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
             * 切会影响到`trigger`方法的返回值，为`false`。
             *
             * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
             * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
             * ```javascript
             * obj.on( 'all', function( type, arg1, arg2 ) {
             *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
             * });
             * ```
             *
             * @method on
             * @grammar on( name, callback[, context] ) => self
             * @param  {String}   name     事件名，支持多个事件用空格隔开
             * @param  {Function} callback 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             * @class Mediator
             */
            on: function( name, callback, context ) {
                var me = this,
                    set;
    
                if ( !callback ) {
                    return this;
                }
    
                set = this._events || (this._events = []);
    
                eachEvent( name, callback, function( name, callback ) {
                    var handler = { e: name };
    
                    handler.cb = callback;
                    handler.ctx = context;
                    handler.ctx2 = context || me;
                    handler.id = set.length;
    
                    set.push( handler );
                });
    
                return this;
            },
    
            /**
             * 绑定事件，且当handler执行完后，自动解除绑定。
             * @method once
             * @grammar once( name, callback[, context] ) => self
             * @param  {String}   name     事件名
             * @param  {Function} callback 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             */
            once: function( name, callback, context ) {
                var me = this;
    
                if ( !callback ) {
                    return me;
                }
    
                eachEvent( name, callback, function( name, callback ) {
                    var once = function() {
                            me.off( name, once );
                            return callback.apply( context || me, arguments );
                        };
    
                    once._cb = callback;
                    me.on( name, once, context );
                });
    
                return me;
            },
    
            /**
             * 解除事件绑定
             * @method off
             * @grammar off( [name[, callback[, context] ] ] ) => self
             * @param  {String}   [name]     事件名
             * @param  {Function} [callback] 事件处理器
             * @param  {Object}   [context]  事件处理器的上下文。
             * @return {self} 返回自身，方便链式
             * @chainable
             */
            off: function( name, cb, ctx ) {
                var events = this._events;
    
                if ( !events ) {
                    return this;
                }
    
                if ( !name && !cb && !ctx ) {
                    this._events = [];
                    return this;
                }
    
                eachEvent( name, cb, function( name, cb ) {
                    $.each( findHandlers( events, name, cb, ctx ), function() {
                        delete events[ this.id ];
                    });
                });
    
                return this;
            },
    
            /**
             * 触发事件
             * @method trigger
             * @grammar trigger( name[, args...] ) => self
             * @param  {String}   type     事件名
             * @param  {*} [...] 任意参数
             * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
             */
            trigger: function( type ) {
                var args, events, allEvents;
    
                if ( !this._events || !type ) {
                    return this;
                }
    
                args = slice.call( arguments, 1 );
                events = findHandlers( this._events, type );
                allEvents = findHandlers( this._events, 'all' );
    
                return triggerHanders( events, args ) &&
                        triggerHanders( allEvents, arguments );
            }
        };
    
        /**
         * 中介者，它本身是个单例，但可以通过[installTo](#WebUploader:Mediator:installTo)方法，使任何对象具备事件行为。
         * 主要目的是负责模块与模块之间的合作，降低耦合度。
         *
         * @class Mediator
         */
        return $.extend({
    
            /**
             * 可以通过这个接口，使任何对象具备事件功能。
             * @method installTo
             * @param  {Object} obj 需要具备事件行为的对象。
             * @return {Object} 返回obj.
             */
            installTo: function( obj ) {
                return $.extend( obj, protos );
            }
    
        }, protos );
    });
    /**
     * @fileOverview Uploader上传类
     */
    define('uploader',[
        'base',
        'mediator'
    ], function( Base, Mediator ) {
    
        var $ = Base.$;
    
        /**
         * 上传入口类。
         * @class Uploader
         * @constructor
         * @grammar new Uploader( opts ) => Uploader
         * @example
         * var uploader = WebUploader.Uploader({
         *     swf: 'path_of_swf/Uploader.swf',
         *
         *     // 开起分片上传。
         *     chunked: true
         * });
         */
        function Uploader( opts ) {
            this.options = $.extend( true, {}, Uploader.options, opts );
            this._init( this.options );
        }
    
        // default Options
        // widgets中有相应扩展
        Uploader.options = {};
        Mediator.installTo( Uploader.prototype );
    
        // 批量添加纯命令式方法。
        $.each({
            upload: 'start-upload',
            stop: 'stop-upload',
            getFile: 'get-file',
            getFiles: 'get-files',
            addFile: 'add-file',
            addFiles: 'add-file',
            sort: 'sort-files',
            removeFile: 'remove-file',
            cancelFile: 'cancel-file',
            skipFile: 'skip-file',
            retry: 'retry',
            isInProgress: 'is-in-progress',
            makeThumb: 'make-thumb',
            md5File: 'md5-file',
            getDimension: 'get-dimension',
            addButton: 'add-btn',
            predictRuntimeType: 'predict-runtime-type',
            refresh: 'refresh',
            disable: 'disable',
            enable: 'enable',
            reset: 'reset'
        }, function( fn, command ) {
            Uploader.prototype[ fn ] = function() {
                return this.request( command, arguments );
            };
        });
    
        $.extend( Uploader.prototype, {
            state: 'pending',
    
            _init: function( opts ) {
                var me = this;
    
                me.request( 'init', opts, function() {
                    me.state = 'ready';
                    me.trigger('ready');
                });
            },
    
            /**
             * 获取或者设置Uploader配置项。
             * @method option
             * @grammar option( key ) => *
             * @grammar option( key, val ) => self
             * @example
             *
             * // 初始状态图片上传前不会压缩
             * var uploader = new WebUploader.Uploader({
             *     compress: null;
             * });
             *
             * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
             * uploader.option( 'compress', {
             *     width: 1600,
             *     height: 1600
             * });
             */
            option: function( key, val ) {
                var opts = this.options;
    
                // setter
                if ( arguments.length > 1 ) {
    
                    if ( $.isPlainObject( val ) &&
                            $.isPlainObject( opts[ key ] ) ) {
                        $.extend( opts[ key ], val );
                    } else {
                        opts[ key ] = val;
                    }
    
                } else {    // getter
                    return key ? opts[ key ] : opts;
                }
            },
    
            /**
             * 获取文件统计信息。返回一个包含一下信息的对象。
             * * `successNum` 上传成功的文件数
             * * `progressNum` 上传中的文件数
             * * `cancelNum` 被删除的文件数
             * * `invalidNum` 无效的文件数
             * * `uploadFailNum` 上传失败的文件数
             * * `queueNum` 还在队列中的文件数
             * * `interruptNum` 被暂停的文件数
             * @method getStats
             * @grammar getStats() => Object
             */
            getStats: function() {
                // return this._mgr.getStats.apply( this._mgr, arguments );
                var stats = this.request('get-stats');
    
                return stats ? {
                    successNum: stats.numOfSuccess,
                    progressNum: stats.numOfProgress,
    
                    // who care?
                    // queueFailNum: 0,
                    cancelNum: stats.numOfCancel,
                    invalidNum: stats.numOfInvalid,
                    uploadFailNum: stats.numOfUploadFailed,
                    queueNum: stats.numOfQueue,
                    interruptNum: stats.numofInterrupt
                } : {};
            },
    
            // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
            trigger: function( type/*, args...*/ ) {
                var args = [].slice.call( arguments, 1 ),
                    opts = this.options,
                    name = 'on' + type.substring( 0, 1 ).toUpperCase() +
                        type.substring( 1 );
    
                if (
                        // 调用通过on方法注册的handler.
                        Mediator.trigger.apply( this, arguments ) === false ||
    
                        // 调用opts.onEvent
                        $.isFunction( opts[ name ] ) &&
                        opts[ name ].apply( this, args ) === false ||
    
                        // 调用this.onEvent
                        $.isFunction( this[ name ] ) &&
                        this[ name ].apply( this, args ) === false ||
    
                        // 广播所有uploader的事件。
                        Mediator.trigger.apply( Mediator,
                        [ this, type ].concat( args ) ) === false ) {
    
                    return false;
                }
    
                return true;
            },
    
            /**
             * 销毁 webuploader 实例
             * @method destroy
             * @grammar destroy() => undefined
             */
            destroy: function() {
                this.request( 'destroy', arguments );
                this.off();
            },
    
            // widgets/widget.js将补充此方法的详细文档。
            request: Base.noop
        });
    
        /**
         * 创建Uploader实例，等同于new Uploader( opts );
         * @method create
         * @class Base
         * @static
         * @grammar Base.create( opts ) => Uploader
         */
        Base.create = Uploader.create = function( opts ) {
            return new Uploader( opts );
        };
    
        // 暴露Uploader，可以通过它来扩展业务逻辑。
        Base.Uploader = Uploader;
    
        return Uploader;
    });
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/runtime',[
        'base',
        'mediator'
    ], function( Base, Mediator ) {
    
        var $ = Base.$,
            factories = {},
    
            // 获取对象的第一个key
            getFirstKey = function( obj ) {
                for ( var key in obj ) {
                    if ( obj.hasOwnProperty( key ) ) {
                        return key;
                    }
                }
                return null;
            };
    
        // 接口类。
        function Runtime( options ) {
            this.options = $.extend({
                container: document.body
            }, options );
            this.uid = Base.guid('rt_');
        }
    
        $.extend( Runtime.prototype, {
    
            getContainer: function() {
                var opts = this.options,
                    parent, container;
    
                if ( this._container ) {
                    return this._container;
                }
    
                parent = $( opts.container || document.body );
                container = $( document.createElement('div') );
    
                container.attr( 'id', 'rt_' + this.uid );
                container.css({
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '1px',
                    height: '1px',
                    overflow: 'hidden'
                });
    
                parent.append( container );
                parent.addClass('webuploader-container');
                this._container = container;
                this._parent = parent;
                return container;
            },
    
            init: Base.noop,
            exec: Base.noop,
    
            destroy: function() {
                this._container && this._container.remove();
                this._parent && this._parent.removeClass('webuploader-container');
                this.off();
            }
        });
    
        Runtime.orders = 'html5,flash';
    
    
        /**
         * 添加Runtime实现。
         * @param {String} type    类型
         * @param {Runtime} factory 具体Runtime实现。
         */
        Runtime.addRuntime = function( type, factory ) {
            factories[ type ] = factory;
        };
    
        Runtime.hasRuntime = function( type ) {
            return !!(type ? factories[ type ] : getFirstKey( factories ));
        };
    
        Runtime.create = function( opts, orders ) {
            var type, runtime;
    
            orders = orders || Runtime.orders;
            $.each( orders.split( /\s*,\s*/g ), function() {
                if ( factories[ this ] ) {
                    type = this;
                    return false;
                }
            });
    
            type = type || getFirstKey( factories );
    
            if ( !type ) {
                throw new Error('Runtime Error');
            }
    
            runtime = new factories[ type ]( opts );
            return runtime;
        };
    
        Mediator.installTo( Runtime.prototype );
        return Runtime;
    });
    
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/client',[
        'base',
        'mediator',
        'runtime/runtime'
    ], function( Base, Mediator, Runtime ) {
    
        var cache;
    
        cache = (function() {
            var obj = {};
    
            return {
                add: function( runtime ) {
                    obj[ runtime.uid ] = runtime;
                },
    
                get: function( ruid, standalone ) {
                    var i;
    
                    if ( ruid ) {
                        return obj[ ruid ];
                    }
    
                    for ( i in obj ) {
                        // 有些类型不能重用，比如filepicker.
                        if ( standalone && obj[ i ].__standalone ) {
                            continue;
                        }
    
                        return obj[ i ];
                    }
    
                    return null;
                },
    
                remove: function( runtime ) {
                    delete obj[ runtime.uid ];
                }
            };
        })();
    
        function RuntimeClient( component, standalone ) {
            var deferred = Base.Deferred(),
                runtime;
    
            this.uid = Base.guid('client_');
    
            // 允许runtime没有初始化之前，注册一些方法在初始化后执行。
            this.runtimeReady = function( cb ) {
                return deferred.done( cb );
            };
    
            this.connectRuntime = function( opts, cb ) {
    
                // already connected.
                if ( runtime ) {
                    throw new Error('already connected!');
                }
    
                deferred.done( cb );
    
                if ( typeof opts === 'string' && cache.get( opts ) ) {
                    runtime = cache.get( opts );
                }
    
                // 像filePicker只能独立存在，不能公用。
                runtime = runtime || cache.get( null, standalone );
    
                // 需要创建
                if ( !runtime ) {
                    runtime = Runtime.create( opts, opts.runtimeOrder );
                    runtime.__promise = deferred.promise();
                    runtime.once( 'ready', deferred.resolve );
                    runtime.init();
                    cache.add( runtime );
                    runtime.__client = 1;
                } else {
                    // 来自cache
                    Base.$.extend( runtime.options, opts );
                    runtime.__promise.then( deferred.resolve );
                    runtime.__client++;
                }
    
                standalone && (runtime.__standalone = standalone);
                return runtime;
            };
    
            this.getRuntime = function() {
                return runtime;
            };
    
            this.disconnectRuntime = function() {
                if ( !runtime ) {
                    return;
                }
    
                runtime.__client--;
    
                if ( runtime.__client <= 0 ) {
                    cache.remove( runtime );
                    delete runtime.__promise;
                    runtime.destroy();
                }
    
                runtime = null;
            };
    
            this.exec = function() {
                if ( !runtime ) {
                    return;
                }
    
                var args = Base.slice( arguments );
                component && args.unshift( component );
    
                return runtime.exec.apply( this, args );
            };
    
            this.getRuid = function() {
                return runtime && runtime.uid;
            };
    
            this.destroy = (function( destroy ) {
                return function() {
                    destroy && destroy.apply( this, arguments );
                    this.trigger('destroy');
                    this.off();
                    this.exec('destroy');
                    this.disconnectRuntime();
                };
            })( this.destroy );
        }
    
        Mediator.installTo( RuntimeClient.prototype );
        return RuntimeClient;
    });
    /**
     * @fileOverview 错误信息
     */
    define('lib/dnd',[
        'base',
        'mediator',
        'runtime/client'
    ], function( Base, Mediator, RuntimeClent ) {
    
        var $ = Base.$;
    
        function DragAndDrop( opts ) {
            opts = this.options = $.extend({}, DragAndDrop.options, opts );
    
            opts.container = $( opts.container );
    
            if ( !opts.container.length ) {
                return;
            }
    
            RuntimeClent.call( this, 'DragAndDrop' );
        }
    
        DragAndDrop.options = {
            accept: null,
            disableGlobalDnd: false
        };
    
        Base.inherits( RuntimeClent, {
            constructor: DragAndDrop,
    
            init: function() {
                var me = this;
    
                me.connectRuntime( me.options, function() {
                    me.exec('init');
                    me.trigger('ready');
                });
            }
        });
    
        Mediator.installTo( DragAndDrop.prototype );
    
        return DragAndDrop;
    });
    /**
     * @fileOverview 组件基类。
     */
    define('widgets/widget',[
        'base',
        'uploader'
    ], function( Base, Uploader ) {
    
        var $ = Base.$,
            _init = Uploader.prototype._init,
            _destroy = Uploader.prototype.destroy,
            IGNORE = {},
            widgetClass = [];
    
        function isArrayLike( obj ) {
            if ( !obj ) {
                return false;
            }
    
            var length = obj.length,
                type = $.type( obj );
    
            if ( obj.nodeType === 1 && length ) {
                return true;
            }
    
            return type === 'array' || type !== 'function' && type !== 'string' &&
                    (length === 0 || typeof length === 'number' && length > 0 &&
                    (length - 1) in obj);
        }
    
        function Widget( uploader ) {
            this.owner = uploader;
            this.options = uploader.options;
        }
    
        $.extend( Widget.prototype, {
    
            init: Base.noop,
    
            // 类Backbone的事件监听声明，监听uploader实例上的事件
            // widget直接无法监听事件，事件只能通过uploader来传递
            invoke: function( apiName, args ) {
    
                /*
                    {
                        'make-thumb': 'makeThumb'
                    }
                 */
                var map = this.responseMap;
    
                // 如果无API响应声明则忽略
                if ( !map || !(apiName in map) || !(map[ apiName ] in this) ||
                        !$.isFunction( this[ map[ apiName ] ] ) ) {
    
                    return IGNORE;
                }
    
                return this[ map[ apiName ] ].apply( this, args );
    
            },
    
            /**
             * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
             * @method request
             * @grammar request( command, args ) => * | Promise
             * @grammar request( command, args, callback ) => Promise
             * @for  Uploader
             */
            request: function() {
                return this.owner.request.apply( this.owner, arguments );
            }
        });
    
        // 扩展Uploader.
        $.extend( Uploader.prototype, {
    
            /**
             * @property {String | Array} [disableWidgets=undefined]
             * @namespace options
             * @for Uploader
             * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
             */
    
            // 覆写_init用来初始化widgets
            _init: function() {
                var me = this,
                    widgets = me._widgets = [],
                    deactives = me.options.disableWidgets || '';
    
                $.each( widgetClass, function( _, klass ) {
                    (!deactives || !~deactives.indexOf( klass._name )) &&
                        widgets.push( new klass( me ) );
                });
    
                return _init.apply( me, arguments );
            },
    
            request: function( apiName, args, callback ) {
                var i = 0,
                    widgets = this._widgets,
                    len = widgets && widgets.length,
                    rlts = [],
                    dfds = [],
                    widget, rlt, promise, key;
    
                args = isArrayLike( args ) ? args : [ args ];
    
                for ( ; i < len; i++ ) {
                    widget = widgets[ i ];
                    rlt = widget.invoke( apiName, args );
    
                    if ( rlt !== IGNORE ) {
    
                        // Deferred对象
                        if ( Base.isPromise( rlt ) ) {
                            dfds.push( rlt );
                        } else {
                            rlts.push( rlt );
                        }
                    }
                }
    
                // 如果有callback，则用异步方式。
                if ( callback || dfds.length ) {
                    promise = Base.when.apply( Base, dfds );
                    key = promise.pipe ? 'pipe' : 'then';
    
                    // 很重要不能删除。删除了会死循环。
                    // 保证执行顺序。让callback总是在下一个 tick 中执行。
                    return promise[ key ](function() {
                                var deferred = Base.Deferred(),
                                    args = arguments;
    
                                if ( args.length === 1 ) {
                                    args = args[ 0 ];
                                }
    
                                setTimeout(function() {
                                    deferred.resolve( args );
                                }, 1 );
    
                                return deferred.promise();
                            })[ callback ? key : 'done' ]( callback || Base.noop );
                } else {
                    return rlts[ 0 ];
                }
            },
    
            destroy: function() {
                _destroy.apply( this, arguments );
                this._widgets = null;
            }
        });
    
        /**
         * 添加组件
         * @grammar Uploader.register(proto);
         * @grammar Uploader.register(map, proto);
         * @param  {object} responseMap API 名称与函数实现的映射
         * @param  {object} proto 组件原型，构造函数通过 constructor 属性定义
         * @method Uploader.register
         * @for Uploader
         * @example
         * Uploader.register({
         *     'make-thumb': 'makeThumb'
         * }, {
         *     init: function( options ) {},
         *     makeThumb: function() {}
         * });
         *
         * Uploader.register({
         *     'make-thumb': function() {
         *         
         *     }
         * });
         */
        Uploader.register = Widget.register = function( responseMap, widgetProto ) {
            var map = { init: 'init', destroy: 'destroy', name: 'anonymous' },
                klass;
    
            if ( arguments.length === 1 ) {
                widgetProto = responseMap;
    
                // 自动生成 map 表。
                $.each(widgetProto, function(key) {
                    if ( key[0] === '_' || key === 'name' ) {
                        key === 'name' && (map.name = widgetProto.name);
                        return;
                    }
    
                    map[key.replace(/[A-Z]/g, '-$&').toLowerCase()] = key;
                });
    
            } else {
                map = $.extend( map, responseMap );
            }
    
            widgetProto.responseMap = map;
            klass = Base.inherits( Widget, widgetProto );
            klass._name = map.name;
            widgetClass.push( klass );
    
            return klass;
        };
    
        /**
         * 删除插件，只有在注册时指定了名字的才能被删除。
         * @grammar Uploader.unRegister(name);
         * @param  {string} name 组件名字
         * @method Uploader.unRegister
         * @for Uploader
         * @example
         *
         * Uploader.register({
         *     name: 'custom',
         *     
         *     'make-thumb': function() {
         *         
         *     }
         * });
         *
         * Uploader.unRegister('custom');
         */
        Uploader.unRegister = Widget.unRegister = function( name ) {
            if ( !name || name === 'anonymous' ) {
                return;
            }
            
            // 删除指定的插件。
            for ( var i = widgetClass.length; i--; ) {
                if ( widgetClass[i]._name === name ) {
                    widgetClass.splice(i, 1)
                }
            }
        };
    
        return Widget;
    });
    /**
     * @fileOverview DragAndDrop Widget。
     */
    define('widgets/filednd',[
        'base',
        'uploader',
        'lib/dnd',
        'widgets/widget'
    ], function( Base, Uploader, Dnd ) {
        var $ = Base.$;
    
        Uploader.options.dnd = '';
    
        /**
         * @property {Selector} [dnd=undefined]  指定Drag And Drop拖拽的容器，如果不指定，则不启动。
         * @namespace options
         * @for Uploader
         */
        
        /**
         * @property {Selector} [disableGlobalDnd=false]  是否禁掉整个页面的拖拽功能，如果不禁用，图片拖进来的时候会默认被浏览器打开。
         * @namespace options
         * @for Uploader
         */
    
        /**
         * @event dndAccept
         * @param {DataTransferItemList} items DataTransferItem
         * @description 阻止此事件可以拒绝某些类型的文件拖入进来。目前只有 chrome 提供这样的 API，且只能通过 mime-type 验证。
         * @for  Uploader
         */
        return Uploader.register({
            name: 'dnd',
            
            init: function( opts ) {
    
                if ( !opts.dnd ||
                        this.request('predict-runtime-type') !== 'html5' ) {
                    return;
                }
    
                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                        disableGlobalDnd: opts.disableGlobalDnd,
                        container: opts.dnd,
                        accept: opts.accept
                    }),
                    dnd;
    
                this.dnd = dnd = new Dnd( options );
    
                dnd.once( 'ready', deferred.resolve );
                dnd.on( 'drop', function( files ) {
                    me.request( 'add-file', [ files ]);
                });
    
                // 检测文件是否全部允许添加。
                dnd.on( 'accept', function( items ) {
                    return me.owner.trigger( 'dndAccept', items );
                });
    
                dnd.init();
    
                return deferred.promise();
            },
    
            destroy: function() {
                this.dnd && this.dnd.destroy();
            }
        });
    });
    
    /**
     * @fileOverview 错误信息
     */
    define('lib/filepaste',[
        'base',
        'mediator',
        'runtime/client'
    ], function( Base, Mediator, RuntimeClent ) {
    
        var $ = Base.$;
    
        function FilePaste( opts ) {
            opts = this.options = $.extend({}, opts );
            opts.container = $( opts.container || document.body );
            RuntimeClent.call( this, 'FilePaste' );
        }
    
        Base.inherits( RuntimeClent, {
            constructor: FilePaste,
    
            init: function() {
                var me = this;
    
                me.connectRuntime( me.options, function() {
                    me.exec('init');
                    me.trigger('ready');
                });
            }
        });
    
        Mediator.installTo( FilePaste.prototype );
    
        return FilePaste;
    });
    /**
     * @fileOverview 组件基类。
     */
    define('widgets/filepaste',[
        'base',
        'uploader',
        'lib/filepaste',
        'widgets/widget'
    ], function( Base, Uploader, FilePaste ) {
        var $ = Base.$;
    
        /**
         * @property {Selector} [paste=undefined]  指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片。建议设置为`document.body`.
         * @namespace options
         * @for Uploader
         */
        return Uploader.register({
            name: 'paste',
            
            init: function( opts ) {
    
                if ( !opts.paste ||
                        this.request('predict-runtime-type') !== 'html5' ) {
                    return;
                }
    
                var me = this,
                    deferred = Base.Deferred(),
                    options = $.extend({}, {
                        container: opts.paste,
                        accept: opts.accept
                    }),
                    paste;
    
                this.paste = paste = new FilePaste( options );
    
                paste.once( 'ready', deferred.resolve );
                paste.on( 'paste', function( files ) {
                    me.owner.request( 'add-file', [ files ]);
                });
                paste.init();
    
                return deferred.promise();
            },
    
            destroy: function() {
                this.paste && this.paste.destroy();
            }
        });
    });
    /**
     * @fileOverview Blob
     */
    define('lib/blob',[
        'base',
        'runtime/client'
    ], function( Base, RuntimeClient ) {
    
        function Blob( ruid, source ) {
            var me = this;
    
            me.source = source;
            me.ruid = ruid;
            this.size = source.size || 0;
    
            // 如果没有指定 mimetype, 但是知道文件后缀。
            if ( !source.type && this.ext &&
                    ~'jpg,jpeg,png,gif,bmp'.indexOf( this.ext ) ) {
                this.type = 'image/' + (this.ext === 'jpg' ? 'jpeg' : this.ext);
            } else {
                this.type = source.type || 'application/octet-stream';
            }
    
            RuntimeClient.call( me, 'Blob' );
            this.uid = source.uid || this.uid;
    
            if ( ruid ) {
                me.connectRuntime( ruid );
            }
        }
    
        Base.inherits( RuntimeClient, {
            constructor: Blob,
    
            slice: function( start, end ) {
                return this.exec( 'slice', start, end );
            },
    
            getSource: function() {
                return this.source;
            }
        });
    
        return Blob;
    });
    /**
     * 为了统一化Flash的File和HTML5的File而存在。
     * 以至于要调用Flash里面的File，也可以像调用HTML5版本的File一下。
     * @fileOverview File
     */
    define('lib/file',[
        'base',
        'lib/blob'
    ], function( Base, Blob ) {
    
        var uid = 1,
            rExt = /\.([^.]+)$/;
    
        function File( ruid, file ) {
            var ext;
    
            this.name = file.name || ('untitled' + uid++);
            ext = rExt.exec( file.name ) ? RegExp.$1.toLowerCase() : '';
    
            // todo 支持其他类型文件的转换。
            // 如果有 mimetype, 但是文件名里面没有找出后缀规律
            if ( !ext && file.type ) {
                ext = /\/(jpg|jpeg|png|gif|bmp)$/i.exec( file.type ) ?
                        RegExp.$1.toLowerCase() : '';
                this.name += '.' + ext;
            }
    
            this.ext = ext;
            this.lastModifiedDate = file.lastModifiedDate ||
                    (new Date()).toLocaleString();
    
            Blob.apply( this, arguments );
        }
    
        return Base.inherits( Blob, File );
    });
    
    /**
     * @fileOverview 错误信息
     */
    define('lib/filepicker',[
        'base',
        'runtime/client',
        'lib/file'
    ], function( Base, RuntimeClent, File ) {
    
        var $ = Base.$;
    
        function FilePicker( opts ) {
            opts = this.options = $.extend({}, FilePicker.options, opts );
    
            opts.container = $( opts.id );
    
            if ( !opts.container.length ) {
                throw new Error('按钮指定错误');
            }
    
            opts.innerHTML = opts.innerHTML || opts.label ||
                    opts.container.html() || '';
    
            opts.button = $( opts.button || document.createElement('div') );
            opts.button.html( opts.innerHTML );
            opts.container.html( opts.button );
    
            RuntimeClent.call( this, 'FilePicker', true );
        }
    
        FilePicker.options = {
            button: null,
            container: null,
            label: null,
            innerHTML: null,
            multiple: true,
            accept: null,
            name: 'file'
        };
    
        Base.inherits( RuntimeClent, {
            constructor: FilePicker,
    
            init: function() {
                var me = this,
                    opts = me.options,
                    button = opts.button;
    
                button.addClass('webuploader-pick');
    
                me.on( 'all', function( type ) {
                    var files;
    
                    switch ( type ) {
                        case 'mouseenter':
                            button.addClass('webuploader-pick-hover');
                            break;
    
                        case 'mouseleave':
                            button.removeClass('webuploader-pick-hover');
                            break;
    
                        case 'change':
                            files = me.exec('getFiles');
                            me.trigger( 'select', $.map( files, function( file ) {
                                file = new File( me.getRuid(), file );
    
                                // 记录来源。
                                file._refer = opts.container;
                                return file;
                            }), opts.container );
                            break;
                    }
                });
    
                me.connectRuntime( opts, function() {
                    me.refresh();
                    me.exec( 'init', opts );
                    me.trigger('ready');
                });
    
                this._resizeHandler = Base.bindFn( this.refresh, this );
                $( window ).on( 'resize', this._resizeHandler );
            },
    
            refresh: function() {
                var shimContainer = this.getRuntime().getContainer(),
                    button = this.options.button,
                    width = button.outerWidth ?
                            button.outerWidth() : button.width(),
    
                    height = button.outerHeight ?
                            button.outerHeight() : button.height(),
    
                    pos = button.offset();
    
                width && height && shimContainer.css({
                    bottom: 'auto',
                    right: 'auto',
                    width: width + 'px',
                    height: height + 'px'
                }).offset( pos );
            },
    
            enable: function() {
                var btn = this.options.button;
    
                btn.removeClass('webuploader-pick-disable');
                this.refresh();
            },
    
            disable: function() {
                var btn = this.options.button;
    
                this.getRuntime().getContainer().css({
                    top: '-99999px'
                });
    
                btn.addClass('webuploader-pick-disable');
            },
    
            destroy: function() {
                var btn = this.options.button;
                $( window ).off( 'resize', this._resizeHandler );
                btn.removeClass('webuploader-pick-disable webuploader-pick-hover ' +
                    'webuploader-pick');
            }
        });
    
        return FilePicker;
    });
    
    /**
     * @fileOverview 文件选择相关
     */
    define('widgets/filepicker',[
        'base',
        'uploader',
        'lib/filepicker',
        'widgets/widget'
    ], function( Base, Uploader, FilePicker ) {
        var $ = Base.$;
    
        $.extend( Uploader.options, {
    
            /**
             * @property {Selector | Object} [pick=undefined]
             * @namespace options
             * @for Uploader
             * @description 指定选择文件的按钮容器，不指定则不创建按钮。
             *
             * * `id` {Seletor|dom} 指定选择文件的按钮容器，不指定则不创建按钮。**注意** 这里虽然写的是 id, 但是不是只支持 id, 还支持 class, 或者 dom 节点。
             * * `label` {String} 请采用 `innerHTML` 代替
             * * `innerHTML` {String} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
             * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
             */
            pick: null,
    
            /**
             * @property {Arroy} [accept=null]
             * @namespace options
             * @for Uploader
             * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
             *
             * * `title` {String} 文字描述
             * * `extensions` {String} 允许的文件后缀，不带点，多个用逗号分割。
             * * `mimeTypes` {String} 多个用逗号分割。
             *
             * 如：
             *
             * ```
             * {
             *     title: 'Images',
             *     extensions: 'gif,jpg,jpeg,bmp,png',
             *     mimeTypes: 'image/*'
             * }
             * ```
             */
            accept: null/*{
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }*/
        });
    
        return Uploader.register({
            name: 'picker',
    
            init: function( opts ) {
                this.pickers = [];
                return opts.pick && this.addBtn( opts.pick );
            },
    
            refresh: function() {
                $.each( this.pickers, function() {
                    this.refresh();
                });
            },
    
            /**
             * @method addButton
             * @for Uploader
             * @grammar addButton( pick ) => Promise
             * @description
             * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
             * @example
             * uploader.addButton({
             *     id: '#btnContainer',
             *     innerHTML: '选择文件'
             * });
             */
            addBtn: function( pick ) {
                var me = this,
                    opts = me.options,
                    accept = opts.accept,
                    promises = [];
    
                if ( !pick ) {
                    return;
                }
    
                $.isPlainObject( pick ) || (pick = {
                    id: pick
                });
    
                $( pick.id ).each(function() {
                    var options, picker, deferred;
    
                    deferred = Base.Deferred();
    
                    options = $.extend({}, pick, {
                        accept: $.isPlainObject( accept ) ? [ accept ] : accept,
                        swf: opts.swf,
                        runtimeOrder: opts.runtimeOrder,
                        id: this
                    });
    
                    picker = new FilePicker( options );
    
                    picker.once( 'ready', deferred.resolve );
                    picker.on( 'select', function( files ) {
                        me.owner.request( 'add-file', [ files ]);
                    });
                    picker.init();
    
                    me.pickers.push( picker );
    
                    promises.push( deferred.promise() );
                });
    
                return Base.when.apply( Base, promises );
            },
    
            disable: function() {
                $.each( this.pickers, function() {
                    this.disable();
                });
            },
    
            enable: function() {
                $.each( this.pickers, function() {
                    this.enable();
                });
            },
    
            destroy: function() {
                $.each( this.pickers, function() {
                    this.destroy();
                });
                this.pickers = null;
            }
        });
    });
    /**
     * @fileOverview Image
     */
    define('lib/image',[
        'base',
        'runtime/client',
        'lib/blob'
    ], function( Base, RuntimeClient, Blob ) {
        var $ = Base.$;
    
        // 构造器。
        function Image( opts ) {
            this.options = $.extend({}, Image.options, opts );
            RuntimeClient.call( this, 'Image' );
    
            this.on( 'load', function() {
                this._info = this.exec('info');
                this._meta = this.exec('meta');
            });
        }
    
        // 默认选项。
        Image.options = {
    
            // 默认的图片处理质量
            quality: 90,
    
            // 是否裁剪
            crop: false,
    
            // 是否保留头部信息
            preserveHeaders: false,
    
            // 是否允许放大。
            allowMagnify: false
        };
    
        // 继承RuntimeClient.
        Base.inherits( RuntimeClient, {
            constructor: Image,
    
            info: function( val ) {
    
                // setter
                if ( val ) {
                    this._info = val;
                    return this;
                }
    
                // getter
                return this._info;
            },
    
            meta: function( val ) {
    
                // setter
                if ( val ) {
                    this._meta = val;
                    return this;
                }
    
                // getter
                return this._meta;
            },
    
            loadFromBlob: function( blob ) {
                var me = this,
                    ruid = blob.getRuid();
    
                this.connectRuntime( ruid, function() {
                    me.exec( 'init', me.options );
                    me.exec( 'loadFromBlob', blob );
                });
            },
    
            resize: function() {
                var args = Base.slice( arguments );
                return this.exec.apply( this, [ 'resize' ].concat( args ) );
            },
    
            crop: function() {
                var args = Base.slice( arguments );
                return this.exec.apply( this, [ 'crop' ].concat( args ) );
            },
    
            getAsDataUrl: function( type ) {
                return this.exec( 'getAsDataUrl', type );
            },
    
            getAsBlob: function( type ) {
                var blob = this.exec( 'getAsBlob', type );
    
                return new Blob( this.getRuid(), blob );
            }
        });
    
        return Image;
    });
    /**
     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
     */
    define('widgets/image',[
        'base',
        'uploader',
        'lib/image',
        'widgets/widget'
    ], function( Base, Uploader, Image ) {
    
        var $ = Base.$,
            throttle;
    
        // 根据要处理的文件大小来节流，一次不能处理太多，会卡。
        throttle = (function( max ) {
            var occupied = 0,
                waiting = [],
                tick = function() {
                    var item;
    
                    while ( waiting.length && occupied < max ) {
                        item = waiting.shift();
                        occupied += item[ 0 ];
                        item[ 1 ]();
                    }
                };
    
            return function( emiter, size, cb ) {
                waiting.push([ size, cb ]);
                emiter.once( 'destroy', function() {
                    occupied -= size;
                    setTimeout( tick, 1 );
                });
                setTimeout( tick, 1 );
            };
        })( 5 * 1024 * 1024 );
    
        $.extend( Uploader.options, {
    
            /**
             * @property {Object} [thumb]
             * @namespace options
             * @for Uploader
             * @description 配置生成缩略图的选项。
             *
             * 默认为：
             *
             * ```javascript
             * {
             *     width: 110,
             *     height: 110,
             *
             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
             *     quality: 70,
             *
             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
             *     allowMagnify: true,
             *
             *     // 是否允许裁剪。
             *     crop: true,
             *
             *     // 为空的话则保留原有图片格式。
             *     // 否则强制转换成指定的类型。
             *     type: 'image/jpeg'
             * }
             * ```
             */
            thumb: {
                width: 110,
                height: 110,
                quality: 70,
                allowMagnify: true,
                crop: true,
                preserveHeaders: false,
    
                // 为空的话则保留原有图片格式。
                // 否则强制转换成指定的类型。
                // IE 8下面 base64 大小不能超过 32K 否则预览失败，而非 jpeg 编码的图片很可
                // 能会超过 32k, 所以这里设置成预览的时候都是 image/jpeg
                type: 'image/jpeg'
            },
    
            /**
             * @property {Object} [compress]
             * @namespace options
             * @for Uploader
             * @description 配置压缩的图片的选项。如果此选项为`false`, 则图片在上传前不进行压缩。
             *
             * 默认为：
             *
             * ```javascript
             * {
             *     width: 1600,
             *     height: 1600,
             *
             *     // 图片质量，只有type为`image/jpeg`的时候才有效。
             *     quality: 90,
             *
             *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
             *     allowMagnify: false,
             *
             *     // 是否允许裁剪。
             *     crop: false,
             *
             *     // 是否保留头部meta信息。
             *     preserveHeaders: true,
             *
             *     // 如果发现压缩后文件大小比原来还大，则使用原来图片
             *     // 此属性可能会影响图片自动纠正功能
             *     noCompressIfLarger: false,
             *
             *     // 单位字节，如果图片大小小于此值，不会采用压缩。
             *     compressSize: 0
             * }
             * ```
             */
            compress: {
                width: 1600,
                height: 1600,
                quality: 90,
                allowMagnify: false,
                crop: false,
                preserveHeaders: true
            }
        });
    
        return Uploader.register({
    
            name: 'image',
    
    
            /**
             * 生成缩略图，此过程为异步，所以需要传入`callback`。
             * 通常情况在图片加入队里后调用此方法来生成预览图以增强交互效果。
             *
             * 当 width 或者 height 的值介于 0 - 1 时，被当成百分比使用。
             *
             * `callback`中可以接收到两个参数。
             * * 第一个为error，如果生成缩略图有错误，此error将为真。
             * * 第二个为ret, 缩略图的Data URL值。
             *
             * **注意**
             * Date URL在IE6/7中不支持，所以不用调用此方法了，直接显示一张暂不支持预览图片好了。
             * 也可以借助服务端，将 base64 数据传给服务端，生成一个临时文件供预览。
             *
             * @method makeThumb
             * @grammar makeThumb( file, callback ) => undefined
             * @grammar makeThumb( file, callback, width, height ) => undefined
             * @for Uploader
             * @example
             *
             * uploader.on( 'fileQueued', function( file ) {
             *     var $li = ...;
             *
             *     uploader.makeThumb( file, function( error, ret ) {
             *         if ( error ) {
             *             $li.text('预览错误');
             *         } else {
             *             $li.append('<img alt="" src="' + ret + '" />');
             *         }
             *     });
             *
             * });
             */
            makeThumb: function( file, cb, width, height ) {
                var opts, image;
    
                file = this.request( 'get-file', file );
    
                // 只预览图片格式。
                if ( !file.type.match( /^image/ ) ) {
                    cb( true );
                    return;
                }
    
                opts = $.extend({}, this.options.thumb );
    
                // 如果传入的是object.
                if ( $.isPlainObject( width ) ) {
                    opts = $.extend( opts, width );
                    width = null;
                }
    
                width = width || opts.width;
                height = height || opts.height;
    
                image = new Image( opts );
    
                image.once( 'load', function() {
                    file._info = file._info || image.info();
                    file._meta = file._meta || image.meta();
    
                    // 如果 width 的值介于 0 - 1
                    // 说明设置的是百分比。
                    if ( width <= 1 && width > 0 ) {
                        width = file._info.width * width;
                    }
    
                    // 同样的规则应用于 height
                    if ( height <= 1 && height > 0 ) {
                        height = file._info.height * height;
                    }
    
                    image.resize( width, height );
                });
    
                // 当 resize 完后
                image.once( 'complete', function() {
                    cb( false, image.getAsDataUrl( opts.type ) );
                    image.destroy();
                });
    
                image.once( 'error', function( reason ) {
                    cb( reason || true );
                    image.destroy();
                });
    
                throttle( image, file.source.size, function() {
                    file._info && image.info( file._info );
                    file._meta && image.meta( file._meta );
                    image.loadFromBlob( file.source );
                });
            },
    
            beforeSendFile: function( file ) {
                var opts = this.options.compress || this.options.resize,
                    compressSize = opts && opts.compressSize || 0,
                    noCompressIfLarger = opts && opts.noCompressIfLarger || false,
                    image, deferred;
    
                file = this.request( 'get-file', file );
    
                // 只压缩 jpeg 图片格式。
                // gif 可能会丢失针
                // bmp png 基本上尺寸都不大，且压缩比比较小。
                if ( !opts || !~'image/jpeg,image/jpg'.indexOf( file.type ) ||
                        file.size < compressSize ||
                        file._compressed ) {
                    return;
                }
    
                opts = $.extend({}, opts );
                deferred = Base.Deferred();
    
                image = new Image( opts );
    
                deferred.always(function() {
                    image.destroy();
                    image = null;
                });
                image.once( 'error', deferred.reject );
                image.once( 'load', function() {
                    var width = opts.width,
                        height = opts.height;
    
                    file._info = file._info || image.info();
                    file._meta = file._meta || image.meta();
    
                    // 如果 width 的值介于 0 - 1
                    // 说明设置的是百分比。
                    if ( width <= 1 && width > 0 ) {
                        width = file._info.width * width;
                    }
    
                    // 同样的规则应用于 height
                    if ( height <= 1 && height > 0 ) {
                        height = file._info.height * height;
                    }
    
                    image.resize( width, height );
                });
    
                image.once( 'complete', function() {
                    var blob, size;
    
                    // 移动端 UC / qq 浏览器的无图模式下
                    // ctx.getImageData 处理大图的时候会报 Exception
                    // INDEX_SIZE_ERR: DOM Exception 1
                    try {
                        blob = image.getAsBlob( opts.type );
    
                        size = file.size;
    
                        // 如果压缩后，比原来还大则不用压缩后的。
                        if ( !noCompressIfLarger || blob.size < size ) {
                            // file.source.destroy && file.source.destroy();
                            file.source = blob;
                            file.size = blob.size;
    
                            file.trigger( 'resize', blob.size, size );
                        }
    
                        // 标记，避免重复压缩。
                        file._compressed = true;
                        deferred.resolve();
                    } catch ( e ) {
                        // 出错了直接继续，让其上传原始图片
                        deferred.resolve();
                    }
                });
    
                file._info && image.info( file._info );
                file._meta && image.meta( file._meta );
    
                image.loadFromBlob( file.source );
                return deferred.promise();
            }
        });
    });
    /**
     * @fileOverview 文件属性封装
     */
    define('file',[
        'base',
        'mediator'
    ], function( Base, Mediator ) {
    
        var $ = Base.$,
            idPrefix = 'WU_FILE_',
            idSuffix = 0,
            rExt = /\.([^.]+)$/,
            statusMap = {};
    
        function gid() {
            return idPrefix + idSuffix++;
        }
    
        /**
         * 文件类
         * @class File
         * @constructor 构造函数
         * @grammar new File( source ) => File
         * @param {Lib.File} source [lib.File](#Lib.File)实例, 此source对象是带有Runtime信息的。
         */
        function WUFile( source ) {
    
            /**
             * 文件名，包括扩展名（后缀）
             * @property name
             * @type {string}
             */
            this.name = source.name || 'Untitled';
    
            /**
             * 文件体积（字节）
             * @property size
             * @type {uint}
             * @default 0
             */
            this.size = source.size || 0;
    
            /**
             * 文件MIMETYPE类型，与文件类型的对应关系请参考[http://t.cn/z8ZnFny](http://t.cn/z8ZnFny)
             * @property type
             * @type {string}
             * @default 'application/octet-stream'
             */
            this.type = source.type || 'application/octet-stream';
    
            /**
             * 文件最后修改日期
             * @property lastModifiedDate
             * @type {int}
             * @default 当前时间戳
             */
            this.lastModifiedDate = source.lastModifiedDate || (new Date() * 1);
    
            /**
             * 文件ID，每个对象具有唯一ID，与文件名无关
             * @property id
             * @type {string}
             */
            this.id = gid();
    
            /**
             * 文件扩展名，通过文件名获取，例如test.png的扩展名为png
             * @property ext
             * @type {string}
             */
            this.ext = rExt.exec( this.name ) ? RegExp.$1 : '';
    
    
            /**
             * 状态文字说明。在不同的status语境下有不同的用途。
             * @property statusText
             * @type {string}
             */
            this.statusText = '';
    
            // 存储文件状态，防止通过属性直接修改
            statusMap[ this.id ] = WUFile.Status.INITED;
    
            this.source = source;
            this.loaded = 0;
    
            this.on( 'error', function( msg ) {
                this.setStatus( WUFile.Status.ERROR, msg );
            });
        }
    
        $.extend( WUFile.prototype, {
    
            /**
             * 设置状态，状态变化时会触发`change`事件。
             * @method setStatus
             * @grammar setStatus( status[, statusText] );
             * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
             * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
             */
            setStatus: function( status, text ) {
    
                var prevStatus = statusMap[ this.id ];
    
                typeof text !== 'undefined' && (this.statusText = text);
    
                if ( status !== prevStatus ) {
                    statusMap[ this.id ] = status;
                    /**
                     * 文件状态变化
                     * @event statuschange
                     */
                    this.trigger( 'statuschange', status, prevStatus );
                }
    
            },
    
            /**
             * 获取文件状态
             * @return {File.Status}
             * @example
                     文件状态具体包括以下几种类型：
                     {
                         // 初始化
                        INITED:     0,
                        // 已入队列
                        QUEUED:     1,
                        // 正在上传
                        PROGRESS:     2,
                        // 上传出错
                        ERROR:         3,
                        // 上传成功
                        COMPLETE:     4,
                        // 上传取消
                        CANCELLED:     5
                    }
             */
            getStatus: function() {
                return statusMap[ this.id ];
            },
    
            /**
             * 获取文件原始信息。
             * @return {*}
             */
            getSource: function() {
                return this.source;
            },
    
            destroy: function() {
                this.off();
                delete statusMap[ this.id ];
            }
        });
    
        Mediator.installTo( WUFile.prototype );
    
        /**
         * 文件状态值，具体包括以下几种类型：
         * * `inited` 初始状态
         * * `queued` 已经进入队列, 等待上传
         * * `progress` 上传中
         * * `complete` 上传完成。
         * * `error` 上传出错，可重试
         * * `interrupt` 上传中断，可续传。
         * * `invalid` 文件不合格，不能重试上传。会自动从队列中移除。
         * * `cancelled` 文件被移除。
         * @property {Object} Status
         * @namespace File
         * @class File
         * @static
         */
        WUFile.Status = {
            INITED:     'inited',    // 初始状态
            QUEUED:     'queued',    // 已经进入队列, 等待上传
            PROGRESS:   'progress',    // 上传中
            ERROR:      'error',    // 上传出错，可重试
            COMPLETE:   'complete',    // 上传完成。
            CANCELLED:  'cancelled',    // 上传取消。
            INTERRUPT:  'interrupt',    // 上传中断，可续传。
            INVALID:    'invalid'    // 文件不合格，不能重试上传。
        };
    
        return WUFile;
    });
    
    /**
     * @fileOverview 文件队列
     */
    define('queue',[
        'base',
        'mediator',
        'file'
    ], function( Base, Mediator, WUFile ) {
    
        var $ = Base.$,
            STATUS = WUFile.Status;
    
        /**
         * 文件队列, 用来存储各个状态中的文件。
         * @class Queue
         * @extends Mediator
         */
        function Queue() {
    
            /**
             * 统计文件数。
             * * `numOfQueue` 队列中的文件数。
             * * `numOfSuccess` 上传成功的文件数
             * * `numOfCancel` 被取消的文件数
             * * `numOfProgress` 正在上传中的文件数
             * * `numOfUploadFailed` 上传错误的文件数。
             * * `numOfInvalid` 无效的文件数。
             * * `numofDeleted` 被移除的文件数。
             * @property {Object} stats
             */
            this.stats = {
                numOfQueue: 0,
                numOfSuccess: 0,
                numOfCancel: 0,
                numOfProgress: 0,
                numOfUploadFailed: 0,
                numOfInvalid: 0,
                numofDeleted: 0,
                numofInterrupt: 0
            };
    
            // 上传队列，仅包括等待上传的文件
            this._queue = [];
    
            // 存储所有文件
            this._map = {};
        }
    
        $.extend( Queue.prototype, {
    
            /**
             * 将新文件加入对队列尾部
             *
             * @method append
             * @param  {File} file   文件对象
             */
            append: function( file ) {
                this._queue.push( file );
                this._fileAdded( file );
                return this;
            },
    
            /**
             * 将新文件加入对队列头部
             *
             * @method prepend
             * @param  {File} file   文件对象
             */
            prepend: function( file ) {
                this._queue.unshift( file );
                this._fileAdded( file );
                return this;
            },
    
            /**
             * 获取文件对象
             *
             * @method getFile
             * @param  {String} fileId   文件ID
             * @return {File}
             */
            getFile: function( fileId ) {
                if ( typeof fileId !== 'string' ) {
                    return fileId;
                }
                return this._map[ fileId ];
            },
    
            /**
             * 从队列中取出一个指定状态的文件。
             * @grammar fetch( status ) => File
             * @method fetch
             * @param {String} status [文件状态值](#WebUploader:File:File.Status)
             * @return {File} [File](#WebUploader:File)
             */
            fetch: function( status ) {
                var len = this._queue.length,
                    i, file;
    
                status = status || STATUS.QUEUED;
    
                for ( i = 0; i < len; i++ ) {
                    file = this._queue[ i ];
    
                    if ( status === file.getStatus() ) {
                        return file;
                    }
                }
    
                return null;
            },
    
            /**
             * 对队列进行排序，能够控制文件上传顺序。
             * @grammar sort( fn ) => undefined
             * @method sort
             * @param {Function} fn 排序方法
             */
            sort: function( fn ) {
                if ( typeof fn === 'function' ) {
                    this._queue.sort( fn );
                }
            },
    
            /**
             * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
             * @grammar getFiles( [status1[, status2 ...]] ) => Array
             * @method getFiles
             * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
             */
            getFiles: function() {
                var sts = [].slice.call( arguments, 0 ),
                    ret = [],
                    i = 0,
                    len = this._queue.length,
                    file;
    
                for ( ; i < len; i++ ) {
                    file = this._queue[ i ];
    
                    if ( sts.length && !~$.inArray( file.getStatus(), sts ) ) {
                        continue;
                    }
    
                    ret.push( file );
                }
    
                return ret;
            },
    
            /**
             * 在队列中删除文件。
             * @grammar removeFile( file ) => Array
             * @method removeFile
             * @param {File} 文件对象。
             */
            removeFile: function( file ) {
                var me = this,
                    existing = this._map[ file.id ];
    
                if ( existing ) {
                    delete this._map[ file.id ];
                    file.destroy();
                    this.stats.numofDeleted++;
                }
            },
    
            _fileAdded: function( file ) {
                var me = this,
                    existing = this._map[ file.id ];
    
                if ( !existing ) {
                    this._map[ file.id ] = file;
    
                    file.on( 'statuschange', function( cur, pre ) {
                        me._onFileStatusChange( cur, pre );
                    });
                }
            },
    
            _onFileStatusChange: function( curStatus, preStatus ) {
                var stats = this.stats;
    
                switch ( preStatus ) {
                    case STATUS.PROGRESS:
                        stats.numOfProgress--;
                        break;
    
                    case STATUS.QUEUED:
                        stats.numOfQueue --;
                        break;
    
                    case STATUS.ERROR:
                        stats.numOfUploadFailed--;
                        break;
    
                    case STATUS.INVALID:
                        stats.numOfInvalid--;
                        break;
    
                    case STATUS.INTERRUPT:
                        stats.numofInterrupt--;
                        break;
                }
    
                switch ( curStatus ) {
                    case STATUS.QUEUED:
                        stats.numOfQueue++;
                        break;
    
                    case STATUS.PROGRESS:
                        stats.numOfProgress++;
                        break;
    
                    case STATUS.ERROR:
                        stats.numOfUploadFailed++;
                        break;
    
                    case STATUS.COMPLETE:
                        stats.numOfSuccess++;
                        break;
    
                    case STATUS.CANCELLED:
                        stats.numOfCancel++;
                        break;
    
    
                    case STATUS.INVALID:
                        stats.numOfInvalid++;
                        break;
    
                    case STATUS.INTERRUPT:
                        stats.numofInterrupt++;
                        break;
                }
            }
    
        });
    
        Mediator.installTo( Queue.prototype );
    
        return Queue;
    });
    /**
     * @fileOverview 队列
     */
    define('widgets/queue',[
        'base',
        'uploader',
        'queue',
        'file',
        'lib/file',
        'runtime/client',
        'widgets/widget'
    ], function( Base, Uploader, Queue, WUFile, File, RuntimeClient ) {
    
        var $ = Base.$,
            rExt = /\.\w+$/,
            Status = WUFile.Status;
    
        return Uploader.register({
            name: 'queue',
    
            init: function( opts ) {
                var me = this,
                    deferred, len, i, item, arr, accept, runtime;
    
                if ( $.isPlainObject( opts.accept ) ) {
                    opts.accept = [ opts.accept ];
                }
    
                // accept中的中生成匹配正则。
                if ( opts.accept ) {
                    arr = [];
    
                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
                        item = opts.accept[ i ].extensions;
                        item && arr.push( item );
                    }
    
                    if ( arr.length ) {
                        accept = '\\.' + arr.join(',')
                                .replace( /,/g, '$|\\.' )
                                .replace( /\*/g, '.*' ) + '$';
                    }
    
                    me.accept = new RegExp( accept, 'i' );
                }
    
                me.queue = new Queue();
                me.stats = me.queue.stats;
    
                // 如果当前不是html5运行时，那就算了。
                // 不执行后续操作
                if ( this.request('predict-runtime-type') !== 'html5' ) {
                    return;
                }
    
                // 创建一个 html5 运行时的 placeholder
                // 以至于外部添加原生 File 对象的时候能正确包裹一下供 webuploader 使用。
                deferred = Base.Deferred();
                this.placeholder = runtime = new RuntimeClient('Placeholder');
                runtime.connectRuntime({
                    runtimeOrder: 'html5'
                }, function() {
                    me._ruid = runtime.getRuid();
                    deferred.resolve();
                });
                return deferred.promise();
            },
    
    
            // 为了支持外部直接添加一个原生File对象。
            _wrapFile: function( file ) {
                if ( !(file instanceof WUFile) ) {
    
                    if ( !(file instanceof File) ) {
                        if ( !this._ruid ) {
                            throw new Error('Can\'t add external files.');
                        }
                        file = new File( this._ruid, file );
                    }
    
                    file = new WUFile( file );
                }
    
                return file;
            },
    
            // 判断文件是否可以被加入队列
            acceptFile: function( file ) {
                var invalid = !file || !file.size || this.accept &&
    
                        // 如果名字中有后缀，才做后缀白名单处理。
                        rExt.exec( file.name ) && !this.accept.test( file.name );
    
                return !invalid;
            },
    
    
            /**
             * @event beforeFileQueued
             * @param {File} file File对象
             * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
             * @for  Uploader
             */
    
            /**
             * @event fileQueued
             * @param {File} file File对象
             * @description 当文件被加入队列以后触发。
             * @for  Uploader
             */
    
            _addFile: function( file ) {
                var me = this;
    
                file = me._wrapFile( file );
    
                // 不过类型判断允许不允许，先派送 `beforeFileQueued`
                if ( !me.owner.trigger( 'beforeFileQueued', file ) ) {
                    return;
                }
    
                // 类型不匹配，则派送错误事件，并返回。
                if ( !me.acceptFile( file ) ) {
                    me.owner.trigger( 'error', 'Q_TYPE_DENIED', file );
                    return;
                }
    
                me.queue.append( file );
                me.owner.trigger( 'fileQueued', file );
                return file;
            },
    
            getFile: function( fileId ) {
                return this.queue.getFile( fileId );
            },
    
            /**
             * @event filesQueued
             * @param {File} files 数组，内容为原始File(lib/File）对象。
             * @description 当一批文件添加进队列以后触发。
             * @for  Uploader
             */
            
            /**
             * @property {Boolean} [auto=false]
             * @namespace options
             * @for Uploader
             * @description 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
             * 
             */
    
            /**
             * @method addFiles
             * @grammar addFiles( file ) => undefined
             * @grammar addFiles( [file1, file2 ...] ) => undefined
             * @param {Array of File or File} [files] Files 对象 数组
             * @description 添加文件到队列
             * @for  Uploader
             */
            addFile: function( files ) {
                var me = this;
    
                if ( !files.length ) {
                    files = [ files ];
                }
    
                files = $.map( files, function( file ) {
                    return me._addFile( file );
                });
    
                me.owner.trigger( 'filesQueued', files );
    
                if ( me.options.auto ) {
                    setTimeout(function() {
                        me.request('start-upload');
                    }, 20 );
                }
            },
    
            getStats: function() {
                return this.stats;
            },
    
            /**
             * @event fileDequeued
             * @param {File} file File对象
             * @description 当文件被移除队列后触发。
             * @for  Uploader
             */
    
             /**
             * @method removeFile
             * @grammar removeFile( file ) => undefined
             * @grammar removeFile( id ) => undefined
             * @grammar removeFile( file, true ) => undefined
             * @grammar removeFile( id, true ) => undefined
             * @param {File|id} file File对象或这File对象的id
             * @description 移除某一文件, 默认只会标记文件状态为已取消，如果第二个参数为 `true` 则会从 queue 中移除。
             * @for  Uploader
             * @example
             *
             * $li.on('click', '.remove-this', function() {
             *     uploader.removeFile( file );
             * })
             */
            removeFile: function( file, remove ) {
                var me = this;
    
                file = file.id ? file : me.queue.getFile( file );
    
                this.request( 'cancel-file', file );
    
                if ( remove ) {
                    this.queue.removeFile( file );
                }
            },
    
            /**
             * @method getFiles
             * @grammar getFiles() => Array
             * @grammar getFiles( status1, status2, status... ) => Array
             * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
             * @for  Uploader
             * @example
             * console.log( uploader.getFiles() );    // => all files
             * console.log( uploader.getFiles('error') )    // => all error files.
             */
            getFiles: function() {
                return this.queue.getFiles.apply( this.queue, arguments );
            },
    
            fetchFile: function() {
                return this.queue.fetch.apply( this.queue, arguments );
            },
    
            /**
             * @method retry
             * @grammar retry() => undefined
             * @grammar retry( file ) => undefined
             * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
             * @for  Uploader
             * @example
             * function retry() {
             *     uploader.retry();
             * }
             */
            retry: function( file, noForceStart ) {
                var me = this,
                    files, i, len;
    
                if ( file ) {
                    file = file.id ? file : me.queue.getFile( file );
                    file.setStatus( Status.QUEUED );
                    noForceStart || me.request('start-upload');
                    return;
                }
    
                files = me.queue.getFiles( Status.ERROR );
                i = 0;
                len = files.length;
    
                for ( ; i < len; i++ ) {
                    file = files[ i ];
                    file.setStatus( Status.QUEUED );
                }
    
                me.request('start-upload');
            },
    
            /**
             * @method sort
             * @grammar sort( fn ) => undefined
             * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
             * @for  Uploader
             */
            sortFiles: function() {
                return this.queue.sort.apply( this.queue, arguments );
            },
    
            /**
             * @event reset
             * @description 当 uploader 被重置的时候触发。
             * @for  Uploader
             */
    
            /**
             * @method reset
             * @grammar reset() => undefined
             * @description 重置uploader。目前只重置了队列。
             * @for  Uploader
             * @example
             * uploader.reset();
             */
            reset: function() {
                this.owner.trigger('reset');
                this.queue = new Queue();
                this.stats = this.queue.stats;
            },
    
            destroy: function() {
                this.reset();
                this.placeholder && this.placeholder.destroy();
            }
        });
    
    });
    /**
     * @fileOverview 添加获取Runtime相关信息的方法。
     */
    define('widgets/runtime',[
        'uploader',
        'runtime/runtime',
        'widgets/widget'
    ], function( Uploader, Runtime ) {
    
        Uploader.support = function() {
            return Runtime.hasRuntime.apply( Runtime, arguments );
        };
    
        /**
         * @property {Object} [runtimeOrder=html5,flash]
         * @namespace options
         * @for Uploader
         * @description 指定运行时启动顺序。默认会想尝试 html5 是否支持，如果支持则使用 html5, 否则则使用 flash.
         *
         * 可以将此值设置成 `flash`，来强制使用 flash 运行时。
         */
    
        return Uploader.register({
            name: 'runtime',
    
            init: function() {
                if ( !this.predictRuntimeType() ) {
                    throw Error('Runtime Error');
                }
            },
    
            /**
             * 预测Uploader将采用哪个`Runtime`
             * @grammar predictRuntimeType() => String
             * @method predictRuntimeType
             * @for  Uploader
             */
            predictRuntimeType: function() {
                var orders = this.options.runtimeOrder || Runtime.orders,
                    type = this.type,
                    i, len;
    
                if ( !type ) {
                    orders = orders.split( /\s*,\s*/g );
    
                    for ( i = 0, len = orders.length; i < len; i++ ) {
                        if ( Runtime.hasRuntime( orders[ i ] ) ) {
                            this.type = type = orders[ i ];
                            break;
                        }
                    }
                }
    
                return type;
            }
        });
    });
    /**
     * @fileOverview Transport
     */
    define('lib/transport',[
        'base',
        'runtime/client',
        'mediator'
    ], function( Base, RuntimeClient, Mediator ) {
    
        var $ = Base.$;
    
        function Transport( opts ) {
            var me = this;
    
            opts = me.options = $.extend( true, {}, Transport.options, opts || {} );
            RuntimeClient.call( this, 'Transport' );
    
            this._blob = null;
            this._formData = opts.formData || {};
            this._headers = opts.headers || {};
    
            this.on( 'progress', this._timeout );
            this.on( 'load error', function() {
                me.trigger( 'progress', 1 );
                clearTimeout( me._timer );
            });
        }
    
        Transport.options = {
            server: '',
            method: 'POST',
    
            // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
            withCredentials: false,
            fileVal: 'file',
            timeout: 2 * 60 * 1000,    // 2分钟
            formData: {},
            headers: {},
            sendAsBinary: false
        };
    
        $.extend( Transport.prototype, {
    
            // 添加Blob, 只能添加一次，最后一次有效。
            appendBlob: function( key, blob, filename ) {
                var me = this,
                    opts = me.options;
    
                if ( me.getRuid() ) {
                    me.disconnectRuntime();
                }
    
                // 连接到blob归属的同一个runtime.
                me.connectRuntime( blob.ruid, function() {
                    me.exec('init');
                });
    
                me._blob = blob;
                opts.fileVal = key || opts.fileVal;
                opts.filename = filename || opts.filename;
            },
    
            // 添加其他字段
            append: function( key, value ) {
                if ( typeof key === 'object' ) {
                    $.extend( this._formData, key );
                } else {
                    this._formData[ key ] = value;
                }
            },
    
            setRequestHeader: function( key, value ) {
                if ( typeof key === 'object' ) {
                    $.extend( this._headers, key );
                } else {
                    this._headers[ key ] = value;
                }
            },
    
            send: function( method ) {
                this.exec( 'send', method );
                this._timeout();
            },
    
            abort: function() {
                clearTimeout( this._timer );
                return this.exec('abort');
            },
    
            destroy: function() {
                this.trigger('destroy');
                this.off();
                this.exec('destroy');
                this.disconnectRuntime();
            },
    
            getResponse: function() {
                return this.exec('getResponse');
            },
    
            getResponseAsJson: function() {
                return this.exec('getResponseAsJson');
            },
    
            getStatus: function() {
                return this.exec('getStatus');
            },
    
            _timeout: function() {
                var me = this,
                    duration = me.options.timeout;
    
                if ( !duration ) {
                    return;
                }
    
                clearTimeout( me._timer );
                me._timer = setTimeout(function() {
                    me.abort();
                    me.trigger( 'error', 'timeout' );
                }, duration );
            }
    
        });
    
        // 让Transport具备事件功能。
        Mediator.installTo( Transport.prototype );
    
        return Transport;
    });
    /**
     * @fileOverview 负责文件上传相关。
     */
    define('widgets/upload',[
        'base',
        'uploader',
        'file',
        'lib/transport',
        'widgets/widget'
    ], function( Base, Uploader, WUFile, Transport ) {
    
        var $ = Base.$,
            isPromise = Base.isPromise,
            Status = WUFile.Status;
    
        // 添加默认配置项
        $.extend( Uploader.options, {
    
    
            /**
             * @property {Boolean} [prepareNextFile=false]
             * @namespace options
             * @for Uploader
             * @description 是否允许在文件传输时提前把下一个文件准备好。
             * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
             * 如果能提前在当前文件传输期处理，可以节省总体耗时。
             */
            prepareNextFile: false,
    
            /**
             * @property {Boolean} [chunked=false]
             * @namespace options
             * @for Uploader
             * @description 是否要分片处理大文件上传。
             */
            chunked: false,
    
            /**
             * @property {Boolean} [chunkSize=5242880]
             * @namespace options
             * @for Uploader
             * @description 如果要分片，分多大一片？ 默认大小为5M.
             */
            chunkSize: 5 * 1024 * 1024,
    
            /**
             * @property {Boolean} [chunkRetry=2]
             * @namespace options
             * @for Uploader
             * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
             */
            chunkRetry: 2,
    
            /**
             * @property {Boolean} [threads=3]
             * @namespace options
             * @for Uploader
             * @description 上传并发数。允许同时最大上传进程数。
             */
            threads: 3,
    
    
            /**
             * @property {Object} [formData={}]
             * @namespace options
             * @for Uploader
             * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
             */
            formData: {}
    
            /**
             * @property {Object} [fileVal='file']
             * @namespace options
             * @for Uploader
             * @description 设置文件上传域的name。
             */
    
            /**
             * @property {Object} [method='POST']
             * @namespace options
             * @for Uploader
             * @description 文件上传方式，`POST`或者`GET`。
             */
    
            /**
             * @property {Object} [sendAsBinary=false]
             * @namespace options
             * @for Uploader
             * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
             * 其他参数在$_GET数组中。
             */
        });
    
        // 负责将文件切片。
        function CuteFile( file, chunkSize ) {
            var pending = [],
                blob = file.source,
                total = blob.size,
                chunks = chunkSize ? Math.ceil( total / chunkSize ) : 1,
                start = 0,
                index = 0,
                len, api;
    
            api = {
                file: file,
    
                has: function() {
                    return !!pending.length;
                },
    
                shift: function() {
                    return pending.shift();
                },
    
                unshift: function( block ) {
                    pending.unshift( block );
                }
            };
    
            while ( index < chunks ) {
                len = Math.min( chunkSize, total - start );
    
                pending.push({
                    file: file,
                    start: start,
                    end: chunkSize ? (start + len) : total,
                    total: total,
                    chunks: chunks,
                    chunk: index++,
                    cuted: api
                });
                start += len;
            }
    
            file.blocks = pending.concat();
            file.remaning = pending.length;
    
            return api;
        }
    
        Uploader.register({
            name: 'upload',
    
            init: function() {
                var owner = this.owner,
                    me = this;
    
                this.runing = false;
                this.progress = false;
    
                owner
                    .on( 'startUpload', function() {
                        me.progress = true;
                    })
                    .on( 'uploadFinished', function() {
                        me.progress = false;
                    });
    
                // 记录当前正在传的数据，跟threads相关
                this.pool = [];
    
                // 缓存分好片的文件。
                this.stack = [];
    
                // 缓存即将上传的文件。
                this.pending = [];
    
                // 跟踪还有多少分片在上传中但是没有完成上传。
                this.remaning = 0;
                this.__tick = Base.bindFn( this._tick, this );
    
                owner.on( 'uploadComplete', function( file ) {
    
                    // 把其他块取消了。
                    file.blocks && $.each( file.blocks, function( _, v ) {
                        v.transport && (v.transport.abort(), v.transport.destroy());
                        delete v.transport;
                    });
    
                    delete file.blocks;
                    delete file.remaning;
                });
            },
    
            reset: function() {
                this.request( 'stop-upload', true );
                this.runing = false;
                this.pool = [];
                this.stack = [];
                this.pending = [];
                this.remaning = 0;
                this._trigged = false;
                this._promise = null;
            },
    
            /**
             * @event startUpload
             * @description 当开始上传流程时触发。
             * @for  Uploader
             */
    
            /**
             * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
             *
             * 可以指定开始某一个文件。
             * @grammar upload() => undefined
             * @grammar upload( file | fileId) => undefined
             * @method upload
             * @for  Uploader
             */
            startUpload: function(file) {
                var me = this;
    
                // 移出invalid的文件
                $.each( me.request( 'get-files', Status.INVALID ), function() {
                    me.request( 'remove-file', this );
                });
    
                // 如果指定了开始某个文件，则只开始指定文件。
                if ( file ) {
                    file = file.id ? file : me.request( 'get-file', file );
    
                    if (file.getStatus() === Status.INTERRUPT) {
                        $.each( me.pool, function( _, v ) {
    
                            // 之前暂停过。
                            if (v.file !== file) {
                                return;
                            }
    
                            v.transport && v.transport.send();
                        });
    
                        file.setStatus( Status.QUEUED );
                    } else if (file.getStatus() === Status.PROGRESS) {
                        return;
                    } else {
                        file.setStatus( Status.QUEUED );
                    }
                } else {
                    $.each( me.request( 'get-files', [ Status.INITED ] ), function() {
                        this.setStatus( Status.QUEUED );
                    });
                }
    
                if ( me.runing ) {
                    return;
                }
    
                me.runing = true;
    
                var files = [];
    
                // 如果有暂停的，则续传
                $.each( me.pool, function( _, v ) {
                    var file = v.file;
    
                    if ( file.getStatus() === Status.INTERRUPT ) {
                        files.push(file);
                        me._trigged = false;
                        v.transport && v.transport.send();
                    }
                });
    
                var file;
                while ( (file = files.shift()) ) {
                    file.setStatus( Status.PROGRESS );
                }
    
                file || $.each( me.request( 'get-files',
                        Status.INTERRUPT ), function() {
                    this.setStatus( Status.PROGRESS );
                });
    
                me._trigged = false;
                Base.nextTick( me.__tick );
                me.owner.trigger('startUpload');
            },
    
            /**
             * @event stopUpload
             * @description 当开始上传流程暂停时触发。
             * @for  Uploader
             */
    
            /**
             * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
             *
             * 如果第一个参数是文件，则只暂停指定文件。
             * @grammar stop() => undefined
             * @grammar stop( true ) => undefined
             * @grammar stop( file ) => undefined
             * @method stop
             * @for  Uploader
             */
            stopUpload: function( file, interrupt ) {
                var me = this;
    
                if (file === true) {
                    interrupt = file;
                    file = null;
                }
    
                if ( me.runing === false ) {
                    return;
                }
    
                // 如果只是暂停某个文件。
                if ( file ) {
                    file = file.id ? file : me.request( 'get-file', file );
    
                    if ( file.getStatus() !== Status.PROGRESS &&
                            file.getStatus() !== Status.QUEUED ) {
                        return;
                    }
    
                    file.setStatus( Status.INTERRUPT );
                    $.each( me.pool, function( _, v ) {
    
                        // 只 abort 指定的文件。
                        if (v.file !== file) {
                            return;
                        }
    
                        v.transport && v.transport.abort();
                        me._putback(v);
                        me._popBlock(v);
                    });
    
                    return Base.nextTick( me.__tick );
                }
    
                me.runing = false;
    
                if (this._promise && this._promise.file) {
                    this._promise.file.setStatus( Status.INTERRUPT );
                }
    
                interrupt && $.each( me.pool, function( _, v ) {
                    v.transport && v.transport.abort();
                    v.file.setStatus( Status.INTERRUPT );
                });
    
                me.owner.trigger('stopUpload');
            },
    
            /**
             * @method cancelFile
             * @grammar cancelFile( file ) => undefined
             * @grammar cancelFile( id ) => undefined
             * @param {File|id} file File对象或这File对象的id
             * @description 标记文件状态为已取消, 同时将中断文件传输。
             * @for  Uploader
             * @example
             *
             * $li.on('click', '.remove-this', function() {
             *     uploader.cancelFile( file );
             * })
             */
            cancelFile: function( file ) {
                file = file.id ? file : this.request( 'get-file', file );
    
                // 如果正在上传。
                file.blocks && $.each( file.blocks, function( _, v ) {
                    var _tr = v.transport;
    
                    if ( _tr ) {
                        _tr.abort();
                        _tr.destroy();
                        delete v.transport;
                    }
                });
    
                file.setStatus( Status.CANCELLED );
                this.owner.trigger( 'fileDequeued', file );
            },
    
            /**
             * 判断`Uplaode`r是否正在上传中。
             * @grammar isInProgress() => Boolean
             * @method isInProgress
             * @for  Uploader
             */
            isInProgress: function() {
                return !!this.progress;
            },
    
            _getStats: function() {
                return this.request('get-stats');
            },
    
            /**
             * 掉过一个文件上传，直接标记指定文件为已上传状态。
             * @grammar skipFile( file ) => undefined
             * @method skipFile
             * @for  Uploader
             */
            skipFile: function( file, status ) {
                file = file.id ? file : this.request( 'get-file', file );
    
                file.setStatus( status || Status.COMPLETE );
                file.skipped = true;
    
                // 如果正在上传。
                file.blocks && $.each( file.blocks, function( _, v ) {
                    var _tr = v.transport;
    
                    if ( _tr ) {
                        _tr.abort();
                        _tr.destroy();
                        delete v.transport;
                    }
                });
    
                this.owner.trigger( 'uploadSkip', file );
            },
    
            /**
             * @event uploadFinished
             * @description 当所有文件上传结束时触发。
             * @for  Uploader
             */
            _tick: function() {
                var me = this,
                    opts = me.options,
                    fn, val;
    
                // 上一个promise还没有结束，则等待完成后再执行。
                if ( me._promise ) {
                    return me._promise.always( me.__tick );
                }
    
                // 还有位置，且还有文件要处理的话。
                if ( me.pool.length < opts.threads && (val = me._nextBlock()) ) {
                    me._trigged = false;
    
                    fn = function( val ) {
                        me._promise = null;
    
                        // 有可能是reject过来的，所以要检测val的类型。
                        val && val.file && me._startSend( val );
                        Base.nextTick( me.__tick );
                    };
    
                    me._promise = isPromise( val ) ? val.always( fn ) : fn( val );
    
                // 没有要上传的了，且没有正在传输的了。
                } else if ( !me.remaning && !me._getStats().numOfQueue &&
                    !me._getStats().numofInterrupt ) {
                    me.runing = false;
    
                    me._trigged || Base.nextTick(function() {
                        me.owner.trigger('uploadFinished');
                    });
                    me._trigged = true;
                }
            },
    
            _putback: function(block) {
                var idx;
    
                block.cuted.unshift(block);
                idx = this.stack.indexOf(block.cuted);
    
                if (!~idx) {
                    this.stack.unshift(block.cuted);
                }
            },
    
            _getStack: function() {
                var i = 0,
                    act;
    
                while ( (act = this.stack[ i++ ]) ) {
                    if ( act.has() && act.file.getStatus() === Status.PROGRESS ) {
                        return act;
                    } else if (!act.has() ||
                            act.file.getStatus() !== Status.PROGRESS &&
                            act.file.getStatus() !== Status.INTERRUPT ) {
    
                        // 把已经处理完了的，或者，状态为非 progress（上传中）、
                        // interupt（暂停中） 的移除。
                        this.stack.splice( --i, 1 );
                    }
                }
    
                return null;
            },
    
            _nextBlock: function() {
                var me = this,
                    opts = me.options,
                    act, next, done, preparing;
    
                // 如果当前文件还有没有需要传输的，则直接返回剩下的。
                if ( (act = this._getStack()) ) {
    
                    // 是否提前准备下一个文件
                    if ( opts.prepareNextFile && !me.pending.length ) {
                        me._prepareNextFile();
                    }
    
                    return act.shift();
    
                // 否则，如果正在运行，则准备下一个文件，并等待完成后返回下个分片。
                } else if ( me.runing ) {
    
                    // 如果缓存中有，则直接在缓存中取，没有则去queue中取。
                    if ( !me.pending.length && me._getStats().numOfQueue ) {
                        me._prepareNextFile();
                    }
    
                    next = me.pending.shift();
                    done = function( file ) {
                        if ( !file ) {
                            return null;
                        }
    
                        act = CuteFile( file, opts.chunked ? opts.chunkSize : 0 );
                        me.stack.push(act);
                        return act.shift();
                    };
    
                    // 文件可能还在prepare中，也有可能已经完全准备好了。
                    if ( isPromise( next) ) {
                        preparing = next.file;
                        next = next[ next.pipe ? 'pipe' : 'then' ]( done );
                        next.file = preparing;
                        return next;
                    }
    
                    return done( next );
                }
            },
    
    
            /**
             * @event uploadStart
             * @param {File} file File对象
             * @description 某个文件开始上传前触发，一个文件只会触发一次。
             * @for  Uploader
             */
            _prepareNextFile: function() {
                var me = this,
                    file = me.request('fetch-file'),
                    pending = me.pending,
                    promise;
    
                if ( file ) {
                    promise = me.request( 'before-send-file', file, function() {
    
                        // 有可能文件被skip掉了。文件被skip掉后，状态坑定不是Queued.
                        if ( file.getStatus() === Status.PROGRESS ||
                            file.getStatus() === Status.INTERRUPT ) {
                            return file;
                        }
    
                        return me._finishFile( file );
                    });
    
                    me.owner.trigger( 'uploadStart', file );
                    file.setStatus( Status.PROGRESS );
    
                    promise.file = file;
    
                    // 如果还在pending中，则替换成文件本身。
                    promise.done(function() {
                        var idx = $.inArray( promise, pending );
    
                        ~idx && pending.splice( idx, 1, file );
                    });
    
                    // befeore-send-file的钩子就有错误发生。
                    promise.fail(function( reason ) {
                        file.setStatus( Status.ERROR, reason );
                        me.owner.trigger( 'uploadError', file, reason );
                        me.owner.trigger( 'uploadComplete', file );
                    });
    
                    pending.push( promise );
                }
            },
    
            // 让出位置了，可以让其他分片开始上传
            _popBlock: function( block ) {
                var idx = $.inArray( block, this.pool );
    
                this.pool.splice( idx, 1 );
                block.file.remaning--;
                this.remaning--;
            },
    
            // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
            _startSend: function( block ) {
                var me = this,
                    file = block.file,
                    promise;
    
                // 有可能在 before-send-file 的 promise 期间改变了文件状态。
                // 如：暂停，取消
                // 我们不能中断 promise, 但是可以在 promise 完后，不做上传操作。
                if ( file.getStatus() !== Status.PROGRESS ) {
    
                    // 如果是中断，则还需要放回去。
                    if (file.getStatus() === Status.INTERRUPT) {
                        me._putback(block);
                    }
    
                    return;
                }
    
                me.pool.push( block );
                me.remaning++;
    
                // 如果没有分片，则直接使用原始的。
                // 不会丢失content-type信息。
                block.blob = block.chunks === 1 ? file.source :
                        file.source.slice( block.start, block.end );
    
                // hook, 每个分片发送之前可能要做些异步的事情。
                promise = me.request( 'before-send', block, function() {
    
                    // 有可能文件已经上传出错了，所以不需要再传输了。
                    if ( file.getStatus() === Status.PROGRESS ) {
                        me._doSend( block );
                    } else {
                        me._popBlock( block );
                        Base.nextTick( me.__tick );
                    }
                });
    
                // 如果为fail了，则跳过此分片。
                promise.fail(function() {
                    if ( file.remaning === 1 ) {
                        me._finishFile( file ).always(function() {
                            block.percentage = 1;
                            me._popBlock( block );
                            me.owner.trigger( 'uploadComplete', file );
                            Base.nextTick( me.__tick );
                        });
                    } else {
                        block.percentage = 1;
                        me.updateFileProgress( file );
                        me._popBlock( block );
                        Base.nextTick( me.__tick );
                    }
                });
            },
    
    
            /**
             * @event uploadBeforeSend
             * @param {Object} object
             * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
             * @param {Object} headers 可以扩展此对象来控制上传头部。
             * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
             * @for  Uploader
             */
    
            /**
             * @event uploadAccept
             * @param {Object} object
             * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
             * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
             * @for  Uploader
             */
    
            /**
             * @event uploadProgress
             * @param {File} file File对象
             * @param {Number} percentage 上传进度
             * @description 上传过程中触发，携带上传进度。
             * @for  Uploader
             */
    
    
            /**
             * @event uploadError
             * @param {File} file File对象
             * @param {String} reason 出错的code
             * @description 当文件上传出错时触发。
             * @for  Uploader
             */
    
            /**
             * @event uploadSuccess
             * @param {File} file File对象
             * @param {Object} response 服务端返回的数据
             * @description 当文件上传成功时触发。
             * @for  Uploader
             */
    
            /**
             * @event uploadComplete
             * @param {File} [file] File对象
             * @description 不管成功或者失败，文件上传完成时触发。
             * @for  Uploader
             */
    
            // 做上传操作。
            _doSend: function( block ) {
                var me = this,
                    owner = me.owner,
                    opts = me.options,
                    file = block.file,
                    tr = new Transport( opts ),
                    data = $.extend({}, opts.formData ),
                    headers = $.extend({}, opts.headers ),
                    requestAccept, ret;
    
                block.transport = tr;
    
                tr.on( 'destroy', function() {
                    delete block.transport;
                    me._popBlock( block );
                    Base.nextTick( me.__tick );
                });
    
                // 广播上传进度。以文件为单位。
                tr.on( 'progress', function( percentage ) {
                    block.percentage = percentage;
                    me.updateFileProgress( file );
                });
    
                // 用来询问，是否返回的结果是有错误的。
                requestAccept = function( reject ) {
                    var fn;
    
                    ret = tr.getResponseAsJson() || {};
                    ret._raw = tr.getResponse();
                    fn = function( value ) {
                        reject = value;
                    };
    
                    // 服务端响应了，不代表成功了，询问是否响应正确。
                    if ( !owner.trigger( 'uploadAccept', block, ret, fn ) ) {
                        reject = reject || 'server';
                    }
    
                    return reject;
                };
    
                // 尝试重试，然后广播文件上传出错。
                tr.on( 'error', function( type, flag ) {
                    block.retried = block.retried || 0;
    
                    // 自动重试
                    if ( block.chunks > 1 && ~'http,abort'.indexOf( type ) &&
                            block.retried < opts.chunkRetry ) {
    
                        block.retried++;
                        tr.send();
    
                    } else {
    
                        // http status 500 ~ 600
                        if ( !flag && type === 'server' ) {
                            type = requestAccept( type );
                        }
    
                        file.setStatus( Status.ERROR, type );
                        owner.trigger( 'uploadError', file, type );
                        owner.trigger( 'uploadComplete', file );
                    }
                });
    
                // 上传成功
                tr.on( 'load', function() {
                    var reason;
    
                    // 如果非预期，转向上传出错。
                    if ( (reason = requestAccept()) ) {
                        tr.trigger( 'error', reason, true );
                        return;
                    }
    
                    // 全部上传完成。
                    if ( file.remaning === 1 ) {
                        me._finishFile( file, ret );
                    } else {
                        tr.destroy();
                    }
                });
    
                // 配置默认的上传字段。
                data = $.extend( data, {
                    id: file.id,
                    name: file.name,
                    type: file.type,
                    lastModifiedDate: file.lastModifiedDate,
                    size: file.size
                });
    
                block.chunks > 1 && $.extend( data, {
                    chunks: block.chunks,
                    chunk: block.chunk
                });
    
                // 在发送之间可以添加字段什么的。。。
                // 如果默认的字段不够使用，可以通过监听此事件来扩展
                owner.trigger( 'uploadBeforeSend', block, data, headers );
    
                // 开始发送。
                tr.appendBlob( opts.fileVal, block.blob, file.name );
                tr.append( data );
                tr.setRequestHeader( headers );
                tr.send();
            },
    
            // 完成上传。
            _finishFile: function( file, ret, hds ) {
                var owner = this.owner;
    
                return owner
                        .request( 'after-send-file', arguments, function() {
                            file.setStatus( Status.COMPLETE );
                            owner.trigger( 'uploadSuccess', file, ret, hds );
                        })
                        .fail(function( reason ) {
    
                            // 如果外部已经标记为invalid什么的，不再改状态。
                            if ( file.getStatus() === Status.PROGRESS ) {
                                file.setStatus( Status.ERROR, reason );
                            }
    
                            owner.trigger( 'uploadError', file, reason );
                        })
                        .always(function() {
                            owner.trigger( 'uploadComplete', file );
                        });
            },
    
            updateFileProgress: function(file) {
                var totalPercent = 0,
                    uploaded = 0;
    
                if (!file.blocks) {
                    return;
                }
    
                $.each( file.blocks, function( _, v ) {
                    uploaded += (v.percentage || 0) * (v.end - v.start);
                });
    
                totalPercent = uploaded / file.size;
                this.owner.trigger( 'uploadProgress', file, totalPercent || 0 );
            }
    
        });
    });
    /**
     * @fileOverview 各种验证，包括文件总大小是否超出、单文件是否超出和文件是否重复。
     */
    
    define('widgets/validator',[
        'base',
        'uploader',
        'file',
        'widgets/widget'
    ], function( Base, Uploader, WUFile ) {
    
        var $ = Base.$,
            validators = {},
            api;
    
        /**
         * @event error
         * @param {String} type 错误类型。
         * @description 当validate不通过时，会以派送错误事件的形式通知调用者。通过`upload.on('error', handler)`可以捕获到此类错误，目前有以下错误会在特定的情况下派送错来。
         *
         * * `Q_EXCEED_NUM_LIMIT` 在设置了`fileNumLimit`且尝试给`uploader`添加的文件数量超出这个值时派送。
         * * `Q_EXCEED_SIZE_LIMIT` 在设置了`Q_EXCEED_SIZE_LIMIT`且尝试给`uploader`添加的文件总大小超出这个值时派送。
         * * `Q_TYPE_DENIED` 当文件类型不满足时触发。。
         * @for  Uploader
         */
    
        // 暴露给外面的api
        api = {
    
            // 添加验证器
            addValidator: function( type, cb ) {
                validators[ type ] = cb;
            },
    
            // 移除验证器
            removeValidator: function( type ) {
                delete validators[ type ];
            }
        };
    
        // 在Uploader初始化的时候启动Validators的初始化
        Uploader.register({
            name: 'validator',
    
            init: function() {
                var me = this;
                Base.nextTick(function() {
                    $.each( validators, function() {
                        this.call( me.owner );
                    });
                });
            }
        });
    
        /**
         * @property {int} [fileNumLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证文件总数量, 超出则不允许加入队列。
         */
        api.addValidator( 'fileNumLimit', function() {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = parseInt( opts.fileNumLimit, 10 ),
                flag = true;
    
            if ( !max ) {
                return;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
    
                if ( count >= max && flag ) {
                    flag = false;
                    this.trigger( 'error', 'Q_EXCEED_NUM_LIMIT', max, file );
                    setTimeout(function() {
                        flag = true;
                    }, 1 );
                }
    
                return count >= max ? false : true;
            });
    
            uploader.on( 'fileQueued', function() {
                count++;
            });
    
            uploader.on( 'fileDequeued', function() {
                count--;
            });
    
            uploader.on( 'reset', function() {
                count = 0;
            });
        });
    
    
        /**
         * @property {int} [fileSizeLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证文件总大小是否超出限制, 超出则不允许加入队列。
         */
        api.addValidator( 'fileSizeLimit', function() {
            var uploader = this,
                opts = uploader.options,
                count = 0,
                max = parseInt( opts.fileSizeLimit, 10 ),
                flag = true;
    
            if ( !max ) {
                return;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
                var invalid = count + file.size > max;
    
                if ( invalid && flag ) {
                    flag = false;
                    this.trigger( 'error', 'Q_EXCEED_SIZE_LIMIT', max, file );
                    setTimeout(function() {
                        flag = true;
                    }, 1 );
                }
    
                return invalid ? false : true;
            });
    
            uploader.on( 'fileQueued', function( file ) {
                count += file.size;
            });
    
            uploader.on( 'fileDequeued', function( file ) {
                count -= file.size;
            });
    
            uploader.on( 'reset', function() {
                count = 0;
            });
        });
    
        /**
         * @property {int} [fileSingleSizeLimit=undefined]
         * @namespace options
         * @for Uploader
         * @description 验证单个文件大小是否超出限制, 超出则不允许加入队列。
         */
        api.addValidator( 'fileSingleSizeLimit', function() {
            var uploader = this,
                opts = uploader.options,
                max = opts.fileSingleSizeLimit;
    
            if ( !max ) {
                return;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
    
                if ( file.size > max ) {
                    file.setStatus( WUFile.Status.INVALID, 'exceed_size' );
                    this.trigger( 'error', 'F_EXCEED_SIZE', max, file );
                    return false;
                }
    
            });
    
        });
    
        /**
         * @property {Boolean} [duplicate=undefined]
         * @namespace options
         * @for Uploader
         * @description 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.
         */
        api.addValidator( 'duplicate', function() {
            var uploader = this,
                opts = uploader.options,
                mapping = {};
    
            if ( opts.duplicate ) {
                return;
            }
    
            function hashString( str ) {
                var hash = 0,
                    i = 0,
                    len = str.length,
                    _char;
    
                for ( ; i < len; i++ ) {
                    _char = str.charCodeAt( i );
                    hash = _char + (hash << 6) + (hash << 16) - hash;
                }
    
                return hash;
            }
    
            uploader.on( 'beforeFileQueued', function( file ) {
                var hash = file.__hash || (file.__hash = hashString( file.name +
                        file.size + file.lastModifiedDate ));
    
                // 已经重复了
                if ( mapping[ hash ] ) {
                    this.trigger( 'error', 'F_DUPLICATE', file );
                    return false;
                }
            });
    
            uploader.on( 'fileQueued', function( file ) {
                var hash = file.__hash;
    
                hash && (mapping[ hash ] = true);
            });
    
            uploader.on( 'fileDequeued', function( file ) {
                var hash = file.__hash;
    
                hash && (delete mapping[ hash ]);
            });
    
            uploader.on( 'reset', function() {
                mapping = {};
            });
        });
    
        return api;
    });
    
    /**
     * @fileOverview Md5
     */
    define('lib/md5',[
        'runtime/client',
        'mediator'
    ], function( RuntimeClient, Mediator ) {
    
        function Md5() {
            RuntimeClient.call( this, 'Md5' );
        }
    
        // 让 Md5 具备事件功能。
        Mediator.installTo( Md5.prototype );
    
        Md5.prototype.loadFromBlob = function( blob ) {
            var me = this;
    
            if ( me.getRuid() ) {
                me.disconnectRuntime();
            }
    
            // 连接到blob归属的同一个runtime.
            me.connectRuntime( blob.ruid, function() {
                me.exec('init');
                me.exec( 'loadFromBlob', blob );
            });
        };
    
        Md5.prototype.getResult = function() {
            return this.exec('getResult');
        };
    
        return Md5;
    });
    /**
     * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
     */
    define('widgets/md5',[
        'base',
        'uploader',
        'lib/md5',
        'lib/blob',
        'widgets/widget'
    ], function( Base, Uploader, Md5, Blob ) {
    
        return Uploader.register({
            name: 'md5',
    
    
            /**
             * 计算文件 md5 值，返回一个 promise 对象，可以监听 progress 进度。
             *
             *
             * @method md5File
             * @grammar md5File( file[, start[, end]] ) => promise
             * @for Uploader
             * @example
             *
             * uploader.on( 'fileQueued', function( file ) {
             *     var $li = ...;
             *
             *     uploader.md5File( file )
             *
             *         // 及时显示进度
             *         .progress(function(percentage) {
             *             console.log('Percentage:', percentage);
             *         })
             *
             *         // 完成
             *         .then(function(val) {
             *             console.log('md5 result:', val);
             *         });
             *
             * });
             */
            md5File: function( file, start, end ) {
                var md5 = new Md5(),
                    deferred = Base.Deferred(),
                    blob = (file instanceof Blob) ? file :
                        this.request( 'get-file', file ).source;
    
                md5.on( 'progress load', function( e ) {
                    e = e || {};
                    deferred.notify( e.total ? e.loaded / e.total : 1 );
                });
    
                md5.on( 'complete', function() {
                    deferred.resolve( md5.getResult() );
                });
    
                md5.on( 'error', function( reason ) {
                    deferred.reject( reason );
                });
    
                if ( arguments.length > 1 ) {
                    start = start || 0;
                    end = end || 0;
                    start < 0 && (start = blob.size + start);
                    end < 0 && (end = blob.size + end);
                    end = Math.min( end, blob.size );
                    blob = blob.slice( start, end );
                }
    
                md5.loadFromBlob( blob );
    
                return deferred.promise();
            }
        });
    });
    /**
     * @fileOverview Runtime管理器，负责Runtime的选择, 连接
     */
    define('runtime/compbase',[],function() {
    
        function CompBase( owner, runtime ) {
    
            this.owner = owner;
            this.options = owner.options;
    
            this.getRuntime = function() {
                return runtime;
            };
    
            this.getRuid = function() {
                return runtime.uid;
            };
    
            this.trigger = function() {
                return owner.trigger.apply( owner, arguments );
            };
        }
    
        return CompBase;
    });
    /**
     * @fileOverview Html5Runtime
     */
    define('runtime/html5/runtime',[
        'base',
        'runtime/runtime',
        'runtime/compbase'
    ], function( Base, Runtime, CompBase ) {
    
        var type = 'html5',
            components = {};
    
        function Html5Runtime() {
            var pool = {},
                me = this,
                destroy = this.destroy;
    
            Runtime.apply( me, arguments );
            me.type = type;
    
    
            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function( comp, fn/*, args...*/) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice( arguments, 2 ),
                    instance;
    
                if ( components[ comp ] ) {
                    instance = pool[ uid ] = pool[ uid ] ||
                            new components[ comp ]( client, me );
    
                    if ( instance[ fn ] ) {
                        return instance[ fn ].apply( instance, args );
                    }
                }
            };
    
            me.destroy = function() {
                // @todo 删除池子中的所有实例
                return destroy && destroy.apply( this, arguments );
            };
        }
    
        Base.inherits( Runtime, {
            constructor: Html5Runtime,
    
            // 不需要连接其他程序，直接执行callback
            init: function() {
                var me = this;
                setTimeout(function() {
                    me.trigger('ready');
                }, 1 );
            }
    
        });
    
        // 注册Components
        Html5Runtime.register = function( name, component ) {
            var klass = components[ name ] = Base.inherits( CompBase, component );
            return klass;
        };
    
        // 注册html5运行时。
        // 只有在支持的前提下注册。
        if ( window.Blob && window.FileReader && window.DataView ) {
            Runtime.addRuntime( type, Html5Runtime );
        }
    
        return Html5Runtime;
    });
    /**
     * @fileOverview Blob Html实现
     */
    define('runtime/html5/blob',[
        'runtime/html5/runtime',
        'lib/blob'
    ], function( Html5Runtime, Blob ) {
    
        return Html5Runtime.register( 'Blob', {
            slice: function( start, end ) {
                var blob = this.owner.source,
                    slice = blob.slice || blob.webkitSlice || blob.mozSlice;
    
                blob = slice.call( blob, start, end );
    
                return new Blob( this.getRuid(), blob );
            }
        });
    });
    /**
     * @fileOverview FilePaste
     */
    define('runtime/html5/dnd',[
        'base',
        'runtime/html5/runtime',
        'lib/file'
    ], function( Base, Html5Runtime, File ) {
    
        var $ = Base.$,
            prefix = 'webuploader-dnd-';
    
        return Html5Runtime.register( 'DragAndDrop', {
            init: function() {
                var elem = this.elem = this.options.container;
    
                this.dragEnterHandler = Base.bindFn( this._dragEnterHandler, this );
                this.dragOverHandler = Base.bindFn( this._dragOverHandler, this );
                this.dragLeaveHandler = Base.bindFn( this._dragLeaveHandler, this );
                this.dropHandler = Base.bindFn( this._dropHandler, this );
                this.dndOver = false;
    
                elem.on( 'dragenter', this.dragEnterHandler );
                elem.on( 'dragover', this.dragOverHandler );
                elem.on( 'dragleave', this.dragLeaveHandler );
                elem.on( 'drop', this.dropHandler );
    
                if ( this.options.disableGlobalDnd ) {
                    $( document ).on( 'dragover', this.dragOverHandler );
                    $( document ).on( 'drop', this.dropHandler );
                }
            },
    
            _dragEnterHandler: function( e ) {
                var me = this,
                    denied = me._denied || false,
                    items;
    
                e = e.originalEvent || e;
    
                if ( !me.dndOver ) {
                    me.dndOver = true;
    
                    // 注意只有 chrome 支持。
                    items = e.dataTransfer.items;
    
                    if ( items && items.length ) {
                        me._denied = denied = !me.trigger( 'accept', items );
                    }
    
                    me.elem.addClass( prefix + 'over' );
                    me.elem[ denied ? 'addClass' :
                            'removeClass' ]( prefix + 'denied' );
                }
    
                e.dataTransfer.dropEffect = denied ? 'none' : 'copy';
    
                return false;
            },
    
            _dragOverHandler: function( e ) {
                // 只处理框内的。
                var parentElem = this.elem.parent().get( 0 );
                if ( parentElem && !$.contains( parentElem, e.currentTarget ) ) {
                    return false;
                }
    
                clearTimeout( this._leaveTimer );
                this._dragEnterHandler.call( this, e );
    
                return false;
            },
    
            _dragLeaveHandler: function() {
                var me = this,
                    handler;
    
                handler = function() {
                    me.dndOver = false;
                    me.elem.removeClass( prefix + 'over ' + prefix + 'denied' );
                };
    
                clearTimeout( me._leaveTimer );
                me._leaveTimer = setTimeout( handler, 100 );
                return false;
            },
    
            _dropHandler: function( e ) {
                var me = this,
                    ruid = me.getRuid(),
                    parentElem = me.elem.parent().get( 0 ),
                    dataTransfer, data;
    
                // 只处理框内的。
                if ( parentElem && !$.contains( parentElem, e.currentTarget ) ) {
                    return false;
                }
    
                e = e.originalEvent || e;
                dataTransfer = e.dataTransfer;
    
                // 如果是页面内拖拽，还不能处理，不阻止事件。
                // 此处 ie11 下会报参数错误，
                try {
                    data = dataTransfer.getData('text/html');
                } catch( err ) {
                }
    
                if ( data ) {
                    return;
                }
    
                me._getTansferFiles( dataTransfer, function( results ) {
                    me.trigger( 'drop', $.map( results, function( file ) {
                        return new File( ruid, file );
                    }) );
                });
    
                me.dndOver = false;
                me.elem.removeClass( prefix + 'over' );
                return false;
            },
    
            // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
            _getTansferFiles: function( dataTransfer, callback ) {
                var results  = [],
                    promises = [],
                    items, files, file, item, i, len, canAccessFolder;
    
                items = dataTransfer.items;
                files = dataTransfer.files;
    
                canAccessFolder = !!(items && items[ 0 ].webkitGetAsEntry);
    
                for ( i = 0, len = files.length; i < len; i++ ) {
                    file = files[ i ];
                    item = items && items[ i ];
    
                    if ( canAccessFolder && item.webkitGetAsEntry().isDirectory ) {
    
                        promises.push( this._traverseDirectoryTree(
                                item.webkitGetAsEntry(), results ) );
                    } else {
                        results.push( file );
                    }
                }
    
                Base.when.apply( Base, promises ).done(function() {
    
                    if ( !results.length ) {
                        return;
                    }
    
                    callback( results );
                });
            },
    
            _traverseDirectoryTree: function( entry, results ) {
                var deferred = Base.Deferred(),
                    me = this;
    
                if ( entry.isFile ) {
                    entry.file(function( file ) {
                        results.push( file );
                        deferred.resolve();
                    });
                } else if ( entry.isDirectory ) {
                    entry.createReader().readEntries(function( entries ) {
                        var len = entries.length,
                            promises = [],
                            arr = [],    // 为了保证顺序。
                            i;
    
                        for ( i = 0; i < len; i++ ) {
                            promises.push( me._traverseDirectoryTree(
                                    entries[ i ], arr ) );
                        }
    
                        Base.when.apply( Base, promises ).then(function() {
                            results.push.apply( results, arr );
                            deferred.resolve();
                        }, deferred.reject );
                    });
                }
    
                return deferred.promise();
            },
    
            destroy: function() {
                var elem = this.elem;
    
                // 还没 init 就调用 destroy
                if (!elem) {
                    return;
                }
                
                elem.off( 'dragenter', this.dragEnterHandler );
                elem.off( 'dragover', this.dragOverHandler );
                elem.off( 'dragleave', this.dragLeaveHandler );
                elem.off( 'drop', this.dropHandler );
    
                if ( this.options.disableGlobalDnd ) {
                    $( document ).off( 'dragover', this.dragOverHandler );
                    $( document ).off( 'drop', this.dropHandler );
                }
            }
        });
    });
    
    /**
     * @fileOverview FilePaste
     */
    define('runtime/html5/filepaste',[
        'base',
        'runtime/html5/runtime',
        'lib/file'
    ], function( Base, Html5Runtime, File ) {
    
        return Html5Runtime.register( 'FilePaste', {
            init: function() {
                var opts = this.options,
                    elem = this.elem = opts.container,
                    accept = '.*',
                    arr, i, len, item;
    
                // accetp的mimeTypes中生成匹配正则。
                if ( opts.accept ) {
                    arr = [];
    
                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
                        item = opts.accept[ i ].mimeTypes;
                        item && arr.push( item );
                    }
    
                    if ( arr.length ) {
                        accept = arr.join(',');
                        accept = accept.replace( /,/g, '|' ).replace( /\*/g, '.*' );
                    }
                }
                this.accept = accept = new RegExp( accept, 'i' );
                this.hander = Base.bindFn( this._pasteHander, this );
                elem.on( 'paste', this.hander );
            },
    
            _pasteHander: function( e ) {
                var allowed = [],
                    ruid = this.getRuid(),
                    items, item, blob, i, len;
    
                e = e.originalEvent || e;
                items = e.clipboardData.items;
    
                for ( i = 0, len = items.length; i < len; i++ ) {
                    item = items[ i ];
    
                    if ( item.kind !== 'file' || !(blob = item.getAsFile()) ) {
                        continue;
                    }
    
                    allowed.push( new File( ruid, blob ) );
                }
    
                if ( allowed.length ) {
                    // 不阻止非文件粘贴（文字粘贴）的事件冒泡
                    e.preventDefault();
                    e.stopPropagation();
                    this.trigger( 'paste', allowed );
                }
            },
    
            destroy: function() {
                this.elem.off( 'paste', this.hander );
            }
        });
    });
    
    /**
     * @fileOverview FilePicker
     */
    define('runtime/html5/filepicker',[
        'base',
        'runtime/html5/runtime'
    ], function( Base, Html5Runtime ) {
    
        var $ = Base.$;
    
        return Html5Runtime.register( 'FilePicker', {
            init: function() {
                var container = this.getRuntime().getContainer(),
                    me = this,
                    owner = me.owner,
                    opts = me.options,
                    label = this.label = $( document.createElement('label') ),
                    input =  this.input = $( document.createElement('input') ),
                    arr, i, len, mouseHandler;
    
                input.attr( 'type', 'file' );
                input.attr( 'name', opts.name );
                input.addClass('webuploader-element-invisible');
    
                label.on( 'click', function() {
                    input.trigger('click');
                });
    
                label.css({
                    opacity: 0,
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    cursor: 'pointer',
                    background: '#ffffff'
                });
    
                if ( opts.multiple ) {
                    input.attr( 'multiple', 'multiple' );
                }
    
                // @todo Firefox不支持单独指定后缀
                if ( opts.accept && opts.accept.length > 0 ) {
                    arr = [];
    
                    for ( i = 0, len = opts.accept.length; i < len; i++ ) {
                        arr.push( opts.accept[ i ].mimeTypes );
                    }
    
                    input.attr( 'accept', arr.join(',') );
                }
    
                container.append( input );
                container.append( label );
    
                mouseHandler = function( e ) {
                    owner.trigger( e.type );
                };
    
                input.on( 'change', function( e ) {
                    var fn = arguments.callee,
                        clone;
    
                    me.files = e.target.files;
    
                    // reset input
                    clone = this.cloneNode( true );
                    clone.value = null;
                    this.parentNode.replaceChild( clone, this );
    
                    input.off();
                    input = $( clone ).on( 'change', fn )
                            .on( 'mouseenter mouseleave', mouseHandler );
    
                    owner.trigger('change');
                });
    
                label.on( 'mouseenter mouseleave', mouseHandler );
    
            },
    
    
            getFiles: function() {
                return this.files;
            },
    
            destroy: function() {
                this.input.off();
                this.label.off();
            }
        });
    });
    /**
     * Terms:
     *
     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
     * @fileOverview Image控件
     */
    define('runtime/html5/util',[
        'base'
    ], function( Base ) {
    
        var urlAPI = window.createObjectURL && window ||
                window.URL && URL.revokeObjectURL && URL ||
                window.webkitURL,
            createObjectURL = Base.noop,
            revokeObjectURL = createObjectURL;
    
        if ( urlAPI ) {
    
            // 更安全的方式调用，比如android里面就能把context改成其他的对象。
            createObjectURL = function() {
                return urlAPI.createObjectURL.apply( urlAPI, arguments );
            };
    
            revokeObjectURL = function() {
                return urlAPI.revokeObjectURL.apply( urlAPI, arguments );
            };
        }
    
        return {
            createObjectURL: createObjectURL,
            revokeObjectURL: revokeObjectURL,
    
            dataURL2Blob: function( dataURI ) {
                var byteStr, intArray, ab, i, mimetype, parts;
    
                parts = dataURI.split(',');
    
                if ( ~parts[ 0 ].indexOf('base64') ) {
                    byteStr = atob( parts[ 1 ] );
                } else {
                    byteStr = decodeURIComponent( parts[ 1 ] );
                }
    
                ab = new ArrayBuffer( byteStr.length );
                intArray = new Uint8Array( ab );
    
                for ( i = 0; i < byteStr.length; i++ ) {
                    intArray[ i ] = byteStr.charCodeAt( i );
                }
    
                mimetype = parts[ 0 ].split(':')[ 1 ].split(';')[ 0 ];
    
                return this.arrayBufferToBlob( ab, mimetype );
            },
    
            dataURL2ArrayBuffer: function( dataURI ) {
                var byteStr, intArray, i, parts;
    
                parts = dataURI.split(',');
    
                if ( ~parts[ 0 ].indexOf('base64') ) {
                    byteStr = atob( parts[ 1 ] );
                } else {
                    byteStr = decodeURIComponent( parts[ 1 ] );
                }
    
                intArray = new Uint8Array( byteStr.length );
    
                for ( i = 0; i < byteStr.length; i++ ) {
                    intArray[ i ] = byteStr.charCodeAt( i );
                }
    
                return intArray.buffer;
            },
    
            arrayBufferToBlob: function( buffer, type ) {
                var builder = window.BlobBuilder || window.WebKitBlobBuilder,
                    bb;
    
                // android不支持直接new Blob, 只能借助blobbuilder.
                if ( builder ) {
                    bb = new builder();
                    bb.append( buffer );
                    return bb.getBlob( type );
                }
    
                return new Blob([ buffer ], type ? { type: type } : {} );
            },
    
            // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
            // 你得到的结果是png.
            canvasToDataUrl: function( canvas, type, quality ) {
                return canvas.toDataURL( type, quality / 100 );
            },
    
            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
            parseMeta: function( blob, callback ) {
                callback( false, {});
            },
    
            // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
            updateImageHead: function( data ) {
                return data;
            }
        };
    });
    /**
     * Terms:
     *
     * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
     * @fileOverview Image控件
     */
    define('runtime/html5/imagemeta',[
        'runtime/html5/util'
    ], function( Util ) {
    
        var api;
    
        api = {
            parsers: {
                0xffe1: []
            },
    
            maxMetaDataSize: 262144,
    
            parse: function( blob, cb ) {
                var me = this,
                    fr = new FileReader();
    
                fr.onload = function() {
                    cb( false, me._parse( this.result ) );
                    fr = fr.onload = fr.onerror = null;
                };
    
                fr.onerror = function( e ) {
                    cb( e.message );
                    fr = fr.onload = fr.onerror = null;
                };
    
                blob = blob.slice( 0, me.maxMetaDataSize );
                fr.readAsArrayBuffer( blob.getSource() );
            },
    
            _parse: function( buffer, noParse ) {
                if ( buffer.byteLength < 6 ) {
                    return;
                }
    
                var dataview = new DataView( buffer ),
                    offset = 2,
                    maxOffset = dataview.byteLength - 4,
                    headLength = offset,
                    ret = {},
                    markerBytes, markerLength, parsers, i;
    
                if ( dataview.getUint16( 0 ) === 0xffd8 ) {
    
                    while ( offset < maxOffset ) {
                        markerBytes = dataview.getUint16( offset );
    
                        if ( markerBytes >= 0xffe0 && markerBytes <= 0xffef ||
                                markerBytes === 0xfffe ) {
    
                            markerLength = dataview.getUint16( offset + 2 ) + 2;
    
                            if ( offset + markerLength > dataview.byteLength ) {
                                break;
                            }
    
                            parsers = api.parsers[ markerBytes ];
    
                            if ( !noParse && parsers ) {
                                for ( i = 0; i < parsers.length; i += 1 ) {
                                    parsers[ i ].call( api, dataview, offset,
                                            markerLength, ret );
                                }
                            }
    
                            offset += markerLength;
                            headLength = offset;
                        } else {
                            break;
                        }
                    }
    
                    if ( headLength > 6 ) {
                        if ( buffer.slice ) {
                            ret.imageHead = buffer.slice( 2, headLength );
                        } else {
                            // Workaround for IE10, which does not yet
                            // support ArrayBuffer.slice:
                            ret.imageHead = new Uint8Array( buffer )
                                    .subarray( 2, headLength );
                        }
                    }
                }
    
                return ret;
            },
    
            updateImageHead: function( buffer, head ) {
                var data = this._parse( buffer, true ),
                    buf1, buf2, bodyoffset;
    
    
                bodyoffset = 2;
                if ( data.imageHead ) {
                    bodyoffset = 2 + data.imageHead.byteLength;
                }
    
                if ( buffer.slice ) {
                    buf2 = buffer.slice( bodyoffset );
                } else {
                    buf2 = new Uint8Array( buffer ).subarray( bodyoffset );
                }
    
                buf1 = new Uint8Array( head.byteLength + 2 + buf2.byteLength );
    
                buf1[ 0 ] = 0xFF;
                buf1[ 1 ] = 0xD8;
                buf1.set( new Uint8Array( head ), 2 );
                buf1.set( new Uint8Array( buf2 ), head.byteLength + 2 );
    
                return buf1.buffer;
            }
        };
    
        Util.parseMeta = function() {
            return api.parse.apply( api, arguments );
        };
    
        Util.updateImageHead = function() {
            return api.updateImageHead.apply( api, arguments );
        };
    
        return api;
    });
    /**
     * 代码来自于：https://github.com/blueimp/JavaScript-Load-Image
     * 暂时项目中只用了orientation.
     *
     * 去除了 Exif Sub IFD Pointer, GPS Info IFD Pointer, Exif Thumbnail.
     * @fileOverview EXIF解析
     */
    
    // Sample
    // ====================================
    // Make : Apple
    // Model : iPhone 4S
    // Orientation : 1
    // XResolution : 72 [72/1]
    // YResolution : 72 [72/1]
    // ResolutionUnit : 2
    // Software : QuickTime 7.7.1
    // DateTime : 2013:09:01 22:53:55
    // ExifIFDPointer : 190
    // ExposureTime : 0.058823529411764705 [1/17]
    // FNumber : 2.4 [12/5]
    // ExposureProgram : Normal program
    // ISOSpeedRatings : 800
    // ExifVersion : 0220
    // DateTimeOriginal : 2013:09:01 22:52:51
    // DateTimeDigitized : 2013:09:01 22:52:51
    // ComponentsConfiguration : YCbCr
    // ShutterSpeedValue : 4.058893515764426
    // ApertureValue : 2.5260688216892597 [4845/1918]
    // BrightnessValue : -0.3126686601998395
    // MeteringMode : Pattern
    // Flash : Flash did not fire, compulsory flash mode
    // FocalLength : 4.28 [107/25]
    // SubjectArea : [4 values]
    // FlashpixVersion : 0100
    // ColorSpace : 1
    // PixelXDimension : 2448
    // PixelYDimension : 3264
    // SensingMethod : One-chip color area sensor
    // ExposureMode : 0
    // WhiteBalance : Auto white balance
    // FocalLengthIn35mmFilm : 35
    // SceneCaptureType : Standard
    define('runtime/html5/imagemeta/exif',[
        'base',
        'runtime/html5/imagemeta'
    ], function( Base, ImageMeta ) {
    
        var EXIF = {};
    
        EXIF.ExifMap = function() {
            return this;
        };
    
        EXIF.ExifMap.prototype.map = {
            'Orientation': 0x0112
        };
    
        EXIF.ExifMap.prototype.get = function( id ) {
            return this[ id ] || this[ this.map[ id ] ];
        };
    
        EXIF.exifTagTypes = {
            // byte, 8-bit unsigned int:
            1: {
                getValue: function( dataView, dataOffset ) {
                    return dataView.getUint8( dataOffset );
                },
                size: 1
            },
    
            // ascii, 8-bit byte:
            2: {
                getValue: function( dataView, dataOffset ) {
                    return String.fromCharCode( dataView.getUint8( dataOffset ) );
                },
                size: 1,
                ascii: true
            },
    
            // short, 16 bit int:
            3: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getUint16( dataOffset, littleEndian );
                },
                size: 2
            },
    
            // long, 32 bit int:
            4: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getUint32( dataOffset, littleEndian );
                },
                size: 4
            },
    
            // rational = two long values,
            // first is numerator, second is denominator:
            5: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getUint32( dataOffset, littleEndian ) /
                        dataView.getUint32( dataOffset + 4, littleEndian );
                },
                size: 8
            },
    
            // slong, 32 bit signed int:
            9: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getInt32( dataOffset, littleEndian );
                },
                size: 4
            },
    
            // srational, two slongs, first is numerator, second is denominator:
            10: {
                getValue: function( dataView, dataOffset, littleEndian ) {
                    return dataView.getInt32( dataOffset, littleEndian ) /
                        dataView.getInt32( dataOffset + 4, littleEndian );
                },
                size: 8
            }
        };
    
        // undefined, 8-bit byte, value depending on field:
        EXIF.exifTagTypes[ 7 ] = EXIF.exifTagTypes[ 1 ];
    
        EXIF.getExifValue = function( dataView, tiffOffset, offset, type, length,
                littleEndian ) {
    
            var tagType = EXIF.exifTagTypes[ type ],
                tagSize, dataOffset, values, i, str, c;
    
            if ( !tagType ) {
                Base.log('Invalid Exif data: Invalid tag type.');
                return;
            }
    
            tagSize = tagType.size * length;
    
            // Determine if the value is contained in the dataOffset bytes,
            // or if the value at the dataOffset is a pointer to the actual data:
            dataOffset = tagSize > 4 ? tiffOffset + dataView.getUint32( offset + 8,
                    littleEndian ) : (offset + 8);
    
            if ( dataOffset + tagSize > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid data offset.');
                return;
            }
    
            if ( length === 1 ) {
                return tagType.getValue( dataView, dataOffset, littleEndian );
            }
    
            values = [];
    
            for ( i = 0; i < length; i += 1 ) {
                values[ i ] = tagType.getValue( dataView,
                        dataOffset + i * tagType.size, littleEndian );
            }
    
            if ( tagType.ascii ) {
                str = '';
    
                // Concatenate the chars:
                for ( i = 0; i < values.length; i += 1 ) {
                    c = values[ i ];
    
                    // Ignore the terminating NULL byte(s):
                    if ( c === '\u0000' ) {
                        break;
                    }
                    str += c;
                }
    
                return str;
            }
            return values;
        };
    
        EXIF.parseExifTag = function( dataView, tiffOffset, offset, littleEndian,
                data ) {
    
            var tag = dataView.getUint16( offset, littleEndian );
            data.exif[ tag ] = EXIF.getExifValue( dataView, tiffOffset, offset,
                    dataView.getUint16( offset + 2, littleEndian ),    // tag type
                    dataView.getUint32( offset + 4, littleEndian ),    // tag length
                    littleEndian );
        };
    
        EXIF.parseExifTags = function( dataView, tiffOffset, dirOffset,
                littleEndian, data ) {
    
            var tagsNumber, dirEndOffset, i;
    
            if ( dirOffset + 6 > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid directory offset.');
                return;
            }
    
            tagsNumber = dataView.getUint16( dirOffset, littleEndian );
            dirEndOffset = dirOffset + 2 + 12 * tagsNumber;
    
            if ( dirEndOffset + 4 > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid directory size.');
                return;
            }
    
            for ( i = 0; i < tagsNumber; i += 1 ) {
                this.parseExifTag( dataView, tiffOffset,
                        dirOffset + 2 + 12 * i,    // tag offset
                        littleEndian, data );
            }
    
            // Return the offset to the next directory:
            return dataView.getUint32( dirEndOffset, littleEndian );
        };
    
        // EXIF.getExifThumbnail = function(dataView, offset, length) {
        //     var hexData,
        //         i,
        //         b;
        //     if (!length || offset + length > dataView.byteLength) {
        //         Base.log('Invalid Exif data: Invalid thumbnail data.');
        //         return;
        //     }
        //     hexData = [];
        //     for (i = 0; i < length; i += 1) {
        //         b = dataView.getUint8(offset + i);
        //         hexData.push((b < 16 ? '0' : '') + b.toString(16));
        //     }
        //     return 'data:image/jpeg,%' + hexData.join('%');
        // };
    
        EXIF.parseExifData = function( dataView, offset, length, data ) {
    
            var tiffOffset = offset + 10,
                littleEndian, dirOffset;
    
            // Check for the ASCII code for "Exif" (0x45786966):
            if ( dataView.getUint32( offset + 4 ) !== 0x45786966 ) {
                // No Exif data, might be XMP data instead
                return;
            }
            if ( tiffOffset + 8 > dataView.byteLength ) {
                Base.log('Invalid Exif data: Invalid segment size.');
                return;
            }
    
            // Check for the two null bytes:
            if ( dataView.getUint16( offset + 8 ) !== 0x0000 ) {
                Base.log('Invalid Exif data: Missing byte alignment offset.');
                return;
            }
    
            // Check the byte alignment:
            switch ( dataView.getUint16( tiffOffset ) ) {
                case 0x4949:
                    littleEndian = true;
                    break;
    
                case 0x4D4D:
                    littleEndian = false;
                    break;
    
                default:
                    Base.log('Invalid Exif data: Invalid byte alignment marker.');
                    return;
            }
    
            // Check for the TIFF tag marker (0x002A):
            if ( dataView.getUint16( tiffOffset + 2, littleEndian ) !== 0x002A ) {
                Base.log('Invalid Exif data: Missing TIFF marker.');
                return;
            }
    
            // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:
            dirOffset = dataView.getUint32( tiffOffset + 4, littleEndian );
            // Create the exif object to store the tags:
            data.exif = new EXIF.ExifMap();
            // Parse the tags of the main image directory and retrieve the
            // offset to the next directory, usually the thumbnail directory:
            dirOffset = EXIF.parseExifTags( dataView, tiffOffset,
                    tiffOffset + dirOffset, littleEndian, data );
    
            // 尝试读取缩略图
            // if ( dirOffset ) {
            //     thumbnailData = {exif: {}};
            //     dirOffset = EXIF.parseExifTags(
            //         dataView,
            //         tiffOffset,
            //         tiffOffset + dirOffset,
            //         littleEndian,
            //         thumbnailData
            //     );
    
            //     // Check for JPEG Thumbnail offset:
            //     if (thumbnailData.exif[0x0201]) {
            //         data.exif.Thumbnail = EXIF.getExifThumbnail(
            //             dataView,
            //             tiffOffset + thumbnailData.exif[0x0201],
            //             thumbnailData.exif[0x0202] // Thumbnail data length
            //         );
            //     }
            // }
        };
    
        ImageMeta.parsers[ 0xffe1 ].push( EXIF.parseExifData );
        return EXIF;
    });
    /**
     * 这个方式性能不行，但是可以解决android里面的toDataUrl的bug
     * android里面toDataUrl('image/jpege')得到的结果却是png.
     *
     * 所以这里没辙，只能借助这个工具
     * @fileOverview jpeg encoder
     */
    define('runtime/html5/jpegencoder',[], function( require, exports, module ) {
    
        /*
          Copyright (c) 2008, Adobe Systems Incorporated
          All rights reserved.
    
          Redistribution and use in source and binary forms, with or without
          modification, are permitted provided that the following conditions are
          met:
    
          * Redistributions of source code must retain the above copyright notice,
            this list of conditions and the following disclaimer.
    
          * Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the
            documentation and/or other materials provided with the distribution.
    
          * Neither the name of Adobe Systems Incorporated nor the names of its
            contributors may be used to endorse or promote products derived from
            this software without specific prior written permission.
    
          THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
          IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
          THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
          PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
          CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
          EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
          PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
          PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
          LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
          NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
          SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        */
        /*
        JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
    
        Basic GUI blocking jpeg encoder
        */
    
        function JPEGEncoder(quality) {
          var self = this;
            var fround = Math.round;
            var ffloor = Math.floor;
            var YTable = new Array(64);
            var UVTable = new Array(64);
            var fdtbl_Y = new Array(64);
            var fdtbl_UV = new Array(64);
            var YDC_HT;
            var UVDC_HT;
            var YAC_HT;
            var UVAC_HT;
    
            var bitcode = new Array(65535);
            var category = new Array(65535);
            var outputfDCTQuant = new Array(64);
            var DU = new Array(64);
            var byteout = [];
            var bytenew = 0;
            var bytepos = 7;
    
            var YDU = new Array(64);
            var UDU = new Array(64);
            var VDU = new Array(64);
            var clt = new Array(256);
            var RGB_YUV_TABLE = new Array(2048);
            var currentQuality;
    
            var ZigZag = [
                     0, 1, 5, 6,14,15,27,28,
                     2, 4, 7,13,16,26,29,42,
                     3, 8,12,17,25,30,41,43,
                     9,11,18,24,31,40,44,53,
                    10,19,23,32,39,45,52,54,
                    20,22,33,38,46,51,55,60,
                    21,34,37,47,50,56,59,61,
                    35,36,48,49,57,58,62,63
                ];
    
            var std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
            var std_dc_luminance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
            var std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];
            var std_ac_luminance_values = [
                    0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,
                    0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,
                    0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,
                    0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,
                    0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,
                    0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,
                    0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,
                    0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,
                    0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,
                    0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,
                    0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,
                    0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,
                    0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,
                    0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,
                    0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,
                    0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,
                    0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,
                    0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,
                    0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,
                    0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
                    0xf9,0xfa
                ];
    
            var std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
            var std_dc_chrominance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
            var std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,0x77];
            var std_ac_chrominance_values = [
                    0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21,
                    0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71,
                    0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91,
                    0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0,
                    0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,
                    0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26,
                    0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38,
                    0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,
                    0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,
                    0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,
                    0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,
                    0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87,
                    0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,
                    0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,
                    0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,
                    0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,
                    0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,
                    0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,
                    0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,
                    0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
                    0xf9,0xfa
                ];
    
            function initQuantTables(sf){
                    var YQT = [
                        16, 11, 10, 16, 24, 40, 51, 61,
                        12, 12, 14, 19, 26, 58, 60, 55,
                        14, 13, 16, 24, 40, 57, 69, 56,
                        14, 17, 22, 29, 51, 87, 80, 62,
                        18, 22, 37, 56, 68,109,103, 77,
                        24, 35, 55, 64, 81,104,113, 92,
                        49, 64, 78, 87,103,121,120,101,
                        72, 92, 95, 98,112,100,103, 99
                    ];
    
                    for (var i = 0; i < 64; i++) {
                        var t = ffloor((YQT[i]*sf+50)/100);
                        if (t < 1) {
                            t = 1;
                        } else if (t > 255) {
                            t = 255;
                        }
                        YTable[ZigZag[i]] = t;
                    }
                    var UVQT = [
                        17, 18, 24, 47, 99, 99, 99, 99,
                        18, 21, 26, 66, 99, 99, 99, 99,
                        24, 26, 56, 99, 99, 99, 99, 99,
                        47, 66, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99,
                        99, 99, 99, 99, 99, 99, 99, 99
                    ];
                    for (var j = 0; j < 64; j++) {
                        var u = ffloor((UVQT[j]*sf+50)/100);
                        if (u < 1) {
                            u = 1;
                        } else if (u > 255) {
                            u = 255;
                        }
                        UVTable[ZigZag[j]] = u;
                    }
                    var aasf = [
                        1.0, 1.387039845, 1.306562965, 1.175875602,
                        1.0, 0.785694958, 0.541196100, 0.275899379
                    ];
                    var k = 0;
                    for (var row = 0; row < 8; row++)
                    {
                        for (var col = 0; col < 8; col++)
                        {
                            fdtbl_Y[k]  = (1.0 / (YTable [ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                            fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                            k++;
                        }
                    }
                }
    
                function computeHuffmanTbl(nrcodes, std_table){
                    var codevalue = 0;
                    var pos_in_table = 0;
                    var HT = new Array();
                    for (var k = 1; k <= 16; k++) {
                        for (var j = 1; j <= nrcodes[k]; j++) {
                            HT[std_table[pos_in_table]] = [];
                            HT[std_table[pos_in_table]][0] = codevalue;
                            HT[std_table[pos_in_table]][1] = k;
                            pos_in_table++;
                            codevalue++;
                        }
                        codevalue*=2;
                    }
                    return HT;
                }
    
                function initHuffmanTbl()
                {
                    YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes,std_dc_luminance_values);
                    UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes,std_dc_chrominance_values);
                    YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes,std_ac_luminance_values);
                    UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes,std_ac_chrominance_values);
                }
    
                function initCategoryNumber()
                {
                    var nrlower = 1;
                    var nrupper = 2;
                    for (var cat = 1; cat <= 15; cat++) {
                        //Positive numbers
                        for (var nr = nrlower; nr<nrupper; nr++) {
                            category[32767+nr] = cat;
                            bitcode[32767+nr] = [];
                            bitcode[32767+nr][1] = cat;
                            bitcode[32767+nr][0] = nr;
                        }
                        //Negative numbers
                        for (var nrneg =-(nrupper-1); nrneg<=-nrlower; nrneg++) {
                            category[32767+nrneg] = cat;
                            bitcode[32767+nrneg] = [];
                            bitcode[32767+nrneg][1] = cat;
                            bitcode[32767+nrneg][0] = nrupper-1+nrneg;
                        }
                        nrlower <<= 1;
                        nrupper <<= 1;
                    }
                }
    
                function initRGBYUVTable() {
                    for(var i = 0; i < 256;i++) {
                        RGB_YUV_TABLE[i]            =  19595 * i;
                        RGB_YUV_TABLE[(i+ 256)>>0]  =  38470 * i;
                        RGB_YUV_TABLE[(i+ 512)>>0]  =   7471 * i + 0x8000;
                        RGB_YUV_TABLE[(i+ 768)>>0]  = -11059 * i;
                        RGB_YUV_TABLE[(i+1024)>>0]  = -21709 * i;
                        RGB_YUV_TABLE[(i+1280)>>0]  =  32768 * i + 0x807FFF;
                        RGB_YUV_TABLE[(i+1536)>>0]  = -27439 * i;
                        RGB_YUV_TABLE[(i+1792)>>0]  = - 5329 * i;
                    }
                }
    
                // IO functions
                function writeBits(bs)
                {
                    var value = bs[0];
                    var posval = bs[1]-1;
                    while ( posval >= 0 ) {
                        if (value & (1 << posval) ) {
                            bytenew |= (1 << bytepos);
                        }
                        posval--;
                        bytepos--;
                        if (bytepos < 0) {
                            if (bytenew == 0xFF) {
                                writeByte(0xFF);
                                writeByte(0);
                            }
                            else {
                                writeByte(bytenew);
                            }
                            bytepos=7;
                            bytenew=0;
                        }
                    }
                }
    
                function writeByte(value)
                {
                    byteout.push(clt[value]); // write char directly instead of converting later
                }
    
                function writeWord(value)
                {
                    writeByte((value>>8)&0xFF);
                    writeByte((value   )&0xFF);
                }
    
                // DCT & quantization core
                function fDCTQuant(data, fdtbl)
                {
                    var d0, d1, d2, d3, d4, d5, d6, d7;
                    /* Pass 1: process rows. */
                    var dataOff=0;
                    var i;
                    var I8 = 8;
                    var I64 = 64;
                    for (i=0; i<I8; ++i)
                    {
                        d0 = data[dataOff];
                        d1 = data[dataOff+1];
                        d2 = data[dataOff+2];
                        d3 = data[dataOff+3];
                        d4 = data[dataOff+4];
                        d5 = data[dataOff+5];
                        d6 = data[dataOff+6];
                        d7 = data[dataOff+7];
    
                        var tmp0 = d0 + d7;
                        var tmp7 = d0 - d7;
                        var tmp1 = d1 + d6;
                        var tmp6 = d1 - d6;
                        var tmp2 = d2 + d5;
                        var tmp5 = d2 - d5;
                        var tmp3 = d3 + d4;
                        var tmp4 = d3 - d4;
    
                        /* Even part */
                        var tmp10 = tmp0 + tmp3;    /* phase 2 */
                        var tmp13 = tmp0 - tmp3;
                        var tmp11 = tmp1 + tmp2;
                        var tmp12 = tmp1 - tmp2;
    
                        data[dataOff] = tmp10 + tmp11; /* phase 3 */
                        data[dataOff+4] = tmp10 - tmp11;
    
                        var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
                        data[dataOff+2] = tmp13 + z1; /* phase 5 */
                        data[dataOff+6] = tmp13 - z1;
    
                        /* Odd part */
                        tmp10 = tmp4 + tmp5; /* phase 2 */
                        tmp11 = tmp5 + tmp6;
                        tmp12 = tmp6 + tmp7;
    
                        /* The rotator is modified from fig 4-8 to avoid extra negations. */
                        var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
                        var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
                        var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
                        var z3 = tmp11 * 0.707106781; /* c4 */
    
                        var z11 = tmp7 + z3;    /* phase 5 */
                        var z13 = tmp7 - z3;
    
                        data[dataOff+5] = z13 + z2; /* phase 6 */
                        data[dataOff+3] = z13 - z2;
                        data[dataOff+1] = z11 + z4;
                        data[dataOff+7] = z11 - z4;
    
                        dataOff += 8; /* advance pointer to next row */
                    }
    
                    /* Pass 2: process columns. */
                    dataOff = 0;
                    for (i=0; i<I8; ++i)
                    {
                        d0 = data[dataOff];
                        d1 = data[dataOff + 8];
                        d2 = data[dataOff + 16];
                        d3 = data[dataOff + 24];
                        d4 = data[dataOff + 32];
                        d5 = data[dataOff + 40];
                        d6 = data[dataOff + 48];
                        d7 = data[dataOff + 56];
    
                        var tmp0p2 = d0 + d7;
                        var tmp7p2 = d0 - d7;
                        var tmp1p2 = d1 + d6;
                        var tmp6p2 = d1 - d6;
                        var tmp2p2 = d2 + d5;
                        var tmp5p2 = d2 - d5;
                        var tmp3p2 = d3 + d4;
                        var tmp4p2 = d3 - d4;
    
                        /* Even part */
                        var tmp10p2 = tmp0p2 + tmp3p2;  /* phase 2 */
                        var tmp13p2 = tmp0p2 - tmp3p2;
                        var tmp11p2 = tmp1p2 + tmp2p2;
                        var tmp12p2 = tmp1p2 - tmp2p2;
    
                        data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
                        data[dataOff+32] = tmp10p2 - tmp11p2;
    
                        var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
                        data[dataOff+16] = tmp13p2 + z1p2; /* phase 5 */
                        data[dataOff+48] = tmp13p2 - z1p2;
    
                        /* Odd part */
                        tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
                        tmp11p2 = tmp5p2 + tmp6p2;
                        tmp12p2 = tmp6p2 + tmp7p2;
    
                        /* The rotator is modified from fig 4-8 to avoid extra negations. */
                        var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
                        var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
                        var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
                        var z3p2 = tmp11p2 * 0.707106781; /* c4 */
    
                        var z11p2 = tmp7p2 + z3p2;  /* phase 5 */
                        var z13p2 = tmp7p2 - z3p2;
    
                        data[dataOff+40] = z13p2 + z2p2; /* phase 6 */
                        data[dataOff+24] = z13p2 - z2p2;
                        data[dataOff+ 8] = z11p2 + z4p2;
                        data[dataOff+56] = z11p2 - z4p2;
    
                        dataOff++; /* advance pointer to next column */
                    }
    
                    // Quantize/descale the coefficients
                    var fDCTQuant;
                    for (i=0; i<I64; ++i)
                    {
                        // Apply the quantization and scaling factor & Round to nearest integer
                        fDCTQuant = data[i]*fdtbl[i];
                        outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5)|0) : ((fDCTQuant - 0.5)|0);
                        //outputfDCTQuant[i] = fround(fDCTQuant);
    
                    }
                    return outputfDCTQuant;
                }
    
                function writeAPP0()
                {
                    writeWord(0xFFE0); // marker
                    writeWord(16); // length
                    writeByte(0x4A); // J
                    writeByte(0x46); // F
                    writeByte(0x49); // I
                    writeByte(0x46); // F
                    writeByte(0); // = "JFIF",'\0'
                    writeByte(1); // versionhi
                    writeByte(1); // versionlo
                    writeByte(0); // xyunits
                    writeWord(1); // xdensity
                    writeWord(1); // ydensity
                    writeByte(0); // thumbnwidth
                    writeByte(0); // thumbnheight
                }
    
                function writeSOF0(width, height)
                {
                    writeWord(0xFFC0); // marker
                    writeWord(17);   // length, truecolor YUV JPG
                    writeByte(8);    // precision
                    writeWord(height);
                    writeWord(width);
                    writeByte(3);    // nrofcomponents
                    writeByte(1);    // IdY
                    writeByte(0x11); // HVY
                    writeByte(0);    // QTY
                    writeByte(2);    // IdU
                    writeByte(0x11); // HVU
                    writeByte(1);    // QTU
                    writeByte(3);    // IdV
                    writeByte(0x11); // HVV
                    writeByte(1);    // QTV
                }
    
                function writeDQT()
                {
                    writeWord(0xFFDB); // marker
                    writeWord(132);    // length
                    writeByte(0);
                    for (var i=0; i<64; i++) {
                        writeByte(YTable[i]);
                    }
                    writeByte(1);
                    for (var j=0; j<64; j++) {
                        writeByte(UVTable[j]);
                    }
                }
    
                function writeDHT()
                {
                    writeWord(0xFFC4); // marker
                    writeWord(0x01A2); // length
    
                    writeByte(0); // HTYDCinfo
                    for (var i=0; i<16; i++) {
                        writeByte(std_dc_luminance_nrcodes[i+1]);
                    }
                    for (var j=0; j<=11; j++) {
                        writeByte(std_dc_luminance_values[j]);
                    }
    
                    writeByte(0x10); // HTYACinfo
                    for (var k=0; k<16; k++) {
                        writeByte(std_ac_luminance_nrcodes[k+1]);
                    }
                    for (var l=0; l<=161; l++) {
                        writeByte(std_ac_luminance_values[l]);
                    }
    
                    writeByte(1); // HTUDCinfo
                    for (var m=0; m<16; m++) {
                        writeByte(std_dc_chrominance_nrcodes[m+1]);
                    }
                    for (var n=0; n<=11; n++) {
                        writeByte(std_dc_chrominance_values[n]);
                    }
    
                    writeByte(0x11); // HTUACinfo
                    for (var o=0; o<16; o++) {
                        writeByte(std_ac_chrominance_nrcodes[o+1]);
                    }
                    for (var p=0; p<=161; p++) {
                        writeByte(std_ac_chrominance_values[p]);
                    }
                }
    
                function writeSOS()
                {
                    writeWord(0xFFDA); // marker
                    writeWord(12); // length
                    writeByte(3); // nrofcomponents
                    writeByte(1); // IdY
                    writeByte(0); // HTY
                    writeByte(2); // IdU
                    writeByte(0x11); // HTU
                    writeByte(3); // IdV
                    writeByte(0x11); // HTV
                    writeByte(0); // Ss
                    writeByte(0x3f); // Se
                    writeByte(0); // Bf
                }
    
                function processDU(CDU, fdtbl, DC, HTDC, HTAC){
                    var EOB = HTAC[0x00];
                    var M16zeroes = HTAC[0xF0];
                    var pos;
                    var I16 = 16;
                    var I63 = 63;
                    var I64 = 64;
                    var DU_DCT = fDCTQuant(CDU, fdtbl);
                    //ZigZag reorder
                    for (var j=0;j<I64;++j) {
                        DU[ZigZag[j]]=DU_DCT[j];
                    }
                    var Diff = DU[0] - DC; DC = DU[0];
                    //Encode DC
                    if (Diff==0) {
                        writeBits(HTDC[0]); // Diff might be 0
                    } else {
                        pos = 32767+Diff;
                        writeBits(HTDC[category[pos]]);
                        writeBits(bitcode[pos]);
                    }
                    //Encode ACs
                    var end0pos = 63; // was const... which is crazy
                    for (; (end0pos>0)&&(DU[end0pos]==0); end0pos--) {};
                    //end0pos = first element in reverse order !=0
                    if ( end0pos == 0) {
                        writeBits(EOB);
                        return DC;
                    }
                    var i = 1;
                    var lng;
                    while ( i <= end0pos ) {
                        var startpos = i;
                        for (; (DU[i]==0) && (i<=end0pos); ++i) {}
                        var nrzeroes = i-startpos;
                        if ( nrzeroes >= I16 ) {
                            lng = nrzeroes>>4;
                            for (var nrmarker=1; nrmarker <= lng; ++nrmarker)
                                writeBits(M16zeroes);
                            nrzeroes = nrzeroes&0xF;
                        }
                        pos = 32767+DU[i];
                        writeBits(HTAC[(nrzeroes<<4)+category[pos]]);
                        writeBits(bitcode[pos]);
                        i++;
                    }
                    if ( end0pos != I63 ) {
                        writeBits(EOB);
                    }
                    return DC;
                }
    
                function initCharLookupTable(){
                    var sfcc = String.fromCharCode;
                    for(var i=0; i < 256; i++){ ///// ACHTUNG // 255
                        clt[i] = sfcc(i);
                    }
                }
    
                this.encode = function(image,quality) // image data object
                {
                    // var time_start = new Date().getTime();
    
                    if(quality) setQuality(quality);
    
                    // Initialize bit writer
                    byteout = new Array();
                    bytenew=0;
                    bytepos=7;
    
                    // Add JPEG headers
                    writeWord(0xFFD8); // SOI
                    writeAPP0();
                    writeDQT();
                    writeSOF0(image.width,image.height);
                    writeDHT();
                    writeSOS();
    
    
                    // Encode 8x8 macroblocks
                    var DCY=0;
                    var DCU=0;
                    var DCV=0;
    
                    bytenew=0;
                    bytepos=7;
    
    
                    this.encode.displayName = "_encode_";
    
                    var imageData = image.data;
                    var width = image.width;
                    var height = image.height;
    
                    var quadWidth = width*4;
                    var tripleWidth = width*3;
    
                    var x, y = 0;
                    var r, g, b;
                    var start,p, col,row,pos;
                    while(y < height){
                        x = 0;
                        while(x < quadWidth){
                        start = quadWidth * y + x;
                        p = start;
                        col = -1;
                        row = 0;
    
                        for(pos=0; pos < 64; pos++){
                            row = pos >> 3;// /8
                            col = ( pos & 7 ) * 4; // %8
                            p = start + ( row * quadWidth ) + col;
    
                            if(y+row >= height){ // padding bottom
                                p-= (quadWidth*(y+1+row-height));
                            }
    
                            if(x+col >= quadWidth){ // padding right
                                p-= ((x+col) - quadWidth +4)
                            }
    
                            r = imageData[ p++ ];
                            g = imageData[ p++ ];
                            b = imageData[ p++ ];
    
    
                            /* // calculate YUV values dynamically
                            YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
                            UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
                            VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
                            */
    
                            // use lookup table (slightly faster)
                            YDU[pos] = ((RGB_YUV_TABLE[r]             + RGB_YUV_TABLE[(g +  256)>>0] + RGB_YUV_TABLE[(b +  512)>>0]) >> 16)-128;
                            UDU[pos] = ((RGB_YUV_TABLE[(r +  768)>>0] + RGB_YUV_TABLE[(g + 1024)>>0] + RGB_YUV_TABLE[(b + 1280)>>0]) >> 16)-128;
                            VDU[pos] = ((RGB_YUV_TABLE[(r + 1280)>>0] + RGB_YUV_TABLE[(g + 1536)>>0] + RGB_YUV_TABLE[(b + 1792)>>0]) >> 16)-128;
    
                        }
    
                        DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
                        DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
                        DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
                        x+=32;
                        }
                        y+=8;
                    }
    
    
                    ////////////////////////////////////////////////////////////////
    
                    // Do the bit alignment of the EOI marker
                    if ( bytepos >= 0 ) {
                        var fillbits = [];
                        fillbits[1] = bytepos+1;
                        fillbits[0] = (1<<(bytepos+1))-1;
                        writeBits(fillbits);
                    }
    
                    writeWord(0xFFD9); //EOI
    
                    var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));
    
                    byteout = [];
    
                    // benchmarking
                    // var duration = new Date().getTime() - time_start;
                    // console.log('Encoding time: '+ currentQuality + 'ms');
                    //
    
                    return jpegDataUri
            }
    
            function setQuality(quality){
                if (quality <= 0) {
                    quality = 1;
                }
                if (quality > 100) {
                    quality = 100;
                }
    
                if(currentQuality == quality) return // don't recalc if unchanged
    
                var sf = 0;
                if (quality < 50) {
                    sf = Math.floor(5000 / quality);
                } else {
                    sf = Math.floor(200 - quality*2);
                }
    
                initQuantTables(sf);
                currentQuality = quality;
                // console.log('Quality set to: '+quality +'%');
            }
    
            function init(){
                // var time_start = new Date().getTime();
                if(!quality) quality = 50;
                // Create tables
                initCharLookupTable()
                initHuffmanTbl();
                initCategoryNumber();
                initRGBYUVTable();
    
                setQuality(quality);
                // var duration = new Date().getTime() - time_start;
                // console.log('Initialization '+ duration + 'ms');
            }
    
            init();
    
        };
    
        JPEGEncoder.encode = function( data, quality ) {
            var encoder = new JPEGEncoder( quality );
    
            return encoder.encode( data );
        }
    
        return JPEGEncoder;
    });
    /**
     * @fileOverview Fix android canvas.toDataUrl bug.
     */
    define('runtime/html5/androidpatch',[
        'runtime/html5/util',
        'runtime/html5/jpegencoder',
        'base'
    ], function( Util, encoder, Base ) {
        var origin = Util.canvasToDataUrl,
            supportJpeg;
    
        Util.canvasToDataUrl = function( canvas, type, quality ) {
            var ctx, w, h, fragement, parts;
    
            // 非android手机直接跳过。
            if ( !Base.os.android ) {
                return origin.apply( null, arguments );
            }
    
            // 检测是否canvas支持jpeg导出，根据数据格式来判断。
            // JPEG 前两位分别是：255, 216
            if ( type === 'image/jpeg' && typeof supportJpeg === 'undefined' ) {
                fragement = origin.apply( null, arguments );
    
                parts = fragement.split(',');
    
                if ( ~parts[ 0 ].indexOf('base64') ) {
                    fragement = atob( parts[ 1 ] );
                } else {
                    fragement = decodeURIComponent( parts[ 1 ] );
                }
    
                fragement = fragement.substring( 0, 2 );
    
                supportJpeg = fragement.charCodeAt( 0 ) === 255 &&
                        fragement.charCodeAt( 1 ) === 216;
            }
    
            // 只有在android环境下才修复
            if ( type === 'image/jpeg' && !supportJpeg ) {
                w = canvas.width;
                h = canvas.height;
                ctx = canvas.getContext('2d');
    
                return encoder.encode( ctx.getImageData( 0, 0, w, h ), quality );
            }
    
            return origin.apply( null, arguments );
        };
    });
    /**
     * @fileOverview Image
     */
    define('runtime/html5/image',[
        'base',
        'runtime/html5/runtime',
        'runtime/html5/util'
    ], function( Base, Html5Runtime, Util ) {
    
        var BLANK = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D';
    
        return Html5Runtime.register( 'Image', {
    
            // flag: 标记是否被修改过。
            modified: false,
    
            init: function() {
                var me = this,
                    img = new Image();
    
                img.onload = function() {
    
                    me._info = {
                        type: me.type,
                        width: this.width,
                        height: this.height
                    };
    
                    // 读取meta信息。
                    if ( !me._metas && 'image/jpeg' === me.type ) {
                        Util.parseMeta( me._blob, function( error, ret ) {
                            me._metas = ret;
                            me.owner.trigger('load');
                        });
                    } else {
                        me.owner.trigger('load');
                    }
                };
    
                img.onerror = function() {
                    me.owner.trigger('error');
                };
    
                me._img = img;
            },
    
            loadFromBlob: function( blob ) {
                var me = this,
                    img = me._img;
    
                me._blob = blob;
                me.type = blob.type;
                img.src = Util.createObjectURL( blob.getSource() );
                me.owner.once( 'load', function() {
                    Util.revokeObjectURL( img.src );
                });
            },
    
            resize: function( width, height ) {
                var canvas = this._canvas ||
                        (this._canvas = document.createElement('canvas'));
    
                this._resize( this._img, canvas, width, height );
                this._blob = null;    // 没用了，可以删掉了。
                this.modified = true;
                this.owner.trigger( 'complete', 'resize' );
            },
    
            crop: function( x, y, w, h, s ) {
                var cvs = this._canvas ||
                        (this._canvas = document.createElement('canvas')),
                    opts = this.options,
                    img = this._img,
                    iw = img.naturalWidth,
                    ih = img.naturalHeight,
                    orientation = this.getOrientation();
    
                s = s || 1;
    
                // todo 解决 orientation 的问题。
                // values that require 90 degree rotation
                // if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
    
                //     switch ( orientation ) {
                //         case 6:
                //             tmp = x;
                //             x = y;
                //             y = iw * s - tmp - w;
                //             console.log(ih * s, tmp, w)
                //             break;
                //     }
    
                //     (w ^= h, h ^= w, w ^= h);
                // }
    
                cvs.width = w;
                cvs.height = h;
    
                opts.preserveHeaders || this._rotate2Orientaion( cvs, orientation );
                this._renderImageToCanvas( cvs, img, -x, -y, iw * s, ih * s );
    
                this._blob = null;    // 没用了，可以删掉了。
                this.modified = true;
                this.owner.trigger( 'complete', 'crop' );
            },
    
            getAsBlob: function( type ) {
                var blob = this._blob,
                    opts = this.options,
                    canvas;
    
                type = type || this.type;
    
                // blob需要重新生成。
                if ( this.modified || this.type !== type ) {
                    canvas = this._canvas;
    
                    if ( type === 'image/jpeg' ) {
    
                        blob = Util.canvasToDataUrl( canvas, type, opts.quality );
    
                        if ( opts.preserveHeaders && this._metas &&
                                this._metas.imageHead ) {
    
                            blob = Util.dataURL2ArrayBuffer( blob );
                            blob = Util.updateImageHead( blob,
                                    this._metas.imageHead );
                            blob = Util.arrayBufferToBlob( blob, type );
                            return blob;
                        }
                    } else {
                        blob = Util.canvasToDataUrl( canvas, type );
                    }
    
                    blob = Util.dataURL2Blob( blob );
                }
    
                return blob;
            },
    
            getAsDataUrl: function( type ) {
                var opts = this.options;
    
                type = type || this.type;
    
                if ( type === 'image/jpeg' ) {
                    return Util.canvasToDataUrl( this._canvas, type, opts.quality );
                } else {
                    return this._canvas.toDataURL( type );
                }
            },
    
            getOrientation: function() {
                return this._metas && this._metas.exif &&
                        this._metas.exif.get('Orientation') || 1;
            },
    
            info: function( val ) {
    
                // setter
                if ( val ) {
                    this._info = val;
                    return this;
                }
    
                // getter
                return this._info;
            },
    
            meta: function( val ) {
    
                // setter
                if ( val ) {
                    this._meta = val;
                    return this;
                }
    
                // getter
                return this._meta;
            },
    
            destroy: function() {
                var canvas = this._canvas;
                this._img.onload = null;
    
                if ( canvas ) {
                    canvas.getContext('2d')
                            .clearRect( 0, 0, canvas.width, canvas.height );
                    canvas.width = canvas.height = 0;
                    this._canvas = null;
                }
    
                // 释放内存。非常重要，否则释放不了image的内存。
                this._img.src = BLANK;
                this._img = this._blob = null;
            },
    
            _resize: function( img, cvs, width, height ) {
                var opts = this.options,
                    naturalWidth = img.width,
                    naturalHeight = img.height,
                    orientation = this.getOrientation(),
                    scale, w, h, x, y;
    
                // values that require 90 degree rotation
                if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
    
                    // 交换width, height的值。
                    width ^= height;
                    height ^= width;
                    width ^= height;
                }
    
                scale = Math[ opts.crop ? 'max' : 'min' ]( width / naturalWidth,
                        height / naturalHeight );
    
                // 不允许放大。
                opts.allowMagnify || (scale = Math.min( 1, scale ));
    
                w = naturalWidth * scale;
                h = naturalHeight * scale;
    
                if ( opts.crop ) {
                    cvs.width = width;
                    cvs.height = height;
                } else {
                    cvs.width = w;
                    cvs.height = h;
                }
    
                x = (cvs.width - w) / 2;
                y = (cvs.height - h) / 2;
    
                opts.preserveHeaders || this._rotate2Orientaion( cvs, orientation );
    
                this._renderImageToCanvas( cvs, img, x, y, w, h );
            },
    
            _rotate2Orientaion: function( canvas, orientation ) {
                var width = canvas.width,
                    height = canvas.height,
                    ctx = canvas.getContext('2d');
    
                switch ( orientation ) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        canvas.width = height;
                        canvas.height = width;
                        break;
                }
    
                switch ( orientation ) {
                    case 2:    // horizontal flip
                        ctx.translate( width, 0 );
                        ctx.scale( -1, 1 );
                        break;
    
                    case 3:    // 180 rotate left
                        ctx.translate( width, height );
                        ctx.rotate( Math.PI );
                        break;
    
                    case 4:    // vertical flip
                        ctx.translate( 0, height );
                        ctx.scale( 1, -1 );
                        break;
    
                    case 5:    // vertical flip + 90 rotate right
                        ctx.rotate( 0.5 * Math.PI );
                        ctx.scale( 1, -1 );
                        break;
    
                    case 6:    // 90 rotate right
                        ctx.rotate( 0.5 * Math.PI );
                        ctx.translate( 0, -height );
                        break;
    
                    case 7:    // horizontal flip + 90 rotate right
                        ctx.rotate( 0.5 * Math.PI );
                        ctx.translate( width, -height );
                        ctx.scale( -1, 1 );
                        break;
    
                    case 8:    // 90 rotate left
                        ctx.rotate( -0.5 * Math.PI );
                        ctx.translate( -width, 0 );
                        break;
                }
            },
    
            // https://github.com/stomita/ios-imagefile-megapixel/
            // blob/master/src/megapix-image.js
            _renderImageToCanvas: (function() {
    
                // 如果不是ios, 不需要这么复杂！
                if ( !Base.os.ios ) {
                    return function( canvas ) {
                        var args = Base.slice( arguments, 1 ),
                            ctx = canvas.getContext('2d');
    
                        ctx.drawImage.apply( ctx, args );
                    };
                }
    
                /**
                 * Detecting vertical squash in loaded image.
                 * Fixes a bug which squash image vertically while drawing into
                 * canvas for some images.
                 */
                function detectVerticalSquash( img, iw, ih ) {
                    var canvas = document.createElement('canvas'),
                        ctx = canvas.getContext('2d'),
                        sy = 0,
                        ey = ih,
                        py = ih,
                        data, alpha, ratio;
    
    
                    canvas.width = 1;
                    canvas.height = ih;
                    ctx.drawImage( img, 0, 0 );
                    data = ctx.getImageData( 0, 0, 1, ih ).data;
    
                    // search image edge pixel position in case
                    // it is squashed vertically.
                    while ( py > sy ) {
                        alpha = data[ (py - 1) * 4 + 3 ];
    
                        if ( alpha === 0 ) {
                            ey = py;
                        } else {
                            sy = py;
                        }
    
                        py = (ey + sy) >> 1;
                    }
    
                    ratio = (py / ih);
                    return (ratio === 0) ? 1 : ratio;
                }
    
                // fix ie7 bug
                // http://stackoverflow.com/questions/11929099/
                // html5-canvas-drawimage-ratio-bug-ios
                if ( Base.os.ios >= 7 ) {
                    return function( canvas, img, x, y, w, h ) {
                        var iw = img.naturalWidth,
                            ih = img.naturalHeight,
                            vertSquashRatio = detectVerticalSquash( img, iw, ih );
    
                        return canvas.getContext('2d').drawImage( img, 0, 0,
                                iw * vertSquashRatio, ih * vertSquashRatio,
                                x, y, w, h );
                    };
                }
    
                /**
                 * Detect subsampling in loaded image.
                 * In iOS, larger images than 2M pixels may be
                 * subsampled in rendering.
                 */
                function detectSubsampling( img ) {
                    var iw = img.naturalWidth,
                        ih = img.naturalHeight,
                        canvas, ctx;
    
                    // subsampling may happen overmegapixel image
                    if ( iw * ih > 1024 * 1024 ) {
                        canvas = document.createElement('canvas');
                        canvas.width = canvas.height = 1;
                        ctx = canvas.getContext('2d');
                        ctx.drawImage( img, -iw + 1, 0 );
    
                        // subsampled image becomes half smaller in rendering size.
                        // check alpha channel value to confirm image is covering
                        // edge pixel or not. if alpha value is 0
                        // image is not covering, hence subsampled.
                        return ctx.getImageData( 0, 0, 1, 1 ).data[ 3 ] === 0;
                    } else {
                        return false;
                    }
                }
    
    
                return function( canvas, img, x, y, width, height ) {
                    var iw = img.naturalWidth,
                        ih = img.naturalHeight,
                        ctx = canvas.getContext('2d'),
                        subsampled = detectSubsampling( img ),
                        doSquash = this.type === 'image/jpeg',
                        d = 1024,
                        sy = 0,
                        dy = 0,
                        tmpCanvas, tmpCtx, vertSquashRatio, dw, dh, sx, dx;
    
                    if ( subsampled ) {
                        iw /= 2;
                        ih /= 2;
                    }
    
                    ctx.save();
                    tmpCanvas = document.createElement('canvas');
                    tmpCanvas.width = tmpCanvas.height = d;
    
                    tmpCtx = tmpCanvas.getContext('2d');
                    vertSquashRatio = doSquash ?
                            detectVerticalSquash( img, iw, ih ) : 1;
    
                    dw = Math.ceil( d * width / iw );
                    dh = Math.ceil( d * height / ih / vertSquashRatio );
    
                    while ( sy < ih ) {
                        sx = 0;
                        dx = 0;
                        while ( sx < iw ) {
                            tmpCtx.clearRect( 0, 0, d, d );
                            tmpCtx.drawImage( img, -sx, -sy );
                            ctx.drawImage( tmpCanvas, 0, 0, d, d,
                                    x + dx, y + dy, dw, dh );
                            sx += d;
                            dx += dw;
                        }
                        sy += d;
                        dy += dh;
                    }
                    ctx.restore();
                    tmpCanvas = tmpCtx = null;
                };
            })()
        });
    });
    /**
     * @fileOverview Transport
     * @todo 支持chunked传输，优势：
     * 可以将大文件分成小块，挨个传输，可以提高大文件成功率，当失败的时候，也只需要重传那小部分，
     * 而不需要重头再传一次。另外断点续传也需要用chunked方式。
     */
    define('runtime/html5/transport',[
        'base',
        'runtime/html5/runtime'
    ], function( Base, Html5Runtime ) {
    
        var noop = Base.noop,
            $ = Base.$;
    
        return Html5Runtime.register( 'Transport', {
            init: function() {
                this._status = 0;
                this._response = null;
            },
    
            send: function() {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    formData, binary, fr;
    
                if ( opts.sendAsBinary ) {
                    server += (/\?/.test( server ) ? '&' : '?') +
                            $.param( owner._formData );
    
                    binary = blob.getSource();
                } else {
                    formData = new FormData();
                    $.each( owner._formData, function( k, v ) {
                        formData.append( k, v );
                    });
    
                    formData.append( opts.fileVal, blob.getSource(),
                            opts.filename || owner._formData.name || '' );
                }
    
                if ( opts.withCredentials && 'withCredentials' in xhr ) {
                    xhr.open( opts.method, server, true );
                    xhr.withCredentials = true;
                } else {
                    xhr.open( opts.method, server );
                }
    
                this._setRequestHeader( xhr, opts.headers );
    
                if ( binary ) {
                    // 强制设置成 content-type 为文件流。
                    xhr.overrideMimeType &&
                            xhr.overrideMimeType('application/octet-stream');
    
                    // android直接发送blob会导致服务端接收到的是空文件。
                    // bug详情。
                    // https://code.google.com/p/android/issues/detail?id=39882
                    // 所以先用fileReader读取出来再通过arraybuffer的方式发送。
                    if ( Base.os.android ) {
                        fr = new FileReader();
    
                        fr.onload = function() {
                            xhr.send( this.result );
                            fr = fr.onload = null;
                        };
    
                        fr.readAsArrayBuffer( binary );
                    } else {
                        xhr.send( binary );
                    }
                } else {
                    xhr.send( formData );
                }
            },
    
            getResponse: function() {
                return this._response;
            },
    
            getResponseAsJson: function() {
                return this._parseJson( this._response );
            },
    
            getStatus: function() {
                return this._status;
            },
    
            abort: function() {
                var xhr = this._xhr;
    
                if ( xhr ) {
                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    xhr.abort();
    
                    this._xhr = xhr = null;
                }
            },
    
            destroy: function() {
                this.abort();
            },
    
            _initAjax: function() {
                var me = this,
                    xhr = new XMLHttpRequest(),
                    opts = this.options;
    
                if ( opts.withCredentials && !('withCredentials' in xhr) &&
                        typeof XDomainRequest !== 'undefined' ) {
                    xhr = new XDomainRequest();
                }
    
                xhr.upload.onprogress = function( e ) {
                    var percentage = 0;
    
                    if ( e.lengthComputable ) {
                        percentage = e.loaded / e.total;
                    }
    
                    return me.trigger( 'progress', percentage );
                };
    
                xhr.onreadystatechange = function() {
    
                    if ( xhr.readyState !== 4 ) {
                        return;
                    }
    
                    xhr.upload.onprogress = noop;
                    xhr.onreadystatechange = noop;
                    me._xhr = null;
                    me._status = xhr.status;
    
                    if ( xhr.status >= 200 && xhr.status < 300 ) {
                        me._response = xhr.responseText;
                        return me.trigger('load');
                    } else if ( xhr.status >= 500 && xhr.status < 600 ) {
                        me._response = xhr.responseText;
                        return me.trigger( 'error', 'server' );
                    }
    
    
                    return me.trigger( 'error', me._status ? 'http' : 'abort' );
                };
    
                me._xhr = xhr;
                return xhr;
            },
    
            _setRequestHeader: function( xhr, headers ) {
                $.each( headers, function( key, val ) {
                    xhr.setRequestHeader( key, val );
                });
            },
    
            _parseJson: function( str ) {
                var json;
    
                try {
                    json = JSON.parse( str );
                } catch ( ex ) {
                    json = {};
                }
    
                return json;
            }
        });
    });
    /**
     * @fileOverview  Transport flash实现
     */
    define('runtime/html5/md5',[
        'runtime/html5/runtime'
    ], function( FlashRuntime ) {
    
        /*
         * Fastest md5 implementation around (JKM md5)
         * Credits: Joseph Myers
         *
         * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
         * @see http://jsperf.com/md5-shootout/7
         */
    
        /* this function is much faster,
          so if possible we use it. Some IEs
          are the only ones I know of that
          need the idiotic second function,
          generated by an if clause.  */
        var add32 = function (a, b) {
            return (a + b) & 0xFFFFFFFF;
        },
    
        cmn = function (q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32((a << s) | (a >>> (32 - s)), b);
        },
    
        ff = function (a, b, c, d, x, s, t) {
            return cmn((b & c) | ((~b) & d), a, b, x, s, t);
        },
    
        gg = function (a, b, c, d, x, s, t) {
            return cmn((b & d) | (c & (~d)), a, b, x, s, t);
        },
    
        hh = function (a, b, c, d, x, s, t) {
            return cmn(b ^ c ^ d, a, b, x, s, t);
        },
    
        ii = function (a, b, c, d, x, s, t) {
            return cmn(c ^ (b | (~d)), a, b, x, s, t);
        },
    
        md5cycle = function (x, k) {
            var a = x[0],
                b = x[1],
                c = x[2],
                d = x[3];
    
            a = ff(a, b, c, d, k[0], 7, -680876936);
            d = ff(d, a, b, c, k[1], 12, -389564586);
            c = ff(c, d, a, b, k[2], 17, 606105819);
            b = ff(b, c, d, a, k[3], 22, -1044525330);
            a = ff(a, b, c, d, k[4], 7, -176418897);
            d = ff(d, a, b, c, k[5], 12, 1200080426);
            c = ff(c, d, a, b, k[6], 17, -1473231341);
            b = ff(b, c, d, a, k[7], 22, -45705983);
            a = ff(a, b, c, d, k[8], 7, 1770035416);
            d = ff(d, a, b, c, k[9], 12, -1958414417);
            c = ff(c, d, a, b, k[10], 17, -42063);
            b = ff(b, c, d, a, k[11], 22, -1990404162);
            a = ff(a, b, c, d, k[12], 7, 1804603682);
            d = ff(d, a, b, c, k[13], 12, -40341101);
            c = ff(c, d, a, b, k[14], 17, -1502002290);
            b = ff(b, c, d, a, k[15], 22, 1236535329);
    
            a = gg(a, b, c, d, k[1], 5, -165796510);
            d = gg(d, a, b, c, k[6], 9, -1069501632);
            c = gg(c, d, a, b, k[11], 14, 643717713);
            b = gg(b, c, d, a, k[0], 20, -373897302);
            a = gg(a, b, c, d, k[5], 5, -701558691);
            d = gg(d, a, b, c, k[10], 9, 38016083);
            c = gg(c, d, a, b, k[15], 14, -660478335);
            b = gg(b, c, d, a, k[4], 20, -405537848);
            a = gg(a, b, c, d, k[9], 5, 568446438);
            d = gg(d, a, b, c, k[14], 9, -1019803690);
            c = gg(c, d, a, b, k[3], 14, -187363961);
            b = gg(b, c, d, a, k[8], 20, 1163531501);
            a = gg(a, b, c, d, k[13], 5, -1444681467);
            d = gg(d, a, b, c, k[2], 9, -51403784);
            c = gg(c, d, a, b, k[7], 14, 1735328473);
            b = gg(b, c, d, a, k[12], 20, -1926607734);
    
            a = hh(a, b, c, d, k[5], 4, -378558);
            d = hh(d, a, b, c, k[8], 11, -2022574463);
            c = hh(c, d, a, b, k[11], 16, 1839030562);
            b = hh(b, c, d, a, k[14], 23, -35309556);
            a = hh(a, b, c, d, k[1], 4, -1530992060);
            d = hh(d, a, b, c, k[4], 11, 1272893353);
            c = hh(c, d, a, b, k[7], 16, -155497632);
            b = hh(b, c, d, a, k[10], 23, -1094730640);
            a = hh(a, b, c, d, k[13], 4, 681279174);
            d = hh(d, a, b, c, k[0], 11, -358537222);
            c = hh(c, d, a, b, k[3], 16, -722521979);
            b = hh(b, c, d, a, k[6], 23, 76029189);
            a = hh(a, b, c, d, k[9], 4, -640364487);
            d = hh(d, a, b, c, k[12], 11, -421815835);
            c = hh(c, d, a, b, k[15], 16, 530742520);
            b = hh(b, c, d, a, k[2], 23, -995338651);
    
            a = ii(a, b, c, d, k[0], 6, -198630844);
            d = ii(d, a, b, c, k[7], 10, 1126891415);
            c = ii(c, d, a, b, k[14], 15, -1416354905);
            b = ii(b, c, d, a, k[5], 21, -57434055);
            a = ii(a, b, c, d, k[12], 6, 1700485571);
            d = ii(d, a, b, c, k[3], 10, -1894986606);
            c = ii(c, d, a, b, k[10], 15, -1051523);
            b = ii(b, c, d, a, k[1], 21, -2054922799);
            a = ii(a, b, c, d, k[8], 6, 1873313359);
            d = ii(d, a, b, c, k[15], 10, -30611744);
            c = ii(c, d, a, b, k[6], 15, -1560198380);
            b = ii(b, c, d, a, k[13], 21, 1309151649);
            a = ii(a, b, c, d, k[4], 6, -145523070);
            d = ii(d, a, b, c, k[11], 10, -1120210379);
            c = ii(c, d, a, b, k[2], 15, 718787259);
            b = ii(b, c, d, a, k[9], 21, -343485551);
    
            x[0] = add32(a, x[0]);
            x[1] = add32(b, x[1]);
            x[2] = add32(c, x[2]);
            x[3] = add32(d, x[3]);
        },
    
        /* there needs to be support for Unicode here,
           * unless we pretend that we can redefine the MD-5
           * algorithm for multi-byte characters (perhaps
           * by adding every four 16-bit characters and
           * shortening the sum to 32 bits). Otherwise
           * I suggest performing MD-5 as if every character
           * was two bytes--e.g., 0040 0025 = @%--but then
           * how will an ordinary MD-5 sum be matched?
           * There is no way to standardize text to something
           * like UTF-8 before transformation; speed cost is
           * utterly prohibitive. The JavaScript standard
           * itself needs to look at this: it should start
           * providing access to strings as preformed UTF-8
           * 8-bit unsigned value arrays.
           */
        md5blk = function (s) {
            var md5blks = [],
                i; /* Andy King said do it this way. */
    
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
            }
            return md5blks;
        },
    
        md5blk_array = function (a) {
            var md5blks = [],
                i; /* Andy King said do it this way. */
    
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
            }
            return md5blks;
        },
    
        md51 = function (s) {
            var n = s.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i,
                length,
                tail,
                tmp,
                lo,
                hi;
    
            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk(s.substring(i - 64, i)));
            }
            s = s.substring(i - 64);
            length = s.length;
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
            }
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
    
            // Beware that the final length might not fit in 32 bits so we take care of that
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
    
            tail[14] = lo;
            tail[15] = hi;
    
            md5cycle(state, tail);
            return state;
        },
    
        md51_array = function (a) {
            var n = a.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i,
                length,
                tail,
                tmp,
                lo,
                hi;
    
            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
            }
    
            // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
            // containing the last element of the parent array if the sub array specified starts
            // beyond the length of the parent array - weird.
            // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
            a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);
    
            length = a.length;
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= a[i] << ((i % 4) << 3);
            }
    
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
    
            // Beware that the final length might not fit in 32 bits so we take care of that
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
    
            tail[14] = lo;
            tail[15] = hi;
    
            md5cycle(state, tail);
    
            return state;
        },
    
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
    
        rhex = function (n) {
            var s = '',
                j;
            for (j = 0; j < 4; j += 1) {
                s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
            }
            return s;
        },
    
        hex = function (x) {
            var i;
            for (i = 0; i < x.length; i += 1) {
                x[i] = rhex(x[i]);
            }
            return x.join('');
        },
    
        md5 = function (s) {
            return hex(md51(s));
        },
    
    
    
        ////////////////////////////////////////////////////////////////////////////
    
        /**
         * SparkMD5 OOP implementation.
         *
         * Use this class to perform an incremental md5, otherwise use the
         * static methods instead.
         */
        SparkMD5 = function () {
            // call reset to init the instance
            this.reset();
        };
    
    
        // In some cases the fast add32 function cannot be used..
        if (md5('hello') !== '5d41402abc4b2a76b9719d911017c592') {
            add32 = function (x, y) {
                var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                    msw = (x >> 16) + (y >> 16) + (lsw >> 16);
                return (msw << 16) | (lsw & 0xFFFF);
            };
        }
    
    
        /**
         * Appends a string.
         * A conversion will be applied if an utf8 string is detected.
         *
         * @param {String} str The string to be appended
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.append = function (str) {
            // converts the string to utf8 bytes if necessary
            if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
            }
    
            // then append as binary
            this.appendBinary(str);
    
            return this;
        };
    
        /**
         * Appends a binary string.
         *
         * @param {String} contents The binary string to be appended
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.appendBinary = function (contents) {
            this._buff += contents;
            this._length += contents.length;
    
            var length = this._buff.length,
                i;
    
            for (i = 64; i <= length; i += 64) {
                md5cycle(this._state, md5blk(this._buff.substring(i - 64, i)));
            }
    
            this._buff = this._buff.substr(i - 64);
    
            return this;
        };
    
        /**
         * Finishes the incremental computation, reseting the internal state and
         * returning the result.
         * Use the raw parameter to obtain the raw result instead of the hex one.
         *
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.prototype.end = function (raw) {
            var buff = this._buff,
                length = buff.length,
                i,
                tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ret;
    
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
            }
    
            this._finish(tail, length);
            ret = !!raw ? this._state : hex(this._state);
    
            this.reset();
    
            return ret;
        };
    
        /**
         * Finish the final calculation based on the tail.
         *
         * @param {Array}  tail   The tail (will be modified)
         * @param {Number} length The length of the remaining buffer
         */
        SparkMD5.prototype._finish = function (tail, length) {
            var i = length,
                tmp,
                lo,
                hi;
    
            tail[i >> 2] |= 0x80 << ((i % 4) << 3);
            if (i > 55) {
                md5cycle(this._state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
    
            // Do the final computation based on the tail and length
            // Beware that the final length may not fit in 32 bits so we take care of that
            tmp = this._length * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
    
            tail[14] = lo;
            tail[15] = hi;
            md5cycle(this._state, tail);
        };
    
        /**
         * Resets the internal state of the computation.
         *
         * @return {SparkMD5} The instance itself
         */
        SparkMD5.prototype.reset = function () {
            this._buff = "";
            this._length = 0;
            this._state = [1732584193, -271733879, -1732584194, 271733878];
    
            return this;
        };
    
        /**
         * Releases memory used by the incremental buffer and other aditional
         * resources. If you plan to use the instance again, use reset instead.
         */
        SparkMD5.prototype.destroy = function () {
            delete this._state;
            delete this._buff;
            delete this._length;
        };
    
    
        /**
         * Performs the md5 hash on a string.
         * A conversion will be applied if utf8 string is detected.
         *
         * @param {String}  str The string
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.hash = function (str, raw) {
            // converts the string to utf8 bytes if necessary
            if (/[\u0080-\uFFFF]/.test(str)) {
                str = unescape(encodeURIComponent(str));
            }
    
            var hash = md51(str);
    
            return !!raw ? hash : hex(hash);
        };
    
        /**
         * Performs the md5 hash on a binary string.
         *
         * @param {String}  content The binary string
         * @param {Boolean} raw     True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.hashBinary = function (content, raw) {
            var hash = md51(content);
    
            return !!raw ? hash : hex(hash);
        };
    
        /**
         * SparkMD5 OOP implementation for array buffers.
         *
         * Use this class to perform an incremental md5 ONLY for array buffers.
         */
        SparkMD5.ArrayBuffer = function () {
            // call reset to init the instance
            this.reset();
        };
    
        ////////////////////////////////////////////////////////////////////////////
    
        /**
         * Appends an array buffer.
         *
         * @param {ArrayBuffer} arr The array to be appended
         *
         * @return {SparkMD5.ArrayBuffer} The instance itself
         */
        SparkMD5.ArrayBuffer.prototype.append = function (arr) {
            // TODO: we could avoid the concatenation here but the algorithm would be more complex
            //       if you find yourself needing extra performance, please make a PR.
            var buff = this._concatArrayBuffer(this._buff, arr),
                length = buff.length,
                i;
    
            this._length += arr.byteLength;
    
            for (i = 64; i <= length; i += 64) {
                md5cycle(this._state, md5blk_array(buff.subarray(i - 64, i)));
            }
    
            // Avoids IE10 weirdness (documented above)
            this._buff = (i - 64) < length ? buff.subarray(i - 64) : new Uint8Array(0);
    
            return this;
        };
    
        /**
         * Finishes the incremental computation, reseting the internal state and
         * returning the result.
         * Use the raw parameter to obtain the raw result instead of the hex one.
         *
         * @param {Boolean} raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.ArrayBuffer.prototype.end = function (raw) {
            var buff = this._buff,
                length = buff.length,
                tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                i,
                ret;
    
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff[i] << ((i % 4) << 3);
            }
    
            this._finish(tail, length);
            ret = !!raw ? this._state : hex(this._state);
    
            this.reset();
    
            return ret;
        };
    
        SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
    
        /**
         * Resets the internal state of the computation.
         *
         * @return {SparkMD5.ArrayBuffer} The instance itself
         */
        SparkMD5.ArrayBuffer.prototype.reset = function () {
            this._buff = new Uint8Array(0);
            this._length = 0;
            this._state = [1732584193, -271733879, -1732584194, 271733878];
    
            return this;
        };
    
        /**
         * Releases memory used by the incremental buffer and other aditional
         * resources. If you plan to use the instance again, use reset instead.
         */
        SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    
        /**
         * Concats two array buffers, returning a new one.
         *
         * @param  {ArrayBuffer} first  The first array buffer
         * @param  {ArrayBuffer} second The second array buffer
         *
         * @return {ArrayBuffer} The new array buffer
         */
        SparkMD5.ArrayBuffer.prototype._concatArrayBuffer = function (first, second) {
            var firstLength = first.length,
                result = new Uint8Array(firstLength + second.byteLength);
    
            result.set(first);
            result.set(new Uint8Array(second), firstLength);
    
            return result;
        };
    
        /**
         * Performs the md5 hash on an array buffer.
         *
         * @param {ArrayBuffer} arr The array buffer
         * @param {Boolean}     raw True to get the raw result, false to get the hex result
         *
         * @return {String|Array} The result
         */
        SparkMD5.ArrayBuffer.hash = function (arr, raw) {
            var hash = md51_array(new Uint8Array(arr));
    
            return !!raw ? hash : hex(hash);
        };
        
        return FlashRuntime.register( 'Md5', {
            init: function() {
                // do nothing.
            },
    
            loadFromBlob: function( file ) {
                var blob = file.getSource(),
                    chunkSize = 2 * 1024 * 1024,
                    chunks = Math.ceil( blob.size / chunkSize ),
                    chunk = 0,
                    owner = this.owner,
                    spark = new SparkMD5.ArrayBuffer(),
                    me = this,
                    blobSlice = blob.mozSlice || blob.webkitSlice || blob.slice,
                    loadNext, fr;
    
                fr = new FileReader();
    
                loadNext = function() {
                    var start, end;
    
                    start = chunk * chunkSize;
                    end = Math.min( start + chunkSize, blob.size );
    
                    fr.onload = function( e ) {
                        spark.append( e.target.result );
                        owner.trigger( 'progress', {
                            total: file.size,
                            loaded: end
                        });
                    };
    
                    fr.onloadend = function() {
                        fr.onloadend = fr.onload = null;
    
                        if ( ++chunk < chunks ) {
                            setTimeout( loadNext, 1 );
                        } else {
                            setTimeout(function(){
                                owner.trigger('load');
                                me.result = spark.end();
                                loadNext = file = blob = spark = null;
                                owner.trigger('complete');
                            }, 50 );
                        }
                    };
    
                    fr.readAsArrayBuffer( blobSlice.call( blob, start, end ) );
                };
    
                loadNext();
            },
    
            getResult: function() {
                return this.result;
            }
        });
    });
    /**
     * @fileOverview FlashRuntime
     */
    define('runtime/flash/runtime',[
        'base',
        'runtime/runtime',
        'runtime/compbase'
    ], function( Base, Runtime, CompBase ) {
    
        var $ = Base.$,
            type = 'flash',
            components = {};
    
    
        function getFlashVersion() {
            var version;
    
            try {
                version = navigator.plugins[ 'Shockwave Flash' ];
                version = version.description;
            } catch ( ex ) {
                try {
                    version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                            .GetVariable('$version');
                } catch ( ex2 ) {
                    version = '0.0';
                }
            }
            version = version.match( /\d+/g );
            return parseFloat( version[ 0 ] + '.' + version[ 1 ], 10 );
        }
    
        function FlashRuntime() {
            var pool = {},
                clients = {},
                destroy = this.destroy,
                me = this,
                jsreciver = Base.guid('webuploader_');
    
            Runtime.apply( me, arguments );
            me.type = type;
    
    
            // 这个方法的调用者，实际上是RuntimeClient
            me.exec = function( comp, fn/*, args...*/ ) {
                var client = this,
                    uid = client.uid,
                    args = Base.slice( arguments, 2 ),
                    instance;
    
                clients[ uid ] = client;
    
                if ( components[ comp ] ) {
                    if ( !pool[ uid ] ) {
                        pool[ uid ] = new components[ comp ]( client, me );
                    }
    
                    instance = pool[ uid ];
    
                    if ( instance[ fn ] ) {
                        return instance[ fn ].apply( instance, args );
                    }
                }
    
                return me.flashExec.apply( client, arguments );
            };
    
            function handler( evt, obj ) {
                var type = evt.type || evt,
                    parts, uid;
    
                parts = type.split('::');
                uid = parts[ 0 ];
                type = parts[ 1 ];
    
                // console.log.apply( console, arguments );
    
                if ( type === 'Ready' && uid === me.uid ) {
                    me.trigger('ready');
                } else if ( clients[ uid ] ) {
                    clients[ uid ].trigger( type.toLowerCase(), evt, obj );
                }
    
                // Base.log( evt, obj );
            }
    
            // flash的接受器。
            window[ jsreciver ] = function() {
                var args = arguments;
    
                // 为了能捕获得到。
                setTimeout(function() {
                    handler.apply( null, args );
                }, 1 );
            };
    
            this.jsreciver = jsreciver;
    
            this.destroy = function() {
                // @todo 删除池子中的所有实例
                return destroy && destroy.apply( this, arguments );
            };
    
            this.flashExec = function( comp, fn ) {
                var flash = me.getFlash(),
                    args = Base.slice( arguments, 2 );
    
                return flash.exec( this.uid, comp, fn, args );
            };
    
            // @todo
        }
    
        Base.inherits( Runtime, {
            constructor: FlashRuntime,
    
            init: function() {
                var container = this.getContainer(),
                    opts = this.options,
                    html;
    
                // if not the minimal height, shims are not initialized
                // in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)
                container.css({
                    position: 'absolute',
                    top: '-8px',
                    left: '-8px',
                    width: '9px',
                    height: '9px',
                    overflow: 'hidden'
                });
    
                // insert flash object
                html = '<object id="' + this.uid + '" type="application/' +
                        'x-shockwave-flash" data="' +  opts.swf + '" ';
    
                if ( Base.browser.ie ) {
                    html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
                }
    
                html += 'width="100%" height="100%" style="outline:0">'  +
                    '<param name="movie" value="' + opts.swf + '" />' +
                    '<param name="flashvars" value="uid=' + this.uid +
                    '&jsreciver=' + this.jsreciver + '" />' +
                    '<param name="wmode" value="transparent" />' +
                    '<param name="allowscriptaccess" value="always" />' +
                '</object>';
    
                container.html( html );
            },
    
            getFlash: function() {
                if ( this._flash ) {
                    return this._flash;
                }
    
                this._flash = $( '#' + this.uid ).get( 0 );
                return this._flash;
            }
    
        });
    
        FlashRuntime.register = function( name, component ) {
            component = components[ name ] = Base.inherits( CompBase, $.extend({
    
                // @todo fix this later
                flashExec: function() {
                    var owner = this.owner,
                        runtime = this.getRuntime();
    
                    return runtime.flashExec.apply( owner, arguments );
                }
            }, component ) );
    
            return component;
        };
    
        if ( getFlashVersion() >= 11.4 ) {
            Runtime.addRuntime( type, FlashRuntime );
        }
    
        return FlashRuntime;
    });
    /**
     * @fileOverview FilePicker
     */
    define('runtime/flash/filepicker',[
        'base',
        'runtime/flash/runtime'
    ], function( Base, FlashRuntime ) {
        var $ = Base.$;
    
        return FlashRuntime.register( 'FilePicker', {
            init: function( opts ) {
                var copy = $.extend({}, opts ),
                    len, i;
    
                // 修复Flash再没有设置title的情况下无法弹出flash文件选择框的bug.
                len = copy.accept && copy.accept.length;
                for (  i = 0; i < len; i++ ) {
                    if ( !copy.accept[ i ].title ) {
                        copy.accept[ i ].title = 'Files';
                    }
                }
    
                delete copy.button;
                delete copy.id;
                delete copy.container;
    
                this.flashExec( 'FilePicker', 'init', copy );
            },
    
            destroy: function() {
                this.flashExec( 'FilePicker', 'destroy' );
            }
        });
    });
    /**
     * @fileOverview 图片压缩
     */
    define('runtime/flash/image',[
        'runtime/flash/runtime'
    ], function( FlashRuntime ) {
    
        return FlashRuntime.register( 'Image', {
            // init: function( options ) {
            //     var owner = this.owner;
    
            //     this.flashExec( 'Image', 'init', options );
            //     owner.on( 'load', function() {
            //         debugger;
            //     });
            // },
    
            loadFromBlob: function( blob ) {
                var owner = this.owner;
    
                owner.info() && this.flashExec( 'Image', 'info', owner.info() );
                owner.meta() && this.flashExec( 'Image', 'meta', owner.meta() );
    
                this.flashExec( 'Image', 'loadFromBlob', blob.uid );
            }
        });
    });
    /**
     * @fileOverview  Transport flash实现
     */
    define('runtime/flash/transport',[
        'base',
        'runtime/flash/runtime',
        'runtime/client'
    ], function( Base, FlashRuntime, RuntimeClient ) {
        var $ = Base.$;
    
        return FlashRuntime.register( 'Transport', {
            init: function() {
                this._status = 0;
                this._response = null;
                this._responseJson = null;
            },
    
            send: function() {
                var owner = this.owner,
                    opts = this.options,
                    xhr = this._initAjax(),
                    blob = owner._blob,
                    server = opts.server,
                    binary;
    
                xhr.connectRuntime( blob.ruid );
    
                if ( opts.sendAsBinary ) {
                    server += (/\?/.test( server ) ? '&' : '?') +
                            $.param( owner._formData );
    
                    binary = blob.uid;
                } else {
                    $.each( owner._formData, function( k, v ) {
                        xhr.exec( 'append', k, v );
                    });
    
                    xhr.exec( 'appendBlob', opts.fileVal, blob.uid,
                            opts.filename || owner._formData.name || '' );
                }
    
                this._setRequestHeader( xhr, opts.headers );
                xhr.exec( 'send', {
                    method: opts.method,
                    url: server,
                    forceURLStream: opts.forceURLStream,
                    mimeType: 'application/octet-stream'
                }, binary );
            },
    
            getStatus: function() {
                return this._status;
            },
    
            getResponse: function() {
                return this._response || '';
            },
    
            getResponseAsJson: function() {
                return this._responseJson;
            },
    
            abort: function() {
                var xhr = this._xhr;
    
                if ( xhr ) {
                    xhr.exec('abort');
                    xhr.destroy();
                    this._xhr = xhr = null;
                }
            },
    
            destroy: function() {
                this.abort();
            },
    
            _initAjax: function() {
                var me = this,
                    xhr = new RuntimeClient('XMLHttpRequest');
    
                xhr.on( 'uploadprogress progress', function( e ) {
                    var percent = e.loaded / e.total;
                    percent = Math.min( 1, Math.max( 0, percent ) );
                    return me.trigger( 'progress', percent );
                });
    
                xhr.on( 'load', function() {
                    var status = xhr.exec('getStatus'),
                        readBody = false,
                        err = '',
                        p;
    
                    xhr.off();
                    me._xhr = null;
    
                    if ( status >= 200 && status < 300 ) {
                        readBody = true;
                    } else if ( status >= 500 && status < 600 ) {
                        readBody = true;
                        err = 'server';
                    } else {
                        err = 'http';
                    }
    
                    if ( readBody ) {
                        me._response = xhr.exec('getResponse');
                        me._response = decodeURIComponent( me._response );
    
                        // flash 处理可能存在 bug, 没辙只能靠 js 了
                        // try {
                        //     me._responseJson = xhr.exec('getResponseAsJson');
                        // } catch ( error ) {
                            
                        p = window.JSON && window.JSON.parse || function( s ) {
                            try {
                                return new Function('return ' + s).call();
                            } catch ( err ) {
                                return {};
                            }
                        };
                        me._responseJson  = me._response ? p(me._response) : {};
                            
                        // }
                    }
                    
                    xhr.destroy();
                    xhr = null;
    
                    return err ? me.trigger( 'error', err ) : me.trigger('load');
                });
    
                xhr.on( 'error', function() {
                    xhr.off();
                    me._xhr = null;
                    me.trigger( 'error', 'http' );
                });
    
                me._xhr = xhr;
                return xhr;
            },
    
            _setRequestHeader: function( xhr, headers ) {
                $.each( headers, function( key, val ) {
                    xhr.exec( 'setRequestHeader', key, val );
                });
            }
        });
    });
    /**
     * @fileOverview Blob Html实现
     */
    define('runtime/flash/blob',[
        'runtime/flash/runtime',
        'lib/blob'
    ], function( FlashRuntime, Blob ) {
    
        return FlashRuntime.register( 'Blob', {
            slice: function( start, end ) {
                var blob = this.flashExec( 'Blob', 'slice', start, end );
    
                return new Blob( blob.uid, blob );
            }
        });
    });
    /**
     * @fileOverview  Md5 flash实现
     */
    define('runtime/flash/md5',[
        'runtime/flash/runtime'
    ], function( FlashRuntime ) {
        
        return FlashRuntime.register( 'Md5', {
            init: function() {
                // do nothing.
            },
    
            loadFromBlob: function( blob ) {
                return this.flashExec( 'Md5', 'loadFromBlob', blob.uid );
            }
        });
    });
    /**
     * @fileOverview 完全版本。
     */
    define('preset/all',[
        'base',
    
        // widgets
        'widgets/filednd',
        'widgets/filepaste',
        'widgets/filepicker',
        'widgets/image',
        'widgets/queue',
        'widgets/runtime',
        'widgets/upload',
        'widgets/validator',
        'widgets/md5',
    
        // runtimes
        // html5
        'runtime/html5/blob',
        'runtime/html5/dnd',
        'runtime/html5/filepaste',
        'runtime/html5/filepicker',
        'runtime/html5/imagemeta/exif',
        'runtime/html5/androidpatch',
        'runtime/html5/image',
        'runtime/html5/transport',
        'runtime/html5/md5',
    
        // flash
        'runtime/flash/filepicker',
        'runtime/flash/image',
        'runtime/flash/transport',
        'runtime/flash/blob',
        'runtime/flash/md5'
    ], function( Base ) {
        return Base;
    });
    /**
     * @fileOverview 日志组件，主要用来收集错误信息，可以帮助 webuploader 更好的定位问题和发展。
     *
     * 如果您不想要启用此功能，请在打包的时候去掉 log 模块。
     *
     * 或者可以在初始化的时候通过 options.disableWidgets 属性禁用。
     *
     * 如：
     * WebUploader.create({
     *     ...
     *
     *     disableWidgets: 'log',
     *
     *     ...
     * })
     */
    define('widgets/log',[
        'base',
        'uploader',
        'widgets/widget'
    ], function( Base, Uploader ) {
        var $ = Base.$,
            logUrl = ' http://static.tieba.baidu.com/tb/pms/img/st.gif??',
            product = (location.hostname || location.host || 'protected').toLowerCase(),
    
            // 只针对 baidu 内部产品用户做统计功能。
            enable = product && /baidu/i.exec(product),
            base;
    
        if (!enable) {
            return;
        }
    
        base = {
            dv: 3,
            master: 'webuploader',
            online: /test/.exec(product) ? 0 : 1,
            module: '',
            product: product,
            type: 0
        };
    
        function send(data) {
            var obj = $.extend({}, base, data),
                url = logUrl.replace(/^(.*)\?/, '$1' + $.param( obj )),
                image = new Image();
    
            image.src = url;
        }
    
        return Uploader.register({
            name: 'log',
    
            init: function() {
                var owner = this.owner,
                    count = 0,
                    size = 0;
    
                owner
                    .on('error', function(code) {
                        send({
                            type: 2,
                            c_error_code: code
                        });
                    })
                    .on('uploadError', function(file, reason) {
                        send({
                            type: 2,
                            c_error_code: 'UPLOAD_ERROR',
                            c_reason: '' + reason
                        });
                    })
                    .on('uploadComplete', function(file) {
                        count++;
                        size += file.size;
                    }).
                    on('uploadFinished', function() {
                        send({
                            c_count: count,
                            c_size: size
                        });
                        count = size = 0;
                    });
    
                send({
                    c_usage: 1
                });
            }
        });
    });
    /**
     * @fileOverview Uploader上传类
     */
    define('webuploader',[
        'preset/all',
        'widgets/log'
    ], function( preset ) {
        return preset;
    });
    return require('webuploader');
});

// http://fex.baidu.com/webuploader/download.html
// http://fex.baidu.com/webuploader/getting-started.html
define('pieceUploader',['webuploader'], function(webuploader){
    
    var init = function(obj) {
        if ( !webuploader.Uploader.support() ) {
            alert( 'Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
            throw new Error( 'WebUploader does not support the browser you are using.' );
        }

        var baseConfig = {
            auto: false,
            server: '',
            swf: '../libs/webuploader/Uploader.swf',
            pick: '.filepick',
            resize: false
        }

        if(obj.onlypic) {
            baseConfig.accept = {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }
        }
        obj = $.extend(baseConfig, obj);

        var uploader = webuploader.create(obj);
        return uploader;
    };

    return {
        init: init
    };
});
/*!
 * jQuery Validation Plugin v1.19.2
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2020 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( 'jqvalidate',["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// JQuery trim is deprecated, provide a trim method based on String.prototype.trim
var trim = function( str ) {

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
	return str.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "" );
};

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				// Set form expando on contenteditable
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.trigger( "focus" )

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
define('pieceValidate',[
    "jqvalidate",
], function(jqvalidate) {
    // 要修改的name的input数组
    var nameArrCls = false;

    // 添加校验规则
    var setDefaultValidate = function(){
        $.extend(true, $.validator, {
                // 自定义的方法
                methods: {
                    // 检测wangEditor初始时里面的内容是否为<p><br></p>，是那么就是代表空
                    // 这里验证方法适用于wangedit3（适用如下） 在版本4中修复了这个问题（直接用required验证），
                    // data-rule-verifywang="true" data-msg-verifywang="请确认文章编辑器的内容不能为空！"
                    "verifywang": function (value, element) {
                        var noactel = (value !== '<p><br></p>' ? true : false);
                        // console.log(this.optional(element), noactel)
                        return this.optional(element) || noactel;
                    },
                    "mobile": function(value, element) {
                        var mobile = /^1[3|4|5|7|8]\d{9}$/;
	                    return this.optional(element) || (mobile.test(value));
                    },
                    // 验证输入的必须是数字或者字母
                    "numstring": function(value, element) {
                        var reg = /^[0-9a-zA-Z]+$/;
                        return this.optional(element) || (reg.test(value));
                    }
                },
                // 根据规则添加
                classRuleSettings: {
                    // 验证wangeditor是否为空
                    verifywang: {
                        verifywang: true
                    },
                    mobile: {
                        mobile: true
                    },
                    numstring: {
                        numstring: true
                    }
                },
                // 方法默认提示信息
                messages: {
                    required: '不能为空！',
                    verifywang: "编辑器的内容不能为空！",
                    mobile: '手机格式不对!',
                    numstring: '输入的必须是数字和字母！'
                },
                // 默认选项
                defaults: {
                    onkeyup: false,
                    // 验证规则
                    rules: {
                    },
                    // 验证不通过的第一个元素获得焦点
                    focusInvalid: false,
                    // 不通过元素获得焦点时候隐藏提示
                    focusCleanup: true,
                    // 验证失败的信息
                    messages: {
                    },
                    // 错误被包裹的标签
                    errorElement: 'span',
                    // 忽略的元素
                    ignore: '',
                    // 提交事件
                    submitHandler: function () {
                    }
                }
    
            });
    }

    // 引入弹窗提示
    var layerShow = function(text) {
        layer.confirm(text, {
            // skin: 'layui-layer-lan',
            title: '操作成功！',
            btn: ['关闭'] //按钮
        });
    }

    var submitAjax = function(obj) {
        $.ajax({
            type: obj.type,
            url: obj.url,
            dataType: 'json',
            success: function(data) {
                // successText是与后台约定好的字段
                layerShow(data.successText);
            },
            error: function(err) {
                layerShow('错误码：' + err.status);
            }
        });
    };

    // 由于如name=xx[]使用validate无法验证，那么在动态创建input的时候使用name=appendfiles1数字这样的形式进行
    // 唯一性验证，当通过后统一变为Input的样式名+[] 如name=appendfiles[]
    var replaceName = function () {
        if (!nameArrCls && nameArrCls.length <= 0) { return }
        $.each(nameArrCls, function (index, item) {
            $('.' + item).attr('name', item + '[]');
        });
    };

    var init = function(obj) {
        var $form = $('.' + obj.class);
        // 如果没有传值就是false
        nameArrCls = obj.nameArrCls || false;
        if($form.length <= 0) { return }
        setDefaultValidate();
        $form.validate({
            submitHandler: function(form) {
                // 验证成功获取表单提交的action地址
                var formSubmitUrl = $(form).attr('action');
                //验证通过后 的js代码写在这里
                if($form.data('ajax')) {
                    // 如果是ajax那么就获取form表单上的未通过的提示
                    var nopassmsg = $(form).data('layer-nopassmsg');
                    // 如果表单上有ajax代表通过ajax方式提交
                    // 获取所有表单字段
                    var searchStr = $(form).serialize();
                    if(searchStr.length > 0) {
                        formSubmitUrl = formSubmitUrl + '?' + searchStr;
                        submitAjax({
                            type: 'POST',
                            url: formSubmitUrl
                        });
                    } else {
                        layer.msg(nopassmsg, {
                            time: 2000, //2s后自动关闭
                        });
                    }
                } else {
                    // console.log(form)
                    // 获取button按钮上提交成功的提示信息
                     var layerMsg = $(form).data('layer-passmsg') || '数据验证通过！';
                    layer.alert(layerMsg, {
                        yes: function() {
                            // 只有在点击确定后决定提交才去修改
                            // 如果传入值并且是一个数组 那么遍历数组将数组中的class名+[]替换他的name属性
                            nameArrCls && nameArrCls.length > 0 && replaceName();
                            // 执行插入的回调函数,进行类型检测 如果是fun那么才执行函数
                            if (typeof obj.callback === 'function') {
                                obj.callback();
                            }
                            form.submit();
                        }
                    });
                }
            }
        });
    }


    return {
        init: init
    }
});
define('pieceAppendfiles',[],function () {

    var createInputTpl = function (index) {
        var nameTpl = '<fieldset class="form-item w40">';
        nameTpl += '<label class="form-label">附件名称</label>'
        nameTpl += '<div class="input-block">';
        nameTpl += '<input type="text" name="appendfiles-name' + index + '" placeholder="请输入要添加附件的文件名称"  class="input appendfiles-name" required data-msg-required="文件名必填">';
        nameTpl += '</div>';
        nameTpl += '</fieldset>';
        var urlTpl = '<fieldset class="form-item w55">';
        urlTpl += '<label class="form-label">附件地址</label>'
        urlTpl += '<div class="input-block">';
        urlTpl += '<input type="text" name="appendfiles' + index + '" placeholder="请输入要添加附件的文件地址"  class="input appendfiles" required data-msg-required="文件地址必填" data-rule-url="true" data-msg-url="必须为url地址">';
        urlTpl += '</div>';
        urlTpl += '</fieldset>';
        var deleteBtnTpl = '<div class="delete">';
        deleteBtnTpl += '<i class="icon fal fa-times-circle"></i>';
        deleteBtnTpl += '</div>';
        var tpl = '<div class="form-item-box">' + nameTpl + urlTpl + deleteBtnTpl + '</div>';
        return tpl;
    };
    var createInput = function (obj) {
        var $btn = $(obj.btnName);
        var $container = $(obj.eleContainer);
        // 获取元素中有多少个form-item-box，从存在的数量后开始计数
        var fontItemCount = $container.find('.form-item-box').length;
        $btn.on('click', function () {
            var $createdinput = $(createInputTpl(fontItemCount));
            $container.prepend($createdinput);
            fontItemCount++;
        });
        $container.on('click', '.delete', function () {
            $(this).parents('.form-item-box').remove();
        });
    };

    return {
        createInput: createInput
    }
});
/*! layer-v3.1.1 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */
 ;!function(e,t){"use strict";var i,n,a=e.layui&&layui.define,o={getPath:function(){var e=document.currentScript?document.currentScript.src:function(){for(var e,t=document.scripts,i=t.length-1,n=i;n>0;n--)if("interactive"===t[n].readyState){e=t[n].src;break}return e||t[i].src}();return e.substring(0,e.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(t,i){var n=t.currentStyle?t.currentStyle:e.getComputedStyle(t,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](i)},link:function(t,i,n){if(r.path){var a=document.getElementsByTagName("head")[0],s=document.createElement("link");"string"==typeof i&&(n=i);var l=(n||t).replace(/\.|\//g,""),f="layuicss-"+l,c=0;s.rel="stylesheet",s.href=r.path+t,s.id=f,document.getElementById(f)||a.appendChild(s),"function"==typeof i&&!function u(){return++c>80?e.console&&console.error("layer.css: Invalid"):void(1989===parseInt(o.getStyle(document.getElementById(f),"width"))?i():setTimeout(u,100))}()}}},r={v:"3.1.1",ie:function(){var t=navigator.userAgent.toLowerCase();return!!(e.ActiveXObject||"ActiveXObject"in e)&&((t.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:e.layer&&e.layer.v?1e5:0,path:o.getPath,config:function(e,t){return e=e||{},r.cache=o.config=i.extend({},o.config,e),r.path=o.config.path||r.path,"string"==typeof e.extend&&(e.extend=[e.extend]),o.config.path&&r.ready(),e.extend?(a?layui.addcss("modules/layer/"+e.extend):o.link("theme/"+e.extend),this):this},ready:function(e){var t="layer",i="",n=(a?"modules/layer/":"theme/")+"default/layer.css?v="+r.v+i;return a?layui.addcss(n,e,t):o.link(n,e,t),this},alert:function(e,t,n){var a="function"==typeof t;return a&&(n=t),r.open(i.extend({content:e,yes:n},a?{}:t))},confirm:function(e,t,n,a){var s="function"==typeof t;return s&&(a=n,n=t),r.open(i.extend({content:e,btn:o.btn,yes:n,btn2:a},s?{}:t))},msg:function(e,n,a){var s="function"==typeof n,f=o.config.skin,c=(f?f+" "+f+"-msg":"")||"layui-layer-msg",u=l.anim.length-1;return s&&(a=n),r.open(i.extend({content:e,time:3e3,shade:!1,skin:c,title:!1,closeBtn:!1,btn:!1,resize:!1,end:a},s&&!o.config.skin?{skin:c+" layui-layer-hui",anim:u}:function(){return n=n||{},(n.icon===-1||n.icon===t&&!o.config.skin)&&(n.skin=c+" "+(n.skin||"layui-layer-hui")),n}()))},load:function(e,t){return r.open(i.extend({type:3,icon:e||0,resize:!1,shade:.01},t))},tips:function(e,t,n){return r.open(i.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},n))}},s=function(e){var t=this;t.index=++r.index,t.config=i.extend({},t.config,o.config,e),document.body?t.creat():setTimeout(function(){t.creat()},30)};s.pt=s.prototype;var l=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];l.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],s.pt.config={type:0,shade:.3,fixed:!0,move:l[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},s.pt.vessel=function(e,t){var n=this,a=n.index,r=n.config,s=r.zIndex+a,f="object"==typeof r.title,c=r.maxmin&&(1===r.type||2===r.type),u=r.title?'<div class="layui-layer-title" style="'+(f?r.title[1]:"")+'">'+(f?r.title[0]:r.title)+"</div>":"";return r.zIndex=s,t([r.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+a+'" times="'+a+'" style="'+("z-index:"+(s-1)+"; ")+'"></div>':"",'<div class="'+l[0]+(" layui-layer-"+o.type[r.type])+(0!=r.type&&2!=r.type||r.shade?"":" layui-layer-border")+" "+(r.skin||"")+'" id="'+l[0]+a+'" type="'+o.type[r.type]+'" times="'+a+'" showtime="'+r.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+s+"; width:"+r.area[0]+";height:"+r.area[1]+(r.fixed?"":";position:absolute;")+'">'+(e&&2!=r.type?"":u)+'<div id="'+(r.id||"")+'" class="layui-layer-content'+(0==r.type&&r.icon!==-1?" layui-layer-padding":"")+(3==r.type?" layui-layer-loading"+r.icon:"")+'">'+(0==r.type&&r.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+r.icon+'"></i>':"")+(1==r.type&&e?"":r.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=c?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return r.closeBtn&&(e+='<a class="layui-layer-ico '+l[7]+" "+l[7]+(r.title?r.closeBtn:4==r.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(r.btn?function(){var e="";"string"==typeof r.btn&&(r.btn=[r.btn]);for(var t=0,i=r.btn.length;t<i;t++)e+='<a class="'+l[6]+t+'">'+r.btn[t]+"</a>";return'<div class="'+l[6]+" layui-layer-btn-"+(r.btnAlign||"")+'">'+e+"</div>"}():"")+(r.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],u,i('<div class="layui-layer-move"></div>')),n},s.pt.creat=function(){var e=this,t=e.config,a=e.index,s=t.content,f="object"==typeof s,c=i("body");if(!t.id||!i("#"+t.id)[0]){switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.shift&&(t.anim=t.shift),6==r.ie&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:o.btn[0],r.closeAll("dialog");break;case 2:var s=t.content=f?t.content:[t.content||"http://layer.layui.com","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+l[4]+a+'" name="'+l[4]+a+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,t.icon===-1&&0===t.icon,r.closeAll("loading");break;case 4:f||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips="object"==typeof t.tips?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips")}if(e.vessel(f,function(n,r,u){c.append(n[0]),f?function(){2==t.type||4==t.type?function(){i("body").append(n[1])}():function(){s.parents("."+l[0])[0]||(s.data("display",s.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]),i("#"+l[0]+a).find("."+l[5]).before(r))}()}():c.append(n[1]),i(".layui-layer-move")[0]||c.append(o.moveElem=u),e.layero=i("#"+l[0]+a),t.scrollbar||l.html.css("overflow","hidden").attr("layer-full",a)}).auto(a),i("#layui-layer-shade"+e.index).css({"background-color":t.shade[1]||"#000",opacity:t.shade[0]||t.shade}),2==t.type&&6==r.ie&&e.layero.find("iframe").attr("src",s[0]),4==t.type?e.tips():e.offset(),t.fixed&&n.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(a),4==t.type&&e.tips()}),t.time<=0||setTimeout(function(){r.close(e.index)},t.time),e.move().callback(),l.anim[t.anim]){var u="layer-anim "+l.anim[t.anim];e.layero.addClass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){i(this).removeClass(u)})}t.isOutAnim&&e.layero.data("isOutAnim",!0)}},s.pt.auto=function(e){var t=this,a=t.config,o=i("#"+l[0]+e);""===a.area[0]&&a.maxWidth>0&&(r.ie&&r.ie<8&&a.btn&&o.width(o.innerWidth()),o.outerWidth()>a.maxWidth&&o.width(a.maxWidth));var s=[o.innerWidth(),o.innerHeight()],f=o.find(l[1]).outerHeight()||0,c=o.find("."+l[6]).outerHeight()||0,u=function(e){e=o.find(e),e.height(s[1]-f-c-2*(0|parseFloat(e.css("padding-top"))))};switch(a.type){case 2:u("iframe");break;default:""===a.area[1]?a.maxHeight>0&&o.outerHeight()>a.maxHeight?(s[1]=a.maxHeight,u("."+l[5])):a.fixed&&s[1]>=n.height()&&(s[1]=n.height(),u("."+l[5])):u("."+l[5])}return t},s.pt.offset=function(){var e=this,t=e.config,i=e.layero,a=[i.outerWidth(),i.outerHeight()],o="object"==typeof t.offset;e.offsetTop=(n.height()-a[1])/2,e.offsetLeft=(n.width()-a[0])/2,o?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=n.width()-a[0]:"b"===t.offset?e.offsetTop=n.height()-a[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=n.width()-a[0]):"rb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=n.width()-a[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?n.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?n.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=n.scrollTop(),e.offsetLeft+=n.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=n.height()-(i.find(l[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},s.pt.tips=function(){var e=this,t=e.config,a=e.layero,o=[a.outerWidth(),a.outerHeight()],r=i(t.follow);r[0]||(r=i("body"));var s={width:r.outerWidth(),height:r.outerHeight(),top:r.offset().top,left:r.offset().left},f=a.find(".layui-layer-TipsG"),c=t.tips[0];t.tips[1]||f.remove(),s.autoLeft=function(){s.left+o[0]-n.width()>0?(s.tipLeft=s.left+s.width-o[0],f.css({right:12,left:"auto"})):s.tipLeft=s.left},s.where=[function(){s.autoLeft(),s.tipTop=s.top-o[1]-10,f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left+s.width+10,s.tipTop=s.top,f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){s.autoLeft(),s.tipTop=s.top+s.height+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left-o[0]-10,s.tipTop=s.top,f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],s.where[c-1](),1===c?s.top-(n.scrollTop()+o[1]+16)<0&&s.where[2]():2===c?n.width()-(s.left+s.width+o[0]+16)>0||s.where[3]():3===c?s.top-n.scrollTop()+s.height+o[1]+16-n.height()>0&&s.where[0]():4===c&&o[0]+16-s.left>0&&s.where[1](),a.find("."+l[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),a.css({left:s.tipLeft-(t.fixed?n.scrollLeft():0),top:s.tipTop-(t.fixed?n.scrollTop():0)})},s.pt.move=function(){var e=this,t=e.config,a=i(document),s=e.layero,l=s.find(t.move),f=s.find(".layui-layer-resize"),c={};return t.move&&l.css("cursor","move"),l.on("mousedown",function(e){e.preventDefault(),t.move&&(c.moveStart=!0,c.offset=[e.clientX-parseFloat(s.css("left")),e.clientY-parseFloat(s.css("top"))],o.moveElem.css("cursor","move").show())}),f.on("mousedown",function(e){e.preventDefault(),c.resizeStart=!0,c.offset=[e.clientX,e.clientY],c.area=[s.outerWidth(),s.outerHeight()],o.moveElem.css("cursor","se-resize").show()}),a.on("mousemove",function(i){if(c.moveStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1],l="fixed"===s.css("position");if(i.preventDefault(),c.stX=l?0:n.scrollLeft(),c.stY=l?0:n.scrollTop(),!t.moveOut){var f=n.width()-s.outerWidth()+c.stX,u=n.height()-s.outerHeight()+c.stY;a<c.stX&&(a=c.stX),a>f&&(a=f),o<c.stY&&(o=c.stY),o>u&&(o=u)}s.css({left:a,top:o})}if(t.resize&&c.resizeStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1];i.preventDefault(),r.style(e.index,{width:c.area[0]+a,height:c.area[1]+o}),c.isResize=!0,t.resizing&&t.resizing(s)}}).on("mouseup",function(e){c.moveStart&&(delete c.moveStart,o.moveElem.hide(),t.moveEnd&&t.moveEnd(s)),c.resizeStart&&(delete c.resizeStart,o.moveElem.hide())}),e},s.pt.callback=function(){function e(){var e=a.cancel&&a.cancel(t.index,n);e===!1||r.close(t.index)}var t=this,n=t.layero,a=t.config;t.openLayer(),a.success&&(2==a.type?n.find("iframe").on("load",function(){a.success(n,t.index)}):a.success(n,t.index)),6==r.ie&&t.IE6(n),n.find("."+l[6]).children("a").on("click",function(){var e=i(this).index();if(0===e)a.yes?a.yes(t.index,n):a.btn1?a.btn1(t.index,n):r.close(t.index);else{var o=a["btn"+(e+1)]&&a["btn"+(e+1)](t.index,n);o===!1||r.close(t.index)}}),n.find("."+l[7]).on("click",e),a.shadeClose&&i("#layui-layer-shade"+t.index).on("click",function(){r.close(t.index)}),n.find(".layui-layer-min").on("click",function(){var e=a.min&&a.min(n);e===!1||r.min(t.index,a)}),n.find(".layui-layer-max").on("click",function(){i(this).hasClass("layui-layer-maxmin")?(r.restore(t.index),a.restore&&a.restore(n)):(r.full(t.index,a),setTimeout(function(){a.full&&a.full(n)},100))}),a.end&&(o.end[t.index]=a.end)},o.reselect=function(){i.each(i("select"),function(e,t){var n=i(this);n.parents("."+l[0])[0]||1==n.attr("layer")&&i("."+l[0]).length<1&&n.removeAttr("layer").show(),n=null})},s.pt.IE6=function(e){i("select").each(function(e,t){var n=i(this);n.parents("."+l[0])[0]||"none"===n.css("display")||n.attr({layer:"1"}).hide(),n=null})},s.pt.openLayer=function(){var e=this;r.zIndex=e.config.zIndex,r.setTop=function(e){var t=function(){r.zIndex++,e.css("z-index",r.zIndex+1)};return r.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),r.zIndex}},o.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},o.rescollbar=function(e){l.html.attr("layer-full")==e&&(l.html[0].style.removeProperty?l.html[0].style.removeProperty("overflow"):l.html[0].style.removeAttribute("overflow"),l.html.removeAttr("layer-full"))},e.layer=r,r.getChildFrame=function(e,t){return t=t||i("."+l[4]).attr("times"),i("#"+l[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=function(e){return i("#"+e).parents("."+l[4]).attr("times")},r.iframeAuto=function(e){if(e){var t=r.getChildFrame("html",e).outerHeight(),n=i("#"+l[0]+e),a=n.find(l[1]).outerHeight()||0,o=n.find("."+l[6]).outerHeight()||0;n.css({height:t+a+o}),n.find("iframe").css({height:t})}},r.iframeSrc=function(e,t){i("#"+l[0]+e).find("iframe").attr("src",t)},r.style=function(e,t,n){var a=i("#"+l[0]+e),r=a.find(".layui-layer-content"),s=a.attr("type"),f=a.find(l[1]).outerHeight()||0,c=a.find("."+l[6]).outerHeight()||0;a.attr("minLeft");s!==o.type[3]&&s!==o.type[4]&&(n||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-f-c<=64&&(t.height=64+f+c)),a.css(t),c=a.find("."+l[6]).outerHeight(),s===o.type[2]?a.find("iframe").css({height:parseFloat(t.height)-f-c}):r.css({height:parseFloat(t.height)-f-c-parseFloat(r.css("padding-top"))-parseFloat(r.css("padding-bottom"))}))},r.min=function(e,t){var a=i("#"+l[0]+e),s=a.find(l[1]).outerHeight()||0,f=a.attr("minLeft")||181*o.minIndex+"px",c=a.css("position");o.record(a),o.minLeft[0]&&(f=o.minLeft[0],o.minLeft.shift()),a.attr("position",c),r.style(e,{width:180,height:s,left:f,top:n.height()-s,position:"fixed",overflow:"hidden"},!0),a.find(".layui-layer-min").hide(),"page"===a.attr("type")&&a.find(l[4]).hide(),o.rescollbar(e),a.attr("minLeft")||o.minIndex++,a.attr("minLeft",f)},r.restore=function(e){var t=i("#"+l[0]+e),n=t.attr("area").split(",");t.attr("type");r.style(e,{width:parseFloat(n[0]),height:parseFloat(n[1]),top:parseFloat(n[2]),left:parseFloat(n[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(l[4]).show(),o.rescollbar(e)},r.full=function(e){var t,a=i("#"+l[0]+e);o.record(a),l.html.attr("layer-full")||l.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout(function(){var t="fixed"===a.css("position");r.style(e,{top:t?0:n.scrollTop(),left:t?0:n.scrollLeft(),width:n.width(),height:n.height()},!0),a.find(".layui-layer-min").hide()},100)},r.title=function(e,t){var n=i("#"+l[0]+(t||r.index)).find(l[1]);n.html(e)},r.close=function(e){var t=i("#"+l[0]+e),n=t.attr("type"),a="layer-anim-close";if(t[0]){var s="layui-layer-wrap",f=function(){if(n===o.type[1]&&"object"===t.attr("conType")){t.children(":not(."+l[5]+")").remove();for(var a=t.find("."+s),r=0;r<2;r++)a.unwrap();a.css("display",a.data("display")).removeClass(s)}else{if(n===o.type[2])try{var f=i("#"+l[4]+e)[0];f.contentWindow.document.write(""),f.contentWindow.close(),t.find("."+l[5])[0].removeChild(f)}catch(c){}t[0].innerHTML="",t.remove()}"function"==typeof o.end[e]&&o.end[e](),delete o.end[e]};t.data("isOutAnim")&&t.addClass("layer-anim "+a),i("#layui-layer-moves, #layui-layer-shade"+e).remove(),6==r.ie&&o.reselect(),o.rescollbar(e),t.attr("minLeft")&&(o.minIndex--,o.minLeft.push(t.attr("minLeft"))),r.ie&&r.ie<10||!t.data("isOutAnim")?f():setTimeout(function(){f()},200)}},r.closeAll=function(e){i.each(i("."+l[0]),function(){var t=i(this),n=e?t.attr("type")===e:1;n&&r.close(t.attr("times")),n=null})};var f=r.cache||{},c=function(e){return f.skin?" "+f.skin+" "+f.skin+"-"+e:""};r.prompt=function(e,t){var a="";if(e=e||{},"function"==typeof e&&(t=e),e.area){var o=e.area;a='style="width: '+o[0]+"; height: "+o[1]+';"',delete e.area}var s,l=2==e.formType?'<textarea class="layui-layer-input"'+a+">"+(e.value||"")+"</textarea>":function(){return'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">'}(),f=e.success;return delete e.success,r.open(i.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:l,skin:"layui-layer-prompt"+c("prompt"),maxWidth:n.width(),success:function(e){s=e.find(".layui-layer-input"),s.focus(),"function"==typeof f&&f(e)},resize:!1,yes:function(i){var n=s.val();""===n?s.focus():n.length>(e.maxlength||500)?r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",s,{tips:1}):t&&t(n,i,s)}},e))},r.tab=function(e){e=e||{};var t=e.tab||{},n="layui-this",a=e.success;return delete e.success,r.open(i.extend({type:1,skin:"layui-layer-tab"+c("tab"),resize:!1,title:function(){var e=t.length,i=1,a="";if(e>0)for(a='<span class="'+n+'">'+t[0].title+"</span>";i<e;i++)a+="<span>"+t[i].title+"</span>";return a}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=t.length,i=1,a="";if(e>0)for(a='<li class="layui-layer-tabli '+n+'">'+(t[0].content||"no content")+"</li>";i<e;i++)a+='<li class="layui-layer-tabli">'+(t[i].content||"no  content")+"</li>";return a}()+"</ul>",success:function(t){var o=t.find(".layui-layer-title").children(),r=t.find(".layui-layer-tabmain").children();o.on("mousedown",function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0;var a=i(this),o=a.index();a.addClass(n).siblings().removeClass(n),r.eq(o).show().siblings().hide(),"function"==typeof e.change&&e.change(o)}),"function"==typeof a&&a(t)}},e))},r.photos=function(t,n,a){function o(e,t,i){var n=new Image;return n.src=e,n.complete?t(n):(n.onload=function(){n.onload=null,t(n)},void(n.onerror=function(e){n.onerror=null,i(e)}))}var s={};if(t=t||{},t.photos){var l=t.photos.constructor===Object,f=l?t.photos:{},u=f.data||[],d=f.start||0;s.imgIndex=(0|d)+1,t.img=t.img||"img";var y=t.success;if(delete t.success,l){if(0===u.length)return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var p=i(t.photos),h=function(){u=[],p.find(t.img).each(function(e){var t=i(this);t.attr("layer-index",e),u.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(h(),0===u.length)return;if(n||p.on("click",t.img,function(){var e=i(this),n=e.attr("layer-index");r.photos(i.extend(t,{photos:{start:n,data:u,tab:t.tab},full:t.full}),!0),h()}),!n)return}s.imgprev=function(e){s.imgIndex--,s.imgIndex<1&&(s.imgIndex=u.length),s.tabimg(e)},s.imgnext=function(e,t){s.imgIndex++,s.imgIndex>u.length&&(s.imgIndex=1,t)||s.tabimg(e)},s.keyup=function(e){if(!s.end){var t=e.keyCode;e.preventDefault(),37===t?s.imgprev(!0):39===t?s.imgnext(!0):27===t&&r.close(s.index)}},s.tabimg=function(e){if(!(u.length<=1))return f.start=s.imgIndex-1,r.close(s.index),r.photos(t,!0,e)},s.event=function(){s.bigimg.hover(function(){s.imgsee.show()},function(){s.imgsee.hide()}),s.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),s.imgprev()}),s.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),s.imgnext()}),i(document).on("keyup",s.keyup)},s.loadi=r.load(1,{shade:!("shade"in t)&&.9,scrollbar:!1}),o(u[d].src,function(n){r.close(s.loadi),s.index=r.open(i.extend({type:1,id:"layui-layer-photos",area:function(){var a=[n.width,n.height],o=[i(e).width()-100,i(e).height()-100];if(!t.full&&(a[0]>o[0]||a[1]>o[1])){var r=[a[0]/o[0],a[1]/o[1]];r[0]>r[1]?(a[0]=a[0]/r[0],a[1]=a[1]/r[0]):r[0]<r[1]&&(a[0]=a[0]/r[1],a[1]=a[1]/r[1])}return[a[0]+"px",a[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+c("photos"),content:'<div class="layui-layer-phimg"><img src="'+u[d].src+'" alt="'+(u[d].alt||"")+'" layer-pid="'+u[d].pid+'"><div class="layui-layer-imgsee">'+(u.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(a?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(u[d].alt||"")+"</a><em>"+s.imgIndex+"/"+u.length+"</em></span></div></div></div>",success:function(e,i){s.bigimg=e.find(".layui-layer-phimg"),s.imgsee=e.find(".layui-layer-imguide,.layui-layer-imgbar"),s.event(e),t.tab&&t.tab(u[d],e),"function"==typeof y&&y(e)},end:function(){s.end=!0,i(document).off("keyup",s.keyup)}},t))},function(){r.close(s.loadi),r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){u.length>1&&s.imgnext(!0,!0)}})})}},o.run=function(t){i=t,n=i(e),l.html=i("html"),r.open=function(e){var t=new s(e);return t.index}},e.layui&&layui.define?(r.ready(),layui.define("jquery",function(t){r.path=layui.cache.dir,o.run(layui.$),e.layer=r,t("layer",r)})):"function"==typeof define&&define.amd?define('layerPop',["jquery"],function(){return o.run(e.jQuery),r}):function(){o.run(e.jQuery),r.ready()}()}(window);
define('pieceLayer',['layerPop'], function(layer){
    // require使用layer之前必须要线设置一下js文件的路径，否则会导致样式丢失
    var init = function() {
        layer.config({
            //layer.js所在的目录，可以是绝对目录，也可以是相对目录
            path: 'assets/js/libs/layer/'
        });
        return layer;
    };

    return {
        init: init
    };
});
// 左侧导航树组件,第一个参数为定义需要依赖其他模块的对象模块
define('pieceTree',[],function(){
    var $tree = $('#peice-tree');
    // 筛选出所有class名是child的span标签
    var $spanChilds = $tree.find('.child').filter(function() {
        return $(this).prop('nodeName') === 'SPAN';
    });
    var $clildLists = $tree.find('.child-list');

    // 给又二级菜单的项插入箭头
    var insertArrow = function() {
        var $arrow = $('<i class="icon fas fa-caret-right"></i>');
        $spanChilds.append($arrow);
    }

    var removeSlided = function() {
        var isSlided_list = $('.has-slided').length > 0;
        if(isSlided_list) {
            $('.has-slided').removeClass('has-slided');
        }
    }

    var hideALLChildList = function($that) {
        var $that = $that || false;
        var $childShow = $();
        if($that) {
            // 排除
            $childShow = $clildLists.not($that).filter(function() {
                return $(this).is(':visible');
            });
        } else {
            $childShow = $clildLists.filter(function() {
                return $(this).is(':visible');
            });
        }
        $childShow.slideUp();
    }

    var clickItem = function() {
        // 改为child元素 为了防止child-list冒泡
        $tree.on('click', '.child', function() {
            var $childList = $(this).next();
            var hasChildList = $childList.length > 0;
            // 当内部有二级菜单的情况
            if(hasChildList) {
                hideALLChildList($childList);
                // 除了本身其他的所有span.child都去掉高亮样式
                $spanChilds.not($(this)).removeClass('has-active');
                $(this).toggleClass('has-active');
                $childList.slideToggle(function() {
                    // 如果有展开的样式 那么就移除
                    removeSlided();
                });
            } else {
                // 如果没有二级菜单
                $('.has-active').removeClass('has-active');
                hideALLChildList();
                removeSlided();
            }
        });

        // 选中状态阻止二次点击
        $tree.on('click', 'a', function() {
            // 当前项有active样式时，阻止跳转
            if($(this).hasClass('active')) {
                return false;
            }
        })
    }


    var init = function(){
        insertArrow();
        clickItem();
    }
    
    return {
        init: init
    };
});
// 左侧导航树组件,第一个参数为定义需要依赖其他模块的对象模块
define('pieceTopNav',[],function(){
    var $topNav = $('#piece-top-nav');
    var $userInfo = $('.user-info', $topNav).eq(0);
    var $userMenu = $('.menu', $userInfo).eq(0);
    var $userMes = $('.mes', $userInfo).eq(0);
    var $reload = $('#reload');
    
    var menuHover = function() {
        $userInfo.hover(
            function() {
                $userMenu.slideDown();
                $userMes.addClass('show');
            },
            function() {
                $userMenu.slideUp();
                $userMes.removeClass('show');
            }
        )
    }

    var reload = function() {
        $reload.on('click', function() {
            window.location.reload();
        });
    }

    var init = function() {
        menuHover();
        reload();
    }

    return {
        init: init
    };
});
define('pieceTabBar',[],function(){
    var $tabBar = $('#piece-tab-bar');
    var $nowDate = $tabBar.find('.now-date').eq(0);
    var $text = $tabBar.find('.text').eq(0);
    var $back = $('#back');

    var getNowDate = function() {
        var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var week = now.getDay();

        return year + '年' + month +'月' + day + '日' + '<em>' + weekday[week] + '</em>';
    }

    var mingyan = function() {
        var jitangs = [
            '要做一个谦逊的人。善于倾听。三人行，必有我师。',
            '大多数不开心的人，往往低估了自己所拥有的，又高估了别人所拥有的。',
            '不同的人，为你做同一件事，你会感到天壤之别。因为我们在意的，往往不是人做的事，而只是做事的人。',
            '你越懂事，这世界就让你承受越多与年龄不符的痛苦，你越忍耐，这世界就给你越多需要忍耐的东西。',
            '不要试图去说服对你不敬或者讨厌你的人，你的言语改变不了任何人和事。很多时候，沉默是金不仅仅是种美德，更是种智慧。',
            '觉得自己做的到和不做的到，其实只在一念之间。',
            '滔滔红尘在身边流过，我们只是拥挤的人群之中一粒细微的粉尘，是时光长河里一朵渺小的浪花。',
            '到了一定年龄，便要学会寡言，每一句话都要有用，有重量。喜怒不形于色，大事淡然，有自己的底线。',
            '好的坏的我们都收下吧，然后一声不响，继续生活。',
            '信任是这个世界上最容易失去的东西，也是最难挽回的东西。',
            '人们平白消失，又无故再现，各奔东西，失去对方，相互追寻，最后又在几米开外找到彼此。',
            '只有摆脱过去，才能重获新生，只有自发地突破过去的成功模式，才能释放出更大的潜力。',
            '非淡泊无以明志，非宁静无以致远',
            '所谓成长，就是逼着你一个人，踉踉跄跄的受伤，跌跌撞撞的坚强。',
            '让你难过的事情，总有一天，你一定会笑着说出来。',
            '希望命运善待所有孤勇前行的人，包括她，包括你我。',
            '一个人成熟的标志，是学会狠心，学会独立，学会微笑，学会丢弃不值得的感情。',
            '如果你想要从未拥有过的东西，那么你必须做你从未做过的事。',
            '人生四大悲剧：穷得没钱做坏事，熟得没法做情侣，饿得不知吃什么，困得就是睡不着！',
            '人生路的尽头，仍然是路，只要你愿意走。',
            '越是想知道自己是不是忘记的时候，反而记得越清楚。',
            '活得累是因为心里装了多余的东西，跟吃饱了撑的是一个道理。',
            '那些你以为过不去的坎儿，早晚都会过去，要对时间有耐心。',
            '放不下的时候，多想想对方是怎么放下你的。',
            '经历深了，看到的人和事物不一样，那一定就会成熟一些吧，不会像现在这样，情绪一碰就碎的不行。',
            '成熟的人，不是没有浮躁，而是浮躁的时候，心灵始终不会偏离理性的航道。',
            '终于明白，有些路，只能一个人走，那些约好要同行的人，一起相伴雨季，走过年华，但有一天终究会在某个渡口散失。',
            '何必在乎别人看法，懂你的不用解释，不懂你的无需解释。',
            '没有人会感同身受，他们只是在努力的安慰你的苦痛，然后继续生活。',
            '有时候，我们做过的最艰难的选择，最终成了我们为自己做过的最棒的事。',
            '做好手中事,珍惜眼前人。',
            '如果耐不住寂寞，你就看不到繁华。',
            '少说多做，句句都会得到别人的重视；多说少做，句句都会受到别人的忽视。',
            '每一个成功者都有一个开始。勇于开始，才能找到成功。',
            '玉不啄，不成器；人不学，不知道。——《礼记》',
            '己所不欲，勿施于人。——孔子',
            '在人生道路上谦让三分，就能天宽地阔。——卡内基',
            '志坚者，功名之柱也。登山不以艰险而止，则必臻乎峻岭。',
            '我这个人走得很慢，但是我从不后退。——亚伯拉罕·林肯',
            '所有的胜利，与征服自己的胜利比起来，都是微不足道。',
            '只有把抱怨环境的情绪，化为上进的力量，才是成功的保证。——罗曼·罗兰',
            '沉浸于现实的忙碌之中，没有时间和精力思念过去，成功也就不会太远了。——雷音',
            '善良的人永远是受苦的，那忧苦的重担似乎是与生俱来的，因此只有忍耐。',
            '意志命运往往背道而驰，决心到最后会全部推倒。——莎士比亚',
            '征服自己，就能征服一切。',
            '在别人藐视的事中获得成功，是一件了不起的事，因为它证明不但战胜了自己，也战胜了别人。——蒙特兰',
            '凡是自强不息者，最终都会成功。——歌德',
            '人的才华就如海绵的水，没有外力的挤压，它是绝对流不出来的。流出来后，海绵才能吸收新的源泉。',
            '书痴者文必工，艺痴者技必良。——蒲松龄',
            '少壮不努力，老大徒伤悲。——《汉乐府长歌行》',
            '对于攀登者来说，失掉往昔的足迹并不可惜，迷失了继续前时的方向却很危险。',
            '立身以立学为先，立学以读书为本。——欧阳修',
            '一个有良知而纯洁的人，觉得人生是一件甜美而快乐的事。——列夫·托尔斯泰',
            '崇高的理想就像生长在高山上的鲜花，如果要摘下它，勤奋才能是攀登的绳索。',
            '人生就是学校。在那里，与其说好的教师是幸福，不如说好的教师是不幸。——海贝尔',
            '生活的道路一旦选定，就要勇敢地走到底，决不回头。——左拉',
            '取得成就时坚持不懈，要比遭到失败时顽强不屈更重要。——拉罗什夫科',
            '同在一个环境中生活，强者与弱者的分界就在于谁能改变它。',
            '创造，或者酝酿未来的创造。这是一种必要性：幸福只能存在于这种必要性得到满足的时候。——罗曼·罗兰',
            '未遭拒绝的成功决不会长久。',
            '成功的秘诀就在于多努力一次。为了成功，你努力了多少次？',
            '唯书籍不朽。——乔特',
            '人生是伟大的宝藏，我晓得从这个宝藏里选取最珍贵的珠宝。——佚名',
            '让珊瑚远离惊涛骇浪的侵蚀吗？那无异是将它们的美丽葬送。',
            '要知道对好事的称颂过于夸大，也会招来人们的反感轻蔑和嫉妒。——培根',
            '过去不等于未来。',
            '学而不思则罔，思而不学则殆。——孔子',
            '遇到困难时不要抱怨，既然改变不了过去，那么就努力改变未来。',
            '读书百遍，其义自见。——《三国志》',
            '人，就像钉子一样，一旦失去了方向，开始向阻力屈身，那么就失去了他们存在的价值。——兰道',
            '用爱心来做事，用感恩的心做人。',
            '成功永远属于那些爱拼搏的人。',
            '决心是成功的开始。',
            '人生是花，而爱便是花的蜜。——雨果',
            '你要对自己负责。虽然你不能改变外部环境不能改变季节不能改变风云，但是你能改变自己。——Jim·Rohn',
            '读书是易事，思索是难事，但两者缺一，便全无用处。——富兰克林',
            '决定一个人的一生，以及整个命运的，只是一瞬之间。——歌德',
            '理论彻底，策略准确。然后以排除万难坚定不移的勇气和精神向前干去，必有成功的一日。——邹韬奋',
            '少而好学，如日出之阳；壮而好学，如日中之光；志而好学，如炳烛之光。——刘向',
            '读万卷书，行万里路。——刘彝',
            '如果把生活比喻为创作的意境，那么阅读就像阳光。——池莉',
            '旧书不厌百回读，熟读精思子自知。——苏轼',
            '如果人只是为了自己而劳动，他也许能成为有名的学者绝顶的聪明人出色的诗人，但他决不可能成为真正的完人和伟人。——马克思',
            '死亡教会人一切，如同考试之后公布的结果――虽然恍然大悟，但为时晚矣！',
            '读不在三更五鼓，功只怕一曝十寒。——郭沫若',
            '唯有行动才能改造命运。',
            '天空黑暗到必须程度，星辰就会熠熠生辉。',
            '读书有三到，谓心到，眼到，口到。——朱熹',
            '书不仅仅是生活，而且是此刻过去和未来文化生活的源泉。——库法耶夫',
            '凡真心尝试助人者，没有不帮到自己的。',
            '最常见的勇气就是在日常生活中做到诚实和正直，能够抵制诱惑，敢于讲真话，表现自己真实的一面，而不要虚伪造作。',
            '人生富贵驹过隙，惟有荣名寿金石。——顾炎武',
            '意志坚强的人能把世界放在手中像泥块一样任意揉捏。——歌德',
            '天才是由于对事业的热爱感而发展起来的，简直能够说天才。',
            '一切节省，归根到底都归结为时间的节省。——马克思',
            '重复别人所说的话，只需要教育；而要挑战别人所说的话，则需要头脑。——玛丽·佩蒂博恩·普尔',
            '人生所贵在知已，四海相逢骨肉亲。——李贺',
            '光说不干，事事落空；又说又干，马到成功。',
            '三军可夺帅也，匹夫不可夺志也。——孔丘',
            '构成天才的决定因素就应是勤奋。——郭沫若',
            '韬略终须建新国，奋发还得读良书。——郭沫若',
            '战士的意志要象礁石一样坚定，战士的性格要像和风一样温柔。',
            '千里之行，始于足下。——老子',
            '既然我已经踏上这条道路，那么，任何东西都不应妨碍我沿着这条路走下去。——康德',
            '希望是人生的乳母。——科策布',
            '兴于《诗》，立于礼，成于乐。——孔子',
            '没有比人更高的山，没有比心更宽的海，人是世界的主宰。',
            '人生像曲曲折折的山涧流水，断了流，却又滚滚而来。——波普',
            '真正的价值并不在人生的舞台上，而在我们扮演的主角中。——席勒',
            '最大的骄傲于最大的自卑都表示心灵的最软弱无力。——斯宾诺莎',
            '生命不可能有两次，但许多人连一次也不善于度过。——吕凯特',
            '学习是劳动，是充满思想的劳动。——乌申斯基',
            '求乐的人生观，才是自然的人生观，真实的人生观。我们就应顺应自然，立在真实上，求得人生的光明，不可陷入勉强虚伪的境界，把真正人生都归幻灭。——李大钊',
            '执着追求和不断的分析，这是走向成功的双翼。不执着，便容易半途而废；不分析，便容易一条道走到天黑。',
            '行动是成功的阶梯，行动越多，登得越高。',
            '故立志者，为学之心也；为学者，立志之事也。——王阳明',
            '要体验人生，就要把握现实，相信现实。——拉蒂特',
            '在人生中第一要紧的是发现自己。为了这个目的，各位时常需要孤独和深思。——南森',
            '人，最大的敌人是自己。',
            '有勇气承担命运这才是英雄好汉。——黑塞',
            '时间就像海绵里的水，只要愿挤，总还是有的。——鲁迅',
            '瀑布对悬崖无可畏惧，所以唱出气势磅礴的生命之歌。',
            '感激每一个新的挑战，因为它会锻造你的意志和品格。——佚名',
            '先相信自己，然后别人才会相信你。——罗曼·罗兰',
            '读书之法，在循序而渐进，熟读而精思。——朱熹',
            '真的算得勇敢的人是那个最了解人生的幸福和灾患，然后勇往直前，担当起将来会发生的事故的人。——伯利克里',
            '书卷多情似故人，晨昏忧乐每相亲。——于谦',
            '太阳虽有黑点，却在奋力燃烧中树立了光辉的形象。',
            '在无限的时间的河流里，人生仅仅是微小又微小的波浪。——郭小川',
            '最具挑战性的挑战莫过于提升自我。——迈克尔·F·斯特利',
            '有勇气在自己生活中尝试解决人生新问题的人，正是那些使社会臻于伟大的人！那些仅仅循规蹈矩过活的人，并不是在使社会进步，只是在使社会得以维持下去。——泰戈尔',
            '必须记住我们学习的时间是有限的。时间有限，不只由于人生短促，更由于人事纷繁。我们就应力求把我们所有的时间用去做最有益的事情。——斯宾塞',
            '在茫茫沙漠，唯有前时进的脚步才是希望的象征。',
            '人生是一座能够采掘开拓的金矿，但总是因为人们的勤奋程度不一样，给予人们的回报也不相同。——佚名',
            '读书忌死读，死读钻牛角。——叶圣陶',
            '阅读的最大理由是想摆脱平庸，早一天就多一份人生的精彩；迟一天就多一天平庸的困扰。——余秋雨',
            '读书有三到，谓心到，眼到，口到。——朱熹',
            '下定决心必须要，才是成功的关键。',
            '卓越的人一大优点是：在不利与艰难的遭遇里百折不饶。——贝多芬',
            '没有失败，只有暂时停止的成功。',
            '无知识的人，其生命如同无叶子的树，缺少勃勃生机。——佚名',
            '人生有情泪沾衣，江水江花岂终极。——杜甫',
            '人若软弱就是自己最大的敌人；人若勇敢就是自己最好的朋友。',
            '谁和我一样用功，谁就会和我一样成功。——莫扎特',
            '我们若已理解最坏的，就再没有什么损失。——卡耐基',
            '黑发不知勤学早，白发方悔读书迟。——颜真卿',
            '她们把自己恋爱作为终极目标，有了爱人便什么都不要了，对社会作不了贡献，人生价值最少。——向警予',
            '读一切好书，就是和许多高尚的人谈话。——笛卡儿',
            '理想的人物不仅仅要在物质需要的满足上，还要在精神旨趣的满足上得到表现。——黑格尔',
            '知之者不如好之者，好之者不如乐之者。——孔子',
            '读书破万卷，下笔如有神。——杜甫',
            '对一个人来说，所期望的不是别的，而仅仅是他能全力以赴和献身于一种完美事业。——爱因斯坦',
            '人生有两出杯具。一是万念俱灰；另一是踌躇满志。——萧伯纳',
            '父亲问我人生有什么追求？我回答金钱和美女，父亲凶狠的打了我的脸；我回答事业与爱情，父亲赞赏的摸了我的头。',
            '所谓成功，就是在平凡中做出不平凡的坚持。',
            '所谓恶人，无论有过多么善良的过去，也已滑向堕落的道路而消逝其善良性；所谓善人，即使有过道德上不堪提及的过去，但他还是向着善良前进的人。——杜威',
            '自己打败自己是最可悲的失败，自己战胜自己是最可贵的胜利。',
            '一个人，只要知道付出爱与关心，她内心自然会被爱与关心充满。',
            '天下之事常成于困约，而败于奢靡。——陆游',
            '自己的饭量自己知道。——苏联',
            '没有斗争就没有功绩，没有功绩就没有奖赏，而没有行动就没有生活。——别林斯基',
            '读一本好书，就如同和一个高尚的人在交谈。——歌德',
            '过去一切时代的精华尽在书中。——卡莱尔',
            '活着，要有自己的价值，要作为一个强者存在于这个世界。——夏宁',
            '读一读关于人生真谛的描述，这对他摆脱他那落后于时代的老顽固思想是会有好处的。——奥尼尔',
            '真正伟大的人，是由行动使他人见识其不凡之处。',
            '书犹药也，善读之能够医愚。——刘向',
            '成功者绝不给自己软弱的借口。',
            '生活不是局限于人类追求自己的实际目标所进行的日常行动，而是显示了人类参加到一种宇宙韵律中来，这种韵律以形形色色的方式证明其自身的存在。——泰戈尔',
            '意志是一个强壮的盲人，倚靠在明眼的跛子肩上。——叔本华',
            '读过一本好书，像交了一个益友。——藏克家',
            '不要回避苦恼和困难，挺起身来向它挑战，进而克服它。——池田大作',
            '只有永远躺在泥坑里的人，才不会再掉进坑里。——黑格尔',
            '阅读一切好书如同和过去最杰出的人谈话。——笛卡儿',
            '只要有信心，人永远不会挫败。',
            '遇到困难时不要放弃，要记住，坚持到底就是胜利。',
            '生命不等于是呼吸，生命是活动。——卢梭',
            '志不立，天下无可成之事。',
            '学习需要有计划。',
            '志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中。',
            '目标的坚定是性格中最必要的力量源泉之一，也是成功的利器之一。没有它，天才会在矛盾无定的迷径中徒劳无功。',
            '人之所以能，是相信能。',
            '人生用物，各有天限；夏涝太多，必有秋旱。——许名奎',
            '自己打败自己的远远多于比别人打败的。',
            '瀑布跨过险峻陡壁时，才显得格外雄伟壮观。',
            '成功的秘诀，是在养成迅速去做的习惯，要趁着潮水涨得最高的一刹那，不但没有阻力，而且能帮忙你迅速地成功。——劳伦斯',
            '人生是短暂的，每个人都有一个一生，不会再多。——李尔克',
            '不要抱怨自己所处的环境，如果改变不了环境，那么就改变自己的心态。',
            '内外相应，言行相称。——韩非',
            '用最少的悔恨应对过去；用最少的浪费应对此刻；用最多的梦想应对未来。',
            '整个人生就是思想与劳动，劳动虽然是无闻的平凡的，却是不能间断的。——冈察洛夫',
            '读书是在别人思想的帮忙下，建立起自己的思想。——鲁巴金',
            '努力是成功之母。——塞万提斯',
            '发奋识遍天下字，立志读尽人间书。——苏轼',
            '最灵繁的人也看不见自己的背脊。——非洲',
            '自己活着，就是为了使别人过得更完美。——雷锋',
            '实现梦想比睡在床上的梦想更灿烂。',
            '懒人无法享受休息之乐。——拉布克',
            '学到很多东西的诀窍，就是一下子不要学很多。——洛克',
            '只有具备真才实学，既了解自己的力量又善于适当而谨慎地使用自己力量的人，才能在世俗事务中获得成功。——歌德',
            '人不能创造时机，但是它能够抓住那些已经出现的时机。',
            '今日应做的.事没有做，明天再早也是耽误了。——裴斯泰洛齐',
            '雄心壮志是茫茫黑夜中的北斗星。',
            '业精于勤，荒于嬉；行成于思，毁于随。——韩愈',
            '莫等闲，白了少年头，空悲切。——岳飞',
            '坚持意志伟大的事业需要始终不渝的精神。——伏尔泰',
            '业余生活要有好处，不要越轨。——华盛顿',
            '只有在人群中间，才能认识自己。——德国',
            '非淡泊无以明志，非宁静无以致远。——诸葛亮',
            '我的努力求学没有得到别的好处，只但是是愈来愈发觉自己的无知。——笛卡儿',
            '成功的道路上充满荆棘，苦战方能成功。',
            '合理安排时间，就等于节约时间。——培根',
            '只要功夫深，铁杵磨成针。',
            '理解挑战，就能够享受胜利的喜悦。——杰纳勒尔·乔治·S·巴顿',
            '阅读使人充实，会谈使人敏捷，写作使人精确。——培根',
            '自知之明是最难得的知识。——西班牙',
            '谁不向前看，谁就会面临许多困难。',
            '不怕读得少，只怕记不牢。——徐特立',
            '越是无能的人，越喜欢挑剔别人的错儿。——爱尔兰',
            '共同的事业，共同的斗争，能够使人们产生忍受一切的力量。——奥斯特洛夫斯基',
            '奇文共欣赏，疑义相如析。——陶渊明',
            '书到用时方恨少，事非经过不知难。——陆游',
            '谁若游戏人生，他就一事无成；谁不主宰自己，永远是一个奴隶。——歌德',
            '路漫漫其修道远，吾将上下而求索。——屈原',
            '要使民族自立于世界之林，就要自己看得起自己。——吉鸿昌',
            '我们唯一不会改正的缺点是软弱。——拉罗什福科',
            '当你能飞的时候就不要放弃飞；当你有梦的时候就不要放弃梦。',
            '学问是异常珍贵的东西，从任何源泉吸收都不可耻。——阿卜·日·法拉兹',
            '苦难与幸福一样，都是生命盛开的花朵。',
            '问渠那得清如许，为有源头活水来。——朱熹',
            '越是没有本领的就越加自命不凡。——邓拓',
            '自己的鞋子，自己知道紧在哪里。——西班牙',
            '非学无以广才，非志无以成学。——诸葛亮',
            '熟读唐诗三百首，不会作诗也会吟。——孙洙《唐诗三百首序》',
            '人生如音乐，要用听觉感情和本能谱成，不能只凭规律。——Samuel·Butlev',
            '人的一生是短的，但如果卑劣地过这一生，就太长了。——莎士比亚',
            '资料充实的生命就是长久的生命，我们要以此为而不是以时间来衡量生命。——塞涅卡',
            '奋斗令我们的生活充满生机，职责让我们的生命充满好处，常遇困境说明你在进步，常有压力，说明你有目标。',
            '目标再远大，终离不开信念去支撑。',
            '即使行动导致错误，却也带来了学习与成长；不行动则是停滞与萎缩。',
            '成功的信念在人脑中的作用就如闹钟，会在你需要时将你唤醒。',
            '深窥自己的心，而后发觉一切的奇迹在你自己。——培根',
            '我们关心的，不是你是否失败了，而是你对失败能否无怨。——林肯',
            '人要有足够的压力，才能超越颠峰。',
            '炫耀是需要观众的，而炫耀恰恰让我们失去观众。',
            '人生无论在极坏的时候或是最好的时候，总是美的，而且向来是美的。——德莱塞',
            '说话不在多，在于说得对，说中了事和理的要害，能打动听者的心。——谢觉哉',
            '所谓高质量人生，其实就是平衡不断遭到破坏和重建。——赵鑫珊',
            '人生的价值，并不是用时间，而是用深度去衡量的。——列夫·托尔斯泰',
            '一个真正的人，就应为人民用尽自己的才智，专长和精力，再离开人间。不然，他总会感受到遗憾，浪费了有限的生命。——曹禺',
            '书籍把我们引入最完美的社会，使我们认识各个时代的伟大智者。——史美尔斯',
            '士搏出惊涛骇流而不沉沦，懦夫在风平浪静也会溺水。',
            '问渠哪得清如许，为有源头活水来。——朱熹',
            '自卑是剪了双翼的飞鸟，难上青天，这两者都是成才的大忌。',
            '不要生气要争气，不要看破要突破，不要嫉妒要欣赏，不要拖延要积极，不要心动要行动。',
            '少说多做，句句都会得到别人的重视；多说少做，句句都会受到别人的忽视。',
            '做好手中事，珍惜眼前人。',
            '寒冷到了极致时，太阳就要光临。',
            '微笑比皱眉好看，请求比呵斥自然。',
            '还能冲动，表示你还对生活有激情，总是冲动，表示你还不懂生活。',
            '成功在优点的发挥，失败是缺点的累积。',
            '强者向人们揭示的是确认人生的价值，弱者向人们揭示的却是对人生的怀疑。',
            '每个人的一生都有许多梦想，但如果其中一个不断搅扰着你，剩下的就仅仅是行动了。',
            '学而不思则罔，思而不学则殆。——孔子'
        ];
        let len = jitangs.length;
        let num = Math.floor(Math.random() * len);
        return jitangs[num];
    }

    var goback = function() {
        $back.on('click', function() {
            window.history.go(-1);
        });
    }

    var init = function() {
        var today = getNowDate();
        var text = mingyan();
        $nowDate.html(today);
        $text.html(text);
        goback();
    }
    
    return {
        init: init
    };
});
// 所有页面都运行的函数,注意 这个必须在jq之后引入
define('piecePublic',[
    'jquery',
    'pieceLayer',
    'pieceTree',
    'pieceTopNav',
    'pieceTabBar'
], function(
    $,
    player,
    tree,
    nav,
    bar
) {
    
    var pageLoaded = function() {
        // 页面加载完成 开启所有元素的transition动画
        $(document).ready(function(){ 
            　$("body").removeClass("preload");
        }); 
    };
    // 带有disable的类点击不执行任何操作
    var disable = function () {
      $('.disable').on('click', function () {
          return false;
      });
    };


    var init = function() {
        // 将JQ挂载到全局
        window.$ = $;
        // 将弹窗组件挂到全局
        window.layer = player.init();
        pageLoaded();
        disable();
        tree.init();
        nav.init();
        bar.init();
    };

    return {
        init: init
    }
});
require(
[
    'pieceEditor',
    'pieceUploader',
    'pieceValidate',
    'pieceAppendfiles',
    'piecePublic'
], function (
    editor,
    uploader,
    validate,
    appendfiles,
    spublic
) {
    spublic.init();

    // 编辑器的启动
    editor.init({
        // 图片上传的路径
        server: 'index.php?controller=upload',
        // 上传图片表单的name属性
        uploadFileName: 'articleimg',
        // 如果不使用传统的方法提交富文本就填false
        textareaID: 'article-content'
    });

    // webuploader的启动与配置
    var $fileList = $('#file-list'),
        $fileUpload = $('#file-upload'),
        state = 'pending';
    var zipup_base_tpl = function (file) {
        var tpl = '<li id="' + file.id + '">' +
            '<div class="left">' +
            '<i class="icon fal fa-file-archive"></i>' +
            '<p class="file-name">' + file.name + '</p>' +
            '<span class="precent">0%</span>' +
            '<div class="progress">' +
            '<cite style="width: 0%;" class="progress-bar"></cite>' +
            '</div>' +
            '</div>' +
            '<div class="right">' +
            '<div class="tips">' +
            '等待上传' +
            '</div>' +
            '<div class="delete">' +
            '<i class="icon fal fa-times-circle"></i>' +
            '</div>' +
            '</div>' +
            '<input type="hidden" name="uploadfiles[]" value="" class="upfile-url"> ' +
            '<input type="hidden" name="uploadnames[]" value="" class="upfile-name"> ' +
            '</li>';
        return $(tpl);
    };
    var zipLoader = uploader.init({
        server: 'index.php?controller=upload&model=blogzip',
        pick: {
            id: '#picker',
            // 限制多文件上传
            multiple: false
        },
        chunked: true,//开启分片上传
        dnd: "#drag-box",
        accept: {
            title: 'Zip',
            extensions: 'zip',
            mimeTypes: 'application/zip,application/x-zip,application/x-zip-compressed',
        },
        // 设置文件上传域的name
        fileVal: 'uploadfiles',
        // 验证文件总数量, 超出则不允许加入队列,这里由于会导致逻辑问题所以取消
        // fileNumLimit: 10
    });
    zipLoader.on('all', function (type) {
        if (type === 'startUpload') {
            state = 'uploading';
        } else if (type === 'stopUpload') {
            state = 'paused';
        } else if (type === 'uploadFinished') {
            state = 'done';
        }

        if (state === 'uploading') {
            $fileUpload.addClass('disable');
        }
    });
    // 当文件被加入队列之前触发，如果文件列表中有10条li时候,提示不能上传
    // zipLoader.on( 'beforeFileQueued', function( file ) {
    //     var fileListItemsCount = $fileList.find('li').size();
    //     if (fileListItemsCount > 9) {
    //         alert('上传文件不能超过10条!');
    //         return false;
    //     }
    // });
    // 添加到上传队列
    zipLoader.on('fileQueued', function (file) {
        $item = zipup_base_tpl(file);
        $fileList.append($item);
        if ($fileUpload.hasClass('disable')) {
            $fileUpload.removeClass('disable');
        }
    });
    // 当文件被移出上传队列时候触发
    zipLoader.on('fileDequeued', function (file) {
        // 获取文件统计信息
        var stats = zipLoader.getStats();
        setTimeout(function () {
            var hasleft = ($fileList.find('li').length > 0 && stats.queueNum === 0);
            if (!hasleft) {
                $fileUpload.addClass('disable');
            }
        }, 100);
    });
    // 文件上传过程中创建进度条实时显示。
    zipLoader.on('uploadProgress', function (file, percentage) {
        var $li = $('#' + file.id),
            $precent = $li.find('.precent'),
            $progress = $li.find('.progress-bar'),
            $tips = $li.find('.tips');
        var percent = percentage * 100 + '%';
        $tips.text('正在上传');
        $precent.text(percent);
        $progress.css('width', percent);
    });
    // 上传是否成功或失败的回调
    zipLoader.on('uploadSuccess', function (file, response) {
        var $fileLi = $('#' + file.id);
        // console.log(response);
        if (response.error === 0) {
            $fileLi.find('.tips').text('上传成功');
            $fileLi.find('.upfile-url').val(response.data[0]);
            $fileLi.find('.upfile-name').val(response.names[0]);
            var $filenameNew = $('<a class="file-name" download href="' + response.data[0] + '">' + file.name + '</a>')
            $fileLi.find('.file-name').replaceWith($filenameNew);
        } else {
            $fileLi.find('.tips').text('上传失败');
            $fileLi.find('.progress').fadeOut();
        }
    });
    zipLoader.on('uploadError', function (file, response) {
        var $fileLi = $('#' + file.id);
        $fileLi.find('.tips').text('上传失败');
        $fileLi.find('.progress').fadeOut();
    });
    zipLoader.on('uploadComplete', function (file) {
        $fileUpload.removeClass('disable');
    });
    // 点击删除上传队列的文件, 同时中断传输
    $fileList.on('click', '.delete', function () {
        var $fileLi = $(this).parents('li');
        var fileId = $fileLi.attr('id');
        var fileUrl = $fileLi.find('.upfile-url').eq(0).val();
        var fileName = $fileLi.find('.upfile-name').eq(0).val();
        // 是否已经上传,上传后会有url和名字
        var hasuploaded = (fileUrl.indexOf('http://') > -1 && fileName.length > 0);
        var msg = '删除成功';

        layer.confirm('确定要删除上传的附件吗？', {
            btn: ['确定', '取消'] //按钮
        }, function () {
            var loading = layer.load(2, {
                shade: [0.1,'#fff'] //0.1透明度的白色背景
            });
            // 判断文件是否在传输中
            if (zipLoader.isInProgress()) {
                zipLoader.cancelFile(fileId);
            }
            // 已经上传添加的，就删除服务器上的文件
            if (hasuploaded) {
                $.ajax({
                    // 将异步处理改为同步
                    async: false,
                    url: 'index.php?controller=upload&model=delfile',
                    type: 'POST',
                    dataType: 'json',
                    data: {url: fileUrl}, // 携带到服务器的数据，后台用$_post['url]接收
                    success: function (res) {
                        console.log(res);
                        if (res.error != 0) {
                            msg = res.title + ',' + res.msg;
                        } else {
                            $fileLi.remove();
                        }
                    },
                    error: function (res) {
                        console.log(res.responseText);
                        msg = '删除失败！请刷新重试';
                    }
                });
            } else {
                // 如果fileId存在那么就是通过插件动态上传的那么就移除
                fileId && zipLoader.removeFile(fileId, true);
                $fileLi.remove();
            }
            layer.close(loading);
            layer.msg(msg);

        });

    });
    // 点击上传文件
    $fileUpload.on('click', function () {
        console.log(state);
        if (state !== 'uploading') {
            zipLoader.upload();
        }
    });


    // 点击按钮动态生成元素,针对不同功能单独制作
    appendfiles.createInput({
        btnName: '#addAnnex-btn',
        eleContainer: '#addAnnex-container'
    });

    // 表单验证
    validate.init({
        class: 'validate',
        // 传入需要将name替换成appendfiles-name[]形式，数组中的是class名称
        // 如果没有的话就传入false
        nameArrCls: ['appendfiles-name', 'appendfiles']
    });

    // $('#piece-editor').on('click', '.w-e-icon-fullscreen', function () {
    //     console.log('aa')
    //     $('.piece-body-main').addClass('editor-fullscreen');
    // })
    // 给编辑器加上特定的文本样式
    $('#piece-editor').find('.w-e-text-container').addClass('entry');

    // 预览图上传
    var Preview = function () {
        function preview() {
            this.$input = $('#preview-input');
            this.$picker = $('#preview-picker');
            this.loader = uploader.init({
                server: 'index.php?controller=upload&model=preview',
                auto: true,
                pick: {
                    id: '#preview-picker',
                    // 限制多文件上传
                    multiple: false
                },
                chunked: true,//开启分片上传
                accept: {
                    title: 'Images',
                    extensions: 'gif,jpg,jpeg,bmp,png',
                    mimeTypes: 'image/*'
                },
                compress: false,//webuploader默认压缩图片,设置compress:false，可以按照原始比例上传图片
                fileVal: 'article-preview',
                threads: 1, //上传并发数。允许同时最大上传进程数,为了保证文件上传顺序
                // 验证文件总数量, 超出则不允许加入队列
                fileNumLimit: 1,
                // 验证文件总大小 不能超过6M
                fileSizeLimit: 6291456,
                // 单个文件大小不可以超过6M
                fileSingleSizeLimit: 6291456
            });
            this.init();
        }
        preview.prototype = {
            success: function() {
                var self = this;
                // 上传是否成功或失败的回调
                this.loader.on('uploadSuccess', function (file, response) {
                    // console.log(response);
                    if (response.error === 0) {
                        self.$input[0].value = response.data;
                    } else {
                        alert('图片上传失败！');
                    }
                });
            },
            error: function() {
                // 上传失败的回调
                this.loader.on('uploadError', function (file, response) {
                    alert('上传失败，请刷新页面重试！');
                });
            },
            reset: function() {
                var self = this;
                // 每次点击的时候让uploader重置，然后只能选择一张图片
                this.$picker.on('click', function () {
                    self.loader.reset();
                });
            },
            init: function () {
                this.success();
                this.error();
                this.reset();
            }
        };
        new preview();
    }();

});
define("app/blog-editor", function(){});


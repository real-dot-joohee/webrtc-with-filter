!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!w[e]||!b[e])return;for(var n in b[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--h&&0===m&&E()}(e,n),t&&t(e,n)};var n,r=!0,o="f94c8d7f2f1acf891e69",i=1e4,c={},a=[],d=[];function u(e){var t=_[e];if(!t)return P;var r=function(r){return t.hot.active?(_[r]?-1===_[r].parents.indexOf(e)&&_[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),P(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===s&&f("prepare"),m++,P.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===s&&(g[e]||x(e),0===m&&0===h&&E())}},r.t=function(e,t){return 1&t&&(e=r(e)),P.t(e,-2&t)},r}var l=[],s="idle";function f(e){s=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var p,v,y,h=0,m=0,g={},b={},w={};function O(e){return+e+""===e?+e:e}function j(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=P.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(i).then(function(e){if(!e)return f("idle"),null;b={},g={},w=e.c,y=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});v={};return x(8),"prepare"===s&&0===m&&0===h&&E(),t})}function x(e){w[e]?(b[e]=!0,h++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=P.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):g[e]=!0}function E(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return D(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(O(n));e.resolve(t)}}function D(t){if("ready"!==s)throw new Error("apply() is only allowed in ready status");var n,r,i,d,u;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((d=_[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<d.parents.length;a++){var u=d.parents[a],l=_[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),p(n[u],[i])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var j in v)if(Object.prototype.hasOwnProperty.call(v,j)){var x;u=O(j);var E=!1,D=!1,k=!1,S="";switch((x=v[j]?l(u):{type:"disposed",moduleId:j}).chain&&(S="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+x.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(x),t.ignoreUnaccepted||(E=new Error("Aborted because "+u+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(x),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(x),k=!0;break;default:throw new Error("Unexception type "+x.type)}if(E)return f("abort"),Promise.reject(E);if(D)for(u in g[u]=v[u],p(m,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,u)&&(h[u]||(h[u]=[]),p(h[u],x.outdatedDependencies[u]));k&&(p(m,[x.moduleId]),g[u]=b)}var H,I=[];for(r=0;r<m.length;r++)u=m[r],_[u]&&_[u].hot._selfAccepted&&I.push({module:u,errorHandler:_[u].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,T,U=m.slice();U.length>0;)if(u=U.pop(),d=_[u]){var A={},q=d.hot._disposeHandlers;for(i=0;i<q.length;i++)(n=q[i])(A);for(c[u]=A,d.hot.active=!1,delete _[u],delete h[u],i=0;i<d.children.length;i++){var R=_[d.children[i]];R&&((H=R.parents.indexOf(u))>=0&&R.parents.splice(H,1))}}for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(d=_[u]))for(T=h[u],i=0;i<T.length;i++)M=T[i],(H=d.children.indexOf(M))>=0&&d.children.splice(H,1);for(u in f("apply"),o=y,g)Object.prototype.hasOwnProperty.call(g,u)&&(e[u]=g[u]);var L=null;for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(d=_[u])){T=h[u];var B=[];for(r=0;r<T.length;r++)if(M=T[r],n=d.hot._acceptedDependencies[M]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(T)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:T[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<I.length;r++){var C=I[r];u=C.module,a=[u];try{P(u)}catch(e){if("function"==typeof C.errorHandler)try{C.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||L||(L=e)}}return L?(f("fail"),Promise.reject(L)):(f("idle"),new Promise(function(e){e(m)}))}var _={};function P(t){if(_[t])return _[t].exports;var r=_[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:j,apply:D,status:function(e){if(!e)return s;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:c[e]};return n=void 0,t}(t),parents:(d=a,a=[],d),children:[]};return e[t].call(r.exports,r,r.exports,u(t)),r.l=!0,r.exports}P.m=e,P.c=_,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="./dist",P.h=function(){return o},u(24)(P.s=24)}({0:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return d}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return l}),n.d(t,"g",function(){return s}),n.d(t,"d",function(){return v});var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=document.getElementById(e);return n||((n=document.createElement(t)).id=e,n.style.display="none",document.body.append(n)),n},i=function(){d().then(f).catch(p)},c=function(){var e=o("loading"),t=o("permission"),n=o("content");return{notSupport:o("not_support"),loading:e,permission:t,content:n}},a=function(){var e=o("video","video"),t=(o("output","canvas"),o("buffer","canvas"));return{video:e,output:output,buffer:t}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise(function(n,r){t.call(navigator,e,n,r)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),window.navigator.mediaDevices.getUserMedia(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({audio:!1,video:{facing:"user"}},e))},u=function(){var e=c(),t=e.loading,n=e.notSupport;t.style.display="none",n.style.display="block"},l=function(){var e=c(),t=e.loading,n=e.content,r=e.permission;t.style.display="none",r.style.display="none",n.style.display="block"},s=function(){var e=c(),t=e.loading,n=e.content,r=e.permission;t.style.display="none",r.style.display="block",n.style.display="none"},f=function(e){var t=a(),n=t.video,r=t.output,o=t.buffer;n.addEventListener("canplay",function(){l(),o.width=r.width=n.videoWidth,o.height=r.height=n.videoHeight}),n.srcObject=e,n.play(),window.devicePixelRatio=1},p=function(e){var t=c(),n=t.loading,r=t.permission;n.style.display="none",r.style.display="block"},v=function(){return!function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"webm";return e||(e=document.createElement("video")),""!==e.canPlayType({ogg:'video/ogg; codecs="theora"',h264:'video/mp4; codecs="avc1.42E01E"',webm:'video/webm; codecs="vp8, vorbis"',vp9:'video/webm; codecs="vp9"',hls:'application/x-mpegURL; codecs="avc1.42E01E"'}[t]||t)}()}},24:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(6),i=n.n(o);function c(){var e=document.getElementById("video"),t=document.getElementById("canvas"),n=t.getContext("2d"),r=new tracking.ObjectTracker("eye");e.addEventListener("canplay",function(){document.querySelector("#loading").style.display="none",document.querySelector("#content").style.display="block"}),r.setStepSize(1.7),tracking.track("#video",r,{camera:!0}),r.on("track",i()(function(e){n.clearRect(0,0,t.width,t.height),function(e){var t=document.getElementById("canvas").getContext("2d");e.data.forEach(function(e){t.strokeStyle="#a64ceb",t.strokeRect(e.x,e.y,e.width,e.height),t.font="11px Helvetica",t.fillStyle="#fff",t.fillText("x: "+e.x+"px",e.x+e.width+5,e.y+11),t.fillText("y: "+e.y+"px",e.x+e.width+5,e.y+22)})}(e)},500))}window.plot=function(e,t,n,r){var o=document.createElement("div");document.querySelector(".demo-container").appendChild(o),o.classList.add("rect"),o.style.width=n+"px",o.style.height=r+"px",o.style.left=img.offsetLeft+e+"px",o.style.top=img.offsetTop+t+"px"},window.onload=function(){Object(r.b)().then(c).catch(r.f)}},26:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},6:function(e,t,n){(function(t){var n="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,f=l||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,y=Math.min,h=function(){return f.Date.now()};function m(e,t,r){var o,i,c,a,d,u,l=0,s=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(n);function m(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function w(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-l>=c}function O(){var e=h();if(w(e))return j(e);d=setTimeout(O,function(e){var n=t-(e-u);return f?y(n,c-(e-l)):n}(e))}function j(e){return d=void 0,p&&o?m(e):(o=i=void 0,a)}function x(){var e=h(),n=w(e);if(o=arguments,i=this,u=e,n){if(void 0===d)return function(e){return l=e,d=setTimeout(O,t),s?m(e):a}(u);if(f)return d=setTimeout(O,t),m(u)}return void 0===d&&(d=setTimeout(O,t)),a}return t=b(t)||0,g(r)&&(s=!!r.leading,c=(f="maxWait"in r)?v(b(r.maxWait)||0,t):c,p="trailing"in r?!!r.trailing:p),x.cancel=function(){void 0!==d&&clearTimeout(d),l=0,o=u=i=d=void 0},x.flush=function(){return void 0===d?a:j(h())},x}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==o}(e))return r;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||d.test(e)?u(e.slice(2),n?2:8):c.test(e)?r:+e}e.exports=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return g(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),m(e,t,{leading:o,maxWait:t,trailing:i})}}).call(this,n(26))}});
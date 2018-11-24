!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!b[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===y&&E()}(e,n),t&&t(e,n)};var n,r=!0,o="038f1727cb9178feb808",i=1e4,c={},a=[],d=[];function u(e){var t=D[e];if(!t)return _;var r=function(r){return t.hot.active?(D[r]?-1===D[r].parents.indexOf(e)&&D[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),_(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return _[e]},set:function(t){_[e]=t}}};for(var i in _)Object.prototype.hasOwnProperty.call(_,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===s&&f("prepare"),y++,_.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===s&&(m[e]||O(e),0===y&&0===g&&E())}},r.t=function(e,t){return 1&t&&(e=r(e)),_.t(e,-2&t)},r}var l=[],s="idle";function f(e){s=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var p,h,v,g=0,y=0,m={},x={},b={};function w(e){return+e+""===e?+e:e}function F(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=_.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(i).then(function(e){if(!e)return f("idle"),null;x={},m={},b=e.c,v=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});h={};return O(10),"prepare"===s&&0===y&&0===g&&E(),t})}function O(e){b[e]?(x[e]=!0,g++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=_.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):m[e]=!0}function E(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return j(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function j(t){if("ready"!==s)throw new Error("apply() is only allowed in ready status");var n,r,i,d,u;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((d=D[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<d.parents.length;a++){var u=d.parents[a],l=D[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),p(n[u],[i])):(delete n[u],t.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var g={},y=[],m={},x=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var F in h)if(Object.prototype.hasOwnProperty.call(h,F)){var O;u=w(F);var E=!1,j=!1,I=!1,P="";switch((O=h[F]?l(u):{type:"disposed",moduleId:F}).chain&&(P="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+O.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(E=new Error("Aborted because "+u+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(O),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),I=!0;break;default:throw new Error("Unexception type "+O.type)}if(E)return f("abort"),Promise.reject(E);if(j)for(u in m[u]=h[u],p(y,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,u)&&(g[u]||(g[u]=[]),p(g[u],O.outdatedDependencies[u]));I&&(p(y,[O.moduleId]),m[u]=x)}var H,A=[];for(r=0;r<y.length;r++)u=y[r],D[u]&&D[u].hot._selfAccepted&&A.push({module:u,errorHandler:D[u].hot._selfAccepted});f("dispose"),Object.keys(b).forEach(function(e){!1===b[e]&&function(e){delete installedChunks[e]}(e)});for(var M,C,k=y.slice();k.length>0;)if(u=k.pop(),d=D[u]){var S={},B=d.hot._disposeHandlers;for(i=0;i<B.length;i++)(n=B[i])(S);for(c[u]=S,d.hot.active=!1,delete D[u],delete g[u],i=0;i<d.children.length;i++){var L=D[d.children[i]];L&&((H=L.parents.indexOf(u))>=0&&L.parents.splice(H,1))}}for(u in g)if(Object.prototype.hasOwnProperty.call(g,u)&&(d=D[u]))for(C=g[u],i=0;i<C.length;i++)M=C[i],(H=d.children.indexOf(M))>=0&&d.children.splice(H,1);for(u in f("apply"),o=v,m)Object.prototype.hasOwnProperty.call(m,u)&&(e[u]=m[u]);var T=null;for(u in g)if(Object.prototype.hasOwnProperty.call(g,u)&&(d=D[u])){C=g[u];var U=[];for(r=0;r<C.length;r++)if(M=C[r],n=d.hot._acceptedDependencies[M]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(C)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:C[r],error:e}),t.ignoreErrored||T||(T=e)}}}for(r=0;r<A.length;r++){var W=A[r];u=W.module,a=[u];try{_(u)}catch(e){if("function"==typeof W.errorHandler)try{W.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||T||(T=e)}}return T?(f("fail"),Promise.reject(T)):(f("idle"),new Promise(function(e){e(y)}))}var D={};function _(t){if(D[t])return D[t].exports;var r=D[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:F,apply:j,status:function(e){if(!e)return s;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:c[e]};return n=void 0,t}(t),parents:(d=a,a=[],d),children:[]};return e[t].call(r.exports,r,r.exports,u(t)),r.l=!0,r.exports}_.m=e,_.c=D,_.d=function(e,t,n){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(_.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)_.d(n,r,function(t){return e[t]}.bind(null,r));return n},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="./dist",_.h=function(){return o},u(27)(_.s=27)}({0:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return c});var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=document.getElementById(e);return n||((n=document.createElement(t)).id=e,n.style.display="none",document.body.append(n)),n},o=function(){a().then(d).catch(u)},i=function(){return{loading:r("loading"),permission:r("permission"),content:r("content")}},c=function(){var e=r("video","video"),t=(r("output","canvas"),r("buffer","canvas"));return{video:e,output:output,buffer:t}},a=function(){return window.navigator.mediaDevices.getUserMedia({audio:!1,video:{facing:"user"}})},d=function(e){var t=c(),n=t.video,r=t.output,o=t.buffer,a=i(),d=a.loading,u=a.content;n.addEventListener("canplay",function(){d.style.display="none",u.style.display="block",o.width=r.width=n.videoWidth,o.height=r.height=n.videoHeight}),n.srcObject=e,n.play(),window.devicePixelRatio=1},u=function(e){var t=i(),n=t.loading,r=t.permission;n.style.display="none",r.style.display="block"}},27:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var r=n(0);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i,c,a=["0x1F601","0x1F602","0x1F603","0x1F604","0x1F605","0x1F606","0x1F609","0x1F60A","0x1F60B","0x1F60C","0x1F60D","0x1F60F","0x1F612","0x1F613","0x1F614","0x1F616","0x1F618","0x1F61A","0x1F61C","0x1F61D","0x1F61E","0x1F620","0x1F621","0x1F622","0x1F623","0x1F624","0x1F625","0x1F628","0x1F629","0x1F62A","0x1F62B","0x1F62D","0x1F630","0x1F631","0x1F632","0x1F633","0x1F635","0x1F637","0x1F638","0x1F639","0x1F63A","0x1F63B","0x1F63C","0x1F63D","0x1F63E","0x1F63F","0x1F640","0x1F645","0x1F646","0x1F647","0x1F648","0x1F649","0x1F64A","0x1F64B","0x1F64C","0x1F64D","0x1F64E","0x1F64F"];function d(e){for(var t,n,r=e.concat([]),o=r.length;0!==o;)n=Math.floor(Math.random()*o),t=r[o-=1],r[o]=r[n],r[n]=t;return r}function u(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function l(){(c=new fabric.Canvas("fabric",{width:640,height:480})).getContext().canvas.width=640,c.getContext().canvas.height=480,function(e){var t=document.getElementById("delete");fabric.loadSVGFromString(t.outerHTML,function(e,t){var n=fabric.util.groupSVGElements(e,t),r={left:c.getWidth()/2,top:c.getHeight()-30,fill:"#77f",originX:"center",originY:"center",selectable:!1,hasBorders:!1,opacity:0,hasControls:!1,name:"deleteIcon"};n.set(r);var i=new fabric.Rect(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({},r,{width:50,height:50,name:"deleteIcon"}));n.scaleToWidth(50),n.scaleToHeight(50),c.add(i,n).renderAll()})}(),c.on({"object:moving":function(e){e.target.setCoords(),c.forEachObject(function(t){t!==e.target&&"deleteIcon"===t.name&&t.set("opacity",e.target.intersectsWithObject(t)?.8:.4)})},"object:moved":function(e){e.target.setCoords();var t=c.getObjects().filter(function(e){return"deleteIcon"===e.name});e.target.intersectsWithObject(t[0])&&c.remove(e.target),t.forEach(function(e){e.set("opacity",0)})}}),i=d(a),s(),s(),s()}function s(){i.length<1&&(i=d(a));var e=u(25,50),t=new fabric.Textbox(String.fromCodePoint(i.pop()),{top:u(10,470),left:u(10,630),angle:u(-180,180),fontSize:e,hasBorders:!1,hasControls:!1});c.add(t).renderAll()}n.d(t,"saveImage",function(){return x});var f=Object(r.a)(),p=f.video,h=f.buffer,v=f.output,g=document.getElementById("save"),y=document.getElementById("add");function m(){var e=h.getContext("2d"),t=v.getContext("2d");h.width=p.videoWidth,h.height=p.videoHeight,e.translate(p.videoWidth,0),e.scale(-1,1),e.drawImage(p,0,0),t.drawImage(h,0,0),window.requestAnimationFrame(m)}function x(){var e=document.createElement("a"),t=document.createElement("canvas"),n=t.getContext("2d"),r=c.getContext().canvas;t.width=p.videoWidth,t.height=p.videoHeight,n.drawImage(v,0,0),n.drawImage(r,0,0);var o=t.toDataURL("image/png").replace("image/png","image/octet-stream");e.setAttribute("download","canvasTest.png"),e.setAttribute("href",o),e.click()}function b(){m(),l()}document.addEventListener("DOMContentLoaded",function(){g.addEventListener("click",x),y.addEventListener("click",s),p.addEventListener("canplay",b),Object(r.b)()})}});
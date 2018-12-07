!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!w[e]||!b[e])return;for(var t in b[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===m&&j()}(e,t),n&&n(e,t)};var t,r=!0,o="f94c8d7f2f1acf891e69",i=1e4,c={},d=[],a=[];function s(e){var n=P[e];if(!n)return x;var r=function(r){return n.hot.active?(P[r]?-1===P[r].parents.indexOf(e)&&P[r].parents.push(e):(d=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),d=[]),x(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(n){x[e]=n}}};for(var i in x)Object.prototype.hasOwnProperty.call(x,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===l&&p("prepare"),m++,x.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===l&&(g[e]||D(e),0===m&&0===y&&j())}},r.t=function(e,n){return 1&n&&(e=r(e)),x.t(e,-2&n)},r}var u=[],l="idle";function p(e){l=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var f,v,h,y=0,m=0,g={},b={},w={};function E(e){return+e+""===e?+e:e}function O(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return r=e,p("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=x.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(i).then(function(e){if(!e)return p("idle"),null;b={},g={},w=e.c,h=e.h,p("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});v={};return D(7),"prepare"===l&&0===m&&0===y&&j(),n})}function D(e){w[e]?(b[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=x.p+""+e+"."+o+".hot-update.js",n.appendChild(t)}(e)):g[e]=!0}function j(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return _(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(E(t));e.resolve(n)}}function _(n){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var t,r,i,a,s;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=P[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],u=P[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(u.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),f(t[s],[i])):(delete t[s],n.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var y={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var O in v)if(Object.prototype.hasOwnProperty.call(v,O)){var D;s=E(O);var j=!1,_=!1,I=!1,k="";switch((D=v[O]?u(s):{type:"disposed",moduleId:O}).chain&&(k="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+D.moduleId+k));break;case"declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+k));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(D),n.ignoreUnaccepted||(j=new Error("Aborted because "+s+" is not accepted"+k));break;case"accepted":n.onAccepted&&n.onAccepted(D),_=!0;break;case"disposed":n.onDisposed&&n.onDisposed(D),I=!0;break;default:throw new Error("Unexception type "+D.type)}if(j)return p("abort"),Promise.reject(j);if(_)for(s in g[s]=v[s],f(m,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,s)&&(y[s]||(y[s]=[]),f(y[s],D.outdatedDependencies[s]));I&&(f(m,[D.moduleId]),g[s]=b)}var H,C=[];for(r=0;r<m.length;r++)s=m[r],P[s]&&P[s].hot._selfAccepted&&C.push({module:s,errorHandler:P[s].hot._selfAccepted});p("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var A,M,S=m.slice();S.length>0;)if(s=S.pop(),a=P[s]){var U={},R=a.hot._disposeHandlers;for(i=0;i<R.length;i++)(t=R[i])(U);for(c[s]=U,a.hot.active=!1,delete P[s],delete y[s],i=0;i<a.children.length;i++){var T=P[a.children[i]];T&&((H=T.parents.indexOf(s))>=0&&T.parents.splice(H,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=P[s]))for(M=y[s],i=0;i<M.length;i++)A=M[i],(H=a.children.indexOf(A))>=0&&a.children.splice(H,1);for(s in p("apply"),o=h,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var V=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=P[s])){M=y[s];var L=[];for(r=0;r<M.length;r++)if(A=M[r],t=a.hot._acceptedDependencies[A]){if(-1!==L.indexOf(t))continue;L.push(t)}for(r=0;r<L.length;r++){t=L[r];try{t(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:M[r],error:e}),n.ignoreErrored||V||(V=e)}}}for(r=0;r<C.length;r++){var q=C[r];s=q.module,d=[s];try{x(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:t,originalError:e}),n.ignoreErrored||V||(V=t),V||(V=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||V||(V=e)}}return V?(p("fail"),Promise.reject(V)):(p("idle"),new Promise(function(e){e(m)}))}var P={};function x(n){if(P[n])return P[n].exports;var r=P[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:O,apply:_,status:function(e){if(!e)return l;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:c[e]};return t=void 0,n}(n),parents:(a=d,d=[],a),children:[]};return e[n].call(r.exports,r,r.exports,s(n)),r.l=!0,r.exports}x.m=e,x.c=P,x.d=function(e,n,t){x.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,n){if(1&n&&(e=x(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(x.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)x.d(t,r,function(n){return e[n]}.bind(null,r));return t},x.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(n,"a",n),n},x.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},x.p="./dist",x.h=function(){return o},s(22)(x.s=22)}({0:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"c",function(){return i}),t.d(n,"a",function(){return d}),t.d(n,"b",function(){return a}),t.d(n,"f",function(){return s}),t.d(n,"e",function(){return u}),t.d(n,"g",function(){return l}),t.d(n,"d",function(){return v});var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",t=document.getElementById(e);return t||((t=document.createElement(n)).id=e,t.style.display="none",document.body.append(t)),t},i=function(){a().then(p).catch(f)},c=function(){var e=o("loading"),n=o("permission"),t=o("content");return{notSupport:o("not_support"),loading:e,permission:n,content:t}},d=function(){var e=o("video","video"),n=(o("output","canvas"),o("buffer","canvas"));return{video:e,output:output,buffer:n}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var n=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return n?new Promise(function(t,r){n.call(navigator,e,t,r)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),window.navigator.mediaDevices.getUserMedia(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}({audio:!1,video:{facing:"user"}},e))},s=function(){var e=c(),n=e.loading,t=e.notSupport;n.style.display="none",t.style.display="block"},u=function(){var e=c(),n=e.loading,t=e.content,r=e.permission;n.style.display="none",r.style.display="none",t.style.display="block"},l=function(){var e=c(),n=e.loading,t=e.content,r=e.permission;n.style.display="none",r.style.display="block",t.style.display="none"},p=function(e){var n=d(),t=n.video,r=n.output,o=n.buffer;t.addEventListener("canplay",function(){u(),o.width=r.width=t.videoWidth,o.height=r.height=t.videoHeight}),t.srcObject=e,t.play(),window.devicePixelRatio=1},f=function(e){var n=c(),t=n.loading,r=n.permission;t.style.display="none",r.style.display="block"},v=function(){return!function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"webm";return e||(e=document.createElement("video")),""!==e.canPlayType({ogg:'video/ogg; codecs="theora"',h264:'video/mp4; codecs="avc1.42E01E"',webm:'video/webm; codecs="vp8, vorbis"',vp9:'video/webm; codecs="vp9"',hls:'application/x-mpegURL; codecs="avc1.42E01E"'}[n]||n)}()}},22:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";t.r(n);var r=t(0);window.addEventListener("load",function(){window.CVD=null,JEEFACEFILTERAPI.init({canvasId:"output",NNCpath:"https://appstatic.jeeliz.com/faceFilter/NNC.json",callbackReady:function(e,n){if(e){var t=Object(r.a)().output;return Object(r.g)(),void(t.style.display="none")}console.log("INFO : JEEFACEFILTERAPI IS READY"),document.querySelector("#loading").style.display="none",CVD=JEEFACEFILTERAPI.Canvas2DDisplay(n),CVD.ctx.strokeStyle="yellow"},callbackTrack:function(e){if(e.detected>.6){var n=CVD.getCoordinates(e);CVD.ctx.clearRect(0,0,CVD.canvas.width,CVD.canvas.height),CVD.ctx.strokeRect(n.x,n.y,n.w,n.h),CVD.update_canvasTexture()}CVD.draw()}}),document.querySelector("#stop").addEventListener("click",stop)})}});
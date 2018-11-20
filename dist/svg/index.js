!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!b[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===m&&j()}(e,n),t&&t(e,n)};var n,r=!0,o="7ff0267dcf2afd9f0450",i=1e4,c={},d=[],a=[];function l(e){var t=x[e];if(!t)return I;var r=function(r){return t.hot.active?(x[r]?-1===x[r].parents.indexOf(e)&&x[r].parents.push(e):(d=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),d=[]),I(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(t){I[e]=t}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===s&&p("prepare"),m++,I.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===s&&(g[e]||_(e),0===m&&0===v&&j())}},r.t=function(e,t){return 1&t&&(e=r(e)),I.t(e,-2&t)},r}var u=[],s="idle";function p(e){s=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var f,h,y,v=0,m=0,g={},w={},b={};function O(e){return+e+""===e?+e:e}function E(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return r=e,p("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=I.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(i).then(function(e){if(!e)return p("idle"),null;w={},g={},b=e.c,y=e.h,p("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});h={};return _(7),"prepare"===s&&0===m&&0===v&&j(),t})}function _(e){b[e]?(w[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=I.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):g[e]=!0}function j(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return D(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(O(n));e.resolve(t)}}function D(t){if("ready"!==s)throw new Error("apply() is only allowed in ready status");var n,r,i,a,l;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=x[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var l=a.parents[d],u=x[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),f(n[l],[i])):(delete n[l],t.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var v={},m=[],g={},w=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var _;l=O(E);var j=!1,D=!1,H=!1,P="";switch((_=h[E]?u(l):{type:"disposed",moduleId:E}).chain&&(P="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+_.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(j=new Error("Aborted because "+l+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(_),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),H=!0;break;default:throw new Error("Unexception type "+_.type)}if(j)return p("abort"),Promise.reject(j);if(D)for(l in g[l]=h[l],f(m,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,l)&&(v[l]||(v[l]=[]),f(v[l],_.outdatedDependencies[l]));H&&(f(m,[_.moduleId]),g[l]=w)}var A,k=[];for(r=0;r<m.length;r++)l=m[r],x[l]&&x[l].hot._selfAccepted&&k.push({module:l,errorHandler:x[l].hot._selfAccepted});p("dispose"),Object.keys(b).forEach(function(e){!1===b[e]&&function(e){delete installedChunks[e]}(e)});for(var S,M,q=m.slice();q.length>0;)if(l=q.pop(),a=x[l]){var T={},L=a.hot._disposeHandlers;for(i=0;i<L.length;i++)(n=L[i])(T);for(c[l]=T,a.hot.active=!1,delete x[l],delete v[l],i=0;i<a.children.length;i++){var U=x[a.children[i]];U&&((A=U.parents.indexOf(l))>=0&&U.parents.splice(A,1))}}for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=x[l]))for(M=v[l],i=0;i<M.length;i++)S=M[i],(A=a.children.indexOf(S))>=0&&a.children.splice(A,1);for(l in p("apply"),o=y,g)Object.prototype.hasOwnProperty.call(g,l)&&(e[l]=g[l]);var C=null;for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=x[l])){M=v[l];var B=[];for(r=0;r<M.length;r++)if(S=M[r],n=a.hot._acceptedDependencies[S]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(M)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:M[r],error:e}),t.ignoreErrored||C||(C=e)}}}for(r=0;r<k.length;r++){var R=k[r];l=R.module,d=[l];try{I(l)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||C||(C=n),C||(C=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||C||(C=e)}}return C?(p("fail"),Promise.reject(C)):(p("idle"),new Promise(function(e){e(m)}))}var x={};function I(t){if(x[t])return x[t].exports;var r=x[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:D,status:function(e){if(!e)return s;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:c[e]};return n=void 0,t}(t),parents:(a=d,d=[],a),children:[]};return e[t].call(r.exports,r,r.exports,l(t)),r.l=!0,r.exports}I.m=e,I.c=x,I.d=function(e,t,n){I.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,t){if(1&t&&(e=I(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(I.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)I.d(n,r,function(t){return e[t]}.bind(null,r));return n},I.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(t,"a",t),t},I.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},I.p="./dist",I.h=function(){return o},l(17)(I.s=17)}({17:function(e,t,n){e.exports=n(18)},18:function(e,t){function n(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r=document.createElement("video"),o=document.createElement("canvas"),i=document.createElement("canvas"),c=document.getElementById("canvas"),d="";function a(e){c.style.display="block",document.getElementById("inputs").style.display="block",r.srcObject=e,r.play(),window.devicePixelRatio=1}function l(){o.width=r.videoWidth,o.height=r.videoHeight,i.width=r.videoWidth,i.height=r.videoHeight;var e=o.getContext("2d"),t=i.getContext("2d"),n=c.getContext("2d");t.translate(r.videoWidth,0),t.scale(-1,1),e.translate(r.videoWidth,0),e.scale(-1,1),e.filter=d,e.drawImage(r,0,0),t.drawImage(r,0,0),c.width=o.width,c.height=o.height,n.drawImage(i,0,0,o.width/2,o.height,0,0,o.width/2,o.height),n.drawImage(o,o.width/2,0,o.width/2,o.height,o.width/2,0,o.width/2,o.height),window.requestAnimationFrame(l)}function u(){d="nothing"!=this.innerText.toLowerCase()?"url(#".concat(this.innerText,")"):"",document.querySelector("#current").innerText="current filter : ".concat(this.innerText)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("filter").forEach(function(e){document.querySelector("#inputs").insertAdjacentHTML("beforeEnd","<button data-value=".concat(e.id,">").concat(e.id,"</button>"))}),n(document.getElementById("inputs").querySelectorAll("button")).forEach(function(e){e.addEventListener("click",u)}),window.navigator.mediaDevices.getUserMedia({audio:!1,video:{facing:"user"}}).then(a).catch(function(e){return console.log("There was an error 😱",e)})}),r.addEventListener("canplay",function(){document.getElementById("loading").style.display="none",document.getElementById("content").style.display="block",u.apply(document.querySelector("[data-value=duotone_peachypink]")),l()})}});
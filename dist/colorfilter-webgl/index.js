!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!w[e]||!b[e])return;for(var t in b[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--v&&0===m&&x()}(e,t),n&&n(e,t)};var t,r=!0,o="6da16434902835ce8356",i=1e4,c={},d=[],a=[];function l(e){var n=j[e];if(!n)return I;var r=function(r){return n.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(d=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),d=[]),I(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(n){I[e]=n}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===s&&f("prepare"),m++,I.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===s&&(g[e]||E(e),0===m&&0===v&&x())}},r.t=function(e,n){return 1&n&&(e=r(e)),I.t(e,-2&n)},r}var u=[],s="idle";function f(e){s=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var p,h,y,v=0,m=0,g={},b={},w={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=I.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(i).then(function(e){if(!e)return f("idle"),null;b={},g={},w=e.c,y=e.h,f("prepare");var n=new Promise(function(e,n){p={resolve:e,reject:n}});h={};return E(6),"prepare"===s&&0===m&&0===v&&x(),n})}function E(e){w[e]?(b[e]=!0,v++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=I.p+""+e+"."+o+".hot-update.js",n.appendChild(t)}(e)):g[e]=!0}function x(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return D(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(_(t));e.resolve(n)}}function D(n){if("ready"!==s)throw new Error("apply() is only allowed in ready status");var t,r,i,a,l;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=j[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var l=a.parents[d],u=j[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(u.hot._acceptedDependencies[i]?(t[l]||(t[l]=[]),p(t[l],[i])):(delete t[l],n.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var v={},m=[],g={},b=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var E;l=_(O);var x=!1,D=!1,P=!1,H="";switch((E=h[O]?u(l):{type:"disposed",moduleId:O}).chain&&(H="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+E.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(E),n.ignoreUnaccepted||(x=new Error("Aborted because "+l+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(E),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(E),P=!0;break;default:throw new Error("Unexception type "+E.type)}if(x)return f("abort"),Promise.reject(x);if(D)for(l in g[l]=h[l],p(m,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,l)&&(v[l]||(v[l]=[]),p(v[l],E.outdatedDependencies[l]));P&&(p(m,[E.moduleId]),g[l]=b)}var A,k=[];for(r=0;r<m.length;r++)l=m[r],j[l]&&j[l].hot._selfAccepted&&k.push({module:l,errorHandler:j[l].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,S,U=m.slice();U.length>0;)if(l=U.pop(),a=j[l]){var C={},T=a.hot._disposeHandlers;for(i=0;i<T.length;i++)(t=T[i])(C);for(c[l]=C,a.hot.active=!1,delete j[l],delete v[l],i=0;i<a.children.length;i++){var L=j[a.children[i]];L&&((A=L.parents.indexOf(l))>=0&&L.parents.splice(A,1))}}for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=j[l]))for(S=v[l],i=0;i<S.length;i++)M=S[i],(A=a.children.indexOf(M))>=0&&a.children.splice(A,1);for(l in f("apply"),o=y,g)Object.prototype.hasOwnProperty.call(g,l)&&(e[l]=g[l]);var q=null;for(l in v)if(Object.prototype.hasOwnProperty.call(v,l)&&(a=j[l])){S=v[l];var B=[];for(r=0;r<S.length;r++)if(M=S[r],t=a.hot._acceptedDependencies[M]){if(-1!==B.indexOf(t))continue;B.push(t)}for(r=0;r<B.length;r++){t=B[r];try{t(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[r],error:e}),n.ignoreErrored||q||(q=e)}}}for(r=0;r<k.length;r++){var R=k[r];l=R.module,d=[l];try{I(l)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),n.ignoreErrored||q||(q=t),q||(q=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||q||(q=e)}}return q?(f("fail"),Promise.reject(q)):(f("idle"),new Promise(function(e){e(m)}))}var j={};function I(n){if(j[n])return j[n].exports;var r=j[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:O,apply:D,status:function(e){if(!e)return s;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:c[e]};return t=void 0,n}(n),parents:(a=d,d=[],a),children:[]};return e[n].call(r.exports,r,r.exports,l(n)),r.l=!0,r.exports}I.m=e,I.c=j,I.d=function(e,n,t){I.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,n){if(1&n&&(e=I(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(I.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)I.d(t,r,function(n){return e[n]}.bind(null,r));return t},I.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(n,"a",n),n},I.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},I.p="./dist",I.h=function(){return o},l(18)(I.s=18)}({18:function(e,n,t){e.exports=t(19)},19:function(e,n){var t,r=document.getElementById("video"),o=document.createElement("canvas"),i=document.getElementById("output"),c="gl_FragColor = vec4(color, 1.0);";function d(e){i.style.display="block",r.srcObject=e,r.play(),window.devicePixelRatio=1,a()}function a(){var e="\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    uniform sampler2D u_texture;\n    uniform vec2 u_resolution;\n    uniform float u_time;\n    void main() {\n      vec2 st = gl_FragCoord.xy / u_resolution.xy;\n      float x = gl_FragCoord.x;\n      float y = gl_FragCoord.y;\n      vec3 color = texture2D(u_texture, st).rgb;\n      ".concat(c,"\n    }\n  ");t&&t.load(e)}function l(){c=this.getAttribute("data-shader"),text=this.innerText,document.querySelector(".filter_name").innerText="filter : ".concat(text),a()}document.addEventListener("DOMContentLoaded",function(){window.navigator.mediaDevices.getUserMedia({audio:!1,video:{facing:"user"}}).then(d).catch(function(e){return console.log("There was an error 😱",e)})}),r.addEventListener("canplay",function(){document.getElementById("loading").style.display="none",document.getElementById("content").style.display="block",setInterval(function(){!function(){o.width=r.videoWidth,o.height=r.videoHeight,o.getContext("2d").drawImage(r,0,0),i.width=o.width,i.height=o.height,t||(t=new GlslCanvas(i),a());var e=o.toDataURL();t.setUniform("u_texture",e)}()},100)}),function(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(document.getElementById("buttons").children).forEach(function(e){e.addEventListener("click",l)})}});
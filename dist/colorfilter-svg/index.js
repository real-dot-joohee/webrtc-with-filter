!function(e){var i=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,i){if(!y[e]||!g[e])return;for(var n in g[e]=!1,i)Object.prototype.hasOwnProperty.call(i,n)&&(w[n]=i[n]);0==--h&&0===v&&k()}(e,n),i&&i(e,n)};var n,r=!0,o="67013f11ff0b8280397c",t=1e4,s={},a=[],d=[];function c(e){var i=A[e];if(!i)return T;var r=function(r){return i.hot.active?(A[r]?-1===A[r].parents.indexOf(e)&&A[r].parents.push(e):(a=[e],n=r),-1===i.children.indexOf(r)&&i.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),T(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(i){T[e]=i}}};for(var t in T)Object.prototype.hasOwnProperty.call(T,t)&&"e"!==t&&"t"!==t&&Object.defineProperty(r,t,o(t));return r.e=function(e){return"ready"===u&&p("prepare"),v++,T.e(e).then(i,function(e){throw i(),e});function i(){v--,"prepare"===u&&(b[e]||S(e),0===v&&0===h&&k())}},r.t=function(e,i){return 1&i&&(e=r(e)),T.t(e,-2&i)},r}var l=[],u="idle";function p(e){u=e;for(var i=0;i<l.length;i++)l[i].call(null,e)}var f,w,m,h=0,v=0,b={},g={},y={};function E(e){return+e+""===e?+e:e}function x(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),function(e){return e=e||1e4,new Promise(function(i,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,t=T.p+""+o+".hot-update.json";r.open("GET",t,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+t+" timed out."));else if(404===r.status)i();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+t+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}i(e)}}})}(t).then(function(e){if(!e)return p("idle"),null;g={},b={},y=e.c,m=e.h,p("prepare");var i=new Promise(function(e,i){f={resolve:e,reject:i}});w={};return S(5),"prepare"===u&&0===v&&0===h&&k(),i})}function S(e){y[e]?(g[e]=!0,h++,function(e){var i=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=T.p+""+e+"."+o+".hot-update.js",i.appendChild(n)}(e)):b[e]=!0}function k(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return O(r)}).then(function(i){e.resolve(i)},function(i){e.reject(i)});else{var i=[];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&i.push(E(n));e.resolve(i)}}function O(i){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,t,d,c;function l(e){for(var i=[e],n={},r=i.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),t=o.id,s=o.chain;if((d=A[t])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:t};if(d.hot._main)return{type:"unaccepted",chain:s,moduleId:t};for(var a=0;a<d.parents.length;a++){var c=d.parents[a],l=A[c];if(l){if(l.hot._declinedDependencies[t])return{type:"declined",chain:s.concat([c]),moduleId:t,parentId:c};-1===i.indexOf(c)&&(l.hot._acceptedDependencies[t]?(n[c]||(n[c]=[]),f(n[c],[t])):(delete n[c],i.push(c),r.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:i,outdatedDependencies:n}}function f(e,i){for(var n=0;n<i.length;n++){var r=i[n];-1===e.indexOf(r)&&e.push(r)}}i=i||{};var h={},v=[],b={},g=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var x in w)if(Object.prototype.hasOwnProperty.call(w,x)){var S;c=E(x);var k=!1,O=!1,_=!1,j="";switch((S=w[x]?l(c):{type:"disposed",moduleId:x}).chain&&(j="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":i.onDeclined&&i.onDeclined(S),i.ignoreDeclined||(k=new Error("Aborted because of self decline: "+S.moduleId+j));break;case"declined":i.onDeclined&&i.onDeclined(S),i.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+j));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(S),i.ignoreUnaccepted||(k=new Error("Aborted because "+c+" is not accepted"+j));break;case"accepted":i.onAccepted&&i.onAccepted(S),O=!0;break;case"disposed":i.onDisposed&&i.onDisposed(S),_=!0;break;default:throw new Error("Unexception type "+S.type)}if(k)return p("abort"),Promise.reject(k);if(O)for(c in b[c]=w[c],f(v,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,c)&&(h[c]||(h[c]=[]),f(h[c],S.outdatedDependencies[c]));_&&(f(v,[S.moduleId]),b[c]=g)}var I,M=[];for(r=0;r<v.length;r++)c=v[r],A[c]&&A[c].hot._selfAccepted&&M.push({module:c,errorHandler:A[c].hot._selfAccepted});p("dispose"),Object.keys(y).forEach(function(e){!1===y[e]&&function(e){delete installedChunks[e]}(e)});for(var D,P,C=v.slice();C.length>0;)if(c=C.pop(),d=A[c]){var N={},B=d.hot._disposeHandlers;for(t=0;t<B.length;t++)(n=B[t])(N);for(s[c]=N,d.hot.active=!1,delete A[c],delete h[c],t=0;t<d.children.length;t++){var R=A[d.children[t]];R&&((I=R.parents.indexOf(c))>=0&&R.parents.splice(I,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(d=A[c]))for(P=h[c],t=0;t<P.length;t++)D=P[t],(I=d.children.indexOf(D))>=0&&d.children.splice(I,1);for(c in p("apply"),o=m,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var H=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(d=A[c])){P=h[c];var L=[];for(r=0;r<P.length;r++)if(D=P[r],n=d.hot._acceptedDependencies[D]){if(-1!==L.indexOf(n))continue;L.push(n)}for(r=0;r<L.length;r++){n=L[r];try{n(P)}catch(e){i.onErrored&&i.onErrored({type:"accept-errored",moduleId:c,dependencyId:P[r],error:e}),i.ignoreErrored||H||(H=e)}}}for(r=0;r<M.length;r++){var z=M[r];c=z.module,a=[c];try{T(c)}catch(e){if("function"==typeof z.errorHandler)try{z.errorHandler(e)}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),i.ignoreErrored||H||(H=n),H||(H=e)}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:c,error:e}),i.ignoreErrored||H||(H=e)}}return H?(p("fail"),Promise.reject(H)):(p("idle"),new Promise(function(e){e(v)}))}var A={};function T(i){if(A[i])return A[i].exports;var r=A[i]={i:i,l:!1,exports:{},hot:function(e){var i={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)i._selfAccepted=!0;else if("function"==typeof e)i._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)i._acceptedDependencies[e[r]]=n||function(){};else i._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)i._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)i._declinedDependencies[e[n]]=!0;else i._declinedDependencies[e]=!0},dispose:function(e){i._disposeHandlers.push(e)},addDisposeHandler:function(e){i._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=i._disposeHandlers.indexOf(e);n>=0&&i._disposeHandlers.splice(n,1)},check:x,apply:O,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var i=l.indexOf(e);i>=0&&l.splice(i,1)},data:s[e]};return n=void 0,i}(i),parents:(d=a,a=[],d),children:[]};return e[i].call(r.exports,r,r.exports,c(i)),r.l=!0,r.exports}T.m=e,T.c=A,T.d=function(e,i,n){T.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},T.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,i){if(1&i&&(e=T(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(T.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var r in e)T.d(n,r,function(i){return e[i]}.bind(null,r));return n},T.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(i,"a",i),i},T.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},T.p="./dist",T.h=function(){return o},c(18)(T.s=18)}({0:function(e,i,n){"use strict";function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}n.d(i,"c",function(){return t}),n.d(i,"a",function(){return a}),n.d(i,"b",function(){return d}),n.d(i,"f",function(){return c}),n.d(i,"e",function(){return l}),n.d(i,"g",function(){return u}),n.d(i,"d",function(){return w});var o=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=document.getElementById(e);return n||((n=document.createElement(i)).id=e,n.style.display="none",document.body.append(n)),n},t=function(){d().then(p).catch(f)},s=function(){var e=o("loading"),i=o("permission"),n=o("content");return{notSupport:o("not_support"),loading:e,permission:i,content:n}},a=function(){var e=o("video","video"),i=(o("output","canvas"),o("buffer","canvas"));return{video:e,output:output,buffer:i}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var i=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return i?new Promise(function(n,r){i.call(navigator,e,n,r)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}),window.navigator.mediaDevices.getUserMedia(function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(i){r(e,i,n[i])})}return e}({audio:!1,video:{facing:"user"}},e))},c=function(){var e=s(),i=e.loading,n=e.notSupport;i.style.display="none",n.style.display="block"},l=function(){var e=s(),i=e.loading,n=e.content,r=e.permission;i.style.display="none",r.style.display="none",n.style.display="block"},u=function(){var e=s(),i=e.loading,n=e.content,r=e.permission;i.style.display="none",r.style.display="block",n.style.display="none"},p=function(e){var i=a(),n=i.video,r=i.output,o=i.buffer;n.addEventListener("canplay",function(){l(),o.width=r.width=n.videoWidth,o.height=r.height=n.videoHeight}),n.srcObject=e,n.play(),window.devicePixelRatio=1},f=function(e){var i=s(),n=i.loading,r=i.permission;n.style.display="none",r.style.display="block"},w=function(){return!function(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"webm";return e||(e=document.createElement("video")),""!==e.canPlayType({ogg:'video/ogg; codecs="theora"',h264:'video/mp4; codecs="avc1.42E01E"',webm:'video/webm; codecs="vp8, vorbis"',vp9:'video/webm; codecs="vp9"',hls:'application/x-mpegURL; codecs="avc1.42E01E"'}[i]||i)}()}},1:function(e,i,n){var r;
/*!
 * UAParser.js v0.7.19
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
/*!
 * UAParser.js v0.7.19
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
!function(o,t){"use strict";var s="model",a="name",d="type",c="vendor",l="version",u="mobile",p="tablet",f={extend:function(e,i){var n={};for(var r in e)i[r]&&i[r].length%2==0?n[r]=i[r].concat(e[r]):n[r]=e[r];return n},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},w={rgx:function(e,i){for(var n,r,o,t,s,a,d=0;d<i.length&&!s;){var c=i[d],l=i[d+1];for(n=r=0;n<c.length&&!s;)if(s=c[n++].exec(e))for(o=0;o<l.length;o++)a=s[++r],"object"==typeof(t=l[o])&&t.length>0?2==t.length?"function"==typeof t[1]?this[t[0]]=t[1].call(this,a):this[t[0]]=t[1]:3==t.length?"function"!=typeof t[1]||t[1].exec&&t[1].test?this[t[0]]=a?a.replace(t[1],t[2]):void 0:this[t[0]]=a?t[1].call(this,a,t[2]):void 0:4==t.length&&(this[t[0]]=a?t[3].call(this,a.replace(t[1],t[2])):void 0):this[t]=a||void 0;d+=2}},str:function(e,i){for(var n in i)if("object"==typeof i[n]&&i[n].length>0){for(var r=0;r<i[n].length;r++)if(f.has(i[n][r],e))return"?"===n?void 0:n}else if(f.has(i[n],e))return"?"===n?void 0:n;return e}},m={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},h={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,l],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],l],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],l],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[a,l],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],l],[/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],l],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],l],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],l],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],l],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],l],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],l],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],l],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],l],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],l],[/(qqbrowserlite)\/([\w\.]+)/i],[a,l],[/(QQ)\/([\d\.]+)/i],[a,l],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,l],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[a,l],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,l],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[l,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[l,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,l],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[l,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],l],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],l],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[l,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,l],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],l],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],l],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],l],[/fxios\/([\w\.-]+)/i],[l,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[l,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[l,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],l],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[l,w.str,m.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[a,l],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],l],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,l]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",f.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",f.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",f.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[s,c,[d,p]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[c,"Apple"],[d,p]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[c,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,s,[d,p]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[c,"Amazon"],[d,p]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,w.str,m.device.amazon.model],[c,"Amazon"],[d,u]],[/android.+aft([bms])\sbuild/i],[s,[c,"Amazon"],[d,"smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,c,[d,u]],[/\((ip[honed|\s\w*]+);/i],[s,[c,"Apple"],[d,u]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,s,[d,u]],[/\(bb10;\s(\w+)/i],[s,[c,"BlackBerry"],[d,u]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[s,[c,"Asus"],[d,p]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[c,"Sony"],[s,"Xperia Tablet"],[d,p]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[s,[c,"Sony"],[d,u]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[c,s,[d,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[c,"Nvidia"],[d,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[c,"Sony"],[d,"console"]],[/(sprint\s(\w+))/i],[[c,w.str,m.device.sprint.vendor],[s,w.str,m.device.sprint.model],[d,u]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[c,s,[d,p]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[s,/_/g," "],[d,u]],[/(nexus\s9)/i],[s,[c,"HTC"],[d,p]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[s,[c,"Huawei"],[d,u]],[/(microsoft);\s(lumia[\s\w]+)/i],[c,s,[d,u]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[c,"Microsoft"],[d,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[c,"Microsoft"],[d,u]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[c,"Motorola"],[d,u]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[c,"Motorola"],[d,p]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,f.trim],[s,f.trim],[d,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[c,"Samsung"],[d,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[s,[c,"Sharp"],[d,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[c,"Samsung"],s,[d,p]],[/smart-tv.+(samsung)/i],[c,[d,"smarttv"],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[c,"Samsung"],s,[d,u]],[/sie-(\w*)/i],[s,[c,"Siemens"],[d,u]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[c,"Nokia"],s,[d,u]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[s,[c,"Acer"],[d,p]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[c,"LG"],[d,p]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],s,[d,p]],[/(lg) netcast\.tv/i],[c,s,[d,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[c,"LG"],[d,u]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[c,"Lenovo"],[d,p]],[/linux;.+((jolla));/i],[c,s,[d,u]],[/((pebble))app\/[\d\.]+\s/i],[c,s,[d,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,s,[d,u]],[/crkey/i],[[s,"Chromecast"],[c,"Google"]],[/android.+;\s(glass)\s\d/i],[s,[c,"Google"],[d,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[c,"Google"],[d,p]],[/android.+;\s(pixel( [23])?( xl)?)\s/i],[s,[c,"Google"],[d,u]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[d,u]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[d,p]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[c,"Meizu"],[d,p]],[/(mz)-([\w-]{2,})/i],[[c,"Meizu"],s,[d,u]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[s,[c,"OnePlus"],[d,u]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[c,"RCA"],[d,p]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[c,"Dell"],[d,p]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[c,"Verizon"],[d,p]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[c,"Barnes & Noble"],s,[d,p]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[c,"NuVision"],[d,p]],[/android.+;\s(k88)\sbuild/i],[s,[c,"ZTE"],[d,p]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[c,"Swiss"],[d,u]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[c,"Swiss"],[d,p]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[c,"Zeki"],[d,p]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[c,"Dragon Touch"],s,[d,p]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[c,"Insignia"],[d,p]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[c,"NextBook"],[d,p]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[c,"Voice"],s,[d,u]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[c,"LvTel"],s,[d,u]],[/android.+;\s(PH-1)\s/i],[s,[c,"Essential"],[d,u]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[c,"Envizen"],[d,p]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[c,s,[d,p]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[c,"MachSpeed"],[d,p]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[c,s,[d,p]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[c,"Rotor"],[d,p]],[/android.+(KS(.+))\s+build/i],[s,[c,"Amazon"],[d,p]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[c,s,[d,p]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[d,f.lowerize],c,s],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[c,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[l,[a,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,l],[/rv\:([\w\.]{1,9}).+(gecko)/i],[l,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,l],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[l,w.str,m.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[l,w.str,m.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],l],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[a,l],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],l],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],l],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,l],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],l],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],l],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,l],[/(haiku)\s(\w+)/i],[a,l],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[l,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[l,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,l]]},v=function(e,i){if("object"==typeof e&&(i=e,e=void 0),!(this instanceof v))return new v(e,i).getResult();var n=e||(o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),r=i?f.extend(h,i):h;return this.getBrowser=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,n,r.browser),e.major=f.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return w.rgx.call(e,n,r.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return w.rgx.call(e,n,r.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,n,r.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return w.rgx.call(e,n,r.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};v.VERSION="0.7.19",v.BROWSER={NAME:a,MAJOR:"major",VERSION:l},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:s,VENDOR:c,TYPE:d,CONSOLE:"console",MOBILE:u,SMARTTV:"smarttv",TABLET:p,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:l},v.OS={NAME:a,VERSION:l},void 0!==i?(void 0!==e&&e.exports&&(i=e.exports=v),i.UAParser=v):n(3)?void 0===(r=function(){return v}.call(i,n,i,e))||(e.exports=r):o&&(o.UAParser=v);var b=o&&(o.jQuery||o.Zepto);if(void 0!==b&&!b.ua){var g=new v;b.ua=g.getResult(),b.ua.get=function(){return g.getUA()},b.ua.set=function(e){g.setUA(e);var i=g.getResult();for(var n in i)b.ua[n]=i[n]}}}("object"==typeof window?window:this)},18:function(e,i,n){e.exports=n(19)},19:function(e,i,n){"use strict";n.r(i);n(2);var r=n(0);function o(e){return function(e){if(Array.isArray(e)){for(var i=0,n=new Array(e.length);i<e.length;i++)n[i]=e[i];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var t=document.createElement("video"),s=document.createElement("canvas"),a=document.createElement("canvas"),d=document.getElementById("canvas"),c="";function l(e){d.style.display="block",document.getElementById("inputs").style.display="block",t.srcObject=e,t.play(),window.devicePixelRatio=1}function u(){s.width=t.videoWidth,s.height=t.videoHeight,a.width=t.videoWidth,a.height=t.videoHeight;var e=s.getContext("2d"),i=a.getContext("2d"),n=d.getContext("2d");i.translate(t.videoWidth,0),i.scale(-1,1),e.translate(t.videoWidth,0),e.scale(-1,1),e.filter=c,e.drawImage(t,0,0),i.drawImage(t,0,0),d.width=s.width,d.height=s.height,n.drawImage(a,0,0,s.width/2,s.height,0,0,s.width/2,s.height),n.drawImage(s,s.width/2,0,s.width/2,s.height,s.width/2,0,s.width/2,s.height),window.requestAnimationFrame(u)}function p(){c="nothing"!=this.innerText.toLowerCase()?"url(#".concat(this.innerText,")"):"",document.querySelector("#current").innerText="current filter : ".concat(this.innerText)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("filter").forEach(function(e){document.querySelector("#inputs").insertAdjacentHTML("beforeEnd","<button data-value=".concat(e.id,">").concat(e.id,"</button>"))}),o(document.getElementById("inputs").querySelectorAll("button")).forEach(function(e){e.addEventListener("click",p)}),Object(r.b)({audio:!1,video:{facing:"user"}}).then(l).catch(r.g)}),t.addEventListener("canplay",function(){document.getElementById("loading").style.display="none",document.getElementById("content").style.display="block",p.apply(document.querySelector("[data-value=duotone_peachypink]")),u()})},2:function(e,i,n){"use strict";var r=n(1),o=n.n(r);function t(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){var n=[],r=!0,o=!1,t=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!i||n.length!==i);r=!0);}catch(e){o=!0,t=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw t}}return n}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){return function(e){if(Array.isArray(e)){for(var i=0,n=new Array(e.length);i<e.length;i++)n[i]=e[i];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a={serviceworker:{IE:null,Edge:"17",Firefox:"44",Chrome:"45",Safari:"11.1","iOS Safari":"11.4","Android Browser":null,"Chrome for Android":"70","Samsung Internet":"4"},getusermedia:{IE:null,Edge:"12",Firefox:"36",Chrome:"53",Safari:"11","iOS Safari":"11.2","Android Browser":"67","Chrome for Android":"70","Samsung Internet":"6.2"},webgl:{IE:"11",Edge:"12",Firefox:"4",Chrome:"8",Safari:"5.1","iOS Safari":"8","Android Browser":"67","Chrome for Android":"70","Samsung Internet":"4"},canvas2dfilter:{IE:null,Edge:"?",Firefox:"49",Chrome:"52",Safari:null,"iOS Safari":null,"Android Browser":"?","Chrome for Android":"52","Samsung Internet":"6"},mediarecorder:{IE:null,Edge:null,Firefox:"29",Chrome:"49",Safari:null,"iOS Safari":null,"Android Browser":null,"Chrome for Android":"70","Samsung Internet":"5"},webm:{IE:null,Edge:null,Firefox:"28",Chrome:"25",Safari:null,"iOS Safari":null,"Android Browser":"67","Chrome for Android":"70","Samsung Internet":"5"}};document.addEventListener("DOMContentLoaded",function(){!function(){var e=document.getElementById("ua");if(!e){var i=document.createElement("div");i.id="ua",document.body.append(i),e=i}var n=(new o.a).getResult(),r=n.browser,t=n.device,s=n.os,a=n.ua,d="현재 디바이스 정보 <br>\n    os : (".concat("mobile"===t.type?"M":"PC",") ").concat(s.name," ").concat(s.version," <br>\n    browser : ").concat(r.name," ").concat(r.version," <br>\n    ").concat(a);e.innerHTML=d}(),s(document.querySelectorAll(".support")).forEach(function(e){for(var i=[],n=a[e.dataset.value],r=Object.entries(n),o=0;o<r.length;o++){var s=t(r[o],2),d=s[0],c=s[1];null==c?i.push("<li>".concat(d," 미지원</li>")):"?"==c?i.push("<li>".concat(d," 지원범위 확인 불가</li>")):i.push("<li>".concat(d," ").concat(c," 이상 지원</li>"))}e.innerHTML=i.join("")})})},3:function(e,i){(function(i){e.exports=i}).call(this,{})}});
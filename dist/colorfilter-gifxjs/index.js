!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,t){if(!_[e]||!y[e])return;for(var r in y[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(x[r]=t[r]);0==--g&&0===m&&T()}(e,r),t&&t(e,r)};var r,o=!0,i="45befdc22f106ee9ecd1",n=1e4,a={},l=[],c=[];function s(e){var t=D[e];if(!t)return A;var o=function(o){return t.hot.active?(D[o]?-1===D[o].parents.indexOf(e)&&D[o].parents.push(e):(l=[e],r=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),l=[]),A(o)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&"e"!==n&&"t"!==n&&Object.defineProperty(o,n,i(n));return o.e=function(e){return"ready"===d&&f("prepare"),m++,A.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===d&&(v[e]||w(e),0===m&&0===g&&T())}},o.t=function(e,t){return 1&t&&(e=o(e)),A.t(e,-2&t)},o}var u=[],d="idle";function f(e){d=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,x,p,g=0,m=0,v={},y={},_={};function E(e){return+e+""===e?+e:e}function b(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return o=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var o=new XMLHttpRequest,n=A.p+""+i+".hot-update.json";o.open("GET",n,!0),o.timeout=e,o.send(null)}catch(e){return r(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)r(new Error("Manifest request to "+n+" timed out."));else if(404===o.status)t();else if(200!==o.status&&304!==o.status)r(new Error("Manifest request to "+n+" failed."));else{try{var e=JSON.parse(o.responseText)}catch(e){return void r(e)}t(e)}}})}(n).then(function(e){if(!e)return f("idle"),null;y={},v={},_=e.c,p=e.h,f("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});x={};return w(2),"prepare"===d&&0===m&&0===g&&T(),t})}function w(e){_[e]?(y[e]=!0,g++,function(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=A.p+""+e+"."+i+".hot-update.js",t.appendChild(r)}(e)):v[e]=!0}function T(){f("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return R(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in x)Object.prototype.hasOwnProperty.call(x,r)&&t.push(E(r));e.resolve(t)}}function R(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var r,o,n,c,s;function u(e){for(var t=[e],r={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),n=i.id,a=i.chain;if((c=D[n])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:n};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:n};for(var l=0;l<c.parents.length;l++){var s=c.parents[l],u=D[s];if(u){if(u.hot._declinedDependencies[n])return{type:"declined",chain:a.concat([s]),moduleId:n,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[n]?(r[s]||(r[s]=[]),h(r[s],[n])):(delete r[s],t.push(s),o.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function h(e,t){for(var r=0;r<t.length;r++){var o=t[r];-1===e.indexOf(o)&&e.push(o)}}t=t||{};var g={},m=[],v={},y=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var b in x)if(Object.prototype.hasOwnProperty.call(x,b)){var w;s=E(b);var T=!1,R=!1,C=!1,S="";switch((w=x[b]?u(s):{type:"disposed",moduleId:b}).chain&&(S="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(T=new Error("Aborted because of self decline: "+w.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(T=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(T=new Error("Aborted because "+s+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(w),R=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),C=!0;break;default:throw new Error("Unexception type "+w.type)}if(T)return f("abort"),Promise.reject(T);if(R)for(s in v[s]=x[s],h(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,s)&&(g[s]||(g[s]=[]),h(g[s],w.outdatedDependencies[s]));C&&(h(m,[w.moduleId]),v[s]=y)}var F,P=[];for(o=0;o<m.length;o++)s=m[o],D[s]&&D[s].hot._selfAccepted&&P.push({module:s,errorHandler:D[s].hot._selfAccepted});f("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete installedChunks[e]}(e)});for(var B,U,O=m.slice();O.length>0;)if(s=O.pop(),c=D[s]){var I={},M=c.hot._disposeHandlers;for(n=0;n<M.length;n++)(r=M[n])(I);for(a[s]=I,c.hot.active=!1,delete D[s],delete g[s],n=0;n<c.children.length;n++){var z=D[c.children[n]];z&&((F=z.parents.indexOf(s))>=0&&z.parents.splice(F,1))}}for(s in g)if(Object.prototype.hasOwnProperty.call(g,s)&&(c=D[s]))for(U=g[s],n=0;n<U.length;n++)B=U[n],(F=c.children.indexOf(B))>=0&&c.children.splice(F,1);for(s in f("apply"),i=p,v)Object.prototype.hasOwnProperty.call(v,s)&&(e[s]=v[s]);var X=null;for(s in g)if(Object.prototype.hasOwnProperty.call(g,s)&&(c=D[s])){U=g[s];var k=[];for(o=0;o<U.length;o++)if(B=U[o],r=c.hot._acceptedDependencies[B]){if(-1!==k.indexOf(r))continue;k.push(r)}for(o=0;o<k.length;o++){r=k[o];try{r(U)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:U[o],error:e}),t.ignoreErrored||X||(X=e)}}}for(o=0;o<P.length;o++){var G=P[o];s=G.module,l=[s];try{A(s)}catch(e){if("function"==typeof G.errorHandler)try{G.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,originalError:e}),t.ignoreErrored||X||(X=r),X||(X=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||X||(X=e)}}return X?(f("fail"),Promise.reject(X)):(f("idle"),new Promise(function(e){e(m)}))}var D={};function A(t){if(D[t])return D[t].exports;var o=D[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:b,apply:R,status:function(e){if(!e)return d;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:a[e]};return r=void 0,t}(t),parents:(c=l,l=[],c),children:[]};return e[t].call(o.exports,o,o.exports,s(t)),o.l=!0,o.exports}A.m=e,A.c=D,A.d=function(e,t,r){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(A.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)A.d(r,o,function(t){return e[t]}.bind(null,o));return r},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="./dist",A.h=function(){return i},s(10)(A.s=10)}([function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return a});var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",r=document.getElementById(e);return r||((r=document.createElement(t)).id=e,r.style.display="none",document.body.append(r)),r},i=function(){l().then(c).catch(s)},n=function(){return{loading:o("loading"),permission:o("permission"),content:o("content")}},a=function(){var e=o("video","video"),t=(o("output","canvas"),o("buffer","canvas"));return{video:e,output:output,buffer:t}},l=function(){return window.navigator.mediaDevices.getUserMedia({audio:!1,video:{facing:"user"}})},c=function(e){var t=a(),r=t.video,o=t.output,i=t.buffer,l=n(),c=l.loading,s=l.content;r.addEventListener("canplay",function(){c.style.display="none",s.style.display="block",i.width=o.width=r.videoWidth,i.height=o.height=r.videoHeight}),r.srcObject=e,r.play(),window.devicePixelRatio=1},s=function(e){var t=n(),r=t.loading,o=t.permission;r.style.display="none",o.style.display="block"}},,function(e,t,r){var o=function(){function e(e,t,r){return Math.max(e,Math.min(t,r))}function t(e){return{_:e,loadContentsOf:function(e){X=this._.gl,this._.loadContentsOf(e)},destroy:function(){X=this._.gl,this._.destroy()}}}function r(e){return t(G.fromElement(e))}function o(e,t){var r=X.UNSIGNED_BYTE;if(X.getExtension("OES_texture_float")&&X.getExtension("OES_texture_float_linear")){var o=new G(100,100,X.RGBA,X.FLOAT);try{o.drawTo(function(){r=X.FLOAT})}catch(e){}o.destroy()}this._.texture&&this._.texture.destroy(),this._.spareTexture&&this._.spareTexture.destroy(),this.width=e,this.height=t,this._.texture=new G(e,t,X.RGBA,r),this._.spareTexture=new G(e,t,X.RGBA,r),this._.extraTexture=this._.extraTexture||new G(0,0,X.RGBA,r),this._.flippedShader=this._.flippedShader||new L(null,"uniform sampler2D texture;varying vec2 texCoord;void main(){gl_FragColor=texture2D(texture,vec2(texCoord.x,1.0-texCoord.y));}"),this._.isInitialized=!0}function i(e,t,r){return this._.isInitialized&&e._.width==this.width&&e._.height==this.height||o.call(this,t||e._.width,r||e._.height),e._.use(),this._.texture.drawTo(function(){L.getDefaultShader().drawRect()}),this}function n(){return this._.texture.use(),this._.flippedShader.drawRect(),this}function a(e,t,r,o){(r||this._.texture).use(),this._.spareTexture.drawTo(function(){e.uniforms(t).drawRect()}),this._.spareTexture.swapWith(o||this._.texture)}function l(e){return e.parentNode.insertBefore(this,e),e.parentNode.removeChild(e),this}function c(){var e=new G(this._.texture.width,this._.texture.height,X.RGBA,X.UNSIGNED_BYTE);return this._.texture.use(),e.drawTo(function(){L.getDefaultShader().drawRect()}),t(e)}function s(){var e=this._.texture.width,t=this._.texture.height,r=new Uint8Array(4*e*t);return this._.texture.drawTo(function(){X.readPixels(0,0,e,t,X.RGBA,X.UNSIGNED_BYTE,r)}),r}function u(e){return function(){return X=this._.gl,e.apply(this,arguments)}}function d(e,t,r,o,i,n,a,l){var c,s,u=o-n,d=l-n,f=(s=r-i)*d-(c=a-i)*u;return[r-e+(c=((i=e-r+i-a)*d-c*(n=t-o+n-l))/f)*r,o-t+c*o,c,a-e+(s=(s*n-i*u)/f)*a,l-t+s*l,s,e,t,1]}function f(e){var t=e[0],r=e[1],o=e[2],i=e[3],n=e[4],a=e[5],l=e[6],c=e[7],s=t*n*(e=e[8])-t*a*c-r*i*e+r*a*l+o*i*c-o*n*l;return[(n*e-a*c)/s,(o*c-r*e)/s,(r*a-o*n)/s,(a*l-i*e)/s,(t*e-o*l)/s,(o*i-t*a)/s,(i*c-n*l)/s,(r*l-t*c)/s,(t*n-r*i)/s]}function h(e){var t=e.length;this.xa=[],this.ya=[],this.u=[],this.y2=[],e.sort(function(e,t){return e[0]-t[0]});for(var r=0;r<t;r++)this.xa.push(e[r][0]),this.ya.push(e[r][1]);for(this.u[0]=0,this.y2[0]=0,r=1;r<t-1;++r){e=this.xa[r+1]-this.xa[r-1];var o=(this.xa[r]-this.xa[r-1])/e,i=o*this.y2[r-1]+2;this.y2[r]=(o-1)/i,this.u[r]=(6*((this.ya[r+1]-this.ya[r])/(this.xa[r+1]-this.xa[r])-(this.ya[r]-this.ya[r-1])/(this.xa[r]-this.xa[r-1]))/e-o*this.u[r-1])/i}for(this.y2[t-1]=0,r=t-2;0<=r;--r)this.y2[r]=this.y2[r]*this.y2[r+1]+this.u[r]}function x(e,t){return new L(null,e+"uniform sampler2D texture;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 coord=texCoord*texSize;"+t+"gl_FragColor=texture2D(texture,coord/texSize);vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}")}function p(t){return X.noise=X.noise||new L(null,"uniform sampler2D texture;uniform float amount;varying vec2 texCoord;float rand(vec2 co){return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 color=texture2D(texture,texCoord);float diff=(rand(texCoord)-0.5)*amount;color.r+=diff;color.g+=diff;color.b+=diff;gl_FragColor=color;}"),a.call(this,X.noise,{amount:e(0,t,1)}),this}function g(t){return X.vibrance=X.vibrance||new L(null,"uniform sampler2D texture;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float average=(color.r+color.g+color.b)/3.0;float mx=max(color.r,max(color.g,color.b));float amt=(mx-average)*(-amount*3.0);color.rgb=mix(color.rgb,vec3(mx),amt);gl_FragColor=color;}"),a.call(this,X.vibrance,{amount:e(-1,t,1)}),this}function m(t,r){return X.vignette=X.vignette||new L(null,"uniform sampler2D texture;uniform float size;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float dist=distance(texCoord,vec2(0.5,0.5));color.rgb*=smoothstep(0.8,size*0.799,dist*(amount+size));gl_FragColor=color;}"),a.call(this,X.vignette,{size:e(0,t,1),amount:e(0,r,1)}),this}function v(e){X.denoise=X.denoise||new L(null,"uniform sampler2D texture;uniform float exponent;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;void main(){vec4 center=texture2D(texture,texCoord);vec4 color=vec4(0.0);float total=0.0;for(float x=-4.0;x<=4.0;x+=1.0){for(float y=-4.0;y<=4.0;y+=1.0){vec4 sample=texture2D(texture,texCoord+vec2(x,y)/texSize);float weight=1.0-abs(dot(sample.rgb-center.rgb,vec3(0.25)));weight=pow(weight,exponent);color+=sample*weight;total+=weight;}}gl_FragColor=color/total;}");for(var t=0;2>t;t++)a.call(this,X.denoise,{exponent:Math.max(0,e),texSize:[this.width,this.height]});return this}function y(t,r){return X.brightnessContrast=X.brightnessContrast||new L(null,"uniform sampler2D texture;uniform float brightness;uniform float contrast;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color.rgb+=brightness;if(contrast>0.0){color.rgb=(color.rgb-0.5)/(1.0-contrast)+0.5;}else{color.rgb=(color.rgb-0.5)*(1.0+contrast)+0.5;}gl_FragColor=color;}"),a.call(this,X.brightnessContrast,{brightness:e(-1,t,1),contrast:e(-1,r,1)}),this}function _(t){t=new h(t);for(var r=[],o=0;256>o;o++)r.push(e(0,Math.floor(256*t.interpolate(o/255)),255));return r}function E(e,t,r){e=_(e),1==arguments.length?t=r=e:(t=_(t),r=_(r));for(var o=[],i=0;256>i;i++)o.splice(o.length,0,e[i],t[i],r[i],255);return this._.extraTexture.initFromBytes(256,1,o),this._.extraTexture.use(1),X.curves=X.curves||new L(null,"uniform sampler2D texture;uniform sampler2D map;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color.r=texture2D(map,vec2(color.r)).r;color.g=texture2D(map,vec2(color.g)).g;color.b=texture2D(map,vec2(color.b)).b;gl_FragColor=color;}"),X.curves.textures({map:1}),a.call(this,X.curves,{}),this}function b(e,t){return X.unsharpMask=X.unsharpMask||new L(null,"uniform sampler2D blurredTexture;uniform sampler2D originalTexture;uniform float strength;uniform float threshold;varying vec2 texCoord;void main(){vec4 blurred=texture2D(blurredTexture,texCoord);vec4 original=texture2D(originalTexture,texCoord);gl_FragColor=mix(blurred,original,1.0+strength);}"),this._.extraTexture.ensureFormat(this._.texture),this._.texture.use(),this._.extraTexture.drawTo(function(){L.getDefaultShader().drawRect()}),this._.extraTexture.use(1),this.triangleBlur(e),X.unsharpMask.textures({originalTexture:1}),a.call(this,X.unsharpMask,{strength:t}),this._.extraTexture.unuse(1),this}function w(t){return X.sepia=X.sepia||new L(null,"uniform sampler2D texture;uniform float amount;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float r=color.r;float g=color.g;float b=color.b;color.r=min(1.0,(r*(1.0-(0.607*amount)))+(g*(0.769*amount))+(b*(0.189*amount)));color.g=min(1.0,(r*0.349*amount)+(g*(1.0-(0.314*amount)))+(b*0.168*amount));color.b=min(1.0,(r*0.272*amount)+(g*0.534*amount)+(b*(1.0-(0.869*amount))));gl_FragColor=color;}"),a.call(this,X.sepia,{amount:e(0,t,1)}),this}function T(t,r){return X.hueSaturation=X.hueSaturation||new L(null,"uniform sampler2D texture;uniform float hue;uniform float saturation;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);float angle=hue*3.14159265;float s=sin(angle),c=cos(angle);vec3 weights=(vec3(2.0*c,-sqrt(3.0)*s-c,sqrt(3.0)*s-c)+1.0)/3.0;float len=length(color.rgb);color.rgb=vec3(dot(color.rgb,weights.xyz),dot(color.rgb,weights.zxy),dot(color.rgb,weights.yzx));float average=(color.r+color.g+color.b)/3.0;if(saturation>0.0){color.rgb+=(average-color.rgb)*(1.0-1.0/(1.001-saturation));}else{color.rgb+=(average-color.rgb)*(-saturation);}gl_FragColor=color;}"),a.call(this,X.hueSaturation,{hue:e(-1,t,1),saturation:e(-1,r,1)}),this}function R(e,t,r){return X.zoomBlur=X.zoomBlur||new L(null,"uniform sampler2D texture;uniform vec2 center;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;"+N+"void main(){vec4 color=vec4(0.0);float total=0.0;vec2 toCenter=center-texCoord*texSize;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=0.0;t<=40.0;t++){float percent=(t+offset)/40.0;float weight=4.0*(percent-percent*percent);vec4 sample=texture2D(texture,texCoord+toCenter*percent*strength/texSize);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}"),a.call(this,X.zoomBlur,{center:[e,t],strength:r,texSize:[this.width,this.height]}),this}function D(e,t,r,o,i,n){X.tiltShift=X.tiltShift||new L(null,"uniform sampler2D texture;uniform float blurRadius;uniform float gradientRadius;uniform vec2 start;uniform vec2 end;uniform vec2 delta;uniform vec2 texSize;varying vec2 texCoord;"+N+"void main(){vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);vec2 normal=normalize(vec2(start.y-end.y,end.x-start.x));float radius=smoothstep(0.0,1.0,abs(dot(texCoord*texSize-start,normal))/gradientRadius)*blurRadius;for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(texture,texCoord+delta/texSize*percent*radius);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}");var l=r-e,c=o-t,s=Math.sqrt(l*l+c*c);return a.call(this,X.tiltShift,{blurRadius:i,gradientRadius:n,start:[e,t],end:[r,o],delta:[l/s,c/s],texSize:[this.width,this.height]}),a.call(this,X.tiltShift,{blurRadius:i,gradientRadius:n,start:[e,t],end:[r,o],delta:[-c/s,l/s],texSize:[this.width,this.height]}),this}function A(t,r,o){X.lensBlurPrePass=X.lensBlurPrePass||new L(null,"uniform sampler2D texture;uniform float power;varying vec2 texCoord;void main(){vec4 color=texture2D(texture,texCoord);color=pow(color,vec4(power));gl_FragColor=vec4(color);}");var i="uniform sampler2D texture0;uniform sampler2D texture1;uniform vec2 delta0;uniform vec2 delta1;uniform float power;varying vec2 texCoord;"+N+"vec4 sample(vec2 delta){float offset=random(vec3(delta,151.7182),0.0);vec4 color=vec4(0.0);float total=0.0;for(float t=0.0;t<=30.0;t++){float percent=(t+offset)/30.0;color+=texture2D(texture0,texCoord+delta*percent);total+=1.0;}return color/total;}";X.lensBlur0=X.lensBlur0||new L(null,i+"void main(){gl_FragColor=sample(delta0);}"),X.lensBlur1=X.lensBlur1||new L(null,i+"void main(){gl_FragColor=(sample(delta0)+sample(delta1))*0.5;}"),X.lensBlur2=X.lensBlur2||new L(null,i+"void main(){vec4 color=(sample(delta0)+2.0*texture2D(texture1,texCoord))/3.0;gl_FragColor=pow(color,vec4(power));}").textures({texture1:1});i=[];for(var n=0;3>n;n++){var l=o+2*n*Math.PI/3;i.push([t*Math.sin(l)/this.width,t*Math.cos(l)/this.height])}return t=Math.pow(10,e(-1,r,1)),a.call(this,X.lensBlurPrePass,{power:t}),this._.extraTexture.ensureFormat(this._.texture),a.call(this,X.lensBlur0,{delta0:i[0]},this._.texture,this._.extraTexture),a.call(this,X.lensBlur1,{delta0:i[1],delta1:i[2]},this._.extraTexture,this._.extraTexture),a.call(this,X.lensBlur0,{delta0:i[1]}),this._.extraTexture.use(1),a.call(this,X.lensBlur2,{power:1/t,delta0:i[2]}),this}function C(e){return X.triangleBlur=X.triangleBlur||new L(null,"uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;"+N+"void main(){vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(texture,texCoord+delta*percent);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}"),a.call(this,X.triangleBlur,{delta:[e/this.width,0]}),a.call(this,X.triangleBlur,{delta:[0,e/this.height]}),this}function S(e){return X.edgeWork1=X.edgeWork1||new L(null,"uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;"+N+"void main(){vec2 color=vec2(0.0);vec2 total=vec2(0.0);float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec3 sample=texture2D(texture,texCoord+delta*percent).rgb;float average=(sample.r+sample.g+sample.b)/3.0;color.x+=average*weight;total.x+=weight;if(abs(t)<15.0){weight=weight*2.0-1.0;color.y+=average*weight;total.y+=weight;}}gl_FragColor=vec4(color/total,0.0,1.0);}"),X.edgeWork2=X.edgeWork2||new L(null,"uniform sampler2D texture;uniform vec2 delta;varying vec2 texCoord;"+N+"void main(){vec2 color=vec2(0.0);vec2 total=vec2(0.0);float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec2 sample=texture2D(texture,texCoord+delta*percent).xy;color.x+=sample.x*weight;total.x+=weight;if(abs(t)<15.0){weight=weight*2.0-1.0;color.y+=sample.y*weight;total.y+=weight;}}float c=clamp(10000.0*(color.y/total.y-color.x/total.x)+0.5,0.0,1.0);gl_FragColor=vec4(c,c,c,1.0);}"),a.call(this,X.edgeWork1,{delta:[e/this.width,0]}),a.call(this,X.edgeWork2,{delta:[0,e/this.height]}),this}function F(e,t,r){return X.hexagonalPixelate=X.hexagonalPixelate||new L(null,"uniform sampler2D texture;uniform vec2 center;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 tex=(texCoord*texSize-center)/scale;tex.y/=0.866025404;tex.x-=tex.y*0.5;vec2 a;if(tex.x+tex.y-floor(tex.x)-floor(tex.y)<1.0)a=vec2(floor(tex.x),floor(tex.y));else a=vec2(ceil(tex.x),ceil(tex.y));vec2 b=vec2(ceil(tex.x),floor(tex.y));vec2 c=vec2(floor(tex.x),ceil(tex.y));vec3 TEX=vec3(tex.x,tex.y,1.0-tex.x-tex.y);vec3 A=vec3(a.x,a.y,1.0-a.x-a.y);vec3 B=vec3(b.x,b.y,1.0-b.x-b.y);vec3 C=vec3(c.x,c.y,1.0-c.x-c.y);float alen=length(TEX-A);float blen=length(TEX-B);float clen=length(TEX-C);vec2 choice;if(alen<blen){if(alen<clen)choice=a;else choice=c;}else{if(blen<clen)choice=b;else choice=c;}choice.x+=choice.y*0.5;choice.y*=0.866025404;choice*=scale/texSize;gl_FragColor=texture2D(texture,choice+center/texSize);}"),a.call(this,X.hexagonalPixelate,{center:[e,t],scale:r,texSize:[this.width,this.height]}),this}function P(e,t,r,o){return X.colorHalftone=X.colorHalftone||new L(null,"uniform sampler2D texture;uniform vec2 center;uniform float angle;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;float pattern(float angle){float s=sin(angle),c=cos(angle);vec2 tex=texCoord*texSize-center;vec2 point=vec2(c*tex.x-s*tex.y,s*tex.x+c*tex.y)*scale;return(sin(point.x)*sin(point.y))*4.0;}void main(){vec4 color=texture2D(texture,texCoord);vec3 cmy=1.0-color.rgb;float k=min(cmy.x,min(cmy.y,cmy.z));cmy=(cmy-k)/(1.0-k);cmy=clamp(cmy*10.0-3.0+vec3(pattern(angle+0.26179),pattern(angle+1.30899),pattern(angle)),0.0,1.0);k=clamp(k*10.0-5.0+pattern(angle+0.78539),0.0,1.0);gl_FragColor=vec4(1.0-cmy-k,color.a);}"),a.call(this,X.colorHalftone,{center:[e,t],angle:r,scale:Math.PI/o,texSize:[this.width,this.height]}),this}function B(e){return X.ink=X.ink||new L(null,"uniform sampler2D texture;uniform float strength;uniform vec2 texSize;varying vec2 texCoord;void main(){vec2 dx=vec2(1.0/texSize.x,0.0);vec2 dy=vec2(0.0,1.0/texSize.y);vec4 color=texture2D(texture,texCoord);float bigTotal=0.0;float smallTotal=0.0;vec3 bigAverage=vec3(0.0);vec3 smallAverage=vec3(0.0);for(float x=-2.0;x<=2.0;x+=1.0){for(float y=-2.0;y<=2.0;y+=1.0){vec3 sample=texture2D(texture,texCoord+dx*x+dy*y).rgb;bigAverage+=sample;bigTotal+=1.0;if(abs(x)+abs(y)<2.0){smallAverage+=sample;smallTotal+=1.0;}}}vec3 edge=max(vec3(0.0),bigAverage/bigTotal-smallAverage/smallTotal);gl_FragColor=vec4(color.rgb-dot(edge,edge)*strength*100000.0,color.a);}"),a.call(this,X.ink,{strength:e*e*e*e*e,texSize:[this.width,this.height]}),this}function U(e,t,r,o){return X.dotScreen=X.dotScreen||new L(null,"uniform sampler2D texture;uniform vec2 center;uniform float angle;uniform float scale;uniform vec2 texSize;varying vec2 texCoord;float pattern(){float s=sin(angle),c=cos(angle);vec2 tex=texCoord*texSize-center;vec2 point=vec2(c*tex.x-s*tex.y,s*tex.x+c*tex.y)*scale;return(sin(point.x)*sin(point.y))*4.0;}void main(){vec4 color=texture2D(texture,texCoord);float average=(color.r+color.g+color.b)/3.0;gl_FragColor=vec4(vec3(average*10.0-5.0+pattern()),color.a);}"),a.call(this,X.dotScreen,{center:[e,t],angle:r,scale:Math.PI/o,texSize:[this.width,this.height]}),this}function O(e,t,r){if(X.matrixWarp=X.matrixWarp||x("uniform mat3 matrix;uniform bool useTextureSpace;","if(useTextureSpace)coord=coord/texSize*2.0-1.0;vec3 warp=matrix*vec3(coord,1.0);coord=warp.xy/warp.z;if(useTextureSpace)coord=(coord*0.5+0.5)*texSize;"),4==(e=Array.prototype.concat.apply([],e)).length)e=[e[0],e[1],0,e[2],e[3],0,0,0,1];else if(9!=e.length)throw"can only warp with 2x2 or 3x3 matrix";return a.call(this,X.matrixWarp,{matrix:t?f(e):e,texSize:[this.width,this.height],useTextureSpace:0|r}),this}function I(e,t,r,o){return X.swirl=X.swirl||x("uniform float radius;uniform float angle;uniform vec2 center;","coord-=center;float distance=length(coord);if(distance<radius){float percent=(radius-distance)/radius;float theta=percent*percent*angle;float s=sin(theta);float c=cos(theta);coord=vec2(coord.x*c-coord.y*s,coord.x*s+coord.y*c);}coord+=center;"),a.call(this,X.swirl,{radius:r,center:[e,t],angle:o,texSize:[this.width,this.height]}),this}function M(t,r,o,i){return X.bulgePinch=X.bulgePinch||x("uniform float radius;uniform float strength;uniform vec2 center;","coord-=center;float distance=length(coord);if(distance<radius){float percent=distance/radius;if(strength>0.0){coord*=mix(1.0,smoothstep(0.0,radius/distance,percent),strength*0.75);}else{coord*=mix(1.0,pow(percent,1.0+strength*0.75)*radius/distance,1.0-percent);}}coord+=center;"),a.call(this,X.bulgePinch,{radius:o,strength:e(-1,i,1),center:[t,r],texSize:[this.width,this.height]}),this}function z(e,t){var r=d.apply(null,t),o=d.apply(null,e);r=f(r);return this.matrixWarp([r[0]*o[0]+r[1]*o[3]+r[2]*o[6],r[0]*o[1]+r[1]*o[4]+r[2]*o[7],r[0]*o[2]+r[1]*o[5]+r[2]*o[8],r[3]*o[0]+r[4]*o[3]+r[5]*o[6],r[3]*o[1]+r[4]*o[4]+r[5]*o[7],r[3]*o[2]+r[4]*o[5]+r[5]*o[8],r[6]*o[0]+r[7]*o[3]+r[8]*o[6],r[6]*o[1]+r[7]*o[4]+r[8]*o[7],r[6]*o[2]+r[7]*o[5]+r[8]*o[8]])}var X,k={};!function(){try{var e=document.createElement("canvas").getContext("experimental-webgl")}catch(e){}if(e&&-1===e.getSupportedExtensions().indexOf("OES_texture_float_linear")&&function(e){if(!e.getExtension("OES_texture_float"))return!1;var t=e.createFramebuffer(),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindFramebuffer(e.FRAMEBUFFER,t),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),t=e.createTexture(),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,2,2,0,e.RGBA,e.FLOAT,new Float32Array([2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),r=e.createProgram();var o=e.createShader(e.VERTEX_SHADER),i=e.createShader(e.FRAGMENT_SHADER);return e.shaderSource(o,"attribute vec2 vertex;void main(){gl_Position=vec4(vertex,0.0,1.0);}"),e.shaderSource(i,"uniform sampler2D texture;void main(){gl_FragColor=texture2D(texture,vec2(0.5));}"),e.compileShader(o),e.compileShader(i),e.attachShader(r,o),e.attachShader(r,i),e.linkProgram(r),o=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0]),e.STREAM_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),o=new Uint8Array(4),e.useProgram(r),e.viewport(0,0,1,1),e.bindTexture(e.TEXTURE_2D,t),e.drawArrays(e.POINTS,0,1),e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,o),127===o[0]||128===o[0]}(e)){var t=WebGLRenderingContext.prototype.getExtension,r=WebGLRenderingContext.prototype.getSupportedExtensions;WebGLRenderingContext.prototype.getExtension=function(e){return"OES_texture_float_linear"===e?(void 0===this.$OES_texture_float_linear$&&Object.defineProperty(this,"$OES_texture_float_linear$",{enumerable:!1,configurable:!1,writable:!1,value:new function(){}}),e=this.$OES_texture_float_linear$):e=t.call(this,e),e},WebGLRenderingContext.prototype.getSupportedExtensions=function(){var e=r.call(this);return-1===e.indexOf("OES_texture_float_linear")&&e.push("OES_texture_float_linear"),e}}}(),k.canvas=function(){var e=document.createElement("canvas");try{X=e.getContext("experimental-webgl",{premultipliedAlpha:!1})}catch(e){X=null}if(!X)throw"This browser does not support WebGL";return e._={gl:X,isInitialized:!1,texture:null,spareTexture:null,flippedShader:null},e.texture=u(r),e.draw=u(i),e.update=u(n),e.replace=u(l),e.contents=u(c),e.getPixelArray=u(s),e.brightnessContrast=u(y),e.hexagonalPixelate=u(F),e.hueSaturation=u(T),e.colorHalftone=u(P),e.triangleBlur=u(C),e.unsharpMask=u(b),e.perspective=u(z),e.matrixWarp=u(O),e.bulgePinch=u(M),e.tiltShift=u(D),e.dotScreen=u(U),e.edgeWork=u(S),e.lensBlur=u(A),e.zoomBlur=u(R),e.noise=u(p),e.denoise=u(v),e.curves=u(E),e.swirl=u(I),e.ink=u(B),e.vignette=u(m),e.vibrance=u(g),e.sepia=u(w),e},k.splineInterpolate=_;var G=function(){function e(e,t,r,o){this.gl=X,this.id=X.createTexture(),this.width=e,this.height=t,this.format=r,this.type=o,X.bindTexture(X.TEXTURE_2D,this.id),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MAG_FILTER,X.LINEAR),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_MIN_FILTER,X.LINEAR),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_S,X.CLAMP_TO_EDGE),X.texParameteri(X.TEXTURE_2D,X.TEXTURE_WRAP_T,X.CLAMP_TO_EDGE),e&&t&&X.texImage2D(X.TEXTURE_2D,0,this.format,e,t,0,this.format,this.type,null)}function t(e){return null==r&&(r=document.createElement("canvas")),r.width=e.width,r.height=e.height,(e=r.getContext("2d")).clearRect(0,0,r.width,r.height),e}e.fromElement=function(t){var r=new e(0,0,X.RGBA,X.UNSIGNED_BYTE);return r.loadContentsOf(t),r},e.prototype.loadContentsOf=function(e){this.width=e.width||e.videoWidth,this.height=e.height||e.videoHeight,X.bindTexture(X.TEXTURE_2D,this.id),X.texImage2D(X.TEXTURE_2D,0,this.format,this.format,this.type,e)},e.prototype.initFromBytes=function(e,t,r){this.width=e,this.height=t,this.format=X.RGBA,this.type=X.UNSIGNED_BYTE,X.bindTexture(X.TEXTURE_2D,this.id),X.texImage2D(X.TEXTURE_2D,0,X.RGBA,e,t,0,X.RGBA,this.type,new Uint8Array(r))},e.prototype.destroy=function(){X.deleteTexture(this.id),this.id=null},e.prototype.use=function(e){X.activeTexture(X.TEXTURE0+(e||0)),X.bindTexture(X.TEXTURE_2D,this.id)},e.prototype.unuse=function(e){X.activeTexture(X.TEXTURE0+(e||0)),X.bindTexture(X.TEXTURE_2D,null)},e.prototype.ensureFormat=function(e,t,r,o){if(1==arguments.length){var i=arguments[0];e=i.width,t=i.height,r=i.format,o=i.type}e==this.width&&t==this.height&&r==this.format&&o==this.type||(this.width=e,this.height=t,this.format=r,this.type=o,X.bindTexture(X.TEXTURE_2D,this.id),X.texImage2D(X.TEXTURE_2D,0,this.format,e,t,0,this.format,this.type,null))},e.prototype.drawTo=function(e){if(X.framebuffer=X.framebuffer||X.createFramebuffer(),X.bindFramebuffer(X.FRAMEBUFFER,X.framebuffer),X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,this.id,0),X.checkFramebufferStatus(X.FRAMEBUFFER)!==X.FRAMEBUFFER_COMPLETE)throw Error("incomplete framebuffer");X.viewport(0,0,this.width,this.height),e(),X.bindFramebuffer(X.FRAMEBUFFER,null)};var r=null;return e.prototype.fillUsingCanvas=function(e){return e(t(this)),this.format=X.RGBA,this.type=X.UNSIGNED_BYTE,X.bindTexture(X.TEXTURE_2D,this.id),X.texImage2D(X.TEXTURE_2D,0,X.RGBA,X.RGBA,X.UNSIGNED_BYTE,r),this},e.prototype.toImage=function(e){this.use(),L.getDefaultShader().drawRect();var o=4*this.width*this.height,i=new Uint8Array(o),n=t(this),a=n.createImageData(this.width,this.height);X.readPixels(0,0,this.width,this.height,X.RGBA,X.UNSIGNED_BYTE,i);for(var l=0;l<o;l++)a.data[l]=i[l];n.putImageData(a,0,0),e.src=r.toDataURL()},e.prototype.swapWith=function(e){var t;t=e.id,e.id=this.id,this.id=t,t=e.width,e.width=this.width,this.width=t,t=e.height,e.height=this.height,this.height=t,t=e.format,e.format=this.format,this.format=t},e}();h.prototype.interpolate=function(e){for(var t=0,r=this.ya.length-1;1<r-t;){var o=r+t>>1;this.xa[o]>e?r=o:t=o}o=this.xa[r]-this.xa[t];var i=(this.xa[r]-e)/o;return e=(e-this.xa[t])/o,i*this.ya[t]+e*this.ya[r]+((i*i*i-i)*this.y2[t]+(e*e*e-e)*this.y2[r])*o*o/6};var L=function(){function e(e,t){var r=X.createShader(e);if(X.shaderSource(r,t),X.compileShader(r),!X.getShaderParameter(r,X.COMPILE_STATUS))throw"compile error: "+X.getShaderInfoLog(r);return r}function t(t,i){if(this.texCoordAttribute=this.vertexAttribute=null,this.program=X.createProgram(),t=t||r,i="precision highp float;"+(i=i||o),X.attachShader(this.program,e(X.VERTEX_SHADER,t)),X.attachShader(this.program,e(X.FRAGMENT_SHADER,i)),X.linkProgram(this.program),!X.getProgramParameter(this.program,X.LINK_STATUS))throw"link error: "+X.getProgramInfoLog(this.program)}var r="attribute vec2 vertex;attribute vec2 _texCoord;varying vec2 texCoord;void main(){texCoord=_texCoord;gl_Position=vec4(vertex*2.0-1.0,0.0,1.0);}",o="uniform sampler2D texture;varying vec2 texCoord;void main(){gl_FragColor=texture2D(texture,texCoord);}";return t.prototype.destroy=function(){X.deleteProgram(this.program),this.program=null},t.prototype.uniforms=function(e){for(var t in X.useProgram(this.program),e)if(e.hasOwnProperty(t)){var r=X.getUniformLocation(this.program,t);if(null!==r){var o=e[t];if("[object Array]"==Object.prototype.toString.call(o))switch(o.length){case 1:X.uniform1fv(r,new Float32Array(o));break;case 2:X.uniform2fv(r,new Float32Array(o));break;case 3:X.uniform3fv(r,new Float32Array(o));break;case 4:X.uniform4fv(r,new Float32Array(o));break;case 9:X.uniformMatrix3fv(r,!1,new Float32Array(o));break;case 16:X.uniformMatrix4fv(r,!1,new Float32Array(o));break;default:throw"dont't know how to load uniform \""+t+'" of length '+o.length}else{if("[object Number]"!=Object.prototype.toString.call(o))throw'attempted to set uniform "'+t+'" to invalid value '+(o||"undefined").toString();X.uniform1f(r,o)}}}return this},t.prototype.textures=function(e){for(var t in X.useProgram(this.program),e)e.hasOwnProperty(t)&&X.uniform1i(X.getUniformLocation(this.program,t),e[t]);return this},t.prototype.drawRect=function(e,t,r,o){var i=X.getParameter(X.VIEWPORT);t=void 0!==t?(t-i[1])/i[3]:0,e=void 0!==e?(e-i[0])/i[2]:0,r=void 0!==r?(r-i[0])/i[2]:1,o=void 0!==o?(o-i[1])/i[3]:1,null==X.vertexBuffer&&(X.vertexBuffer=X.createBuffer()),X.bindBuffer(X.ARRAY_BUFFER,X.vertexBuffer),X.bufferData(X.ARRAY_BUFFER,new Float32Array([e,t,e,o,r,t,r,o]),X.STATIC_DRAW),null==X.texCoordBuffer&&(X.texCoordBuffer=X.createBuffer(),X.bindBuffer(X.ARRAY_BUFFER,X.texCoordBuffer),X.bufferData(X.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),X.STATIC_DRAW)),null==this.vertexAttribute&&(this.vertexAttribute=X.getAttribLocation(this.program,"vertex"),X.enableVertexAttribArray(this.vertexAttribute)),null==this.texCoordAttribute&&(this.texCoordAttribute=X.getAttribLocation(this.program,"_texCoord"),X.enableVertexAttribArray(this.texCoordAttribute)),X.useProgram(this.program),X.bindBuffer(X.ARRAY_BUFFER,X.vertexBuffer),X.vertexAttribPointer(this.vertexAttribute,2,X.FLOAT,!1,0,0),X.bindBuffer(X.ARRAY_BUFFER,X.texCoordBuffer),X.vertexAttribPointer(this.texCoordAttribute,2,X.FLOAT,!1,0,0),X.drawArrays(X.TRIANGLE_STRIP,0,4)},t.getDefaultShader=function(){return X.defaultShader=X.defaultShader||new t,X.defaultShader},t}(),N="float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}";return k}();e.exports=o},,,,,,,,function(e,t,r){e.exports=r(11)},function(e,t,r){"use strict";r.r(t);var o,i,n=r(2),a=r.n(n),l=r(0),c=Object(l.a)(),s=c.video,u=c.buffer,d=c.output;function f(){var e=u.getContext("2d"),t=d.getContext("2d");u.width=s.videoWidth,u.height=s.videoHeight,e.translate(s.videoWidth,0),e.scale(-1,1),e.drawImage(s,0,0);var r=o.texture(s);o.draw(r).triangleBlur(20).update();var n=o.toDataURL();i.onload=function(){t.drawImage(this,0,0),window.requestAnimationFrame(f)},i.src=n}function h(){o=a.a.canvas(),i=document.createElement("img"),f()}document.addEventListener("DOMContentLoaded",function(){s.addEventListener("canplay",h),Object(l.b)()})}]);
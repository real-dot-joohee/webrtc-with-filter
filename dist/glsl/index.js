!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./dist",n(n.s=13)}({13:function(e,t,n){e.exports=n(14)},14:function(e,t){var n,r=document.getElementById("video"),o=document.createElement("canvas"),i=document.getElementById("canvas"),a="gl_FragColor = vec4(color, 1.0);";function u(e){i.style.display="block",r.srcObject=e,r.play(),window.devicePixelRatio=1,l()}function c(){o.width=r.videoWidth,o.height=r.videoHeight,o.getContext("2d").drawImage(r,0,0),i.width=o.width,i.height=o.height,n||(n=new GlslCanvas(i),l());var e=o.toDataURL();n.setUniform("u_texture",e),window.requestAnimationFrame(c)}function l(){var e="\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    uniform sampler2D u_texture;\n    uniform vec2 u_resolution;\n    uniform float u_time;\n    void main() {\n      vec2 st = gl_FragCoord.xy / u_resolution.xy;\n      float x = gl_FragCoord.x;\n      float y = gl_FragCoord.y;\n      vec3 color = texture2D(u_texture, st).rgb;\n      ".concat(a,"\n    }\n  ");n&&n.load(e)}function d(){a=this.getAttribute("data-shader"),text=this.innerText,document.querySelector(".filter_name").innerText="filter : ".concat(text),l()}document.addEventListener("DOMContentLoaded",function(){window.navigator.mediaDevices.getUserMedia({audio:!1,video:{facing:"user"}}).then(u).catch(function(e){return console.log("There was an error 😱",e)})}),r.addEventListener("canplay",function(){document.getElementById("loading").style.display="none",document.getElementById("content").style.display="block",c()}),function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(document.getElementById("buttons").children).forEach(function(e){e.addEventListener("click",d)})}});
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./dist",n(n.s=19)}({1:function(t,e,n){(function(e){var n="Expected a function",r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),p=Object.prototype.toString,y=Math.max,v=Math.min,m=function(){return s.Date.now()};function b(t,e,r){var o,i,u,c,f,a,l=0,d=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function b(e){var n=o,r=i;return o=i=void 0,l=e,c=t.apply(r,n)}function h(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-l>=u}function w(){var t=m();if(h(t))return j(t);f=setTimeout(w,function(t){var n=e-(t-a);return s?v(n,u-(t-l)):n}(t))}function j(t){return f=void 0,p&&o?b(t):(o=i=void 0,c)}function O(){var t=m(),n=h(t);if(o=arguments,i=this,a=t,n){if(void 0===f)return function(t){return l=t,f=setTimeout(w,e),d?b(t):c}(a);if(s)return f=setTimeout(w,e),b(a)}return void 0===f&&(f=setTimeout(w,e)),c}return e=x(e)||0,g(r)&&(d=!!r.leading,u=(s="maxWait"in r)?y(x(r.maxWait)||0,e):u,p="trailing"in r?!!r.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=a=i=f=void 0},O.flush=function(){return void 0===f?c:j(m())},O}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&p.call(t)==o}(t))return r;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=c.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):u.test(t)?r:+t}t.exports=function(t,e,r){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(n);return g(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),b(t,e,{leading:o,maxWait:e,trailing:i})}}).call(this,n(21))},19:function(t,e,n){t.exports=n(20)},20:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);window.plot=function(t,e,n,r){var o=document.createElement("div");document.querySelector(".demo-container").appendChild(o),o.classList.add("rect"),o.style.width=n+"px",o.style.height=r+"px",o.style.left=img.offsetLeft+t+"px",o.style.top=img.offsetTop+e+"px"},window.onload=function(){var t=document.getElementById("video"),e=document.getElementById("canvas");t.addEventListener("canplay",function(){document.querySelector("#loading").style.display="none",document.querySelector("#content").style.display="block"});var n=e.getContext("2d"),r=new tracking.ObjectTracker(["face","eye","mouth"]);r.setStepSize(1.7),tracking.track("#video",r,{camera:!0}),r.on("track",o()(function(t){n.clearRect(0,0,e.width,e.height),t.data.forEach(function(t){n.strokeStyle="#a64ceb",n.strokeRect(t.x,t.y,t.width,t.height),n.font="11px Helvetica",n.fillStyle="#fff",n.fillText("x: "+t.x+"px",t.x+t.width+5,t.y+11),n.fillText("y: "+t.y+"px",t.x+t.width+5,t.y+22)})},500))}},21:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}});
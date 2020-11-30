/*! For license information please see styleit-api.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("styleit",[],t):"object"==typeof exports?exports.styleit=t():e.styleit=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e){e.exports=JSON.parse('{"Toggle":"toggle","Extend":"extend"}')},function(e){e.exports=JSON.parse('{"0":"holder","1":"block"}')},function(e,t,n){e.exports=n(5).default},function(e){e.exports=JSON.parse("{}")},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){var t="function"==typeof Map?new Map:void 0;return(i=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})(e)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(){return(l=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,s(t).call(this))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(i=[{key:"connectedCallback",value:function(){"true"===this.getAttribute("zero-space")&&(this.innerHTML="&#8203;")}}])&&r(n.prototype,i),a&&r(n,a),t}(i(HTMLElement));customElements.define("text-selection",u)},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){"object"!==r(t)&&(t={});var n=document.createElement(t.el||"span");return Array.from(e.childNodes).forEach((function(e){return n.appendChild(e)})),e.appendChild(n),n}function i(e){if("block"===window.getComputedStyle(e).display)return e;for(var t=e.parentElement;t&&"block"!==window.getComputedStyle(t).display&&t.parentElement;)t=t.parentElement;return t}function a(e){return function(){for(var e=[],t=window.getSelection(),n=0;n<t.rangeCount;n++)e[n]=t.getRangeAt(n);return e}().map((function(t){return function(e,t){var n;void 0===t&&(t=window.getSelection().getRangeAt(0));if(t.isCollapsed)return[];void 0===e&&(e="span");"string"==typeof e&&(e=document.createElement(e));return n=function(e,t){var n=t.startContainer,r=t.endContainer,o=t.startOffset,i=t.endOffset;return function(t){var a=document.createRange(),l=e.cloneNode();return a.selectNodeContents(t),t===n&&3===n.nodeType&&(a.setStart(t,o),n=l,o=0),t===r&&3===r.nodeType&&(a.setEnd(t,i),r=l,i=1),a.surroundContents(l),l}}(e,t),s(t).map(n)}(e,t)})).flat()}function l(e){for(var t=((e=e||document.body).ownerDocument||document).createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),n=[],r=t.nextNode();r;)n.push(r),r=t.nextNode();return n}function c(e,t){return e.intersectsNode?e.intersectsNode(t):(n=e,r=function(e){var t=e.ownerDocument.createRange();try{t.selectNode(e)}catch(n){t.selectNodeContents(e)}return t}(t),-1===n.compareBoundaryPoints(Range.END_TO_START,r)&&1===n.compareBoundaryPoints(Range.START_TO_END,r));var n,r}function s(e){var t=e.commonAncestorContainer;return l(t.parentNode||t).filter((function(t){return c(e,t)&&function(e){return e.textContent.length>0}(t)}))}function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={remove:!0};Object.assign(r,n),document.getSelection().setBaseAndExtent(e,0,t,t.childNodes.length),r.remove&&[e,t].forEach((function(e){return e.unwrap()}))}function f(e,t){window.getSelection();var n=document.createElement("text-selection");n.setAttribute("zero-space",0===e.textContent.length);var r=document.createElement("text-selection");return r.setAttribute("zero-space",0===t.textContent.length),e.prepend(n),t.appendChild(r),{firstFlag:n,lastFlag:r}}n.r(t);var d=n(0),p=void 0;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"isElement",value:function(e){try{return e instanceof HTMLElement}catch(t){return"object"===y(e)&&1===e.nodeType&&"object"===y(e.style)&&"object"===y(e.ownerDocument)}}},{key:"wrap",value:function(e,t){var n=[],r=(n=Array.isArray(e)?e:[e]).map((function(e){return e.parentNode}));if(0===r.filter((function(e,t,n){return n[0]!==e})).length)return r[0].insertBefore(t,n[0]),n.forEach((function(e){return t.appendChild(e)})),!0}}])&&h(t.prototype,n),r&&h(t,r),e}());Document.prototype.getSelectedElement=function(){var e=document.getSelection();if(null!==e){var t=e.anchorNode;if(null!==t){for(;3===t.nodeType;)t=t.parentNode;return t}return null}},Element.prototype.wrap=function(e){return"string"==typeof e&&(e=document.createElement(e)),p.parentNode.insertBefore(e,p),e.appendChild(p),e},Element.prototype.createSelection=function(){if(document.body.createTextRange){var e=document.body.createTextRange();e.moveToElementText(this),e.select()}else if(window.getSelection){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(this),t.removeAllRanges(),t.addRange(n)}},Element.prototype.ischildOf=function(e){if(!e)return!1;for(var t=this.parentNode;null!=t;){if(t===e)return!0;t=t.parentNode}return!1};var m=function(e){return!!this.parentNode&&(this.parentNode.insertBefore(e,this),e.appendChild(this),e)};function g(e,t){for(var n=[],r=e;r&&r.ischildOf(t.parentElement);){var o=r.classList;Array.from(o).forEach((function(e){n.findIndex((function(t){return t===e}))<0&&n.push(e)})),r=r.parentElement}return n}function E(e){return Array.from(e.classList)}function b(e){function t(e){e.className||e.removeAttribute("class")}Array.from(e.querySelectorAll("span[class]")).concat(e).forEach((function(e){return function(e){t(e),Array.from(e.classList).forEach((function(n){Array.from(e.querySelectorAll("[class='".concat(n,"']"))).forEach((function(e){e.classList.remove(n),t(e)}))}))}(e)}))}function w(e,t){for(var n={},r=e;r&&r.ischildOf(t.parentElement);){for(var o=r.attributes,i=o.length-1;i>=0;i--)"class"!==o[i].name&&"style"!==o[i].name&&(n[o[i].name]||(n[o[i].name]=o[i].value));r=r.parentElement}return n}function S(e,t){for(var n={},r=e.attributes,o=r.length-1;o>=0;o--)(t||!t&&"class"!==r[o].name&&"style"!==r[o].name)&&(n[r[o].name]||(n[r[o].name]=r[o].value));return n}Text.prototype.wrap=m,Element.prototype.wrap=m,Element.prototype.insertAfter=function(e){this.parentNode.insertBefore(e,this.nextSibling)},Element.prototype.replaceNode=function(e){if(this.parentNode)return this.parentNode.insertBefore(e,this),this.remove(),e},Element.prototype.unwrap=function(){var e=document.createRange();e.selectNodeContents(this);var t=e.extractContents();return this.replaceNode(t),t},Element.prototype.removeClassName=function(e){Array.from(this.querySelectorAll("[class='".concat(e,"']"))).concat(this).forEach((function(t){return t.classList.remove(e)}))};n(3);function C(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var A=function(e){var t;if(!v.isElement(e))return null;if("SPAN"!==e.nodeName||e.nodeType!==Node.ELEMENT_NODE)return null;var n=e.firstElementChild;if(!n)return null;if("SPAN"!==n.nodeName||n.nodeType!==Node.ELEMENT_NODE)return null;if(e.textContent!==n.textContent)return null;var r={style:I(e),classes:E(e),attrs:S(e)};for(var o in r.style){var i=r.style[o];n.style[o]=(n.style[o]+" "+i).trim()}for(var a in M(n),r.attrs){var l=r.attrs[a];n.setAttribute(a,l)}return(t=n.classList).add.apply(t,C(r.classes)),b(n),T(n),n.parentElement&&n.parentElement.unwrap(),n};function N(e,t){if(!v.isElement(e)||!v.isElement(t))return null;if("SPAN"!==e.nodeName||"SPAN"!==t.nodeName)return null;var n=[{style:I(e),classes:E(e),attrs:S(e)},{style:I(t),classes:E(t),attrs:S(t)}],r=function(e,t){if(!e||!t)return[];var n=C(e),r=C(t);return n.filter((function(e){return r.includes(e)}))}(n[0].classes,n[1].classes),o=function(e,t){var n={};for(var r in e)if(t[r]){var o=e[r],i=t[r];i===o&&(n[r]=i)}return n}(n[0].style,n[1].style),i=function(e,t){var n,r=document.createElement("span");for(var o in e)r.style[o]=e[o];t.length>0&&(n=r.classList).add.apply(n,C(t));return 0===r.attributes.length?(r.unwrap(),null):r}(o,r);if(!i)return null;var a=[e,t];return a.forEach((function(e){!function(e,t){var n;(n=e.classList).remove.apply(n,C(t)),b(e)}(e,r),function(e,t){for(var n in t)e.style[n]=null}(e,o)})),v.wrap(a,i),C(i.children).forEach((function(e){T(e)})),i}function T(e){var t=function(e){Array.from(e.children).forEach((function(e){t(e),n(e)}));var r=function(e){var t=!1;return Array.from(e.children).forEach((function(e){for(var n=e;null!==n;){var r=n.nextSibling;if(!r)break;n=N(n,r),t=t||null!==n}})),t},o=function(e){var t=!1;return Array.from(e.children).forEach((function(e){for(var n=e;null!==n;)n=A(n),t=t||null!==n})),t},i=!1;do{n(e),r(e),i=o(e)}while(i)};function n(e){if(e.normalize(),b(e),M(e),e&&["STRIKE","EM","I","B","STRONG","U","A","SPAN"].includes(e.nodeName)&&!e.textContent.trim()){var t=e.unwrap();return t.normalize(),t.parentElement}}e.normalize(),t(e)}var k=n(1);function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function O(){var e=document.getSelection();if(null!==e){var t=e.extentNode;if(null!==t){for(;3===t.nodeType;)t=t.parentNode;return t}return null}}function L(e,t){var n=function(e){var t,n,r=e.tag;switch(r){case"#text":t=document.createTextNode(e.textContent);break;case"A":(t=document.createElement(r)).href=e.href,t.target=e.target;break;default:t=document.createElement(r),n=!0}return n&&t&&function(e,t){if(e.classList&&(t.classList=x(e.classList)),e.style){var n=function(e){var t=[];for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];t.push("".concat(n,":").concat(r))}return t.join(";")}(e.style);t.style=n}}(e,t),t};return t||e.type!==k[0]||(t=n(e)),Array.isArray(e.children)&&e.children.forEach((function(e){var r=n(e);r&&(t.appendChild(r),L(e,r))})),t}function P(e,t){"number"!=typeof t&&(t=0);var n=e.nodeName,r=!0,o={},i=!0;switch(k[t]&&(o.type=k[t],t++),n){case"#text":o.tag=n,o.textContent=e.textContent.replace(/\u200B/g,""),r=!1,o.textContent.trim()||(i=!1);break;case"A":o.tag=n,o.href=e.href,o.target=e.target;break;default:o.tag=n}if(!i)return null;if(r){var a=I(e);Object.keys(a).length>0&&(o.style=a),e.classList&&e.classList.length>0&&(o.classList=x(e.classList)),e.childNodes&&e.childNodes.length>0&&(o.children=x(e.childNodes).map((function(e){return P(e,t)})).filter((function(e){return e})))}return o}function j(e,t){for(var n={},r=e;r&&r.ischildOf(t.parentElement);){var o=I(r);for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];n[i]||(n[i]=a)}r=r.parentElement}return n}function R(e,t,n,r){e.style[t]=r?e.style[t]+" "+n:e.style[t].replace(n,""),M(e),b(e),Array.from(e.querySelectorAll("[style*='".concat(n,"']"))).forEach((function(e){e.style[t]=e.style[t].replace(n,""),M(e),b(e)}))}function _(e,t,n){var r;e.style[t]=n,"color"===t&&(r={element:e,key:"color",value:n},[function(e){if("color"===e.key){var t=e.element.closest("[style*='text-decoration']");if(t){var n=B(e.element,t);if(n)for(var r in M(),_(n.center,"text-decoration-color","".concat(e.value)),n)T(n[r]);else _(t,"text-decoration-color","".concat(e.value))}}}].forEach((function(e){return e(r)}))),Array.from(e.querySelectorAll("[style*='".concat(t,"']"))).forEach((function(e){e.style[t]=null,M(e)}))}var D=function(e){return j(O(),e)};function M(e){if(!e)return null;if(e.getAttribute("style")){var t=I(e),n=function(n){t.hasOwnProperty(n)&&Array.from(e.querySelectorAll("[style*='".concat(t[n],"']"))).forEach((function(e){e.style[n]=null,M(e)}))};for(var r in t)n(r)}else e.removeAttribute("style")}function I(e){if(!e||!e.style)return{};var t={},n=e.getAttribute("style");if(n){var r=n.split(";");Array.isArray(r)&&r.forEach((function(e){var n=e.split(":");n[1]&&n[0]&&(t[n[0].trim()]=n[1].trim())}))}return t}function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.tag,o=void 0===r?"span":r;if(!e.ischildOf(t))return null;if(!v.isElement(e)||!v.isElement(t))return null;var i=function(e,t){var n=j(e,t),r=w(e,t),i=g(e,t),a=document.createElement(o);for(var l in a.className=i.join(" "),n){var c=n[l];a.style[l]=c}for(var s in r){var u=r[s];a.setAttribute(s,u)}return a};e.createSelection();var a=document.getSelectedElement(),l=i(a,t);l.appendChild(e);var c=window.getSelection(),s=c.getRangeAt(0);s.setStart(t,0);var u=document.getSelectedElement(),f=i(u,t),d=s.extractContents();f.appendChild(d),s.setEnd(t,t.childNodes.length);var p=document.getSelectedElement(),y=i(p,t),h=s.extractContents();y.appendChild(h);var m={left:f,center:l,right:y};for(var E in t.innerHTML="",m){var b=m[E];t.appendChild(b)}return t.unwrap(),m}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uniqeID="styleit-copy-paste-on-action",!t)return null;this.target=t,this.onPaste=function(e){if(e.target.closest("#".concat(n.target.id))){var t=e.clipboardData||window.clipboardData,o=t.getData("text/html").trim();o||(o=(o=t.getData("text/plain").trim()).replace(/\n/g,"<br/>"));var i=o;["<html>","<body>","\x3c!--StartFragment--\x3e","\x3c!--EndFragment--\x3e","</body>","</html>"].forEach((function(e){return i=i.replace(e,"")}));var a=document.createElement("div");a.innerHTML=i.replace(/<!--([\s\S]*?)-->/g,"");var l=[],c=["META","LINK","SCRIPT","TCXSPAN","O:P","STYLE"];!function e(t,n){for(n(t),t=t.firstChild;t;)e(t,n),t=t.nextSibling}(a,(function(e){c.includes(e.nodeName)||l.push(e)}));var s=document.createElement("div");document.body.appendChild(s),l.forEach((function(e){if((s.appendChild(e),e.textContent&&1===e.nodeType&&"br"!==e.nodeName)&&"block"===window.getComputedStyle(e).display){var t=document.createElement("br");e.insertAfter(t)}3!==e.nodeType&&"BR"!==e.nodeName&&e.remove()}));for(var u=Array.from(s.childNodes),f=0;f<u.length;f++){var d=u[f];if(d.textContent.trim()){u[u.length-1].textContent.trim()||u[u.length-1].remove();break}d.remove()}e.preventDefault(),function(e){var t,n;if(window.getSelection&&(t=window.getSelection()).getRangeAt&&t.rangeCount){var o;(n=t.getRangeAt(0)).deleteContents(),"string"==typeof e?(o=document.createElement("div")).innerHTML=e:"object"===r(e)&&(o=e);for(var i,a,l=document.createDocumentFragment();i=o.firstChild;)a=l.appendChild(i);n.insertNode(l),a&&((n=n.cloneRange()).setStartAfter(a),n.collapse(!0),t.removeAllRanges(),t.addRange(n))}}(s),s.remove()}},this.target.addEventListener("paste",this.onPaste),this.target.addEventListener("copy",this.onCopy)}var t,n,o;return t=e,(n=[{key:"Destroy",value:function(){this.target.removeEventListener("paste",this.onPaste),this.target.removeEventListener("copy",this.onCopy),this.target=null}}])&&F(t.prototype,n),o&&F(t,o),e}();var q=function e(t,n){var r=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t)return null;this.onInspect=n,this.target=t;var o=function(){var e=D(r.target);"function"==typeof r.onInspect&&r.onInspect(e)};this.onKeyDown=function(e){if(8===e.keyCode&&r.target.children.length<=1&&!r.target.textContent)return e.preventDefault(),!1;o()},this.onClick=function(){o()},this.target.addEventListener("click",this.onClick),this.target.addEventListener("keydown",this.onKeyDown),this.Destroy=function(){r.target.removeEventListener("click",r.onClick),r.target.removeEventListener("keydown",r.onKeyDown),r.target=null}};var K=function e(t,n){var r=this;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t&&Array.isArray(n)?(this.keys=n,this.target=t,this.keypress=function(e){e.ctrlKey&&r.keys.forEach((function(t){Array.isArray(t)&&2===t.length&&t[0]===e.keyCode&&"function"==typeof t[1]&&(e.preventDefault(),t[1]())}))},this.target.addEventListener("keydown",this.keypress),void(this.Destroy=function(){r.target.removeEventListener("keydown",r.keypress),r.target=null})):null};function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"Connect",value:function(e,t){if("string"==typeof e){if(!(e=document.getElementById(e)))return null}else if(!v.isElement(e))return null;return this.RenderInnerHTML(e),this.plugins=this.usePlugins(e,t),e}},{key:"usePlugins",value:function(e,t){return{copyPaste:new H(e),inspector:new q(e,t.onInspect),keyPress:new K(e,t.onKeyPress)}}},{key:"RenderInnerHTML",value:function(e){var t,n=L(P(e));(t=e,new Promise((function(e){for(;t.firstElementChild;)t.firstElementChild.remove();e()}))).then((function(){return e.innerHTML=n.innerHTML}))}},{key:"Destroy",value:function(){for(var e in this.plugins)this.plugins.hasOwnProperty(e)&&this.plugins[e].Destroy()}}])&&V(t.prototype,n),r&&V(t,r),e}();n(4);function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(){function e(t,n){var r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.__config={onInspect:void 0},this.Connector=new z,this.modeHandlers=(U(r={},d.Toggle,(function(e,t,n,r){return o.onToggle(e,t,n,r)})),U(r,d.Extend,(function(e,t,n,r){return o.onExtend(e,t,n,r)})),r),this.config=n?Object.assign(this.__config,n):this.__config,this.events={styleChanged:this.config.onInspect},this.connectedElement=this.Connector.Connect(t,this.config)}var t,n,r;return t=e,(n=[{key:"Save",value:function(){return P(this.connectedElement)}},{key:"Load",value:function(e){return L(e,this.connectedElement)}},{key:"Destroy",value:function(){for(var e in this.Connector.Destroy(),this)this[e]=null,delete this[e]}},{key:"UnLink",value:function(){if(this.isValid()){var e=window.getSelection();if(e&&!e.toString()){var t,n=e.baseNode;return n&&3===n.nodeType&&n.parentElement&&(t=n.parentElement),n&&1===n.nodeType&&(t=t.closest("a")),t&&t.unwrap(),null}var r=a();Array.from(r).forEach((function(e){var t=e.closest("a");if(t){var n=B(e,t,{tag:"a"});n&&n.center.unwrap()}Array.from(e.querySelectorAll("a")).forEach((function(e){e.unwrap()})),e.unwrap()}));var o=f(r[0],r[r.length-1]);u(o.firstFlag,o.lastFlag)}}},{key:"Link",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e&&(!e||e.href)&&this.isValid()){if(window.getSelection&&!window.getSelection().toString())return null;var t=function(e,t){return e=(e=e.replace(/:/g,"")).replace(/\/\//g,""),(e+=":").includes("http")&&(e+="//"),t.push(e),e},n=e.href,r=void 0===n?"":n,o=e.protocol,i=void 0===o?"":o,l=e.target,c=void 0===l?"":l,s=a("a"),d=[],p=function(e){var t=document.createElement("a");return t.href=e,t}(r),y=r.trim().replace(/https:/g,"").replace(/http:/g,"").replace(/mailto:/g,"").replace(/tel:/g,"").replace(/\//g,""),h=i.trim()||p.protocol,v=null,m={_blank:"_blank",_self:"_self",_parent:"_parent",_top:"_top"}[c.trim().toLowerCase()];m&&(v=m),h.trim()&&(h=t(h,d)),y&&d.push(y);var g=d.join("");!function(e){e.forEach((function(e){Array.from(e.querySelectorAll("a")).forEach((function(e){return e.unwrap()}));var t=e.parentElement?e.parentElement.closest("a"):null;if(t){var n=B(e,t,{tag:"a"});n&&n.center.unwrap()}}))}(s),function(e,t,n){e.forEach((function(e){e.href=t,n&&e.setAttribute("target",n)}))}(s,g,v);var E=f(s[0],s[s.length-1]),b=E.firstFlag,w=E.lastFlag;u(b,w),T(this.connectedElement)}}},{key:"ToggleClass",value:function(e,t){if(this.isValid()){if("string"!=typeof e)return null;var n=a();if(0!==n.length){t||(t={}),"boolean"!=typeof t.selection&&(t.selection=!0),("boolean"==typeof t.isON?t.isON:n[0].closest("[class='".concat(e,"']")))?n.forEach((function(t){if(t.parentElement){var n=t.parentElement.closest("[class='".concat(e,"']"));if(n){var r=B(t,n);r&&r.center.removeClassName(e)}}else t.removeClassName(e)})):n.forEach((function(t){return t.classList.add(e)}));var r=t.selection?f(n[0],n[n.length-1]):{firstFlag:null,lastFlag:null},o=r.firstFlag,i=r.lastFlag;if(T(this.connectedElement),o&&i)u(o,i);else{var l=window.getSelection();l.removeAllRanges&&l.removeAllRanges()}}}}},{key:"execCmd",value:function(e,t,n,r){var o=this;if(this.isValid()&&this.isVAlidKeyValue(e,t)){if(this.connectedElement.normalize(),this.ELEMENTS=[],n=n||d.Extend,r||(r={}),"boolean"!=typeof r.selection&&(r.selection=!0),this.ELEMENTS=a(),!r.selection){var i=this.ELEMENTS[this.ELEMENTS.length-1];i&&(this.caretHolder=this.createCaretPlacement(i))}r.unWrap&&Array.isArray(r.unWrap)&&r.unWrap.forEach((function(e){o.ELEMENTS.forEach((function(t){var n=t.closest(e);n&&n.unwrap()}))}));var c,s,p=r.selection?f(this.ELEMENTS[0],this.ELEMENTS[this.ELEMENTS.length-1]):{firstFlag:null,lastFlag:null},y=p.firstFlag,h=p.lastFlag;if(c=l(this.connectedElement),Array.isArray(c)||(c=[c]),c.forEach((function(e){e.nodeType===Node.TEXT_NODE&&e.parentElement&&"TEXT-SELECTION"!==e.parentElement.nodeName&&(e.textContent=e.textContent.replace(/\u200B/g,""))})),this.ELEMENTS.forEach((function(i){r.onOff=s;var a=o.modeHandlers[n](i,e,t,r);n===d.Toggle&&void 0===s&&(s=a)})),T(this.connectedElement),y&&h)u(y,h);else{var v=window.getSelection();v.removeAllRanges&&v.removeAllRanges(),this.caretHolder&&(function(e,t){var n=e;n.focus();var r=Array.from(n.childNodes).filter((function(e){return e.nodeType===Node.TEXT_NODE})),o=document.createRange();o.setStart(r[0],t),o.setEnd(r[0],t);var i=window.getSelection();i.removeAllRanges(),i.addRange(o)}(this.caretHolder,this.caretHolder.textContent.length),this.caretHolder.unwrap(),this.caretHolder=null)}this.dispatchEvent("styleChanged",D(this.connectedElement))}}},{key:"createCaretPlacement",value:function(e){if(!e)return null;var t=document.createElement("text-selection");return t.setAttribute("zero-space","true"),e.appendChild(t),t}},{key:"dispatchEvent",value:function(e,t){this.events[e]&&this.events[e](t)}},{key:"onToggle",value:function(e,t,n,r){if("block"!==r.target){var i=e.closest("[style*='".concat(n,"']"));if(i&&"block"===window.getComputedStyle(i).display){var a=o(i);return i.style[t]=null,a.style[t]=n,r.onOff=!1,this.onToggle(e,t,n,r)}if(i&&i!==e){void 0===r.onOff&&(r.onOff=!1);var l=B(e,i);l&&R(l.center,t,n,r.onOff)}else void 0===r.onOff&&i?r.onOff=!1:void 0===r.onOff&&(r.onOff=!0),R(e,t,n,r.onOff),T(e);return r.onOff}this.createBlockStyle(r,e,t,n)}},{key:"onExtend",value:function(e,t,n,r){if("block"===r.target)this.createBlockStyle(r,e,t,n);else{var a=e.closest("[style*='".concat(t,"']"));if(a){var l=B(e,a);if(l)_(l.center,t,n);else if("block"===r.target)a.style[t]=n;else{if("block"!==r.target)return _(o(a,{el:"span"}),t,n),a.style[t]=null,this.onExtend(e,t,n);if(a!==e){var c=B(e,a);c&&_(c.center,t,n)}}}else if("block"!==window.getComputedStyle(e).display&&"block"===r.target){var s=i(e);if(s&&s.ischildOf(this.connectedElement))_(parentElement,t,n);else{var u=document.createElement("div");parentElement.wrap(u),_(u,t,n)}}else _(e,t,n)}}},{key:"createBlockStyle",value:function(e,t,n,r){var o=this,i=function(e){var t=window.getComputedStyle(e);return t&&"block"===t.display?e:e.parentNode&&e.parentNode!==o.connectedElement?i(e.parentNode):void 0};if("inline"===e.as){var a=i(t);if(a){var l=function(e){e.style[n]=null,Array.from(e.childNodes).forEach((function(e){3===e.nodeType?function(e){var t=document.createElement("span");t.style[n]=r,e.wrap(t)}(e):1===e.nodeType&&"BR"!==e.nodeName&&("inline"!==window.getComputedStyle(e).display?l(e):e.style[n]=r)}))};l(a)}else this.createBlockElAndStyleIt(n,r,t)}else{var c=i(t);c?(c.style[n]=r,Array.from(c.querySelectorAll("[style*='".concat(n,"']"))).forEach((function(e){return e.style[n]=null}))):this.createBlockElAndStyleIt(n,r,t)}}},{key:"createBlockElAndStyleIt",value:function(e,t,n){var r=document.createElement("p");r.style[e]=t,n.wrap(r)}},{key:"isVAlidKeyValue",value:function(e,t){return!("string"!=typeof e||"string"!=typeof t)}},{key:"isValid",value:function(){if(!this.connectedElement)return!1;if("true"!==this.connectedElement.contentEditable)return!1;var e=O();return!(!e||!e.ischildOf(this.connectedElement)&&e!==this.connectedElement)||void 0}}])&&W(t.prototype,n),r&&W(t,r),e}();n.d(t,"default",(function(){return J}));var J=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=new X(t,n);r&&(this.ExecCmd=r.execCmd,this.ToggleClass=r.ToggleClass,this.Link=r.Link,this.UnLink=r.UnLink,this.Save=r.Save,this.Load=r.Load,this.Destroy=r.Destroy,this.Modes=d,this.ToggleClass=this.ToggleClass.bind(r),this.ExecCmd=this.ExecCmd.bind(r),this.Link=this.Link.bind(r),this.UnLink=this.UnLink.bind(r),this.Save=this.Save.bind(r),this.Load=this.Load.bind(r),this.Destroy=this.Destroy.bind(r))}}])}));
//# sourceMappingURL=main.js.map
//# sourceMappingURL=styleit-api.js.map
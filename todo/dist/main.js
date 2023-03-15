(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,'* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: #fa9090;\n    font-family: \'Roboto\', sans-serif;\n    display: grid;\n    min-height: 100vh;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 50px auto 50px;\n    grid-template-areas:\n        "article header"\n        "article main"\n        "article footer";\n    grid-gap: 10px;\n    padding: 10px;\n}\n\narticle {\n    grid-area: article;\n    background-color: #f0f0f0;\n    padding: 10px;\n}\n\nnav {\n    grid-area: header;\n    background-color: #f0f0f0;\n    padding: 10px;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n}\n\nmain {\n    grid-area: main;\n    background-color: #f0f0f0;\n    padding: 10px;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\nli {\n    float: right;\n}\n\nli a {\n    display: block;\n    color: #000;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n}\n\nli a:hover {\n    background-color: #ddd;\n}\n\n.active {\n    background-color: #4CAF50;\n}\n\nfooter {\n    grid-area: footer;\n    background-color: #f0f0f0;\n    padding: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#todo-list {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.todo-item {\n    height: 50px;\n    width: fit-content;\n    background-color: purple;\n    margin: 10px;\n    border-radius: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 16px;\n    padding: 0 10px;\n    font-weight: bold;\n    /* fade in */\n    animation: fade-in 0.5s ease-in-out;\n}\n\n.todo-item:hover {\n    animation: wiggle 0.5s ease-in-out;\n}\n\n@keyframes wiggle {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: rotate(5deg);\n    }\n    50% {\n        transform: rotate(0deg);\n    }\n    75% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n.remove-todo-button {\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-size: 10px;\n    font-weight: bold;\n    cursor: pointer;\n    /* position in the center of the container */\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),f=t(426),g={};function m(){const n=document.getElementById("todo-input"),e=n.value,t=JSON.parse(localStorage.getItem("todos"))||[];t.push(e),localStorage.setItem("todos",JSON.stringify(t)),n.value="",v()}function v(){const n=JSON.parse(localStorage.getItem("todos"))||[],e=document.getElementById("todo-list");e.innerHTML="";for(let t of n){const o=n.indexOf(t),r=document.createElement("div");r.classList.add("todo-item"),r.id=o;const a=document.createTextNode(t),i=document.createElement("button");i.classList.add("remove-todo-button"),i.innerHTML="Remove",i.addEventListener("click",(()=>h(o))),r.appendChild(i),r.appendChild(a),e.appendChild(r)}}function h(n){const e=JSON.parse(localStorage.getItem("todos"))||[];e.splice(n,1),localStorage.setItem("todos",JSON.stringify(e)),v()}g.styleTagTransform=u(),g.setAttributes=d(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("todo-button").addEventListener("click",m),v()}))})()})();
(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>y});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),s=n.n(c),d=new URL(n(613),n.b),u=new URL(n(105),n.b),l=new URL(n(746),n.b),p=new URL(n(680),n.b),m=a()(o()),f=s()(d),b=s()(u),h=s()(l),v=s()(p);m.push([t.id,`\n\n@font-face {\n    font-family: 'Script';\n    src:url(${f});\n    font-weight: 600;\n    font-style:normal;\n}\n\n@font-face {\n    font-family: 'base';\n    src:url(${b});\n    font-weight: 600;\n    font-style:normal;\n}\n\nbody{\n    height:95vh;\n    margin:0;\n}\n\n#MainGrid {\n    display:grid;\n    grid-template-rows:1fr 8fr;\n    grid-template-columns:3fr 7fr;\n    gap:.5rem;\n    max-height:auto;\n}\n\n.griditem1, .griditem2 {\n    border:solid black;\n    padding:.5rem;\n}\n\n.banner {\n    grid-column:1/3;\n    font-family: 'Script';\n    text-align: center;\n    font-size:3rem;\n    padding: 10px;\n}\n\nul {\n    list-style-type: none;\n    margin:0;\n    padding: 1rem 0 0 0;\n    font-family: 'base';\n    text-align: center;\n}\n\n.griditem1,.griditem2 {\n    display:flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n.project {\n    padding:.5rem;\n    background-color: aliceblue;\n    border-radius:.5rem;\n    margin-bottom:.5rem;\n}\n\n#expanded {\n    background-color: aliceblue;\n    border:solid 2px rgba(77, 160, 255, 0.548);\n    padding:1rem;\n}\n\n.project:hover,\n.todoitem:hover {\n    cursor:pointer;\n}\n\n#addbtn,\n#todobtn,#submitButton {\n    display:flex;\n    justify-content:space-evenly;\n    background-color: aliceblue;\n    border:solid rgba(77, 160, 255, 0.548) 2px;\n    border-radius:.5rem;\n    font-family: 'Script';\n    padding:.5rem;\n}\n\n#addbtn:hover,\n#todobtn:hover,\n#submitButton:hover {\n    cursor:pointer;\n    box-shadow: -3px 3px rgba(77, 160, 255, 0.548);\n}\n\n\n#addbtn:active,\n#todobtn:active,\n#submitButton:active {\n    cursor:pointer;\n    translate: -3px 3px;\n    box-shadow:none;\n}\n\n.formHidden {\ndisplay:none !important;\n}\n    \n.formDisplay {\ndisplay:block;\n}\n    \n#projectForm>form {\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n    font-family:'base';\n}\n\n.form-row1,.form-row2 {\n    font-family:'base';\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n    margin-bottom:5px;\n    gap:5px;\n}\n\n.form-row1>input[type=text] {\n    outline:none;\n    border:solid 1px rgba(77, 160, 255, 0.548);\n    width:min(300px,90%);\n    border-radius:4px;\n\n} \n\ntextarea {\n    outline:none;\n    border:solid 1px rgba(77, 160, 255, 0.548);\n    width:min(300px,90%);\n    border-radius:4px; \n}\n\n#submitButton {\n    padding-left:20px;\n    padding-right:20px;\n}\n\ninput[type=text]:hover,\ntextarea:hover {\n    background-color:rgba(240, 248, 255, 0.534);\n}\n\ninput[type=text]:active,\ntextarea:active {\n    background-color:rgba(240, 248, 255, 0.534);\n}\n\n.removebtn,\n.prioritychanger{\noutline:none;\nborder:none;\nbackground-color: aliceblue;\ncursor:pointer;\n}\n\n.removebtn:before {\n    content:url(${h})\n}\n\n.prioritychanger:before {\n    content:url(${v});\n}\n\n.removebtn:hover,\n.prioritychanger:hover {\n    transform:scale(.95);\n    opacity: .75;\n}\n\n.removebtn:active,\n.prioritychanger:active {\n    transform:scale(.85);\n    opacity: .75;\n}`,""]);const y=m},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=r(t,o),d=0;d<i.length;d++){var u=n(i[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},105:(t,e,n)=>{t.exports=n.p+"1036357b9651eff7d3dd.ttf"},613:(t,e,n)=>{t.exports=n.p+"68015177cbf9575be4a4.ttf"},680:(t,e,n)=>{t.exports=n.p+"26282881583dcc1c3371.svg"},746:(t,e,n)=>{t.exports=n.p+"fc206c2b3a24c4ad59ac.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r={};(()=>{n.d(r,{m:()=>k,E:()=>j});var t=n(379),e=n.n(t),o=n(795),i=n.n(o),a=n(569),c=n.n(a),s=n(565),d=n.n(s),u=n(216),l=n.n(u),p=n(589),m=n.n(p),f=n(426),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=l(),e()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;class h{static myLibrary=[];constructor(t){this.projectTitle=t,this.toDoList=[],this.toDoItem=function(t,e,n,r){const o={title:t,dueDate:e,description:n,priority:r};y.bind(this)(o)},v.bind(this)()}}function v(){h.myLibrary.push(this);const t=h.myLibrary.length-1;j.bind(this)(t),console.log(h.myLibrary)}function y(t){this.toDoList.push(t),k.bind(this)(t)}document.addEventListener("DOMContentLoaded",(t=>{const e=new h("Clean The Porsche 911");e.toDoItem("Detail the exterior","2023-09-10","Use claybar on the exterior","medium"),e.toDoItem("Clean the interior","2023-09-15","Stick a tree freshener in there and call it a day","low")}));const g=document.body;g.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","MainGrid");const e=document.createElement("div");e.setAttribute("class","banner"),e.textContent="To Do List",t.appendChild(e);const n=document.createElement("div");n.setAttribute("class","griditem1"),t.appendChild(n);const r=document.createElement("div");return r.setAttribute("class","griditem2"),t.appendChild(r),t}()),document.querySelector(".griditem1").appendChild(function(){const t=document.createElement("ul");return t.setAttribute("class","projects"),t}());const x=document.querySelector(".projects"),A=document.querySelector(".griditem2");A.appendChild(function(){const t=document.createElement("ul");return t.setAttribute("class","todos"),t}());const E=document.querySelector(".griditem1"),C=(document.querySelector("#submitButton"),document.querySelector("#projectForm")),w=document.querySelector("#toDoForm"),L=document.getElementsByName("priority");g.removeChild(C),E.appendChild(C),g.removeChild(w),A.appendChild(w),A.appendChild(function(){const t=document.createElement("button");return t.textContent="Add New To Do",t.setAttribute("id","todobtn"),t}()),E.appendChild(function(){const t=document.createElement("button");return t.textContent="Add Project",t.setAttribute("id","addbtn"),t}());const S=document.querySelector(".todos");let D="0";function j(t){const e=document.createElement("li");e.setAttribute("id",`${t}`),e.setAttribute("class","project"),e.textContent=this.projectTitle,x.appendChild(e)}function k(t){const e=document.createElement("li");e.setAttribute("class","todoitem"),"undefined"==`${t.dueDate}`?e.textContent=`${t.title}`:e.textContent=`${t.title} due by ${t.dueDate}`,S.appendChild(e)}function T(){const t=h.myLibrary[D].toDoList;document.querySelectorAll(".todoitem").forEach((t=>{t.remove()})),t.forEach((t=>{k(t)}))}function $(t,e){for(let n=0;n<t.length;n++)if(t[n]==e)return n}document.addEventListener("click",(t=>{const e=t.target;"project"==e.getAttribute("class")&&(D=e.id,T())})),document.addEventListener("click",(t=>{const e=t.target,n=document.querySelectorAll(".todoitem");if("todoitem"==e.getAttribute("class")){const t=h.myLibrary[D].toDoList[$(n,e)];"expanded"!==e.getAttribute("id")?function(t,e){for(const n in e){const r=document.createElement("li");r.textContent=`${n.charAt(0).toUpperCase()+n.slice(1)}: ${e[n]}`,t.appendChild(r),t.setAttribute("id","expanded")}const n=document.createElement("button");n.setAttribute("class","removebtn"),t.appendChild(n);const r=document.createElement("button");r.setAttribute("class","prioritychanger"),t.appendChild(r)}(e,t):"expanded"==e.getAttribute("id")&&(function(t,e){const n=Object.keys(e).length;for(let e=1;e<=n+2;e++)t.childNodes[1].remove()}(e,t),e.setAttribute("id",""))}})),document.addEventListener("click",(t=>{"addbtn"==t.target.id&&C.setAttribute("class","formDisplay")})),document.addEventListener("click",(t=>{"todobtn"==t.target.id&&w.setAttribute("class","formDisplay")})),C.addEventListener("submit",(function(t){t.preventDefault(),new h(project_title.value),C.setAttribute("class","formHidden"),project_title.value=""})),w.addEventListener("submit",(function(t){let e="";t.preventDefault();const n=title.value,r=dueDate.value,o=description.value;L.forEach((t=>{t.checked&&(e=t.value)})),h.myLibrary[D].toDoItem(n,r,o,e),w.setAttribute("class","formHidden"),title.value="",dueDate.value="",description.value="",L.forEach((t=>{"Medium"==t.value&&(t.checked=!0)}))})),document.addEventListener("mouseup",(t=>{if("removebtn"==t.target.getAttribute("class")){const e=$(document.querySelectorAll(".todoitem"),t.target.parentElement);!function(t,e){h.myLibrary[t].toDoList.splice(e,1)}(D,e),T()}else if("prioritychanger"==t.target.getAttribute("class")){const e=$(document.querySelectorAll(".todoitem"),t.target.parentElement);!function(t,e){const n=prompt("low, medium, or high priority?","medium");h.myLibrary[t].toDoList[e].priority=n}(D,e),T()}}))})()})();
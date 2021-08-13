(()=>{var t={460:t=>{t.exports=e;var r=Array.prototype;function e(t){if(!(this instanceof e))return new e(t);var n=t.className.replace(/^\s+|\s+$/g,""),o=n.split(/\s+/);if(this._elem=t,this.length=0,n)for(var s=0;s<o.length;s+=1)r.push.call(this,o[s])}function n(t,r){for(var e=t.length,n=0;n<e;n+=1)if(t[n]===r)return n;return-1}e.prototype.item=function(t){return t>=this.length?null:this[t]},e.prototype.add=function(){for(var t=0;t<arguments.length;t+=1){var e=String(arguments[t]);n(this,e)>=0||r.push.call(this,e)}this._elem.className=this.toString()},e.prototype.remove=function(){for(var t=0;t<arguments.length;t+=1){var e=String(arguments[t]),o=n(this,e);o<0||r.splice.call(this,o,1)}this._elem.className=this.toString()},e.prototype.contains=function(t){return n(this,String(t))>=0},e.prototype.toggle=function(t,r){return void 0!==r?r?this.add(t):this.remove(t):this.contains(t)?this.remove(t):this.add(t),this.contains(t)},e.prototype.replace=function(t,e){var o=n(this,t);return!(o<0||(r.splice.call(this,o,1,e),this._elem.className=this.toString(),0))},e.prototype.toString=function(){return r.join.call(this," ")}},939:(t,r,e)=>{"use strict";e.d(r,{Z:()=>s});var n=e(476),o=e.n(n)()((function(t){return t[1]}));o.push([t.id,".color-card {\r\n    height: 10rem;\r\n    border-radius: 2rem;\r\n    margin: 0.5rem;\r\n    display: inline-block;\r\n    transition-duration: 0.3s;\r\n    transition-property: opacity, width, margin-left, margin-right, background-color, visibility;\r\n}\r\n\r\n.color-card .color-card-hard {\r\n    width: 0rem;\r\n}\r\n\r\n.color-card-normal {\r\n    width: 10rem;\r\n}\r\n\r\n.color-card:hover {\r\n    outline: none;\r\n    border-color: #EEE;\r\n    box-shadow: 0 0 10px #EEE;\r\n}",""]);const s=o},596:(t,r,e)=>{"use strict";e.d(r,{Z:()=>s});var n=e(476),o=e.n(n)()((function(t){return t[1]}));o.push([t.id,".header-msg {\r\n    text-align: center;\r\n    margin: 2rem auto;\r\n    text-transform: uppercase;\r\n    transition: color 0.6s ease;\r\n    /* text-shadow: rgb(139, 139, 139) 1px 1px ; */\r\n}\r\n\r\n.header-msg .display-2 {\r\n    font-weight: bold;\r\n}\r\n\r\n.header-msg .display-6 {\r\n    font-weight: 400;\r\n    padding-top: 1rem;\r\n}",""]);const s=o},986:(t,r,e)=>{"use strict";e.d(r,{Z:()=>s});var n=e(476),o=e.n(n)()((function(t){return t[1]}));o.push([t.id,".container {\r\n    max-width: 1024px;\r\n}\r\n\r\nbody {\r\n    transition: background 0.6s;\r\n    -webkit-transition: background 0.6s;\r\n    -moz-transition: background 0.6s;\r\n}",""]);const s=o},753:(t,r,e)=>{"use strict";e.d(r,{Z:()=>s});var n=e(476),o=e.n(n)()((function(t){return t[1]}));o.push([t.id,".navbar .navbar-desc {\r\n    padding-top: 0.3125rem;\r\n    color: #6c757d;\r\n}\r\n\r\n.navbar .nav-link {\r\n    padding-bottom: 0.3125rem;\r\n    /* padding-left: 0.3125rem !important;\r\n    padding-right: 0.3125rem !important; */\r\n    transition: 0.5s;\r\n    border-bottom: 1px solid #FFF;\r\n}\r\n\r\n.navbar .navbar-brand {\r\n    font-weight: bold;\r\n    height: 3rem;\r\n}\r\n\r\n.navbar {\r\n    padding: 0;\r\n    margin-top: 0rem;\r\n    margin-bottom: 0.3125rem;\r\n}\r\n\r\n.navbar .nav-link:hover {\r\n    padding-bottom: 0.3125rem;\r\n    /* padding-left: 0.3125rem !important;\r\n    padding-right: 0.3125rem !important; */\r\n    transition: 0.5s;\r\n    border-bottom: 1px solid #6c757d;\r\n}",""]);const s=o},466:(t,r,e)=>{"use strict";e.d(r,{Z:()=>s});var n=e(476),o=e.n(n)()((function(t){return t[1]}));o.push([t.id,".rst-btn-container {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n.rst-btn-container .btn {\r\n    margin: 3rem auto;\r\n    display: block;\r\n    font-weight: bold;\r\n    font-size: 1rem;\r\n    border-radius: 1rem;\r\n    background-color: #eee;\r\n    color: #505050;\r\n    border-color: #505050;\r\n    border-width: 0.125rem;\r\n}\r\n\r\n.rst-btn-container .btn:hover {\r\n    transition: 0.4s;\r\n    background-color: #777777;\r\n    color: #eee;\r\n    border-color: #777777;\r\n}",""]);const s=o},476:t=>{"use strict";t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var e=t(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(o[i]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);n&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},892:t=>{"use strict";var r=[];function e(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function n(t,n){for(var s={},i=[],a=0;a<t.length;a++){var l=t[a],c=n.base?l[0]+n.base:l[0],h=s[c]||0,d="".concat(c," ").concat(h);s[c]=h+1;var u=e(d),g={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(r[u].references++,r[u].updater(g)):r.push({identifier:d,updater:o(g,n),references:1}),i.push(d)}return i}function o(t,r){var e=r.domAPI(r);return e.update(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e.update(t=r)}else e.remove()}}t.exports=function(t,o){var s=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var a=e(s[i]);r[a].references--}for(var l=n(t,o),c=0;c<s.length;c++){var h=e(s[c]);0===r[h].references&&(r[h].updater(),r.splice(h,1))}s=l}}},311:t=>{"use strict";var r={};t.exports=function(t,e){var n=function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},60:t=>{"use strict";t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r),r}},192:(t,r,e)=>{"use strict";t.exports=function(t){var r=e.nc;r&&t.setAttribute("nonce",r)}},760:t=>{"use strict";t.exports=function(t){var r=t.insertStyleElement(t);return{update:function(e){!function(t,r,e){var n=e.css,o=e.media,s=e.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),r.styleTagTransform(n,t)}(r,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)}}}},865:t=>{"use strict";t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var s=r[n]={id:n,exports:{}};return t[n](s,s.exports,e),s.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";class t{static getRootClass(){return".component"}constructor(t){this.root=t,this.handlers={}}on(t,r){this.handlers[t]=r}fire(t,r){this.handlers[t](this,...arguments)}}var r=e(892),n=e.n(r),o=e(760),s=e.n(o),i=e(311),a=e.n(i),l=e(192),c=e.n(l),h=e(60),d=e.n(h),u=e(865),g=e.n(u),m=e(753),p={};p.styleTagTransform=g(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=d(),n()(m.Z,p),m.Z&&m.Z.locals&&m.Z.locals;var f=e(460),b=e.n(f);class v extends t{static getRootClass(){return".nav-link"}constructor(t){super(t),t.addEventListener("click",this.handleLinkClick.bind(this)),this.navLink=t.querySelector(".nav-link"),this.classList=b()(t),this.className="nav-link",this.id=t.id}toggleActive(){this.classList.toggle("active")}resetClass(){this.className="nav-link"}handleLinkClick(){this.fire("click",this)}}class C extends t{static getRootClass(){return".navbar"}constructor(t){super(t),this.links=[],this.activeLink="normal";const r=t.querySelectorAll(v.getRootClass());for(let t of r){const r=new v(t);r.on("click",this.handleLinkClick.bind(this)),this.links[t.id]=r}}handleLinkClick(t){let r=t.id;r!==this.activeLink&&(this.links[this.activeLink].toggleActive(),this.links[r].toggleActive(),this.activeLink=r,this.fire(r))}}var y=e(596),k={};k.styleTagTransform=g(),k.setAttributes=c(),k.insert=a().bind(null,"head"),k.domAPI=s(),k.insertStyleElement=d(),n()(y.Z,k),y.Z&&y.Z.locals&&y.Z.locals;class w extends t{static getRootClass(){return".header-msg"}constructor(t,r){super(t),this.answerColor=t.querySelector(".answer-color"),this.message=t.querySelector(".message"),t.style.color="#FFF",this.reset(r)}reset(t){console.log(t),this.answerColor.textContent=String(t),this.message.textContent="What's the color?"}showColor(t){this.answerColor.textContent=t}showCorrectMessage(t){this.root.style.color=function(t){let r=String(t).substring(4,String(t).length-1).split(", "),[e,n,o]=r;return s=e,i=n,a=o,Math.sqrt(.299*s^2+.587*i^2+.114*a^2)<7?"white":"#222222";var s,i,a}(t),this.message.textContent="Correct!"}showWrongMessage(){this.message.textContent="Try Again!"}}var x=e(939),A={};A.styleTagTransform=g(),A.setAttributes=c(),A.insert=a().bind(null,"head"),A.domAPI=s(),A.insertStyleElement=d(),n()(x.Z,A),x.Z&&x.Z.locals&&x.Z.locals;class M extends t{static getRootClass(){return".color-card"}constructor(t){super(t),t.addEventListener("click",this.handleCardClick.bind(this)),this.reset(),this.color=[],this.classList=b()(t)}static randomColor(){return"rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"}reset(){this.color=M.randomColor(),this.changeColor(this.color)}getColor(){return this.color}toBlank(){this.root.style.opacity=0}changeColor(t){this.root.style.backgroundColor=t,this.root.style.opacity=1}handleCardClick(){this.fire("click",this.color)}contains(t){return this.classList.contains(t)}}class S extends t{static getRootClass(){return".color-card-board"}constructor(t,r){super(t),this.colorCards=[],this.correctPick=!1,this.cardAmount=3;const e=t.querySelectorAll(M.getRootClass());for(let t of e){const r=new M(t);r.on("click",this.handleCardClick.bind(this)),this.colorCards.push(r)}this.setMode("normal"),this.ans=this.generateAns()}reset(){this.correctPick=!1;for(let t of this.colorCards.slice(0,this.cardAmount))t.reset();this.ans=this.generateAns()}getAns(){return this.ans}handleCardClick(t){if(!this.correctPick)if(t.color===this.ans){for(let t of this.colorCards)t.changeColor("#FFF");this.correctPick=!0,this.fire("rightAns",this.ans)}else t.toBlank(),this.fire("wrongAns")}generateAns(){const t=Math.floor(Math.random()*this.cardAmount);return this.colorCards[t].getColor()}setMode(t){switch(t){case"normal":this.cardAmount=3;for(let t of this.colorCards)t.contains("color-card-hard")&&(t.root.style.visibility="hidden",t.root.style.width="0px",t.root.style.margin="0.5rem 0",t.root.style.backgroundColor="#202020");break;case"hard":this.cardAmount=6;for(let t of this.colorCards)t.contains("color-card-hard")&&(t.root.style.visibility="visible",t.root.style.width="10rem",t.root.style.margin="0.5rem",t.root.style.backgroundColor="#202020")}this.reset()}}var E=e(466),Z={};Z.styleTagTransform=g(),Z.setAttributes=c(),Z.insert=a().bind(null,"head"),Z.domAPI=s(),Z.insertStyleElement=d(),n()(E.Z,Z),E.Z&&E.Z.locals&&E.Z.locals;class R extends t{static getRootClass(){return"rst-btn"}constructor(t){super(t),t.addEventListener("click",this.handleResetClick.bind(this)),this.resetDisplay=t.querySelector(".rst-btn span"),this.reset()}reset(){this.resetDisplay.textContent="New Colors"}handleResetClick(){this.fire("click")}}var B=e(986),L={};L.styleTagTransform=g(),L.setAttributes=c(),L.insert=a().bind(null,"head"),L.domAPI=s(),L.insertStyleElement=d(),n()(B.Z,L),B.Z&&B.Z.locals&&B.Z.locals;class T extends t{static getRootClass(){return".main"}constructor(t){super(t),this.navbar=new C(t.querySelector(".navbar")),this.navbar.on("normal",this.handleModeNormal.bind(this)),this.navbar.on("hard",this.handleModeHard.bind(this)),this.navbar.on("extreme",this.handleModeExtreme.bind(this)),this.colorCardBoard=new S(t.querySelector(".color-card-board")),this.colorCardBoard.on("rightAns",this.handleRightAns.bind(this)),this.colorCardBoard.on("wrongAns",this.handleWrongAns.bind(this)),this.colorCardBoard.on("reset",this.handleResetClick.bind(this)),this.headerMsg=new w(t.querySelector(".header-msg"),this.colorCardBoard.ans),this.rstBtn=new R(t.querySelector(".rst-btn")),this.rstBtn.on("click",this.handleResetClick.bind(this)),this.handleResetClick()}handleWrongAns(){this.headerMsg.showWrongMessage()}handleRightAns(){this.headerMsg.showCorrectMessage(this.colorCardBoard.ans),this.root.style.backgroundColor=this.colorCardBoard.ans,this.rstBtn.reset()}handleResetClick(){this.resetBackgroundColor(),this.colorCardBoard.reset(),this.headerMsg.reset(this.colorCardBoard.ans)}handleModeNormal(){console.log("NORMAL MODE"),this.colorCardBoard.setMode("normal"),this.resetBackgroundColor()}handleModeHard(){console.log("HARD MODE"),this.colorCardBoard.setMode("hard"),this.resetBackgroundColor()}handleModeExtreme(){console.log("EXTREME MODE"),this.resetBackgroundColor()}resetBackgroundColor(){this.root.style.backgroundColor="#202020",this.headerMsg.root.style.color="#FFF"}reset(){this.handleResetClick()}}window.onload=()=>{const t=document.querySelector("body");new T(t)}})()})();
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2138":[function(require,module,exports) {
"use strict";function e(e){for(var t=0;t<=10&&t<e.length;){var r=e[t].data().name;r.length>10&&(r=r.substring(0,10));var n=e[t].data().score,o=document.querySelector("#highScore"),a=document.createElement("li");a.textContent=r+" : "+n,o.appendChild(a),t+=1}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayHighScore=e;
},{}],"IG4o":[function(require,module,exports) {
"use strict";var e=require("../scripts/utils"),o="Anonymous",r=0;function c(){r+=1,document.querySelector("#score").innerHTML=r,l()}function t(){for(var e=document.querySelector("#playerName"),c=document.querySelector("#highScore");c.firstChild;)c.removeChild(c.firstChild);""!=e.value&&(o=e.value),db.collection("click").add({name:o,score:r}).then(function(){console.log("Score Registered!")}).catch(function(e){console.error("Error writing document: ",e)}),u()}function n(o){for(var r=document.querySelector("#highScore");r.firstChild;)r.removeChild(r.firstChild);(0,e.displayHighScore)(o)}function i(e){console.log("Error!"),console.log(e)}function u(){r=0,o="Anonymous";var e=document.querySelector("#score");document.querySelector("#playerName").value="",e.innerHTML=0,l()}function l(){0==document.querySelector("#score").innerHTML?document.querySelector("#highScoreUpdateButton").disabled=!0:document.querySelector("#highScoreUpdateButton").disabled=!1}document.querySelector("#click-button").addEventListener("click",c,!1),document.querySelector("#highScoreUpdateButton").addEventListener("click",t,!1),l(),db.collection("click").orderBy("score","desc").onSnapshot(function(e){n(e.docs)});
},{"../scripts/utils":"2138"}]},{},["IG4o"], null)
//# sourceMappingURL=/Games/click.c26d0e3e.js.map
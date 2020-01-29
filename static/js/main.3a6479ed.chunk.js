(this.webpackJsonpgames=this.webpackJsonpgames||[]).push([[0],{28:function(e,a,t){e.exports=t.p+"static/media/joystick.4993166b.png"},29:function(e,a,t){e.exports=t(52)},34:function(e,a,t){},45:function(e,a,t){var n={"./click.png":46,"./snake.png":47};function l(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=c,e.exports=l,l.id=45},46:function(e,a,t){e.exports=t.p+"static/media/click.3a97e539.png"},47:function(e,a,t){e.exports=t.p+"static/media/snake.3a97e539.png"},52:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(24),r=t.n(c),o=(t(34),t(10)),i=t(11),m=function(){return l.a.createElement("div",null,"Welcome to Games!")},s=t(9),u=t(25),p=t.n(u).a.initializeApp({apiKey:"AIzaSyDvZT4xc_gYVKmT7tB4WcyEXcxZtwLe0y4",authDomain:"games-c5987.firebaseapp.com",databaseURL:"https://games-c5987.firebaseio.com",projectId:"games-c5987",storageBucket:"games-c5987.appspot.com",messagingSenderId:"534185131808",appId:"1:534185131808:web:5318c1ce5390916185e145"}),E=function(e){var a=e.title,n=e.id,c=e.description;e.localGame;return l.a.createElement("main",{className:"game-container"},l.a.createElement("div",{className:"game"},l.a.createElement("img",{className:"game-thumbnail",src:t(45)("./".concat(n,".png")),alt:""}),l.a.createElement("br",null),a,l.a.createElement("p",null,c)))},d=function(){var e=Object(n.useState)(0),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)("Anonymous"),o=Object(s.a)(r,2),i=o[0],m=o[1];return l.a.createElement("main",{className:"Click-Game"},l.a.createElement("button",{className:"click-button",onClick:function(){c(t+1)}},"Click!"),l.a.createElement("div",{className:"score"},t),l.a.createElement("form",{className:"playerName"},l.a.createElement("label",{className:"caption"},"Player Name"),l.a.createElement("input",{className:"input",type:"text",onChange:function(e){m(e.target.value),console.log(i)},placeholder:"Anonymous"})),l.a.createElement("button",{className:"score-submit",onClick:function(){0!==t&&(p.firestore().collection("games").doc("click").collection("highscores").add({name:i,score:t}),c(0),m("Anonymous"))}},"Submit My Score!"))},g=function(){var e=Object(i.f)().gameId;return"click"===e?l.a.createElement(d,null):"snake"===e?l.a.createElement("div",null,"'Snake Game coming soon...'"):l.a.createElement("div",null,e)},h=function(){var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){p.firestore().collection("games").onSnapshot((function(e){c(e.docs)}))}),[]);var r=Object(i.g)(),m=t;return m&&(m=m.map((function(e){var a=!1;return e.data().localGame&&(a=e.data().localGame),l.a.createElement(o.b,{to:"".concat(r.url,"/").concat(e.data().id),key:e.id},l.a.createElement(E,{key:e.id,title:e.data().title,id:e.data().id,description:e.data().description,localGame:a}))}))),l.a.createElement("main",{className:"GamesList"},l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"".concat(r.path)},l.a.createElement("h1",{className:"games-list-container-title"},"Games List"),l.a.createElement("div",{className:"games-list-container"},m)),l.a.createElement(i.a,{path:"".concat(r.path,"/:gameId")},l.a.createElement("div",null,l.a.createElement(g,null)))))},f=function(){return l.a.createElement("main",{className:"About"},l.a.createElement("p",null,"When Will created his very first ",l.a.createElement("a",{href:"https://github.com/withoutwax/Snake-Game",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{role:"img","aria-label":"snake"},"\ud83d\udc0d")," Snake Game"),", he wanted to create a small forum where he can store score and also allow him to compete with his friends."),l.a.createElement("p",null,"Thus, this is a space where Will shares the games that he made and also allow his friends and other people in the world to play! ",l.a.createElement("span",{role:"img","aria-label":"game"},"\ud83d\udc7e")),l.a.createElement("p",null,"Feel free to look around and play few games that seems interesting! You can also compete with Will"),l.a.createElement("p",null,"Hope you enjoy!"))},b=function(e){var a=e.title,t=e.id,c=Object(n.useState)(),r=Object(s.a)(c,2),o=r[0],i=r[1];Object(n.useEffect)((function(){p.firestore().collection("games").doc(t).collection("highscores").orderBy("score","desc").limit(10).onSnapshot((function(e){i(e.docs)}))}),[t]);var m=o;return o&&(m=o.map((function(e,a){return l.a.createElement("li",{key:a},a+1,". ",e.data().name," : ",e.data().score)}))),m&&0===m.length&&(m="There is no High Score for this game, yet."),l.a.createElement("div",{className:"Score"},l.a.createElement("h4",{className:"game-title"},a),l.a.createElement("ul",null,m))},v=function(){var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){p.firestore().collection("games").onSnapshot((function(e){c(e.docs)}))}),[]);var r=t;return r&&(r=r.map((function(e){return l.a.createElement(b,{key:e.id,title:e.data().title,id:e.data().id})}))),l.a.createElement("div",{className:"HighScore"},l.a.createElement("h2",{className:"main-title"},"High Scores"),l.a.createElement("div",{className:"Score-Container"},r))},k=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("span",{role:"img","aria-label":"pingpong"},"\ud83d\udd79")," Copyright \xa9 ",e," Will Kim ",l.a.createElement("span",{role:"img","aria-label":"pingpong"},"\ud83d\udc7e")),l.a.createElement("p",null,"Invely's"))},y=t(28),w=t.n(y),N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"App-logo-container"},l.a.createElement(o.c,{to:"/"},l.a.createElement("img",{src:w.a,className:"App-logo",alt:"logo"})),l.a.createElement("a",{className:"back-button",href:"https://www.withoutwax.me"},l.a.createElement("span",{role:"img","aria-label":"back-button"},"\u25c0\ufe0f")," to Blog")),l.a.createElement("nav",{className:"App-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.c,{to:"/game"},"Games",l.a.createElement("span",{role:"img","aria-label":"joystick"},"\ud83d\udd79"))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/about"},"About")))),l.a.createElement(v,null)),l.a.createElement("main",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(m,null)),l.a.createElement(i.a,{path:"/game"},l.a.createElement(h,null)),l.a.createElement(i.a,{path:"/about"},l.a.createElement(f,null))))),l.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.3a6479ed.chunk.js.map
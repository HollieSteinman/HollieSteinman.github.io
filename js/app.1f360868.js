(()=>{"use strict";var e={90390:(e,t,n)=>{n(66992),n(88674),n(19601),n(17727);var r=n(49242),a=n(73396);function o(e,t){var n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(n)}var i=n(40089);const u={},s=(0,i.Z)(u,[["render",o]]),c=s;var d=n(20065),l=n(48534),f=(n(36133),n(57327),n(41539),n(69826),n(52262),n(24506),n(21249),n(32564),n(56265)),m=n.n(f),p={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL,v={rounds:[]},h={allRounds:function(e){return e.rounds},activeRounds:function(e){return e.rounds.filter((function(e){return e.active}))},correctRounds:function(e){return e.rounds.filter((function(e){return e.result.correct})).length},resultLoading:function(e){return function(t){var n=e.rounds.find((function(e){return e.id===t})).result.loading;return void 0===n&&(n=!1),n}}},g={newGame:function(e){return(0,l.Z)(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,r=e.dispatch,a=v.rounds.at(-1).id+1,n("resetRounds"),r("getRound",{init:!1,id:a});case 4:case"end":return t.stop()}}),t)})))()},getRound:function(e,t){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r,a,o,i,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=t.init,o=t.id,n.prev=2,!(a&&v.rounds.length<=0)&&a){n.next=13;break}return n.next=6,m().get("".concat(p,"/play-round"));case 6:i=n.sent,console.log(i),u=i.data,u.result={},u.id=void 0===o?a?v.rounds.length:v.rounds.at(-1).id+1:o,r("newRound",u),r("activateRound",u.id);case 13:n.next=18;break;case 15:n.prev=15,n.t0=n["catch"](2),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[2,15]])})))()},guessRound:function(e,t){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r,a,o,i,u,s,c,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.id,o=t.guess,n.prev=2,r("addRoundResult",{id:a,result:{loading:!0}}),i=v.rounds.find((function(e){return e.id===a})),u={trend:i.trend,guess:o},n.next=8,m().post("".concat(p,"/guess-round"),u);case 8:s=n.sent,c=s.data,d={guess:o,correct:c.correct,answers:c.answers.map((function(e){return e["Name"]})),loading:!1},r("addRoundResult",{id:a,result:d}),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](2),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[2,14]])})))()},nextRound:function(e,t){return(0,l.Z)(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,a("deactivateRound",t),n.next=4,r("getRound",!1);case 4:case"end":return n.stop()}}),n)})))()},saveRound:function(e,t){return(0,l.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((0,l.Z)(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={name:t,score:v.rounds.filter((function(e){return e.result.correct})).length},n.next=3,m().post("".concat(p,"/save-round"),r);case 3:a=n.sent,o=a.data,void 0!==o&&1==o.success||console.log(o),e();case 7:case"end":return n.stop()}}),n)}))),1e3)})));case 1:case"end":return e.stop()}}),e)})))()}},b={resetRounds:function(e){return e.rounds=[]},newRound:function(e,t){return e.rounds.unshift(t)},addRoundResult:function(e,t){var n=t.id,r=t.result,a=e.rounds.find((function(e){return e.id===n}));a.result=r},activateRound:function(e,t){var n=e.rounds.find((function(e){return e.id===t}));n&&(n.active=!0)},deactivateRound:function(e,t){var n=e.rounds.find((function(e){return e.id===t}));n&&(n.active=!1)}};const _={state:v,getters:h,actions:g,mutations:b};var w={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL,R={locations:[]},y={getLocations:function(e){return e.locations}},k={fetchLocations:function(e){return(0,l.Z)(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,m().get("".concat(w,"/get-locations"));case 4:r=t.sent,a=r.data,n("setLocations",a.map((function(e){return e["Name"]}))),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},x={setLocations:function(e,t){return e.locations=t}};const O={state:R,getters:y,actions:k,mutations:x},P=(0,d.MT)({state:{},getters:{},mutations:{},actions:{},modules:{rounds:_,locations:O}});n(78783),n(33948);var C=n(70678),E=[{path:"/",name:"home",component:function(){return Promise.all([n.e(767),n.e(865),n.e(507)]).then(n.bind(n,23554))}},{path:"/trendle",name:"trendle",component:function(){return Promise.all([n.e(767),n.e(746),n.e(387),n.e(907)]).then(n.bind(n,56907))},children:[{path:"",name:"trendle.home",component:function(){return Promise.all([n.e(767),n.e(294)]).then(n.bind(n,29294))},meta:{enterClass:"animate__animated animate__fadeInUp animate__delay-1s",leaveClass:"animate__animated animate__fadeOutLeft"}},{path:"play",name:"trendle.play",component:function(){return Promise.all([n.e(767),n.e(746),n.e(865),n.e(988),n.e(778)]).then(n.bind(n,40778))},meta:{enterClass:"animate__animated animate__fadeInRight",leaveClass:"animate__animated animate__fadeOutLeft"}},{path:"leaderboard",name:"trendle.leaderboard",component:function(){return Promise.all([n.e(767),n.e(746),n.e(865),n.e(988),n.e(387),n.e(824)]).then(n.bind(n,80824))},meta:{enterClass:"animate__animated animate__fadeInUp animate__delay-1s",leaveClass:"animate__animated animate__fadeOutLeft"}}]}],L=(0,C.p7)({history:(0,C.PO)("/"),routes:E});const A=L;(0,r.ri)(c).use(P).use(A).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r](o,o.exports,n),o.loaded=!0,o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],u=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(u=!1,o<i&&(i=o));if(u){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{294:"6913d7a7",387:"e030d8ac",507:"3199881e",746:"d83d85d2",767:"6fb50f14",778:"5016f9e9",824:"4910c32e",865:"dfdd06e6",907:"557f1f01",988:"0805bc68"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{294:"d0f1d3f4",507:"a81bf646",778:"2959f903",824:"1a7f4a47",907:"cfcd730b"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="trendle:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var u,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[a];var f=(t,n)=>{u.onerror=u.onload=null,clearTimeout(m);var a=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((e=>e(n))),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{n.p="/"})(),(()=>{var e=(e,t,n,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=o=>{if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=r=>new Promise(((a,o)=>{var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return a();e(r,u,a,o)})),a={143:0};n.f.miniCss=(e,t)=>{var n={294:1,507:1,778:1,824:1,907:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),u=new Error,s=r=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,u,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var d=s(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self["webpackChunktrendle"]=self["webpackChunktrendle"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(90390)));r=n.O(r)})();
//# sourceMappingURL=app.1f360868.js.map
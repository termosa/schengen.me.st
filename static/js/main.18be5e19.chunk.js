(this["webpackJsonpschengen.me.st"]=this["webpackJsonpschengen.me.st"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(12),a(1)),i=(a(13),a(14),["January","February","March","April","May","June","July","August","September","October","November","December"]),u=function(e){return"Day ".concat(e.date.month%2?"Day-Odd":"Day-Even").concat(e.outOfRange||e.available<1?" Day-Disabled":"").concat(e.selected?" Day-Selected":"").concat(e.today?" Day-Today":"")},s=function(e){var t=e.days,a=e.toggleSelection;return r.a.createElement("div",{className:"Calendar"},r.a.createElement("div",{className:"Calendar-List"},function(e,t){for(var a=[],n=1;n<=e;n++)a.push(t(n));return a}(t[0].date.day,(function(e){return r.a.createElement("div",{key:e,className:"Day Day-Empty"})})),t.map((function(e){return r.a.createElement(r.a.Fragment,{key:"".concat(e.date.year,"-").concat(e.date.month,"-").concat(e.date.date)},1===e.date.date?r.a.createElement("div",{className:"Month"},(t=e.date,"".concat(i[t.month]," ").concat(t.year))):void 0,r.a.createElement("div",{key:e.date.toString()+Math.random(),className:u(e),onClick:function(){return e.outOfRange||e.available<1||a(e)}},e.date.date,e.available>1?r.a.createElement("small",{className:"Day_Available"},"+",e.available-1):void 0));var t}))))},f=(a(15),function(e){return e.filter((function(e){return e.selected})).length}),d=function(e){var t=e.days;return r.a.createElement("div",{className:"Summary"},r.a.createElement("div",{className:"Summary-Section"},r.a.createElement("span",null,f(t)),r.a.createElement("span",{className:"Summary-Label"},"Days in Schengen")))},m=["year","month","date"],v=function(e,t){var a=!0,n=!1,r=void 0;try{for(var c,o=m[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var l=c.value;if(e[l]<t[l])return-1;if(e[l]>t[l])return 1}}catch(i){n=!0,r=i}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return 0},h=function(e){return{set:function(t,a){localStorage.setItem("".concat(e,"/").concat(t),JSON.stringify(a))},get:function(t,a){return localStorage.hasOwnProperty("".concat(e,"/").concat(t))?JSON.parse(localStorage.getItem("".concat(e,"/").concat(t))):"function"===typeof a?a():a}}}("schengen"),y=function(e,t){var a=Object(n.useState)(h.get(e,t)),r=Object(l.a)(a,2),c=r[0],o=r[1];return[c,function(t){h.set(e,t),o(t)}]},g=function(){return"".concat(this.year,"-").concat(this.month+1,"-").concat(this.date)},b=function(e,t,a){var n=new Date(e,t,a);return{year:n.getFullYear(),month:n.getMonth(),date:n.getDate(),day:n.getDay(),toString:g}},p=function(){var e=new Date;return b(e.getFullYear(),e.getMonth(),e.getDate())},O=function(e,t){var a=p(),n=new Date(a.year,a.month,a.date-t),r={year:n.getFullYear(),month:n.getMonth(),date:n.getDate()};return e.filter((function(e){return v(r,e)<=0}))},D=a(2),E=window.location.search.slice(1),S=E?E.split("&").reduce((function(e,t){return Object.assign(e,(a=t,Object(D.a)({},a.split("=")[0],a.split("=")[1])));var a}),{}):{},w=S.range?+S.range:180,j=S.max?+S.max:S.range?Math.floor(S.range/2):90,N=w*(S.repeat?+S.repeat:4),k=function(){var e=y("selectedDates",[]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=O(a,w);a.length!==e.length&&r(e)}),[]),[a,r]},M=a(6),J=a(3),F=function(e,t){return e.find((function(e){return 0===v(t,e)}))},x=function(){for(var e=p(),t=[],a=w;a--;)t.push({date:b(e.year,e.month,e.date-a)});t[t.length-1].today=!0;for(var n=1;n<=N;n++)t.push({date:b(e.year,e.month,e.date+n)});for(;;){var r=t[0].date,c=b(r.year,r.month,r.date-1);if(c.month!==r.month)break;t.unshift({date:c,outOfRange:!0})}for(;;){var o=t[t.length-1].date,l=b(o.year,o.month,o.date+1);if(l.month!==o.month)break;t.push({date:l})}return t}(),A=function(e){return Object(J.a)({},e,{available:e.outOfRange?0:1})},R=function(e){var t=Object(n.useState)(x),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=x.map(function(e){return function(t){return F(e,t.date)?Object(J.a)({},t,{selected:!0}):t}}(e)).map(A),a=function(e){for(var t=j,a=0;a<w;a++)e[a].selected&&t--;for(var n=[t],r=1;r<e.length;r++)e[r-1].selected&&t++,e[r+w-1]&&e[r+w-1].selected&&t--,n.push(t);return n}(t);!function(){for(var e=0;e<a.length;e++)if(!(a[e]>0))for(var n=w;n--;)t[e+n].selected||(t[e+n].available=-1)}(),function(){for(var e=0,n=0;n<t.length;n++)if(t[n].today||e!==n){var r=n-w+1<=0?0:n-w+1,c=Math.min.apply(Math,Object(M.a)(a.slice(r,n+1)));t[n].available=c+(t[n].selected?1:0)}else e++;for(var o=e;o<t.length;o++){var l=t[o].available;if(!(l<1)){for(var i=l,u=1;u<=i;u++){var s=o+u;if(s>=t.length)break;(t[s].selected||t[s].available>t[s-1].available-(t[s-1].selected?1:0))&&(l++,i++)}t[o].available=l>j?j:l}}}(),c(t)}),[e]),r},C=function(){var e=k(),t=Object(l.a)(e,2),a=t[0],n=t[1],c=R(a);return r.a.createElement("div",{className:"App"},r.a.createElement(d,{days:c}),r.a.createElement(s,{days:c,toggleSelection:function(e){var t=a.find((function(t){return!v(t,e.date)}));n(t?a.filter((function(e){return e!==t})):a.concat(e.date))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.18be5e19.chunk.js.map
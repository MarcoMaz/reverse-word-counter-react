(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n.n(a),l=(n(10),n(1)),c=(n(11),function(){var e=Object(r.useContext)(s),t=e.visible,n=e.words,a=e.setVisible,i=e.setWords;return o.a.createElement("div",{id:"intro",style:{display:t.block}},o.a.createElement("p",null,"How many words do you have to write?"),o.a.createElement("input",{type:"number",min:"2","data-required-message":"E-Mail or Username is required!",value:n.needed,onChange:function(e){return i({needed:e.target.value,written:""})},required:!0}),o.a.createElement("button",{onClick:function(){return a({block:"none",none:"block"})}},"Go"))}),d=function(){var e=Object(r.useContext)(s),t=e.visible,n=e.words,a=e.setWords,i=e.result,l=e.limWords;return o.a.createElement("div",{id:"work",style:{display:t.none}},o.a.createElement("form",null,i>=0&&o.a.createElement("p",null,"Words left: ",i),o.a.createElement("textarea",{onChange:function(e){return a({needed:n.needed,written:e.target.value})},maxlength:l,value:n.written,type:"text"})),i<0&&o.a.createElement("p",{id:"excess"},"You exceeded the maximum number of words!!"))},s=Object(r.createContext)();var u=function(){var e=Object(r.useState)({needed:2,written:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)({block:"block",none:"none"}),u=Object(l.a)(i,2),m=u[0],w=u[1],v=""===n.written?0:n.written.trim().split(" ").length,b=n.needed-v,E=n.needed-v<0?n.written.length:null;return o.a.createElement(s.Provider,{value:{visible:m,words:n,setVisible:w,setWords:a,result:b,limWords:E}},o.a.createElement("div",{id:"container"},o.a.createElement("h1",null,"Reverse Word Counter"),o.a.createElement(c,null),o.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.3a3468fc.chunk.js.map
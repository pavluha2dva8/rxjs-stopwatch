(this["webpackJsonpnew-timer"]=this["webpackJsonpnew-timer"]||[]).push([[0],{17:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(4),s=n(18),u=n.n(s),i=n(13),r=(n(17),n(1)),a=function(t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:t.hours>=10?t.hours:"0"+t.hours}),":",Object(r.jsx)("span",{children:t.minutes>=10?t.minutes:"0"+t.minutes}),":",Object(r.jsx)("span",{children:t.seconds>=10?t.seconds:"0"+t.seconds})]})},o=n(28),b=n(32),j=n(29),O=n(19),l=n(30),d=function(t){return Object(c.useEffect)((function(){var e=Object(o.a)(document.getElementById("clickMe"),"click"),n=e.pipe(Object(b.a)(250));e.pipe(Object(j.a)(n),Object(O.a)((function(t){return t.length})),Object(l.a)((function(t){return 2===t}))).subscribe((function(){t.wait()}))}),[t]),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"button",onClick:t.start,children:t.buttonStatus}),Object(r.jsx)("button",{className:"button",id:"clickMe",children:"Wait"}),Object(r.jsx)("button",{className:"button",onClick:t.reset,children:"Reset"})]})},f=n(33),h=n(10),p=n(31);var m=function(){var t=Object(c.useState)(0),e=Object(i.a)(t,2),n=e[0],s=e[1],u=Object(c.useState)(0),o=Object(i.a)(u,2),b=o[0],j=o[1],O=Object(c.useState)(0),l=Object(i.a)(O,2),m=l[0],x=l[1],v=Object(c.useState)(!1),S=Object(i.a)(v,2),w=S[0],k=S[1],N=Object(c.useState)("Start"),E=Object(i.a)(N,2),g=E[0],y=E[1];return Object(c.useEffect)((function(){y(w?"Stop":"Start");var t=new f.a;return new h.a((function(t){setInterval((function(){return t.next()}),1e3)})).pipe(Object(p.a)(t)).subscribe((function(){w&&s((function(t){return++t}))})),function(){t.next(),t.complete()}}),[w]),60===n&&(s(0),j((function(t){return++t}))),60===b&&(j(0),x((function(t){return++t}))),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"display",children:Object(r.jsx)(a,{hours:m,minutes:b,seconds:n})}),Object(r.jsx)("div",{className:"buttons",children:Object(r.jsx)(d,{start:function(){k((function(t){return!t})),"Stop"===g&&s(0)},wait:function(){0!==n&&k(!1)},reset:function(){s(0),j(0),x(0),0!==n&&k(!0)},buttonStatus:g})})]})};u.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.71bbaf9e.chunk.js.map
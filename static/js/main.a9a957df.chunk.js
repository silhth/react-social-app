(this["webpackJsonpreact-social-app"]=this["webpackJsonpreact-social-app"]||[]).push([[0],{10:function(e,n,t){e.exports={header:"Header_header__1v0yI",active:"Header_active__3GX0s"}},12:function(e,n,t){e.exports={footer:"Footer_footer__7dIj9"}},17:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(11),l=t.n(s),j=t(5),i=(t(17),t(4)),r=t(6),b=t(2),o=t(10),u=t.n(o),O=t(1),h=function(e){var n=e.name||"App",t=e.links||[{link:"/",label:"Link"}],c=function(e){var n=Object(b.h)(e);return Object(b.f)({path:n.pathname,end:!0})?u.a.active:""};return Object(O.jsxs)("header",{className:u.a.header,children:[Object(O.jsx)("h1",{children:n}),Object(O.jsx)("nav",{children:Object(O.jsx)("ul",{children:t.map((function(e,n){return Object(O.jsx)("li",{children:Object(O.jsx)(j.b,{className:c(e.link),to:e.link,children:e.label})},n)}))})})]})},d=t(12),x=t.n(d),f=function(){var e=(new Date).getFullYear();return Object(O.jsxs)("footer",{className:x.a.footer,children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("p",{children:["Copyright Edgemony ",e]})]})},p=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:"Loading..."})})},m=Object(c.lazy)((function(){return Promise.all([t.e(6),t.e(3)]).then(t.bind(null,48))})),g=Object(c.lazy)((function(){return t.e(5).then(t.bind(null,49))})),k=Object(c.lazy)((function(){return t.e(8).then(t.bind(null,42))})),v=Object(c.lazy)((function(){return t.e(2).then(t.bind(null,47))})),y=Object(c.lazy)((function(){return t.e(7).then(t.bind(null,43))})),F={name:"FeisBell",nav:[{link:"/",label:"Home"},{link:"/messages",label:"Messages"},{link:"/friends",label:"Friends"},{link:"/login",label:"Login"}],friendsPreview:[],fontFamily:""},_=function(e,n){switch(n.type){case"change-name":return Object(r.a)(Object(r.a)({},e),{},{name:"FeisBrutt"});case"change-font":return Object(r.a)(Object(r.a)({},e),{},{fontFamily:"Arial"});default:return e}};var S=function(){var e=Object(c.useReducer)(_,F),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(h,{name:t.name,font:t.fontFamily,links:t.nav}),Object(O.jsx)("button",{onClick:function(){a({type:"change-name"}),a({type:"change-font"})},children:"Cambia nome"}),Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/",element:Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(p,{}),children:Object(O.jsx)(m,{})})}),Object(O.jsx)(b.a,{path:"/new-post",element:Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(p,{}),children:Object(O.jsx)(g,{})})}),Object(O.jsx)(b.a,{path:"/messages",element:Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(p,{}),children:Object(O.jsx)(k,{})})}),Object(O.jsx)(b.a,{path:"/friends",element:Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(p,{}),children:Object(O.jsx)(v,{})})}),Object(O.jsx)(b.a,{path:"/login",element:Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(p,{}),children:Object(O.jsx)(y,{})})})]}),Object(O.jsx)(f,{})]})},w=function(e){e&&e instanceof Function&&t.e(9).then(t.bind(null,44)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,l=n.getTTFB;t(e),c(e),a(e),s(e),l(e)}))};l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(j.a,{children:Object(O.jsx)(S,{})})}),document.getElementById("root")),w()}},[[19,1,4]]]);
//# sourceMappingURL=main.a9a957df.chunk.js.map
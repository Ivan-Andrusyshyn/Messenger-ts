"use strict";(self.webpackChunkmessenger=self.webpackChunkmessenger||[]).push([[592],{592:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(439),s=n(791),a=n(689),c=n(759),i=n(184),u=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],c=(0,s.useState)(""),u=(0,r.Z)(c,2),l=u[0],o=u[1];return(0,i.jsxs)("div",{className:"text-container",children:[l&&(0,i.jsx)("div",{className:"message-wrap",children:(0,i.jsx)("p",{children:l})}),(0,i.jsxs)("form",{className:"chat-input",onSubmit:function(e){e.preventDefault(),o(n)},children:[(0,i.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",onChange:function(e){return a(e.currentTarget.value)}}),(0,i.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})},l=n(84),o=function(){var e=(0,a.UO)().chatId,t=(0,s.useState)([]),n=(0,r.Z)(t,2),o=n[0],p=n[1],f=(0,s.useState)(!1),d=(0,r.Z)(f,2),h=d[0],v=d[1];return(0,s.useEffect)((function(){var t=e||"";(0,l.O)(t,v,p)}),[e]),(0,i.jsxs)("div",{className:"item",children:[h?(0,i.jsx)(c.a,{}):o.map((function(e){var t=e.API,n=e.Description;return(0,i.jsxs)("div",{className:"name-contact",children:[(0,i.jsx)("h1",{className:"title",children:t}),(0,i.jsx)("p",{className:"description",children:n})]},t)})),(0,i.jsx)(u,{})]})}},759:function(e,t,n){n.d(t,{a:function(){return s}});n(791);var r=n(184),s=function(){return(0,r.jsxs)("div",{className:"spinner",children:[(0,r.jsx)("div",{className:"part"}),(0,r.jsx)("div",{className:"part"}),(0,r.jsx)("div",{className:"part"})]})}},84:function(e,t,n){n.d(t,{O:function(){return u},r:function(){return i}});var r=n(861),s=n(687),a=n.n(s),c=n(243),i=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.publicapis.org/entries");case 3:n=e.sent,r=n.data,s=r.entries.slice(10,20),i=JSON.parse(localStorage.getItem("contact")||"null"),t(i&&i.length>0?i:s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t,n,r){var s,i,u,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(!0),e.next=4,c.Z.get("https://api.publicapis.org/entries");case 4:s=e.sent,i=s.data,u=i.entries.slice(0,20),l=u.filter((function(e){return e.API===t})),r(l),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:return e.prev=14,n(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t,n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=592.b5fc3914.chunk.js.map
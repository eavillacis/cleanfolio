(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c(3),i=c(1),l=c(0),a=Object(i.createContext)(),r=function(e){var t=e.children,c=Object(i.useState)("light"),n=Object(s.a)(c,2),r=n[0],o=n[1];Object(i.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(l.jsx)(a.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://eavillacis.github.io/cleanfolio",j="JS.",b="Esteban Villacis",h="Fullstack Software Engineer",d="I am a Consultant Developer with 7+ years of experience building web solutions, APIs, software\n    architectures and infrastructure following best practices and agile principles.\n    I consider myself a technology geek, always willing to learn new technologies and good development\n    practices.",u="https://www.linkedin.com/in/eavillacis/",m={linkedin:"https://www.linkedin.com/in/eavillacis/",github:"https://github.com/eavillacis"},O=[{name:"Clubmiles",description:"Loyalty ecosystem backend and microservices",stack:["Golang","K8S","React"],livePreview:"https://www.clubmiles.com.ec"},{name:"Pichincha Miles",description:"Loyalty ecosystem and frontend",stack:["Golang","K8S","React","AWS"],livePreview:"https://www.pichinchamiles.com"},{name:"Kriptos",description:"Backend cloud services",stack:["Golang","Serverless"],livePreview:"https://www.kriptos.io"}],x=["Golang","Cloud","Serverless","Python","JavaScript","TypeScript","React","Git","CI/CD","Testing","QA"],f={},p=c(14),v=c.n(p),k=c(12),g=c.n(k),N=c(16),w=c.n(N),_=c(15),y=c.n(_),C=(c(26),function(){var e=Object(i.useContext)(a),t=Object(s.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],b=o[1],h=function(){return b(!j)};return Object(l.jsxs)("nav",{className:"center nav",children:[Object(l.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,x.length?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,f.email?Object(l.jsx)("li",{className:"nav__list-item",children:Object(l.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(l.jsx)("button",{type:"button",onClick:n,className:"center btn btn--icon","aria-label":"toggle theme",children:"dark"===c?Object(l.jsx)(g.a,{}):Object(l.jsx)(v.a,{})}),Object(l.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(l.jsx)(y.a,{}):Object(l.jsx)(w.a,{})})]})}),S=(c(32),function(){var e=o,t=j;return Object(l.jsxs)("header",{className:"header center",children:[Object(l.jsx)("h3",{children:e?Object(l.jsx)("a",{href:e,className:"link",children:t}):t}),Object(l.jsx)(C,{})]})}),P=c(10),E=c.n(P),I=c(17),G=c.n(I),A=(c(33),function(){var e=b,t=h,c=d,n=u,s=m;return Object(l.jsxs)("div",{className:"about center",children:[e&&Object(l.jsxs)("h1",{children:["Hi, I am ",Object(l.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(l.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(l.jsx)("p",{className:"about__desc",children:c&&c}),Object(l.jsxs)("div",{className:"about__contact center",children:[n&&Object(l.jsx)("a",{href:n,children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(l.jsxs)(l.Fragment,{children:[s.github&&Object(l.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(l.jsx)(E.a,{})}),s.linkedin&&Object(l.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(l.jsx)(G.a,{})})]})]})]})}),J=c(7),L=c.n(J),R=c(18),T=c.n(R),K=(c(35),function(e){var t=e.project;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(l.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(l.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(l.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(l.jsx)(E.a,{})}),t.livePreview&&Object(l.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(l.jsx)(T.a,{})})]})}),B=(c(36),function(){return O.length?Object(l.jsxs)("section",{id:"projects",className:"section projects",children:[Object(l.jsx)("h2",{className:"section__title",children:"Projects"}),Object(l.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(l.jsx)(K,{project:e},L()())}))})]}):null}),D=(c(37),function(){return x.length?Object(l.jsxs)("section",{className:"section skills",id:"skills",children:[Object(l.jsx)("h2",{className:"section__title",children:"Skills"}),Object(l.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(l.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),F=c(19),z=c.n(F),H=(c(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(l.jsx)("div",{className:"scroll-top",children:Object(l.jsx)("a",{href:"#top",children:Object(l.jsx)(z.a,{fontSize:"large"})})}):null}),M=(c(39),function(){return f.email?Object(l.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(l.jsx)("h2",{className:"section__title",children:"Contact"}),Object(l.jsx)("a",{href:"mailto:".concat(f.email),children:Object(l.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Q=(c(40),function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("a",{href:"https://github.com/eavillacis/cleanfolio",className:"link footer__link",children:"Created with \u2764"})})}),V=(c(41),function(){var e=Object(i.useContext)(a),t=Object(s.a)(e,1)[0].themeName;return Object(l.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(l.jsx)(S,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(A,{}),Object(l.jsx)(B,{}),Object(l.jsx)(D,{}),Object(l.jsx)(M,{})]}),Object(l.jsx)(H,{}),Object(l.jsx)(Q,{})]})});c(42);Object(n.render)(Object(l.jsx)(r,{children:Object(l.jsx)(V,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.180fe6ce.chunk.js.map
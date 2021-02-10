(this.webpackJsonpolymp=this.webpackJsonpolymp||[]).push([[0],{125:function(e,n,t){"use strict";t.r(n);var a,i,r,c,o,d,s,l=t(0),j=t.n(l),b=t(10),u=t.n(b),x=t(42),h=t(11),m=t(12),O=Object(m.a)(a||(a=Object(h.a)(["\n  html, body, #root {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n  }\n\n  body {\n    #root > div {\n      height: 100%;\n      display: grid;\n  \n      grid-template-rows: 100px 1fr 200px;\n    }\n  }\n\n  #header {\n    grid-row-start: 1;\n  }\n\n  #main {\n    grid-row-start: 2;\n  }\n\n  #footer {\n    grid-row-start: 3;\n  }\n"]))),p=t(13),f=t(22),g=t(170),v=t(2),S=m.b.div(i||(i=Object(h.a)(["\n  color: grey;\n"]))),w=m.b.div(r||(r=Object(h.a)(["\n  a {\n    color: white;\n    text-decoration: none;\n  }\n"]))),C=function(e){var n=e.route,t=e.label;return Object(p.h)().pathname===n?Object(v.jsx)(S,{children:t}):Object(v.jsx)(w,{children:Object(v.jsx)(x.b,{to:n,children:t})})},y=m.b.div(c||(c=Object(h.a)(["\n  background: #000;\n  color: #fff;\n\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  > * {\n    margin: auto 0;\n    font-size: 1.5rem;\n  }\n"]))),D=m.b.div(o||(o=Object(h.a)(["\n  display: flex;\n\n  > * {\n    margin: 0 auto;\n  }\n"]))),k=function(){return Object(v.jsx)(y,{children:Object(v.jsxs)(D,{children:[Object(v.jsx)(C,{route:"/",label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),Object(v.jsx)(C,{route:"/mybooking",label:"\u041c\u043e\u0438 \u043f\u043e\u0435\u0437\u0434\u043a\u0438"})]})})},z=m.b.div(d||(d=Object(h.a)(["\n  background: #000;\n  color: white;\n  height: 100%;\n  \n  position: relative;\n  > * {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    transform: translate(-50%, -50%);\n  }\n"]))),E=function(){return Object(v.jsx)(z,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u201c8 (800) 555-33-10\u201d"}),Object(v.jsx)("div",{children:"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"})]})})},T=t(86),L=t.n(T),A=t(160),I=m.b.div(s||(s=Object(h.a)(["\n  position: relative;\n  > h2 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    margin-left: 20px;\n  }\n\n  > p {\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-top: 50px;\n    z-index: 1;\n    margin-left: 20px;\n  }\n\n  > img {\n    width: 100%;\n    height: 400px;\n    filter: blur(5px);\n    z-index: -1;\n  }\n"]))),R=function(e){var n=e.items;return Object(v.jsx)(L.a,{children:n.map((function(e,n){return Object(v.jsx)(Y,{name:e.name,description:e.description,image:e.image},n)}))})},Y=function(e){var n=e.name,t=e.description,a=e.image;return Object(v.jsx)(A.a,{children:Object(v.jsxs)(I,{children:[Object(v.jsx)("h2",{children:n}),Object(v.jsx)("p",{children:t}),Object(v.jsx)("img",{src:a,alt:"carousel"})]})})},J=t(164),q=t(169),_=t(166),U=t(163),X=t(66),F=function(){var e=Object(l.useState)([{name:"\u041f\u043e\u0435\u0437\u0434\u043a\u0430 1",difficult:"\u041b\u0435\u0433\u043a\u043e",region:"\u041c\u043e\u0441\u043a\u0432\u0430",dateEnd:new Date(2021,11,11),dateStart:new Date(2022,11,21),zoneCount:2},{name:"\u041f\u043e\u0435\u0437\u0434\u043a\u0430 2",difficult:"\u0421\u043b\u043e\u0436\u043d\u043e",region:"\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a",dateEnd:new Date(2021,11,21),dateStart:new Date(2022,11,30),zoneCount:4},{name:"\u041f\u043e\u0435\u0437\u0434\u043a\u0430 3",difficult:"\u0421\u0440\u0435\u0434\u043d\u0435",region:"\u0421\u0430\u043c\u0430\u0440\u0430",dateEnd:new Date(2021,11,30),dateStart:new Date(2022,12,1),zoneCount:3},{name:"\u041f\u043e\u0435\u0437\u0434\u043a\u0430 4",difficult:"\u0421\u043b\u043e\u0436\u043d\u043e",region:"\u041c\u043e\u0441\u043a\u0432\u0430",dateEnd:new Date(2021,12,1),dateStart:new Date(2022,12,11),zoneCount:5},{name:"\u041f\u043e\u0435\u0437\u0434\u043a\u0430 5",difficult:"\u041b\u0435\u0433\u043a\u043e",region:"\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a",dateEnd:new Date(2021,12,11),dateStart:new Date(2022,12,21),zoneCount:7},{name:"\u041f\u043e\u0435\u0437\u0434\u043a\u0430 6",difficult:"\u0421\u043b\u043e\u0436\u043d\u043e",region:"\u0421\u0430\u043c\u0430\u0440\u0430",dateEnd:new Date(2021,12,21),dateStart:new Date(2022,12,30),zoneCount:11},{name:"\u041f\u043e\u0435\u0437\u0434\u043a\u0430 7",difficult:"\u0421\u0440\u0435\u0434\u043d\u0435",region:"\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a",dateEnd:new Date(2021,12,30),dateStart:new Date(2023,1,1),zoneCount:3}]),n=Object(f.a)(e,2),t=n[0];n[1];return{travels:t}},N=t(15),P=function(){var e=localStorage.getItem("cTravels");return JSON.parse(e||"[]")};function Q(e,n,t){return t.findIndex((function(n){return n.name===e.name}))===n}var B,G,K,M,Z,W,V=function(){var e=Object(l.useState)(P),n=Object(f.a)(e,2),t=n[0],a=n[1],i=function(e){var n=e.filter(Q);a(n),function(e){localStorage.setItem("cTravels",JSON.stringify(e))}(n)};return{travels:t,setTravels:i,addTravel:function(e){i([].concat(Object(N.a)(t),[e]))}}},H=m.b.div(B||(B=Object(h.a)(["\n  > div > * {\n    width: 100%;\n  }\n\n  > * {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n"]))),$=m.b.div(G||(G=Object(h.a)(["\n  display: flex;\n  > * {\n    margin: 0 auto;\n  }\n  \n  button {\n    width: 300px;\n    margin: 0 auto;\n    margin-top: 20px;\n  }\n"]))),ee={name:"",difficult:"",region:"",dateEnd:new Date,dateStart:new Date,zoneCount:0},ne=function(e){var n=e.onAdd,t=Object(l.useState)(ee),a=Object(f.a)(t,2),i=a[0],r=a[1],c=F().travels,o=V().addTravel,d=Object(X.a)(),s=d.register,j=d.handleSubmit,b=d.errors,u=d.reset;return Object(v.jsxs)(H,{children:[Object(v.jsx)("h2",{children:"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435"}),Object(v.jsx)("div",{children:Object(v.jsxs)(J.a,{label:"\u041f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435",value:i.name,onChange:function(e){r(c.find((function(n){return n.name===e.target.value}))||ee)},error:!!b.travel,inputRef:s({required:!0}),name:"travel",children:[Object(v.jsx)(q.a,{value:"",children:""}),c.map((function(e){return Object(v.jsx)(q.a,{value:e.name,children:e.name},e.name)}))]})}),Object(v.jsx)("div",{children:Object(v.jsx)(_.a,{label:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0435\u0437\u0434\u043a\u0438",value:i.difficult,disabled:!0})}),Object(v.jsx)("div",{children:Object(v.jsx)(_.a,{label:"\u0420\u0435\u0433\u0438\u043e\u043d",value:i.region,disabled:!0})}),Object(v.jsx)("div",{children:Object(v.jsx)(_.a,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u043e\u043d",value:i.zoneCount,disabled:!0})}),Object(v.jsx)("div",{children:Object(v.jsx)(_.a,{label:"\u0414\u0430\u0442\u0430 \u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u043e\u0435\u0437\u0434\u043a\u0438",value:i.dateStart.toLocaleDateString("ru-RU"),disabled:!0,InputLabelProps:{shrink:!0}})}),Object(v.jsx)("div",{children:Object(v.jsx)(_.a,{label:"\u0414\u0430\u0442\u0430 \u043a\u043e\u043d\u0446\u0430 \u043f\u043e\u0435\u0437\u0434\u043a\u0438",value:i.dateEnd.toLocaleDateString("ru-RU"),disabled:!0,InputLabelProps:{shrink:!0}})}),Object(v.jsx)("div",{children:Object(v.jsx)(_.a,{label:"\u0412\u0430\u0448\u0435 \u0424\u0418\u041e",error:!!b.name,helperText:b.name&&"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",name:"name",inputRef:s({required:!0})})}),Object(v.jsx)($,{children:Object(v.jsx)(U.a,{variant:"contained",color:"primary",onClick:j((function(e){""!==i.name&&(o({username:e.name,name:i.name,dateEnd:i.dateEnd,dateStart:i.dateStart,region:i.region,zoneCount:i.zoneCount,difficult:i.difficult}),u(),r(ee),n&&n())})),children:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]})},te=function(){return Object(v.jsx)(R,{items:[{name:"\u0421\u043a\u0438\u0434\u043a\u0430 10%",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0430\u043a\u0446\u0438\u0438 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439 \u0432 10%",image:"http://achtung.kz/wp-content/uploads/2016/01/%D0%90%D0%BA%D1%86%D0%B8%D1%8F.jpg"},{name:"\u0421\u043a\u0438\u0434\u043a\u0430 20%",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0430\u043a\u0446\u0438\u0438 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439 \u0432 20%",image:"http://connect-s.kz/uploads/posts/2017-09/1506000859_400x175xak_.jpg"},{name:"\u0421\u043a\u0438\u0434\u043a\u0430 30%",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0430\u043a\u0446\u0438\u0438 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439 \u0432 30%",image:"https://lh3.googleusercontent.com/proxy/MDoPkkg-0QU0JQHgxAuUG0HV4k8BAWwxpdfdE-2o63Wjr-R57Yl_ap52QGFjPfan12uaeMAuo0fJoerkm7SmLFSYxTGTlJ-soAn2YsaYvD7c_8ARGSUKQkmV"},{name:"\u0421\u043a\u0438\u0434\u043a\u0430 40%",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0430\u043a\u0446\u0438\u0438 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439 \u0432 40%",image:"https://lh3.googleusercontent.com/proxy/D3CZpt2qYuK30sSJ0ZjCsXoovcwftMCg-TGty5N_AZQEZV16M7NtxrTW5UoUezzRXtbqY0-sIIj_vCRosYXpnyLIna9xNAXhsXm0n1YIhKfjQV56sq0w8LaWrLc5udSkxg3SfOq4RXl0L2SskC_C"},{name:"\u0421\u043a\u0438\u0434\u043a\u0430 50%",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0430\u043a\u0446\u0438\u0438 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439 \u0432 50%",image:"https://lh3.googleusercontent.com/proxy/G9CYttorA2ycYShATE1C_e9acMKS-Y-k2TPbcUNq94ej5KeshHAXXROoQKgbcr_SdNZZEJ916pgsJYWCxCI"},{name:"\u0421\u043a\u0438\u0434\u043a\u0430 60%",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0430\u043a\u0446\u0438\u0438 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439 \u0432 60%",image:"https://bokaz.kz/wp-content/uploads/2017/04/sp-1.png"}]})},ae=m.b.div(K||(K=Object(h.a)(["\n  display: flex;\n  width: 100%;\n\n  margin: 30px 0;\n\n  > *:first-child {\n    width: 100%;\n  }\n  \n  > *:last-child {\n    margin-left: 10px;\n  }\n"]))),ie=function(){var e=Object(X.a)(),n=e.register,t=e.handleSubmit,a=e.errors,i=Object(p.g)();return Object(v.jsxs)(ae,{children:[Object(v.jsx)(_.a,{error:!!a.search,helperText:a.search&&"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e",name:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a...",inputRef:n({required:!0})}),Object(v.jsx)(U.a,{onClick:t((function(e){i.replace("/search?query=".concat(e.search))})),variant:"contained",color:"primary",children:"\u041f\u043e\u0438\u0441\u043a"})]})},re=m.b.div(M||(M=Object(h.a)(["\n  margin: 20px;\n  padding: 20px;\n"]))),ce=m.b.div(Z||(Z=Object(h.a)(["\n  display: flex;\n  > * {\n    margin: 0 auto;\n    width: 80%;\n  }\n"]))),oe=function(){var e=Object(l.useState)(!1),n=Object(f.a)(e,2),t=n[0],a=n[1];return Object(v.jsxs)(ce,{children:[Object(v.jsx)(g.a,{open:t,onClose:function(){return a(!1)},onSubmit:function(){return a(!1)},children:Object(v.jsx)(re,{children:"\u041f\u043e\u0435\u0437\u0434\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)(ie,{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"\u0410\u043a\u0446\u0438\u0438"}),Object(v.jsx)(te,{})]}),Object(v.jsx)(ne,{onAdd:function(){return a(!0)}})]})]})},de=function(){var e=F().travels,n=Object(p.h)().search.slice(7),t=e.filter((function(e){return e.name.trim().toLocaleLowerCase().includes(n.trim().toLocaleLowerCase())})).map((function(e,n){return Object(v.jsx)("div",{children:e.name},n)}));return Object(v.jsxs)("div",{style:{margin:"30px",fontSize:"1.5rem"},children:[Object(v.jsx)("div",{style:{marginBottom:"30px"},children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ".concat(n)}),Object(v.jsx)("div",{children:t.length>0?t:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})},se=m.b.div(W||(W=Object(h.a)(["\n  margin: 10px 0;\n  display: flex;\n  > *:last-child {\n    margin-left: auto;\n  }\n"]))),le=function(){var e=V(),n=e.travels,t=e.setTravels,a=n.map((function(e,a){return Object(v.jsxs)(se,{children:[Object(v.jsx)("div",{children:"".concat(e.name," \u0432 ").concat(e.region,". ").concat(e.username)}),Object(v.jsx)(U.a,{color:"secondary",variant:"contained",onClick:function(){t(n.filter((function(n){return n.name!==e.name})))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},a)}));return Object(v.jsx)("div",{style:{margin:"30px",fontSize:"1.5rem"},children:a.length>0?a:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0435\u0439"})},je=function(){return Object(v.jsxs)(p.d,{children:[Object(v.jsx)(p.b,{path:"/",exact:!0,children:Object(v.jsx)(oe,{})}),Object(v.jsx)(p.b,{path:"/search",exact:!0,children:Object(v.jsx)(de,{})}),Object(v.jsx)(p.b,{path:"/mybooking",exact:!0,children:Object(v.jsx)(le,{})}),Object(v.jsx)(p.a,{to:"/"})]})},be=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(O,{}),Object(v.jsx)("div",{id:"header",children:Object(v.jsx)(k,{})}),Object(v.jsx)("div",{id:"main",children:Object(v.jsx)(je,{})}),Object(v.jsx)("div",{id:"footer",children:Object(v.jsx)(E,{})})]})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,171)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),i(e),r(e),c(e)}))};u.a.render(Object(v.jsx)(j.a.StrictMode,{children:Object(v.jsx)(x.a,{children:Object(v.jsx)(be,{})})}),document.getElementById("root")),ue()}},[[125,1,2]]]);
//# sourceMappingURL=main.04eb363a.chunk.js.map
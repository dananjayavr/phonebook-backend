(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),l=t.n(u),c=t(2),o=t(3),i=t.n(o),m=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:e.handler}))},s=function(e){return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:e.handlerNewName,value:e.nameValue})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:e.handlerNewNumber,value:e.numberValue})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:e.submitHandler},"add")))},d=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.person.name," ",e.person.number,r.a.createElement("button",{onClick:e.deleteContact},"delete")))},f=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)},b=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},p=function(e){return i.a.post("/api/persons",e).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat("/api/persons","/").concat(e)).then((function(e){return e.data}))},E=(t(36),function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],l=Object(a.useState)(""),o=Object(c.a)(l,2),E=o[0],v=o[1],j=Object(a.useState)(""),w=Object(c.a)(j,2),O=w[0],g=w[1],N=Object(a.useState)(""),C=Object(c.a)(N,2),k=C[0],S=C[1],y=Object(a.useState)(null),V=Object(c.a)(y,2),D=V[0],H=V[1],I=Object(a.useState)(null),J=Object(c.a)(I,2),L=J[0],x=J[1];Object(a.useEffect)((function(){i.a.get("/api/persons").then((function(e){u(e.data)}))}),[]);return r.a.createElement("div",null,r.a.createElement(f,{message:D}),r.a.createElement(b,{message:L}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{handler:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(s,{handlerNewName:function(e){v(e.target.value)},nameValue:E,handlerNewNumber:function(e){g(e.target.value)},numberValue:O,submitHandler:function(e){e.preventDefault(),p({name:E,number:O}).then((function(e){u(t.concat(e)),H("Added ".concat(e.name))})),g(""),v(""),setTimeout((function(){H(null)}),3e3)}}),r.a.createElement("h2",null,"Numbers"),t.map((function(e,n){return null!==e.name&&(!!e.name.toLowerCase().includes(k.toLowerCase())&&r.a.createElement(d,{person:e,key:n,deleteContact:function(){return n=e.id,void(window.confirm("Delete ".concat(t.filter((function(e){return e.id===n})).pop().name,"?"))&&h(n).then((function(e){u(t.map((function(e){return e.id!==n?e:{name:null,number:null,id:null}})))})).catch((function(e){x("Information of ".concat(t.filter((function(e){return e.id===n})).pop().name," has already been removed from server"))})));var n}}))})))});l.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3afa6a22.chunk.js.map
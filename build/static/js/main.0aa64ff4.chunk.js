(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),l=t(3),i=t.n(l),m=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:e.handler}))},d=function(e){return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:e.handlerNewName,value:e.nameValue})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:e.handlerNewNumber,value:e.numberValue})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:e.submitHandler},"add")))},f=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.person.name," ",e.person.number,r.a.createElement("button",{onClick:e.deleteContact},"delete")))},s=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)},p=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},b=function(e){return i.a.post("/api/persons",e).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat("/api/persons","/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return i.a.put("".concat("/api/persons","/").concat(e),n).then((function(e){return e.data}))},E=(t(36),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),l=Object(o.a)(c,2),E=l[0],w=l[1],g=Object(a.useState)(""),j=Object(o.a)(g,2),O=j[0],N=j[1],k=Object(a.useState)(""),C=Object(o.a)(k,2),y=C[0],S=C[1],V=Object(a.useState)(null),I=Object(o.a)(V,2),A=I[0],D=I[1],H=Object(a.useState)(null),J=Object(o.a)(H,2),L=J[0],x=J[1];Object(a.useEffect)((function(){i.a.get("/api/persons").then((function(e){u(e.data)}))}),[]);return r.a.createElement("div",null,r.a.createElement(s,{message:A}),r.a.createElement(p,{message:L}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{handler:function(e){S(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(d,{handlerNewName:function(e){w(e.target.value)},nameValue:E,handlerNewNumber:function(e){N(e.target.value)},numberValue:O,submitHandler:function(e){e.preventDefault();var n={name:E,number:O};if(t.find((function(e){return e.name===E}))){var a=t.map((function(e){return e.name===E?{name:e.name,number:O,id:e.id}:null})).filter((function(e){return null!==e})).pop();window.confirm("".concat(E," is already added to phonebook, replace the old number with a new one?"))&&v(a.id,a).then((function(e){t.map((function(e,n){return console.log(n),n===a.id-1&&(e.number=O,!0)})),u(t),D("Updated ".concat(e.name))})).catch((function(e){x("Information of ".concat(E," has already been removed from server"))}))}else b(n).then((function(e){u(t.concat(e)),D("Added ".concat(e.name))}));b(n).then((function(e){u(t.concat(e)),D("Added ".concat(e.name))})),N(""),w(""),setTimeout((function(){D(null)}),3e3)}}),r.a.createElement("h2",null,"Numbers"),t.map((function(e,n){return null!==e.name&&(!!e.name.toLowerCase().includes(y.toLowerCase())&&r.a.createElement(f,{person:e,key:n,deleteContact:function(){return n=e.id,void(window.confirm("Delete ".concat(t.filter((function(e){return e.id===n})).pop().name,"?"))&&h(n).then((function(e){u(t.map((function(e){return e.id!==n?e:{name:null,number:null,id:null}})))})).catch((function(e){x("Information of ".concat(t.filter((function(e){return e.id===n})).pop().name," has already been removed from server"))})));var n}}))})))});c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0aa64ff4.chunk.js.map
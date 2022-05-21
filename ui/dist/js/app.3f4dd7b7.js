(function(){"use strict";var e={5428:function(e,t,r){var o=r(9242),n=r(3396),s=r(7139);const a={key:0},i=(0,n._)("span",null,"Your order:",-1),l=["onClick"],d=["onClick"],c={key:1,id:"preview"},p=(0,n._)("h1",null,"Hi there",-1),u=(0,n._)("h1",{style:{"font-size":"4rem",color:"#ff0","text-shadow":"2px 2px #00f"}},"Ukraine_food",-1),h=(0,n.Uk)(" "),f={style:{"margin-bottom":"5rem"}},g={style:{"margin-bottom":"5rem"}};function m(e,t,r,m,O,S){const y=(0,n.up)("center"),b=(0,n.up)("Card"),w=(0,n.up)("CardT");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("button",{id:"order",onClick:t[0]||(t[0]=e=>S.showOrder())},"🍽"),e.showOrders?((0,n.wg)(),(0,n.iD)("ul",a,[i,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(S.getls("order"),(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},[(0,n._)("span",null,[(0,n.Uk)((0,s.zw)(e.Name)+(0,s.zw)(e.Price),1),(0,n._)("button",{onClick:t=>S.delorder(e,"order")},"Delete",8,l)])])))),128)),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(S.getls("orderGet"),(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},[(0,n._)("span",null,[(0,n.Uk)((0,s.zw)(e.Name)+(0,s.zw)(e.Price),1),(0,n._)("button",{onClick:t=>S.delorder(e,"orderGet")},"Delete",8,d)])])))),128))])):(0,n.kq)("",!0),e.preview?((0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[p])),_:1}),(0,n.Wm)(y,null,{default:(0,n.w5)((()=>[(0,n._)("button",{onClick:t[1]||(t[1]=e=>S.fetch())},"Start")])),_:1})])):(0,n.kq)("",!0),u,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=t=>e.search=t),placeholder:"Search"},null,512),[[o.nr,e.search]]),h,(0,n._)("button",{onClick:t[3]||(t[3]=t=>e.p=!e.p)},(0,s.zw)(e.p?e.page1:e.page2),1),(0,n.wy)((0,n._)("article",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.Scardsf,(e=>((0,n.wg)(),(0,n.j4)(b,{key:e,obj:e},null,8,["obj"])))),128))],512),[[o.F8,e.p]]),(0,n.wy)((0,n._)("article",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.Tcardsf,(e=>((0,n.wg)(),(0,n.j4)(w,{key:e,obj:e},null,8,["obj"])))),128))],512),[[o.F8,!e.p]])],64)}r(6699);const O=["src"],S={style:{"font-size":"3rem",top:"-5rem"}},y={style:{color:"#abab20","font-size":"2rem"}};function b(e,t,r,o,a,i){return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("span",null,[(0,n._)("img",{src:r.obj.Image,alt:"dish photo"},null,8,O),(0,n._)("span",S,(0,s.zw)(r.obj.Name)+"  |  "+(0,s.zw)(r.obj.Price)+"$",1),(0,n._)("span",y,[(0,n.Uk)((0,s.zw)(r.obj.Details)+" "+(0,s.zw)(r.obj.Season),1),(0,n._)("button",{onClick:t[0]||(t[0]=e=>i.confirmt())},"+")])])])}var w={name:"Card",props:{obj:Object},methods:{orderPOST:function(){let e=new XMLHttpRequest;e.onreadystatechange=()=>{if(200===e.status&&4===e.readyState){var t=JSON.parse(JSON.stringify(this.obj)),r=JSON.parse(e.responseText);try{while(1)r=JSON.parse(r)}catch{t.Id=r.Id,t.OrderId=r.OrderId,this.pushOrder(t),console.log("Success",t)}}},e.open("POST","http://localhost:80/api/PL/"),e.setRequestHeader("Accept","application/json"),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify([{Id:this.obj.Id,Name:this.obj.Name,OrderId:this.obj.OrderId}]))},orderPUT:function(){let e=new XMLHttpRequest;e.onreadystatechange=()=>{200===e.status&&4===e.readyState&&(console.log("Success",e.responseText),this.pushGet(this.obj))},e.open("PUT","http://localhost:80/api/PL/"),e.setRequestHeader("Accept","application/json"),e.setRequestHeader("Content-Type","application/json"),e.send(JSON.stringify({Id:this.obj.Id,Name:this.obj.Name,OrderId:this.obj.OrderId}))},confirmt:function(){let e=new XMLHttpRequest;e.responseType="",e.onreadystatechange=()=>{if(200===e.status&&4===e.readyState){if("T"!=e.responseText[1])return confirm("There are no ready "+this.obj.Name+". Order it?")?(alert("Ordered"),void this.orderPOST()):void alert("Okey");alert("Ordered"),this.orderPUT()}},e.open("GET","http://localhost:80/api/PL?action=Exist&name="+this.obj.Name),e.send()},pushOrder:function(e){let t=localStorage.getItem("order");if(t)return t=JSON.parse(t),t.push(e),t=JSON.stringify(t),void localStorage.setItem("order",t);t=[],t.push(e),t=JSON.stringify(t),localStorage.setItem("order",t)},pushGet:function(e){let t=localStorage.getItem("orderGet");if(t)return t=JSON.parse(t),t.push(e),t=JSON.stringify(t),void localStorage.setItem("orderGet",t);t=[],t.push(e),t=JSON.stringify(t),localStorage.setItem("orderGet",t)}}},j=r(89);const T=(0,j.Z)(w,[["render",b],["__scopeId","data-v-1b4eab1a"]]);var N=T;const v=["src"],I={style:{"font-size":"3rem",top:"-5rem"}},_={style:{color:"#abab20","font-size":"2rem"}};function k(e,t,r,o,a,i){return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("span",null,[(0,n._)("img",{src:r.obj.Image,alt:"dish photo"},null,8,v),(0,n._)("span",I,(0,s.zw)(r.obj.Name)+"  |  "+(0,s.zw)(r.obj.Price)+"$",1),(0,n._)("span",_,[(0,n.Uk)((0,s.zw)(r.obj.Details)+" "+(0,s.zw)(r.obj.Type),1),(0,n._)("button",{onClick:t[0]||(t[0]=e=>i.confirmt())},"+")])])])}var J={name:"CardT",props:{obj:Object},methods:{confirmt:function(){let e=new XMLHttpRequest;e.responseType="",e.onreadystatechange=()=>{if(200===e.status&&4===e.readyState){if("T"!=e.responseText[1])return confirm("There are no ready "+this.obj.Name+". Order it?")?(this.pushOrder(),void alert("Ordered")):void alert("Okey");this.pushGet(),alert("Ordered")}},e.open("GET","http://localhost:80/api/PL?action=Exist&name="+this.obj.Name),e.send()},pushOrder:function(){let e=localStorage.getItem("order");if(e)return e=JSON.parse(e),e.push(this.obj),e=JSON.stringify(e),void localStorage.setItem("order",e);e=[],e.push(this.obj),e=JSON.stringify(e),localStorage.setItem("order",e)},pushGet:function(){let e=localStorage.getItem("orderGet");if(e)return e=JSON.parse(e),e.push(this.obj),e=JSON.stringify(e),void localStorage.setItem("orderGet",e);e=[],e.push(this.obj),e=JSON.stringify(e),localStorage.setItem("orderGet",e)}}};const C=(0,j.Z)(J,[["render",k],["__scopeId","data-v-701aebee"]]);var x=C,H={name:"App",components:{Card:N,CardT:x},watch:{search(){this.Scardsf=this.Scards.filter(this.filtr),this.Tcardsf=this.Tcards.filter(this.filtr)}},methods:{filtr:function(e){return e.Name.includes(this.search)},delorder:function(e,t){let r=new XMLHttpRequest,o=new FormData;o.append("Id",e.Id),o.append("Name",e.Name),o.append("OrderId",e.OrderId),r.onreadystatechange=()=>{200===r.status&&4===r.readyState&&("T"==r.responseText[1]?alert("Deleted"):alert(r.responseText),this.showOrders=!0)},r.open("DELETE","http://localhost:80/api/PL/"),r.setRequestHeader("Accept","application/json"),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify([{Id:e.Id,Name:e.Name,OrderId:e.OrderId}]));let n=JSON.parse(localStorage.getItem(t)),s=[];for(let a in n)n[a].Id!==e.Id&&s.push(n[a]);localStorage.setItem(t,JSON.stringify(s)),this.showOrders=!1},removeElement:function(e,t){var r=e.indexOf(t);r>-1&&e.splice(r,1)},getls:function(e){return JSON.parse(localStorage.getItem(e))},showOrder:function(){this.showOrders=!this.showOrders},fetch:function(){let e=new XMLHttpRequest;e.responseType="",e.onreadystatechange=()=>{if(200===e.status&&4===e.readyState){let t=JSON.parse(e.responseText);t=JSON.parse(t),t=JSON.parse(t),this.Scards=t,this.Scardsf=t,this.preview=!1,console.log(this.Scards);let r=new XMLHttpRequest;r.responseType="",r.onreadystatechange=()=>{if(200===r.status&&4===r.readyState){let e=JSON.parse(r.responseText);e=JSON.parse(e),e=JSON.parse(e),this.Tcards=e,this.Tcardsf=e,this.preview=!1,console.log(this.Tcards)}},r.open("GET","http://localhost:80/api/PL?action=Type&name=null"),r.send()}},e.open("GET","http://localhost:80/api/PL?action=Season&name=null"),e.send()}},data:()=>({showOrders:!1,p:!0,preview:!0,page1:"Season dishes",page2:"Type dishes",Scards:[],Tcards:[],Scardsf:[],Tcardsf:[],search:""})};const P=(0,j.Z)(H,[["render",m]]);var z=P;(0,o.ri)(z).mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,s){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],s=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,n,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,a=o[0],i=o[1],l=o[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var c=l(r)}for(t&&t(o);d<a.length;d++)s=a[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},o=self["webpackChunkui"]=self["webpackChunkui"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(5428)}));o=r.O(o)})();
//# sourceMappingURL=app.3f4dd7b7.js.map
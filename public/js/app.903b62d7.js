(function(e){function t(t){for(var s,r,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);m&&m(t);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(s=!1)}s&&(n.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},r={1:0},o={1:0},n=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"94961850",3:"2c81d99f",4:"5d58b7e5",5:"e4ef0b25",6:"45439eac",7:"9527da51",8:"2f85f606",9:"de109f6a",10:"6602b906",11:"a5271bb5"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={2:1,3:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{2:"07272b00",3:"c56f7071",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0"}[e]+".css",o=c.p+s,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var l=n[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===s||d===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var s=t&&t.target&&t.target.src||o,n=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete r[e],m.parentNode.removeChild(m),a(n)},m.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){r[e]=0})));var s=o[e];if(0!==s)if(s)t.push(s[2]);else{var n=new Promise((function(t,a){s=o[e]=[t,a]}));t.push(s[2]=n);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=o[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",u.name="ChunkLoadError",u.type=s,u.request=r,a[1](u)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=d;n.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"2f39":function(e,t,a){"use strict";a.r(t);a("e6cf"),a("5319"),a("573e"),a("7d6e"),a("e54f"),a("985d"),a("31cd");var s=a("2b0e"),r=a("1f91"),o=a("42d2"),n=a("b05d"),i=a("f508"),c=a("2a19"),l=a("515f"),d=a("18d6"),u=a("9c64");s["a"].use(n["a"],{config:{},lang:r["a"],iconSet:o["a"],plugins:{Loading:i["a"],Notify:c["a"],Cookies:l["a"],LocalStorage:d["a"],Meta:u["a"]}});var m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},h=[],g=a("ded3"),p=a.n(g),w=a("2f62"),f={name:"App",mounted(){},methods:p()(p()({},Object(w["b"])("auth",["fetchUser"])),Object(w["b"])("dues",["getDues"]))},v=f,y=a("2877"),C=Object(y["a"])(v,m,h,!1,null,null,null),b=C.exports,S=a("bc3a"),P=a.n(S);const x={user:null,isLoggedIn:null},E={user(e){return e.user.payments},userRole(e){return e.user}},M={setUser(e,t){e.user=t,e.isLoggedIn=!0},clearUser(e,{user:t}){e.user=t,e.isLoggedIn=!1}},A={async login({commit:e,dispatch:t},a){try{i["a"].show();const e=await P()({method:"POST",url:"api/v1/users/login",withCredentials:!0,data:a});l["a"].set("jwt",e.data.token),t("fetchUser"),i["a"].hide(),"user"==e.data.data.user.role?this.$router.push("/dashboard"):(t("admin/getUsers",null,{root:!0}),this.$router.push("/dashboard/admin"))}catch(s){i["a"].hide(),s.response.data.message?c["a"].create({message:s.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}},async signup({commit:e,dispatch:t},a){try{i["a"].show(),t("dues/getDues",null,{root:!0});const e=await P()({method:"POST",url:"api/v1/users/signup",withCredentials:!0,data:a});l["a"].set("jwt",e.data.token),t("fetchUser"),c["a"].create({message:"Successful",icon:"check",color:"positive",textColor:"white"}),d["a"].set("isLoggedIn",!0),i["a"].hide(),"user"==e.data.data.user.role?this.$router.push("/dashboard"):(t("admin/getUsers",null,{root:!0}),this.$router.push("/dashboard/admin"))}catch(s){i["a"].hide(),s.response.data.message?c["a"].create({message:s.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}},async fetchUser({commit:e,dispatch:t}){try{i["a"].show();const a=await P()({method:"GET",url:"api/v1/users/me",withCredentials:!0});return e("setUser",a.data.user),"admin"==a.data.user.role&&t("admin/getUsers",null,{root:!0}),d["a"].set("isLoggedIn",!0),i["a"].hide(),a.data.user}catch(a){l["a"].remove("jwt"),d["a"].set("isLoggedIn",!1),this.$router.push("/"),i["a"].hide()}},async logout({commit:e}){try{i["a"].show(),await P()({method:"GET",url:"api/v1/users/logout",withCredentials:!0}),e("clearUser",{user:null}),l["a"].remove("jwt"),d["a"].set("isLoggedIn",!1),this.$router.push("/"),i["a"].hide()}catch(t){i["a"].hide(),t.response.data.message?c["a"].create({message:t.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}},passwordUpdated({commit:e},t){e("setUser",t)},async forgotPassword({},e){try{i["a"].show();const t=await P()({method:"POST",url:"api/v1/users/forgotPassword",withCredentials:!0,data:e});console.log(t),i["a"].hide(),c["a"].create({message:t.data.message,icon:"check",color:"positive",textColor:"white"})}catch(t){i["a"].hide(),t.response.data.message?c["a"].create({message:t.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}},async resetPassword({commit:e},{data:t,token:a}){try{i["a"].show(),console.log(a);const s=await P()({method:"PATCH",url:"api/v1/users/resetpassword/"+a,withCredentials:!0,data:t});c["a"].create({message:"password changed successfully",icon:"check",color:"positive",textColor:"white"}),e("setUser",s.data.data.user),l["a"].set("jwt",s.data.token),d["a"].set("isLoggedIn",!0),i["a"].hide(),"user"==s.data.data.user.role?this.$router.push("/dashboard"):this.$router.push("/dashboard/admin")}catch(s){i["a"].hide(),console.log(s),s.response.data.message?c["a"].create({message:s.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}}};var O={namespaced:!0,state:x,getters:E,mutations:M,actions:A};const U={users:null,levelModels:"all",levelOptions:["all","first","second","third","fourth"],paymentStatusModels:"all",paymentStatusOptions:["all","PAID","N/A"],semesterModels:"all",semesterOptions:["all","first","second"],search:"",dues:null},L={dues(e){return e.dues},firstSemesterAmount(e){let t=0;return e.users&&e.users.forEach((e=>{e.firstAmount&&(t+=e.firstAmount)})),t},secondSemesterAmount(e){let t=0;return e.users&&e.users.forEach((e=>{e.secondAmount&&(t+=e.secondAmount)})),t},getUsers(e){let t=[];return t="all"!==e.levelModels?e.users.filter((t=>t.level===e.levelModels)):e.users,"all"!==e.paymentStatusModels&&(t=t.filter((t=>t.first===e.paymentStatusModels||t.second===e.paymentStatusModels))),"all"!==e.semesterModels&&"all"!==e.paymentStatusModels&&(t=t.filter((t=>t[e.semesterModels]==e.paymentStatusModels))),e.search&&(t=[],e.users.forEach((a=>{a.email.includes(e.search.toLowerCase())&&t.push(a)}))),t}},k={getUsers(e,t){let a=t;a.forEach((e=>{for(const t in e)"payments"===t&&e.payments.forEach((t=>{"first"===t.semester?(e.first="PAID",e.firstAmount=t.amount):"second"===t.semester&&(e.second="PAID",e.secondAmount=t.amount)}))})),a.forEach((e=>{e.first||(e.first="N/A"),e.second||(e.second="N/A")})),e.users=a},setLevelModels(e,t){e.levelModels=t},setPaymentStatusModels(e,t){e.paymentStatusModels=t},setSemesterModels(e,t){e.semesterModels=t},setSearch(e,t){e.search=t},getDues(e,t){e.dues=t}},j={async getUsers({commit:e},t){try{const t=await P()({method:"GET",url:"api/v1/users",withCredentials:!0});e("getUsers",t.data.users)}catch(a){a.response.data.message?c["a"].create({message:a.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}},setLevelModels({commit:e},t){e("setLevelModels",t)},setPaymentStatusModels({commit:e},t){e("setPaymentStatusModels",t)},setSemesterModels({commit:e},t){e("setSemesterModels",t)},setSearch({commit:e},t){e("setSearch",t)},async changePrice({dispatch:e},{id:t,amount:a}){try{const s={amount:a};await P()({method:"PATCH",url:"api/v1/dues/"+t,withCredentials:!0,data:s});e("dues/getDues",null,{root:!0}),c["a"].create({message:"update successful",icon:"check",color:"positive",textColor:"white"})}catch(s){s.response.data.message?c["a"].create({message:s.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}},async makeUserPayment({dispatch:e},t){try{await P()({method:"POST",url:"api/v1/payments/adminpayments",withCredentials:!0,data:t});e("getUsers"),c["a"].create({message:"successful",icon:"check",color:"positive",textColor:"white"})}catch(a){console.log(a),a.response.data.message?c["a"].create({message:a.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}}};var T={namespaced:!0,state:U,getters:L,mutations:k,actions:j};const I={dues:null},D={getDues(e,t,a,s){const r=a["auth"]["user"],o=e.dues;return r&&o.forEach((e=>{const t=r.payments.find((t=>t.semester===e.semester));e.status=t?"PAID":"N/A"})),o}},_={setDues(e,t){e.dues=t}},$={async getDues({commit:e},t){try{const t=await P()({method:"GET",url:"api/v1/dues",withCredentials:!0});e("setDues",t.data.data),e("admin/getDues",t.data.data,{root:!0})}catch(a){a.response.data.message?c["a"].create({message:a.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}}};var N={namespaced:!0,state:I,getters:D,mutations:_,actions:$};const H={},q={},B={},G={async makePayment({commit:e},t){try{i["a"].show();const e=await P()({method:"POST",url:"api/v1/payments/makepayments",withCredentials:!0,data:{duesId:t}});window.location=e.data.data.data.link}catch(a){i["a"].hide(),a.response.data.message?c["a"].create({message:a.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}},async verifyPayment({dispatch:e}){try{let t=window.location.href;if(t=t.split("?")[1],void 0!==t){let a=(""+t).split("&");const s={};if(s.status=a[0].split("=")[1],s.tx_ref=a[1].split("=")[1],a[2]&&(s.transaction_id=a[2].split("=")[1]),"successful"===s.status){await P()({method:"POST",url:"api/v1/payments",withCredentials:!0,data:s});c["a"].create({message:"Payment successful",icon:"check",color:"positive",textColor:"white"}),e("auth/fetchUser",null,{root:!0}),this.$router.replace("/dashboard")}}}catch(t){t.response.data.message?c["a"].create({message:t.response.data.message,icon:"warning",color:"negative",textColor:"white"}):c["a"].create({message:"Error!!! Something went wrong.",icon:"warning",color:"negative",textColor:"white"})}}};var V={namespaced:!0,state:H,getters:q,mutations:B,actions:G};a("ddb0");const F={currencyConverter:!1},J={currencyConverter(e){return e.currencyConverter}},K={setCurrencyConverterStatus(e,t){e.currencyConverter=t,d["a"].set("currencyConverter",t)},initialLoadCurrency(e){e.currencyConverter=d["a"].getItem("currencyConverter")}},Q={getCurrencyConverterStatus({commit:e},t){e("setCurrencyConverterStatus",t)},initialLoadCurrency({commit:e}){e("initialLoadCurrency")},async updateUser({commit:e,dispatch:t},a){try{i["a"].show();const e=new FormData;for(const[t,s]of Object.entries(a))null!=a[t]&&""!=a[t]||delete a[t];for(const[t,s]of Object.entries(a))e.append(""+t,s);await P()({method:"PATCH",data:e,url:"api/v1/users/updateme",withCredentials:!0});t("auth/fetchUser",null,{root:!0}),i["a"].hide(),c["a"].create({color:"green-5",textColor:"white",icon:"check",message:"updated successfully!"})}catch(s){i["a"].hide(),s.response.data.message?c["a"].create({color:"negative",textColor:"white",icon:"cancel",message:s.response.data.message}):c["a"].create({color:"negative",textColor:"white",icon:"cancel",message:"Error! something went wrong"})}},async updatePassword({commit:e,dispatch:t},a){try{i["a"].show();const e=await P()({method:"PATCH",data:a,url:"api/v1/users/updatepassword",withCredentials:!0});c["a"].create({color:"green-5",textColor:"white",icon:"check",message:"password updated successfully"}),t("auth/passwordUpdated",e.data.data.user,{root:!0}),i["a"].hide()}catch(s){i["a"].hide(),s.response.data.message?c["a"].create({color:"negative",textColor:"white",icon:"cancel",message:s.response.data.message}):c["a"].create({color:"negative",textColor:"white",icon:"cancel",message:"Error! something went wrong"})}}};var R={namespaced:!0,state:F,getters:J,mutations:K,actions:Q};s["a"].use(w["a"]);var z=function(){const e=new w["a"].Store({modules:{auth:O,admin:T,dues:N,payments:V,settings:R},strict:!1});return e},W=a("8c4f");const X=[{path:"/dashboard",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"8b24")),meta:{user:!0}},{path:"/dashboard/admin",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"34ab")),meta:{adminUser:!0}},{path:"/settings",component:()=>Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"b41f")),meta:{isLoggedIn:!0}}]},{path:"",component:()=>Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"a9c3")),meta:{noAuth:!0},children:[{path:"",component:()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"013f"))},{path:"/signup",component:()=>Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"e422"))},{path:"/resetpassword/:id",component:()=>Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"b0ef"))},{path:"/forgotpassword",component:()=>Promise.all([a.e(0),a.e(10)]).then(a.bind(null,"437a"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(9)]).then(a.bind(null,"e51e"))}];var Y=X;s["a"].use(W["a"]);var Z=function(){const e=new W["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Y,mode:"hash",base:""});return e},ee=async function(){const e="function"===typeof z?await z({Vue:s["a"]}):z,t="function"===typeof Z?await Z({Vue:s["a"],store:e}):Z;e.$router=t;const a={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:a,store:e,router:t}};s["a"].prototype.$axios=P.a;var te=a("4bde"),ae=Object(te["boot"])((async({router:e,app:t,store:a})=>{t.store.dispatch("dues/getDues"),e.beforeEach(((e,t,s)=>{let r=a.state.auth.isLoggedIn,o=a.state.auth.user;e.matched.some((e=>e.meta.adminUser))&&r?"admin"===o.role?s():s("/dashboard"):e.matched.some((e=>e.meta.user))&&r?"user"===o.role?s():s("/dashboard/admin"):(e.matched.some((e=>e.meta.isLoggedIn)),s())}))}));const se="";async function re(){const{app:e,store:t,router:a}=await ee();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},n=window.location.href.replace(window.location.origin,""),i=[void 0,ae];for(let l=0;!1===r&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:a,store:t,Vue:s["a"],ssrContext:null,redirect:o,urlPath:n,publicPath:se})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&new s["a"](e)}re()},"31cd":function(e,t,a){}});
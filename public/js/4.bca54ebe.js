(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{4018:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-md q-gutter-sm"},[s("q-dialog",{attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("q-card",[s("q-bar",[s("q-space"),s("q-btn",{attrs:{dense:"",flat:"",icon:"minimize",disable:!t.maximizedToggle},on:{click:function(e){t.maximizedToggle=!1}}},[t.maximizedToggle?s("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Minimize")]):t._e()],1),s("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square",disable:t.maximizedToggle},on:{click:function(e){t.maximizedToggle=!0}}},[t.maximizedToggle?t._e():s("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Maximize")])],1),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"},on:{click:function(e){return t.$emit("close")}}},[s("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),s("div",{ref:"content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-center"},[s("h5",[t._v("National Association of Computer science students")]),s("br"),s("span",[t._v("(Nacoss)")]),s("br"),s("q-avatar",[s("img",{attrs:{src:a("60e8"),alt:""}})])],1),s("div",{staticClass:"col-12 justify-center",attrs:{align:"center"}},[s("q-list",{staticStyle:{width:"600px"},attrs:{bordered:"",separator:""}},t._l(t.receipt,(function(e,a){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a},[s("q-item-section",[t._v("\r\n                                "+t._s(a)+"\r\n                            ")]),s("q-item-section",[t._v("\r\n                                "+t._s(e)+" "),"year"==a?s("span",[t._v("Year")]):t._e()])],1)})),1)],1)])]),s("div"),s("div",{staticClass:"absolute-bottom row q-pb-lg"},[s("q-btn",{staticClass:"col q-ma-lg",attrs:{label:"Download",color:"primary"},on:{click:t.download}}),s("q-btn",{staticClass:"col q-ma-lg",attrs:{label:"print",color:"secondary"},on:{click:t.print}})],1)],1)],1)],1)},i=[],n=(a("fb6a"),a("8baf")),o=(a("c0e9"),a("70b0")),r=a.n(o),c={props:["dialog","receipt"],data(){return{maximizedToggle:!0}},methods:{print(){window.print()},download(){r.a.toPng(this.$refs.content).then((function(t){var e=new Image;e.src=t;const a=new n["a"]({orientation:"portrait",format:[432,792]});a.addImage(e,"JPEG",15,40);const s=new Date,i="paymentFee_"+s.getFullYear()+("0"+(s.getMonth()+1)).slice(-2)+("0"+s.getDate()).slice(-2)+("0"+s.getHours()).slice(-2)+("0"+s.getMinutes()).slice(-2)+("0"+s.getSeconds()).slice(-2)+".pdf";a.save(i)})).catch((function(t){console.error("oops, something went wrong!",t)}))}}},l=c,d=a("2877"),m=a("9c40"),u=a("24e8"),p=a("f09f"),g=a("d847"),f=a("2c91"),b=a("05c0"),v=a("cb32"),h=a("1c1c"),_=a("66e5"),w=a("4074"),x=a("7f67"),q=a("714f"),y=a("eebe"),C=a.n(y),k=Object(d["a"])(l,s,i,!1,null,null,null);e["default"]=k.exports;C()(k,"components",{QBtn:m["a"],QDialog:u["a"],QCard:p["a"],QBar:g["a"],QSpace:f["a"],QTooltip:b["a"],QAvatar:v["a"],QList:h["a"],QItem:_["a"],QItemSection:w["a"]}),C()(k,"directives",{ClosePopup:x["a"],Ripple:q["a"]})},"60e8":function(t,e,a){t.exports=a.p+"img/nacoss.585773e8.png"},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row"},[a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},[t.getDues?a("div",{staticClass:"col-12"},[t.getDues?a("q-banner",{staticClass:"bg-info text-white",attrs:{rounded:""},scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"check",color:"green"}})]},proxy:!0},{key:"action",fn:function(){return[a("q-btn",{attrs:{flat:"",disable:"PAID"!==t.getDues[0].status,label:"first semester receipt"},on:{click:function(e){t.dialog=!0,t.setDues("first")}}}),a("q-btn",{attrs:{flat:"",disable:"PAID"!==t.getDues[1].status,label:"second semester receipt"},on:{click:function(e){t.dialog=!0,t.setDues("second")}}})]},proxy:!0}],null,!1,3050466332)},[t._v("\n          Print your receipts\n        ")]):t._e()],1):t._e()]),a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},[a("div",{staticClass:"col-12 q-pt-lg",attrs:{align:"center"}},[a("q-markup-table",{staticClass:"bg-positive",staticStyle:{width:"400px"},attrs:{flat:"",bordered:""}},[a("thead",[a("tr",[a("th",{staticClass:"text-left text-white"},[t._v("Semester")]),a("th",{staticClass:"text-left text-white"},[t._v("Amount")]),a("th",{staticClass:"text-center text-white"},[t._v("Status")])])]),t.getDues?a("tbody",{staticClass:"bg-grey-3"},t._l(t.getDues,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-left"},[t._v(t._s(e.semester)+" Semester")]),a("td",{staticClass:"text-left"},[t._v("₦"+t._s(e.amount))]),a("td",{staticClass:"text-center"},[t._v(" "+t._s(e.status)+" "),a("br"),"N/A"===e.status?a("q-btn",{attrs:{flat:"",label:"Pay",color:"positive"},on:{click:function(a){return t.makePayment(e._id)}}}):t._e()],1)])})),0):t._e()])],1)])],1),a("pdf",{attrs:{dialog:t.dialog,receipt:t.receipt},on:{close:function(e){t.dialog=!1}}}),a("div",{staticClass:"q-pr-sm text-right absolute-bottom all-pointer-events"},[t._v("\n    Send us a mail if you are having difficulties in payment "),a("br"),a("q-btn",{attrs:{flat:"",color:"info",label:"click Here to send mail"},on:{click:t.emailUs}})],1)],1)},i=[],n=a("ded3"),o=a.n(n),r=(a("bc3a"),a("8baf"),a("70b0"),a("c0e9"),a("2f62")),c={name:"PageIndex",components:{pdf:a("4018").default},data(){return{res:"ntn",dialog:!1,receipt:{}}},computed:o()(o()(o()({},Object(r["d"])("dues",["dues"])),Object(r["c"])("dues",["getDues"])),Object(r["d"])("auth",["user"])),mounted(){this.verifyPayment()},methods:o()(o()({},Object(r["b"])("payments",["makePayment","verifyPayment"])),{},{setDues(t){this.receipt.name=this.user.name,this.receipt.year=this.user.level,this.user.payments.forEach((e=>{if(e.semester===t){const t="₦";this.receipt.amount=`${t}${e.amount}`,this.receipt.semester=e.semester}}))},printReceipt(){window.print()},emailUs(){window.location.href="mailto:uzoagulujoshua@gmail.com?subject= "}})},l=c,d=a("2877"),m=a("9989"),u=a("54e1"),p=a("0016"),g=a("9c40"),f=a("2bb1"),b=a("eebe"),v=a.n(b),h=Object(d["a"])(l,s,i,!1,null,null,null);e["default"]=h.exports;v()(h,"components",{QPage:m["a"],QBanner:u["a"],QIcon:p["a"],QBtn:g["a"],QMarkupTable:f["a"]})}}]);
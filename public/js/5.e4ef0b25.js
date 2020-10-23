(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"2a6d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"my-card",staticStyle:{width:"400px"}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("Update Password")])]),a("q-card-section",{staticClass:"col q-pt-none"},[a("q-form",{on:{submit:t.submit}},[a("q-input",{attrs:{rounded:"",outlined:"",type:"password",label:"Current password",clearable:"",value:t.currentPassword,"lazy-rules":""},on:{input:function(e){return t.$emit("update:currentPassword",e)}}}),a("q-input",{staticClass:"q-pt-lg",attrs:{rounded:"",outlined:"",type:"password",label:"New Password","lazy-rules":"",clearable:"",value:t.password,rules:[function(t){return t.length>=8||"please your password must be atleast 8 characters"}]},on:{input:function(e){return t.$emit("update:password",e)}}}),a("q-input",{staticClass:"q-pt-lg",attrs:{rounded:"",outlined:"",type:"password",label:"Confirm New Password","lazy-rules":"",clearable:"",value:t.confirmPassword,rules:[function(e){return e===t.password||"passwords dont match"}]},on:{input:function(e){return t.$emit("update:confirmPassword",e)}}}),a("div",{staticClass:"text-center q-pt-lg"},[a("q-btn",{attrs:{label:"update password",type:"submit",color:"primary"}})],1)],1)],1),a("q-card-actions",{staticClass:"absolute-bottom bg-white text-red",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Close"}})],1)],1)},s=[],o={props:["password","currentPassword","confirmPassword"],methods:{submit(){this.$emit("submitted")}}},i=o,n=a("2877"),l=a("f09f"),c=a("a370"),u=a("0378"),d=a("27f9"),p=a("9c40"),m=a("4b7e"),w=a("7f67"),f=a("eebe"),b=a.n(f),h=Object(n["a"])(i,r,s,!1,null,null,null);e["default"]=h.exports;b()(h,"components",{QCard:l["a"],QCardSection:c["a"],QForm:u["a"],QInput:d["a"],QBtn:p["a"],QCardActions:m["a"]}),b()(h,"directives",{ClosePopup:w["a"]})},"5a2f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"column",staticStyle:{width:"400px",height:"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("Update Account")])]),a("q-card-section",{staticClass:"col q-pt-none"},[a("q-form",{on:{submit:t.submit}},[a("q-input",{attrs:{rounded:"",outlined:"",type:"text",value:t.name,label:"Name",clearable:""},on:{input:function(e){return t.$emit("update:name",e)}}}),a("q-input",{staticClass:"q-pt-lg",attrs:{rounded:"",outlined:"",type:"text",value:t.email,label:"Email",clearable:""},on:{input:function(e){return t.$emit("update:email",e)}}}),a("q-file",{staticClass:"q-pt-lg",attrs:{value:t.photo,label:"Upload profile Photo",rounded:"",outlined:""},on:{input:function(e){return t.$emit("update:photo",e)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}])}),a("div",{staticClass:"text-center q-pt-lg"},[a("q-btn",{attrs:{label:"update",type:"submit",color:"primary"}})],1)],1)],1),a("q-card-actions",{staticClass:"bg-white text-red",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Close"}})],1)],1)},s=[],o={props:{name:String,email:String,photo:File},methods:{submit(){this.$emit("submitted")}}},i=o,n=a("2877"),l=a("f09f"),c=a("a370"),u=a("0378"),d=a("27f9"),p=a("7d53"),m=a("0016"),w=a("9c40"),f=a("4b7e"),b=a("7f67"),h=a("eebe"),q=a.n(h),v=Object(n["a"])(i,r,s,!1,null,null,null);e["default"]=v.exports;q()(v,"components",{QCard:l["a"],QCardSection:c["a"],QForm:u["a"],QInput:d["a"],QFile:p["a"],QIcon:m["a"],QBtn:w["a"],QCardActions:f["a"]}),q()(v,"directives",{ClosePopup:b["a"]})},b41f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-list",{attrs:{bordered:"",padding:""}},[a("q-item-label",{attrs:{header:""}},[t._v("User Settings")]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.fullHeight=!0,t.mode="account"}}},[a("q-item-section",[a("q-item-label",[t._v("Account")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n          Set and edit your account details and \n          profile picture\n        ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.fullHeight=!0,t.mode="password"}}},[a("q-item-section",[a("q-item-label",[t._v("Password")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n          reset your password\n        ")])],1)],1),a("q-separator",{attrs:{spaced:""}}),a("q-item-label",{attrs:{header:""}},[t._v("More")]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label",clickable:""},on:{click:t.help}},[a("q-item-section",[a("q-item-label",[t._v("Help")])],1),a("q-item-section",{attrs:{top:""}},[a("q-icon",{attrs:{name:"chevron_right",size:"md",color:"primary"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label",clickable:""},on:{click:t.vistOurWebsite}},[a("q-item-section",[a("q-item-label",[t._v("Visit Our Website")])],1),a("q-item-section",{attrs:{top:""}},[a("q-icon",{attrs:{name:"chevron_right",size:"md",color:"primary"}})],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label",clickable:""},on:{click:t.emailUs}},[a("q-item-section",[a("q-item-label",[t._v("Email us")])],1),a("q-item-section",{attrs:{top:""}},[a("q-icon",{attrs:{name:"chevron_right",size:"md",color:"primary"}})],1)],1)],1),a("q-dialog",{attrs:{"full-height":""},model:{value:t.fullHeight,callback:function(e){t.fullHeight=e},expression:"fullHeight"}},["account"===t.mode?a("account",{attrs:{photo:t.photo,name:t.name,email:t.email},on:{submitted:function(e){return t.updateUser({name:t.name,email:t.email,photo:t.photo})},"update:photo":function(e){t.photo=e},"update:name":function(e){t.name=e},"update:email":function(e){t.email=e}}}):t._e(),"password"===t.mode?a("password",{attrs:{password:t.password,confirmPassword:t.confirmPassword,currentPassword:t.currentPassword},on:{"update:password":function(e){t.password=e},"update:confirmPassword":function(e){t.confirmPassword=e},"update:confirm-password":function(e){t.confirmPassword=e},"update:currentPassword":function(e){t.currentPassword=e},"update:current-password":function(e){t.currentPassword=e},submitted:function(e){return t.updatePassword({password:t.password,confirmPassword:t.confirmPassword,currentPassword:t.currentPassword})}}}):t._e()],1)],1)},s=[],o=a("ded3"),i=a.n(o),n=a("b06b"),l=a("2f62"),c={components:{account:a("5a2f").default,password:a("2a6d").default},data(){return{mode:"",check1:!0,check2:!1,fullHeight:!1,name:"",email:"",photo:null,password:"",confirmPassword:"",currentPassword:""}},computed:i()(i()({},Object(l["c"])("settings",["currencyConverter"])),{},{converter:{get(){return this.currencyConverter},set(t){return this.getCurrencyConverterStatus(t)}}}),methods:i()(i()({},Object(l["b"])("settings",["updateUser","updatePassword","getCurrencyConverterStatus"])),{},{vistOurWebsite(){Object(n["a"])("http://www.stackoverflow.com")},emailUs(){window.location.href="mailto:uzoagulujoshua@gmail.com?subject= "},help(){window.location.href="mailto:uzoagulujoshua@gmail.com?subject=What can we help you with"}})},u=c,d=a("2877"),p=a("1c1c"),m=a("0170"),w=a("66e5"),f=a("4074"),b=a("eb85"),h=a("0016"),q=a("24e8"),v=a("714f"),g=a("eebe"),C=a.n(g),P=Object(d["a"])(u,r,s,!1,null,null,null);e["default"]=P.exports;C()(P,"components",{QList:p["a"],QItemLabel:m["a"],QItem:w["a"],QItemSection:f["a"],QSeparator:b["a"],QIcon:h["a"],QDialog:q["a"]}),C()(P,"directives",{Ripple:v["a"]})}}]);
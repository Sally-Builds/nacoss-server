(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"437a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-pa-md"},[e("div",{staticClass:"q-pt-lg row justify-center"},[e("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},[e("q-card",{staticClass:"col-12 col-sm-6"},[e("q-card-section",{staticClass:"row text-center"},[e("div",{staticClass:"text-h6 col-12 text-center"},[t._v(" Enter Email")])]),e("q-separator",{staticClass:"q-mb-lg"}),e("q-card-section",{staticClass:"q-pt-none"},[e("q-form",{on:{submit:t.submit}},[e("q-input",{ref:"mail",staticClass:"q-mb-sm",attrs:{rounded:"",outlined:"",label:"email address",type:"email",rules:[function(t){return!!t||"Field is required"}],dense:"","lazy-rules":"",hint:"Enter Email address to to send a link"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("q-card-actions",{attrs:{align:"center"}},[e("q-btn",{attrs:{label:"Send Link",type:"submit",color:"positive"}})],1)],1)],1)],1)],1)],1)])},i=[],n=e("ded3"),r=e.n(n),l=e("2f62"),o={data(){return{email:""}},methods:r()(r()({},Object(l["b"])("auth",["forgotPassword"])),{},{submit(){this.forgotPassword({email:this.email}),this.email=" ",this.$refs.mail.blur()}})},c=o,d=e("2877"),m=e("9989"),u=e("f09f"),p=e("a370"),b=e("eb85"),f=e("0378"),q=e("27f9"),C=e("4b7e"),h=e("9c40"),v=e("eebe"),w=e.n(v),Q=Object(d["a"])(c,s,i,!1,null,null,null);a["default"]=Q.exports;w()(Q,"components",{QPage:m["a"],QCard:u["a"],QCardSection:p["a"],QSeparator:b["a"],QForm:f["a"],QInput:q["a"],QCardActions:C["a"],QBtn:h["a"]})}}]);
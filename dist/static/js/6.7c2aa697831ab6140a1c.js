webpackJsonp([6],{ZMts:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),i=e("mtWM"),s=e.n(i),o=e("4Thl");s.a.defaults.timeout=5e3,s.a.defaults.withCredentials=!0,s.a.defaults.headers.post["Content-Type"]="application/json; charset=utf-8",n.default.prototype.$ajax=s.a;var c={name:"change-status",data:function(){return{active:3,bindStatus:"",countDownNum:5,step1:"",step2:"",tipText:"",iconTipText:"",tableData:[{shoukuanzhanghu:"",zizhanghao:"",zhanghuleixing:"",renzhengzhuangtai:"",yinhangkahao:"",yinhangkakaihuhang:""}]}},created:function(){this.chengeTypeSet(),this.queryMerchantDepositAcctInfo()},methods:{chengeTypeSet:function(){"yinhangka"===this.$route.query.type?(console.log("yinhangka"),this.step1="填写银行卡信息",this.step2="变更银行卡",this.tipText="重要提示：银行卡变更后，请注意认证状态，以免影响后续放款和提现操作。",this.iconTipText="您的华夏银行存管账户换卡申请已经提交，请耐心等待开户结果。"):"shoujihao"===this.$route.query.type?(console.log("shoujihao"),this.step1="填写手机号码",this.step2="变更手机号",this.tipText="",this.iconTipText="您的华夏银行存管账户变更手机号申请已经提交，请耐心等待处理结果。"):"kaihu"===this.$route.query.type&&(console.log("kaihu"),this.step1="填写银行卡信息",this.step2=" 确认开户",this.tipText="",this.iconTipText=" 您的华夏银行存管账户开户申请已经提交，请耐心等待开户结果。注意：开户成功后，您需要通过绑定的银行卡账户向您的存管账户完成一笔任意金额的转账操作，还请提前准备。")},goDetails:function(){this.$router.push({path:"/"})},countDownNumFun:function(){var t=this,a=setInterval(function(){t.countDownNum--,0===t.countDownNum&&(clearInterval(a),t.$router.push({path:"/"}))},1e3)},getNowFormatDate:function(){var t=new Date,a=t.getMonth()+1,e=t.getDate();return a>=1&&a<=9&&(a="0"+a),e>=0&&e<=9&&(e="0"+e),t.getFullYear()+"-"+a+"-"+e+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},queryMerchantDepositAcctInfo:function(){var t=this,a=o.a.queryMerchantDepositAcctInfo;this.$ajax.post(a,{appId:"org_crm_merchant",loginPhone:sessionStorage.getItem("phone"),recoCode:sessionStorage.getItem("recoCode"),reqTime:this.getNowFormatDate(),token:sessionStorage.getItem("token")}).then(function(a){0===a.data.code?(t.bindStatus=a.data.data.bindStatus,"B02"===a.data.data.bindStatus?(t.tableData[0].shoukuanzhanghu=a.data.data.depositAcct,t.tableData[0].zizhanghao=a.data.data.subAcct,t.tableData[0].zhanghuleixing=a.data.data.businessTypeMsg,t.tableData[0].renzhengzhuangtai=a.data.data.acctStsMsg,t.tableData[0].yinhangkahao=a.data.data.bankCardNo,t.tableData[0].yinhangkakaihuhang=a.data.data.openAcctBankName):"B03"===a.data.data.bindStatus&&(t.tableData[0].shoukuanzhanghu=a.data.data.depositAcct,t.tableData[0].zizhanghao=a.data.data.subAcct,t.tableData[0].zhanghuleixing=a.data.data.businessTypeMsg,t.tableData[0].renzhengzhuangtai=a.data.data.acctStsMsg,t.tableData[0].yinhangkahao=a.data.data.bindExcBankCardNo,t.tableData[0].yinhangkakaihuhang=a.data.data.bindExcBankName,t.countDownNumFun())):alert(a.data.msg)})}},watch:{},computed:{},components:{}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"change-status"},[e("div",[e("el-steps",{attrs:{active:t.active,"finish-status":"success","align-center":""}},[e("el-step",{attrs:{title:t.step1}}),t._v(" "),e("el-step",{attrs:{title:t.step2}}),t._v(" "),e("el-step",{attrs:{title:"完成"}})],1),t._v(" "),"B02"===t.bindStatus?e("div",{staticClass:"tip"},[t._v(t._s(t.tipText))]):t._e(),t._v(" "),"B01"===t.bindStatus?[e("div",{staticClass:"iconClass el-icon-time"}),t._v(" "),e("div",{staticClass:"iconTip"},[t._v("处理中（"),e("span",[t._v(t._s(t.countDownNum))]),t._v(" s）")]),e("br"),t._v(" "),e("div",{staticClass:"iconTip"},[t._v(t._s(t.iconTipText))])]:t._e(),t._v(" "),"B02"===t.bindStatus?[e("div",{staticClass:"iconClass el-icon-circle-check-outline"}),t._v(" "),e("div",{staticClass:"iconTip"},[t._v("成功")])]:t._e(),t._v(" "),"B03"===t.bindStatus?[e("div",{staticClass:"iconClass el-icon-warning"}),t._v(" "),e("div",{staticClass:"iconTip"},[t._v("失败")])]:t._e(),t._v(" "),"B01"!==t.bindStatus?e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"shoukuanzhanghu",label:"收款账户","show-overflow-tooltip":"",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"zizhanghao",label:"子帐号","show-overflow-tooltip":"",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"zhanghuleixing",label:"账户类型",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"renzhengzhuangtai",label:"认证状态",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"yinhangkahao",label:"银行卡账号",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"yinhangkakaihuhang",label:"银行卡开户行",align:"center"}})],1):t._e(),t._v(" "),e("el-button",{staticStyle:{"margin-top":"30px"},attrs:{type:"primary"},on:{click:t.goDetails}},[t._v("查看账户详情")])],2)])},staticRenderFns:[]};var h=e("VU/8")(c,l,!1,function(t){e("romo")},"data-v-3ecad1ea",null);a.default=h.exports},romo:function(t,a){}});
//# sourceMappingURL=6.7c2aa697831ab6140a1c.js.map
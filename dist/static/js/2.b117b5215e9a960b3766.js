webpackJsonp([2],{fsvw:function(t,e){},h123:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),o=a.n(n),s=a("7+uW"),i=a("zFqy"),l=a("4Thl");s.default.prototype.$ajax=i.a;var r={name:"main-content",data:function(){return{huaxiazhanghu:"",labizhanghu:"",qiyejiancheng:"",qiyemingcheng:"",kaihushijian:"",yinhangka:"",zhengjianleixing:"",zhengjianhaoma:"",zhizhaobianhao:"",dengjihao:"",farenxingming:"",farenshenfenzheng:"",farenshoujihao:"",openaccstatus:"",acctsts:"",openmsg:"",acctstsmsg:"",value:"",loanTime:"",loanTime1:"",depositStatus:"全部",referralCode:"全部",tabActive:"0",selectNum:"0",withdrawalAmount:0,borrowTotal:0,selectOrder:[],agencyObject:"",getLendingOrderListObject:{appId:"org_crm_merchant",bankCardNo:"",bankMsg:"",businessType:"",certNo:"",certType:"",depositAcct:"",inCashEndTime:"",inCashStartTime:"",legalCertNoDetail:"",loanEndTime:"",loanStartTime:"",loginPhone:sessionStorage.getItem("phone"),orderIds:"",orgId:"",pageNo:1,pageSize:10,recCode:"",recoCode:"",reqTime:this.getNowFormatDate(),sortName:"",sortType:"",subAcct:"",token:sessionStorage.getItem("token"),tradeStatus:"",tradeType:"",type:5,withdrawType:""},getAllRecoCodeObject:{appId:"org_crm_merchant",loginPhone:sessionStorage.getItem("phone"),reqTime:this.getNowFormatDate(),token:sessionStorage.getItem("token"),businessType:"",legalCertNoDetail:"",certNo:"",certType:"",depositAcct:"",subAcct:""},withdrawalObject:{appId:"org_crm_merchant",loginPhone:sessionStorage.getItem("phone"),reqTime:this.getNowFormatDate(),token:sessionStorage.getItem("token"),withdrawType:"",type:5,loanStartTime:"",loanEndTime:"",recCode:"",certType:"",certNo:"",businessType:"",depositAcct:"",subAcct:"",orderIds:"",recoCode:""},tableData3:[],multipleSelection:[],totalListNum:1}},created:function(){this.getOrgCodes(),sessionStorage.setItem("AcctInfo",null)},methods:{changebankcard:function(){this.$router.push({path:"changebankcard"})},changebankphone:function(){this.$router.push({path:"changebankphone"})},openAcc:function(){this.$router.push({path:"openAcc"})},changeTab:function(t){0===t&&(this.getLendingOrderListObject.type=5),1===t&&(this.getLendingOrderListObject.type=0),2===t&&(this.getLendingOrderListObject.type=1),this.getLendingOrderList(),this.tabActive=t,this.loanTime="",this.loanTime1="",this.depositStatus="全部",this.referralCode="全部"},toggleSelection:function(){this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){var e=this;this.selectNum=t.length,this.withdrawalAmount=0,this.selectOrder.splice(0),t.forEach(function(t){e.withdrawalAmount+=Number(t.withdrawMoney),e.selectOrder.push(t.id)}),this.withdrawalObject.orderIds=this.selectOrder},resetQuery:function(){this.loanTime="",this.loanTime1="",this.depositStatus="全部",this.referralCode="全部"},changePassword:function(t){"modify"===t?this.getLendingOrderListObject.tradeType="U4":"reset"===t&&(this.getLendingOrderListObject.tradeType="U5"),this.$ajax.post(l.a.modifyDepositAcctPwd,this.getLendingOrderListObject).then(function(t){0===t.data.code?location.href=t.data.data.jumpUrl:alert(t.data.msg)})},exportListClick:function(){var t=this,e=l.a.downAllExcelNum;this.$ajax.post(e,this.getLendingOrderListObject).then(function(e){0===e.data.code?t.$ajax.get(l.a.downAllExcel,t.getLendingOrderListObject).then(function(t){0===t.data.code||alert(t.data.msg)}):alert(e.data.msg)})},withdrawalClick:function(t){var e=this;this.$confirm('<p style="text-align: left">·提现金额：'+("W"===t?this.withdrawalAmount:this.borrowTotal)+"元<br/>·订单数："+("W"===t?this.selectNum:this.totalListNum)+"笔<br/>·银行卡："+this.yinhangka+"</p>","提现确认",{dangerouslyUseHTMLString:!0,confirmButtonText:"立即提现",cancelButtonText:"等一等",type:"info",center:!0}).then(function(){e.withdrawalObject.withdrawType=t;var a=l.a.withdrawSelectedOrders;e.$ajax.post(a,e.withdrawalObject).then(function(t){0===t.data.code?location.href=t.data.data.jumpUrl:alert(t.data.msg)})}).catch(function(){})},getNowFormatDate:function(){var t=new Date,e=t.getMonth()+1,a=t.getDate();return e>=1&&e<=9&&(e="0"+e),a>=0&&a<=9&&(a="0"+a),t.getFullYear()+"-"+e+"-"+a+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},getOrgCodes:function(){var t=this,e=l.a.queryOrgCodes;this.$ajax.post(e,{appId:"org_crm_merchant",loginPhone:sessionStorage.getItem("phone"),reqTime:this.getNowFormatDate(),token:sessionStorage.getItem("token")}).then(function(e){0===e.data.code?(t.agencyObject=e.data.data,t.value=e.data.data[0].recoCode):alert(e.data.msg)})},getAllRecoCode:function(){var t=l.a.getAllRecoCode;this.$ajax.post(t,this.getAllRecoCodeObject).then(function(t){if(0===t.data.code)return t.data.data;alert(t.data.msg)})},getLendingOrderList:function(){var t=this;this.getLendingOrderListObject.recoCode=sessionStorage.getItem("recoCode");var e=l.a.getLendingOrderList;this.$ajax.post(e,this.getLendingOrderListObject).then(function(e){0===e.data.code?(t.borrowTotal=e.data.data.amount,t.totalListNum=e.data.data.totalCount,t.tableData3=e.data.data.orders):alert(e.data.msg)})},changePageFun:function(t){this.getLendingOrderListObject.pageNo=t,this.getLendingOrderList()}},watch:{value:function(t,e){var a=this;sessionStorage.setItem("recoCode",t),this.withdrawalObject.recoCode=t;var n=l.a.queryMerchantDepositAcctInfo;this.$ajax.post(n,{appId:"org_crm_merchant",loginPhone:sessionStorage.getItem("phone"),recoCode:t,reqTime:this.getNowFormatDate(),token:sessionStorage.getItem("token")}).then(function(t){0===t.data.code?(a.withdrawalObject.certType=t.data.data.certType,a.withdrawalObject.certNo=t.data.data.certNo,a.withdrawalObject.businessType=t.data.data.businessType,a.withdrawalObject.depositAcct=t.data.data.depositAcct,a.withdrawalObject.subAcct=t.data.data.subAcct,a.getLendingOrderListObject.bankMsg=t.data.data.bankMsg,a.getLendingOrderListObject.businessType=t.data.data.businessType,a.getLendingOrderListObject.certNo=t.data.data.certNo,a.getLendingOrderListObject.certType=t.data.data.certType,a.getLendingOrderListObject.depositAcct=t.data.data.depositAcct,a.getLendingOrderListObject.subAcct=t.data.data.subAcct,a.getLendingOrderListObject.certType=t.data.data.certType,a.getLendingOrderListObject.legalCertNoDetail=t.data.data.legalCertNoDetail,a.getAllRecoCodeObject.businessType=t.data.data.businessType,a.getAllRecoCodeObject.legalCertNoDetail=t.data.data.legalCertNoDetail,a.getAllRecoCodeObject.certNo=t.data.data.certNo,a.getAllRecoCodeObject.certType=t.data.data.certType,a.getAllRecoCodeObject.depositAcct=t.data.data.depositAcct,a.getAllRecoCodeObject.subAcct=t.data.data.subAcct,sessionStorage.setItem("AcctInfo",o()(t.data.data)),a.huaxiazhanghu=t.data.data.depositAcct,a.labizhanghu=t.data.data.subAcct,a.qiyejiancheng=t.data.data.orgShortName,a.qiyemingcheng=t.data.data.orgName,a.kaihushijian=t.data.data.openAcctTime,a.yinhangka=t.data.data.bankMsg,a.zhengjianleixing=t.data.data.certTypeMsg,a.zhengjianhaoma=t.data.data.certNo,a.zhizhaobianhao=t.data.data.busiLiceNo,a.dengjihao=t.data.data.taxNo,a.farenxingming=t.data.data.legalName,a.farenshenfenzheng=t.data.data.legalCertNo,a.farenshoujihao=t.data.data.legalPhone,a.openaccstatus=t.data.data.openStatus,a.openmsg=t.data.data.openMsg,a.acctstsmsg=t.data.data.acctStsMsg,"P02"===a.openaccstatus&&(a.getAllRecoCode(),a.getLendingOrderList())):alert(t.data.msg)})},loanTime:function(t,e){this.getLendingOrderListObject.loanStartTime=t[0],this.getLendingOrderListObject.loanEndTime=t[1],this.withdrawalObject.loanStartTime=t[0],this.withdrawalObject.loanEndTime=t[1]},depositStatus:function(t,e){this.getLendingOrderListObject.type=t},referralCode:function(t,e){this.getLendingOrderListObject.recCode=t,this.withdrawalObject.recCode=t},loanTime1:function(t,e){this.getLendingOrderListObject.inCashStartTime=t[0],this.getLendingOrderListObject.inCashEndTime=t[1]}},computed:{},components:{}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-box"},[a("el-row",[a("el-col",{staticClass:"topTip",attrs:{span:24}},[a("div",[a("i",{staticClass:"el-icon-warning"}),t._v("您的华夏银行存管账户已经正式开通，款项会直接支付到您的银行存款账户；您可以随时从存管账户提现到您绑定的银行中，提现过程不会收取任何费用。")])])],1),t._v(" "),a("el-row",{staticClass:"accInfo"},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"left jigou"},[t._v("\n        *所属机构："),a("el-select",{staticStyle:{width:"30%","line-height":"40px"},attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.agencyObject,function(t,e){return a("el-option",{key:e,attrs:{label:t.recoCode,value:t.recoCode}})}))],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"left"},[a("div",[a("img",{attrs:{src:"/static/img/logo-bank.jpg"}}),t._v(" "),a("div",[a("span",{staticClass:"jiufu"},[t._v("华夏存管账户："+t._s(t.huaxiazhanghu))]),a("span",{staticClass:"huaxia"},[t._v("存管子帐号(蜡笔)："+t._s(t.labizhanghu))])])])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"right"},["P02"===t.openaccstatus?a("div",{staticClass:"top"},[a("el-button",{on:{click:t.changebankcard}},[t._v("变更银行卡")]),t._v(" "),a("el-button",{on:{click:t.changebankphone}},[t._v("更改手机号")]),t._v(" "),a("el-button",{on:{click:function(e){t.changePassword("modify")}}},[t._v("修改交易密码")]),t._v(" "),a("el-button",{on:{click:function(e){t.changePassword("reset")}}},[t._v("重置交易密码")])],1):"P01"===t.openaccstatus?a("div",{staticClass:"top"},[a("el-button",{attrs:{disabled:!0,type:"primary"}},[t._v("开通存管账户")])],1):a("div",{staticClass:"top"},[a("el-button",{attrs:{type:"primary"},on:{click:t.openAcc}},[t._v("开通存管账户")])],1),t._v(" "),a("div",{staticClass:"bottom"},[a("p",[t._v("开户状态："),a("span",[t._v(t._s(t.openmsg))])]),t._v(" "),a("p",[t._v("认证状态："),a("span",[t._v(t._s(t.acctstsmsg))])])])])])],1),t._v(" "),a("el-row",{staticClass:"accInfo1"},[a("el-col",{attrs:{span:8}},[a("p",[t._v("企业简称："),a("span",[t._v(t._s(t.qiyejiancheng))])]),t._v(" "),a("p",[t._v("企业名称："),a("span",[t._v(t._s(t.qiyemingcheng))])]),t._v(" "),a("p",[t._v("开户时间："),a("span",[t._v(t._s(t.kaihushijian))])]),t._v(" "),a("p",[t._v("银行卡："),a("span",[t._v(t._s(t.yinhangka))])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("p",[t._v("证件类型："),a("span",[t._v(t._s(t.zhengjianleixing))])]),t._v(" "),a("p",[t._v("证件号码："),a("span",[t._v(t._s(t.zhengjianhaoma))])]),t._v(" "),a("p",[t._v("营业执照编号："),a("span",[t._v(t._s(t.zhizhaobianhao))])]),t._v(" "),a("p",[t._v("税务登记号："),a("span",[t._v(t._s(t.dengjihao))])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("p",[t._v("法人姓名："),a("span",[t._v(t._s(t.farenxingming))])]),t._v(" "),a("p",[t._v("法人身份证号："),a("span",[t._v(t._s(t.farenshenfenzheng))])]),t._v(" "),a("p",[t._v("联系人手机号："),a("span",[t._v(t._s(t.farenshoujihao))])])])],1),t._v(" "),"P02"===t.openaccstatus?[a("el-row",{staticClass:"tab"},[a("el-col",{attrs:{span:24}},[a("div",[a("p",{class:[0==t.tabActive?"active":""],on:{click:function(e){t.changeTab(0)}}},[t._v("待提现")]),t._v(" "),a("p",{class:[1==t.tabActive?"active":""],on:{click:function(e){t.changeTab(1)}}},[t._v("提现中")]),t._v(" "),a("p",{class:[2==t.tabActive?"active":""],on:{click:function(e){t.changeTab(2)}}},[t._v("已提现")])])])],1),t._v(" "),0==t.tabActive?a("el-row",{staticClass:"screening"},[a("el-col",{attrs:{span:10}},[a("div",[t._v("放款时间：\n          "),a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.loanTime,callback:function(e){t.loanTime=e},expression:"loanTime"}})],1)]),t._v(" "),a("el-col",{attrs:{span:7}},[a("div",[t._v("提现状态：\n          "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.depositStatus,callback:function(e){t.depositStatus=e},expression:"depositStatus"}},[a("el-option",{key:"全部",attrs:{label:"全部",value:"5"}}),t._v(" "),a("el-option",{key:"未提现",attrs:{label:"未提现",value:"4"}}),t._v(" "),a("el-option",{key:"提现失败",attrs:{label:"提现失败",value:"2"}})],1)],1)]),t._v(" "),a("el-col",{attrs:{span:7}},[a("div",[t._v("推荐码：\n          "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.referralCode,callback:function(e){t.referralCode=e},expression:"referralCode"}},[a("el-option",{key:"全部",attrs:{label:"全部",value:""}}),t._v(" "),t._l(t.getAllRecoCode,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})],2)],1)])],1):a("el-row",{staticClass:"screening"},[a("el-col",{attrs:{span:9}},[a("div",[t._v("放款时间：\n          "),a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.loanTime,callback:function(e){t.loanTime=e},expression:"loanTime"}})],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",[t._v("推荐码：\n          "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.referralCode,callback:function(e){t.referralCode=e},expression:"referralCode"}},[a("el-option",{key:"全部",attrs:{label:"全部",value:""}}),t._v(" "),t._l(t.getAllRecoCode,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})],2)],1)]),t._v(" "),a("el-col",{attrs:{span:9}},[a("div",[t._v("提现时间：\n          "),a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.loanTime1,callback:function(e){t.loanTime1=e},expression:"loanTime1"}})],1)])],1),t._v(" "),a("el-row",{staticClass:"refreshButton"},[a("el-col",{attrs:{span:24}},[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.getLendingOrderList}},[t._v("查询")]),t._v(" "),a("el-button",{on:{click:t.resetQuery}},[t._v("重置")])],1)])],1),t._v(" "),0==t.tabActive?a("el-row",{staticClass:"statistics"},[a("el-col",{attrs:{span:24}},[a("div",[a("i",{staticClass:"el-icon-warning"}),a("p",[t._v("已选择"),a("span",[t._v(t._s(t.selectNum))]),t._v("项")]),a("p",[t._v("提现金额总计"),a("span",[t._v(t._s(t.withdrawalAmount))]),t._v("元")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.toggleSelection()}}},[t._v("清空")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.withdrawalClick("W")}}},[t._v("提现")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.withdrawalClick("WA")}}},[t._v("全部提现")])],1)])],1):a("el-row",{staticClass:"statistics"},[a("el-col",{attrs:{span:24}},[a("div",[a("i",{staticClass:"el-icon-warning"}),a("p",[t._v("已选择"),a("span",[t._v(t._s(t.selectNum))]),t._v("项")]),a("p",[t._v("提现金额总计"),a("span",[t._v(t._s(t.withdrawalAmount))]),t._v("元")]),t._v(" "),a("span",{on:{click:function(e){t.toggleSelection()}}},[t._v("清空")]),t._v(" "),a("span",{on:{click:function(e){t.exportListClick()}}},[t._v("导出")])])])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData3,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{prop:"loanCode",label:"订单编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"realName",label:"姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"recoCode",label:"推荐码","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"产品名称","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"planName",label:"方案名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"withdrawMoney",label:"可提现金"}}),t._v(" "),a("el-table-column",{attrs:{prop:"loanMoney",label:"借款金额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"withdrawStatus",label:"提现状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applicationDate",label:"申请时间","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"loanDate",label:"放款时间","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"withdrawDate",label:"提现时间","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"bankCardMsg",label:"收款银行卡","show-overflow-tooltip":""}})],1),t._v(" "),a("el-row",[a("el-col",{staticClass:"paging",attrs:{span:24}},[a("div",[a("p",[t._v("借款总金额："),a("span",[t._v("¥"+t._s(t.borrowTotal))])]),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalListNum},on:{"current-change":t.changePageFun,"prev-click":t.changePageFun,"next-click":t.changePageFun}})],1)])],1)]:t._e()],2)},staticRenderFns:[]};var d=a("VU/8")(r,c,!1,function(t){a("fsvw")},"data-v-2bb71f00",null);e.default=d.exports},mvHQ:function(t,e,a){t.exports={default:a("qkKv"),__esModule:!0}},qkKv:function(t,e,a){var n=a("FeBl"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}}});
//# sourceMappingURL=2.b117b5215e9a960b3766.js.map
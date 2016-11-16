/********
* 点击抽奖
* by zyy
********/
$(function(){
	var lottery = new Lottery();
	lottery.init();
});
function Lottery(){
	//this.btn = document.getElementById('lottery_btn');
	this.requestStatus = true;//为1时，请求数据；0--btn不再请求数据
	this.status = 0;//本地储存服务器返回状态，不再二次调用
	this.oldAngle = 0; //记录旋转的角度
	//旋转角度
	this.angle = {
		getNone : 67.5,    //没有中奖
		getBox : 112.5,    //拉杆箱
		getTwenty : 157.5, //20元礼金
		toMore : 202.5,    //再来一次
		getThirty : 247.5, //30礼金
		getKettle : 292.5, //净水壶
		getFifty : 337.5, //50礼金
	};
	//弹框内容
	this.dialogstr = {
		//error
		noid: '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div id='+'"'+'dc_error'+'"'+'><img src='+'"'+'img/smile.png'+'"'+' /><div id='+'"'+'dc_twoline'+'"'+'>您的app版本过低<br/>请更新后再参与抽奖</div></div><a id='+'"'+'dc_bottombtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>我知道了</span></a></div>',
		nopay: '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div id='+'"'+'dc_error'+'"'+'><img src='+'"'+'img/normal.png'+'"'+' /><div id='+'"'+'dc_twoline'+'"'+'>只有下单以后才能抽奖<br/>赶紧去下单吧</div></div><a id='+'"'+'dc_bottombtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>我知道了</span></a></div>',
		nochange: '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div id='+'"'+'dc_error'+'"'+'><img src='+'"'+'img/amazing.png'+'"'+' /><p>您的抽奖机会已用完</p></div><a id='+'"'+'dc_bottombtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>我知道了</span></a></div>',
		//没有中奖
		getNone : '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div id='+'"'+'dc_error'+'"'+'><img src='+'"'+'img/cry.png'+'"'+' /><p>很遗憾，没有中奖</p></div><a id='+'"'+'dc_bottombtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>我知道了</span></a></div>',   
		toMore : '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div id='+'"'+'dc_error'+'"'+'><img src='+'"'+'img/normal.png'+'"'+' /><p>不要气馁，再接再厉</p></div><a id='+'"'+'dc_bottombtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>再来一次</span></a></div>', 
		//getThirty : 247.5, //30礼金
		getKettle : '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div class='+'"'+'dc_success'+'"'+' id='+'"'+'dcs_goods'+'"'+'><div id='+'"'+'dg_title'+'"'+'>恭喜您获得：</div><img src='+'"'+'img/kettle.jpg'+'"'+' /><div id='+'"'+'dg_name'+'"'+'>德国BWT倍世净水壶2.7L粉色</div></div><a id='+'"'+'dc_bottombtn_goods'+'"'+' class='+'"'+'dc_tobtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>领取</span></a></div>',
		getKettleSure : '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div class='+'"'+'dc_success'+'"'+' id='+'"'+'dcs_goods'+'"'+'><div id='+'"'+'dg_title'+'"'+'>恭喜您获得：</div><img src='+'"'+'img/kettle.jpg'+'"'+' /><div id='+'"'+'dg_name'+'"'+'>它正向你飞奔来，可在<span>&nbsp;我的-全部订单-待收货&nbsp;</span>中查看</div></div><a id='+'"'+'dc_goodsclosebtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>确定</span></a></div>',
		getlijin : '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div class='+'"'+'dc_success'+'"'+' id='+'"'+'dcs_lijin'+'"'+'><div id='+'"'+'lj_title'+'"'+'>恭喜您获得：</div><div id='+'"'+'lj_img'+'"'+'><span id='+'"'+'li_name'+'"'+'>礼金券</span><span id='+'"'+'li_icon'+'"'+'>￥</span><span id='+'"'+'li_num'+'"'+'></span></div><div id='+'"'+'lj_tips'+'"'+'>它已跑到您的账户，可在<span>&nbsp;我的-我的钱包-礼金券&nbsp;</span>中查看</div></div><a id='+'"'+'dc_bottombtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>确定</span></a></div>', 
		getBox : '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div class='+'"'+'dc_success'+'"'+' id='+'"'+'dcs_goods'+'"'+'><div id='+'"'+'dg_title'+'"'+'>恭喜您获得：</div><img src='+'"'+'img/drawbarbox.jpg'+'"'+' /><div id='+'"'+'dg_name'+'"'+'>CROWN皇冠立体拉杆箱2件组</div></div><a id='+'"'+'dc_bottombtn_goods'+'"'+' class='+'"'+'dc_tobtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>领取</span></a></div>',
		getBoxSure : '<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img src='+'"'+'img/close_btn.png'+'"'+' /></a><div class='+'"'+'dc_success'+'"'+' id='+'"'+'dcs_goods'+'"'+'><div id='+'"'+'dg_title'+'"'+'>恭喜您获得：</div><img src='+'"'+'img/drawbarbox.jpg'+'"'+' /><div id='+'"'+'dg_name'+'"'+'>它正向你飞奔来，可在<span>&nbsp;我的-全部订单-待收货&nbsp;</span>中查看</div></div><a id='+'"'+'dc_goodsclosebtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>确定</span></a></div>'
		//getTwenty : 157.5, //20元礼金
	};
};
Lottery.prototype = {
	init: function(){
		//绑定事件
		this.bindEvent();
		//旋转角度
		//this.trun();
		//提示结果
	},
	bindEvent: function(){
		var _this = this;
		$('#lottery_btn').one('click',function(){
			//修改请求数据值，只有是再来一次时，再次请求数据
			_this.requestStatus = false;
			//添加动画特效
			$('#tp_canvas').addClass('runanimation');
			//ajax请求数据
			$.ajax({
				type: "get",
				url: "test.json",
				dataType: "json",
				//
				beforeSend: function(){

				},
				success: function(d){
					if(d.msg=="error"){
						//拥有抽奖资格
						switch(d.status){
							case "-4004" : _this.no(_this.dialogstr.noid);break;   //没有uid
							case "-4003" : _this.no(_this.dialogstr.nopay);break;   //未在商城付款
							case "-3" : _this.no(_this.dialogstr.nochange);break;   //没有抽奖机会
							//case "-2" : ;break;   //已经中奖了
							//case "-1" : ;break;   //活动结束 ,后台调用单独的html页面
						}
					}else if(d.msg=="success"){
						//没有抽奖资格
						switch(d.status){
							case "0" : _this.getnone();break;   //没有抽中
							case "1" : switch(d.data.other.prizetype){
										case 2 : _this.getgoods(_this.angle.getBox,_this.dialogstr.getBox,_this.dialogstr.getBoxSure);break;   //2-拉杆箱
										case 3 : _this.getgoods(_this.angle.getKettle,_this.dialogstr.getKettle,_this.dialogstr.getKettleSure);break;   //3-净水壶
										case 4 : _this.getlijin('50',_this.angle.getFifty);break;   //4-50礼金
										case 5 : _this.getlijin('30',_this.angle.getThirty);break;   //5-30礼金
										case 6 : _this.getlijin('20',_this.angle.getTwenty);break;   //6-20礼金
										};break;   //中奖
							case "2" : _this.tomore();break;   //再来一次
						}
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert(XMLHttpRequest.status);
                        alert(XMLHttpRequest.readyState);
                        alert(textStatus);
                    },
         		//请求超时
         		timeout: 10000
			});
		});
	},
	no: function(str){
		var _this = this;
		var d = new Dialog(true,str);
		d.init();
		//添加点击抽奖事件
		_this.addDialogEvent();
	},
	getnone: function(){
		var _this = this;
		//旋转6s
		_this.turn(_this.angle.getNone);
		//延迟7s显示，没有抽中提示框
		var d = new Dialog(true,_this.dialogstr.getNone,7000);
		d.init();
		/*
		//添加关闭弹窗按钮事件
		$('#dc_rightbtn').on('click',function(){
			alert(2);
			$('#dialog').css('display','none');
		});	
		*/
		//添加点击抽奖事件
		_this.addDialogEvent();
	},
	getlijin: function(num,angle,content){
		var _this = this;
		//旋转角度
		_this.turn(angle);
		//弹窗显示，修改金额
		//var d = new Dialog(true,_this.dialogstr.getlijin,7000);
		//d.init();
		setTimeout(function(){
					//显示
					$('#dialog').html(_this.dialogstr.getlijin);
					$('#dialog').css('display','block');
					$('#li_num').html(num);
					//绑定关闭按钮
					$('#dc_rightbtn').on('click',function(){
						$('#dialog').css('display','none');
					});
					$('#dc_bottombtn').on('click',function(){
						$('#dialog').css('display','none');
					});
				},7000);
		//添加点击抽奖事件
		_this.addDialogEvent();
	},
	tomore: function(){
		//弹窗显示,再来一次
		var _this = this;
		_this.turn(_this.angle.toMore);
		//定时器，延时任务
		setTimeout(function(){
					//显示
					$('#dialog').html(_this.dialogstr.toMore);
					$('#dialog').css('display','block');
					//旋转角度归零,首先去除动画特效
					$('#tp_canvas').removeClass('runanimation');
					$('#tp_canvas').css('transform','rotate(0deg)');
					_this.oldAngle = 0;
					console.log(_this.oldAngle);
					//绑定关闭按钮
					$('#dc_rightbtn').on('click',function(){
						$('#dialog').css('display','none');
					});
					$('#dc_bottombtn').on('click',function(){
						$('#dialog').css('display','none');
					});
					//重新与后台交互,添加动画特效
					_this.bindEvent();
				},7000);
	},
	getgoods: function(angle,strOne,strTwo){
		//旋转角度
		var _this = this;
		_this.turn(angle);
		//弹层,延时任务
		setTimeout(function(){
					//显示
					$('#dialog').html(strOne);
					$('#dialog').css('display','block');
					//绑定关闭按钮
					$('#dc_rightbtn').on('click',function(){
						$('#dialog').css('display','none');
					});
					//绑定领取按钮，跳转至页面2
					$('#dc_bottombtn_goods').on('click',function(){
						$('#main').css('display','none');
						$('#address').css('display','block');
					});
					//页面2处理函数，3
					var s = new Sendadd(strTwo);
					s.init();
					//添加点击抽奖事件
					_this.addDialogEvent();
				},7000);
	},
	turn: function(angle){
		this.oldAngle+=1800+angle;
		$('#tp_canvas').css('transform','rotate('+this.oldAngle+'deg)');
		console.log(this.oldAngle);
	},
	addDialogEvent: function(){
		$('#lottery_btn').on('click',function(){
			$('#dialog').css('display','block');
		});
	}

};

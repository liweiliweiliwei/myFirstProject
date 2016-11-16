/****************
*提交的内容
****************/
function Sendadd(str){
	this.btn = $('#ad_submitbtn');
	this.name = $('#ad_name');
	this.phone = $('#ad_phone');
	this.address = $('#ad_address');
	this.nameError = $('#ad_setname');
	this.phoneError = $('#ad_setphone');
	this.addressError = $('#ad_setaddress');
	this.dialogStr = str;
	this.status = false; //提交数据成功状态值
}
Sendadd.prototype = {
	init: function(){
		var _this = this;
		_this.btn.on('click',function(){
			console.log(_this.name.val())
			if(!_this.name.val()){
				_this.nameError.css('visibility','visible');
				return
			}else{
				_this.nameError.css('visibility','hidden');
			}
			//手机号码正则校验
			if(!_this.phone.val()||!(/^1[3|4|5|7|8]\d{9}$/.test(_this.phone.val()))){
				console.log('ohone');
				_this.phoneError.css('visibility','visible');
				return
			}else{
				_this.phoneError.css('visibility','hidden');
			}
			if(!_this.address.val()){
				console.log('add');
				_this.addressError.css('visibility','visible');
				return
			}else{
				_this.addressError.css('visibility','hidden');
			}
			//提交数据，并返回是否提交成功的状态值
			var submitData = {

			}
			alert('提交数据');
			/*回调函数*/
			$('#address').css('display','none');
			$('#main').css('display','block');
			//更换dialog内容
			$('#dialog').html(_this.dialogStr);
			//绑定关闭按钮
			$('#dc_rightbtn').on('click',function(){
				$('#dialog').css('display','none');
			});
			$('#dc_goodsclosebtn').on('click',function(){
				$('#dialog').css('display','none');
			});


		});
	}
};
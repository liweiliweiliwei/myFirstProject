/********
* 弹窗显示
* by zyy
********/
/*
$(function(){
	var str='<div id='+'"'+'dialog_overlay'+'"'+'></div><div id='+'"'+'dialog_content'+'"'+'><a id='+'"'+'dc_rightbtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><img data-src='+'"'+'img/close_btn.png'+'"'+' /><div id='+'"'+'dc_error'+'"'+'><img data-src='+'"'+'img/cry.png'+'"'+' /><p>很遗憾，没有中奖</p></div><a id='+'"'+'dc_bottombtn'+'"'+' class='+'"'+'dc_closebtn'+'"'+' href='+'"'+'javascript:void(0)'+'"'+'><span>我知道了</span></a></div>';
	var d = new Dialog(true,str,1000);
	d.init();
});
*/
function Dialog(status,str,delaytime){
	this.status = status; //dialog显示和隐藏,true为显示，flase为隐藏
	this.content = str; //dialog内传入的内容
	this.delayTime = delaytime; //延迟显示的时间
};
Dialog.prototype = {
	init: function(){
		var _this = this;
		if(_this.status){
			//显示内容
			if(_this.delayTime){
				console.log(_this.delayTime);
				setTimeout(function(){
					//显示
					$('#dialog').html(_this.content);
					$('#dialog').css('display','block');
					//绑定关闭按钮
					$('#dc_rightbtn').on('click',function(){

						$('#dialog').css('display','none');
					});
					$('#dc_bottombtn').on('click',function(){
						$('#dialog').css('display','none');
					});
				},_this.delayTime);
			}else{
				$('#dialog').html(_this.content);
				$('#dialog').css('display','block');
				//绑定关闭按钮
				$('#dc_rightbtn').on('click',function(){

					$('#dialog').css('display','none');
				});
				$('#dc_bottombtn').on('click',function(){
					$('#dialog').css('display','none');
				});
			}
		}else{
			//隐藏内容
			$('#dialog').css('display','none');
		}
	}
};
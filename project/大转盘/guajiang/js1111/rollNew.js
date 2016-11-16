/********
* 字幕滚动js
* by zyy
********/
$(function(){
	var r = new Roll();
	r.init();
});
function Roll(){
	this.roll = document.querySelector('#roll');
	this.express = document.querySelector('#express');
	this.rLi = document.querySelectorAll('#roll li');
	this.rollCopy = document.querySelector('#rollcopy');
	this.actualHeight = this.express.offsetHeight;
}
Roll.prototype = {
	init: function(){
		var _this = this;
		_this.setRollCopy();
		var timer = setInterval(_this.scrollUp,50);
		//ontouchstart
		_this.roll.onmouseover = function(){
			clearInterval(timer);
		}
		//ontouchmove
		_this.roll.onmouseout = function(){
			timer = setInterval(_this.scrollUp,50);
		}
	},
	scrollUp: function(a){
		var h = document.querySelector('#rollcopy').offsetHeight;
		if(this.roll.scrollTop>=h){
			this.roll.scrollTop =0;
		}else{
			this.roll.scrollTop++;
		}
	},
	setRollCopy: function(){
		this.rollCopy.innerHTML = this.roll.innerHTML;
	}	
};

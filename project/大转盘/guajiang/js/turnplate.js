/**
 * 2016-7-19 zyy
 * v1.0
 * 功能： 大转盘
 * 说明： 纯随机，没有控制中奖概率，这里需要前后端配合的逻辑，包括奖品的库存等。
 *        转盘指针起始的指向可以通过直接写css样式设置
 * 原理： 1、使用canvas绘制大转盘图形，draw()函数的主要功能
 *        2、利用transform中的rotate，给canvas一个旋转的角度，再利用transition中的ease，让旋转过程由慢速开始，然后加快，最后速度放慢的方式运行
 *        3、点击抽奖按钮，旋转转盘，给出一个随机角度，最后停止。
 *
 * 转盘类 Turnplate
 * 属性： 
 *       canvas            画布
 *       btn               点击抽奖按钮
 *       num               中奖区域的数量
 * 方法：
 *       draw              绘制转盘
 *       lottery           抽奖     
 *              
 */
 $(function(){
 	var t = new Turnplate();
 	t.init();
 });
//创建Turnplate类
function Turnplate(){
	this.canvas = document.getElementById('tp_canvas');
	this.btn = document.getElementById('btn');
	this.num = 8;
	//rem单位
	/*
	this.canvasWidth = 0; //646px
	this.canvasHeight = 0; //646px
	this.outsideRadius = 0; //323px
	this.insideRadius = 0; //300px
	*/
}
Turnplate.prototype = {
	init: function(){
		if(!this.canvas.getContext){
			alert('抱歉浏览器不支持canvas');
			return
		}
		//rem转化为px
		this.toPx();
		//绘图
		this.draw();
		//抽奖
		//this.lottery();
	},
	toPx: function(){
		//得到html的font-size值
		var t = parseInt($('html').css('font-size'));
		this.canvasWidth = Math.floor(8.64*t); //648px
		this.canvasHeight = Math.floor(8.64*t); //648px
		console.log(parseInt(this.canvasWidth));
		//设置canvas的宽和高
		this.canvas.width = this.canvasWidth;
		this.canvas.height = this.canvasHeight;
	},
	draw: function(){
		var _this = this;
		var ctx = _this.canvas.getContext('2d');
		//绘制转盘
		var img = new Image();
		img.onload = function(){
			ctx.drawImage(img,0,0);
		};
		img.src = "./img/turnplate.png";


	},
	lottery: function(){
		//var onOff = true;
		var n,
			i = 1;
		var _this = this;
		this.btn.onclick = function(){
			//changed for the bug ,which pointer cannot point the middle
			n = 1800*i + 270 + Math.floor(_this.num*Math.random())*360/_this.num + Math.floor(180/_this.num);
			console.log(n);
			_this.canvas.style.transform = 'rotate('+n+'deg)';
			//onOff = false;
			i++;
		}
	}
};
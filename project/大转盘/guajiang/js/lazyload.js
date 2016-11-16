/***********************
* img lazy load
* based on jQuery
* v 1.0
* by yingye on 2016/8/17
*
***********************/
$(function(){
    var lazy = new Lazyload();
    lazy.init();
});
function Lazyload(opts){
    /*
    * _src 图片请求路径
    * duration 定时器加载时间
    * container 指定容器内的img，如果没有则表示针对全部页面
    * rangeH 上下范围边界
    * animationName 动画名称
    * showDely 动画执行时间
    * */ 
    this.refreshTimer = null;
    this._src = 'data-src';
    this.duration = 100;
    this.container = '';
    this.rangeH = 200;
	/*
    this.animationName = 'fade';
    this.showDelay = '400ms';
	*/
    }
Lazyload.prototype = {  
    //初始化
    init: function(){
        var _this = this;
        if(_this.refreshTimer){
            clearTimeout(_this.refreshTimer);
            _this.refreshTimer = null;
        }
        _this.refreshTimer = setTimeout(function(){
            _this.loading();
        },10);        
        //滚动结束，屏幕静止300ms(_this.duration)，检查哪些出现在可视区中，再加载
        $(window).bind('scroll',function(){
            if(_this.refreshTimer){
                clearTimeout(_this.refreshTimer);
                _this.refreshTimer = null;
            }
            _this.refreshTimer = setTimeout(function(){
                _this.loading();
            },_this.duration);
        });
    },
    //加载图片
    loading: function(){
        var _this = this;
        var list = [];
        var container = document.getElementById(_this.container);
        //性能优化，已加载的图片，移除_this._src属性
        if(container){
            list = $(container).find('img['+_this._src+']');
        }else{
            list = $('img['+_this._src+']');
        }
        list.each(function(i){
            var img = list.eq(i);
            if(_this.inViewport(img)){
                _this.changeSrc(img);
            }
        });
    },
    //是否出现在可视区
    inViewport: function(element){
        return this.isUp(element) && this.isDown(element);
    },
    //是否在可视区上方
    isUp: function(element){
        return $(window).scrollTop() - this.rangeH <= $(element).offset().top + $(element).height();
    },
    //是否在可视区的下方
    isDown: function(element){
        return $(element).offset().top <= $(window).scrollTop() + $(window).height() + this.rangeH;
    },
    changeSrc: function(img){
        var _this = this;
        var src = img.attr(''+_this._src+'');
        img.attr('src',src).removeAttr(''+_this._src+'');
        //是否需要加入已加载成功的标记?
    }
};
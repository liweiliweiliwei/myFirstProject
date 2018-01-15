$(function() {
    div1("div1");
    var f = false;
    function div1(id){
        mychart = echarts.init(document.getElementById(id));
        var series = [];
        series.push(
            {
                name:'今年',
                type:'bar',
                // barWidth: .3 * rem,
                barGap: 0,
                itemStyle:{
                    normal:{
                        lineStyle:{
                            width:.02 * rem
                        },
                        color: new echarts.graphic.LinearGradient(
                            1, 1, 0, 1,
                            [
                                {offset: 0, color: 'rgba(33, 112, 245, .8)'},
                                {offset: 1, color: 'rgba(33, 112, 245, .8)'}
                            ]
                        )
                    }
                },
                data:[380.41,364.26,328.27,542.11,446.64,297.06,384.26,562.11,466.64,297.06,293.69,370.41]
            },
            {
                name:'预测',
                type:'bar',
                // barWidth: .3 * rem,
                barGap: 0,
                // barCategoryGap: .8 * rem,
                itemStyle:{
                    normal:{
                        lineStyle:{
                            width:.02 * rem
                        },
                        color: new echarts.graphic.LinearGradient(
                            1, 1, 0, 1,
                            [
                                {offset: 0, color: 'rgba(121, 225, 255, .8)'},
                                {offset: 1, color: 'rgba(121, 225, 255, .8)'}
                            ]
                        )
                    }
                },
                data:[220,384.26,328.27,300,496.64,357.06,224.26,462.11,406.64,207.06,293.69,350.41]
            }
        );

        var option = {
            // color: ["#2170f5", "#79e1ff"],
            title: {
                text: ''
            },
            toolbox: {
                show: true,
                top: -.1 * rem,
                feature: {
            		// magicType: {type: ['line', 'bar']},
                    restore: {},
                    myTool1: {
                        show: true,
                        title: '全屏显示',
                        icon: 'image://images/fullscreenS.png',
                        onclick: function (){
                        	if(!f) {
                        		$("#div1").css({"width":$(".container").innerHeight() + "px","height":$(".container").innerWidth() + "px","position":"absolute","top":window.innerHeight,"left":"0","transform-origin":"0 0","transform":"rotate(-90deg)","z-index":"9999"});
                            	this.model.option.icon = "image://images/fullscreen.png";
                            	f = true;
                        	} else {
                        		$("#div1").css({"width":"100%","height":"4.93rem","transform":"","top":"","left":"","position":"","z-index":""});
                            	this.model.option.icon = "image://images/fullscreenS.png";
                            	f = false;
                        	}
                            mychart.resize();
                        }
                    }
                }
            },
            tooltip: {
                    // show: judge,
                    triggerOn: 'click',
                    trigger: 'axis',
                    textStyle:{
                        width: 1 * rem
                    },
                    formatter: function (params) {
                        if(params[0].name.length >2 ) {
                            var newMonth = params[0].name.substring(params[0].name.length - 5,0);
                            var newYear = params[0].name.substring(params[0].name.length,5);
                            var res = '<h5 class="tooltip_title">' + newYear + " " + newMonth + '</h5>';
                        } else {
                            var res = '<h5 class="tooltip_title">' + params[0].name + '月</h5>';
                        }

                        for(var i = 0; i < params.length; i++) {
                            if(params[i].value != '-') {
                                res += '<div class="tooltip_item"><span class="tooltip_icon" style="background: ' + params[i].color + '"></span>' + '<span class="tooltip_value">'+ params[i].seriesName + ': ' + params[i].value + '万元</span></div>';
                            }
                        }
                        return res
                    },
                    position: function (pos, params, el, elRect, size) {
                        var obj = {
                            top: 60
                        };
                        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                        return obj;
                    }
                },
            legend: {
                x: 'left',
                align: "right",
                padding:[0, 0, 0, .3 * rem],
                data: [
                    {
                        name: '今年',
                        textStyle: {
                            color: "#333",
                            fontSize: .28 * rem
                        }
                    },
                    {
                        name: '预测',
                        textStyle: {
                            color: "#333",
                            fontSize: .28 * rem
                        }
                    }
                ]
            },
            grid: {
                top: 1.1*rem,
                left: 0*rem,
                right: 0*rem,
                bottom: .6*rem
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                name: '月',
                data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
                axisLabel: {
                    margin: .1*rem,
                    textStyle: {
                        color: '#999',
                        fontSize: .24*rem
                    },
                    interval: 0
                },
                axisTick: {
                    show: false,
                    interval: 0
                },
                axisLine:{
                    show: true,
                    lineStyle: {
                        color: '#e5e5e5',
                        width: .02 * rem
                    }
                }
            },
            yAxis: [{
                type: 'value',
                name: '万元',
                nameGap: .4*rem,
                nameLocation: 'end',
                nameTextStyle: {
                    color: '#666',
                    fontSize: .24*rem,
                    padding:[0, 0, 0, 1.1*rem]
                },
                axisLabel: {
                    formatter: '{value}\n',
                    inside: true,
                    margin: .16*rem,
                    textStyle: {
                        color: '#999',
                        fontSize: .24*rem,
                        align: "left",
                    },
                    interval: 0
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#999'
                    }
                },
                axisTick: {
                    show: false,
                    interval: 0
                },
                splitLine: {
                    lineStyle: {
                        color:  ['#e5e5e5']
                    }
                }
            },
            {
                name: '2017年',
                nameGap: .2*rem,
                nameLocation: 'start',
                nameTextStyle: {
                    color: '#2170f5',
                    fontSize: .24*rem,
                    padding:[0, 2.5*rem, 0, 1.1*rem]
                },
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false,
                }
            }],
            dataZoom: [
                {
                    type: 'inside',
                    startValue: 0,
                    endValue: 5,
                    zoomLock: true,
                    textStyle: {
                        color: '#8392A5'
                    },
                    handleSize: '80%',
                    dataBackground: {
                        areaStyle: {
                            color: '#8392A5'
                        },
                        lineStyle: {
                            opacity: 0.8,
                            color: '#8392A5'
                        }
                    },
                    handleStyle: {
                        color: '#f0f',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }
            ],
            series: series
        };
        mychart.setOption(option);
    }
})
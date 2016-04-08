
;var myChart = echarts.init(document.getElementById('main'));
myChart.setOption({
//    tooltip: {
//        trigger: 'item',
//        formatter: "{a} <br/>{b}: {c} ({d}%)"
//    },
    legend:{
        data:[
            {
                name: '直达',
                icon: 'circle'
            }
        ]
    },
    color:['#71deff','#30c9fd','#00b3ff','#0095ff','#0080ff','#006cd6','#5e65b5','#666ec4','#6e77d4','#7781e6'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'left'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '10',
                        fontWeight: 'normal'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },

            data:[335,310,234,135,1548,148,157,870,123,670]
        }
    ]
});

//var n1=aaa[1]/n *100;
//alert(n1.toFixed(2)+'%');
$(document).ready(function(){
    var aaa=[335,310,234,135,1548,148,157,870,123,670];
    var n=0;
    for(var i=0;i<aaa.length;i++){
        n+=parseInt(aaa[i]);
    }

    for(var j=0;j<aaa.length;j++){
        $(".di"+j).html(GetPercent(aaa[j],n));
        $(".da"+j).html(aaa[j]);
    }
});

///计算两个整数的百分比值
function GetPercent(num, total) {
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
        return "-";
    }
    return total <= 0 ? "0%" : ((Math.round(num / total * 10000) / 100.00).toFixed(1) + "%");
}

var quxianChart = echarts.init(document.getElementById('main1'));
quxianChart.setOption({
//    title: {
//        text: '某楼盘销售情况',
//        subtext: '纯属虚构'
//    },
    tooltip: {
        trigger: 'axis'
    },
//    legend: {
//        data:['意向','预购','成交']
//    },
//    toolbox: {
//        show: true,
//        feature: {
//            magicType: {show: true, type: ['stack', 'tiled']},
//            saveAsImage: {show: true}
//        }
//    },
    xAxis: {
        splitLine:false,
        type: 'category',
        boundaryGap: false,
        axisLine:{
            lineStyle:{
                color:'#ccc'
            }
        },
        axisTick:{
            lineStyle:{
                color:'#ccc'
            }
        },
        axisLabel:{
            textStyle:{
                color:'#ccc'
            }
        },
        data: ['2014','2024','2034']
    },
    yAxis: {
        splitLine:false,
        axisLine:false,
        axisTick:false,
        type: 'value',
        position:'right',
        interval:50,
        splitNumber:7,
        axisLabel:{
            textStyle:{
                color:'#ccc'
            }
        }
    },
    series: [



        {
            name: '增值',
            type: 'line',
            smooth: true,
            symbolSize :5,
            showSymbol:false,
            areaStyle: {normal: {
                color: '#edeef8'
            }},
            itemStyle:{
                normal: {
                    color:'#edeef8',
                    borderColor:'#edeef8',
                    borderWidth:2,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 2,
                    lineStyle:{
                        color:'#edeef8',
                        width:'3'
                    }
                }
            },
            data: [0, 150,350]
        },
        {
            name: '增值',
            type: 'line',
            smooth: true,
            symbolSize :5,
            showSymbol:false,
            areaStyle: {normal: {
                color: '#e1e3f6'
            }},
            itemStyle:{
                normal: {
                    color:'#e1e3f6',
                    borderColor:'#e1e3f6',
                    borderWidth:2,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 2,
                    lineStyle:{
                        color:'#e1e3f6',
                        width:'3'
                    }
                }
            },
            data: [0, 100,250]
        },
        {
            name: '增值',
            type: 'line',
            smooth: true,
            symbolSize :5,
            showSymbol:false,
            areaStyle: {
                normal: {
                    color: '#e1e3f6'
                }},
            itemStyle:{
                normal:{
                    color:'#e25291',
                    borderColor:'#e25291',
                    borderWidth:2,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 2,
                    lineStyle:{
                        color:'#e25291',
                        width:'3'
                    }
                }

            },
            data: [0,50, 150]
        },
        {
            name: '增值',
            type: 'line',
            smooth: true,
            symbolSize :5,
            showSymbol:false,
            itemStyle:{
                normal:{
                    color:'#1ba6f9',
                    borderColor:'#1ba6f9',
                    borderWidth:2,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 2,
                    lineStyle:{
                        color:'#1ba6f9',
                        width:'3'
                    }
                }

            },
            areaStyle: {normal: {color: '#edeef8'}},
            data: [0, 20, 80]
        }
    ]

});

$('.invest-nav1').click(function(){

    $('.invest-nav1').addClass('active');
    $('.invest-list1').css('display','block');
    $('.invest-nav2').removeClass('active');
    $('.invest-list2').css('display','none');
});
$('.invest-nav2').click(function(){
    $('.invest-nav2').addClass('active');
    $('.invest-list2').css('display','block');
    $('.invest-nav1').removeClass('active');
    $('.invest-list1').css('display','none');
});


$(function(){
    $('.single-slider').jRange({
        from: 0,
        to: 40,
        step: 1,
        scale: [0,10,20,30,40],
        format: '%s',
        width: 600,
        showLabels: true,
        showScale: true
    });
    $('.range-slider').jRange({
        from: -25,
        to: 25,
        step: 1,
        scale: [-25,-20,-15,-10,-5,0,5,10,15,20,25],
        format: '%s',
        width: 600,
        //showLabels: true,
        isRange : true
    });


    $(".pointer,.clickable-dummy,.high,.last-active").click(function(){
        var aa = $(".single-slider").val();
        var bb = $(".range-slider").val();
        var cc=bb.substring(0,bb.indexOf(","));
        var dd=bb.substring(bb.indexOf(",")+1,bb.length);
        var ee=dd-cc;
        var ff=$(".initnum").val();
//            alert(ff);
//            alert(aa);
//            alert(bb);
//            alert(cc);
//            alert(dd);
//            alert(ee);
        $('.risk-num').html(cc+'%~'+dd+'%');
        $('.risk-year').html(aa+'年');
        var myChart = echarts.init(document.getElementById('main'));
        var arraytest1= [aa*1+ee,aa*2+ee,aa*3+ee,aa*4+ee,aa*5+ee,aa*6+ee,aa*7+ee,aa*8+ee,aa*9+ee,aa*10+ee];

        var n=0;
        for(var i=0;i<arraytest1.length;i++){
            n+=parseInt(arraytest1[i]);
        }

        for(var j=0;j<arraytest1.length;j++){
            $(".di"+j).html(GetPercent(arraytest1[j],n));
            $(".da"+j).html(arraytest1[j]);
        }



        myChart.setOption({
//                tooltip: {
//                    trigger: 'item',
//                    formatter: "{a} <br/>{b}: {c} ({d}%)"
//                },
            color:['#71deff','#30c9fd','#00b3ff','#0095ff','#0080ff','#006cd6','#5e65b5','#666ec4','#6e77d4','#7781e6'],
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'left'
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                fontSize: '10',
                                fontWeight: 'normal'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },

                    data:arraytest1
                }
            ]
        });
        var quxianChart = echarts.init(document.getElementById('main1'));
        var arraytest2= [aa*1+ee/10,aa*2+ee/10,aa*3+ee/10];
        quxianChart.setOption({
            tooltip: {
                trigger: 'axis'
            },
//    legend: {
//        data:['意向','预购','成交']
//    },
//    toolbox: {
//        show: true,
//        feature: {
//            magicType: {show: true, type: ['stack', 'tiled']},
//            saveAsImage: {show: true}
//        }
//    },
            xAxis: {
                splitLine:false,
                type: 'category',
                boundaryGap: false,
                axisLine:{
                    lineStyle:{
                        color:'#ccc'
                    }
                },
                axisTick:{
                    lineStyle:{
                        color:'#ccc'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:'#ccc'
                    }
                },
                data: ['2014','2024','2034']
            },
            yAxis: {
                splitLine:false,
                axisLine:false,
                axisTick:false,
                type: 'value',
                position:'right',
                interval:50,
                splitNumber:7,
                axisLabel:{
                    textStyle:{
                        color:'#ccc'
                    }
                }
            },
            series: [



                {
                    name: '增值',
                    type: 'line',
                    smooth: true,
                    symbolSize :5,
                    showSymbol:false,
                    areaStyle: {normal: {
                        color: '#edeef8'
                    }},
                    itemStyle:{
                        normal: {
                            color:'#edeef8',
                            borderColor:'#edeef8',
                            borderWidth:2,
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowBlur: 2,
                            lineStyle:{
                                color:'#edeef8',
                                width:'3'
                            }
                        }
                    },
                    data: [0, 150,350]
                },
                {
                    name: '增值',
                    type: 'line',
                    smooth: true,
                    symbolSize :5,
                    showSymbol:false,
                    areaStyle: {normal: {
                        color: '#e1e3f6'
                    }},
                    itemStyle:{
                        normal: {
                            color:'#e1e3f6',
                            borderColor:'#e1e3f6',
                            borderWidth:2,
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowBlur: 2,
                            lineStyle:{
                                color:'#e1e3f6',
                                width:'3'
                            }
                        }
                    },
                    data: arraytest2
                },
                {
                    name: '增值',
                    type: 'line',
                    smooth: true,
                    symbolSize :5,
                    showSymbol:false,
                    areaStyle: {
                        normal: {
                            color: '#e1e3f6'
                        }},
                    itemStyle:{
                        normal:{
                            color:'#e25291',
                            borderColor:'#e25291',
                            borderWidth:2,
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowBlur: 2,
                            lineStyle:{
                                color:'#e25291',
                                width:'3'
                            }
                        }

                    },
                    data: [0,50, 150]
                },
                {
                    name: '增值',
                    type: 'line',
                    smooth: true,
                    symbolSize :5,
                    showSymbol:false,
                    itemStyle:{
                        normal:{
                            color:'#1ba6f9',
                            borderColor:'#1ba6f9',
                            borderWidth:2,
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            shadowBlur: 2,
                            lineStyle:{
                                color:'#1ba6f9',
                                width:'3'
                            }
                        }

                    },
                    areaStyle: {normal: {color: '#edeef8'}},
                    data: [0, 20, 80]
                }
            ]
        });

    });



});
function range_num(){
    var aa = $(".single-slider").val();
    var bb = $(".range-slider").val();
    var cc=bb.substring(0,bb.indexOf(","));
    var dd=bb.substring(bb.indexOf(",")+1,bb.length);
    var ee=dd-cc;
    var ff=$(".initnum").val();
//            alert(ff);
//            alert(aa);
//            alert(bb);
//            alert(cc);
//            alert(dd);
//            alert(ee);
    $('.risk-num').html(cc+'~'+dd);
    var myChart = echarts.init(document.getElementById('main'));
    var arraytest1= [aa*1+ee,aa*2+ee,aa*3+ee,aa*4+ee,aa*5+ee,aa*6+ee,aa*7+ee,aa*8+ee,aa*9+ee,aa*10+ee];
    var n=0;
    for(var i=0;i<arraytest1.length;i++){
        n+=parseInt(arraytest1[i]);
    }

    for(var j=0;j<arraytest1.length;j++){
        $(".di"+j).html(GetPercent(arraytest1[j],n));
        $(".da"+j).html(arraytest1[j]);
    }
    myChart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:['#71deff','#30c9fd','#00b3ff','#0095ff','#0080ff','#006cd6','#5e65b5','#666ec4','#6e77d4','#7781e6'],
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'left'
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            fontSize: '10',
                            fontWeight: 'normal'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },

                data:arraytest1
            }
        ]
    });
    var quxianChart = echarts.init(document.getElementById('main1'));
    var arraytest2= [aa*1+ee/10,aa*2+ee/10,aa*3+ee/10];
    quxianChart.setOption({
        tooltip: {
            trigger: 'axis'
        },
//    legend: {
//        data:['意向','预购','成交']
//    },
//    toolbox: {
//        show: true,
//        feature: {
//            magicType: {show: true, type: ['stack', 'tiled']},
//            saveAsImage: {show: true}
//        }
//    },
        xAxis: {
            splitLine:false,
            type: 'category',
            boundaryGap: false,
            axisLine:{
                lineStyle:{
                    color:'#ccc'
                }
            },
            axisTick:{
                lineStyle:{
                    color:'#ccc'
                }
            },
            axisLabel:{
                textStyle:{
                    color:'#ccc'
                }
            },
            data: ['2014','2024','2034']
        },
        yAxis: {
            splitLine:false,
            axisLine:false,
            axisTick:false,
            type: 'value',
            position:'right',
            interval:50,
            splitNumber:7,
            axisLabel:{
                textStyle:{
                    color:'#ccc'
                }
            }
        },
        series: [



            {
                name: '增值',
                type: 'line',
                smooth: true,
                symbolSize :5,
                showSymbol:false,
                areaStyle: {normal: {
                    color: '#edeef8'
                }},
                itemStyle:{
                    normal: {
                        color:'#edeef8',
                        borderColor:'#edeef8',
                        borderWidth:2,
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 2,
                        lineStyle:{
                            color:'#edeef8',
                            width:'3'
                        }
                    }
                },
                data: [0, 150,350]
            },
            {
                name: '增值',
                type: 'line',
                smooth: true,
                symbolSize :5,
                showSymbol:false,
                areaStyle: {normal: {
                    color: '#e1e3f6'
                }},
                itemStyle:{
                    normal: {
                        color:'#e1e3f6',
                        borderColor:'#e1e3f6',
                        borderWidth:2,
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 2,
                        lineStyle:{
                            color:'#e1e3f6',
                            width:'3'
                        }
                    }
                },
                data: arraytest2
            },
            {
                name: '增值',
                type: 'line',
                smooth: true,
                symbolSize :5,
                showSymbol:false,
                areaStyle: {
                    normal: {
                        color: '#e1e3f6'
                    }},
                itemStyle:{
                    normal:{
                        color:'#e25291',
                        borderColor:'#e25291',
                        borderWidth:2,
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 2,
                        lineStyle:{
                            color:'#e25291',
                            width:'3'
                        }
                    }

                },
                data: [0,50, 150]
            },
            {
                name: '增值',
                type: 'line',
                smooth: true,
                symbolSize :5,
                showSymbol:false,
                itemStyle:{
                    normal:{
                        color:'#1ba6f9',
                        borderColor:'#1ba6f9',
                        borderWidth:2,
                        shadowColor: 'rgba(0, 0, 0, 0.2)',
                        shadowBlur: 2,
                        lineStyle:{
                            color:'#1ba6f9',
                            width:'3'
                        }
                    }

                },
                areaStyle: {normal: {color: '#edeef8'}},
                data: [0, 20, 80]
            }
        ]
    });
};
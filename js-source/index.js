/**
 * Created by Jasko on 3/30/16.
 */
$(document).ready(function(){
    $("#num").on("blur",function(){
        var year = $("#num").val();
        console.log(year);
        drawWorldMap(year);
    });

    function drawWorldMap(y){
        var worldMap = echarts.init(document.getElementById('world-map'));
        if(y==2010){
            var data = [
                {name: '美国', value: -1.52},
                {name: '瑞士', value: -12.4},
                {name: '日本', value: -12.03},
                {name: '丹麦', value: 7.40},
                {name: '芬兰', value: -11.65},
                {name: '奥地利', value:-9.26 },
                {name: '英国', value: -8.91},
                {name: '澳大利亚', value: -9.73},
                {name: '法国', value: -10.33},
                {name: '德国', value: -17.40},
                {name: '西班牙', value: -17.61},
                {name: '瑞典', value: -14.82},
                {name: '中国香港', value: -15.21},
                {name: '加拿大', value: -8.21},
                {name: '意大利', value: -16.40},
                {name: '新西兰', value:10.27 },
                {name: '越南', value: -1.51},
                {name: '中国台湾', value: -10.39},
                {name: '韩国', value: -2.85},
                {name: '墨西哥', value: 1.67},
                {name: '印度', value: -16.21},
                {name: '马来西亚', value: -4.78},
                {name: '沙特', value: -34.43},
                {name: '波兰', value: -10.54},
                {name: '泰国', value:-9.61 },
                {name: '土耳其', value:3.57 },
                {name: '巴西', value: 2.15},
                {name: '南非', value: -0.11},
                {name: '印尼', value: 0.35},
                {name: '智利', value: -16.68},
                {name: '中国', value: -16.68},
                {name: '哥伦比亚', value: -16.68},
                {name: '秘鲁', value: -16.68},
                {name: '希腊', value: -16.68},
                {name: '阿根廷', value: -16.68},
                {name: '俄罗斯', value: -16.68}
            ];
        }
        if(y==2011){
            var data = [
                {name: '美国', value: -11.52},
                {name: '瑞士', value: -2.4},
                {name: '日本', value: -32.03},
                {name: '丹麦', value: 27.40},
                {name: '芬兰', value: 21.65},
                {name: '奥地利', value:18.26 },
                {name: '英国', value: 28.91},
                {name: '澳大利亚', value: 39.73},
                {name: '法国', value: 20.33},
                {name: '德国', value: -12.40},
                {name: '西班牙', value: 20.61},
                {name: '瑞典', value: 5.82},
                {name: '中国香港', value: 18.21},
                {name: '加拿大', value: -28.21},
                {name: '意大利', value: -36.40},
                {name: '新西兰', value:30.27 },
                {name: '越南', value: -31.51},
                {name: '中国台湾', value: -20.39},
                {name: '韩国', value: 18.85},
                {name: '墨西哥', value: 1.67},
                {name: '印度', value: -23.21},
                {name: '马来西亚', value: -4.78},
                {name: '沙特', value: -14.43},
                {name: '波兰', value: 20.54},
                {name: '泰国', value:-9.61 },
                {name: '土耳其', value:3.57 },
                {name: '巴西', value: 2.15},
                {name: '南非', value: -20.11},
                {name: '印尼', value: 30.35},
                {name: '智利', value: -16.68},
                {name: '中国', value: -36.68},
                {name: '哥伦比亚', value: -16.68},
                {name: '秘鲁', value: -26.68},
                {name: '希腊', value: -26.68},
                {name: '阿根廷', value: -16.68},
                {name: '俄罗斯', value: 36.68}
            ];
        }

        var geoCoordMap = {
            '美国':[-90.2, 40.28],
            '瑞士':[8.6,46.8],
            '日本':[140.15,36.89],
            '丹麦':[10,55.89],
            '芬兰':[26.6,63.89],
            '奥地利':[15.6,48.89],
            '英国':[-1.6,52.89],
            '澳大利亚':[140.6,-22.89],
            '法国':[2.6,46.8],
            '德国':[10.6,50.8],
            '西班牙':[-3.6,39.8],
            '瑞典':[15.15,61.89],
            '中国香港':[114.07,22.62],
            '加拿大':[-78.2, 47.28],
            '意大利':[12.6,42.8],
            '新西兰':[172.6,-42.89],
            '越南':[105.07,21.62],
            '中国台湾':[120.98,23.93],
            '韩国':[127.46,36.52],
            '墨西哥':[-102.2, 23.28],
            '印度': [79.46,20.52],
            '马来西亚':[102.16,4.22],
            '沙特':[45.16,23.22],
            '波兰':[11.16,51.22],
            '泰国':[102.16,15.31],
            '土耳其':[37.37,38.64],
            '巴西':[-47.37,-12.32],
            '南非':[24.37,-30.32],
            '印尼':[113.16,-1.2],
            '智利':[-70.37,-32.48],
            '中国':[116.46,39.92],
            '哥伦比亚':[-73.29,3.48],
            '秘鲁':[-74.29,-10.25],
            '希腊':[21.96,38.8],
            '阿根廷':[-64.37,-35.48],
            '俄罗斯':[44.37,55.39],

        };

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        option = {
            backgroundColor: '#0F1521',
            title: {
                text: '',
                subtext: '',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ' : ' + params.value[2]+'%';
                }
            },

            dataRange: {
                show: false,
                min: -30,
                max: 30,
                calculable: true,
                color: ['rgba(183, 74, 241, 0.6)','rgba(96, 98, 236, 0.6)','rgba(56, 182, 103, 0.6)'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'world',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#2A2F39',
                        borderColor: '#2A2F39'
                    },
                    emphasis: {
                        areaColor: '#424f69'
                    }
                }
            },
            series : [
                {
                    name: 'pm2.5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function(val){
                        if(val[2]/3<=5){
                            return 5;
                        }else {
                            return val[2]/2;
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'center',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal:{
                            borderWidth:10
                        }
                    }
                },

            ]
        };
        worldMap.setOption(option);


    }
    drawWorldMap(2011);



    //选择年份
    var yearSelect = $("#year"),
        yearLi = $(".year-list>li");
    function changeYear(){
        $(this).addClass("year-selected").siblings().removeClass("year-selected");
        console.log(1);

    }
    yearLi.on('click',function(){
        $(this).addClass("year-selected").siblings().removeClass("year-selected");
        yearSelect.val($(this).html())
        drawWorldMap($(this).html());
    })

    yearSelect.on('input',function(){
        var y = $(this).val();
        yearLi.each(function(){
            if($(this).html() == y){
                $(this).addClass("year-selected").siblings().removeClass("year-selected");
            }
        })
        drawWorldMap(y);
    })

})
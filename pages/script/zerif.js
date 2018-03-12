/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
    // will first fade out the loading animation
    jQuery(".status").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery(".preloader").delay(10).fadeOut("slow");
})


/* =================================
===  Bootstrap Fix              ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}


/*---------------------------------------*/
/*  SMOOTH SCROLL FRO INTERNAL #HASH LINKS
/*---------------------------------------*/
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': ($target.offset()) ? $target.offset().top : 0
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});


/*---------------------------------------*/
/*  Testimonials
/*---------------------------------------*/
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.testimonials-container').backstretch("./frontend/pages/img/backgrounds/factory.jpg");

    $('a[data-toggle="tab"]').on('shown.bs.tab', function() {
        $('.testimonials-container').backstretch("resize");
    });

});


/*=================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function(event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function() {
        window.location.hash = target;
    });
});


/* =================================
===  CONTACT FORM          ====
=================================== */

$("#contact-form").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "/service/message",
            data: dataString,
            success: function(data) {
                if (eval('(' + data + ')').status == "OK") {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                } else {
                    $('.error').fadeIn(1000);
                    $('.success').fadeOut(500);
                }
            }
        });
    } else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }

    return false;
});


/* ================================
===  PROJECT LOADING           ====
================================= */

jQuery(document).ready(function($) {
    $('.more').on('click', function(event) {
        event.preventDefault();

        var href = $(this).attr('href') + ' .single-project',
            portfolioList = $('#portfolio-list'),
            content = $('#loaded-content');

        portfolioList.animate({
            'marginLeft': '-120%'
        }, {
            duration: 400,
            queue: false
        });
        portfolioList.fadeOut(400);
        setTimeout(function() {
            $('#loader').show();
        }, 400);
        setTimeout(function() {
            content.load(href, function() {
                $('#loaded-content meta').remove();
                $('#loader').hide();
                content.fadeIn(600);
                $('#back-button').fadeIn(600);
            });
        }, 800);

    });

    $('#back-button').on('click', function(event) {
        event.preventDefault();

        var portfolioList = $('#portfolio-list')
        content = $('#loaded-content');

        content.fadeOut(400);
        $('#back-button').fadeOut(400);
        setTimeout(function() {
            portfolioList.animate({
                'marginLeft': '0'
            }, {
                duration: 400,
                queue: false
            });
            portfolioList.fadeIn(600);
        }, 800);
    });
});

/* ================================
===  PARALLAX                  ====
================================= */
$(document).ready(function() {
    var $window = $(window);
    $('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function() {
        var $bgobj = $(this);
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });
});



/* =================================
===  WOW ANIMATION             ====
=================================== */

new WOW().init();


/* ================================
===  ECHART           ====
================================= */
$(document).ready(function() {
    // 基于准备好的dom，初始化echarts实例
    var worldMapContainer1 = $('#chart-01')[0];
    var resizeWorldMapContainer1 = function() {
        worldMapContainer1.style.height = $('#chart-01').width() + 'px';
    };
    resizeWorldMapContainer1();
    var myChart1 = echarts.init(worldMapContainer1);
    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            show: false,
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['', '', '', '', '', '', '', '', '']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: false
        },
        xAxis: [{
            type: 'category',
            data: ['', '', '', '', '', '', '']
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                show: false
            }
        }],
        series: [{
            name: '',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
        }, {
            name: '',
            type: 'bar',
            stack: '',
            data: [120, 132, 101, 134, 90, 230, 210]
        }, {
            name: '',
            type: 'bar',
            stack: '',
            data: [220, 182, 191, 234, 290, 330, 310]
        }, {
            name: '',
            type: 'bar',
            stack: '',
            data: [150, 232, 201, 154, 190, 330, 410]
        }, {
            name: '',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data: [
                    [{
                        type: 'min'
                    }, {
                        type: 'max'
                    }]
                ]
            }
        }, {
            name: '',
            type: 'bar',
            barWidth: 5,
            stack: '',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        }, {
            name: '',
            type: 'bar',
            stack: '',
            data: [120, 132, 101, 134, 290, 230, 220]
        }, {
            name: '',
            type: 'bar',
            stack: '',
            data: [60, 72, 71, 74, 190, 130, 110]
        }, {
            name: '',
            type: 'bar',
            stack: '',
            data: [62, 82, 91, 84, 109, 110, 120]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);
    //用于使chart自适应高度和宽度
    window.onresize = function() {
        //重置容器高宽
        resizeWorldMapContainer1();
        myChart1.resize();
    };
});

$(document).ready(function() {
    // 基于准备好的dom，初始化echarts实例
    var worldMapContainer = $('#chart-02')[0];
    var resizeWorldMapContainer = function() {
        worldMapContainer.style.height = $('#chart-02').width() + 'px';
    };
    resizeWorldMapContainer();
    var myChart = echarts.init(worldMapContainer);
    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['', '', '', '', '', '', '', '', '', '']
        },
        series: [{
            name: '',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 335,
                name: '',
                selected: true
            }, {
                value: 679,
                name: ''
            }, {
                value: 1548,
                name: ''
            }]
        }, {
            name: '',
            type: 'pie',
            radius: ['40%', '55%'],

            data: [{
                value: 335,
                name: ''
            }, {
                value: 310,
                name: ''
            }, {
                value: 234,
                name: ''
            }, {
                value: 135,
                name: ''
            }, {
                value: 1048,
                name: ''
            }, {
                value: 251,
                name: ''
            }, {
                value: 147,
                name: ''
            }, {
                value: 102,
                name: ''
            }]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //用于使chart自适应高度和宽度
    window.onresize = function() {
        //重置容器高宽
        resizeWorldMapContainer();
        myChart.resize();
    };
});

$(document).ready(function() {
    // 基于准备好的dom，初始化echarts实例
    var worldMapContainer = $('#chart-03')[0];
    var resizeWorldMapContainer = function() {
        worldMapContainer.style.height = $('#chart-03').width() * 0.7 + 'px';
    };
    resizeWorldMapContainer();
    var myChart = echarts.init(worldMapContainer);
    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            showDelay: 0,
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            },
            zlevel: 1
        },
        legend: {
            data: ['', '']
        },
        xAxis: [{
            type: 'value',
            scale: true,
            axisLabel: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            scale: true,
            axisLabel: {
                show: false
            }
        }],
        series: [{
            name: '',
            type: 'scatter',
            large: true,
            symbolSize: 3,
            data: (function() {
                var d = [];
                var len = 10000;
                var x = 0;
                while (len--) {
                    x = (Math.random() * 10).toFixed(3) - 0;
                    d.push([
                        x,
                        //Math.random() * 10
                        (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
                    ]);
                }
                //console.log(d)
                return d;
            })()
        }, {
            name: '',
            type: 'scatter',
            large: true,
            symbolSize: 2,
            data: (function() {
                var d = [];
                var len = 20000;
                var x = 0;
                while (len--) {
                    x = (Math.random() * 10).toFixed(3) - 0;
                    d.push([
                        x,
                        //Math.random() * 10
                        (Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
                    ]);
                }
                //console.log(d)
                return d;
            })()
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //用于使chart自适应高度和宽度
    window.onresize = function() {
        //重置容器高宽
        resizeWorldMapContainer();
        myChart.resize();
    };
});
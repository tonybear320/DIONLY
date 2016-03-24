var t1 = new TimelineLite();
var t1Interval = 0.8
//t1.from('#s1-round', 1.9, {rotation: -180, ease: null}, 'layer-=0.5');
t1.from('#person' , t1Interval, {top: '-=100', opacity:0, ease:Cubic.easeOut}, 't1');
t1.from('#download-wrap', t1Interval, {bottom: '-=30', opacity:0}, 't1');
t1.from('#sun', t1Interval, {top: '+=30'}, 't1');
t1.from('#m1', t1Interval, {top: '+=30'}, 't1');

//t1.play();
var t2 = new TimelineLite({
    onStart: function(){
        $('#light').css('opacity', 0);
    }
});
t2.from('#info2', 0.7, {opacity: 0, top: '-=100'}, 't2');
t2.from('#text2 .title', 0.7, { left: 100, opacity:0}, 't2');
t2.from('#text2 .intro', 0.7, { left: 100, opacity:0}, 't2+=0.3');
t2.pause();
//t2.play();

var t3 = new TimelineLite();
var cInterval = 0.8;
var bInterval = 1;
t3.from('#info3', 0.7, {opacity: 0, top: '-=100'}, 't3');
t3.from('#text3 .title', 0.7, { left: 100, opacity:0}, 't3');
t3.from('#text3 .intro', 0.7, { left: 100, opacity:0}, 't3+=0.3');
t3.pause();

var t4 = new TimelineLite();
t4.from('#info4', 0.7, {opacity: 0, top: '-=100'}, 't4');
t4.from('#text4 .title', 0.7, { left: 100, opacity:0}, 't4');
t4.from('#text4 .intro', 0.7, { left: 100, opacity:0}, 't4+=0.3');
t4.pause();


for (var i = 0; i < 6; i++) {
    TweenMax.to('#fan' + i, 1, {rotation: parseInt(360 * Math.random())});
}

setTimeout(function () {
    TweenMax.to('.fan', 10, {
        rotation: '+=360',
        repeat: -1,
        ease: Linear.easeNone
    });
}, 100);


var GetQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return encodeURIComponent(r[2]); return null;
}

$(function () {
    var adtag = GetQueryString('ADTAG');
    if(adtag == 'media.buy.baidu.guanjia11SEM'){
        $('#download1,#download2,#download3').attr('href', 'http://dlied6.qq.com/invc/xfspeed/qqpcmgr/download/QQPCDownload1380.exe');
    }

    $('[data-stats]').click(function () {
        var tag = $(this).attr('data-stats');
        setTimeout(function () {
            pgvSendClick({hottag: "pcmgr.v11." + tag});
        }, 0);
    });

    //观看视频
    $('#showVideo').click(function (e) {
        e.preventDefault();
        var iframe = $('#myiframe');
        var iframe_src = iframe.attr('src');
        var reg = new RegExp("(^|&)auto=([^&]*)(&|$)","i");
        var video_statu = parseInt(iframe_src.match(reg)[2]);
        if(video_statu){//暂停
            iframe.attr('src',iframe_src.replace('&auto=1','&auto=0'));
        }
        iframe.attr('src',iframe_src.replace('&auto=0','&auto=1'));//重新开始
        $('#videoIframe,.mask').css('display','block');
    });
    $('#close').click(function (e) {
        e.preventDefault();
        $('#videoIframe,.mask').css('display','none'); 
        var iframe = $('#myiframe');
        var iframe_src = iframe.attr('src');
        var reg = new RegExp("(^|&)auto=([^&]*)(&|$)","i");
        var video_statu = parseInt(iframe_src.match(reg)[2]);
        if(video_statu){//停掉
            iframe.attr('src',iframe_src.replace('&auto=1','&auto=0'));
        }
    });

    //视频关闭按钮
    $('#close').hover(function() {
        $(this).removeClass('hoverin hoverout');
        $(this).addClass('hoverin');
    }, function() {
        $(this).removeClass('hoverin hoverout');
       $(this).addClass('hoverout');
    });

    var winHeight;

    resize();

    t5 = new TimelineLite();
    t5.from('#logo', 0.8, {top: '+=50', opacity: 0}, 't5');
    t5.from('#logo-t', 0.8, {top: '+=50', opacity: 0}, 't5+=0.3');
    t5.from('#download2', 0.8, {top: '+=50', opacity: 0}, 't5+=0.6');
    t5.from('#m5', 1, {bottom: '-=30', opacity: 0}, 't5');
    t5.from('#cc1', 1, {left: '+=30', opacity: 0}, 't5');
    t5.from('#cc2', 1, {left: '-=30', opacity: 0}, 't5');
    t5.from('#cc3', 1, {left: '+=30', opacity: 0}, 't5');

    function resize(){
        winHeight = $(window).height();
        $('.section').height($(window).height());
        $('.wrap').css({top: -winHeight * activeIndex});


        var scale = $(window).width() / 1920;
        //if(scale > 1) {
            //$("body").css("transform","matrix("+scale+", 0, 0, "+scale+", 0, 0)");
            $('.mid,#s-winmill .bg1,#yellow').each(function () {
                this.style.cssText = this.style.cssText + '; -webkit-transform: scale(' + scale + ');';
                this.style.cssText = this.style.cssText + '; transform: scale(' + scale + ');';
            });

        if(scale < 1) {
            $('.intro,.download-wrap span').each(function () {
                this.style.cssText = this.style.cssText + '; -webkit-transform: scale(' + 1/scale*0.85 + ');';
                this.style.cssText = this.style.cssText + '; transform: scale(' + 1/scale*0.85 + ');';
            });
        }

        //$('.intro,.title').each(function () {
        //    this.style.cssText = this.style.cssText + '; -webkit-transform: scale(' + 1/scale + '); -webkit-transform-origin:center center;';
        //    this.style.cssText = this.style.cssText + '; transform: scale(' + 1/scale + '); transform-origin:center center;';
        //});

        //}
        //else{
        //    $('.mid,#s-winmill .bg1').each(function () {
        //        this.style.cssText = this.style.cssText + '; -webkit-transform: scale('+ scale +'); -webkit-transform-origin:center center;';
        //        this.style.cssText = this.style.cssText + '; transform: scale('+ scale +'); transform-origin:center center;';
        //    });
            //$("body").css("transform","matrix(1, 0, 0, 1, 0, 0)");
        //}

        var h = $('#s-winmill .bg1').outerHeight()*scale;
        $('#m5').css('bottom', 0.37 * h);
    }

    $(window).resize(resize);

    var activeIndex = 0;
    function moveTo(index) {

        var tIndex = index+1;
        var timeline = window['t' + tIndex];

        if(tIndex == 1 || tIndex == 5) {
            $('.header .left').hide();
        }else{
            $('.header .left').show();
        }

        if(timeline) {
            timeline.seek(0);
            timeline.pause();
        }
        activeIndex = index;
        $('#main_step li').eq(index).addClass('on').siblings().removeClass('on');
        $('.wrap').animate({top: '-' + winHeight * index}, 500, function(){
            if(timeline)timeline.play();
        });
        if(index == 4) {
            $('#main_down').hide();
        }else{
            $('#main_down').show();
        }
    }

    //moveTo(4)

    var ie6=!-[1,]&&!window.XMLHttpRequest;

    if(!ie6) {
        var fireEvent = true;
        var newDelta, oldDelta, eventTimeout;
        newDelta = oldDelta = eventTimeout = null;
        $('body').mousewheel(function(event, delta) {

            if(!fireEvent) return;
            newDelta = delta;
            if(oldDelta!=null&&oldDelta*newDelta>0){ // (1.1) if it's not the first event and directions are the same => prevent possible dublicates for further 50ms:
                fireEvent = false;
                clearTimeout(eventTimeout); // clear previous timeouts. Important!
                eventTimeout = setTimeout(function(){
                    fireEvent = true;

                    if($('.wrap').is(':animated')) {
                        return;
                    }
                    if(delta > 0) {
                        if(activeIndex == 0) return;

                        activeIndex--;
                        //activeIndex = Math.max(activeIndex, 0);
                    }else{
                        if(activeIndex == 4) return;

                        activeIndex++;
                        activeIndex = Math.min(activeIndex, 4);
                    }
                    moveTo(activeIndex);
                }, 300);
            }
            oldDelta = newDelta;
        });

        $('#main_step li').each(function (index) {
            $(this).click(function(){
                activeIndex = index;
                moveTo(index);
            })
        });
    }

});
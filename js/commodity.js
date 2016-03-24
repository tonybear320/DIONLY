//滑动变吸顶菜单
$(window).scroll(function() {
	var _top = $(window).scrollTop();
	if (_top >= 888) {
		$(".rightHead").addClass("fixTop").css({
			marginTop: '0'
		});
	} else {
		$(".rightHead").removeClass("fixTop");
	}
});
//吸顶菜单，楼层效果
$('#productitemhead').click(function(){
	$("html,body").animate({scrollTop : $('#productlist').offset().top });
})
$('#productfuwuhead').click(function(){
	$("html,body").animate({scrollTop : $('#productfuwu').offset().top });
})
$('#productaskshead').click(function(){
	$("html,body").animate({scrollTop : $('#productasks').offset().top });
})
//-----------------放大镜----------------------
$(function() {
	$(".bigbox .sImg").hover(function() {
		$(".bigbox .movebox").css({
			"display": "block"
		})
		$(".bigbox .bImg").css({
			"display": "block"
		})
	}, function() {
		$(".bigbox .movebox").css({
			"display": "none"
		})
		$(".bigbox .bImg").css({
			"display": "none"
		})
	})
	$(".bigbox .sImg").mousemove(function(e) {
		var $x = e.clientX;
		var $y = e.clientY;
		var _top = $(window).scrollTop();
		var $l = $(".bigbox .sImg").offset().left;
		var $t = $(".bigbox .sImg").offset().top;
		var $w = $(".bigbox .movebox").width() / 2;
		var $h = $(".bigbox .movebox").height() / 2;
		var $left = $x - $l - $w;
		var $top = $y - $t - $h + _top ;
		if ($left < 0) {
			$left = 0;
		} else if ($left > $(".bigbox .sImg").width() - $w * 2) {
			$left = $(".bigbox .sImg").width() - $w * 2;
		}
		if ($top < 0) {
			$top = 0;
		} else if ($top > $(".bigbox .sImg").height() - $h * 2) {
			$top = $(".bigbox .sImg").height() - $h * 2;
		}
		$(".bigbox .movebox").css({
			"left": $left,
			"top": $top
		});

		var $moveboxW = $(".bigbox .sImg").width() - $w * 2;
		var $moveboxH = $(".bigbox .sImg").height() - $h * 2;
		var $Bw = $left / $moveboxW;
		var $Bh = $top / $moveboxH;
		//				alert($(".bigbox .bImg").width())
		var $bleft = ($(".bigbox .bImg img").width() - $(".bigbox .bImg").width()) * $Bw;
		var $btop = ($(".bigbox .bImg img").height() - $(".bigbox .bImg").height()) * $Bh;
		$(".bigbox .bImg img").css({
			"left": -$bleft,
			"top": -$btop
		})
	})
})


//添加购物车飞过去的小块
$('#toshopcar').click(function(e){
	var xx = e.pageX + $(window).scrollLeft()
	var yy = e.pageY 
	$('#fly').css({display : 'block',left : xx, top : yy}).stop().animate({top:'0',left: '800px'},500,function(){
		$('#fly').css({display : 'none'})
	})
	$('#sitehead_cartnumber')[0].innerHTML = parseInt( $('#sitehead_cartnumber')[0].innerHTML ) + 1;
})

//点图变路径
var picurl = ['img/small0.jpg','img/small1.jpg','img/small2.jpg']
$('.smallUL > li').click(function(){
	$('.sImg > img')[0].src = picurl[$(this).index()];
	$('.bImg > img')[0].src = picurl[$(this).index()];
})


//切换变价格
var price = [4500,2100,9600]
$('#gsmateria > span').click(function(){
	$(this).addClass('materiaselect').siblings().removeClass('materiaselect');
	$(this).siblings().addClass('materia');
	$('#itemprice')[0].innerHTML = price[$(this).index()];
})









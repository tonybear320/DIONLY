function setCookie(sName, value, iDay) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay);
	document.cookie = sName + '=' + value + ';expires=' + oDate;
}

function getCookie(sName) {
	var arr = document.cookie.split('; ');
	for (var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split('=');
		if (arr2[0] == sName) {
			return arr2[1];
		}
	}
	return '';
}

function removeCookie(sName) {
	setCookie(sName, '11111', -1);
}



//topmenu的划过显示隐藏
$('#topmenu').hover(
	function() {
		$('.submenu').stop().slideDown(200)
		$('#topmenu li').css({
			backgroundPosition: '160px -38px'
		})
	},
	function() {
		$('.submenu').stop().slideUp(200)
		$('#topmenu li').css({
			backgroundPosition: '160px 0'
		})
	}

)





//输入框点击变没

function Inputs(id, val) {
	var Id = document.getElementById(id);
	Id.onfocus = function() {
		if (this.value == val) {
			this.value = "";
		}
	}
	Id.onblur = function() {
		if (this.value == "") {
			this.value = val;
		}
	}
}

Inputs("inputvalue", "请输入型号或者名称")

//右侧固定栏的二维码、返回顶部
$('#rightcode').hover(function() {
		$('#rightcode .Eyj').stop().fadeIn()
	},
	function() {
		$('#rightcode .Eyj').stop().fadeOut()
	})

$('#totop').click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 200)
})

//各个店面
var shoppic = ['img/common/beijing.jpg', 'img/common/shenzhen.jpg', 'img/common/tianjin.jpg', 'img/common/chengdu.jpg', 'img/common/zhejiang.jpg', 'img/common/jiangsu.jpg', 'img/common/fujian.jpg', 'img/common/hainan.jpg', 'img/common/chongqing.jpg', 'img/common/hunan.jpg', 'img/common/hebei.jpg', 'img/common/jiangxi.jpg']


$('#cityareas > div').hover(function() {
	$(this).addClass('select');
	$('#cityshops')[0].src = shoppic[$(this).index()];
	//	console.log($(this).index());
	$('.city > div').eq($(this).index()).removeClass("cityhide").addClass("cityshow").siblings().removeClass("cityshow").addClass("cityhide");


}, function() {
	$(this).removeClass('select');
	//	$('.city > div')[$(this).index()].addClass('cityhide');
})
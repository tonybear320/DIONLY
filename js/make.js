$(window).scroll(function() {
	var _top = $(window).scrollTop();
	if (_top >= 677) {
		$("#lineTalk").addClass("fixTop").css({marginTop:'0'});
	} else {
		$("#lineTalk").removeClass("fixTop");
	}
//	if (_top >= 177) {
//		$(".refer").addClass("fixTop");
//	} else {
//		$(".refer").removeClass("fixTop");
//	}
});



function load() {
	var listWraper = $(".listWraper");
	var wrapItem = $(".wrapItem");
	//设置一个全部变量。（两个作用。1.记录加载次数。2，根据加载次数。下次加载时，取下一阶段的数据。）
	var Num = 0;
	$(window).scroll(function() {
		var scrolltop = $(document).scrollTop();
		var bodyheight = $(document.body).outerHeight(true);
		var h = bodyheight - 1400;
		//		alert(h);
		if (scrolltop + 1400 > bodyheight) {
			//			alert();
			$.ajax({
				type: "get",
				url: "make.txt",
				success: function(msg) {
					if (msg != null) {
						var data = eval(msg);
						//						listWraper.html("");
						console.log(data.length)
							//						$.each(data, function(i) {
							//							
							//							var $dl=$("<dl class='wrapItem'><dt><a href='#'><img src='"+data[i].src+"'/></a><span></span></dt><dd><h3><a href='#'>"+data[i].title+
							//							"</a></h3><p>市场价:<del>"+data[i].price1+
							//							"</del>商城价:<span class='n-price'>"+data[i].price2+
							//							"</span></p></dd></dl>");
							//							listWraper.append($dl);
							//							
							//						});
							// xxx用来 判断总数据的长度。从而控制总加载次数。(因为你一行有三个dl，所以除3)
						var xxx = Math.ceil(data.length / 3);
						//						console.log(xxx+"+"+Num);
						//排除最后一次加载（因为最后一次加载时，无法判断dl的个数。可能是1，可能是2，可能是3）
						if (Num < xxx - 1) {
							for (var i = 0; i < 3; i++) {
								var $dl = $("<dl class='wrapItem'><dt><a href='#'><img src='" + data[i + Num * 3].src + "'/></a><span></span></dt><dd><h3><a href='#'>" + data[i + Num * 3].title +
									"</a></h3><p>市场价:<del>" + data[i + Num * 3].price1 +
									"</del>商城价:<span class='n-price'>" + data[i + Num * 3].price2 +
									"</span></p></dd></dl>");
								listWraper.append($dl);
							}
							Num++;
							//执行最后一次加载
						} else if (Num == xxx - 1) {
							//取余，从而加载所有剩余项。循环的判断条件是n<yyy。
							var yyy = data.length % 3;
							for (var n = 0; n < yyy; n++) {
								var $dl = $("<dl class='wrapItem'><dt><a href='#'><img src='" + data[n + Num * 3].src + "'/></a><span></span></dt><dd><h3><a href='#'>" + data[n + Num * 3].title +
									"</a></h3><p>市场价:<del>" + data[n + Num * 3].price1 +
									"</del>商城价:<span class='n-price'>" + data[n + Num * 3].price2 +
									"</span></p></dd></dl>");
								listWraper.append($dl);
							}
							Num++;
						}
					}
				}
			});
		}
	});

}
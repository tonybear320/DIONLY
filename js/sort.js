//产品定制左边切换
$(function(){
	$(".nodehead span").click(function(){
		$(".nodeitem").hide();
		$(this).removeClass("nodeshow").addClass("nodehide").parent().siblings().children("span").removeClass("nodehide").addClass("nodeshow");
		$(this).parent().next().show();
	});
	//价格排序
	
	var a=true;
	var arr1 = [];
	$(".wrapItem").each(function() {
		arr1.push($(this));		
	});		
	$("#price").click(function(){	
		for (var i = 0; i < arr1.length-1; i++) {
			for (var k = 0; k < arr1.length-1- i;k++){
				if(parseInt(arr1[k].find(".n_price").text().split('￥')[1])>parseInt(arr1[k+1].find(".n_price").text().split('￥')[1])){
					c=arr1[k];
					arr1[k]=arr1[k+1];
					arr1[k+1]=c;
				}
			}
		}
		if (a) {
			a = false;
			numSort1(arr1);
			$(this).css("color","red");
		}else {
			a = true;
			numSort2(arr1);
			$(this).css("color","blue");
		}	
	});
	function numSort1($aa) {
		$(".listWraper").empty();
		for (var i = 0; i < $aa.length; i++) {
			$(".listWraper").append($aa[i]);
		}
	}
	function numSort2($aa) {
		$(".listWraper").empty();
		for (var i = $aa.length; i > 0; i--) {
			$(".listWraper").append($aa[i]);
		}
	}
	
	
	//价格筛选
	/*var arr2 = [];
	$(".interval").find("strong").click(function() {
	var $small = $(".b").val();
	var $big = $(".i").val();
	if ($small == "") {
		$small = 0;
	}
	if ($big == "") {
		$big = 100000;
	}
	$(".img1").find("dl").each(function() {
		if ($(this).find(".n_pri span").text().split('￥')[1] >= $small && $(this).find(".n_pri span").text().split('￥')[1] <= $big) {
			arr2.push($(this));
		}
	})
	$(".img1").empty();
	$(".img1").append(arr2);
	});*/
	
	//点击添加按钮
	$(".selectwrap a").click(function(){
	  	var t=$(this).html();
	  	alert(t);
	  	var ap=$("<span style='background:red;'><a href='#'>t</a><a href='#'>×</a></span>|");
		$("#aa").append(ap);
		$("#selectedlists").show();
		$(this).parent().hide();
	})
})


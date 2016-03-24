//获得焦点消失
try {
	Inputs("reg-tel", "11位数字");
} catch (e) {
}
//--------------------注册-
var flagreg1 = null;
var flagreg2 = null;
var flagreg3 = null;
var flagreg4 = null;


try {
	var Phonereg = document.getElementById("reg-tel");
	var regs2 = new RegExp("^1[0-9]{10}$")

	Phonereg.onblur = function() {
		var resultS2 = regs2.test(Phonereg.value);
		if (!resultS2) {
			alert('手机号格式不正确');
			flagreg1 = false;
		} else {
			flagreg1 = true;
		}
	}
	var psw1 = document.getElementById("pw1");
	var psw2 = document.getElementById("pw2");
	var regpw = new RegExp("^[a-zA-Z_][a-zA-Z0-9_]{5,19}$");
	psw1.onblur = function() {
		var resultpw1 = regpw.test(psw1.value)
		if (!resultpw1) {
			alert('密码格式错误');
			flagreg2 = false;
		} else {
			flagreg2 = true;
		}

	}
	psw2.onblur = function() {
		if (psw1.value != psw2.value) {
			alert('两次密码输入不一致');
			flagreg3 = false;
		} else {
			flagreg3 = true;
		}
	}

	var regbtn = document.getElementById("regbtn");

	regbtn.onclick = function() {

		var ck = document.getElementById("checks");
		if (ck.checked) {
			alert('注册成功');
			window.location.href = 'login.html';
		} else {
			alert('请同意《霸王条款》')
		}
	}
	
	
	
} catch (e) {
	//TODO handle the exception
	var Loginbtn = document.getElementById("loginbtn");
	Loginbtn.onclick = function(){
		alert('登录成功');
		window.location.href = 'make.html';
	}
}



















//--------------------登录-
function checkForm() {
	var username = document.getElementById('name');
	var psd = document.getElementById('password');
	var name = "1314";
	var pas = "520";
	var name1 = "520";
	var pas1 = "1314";
//	if((username.value == name) && (psd.value == pas)) {
//		alert("欢迎访问love-H的情侣空间！");
//		window.location.href = "html/one/lovehsr.html";
//		return true;
//	}
	if((username.value == name1) && (psd.value == pas1)) {
		alert("欢迎访问gcwlovehsr的情侣空间！");
		window.location.href = "https://繁星2018.top/nr/";
		return true;
	} else {
		alert("写错了哟");
		return false;
	}
}
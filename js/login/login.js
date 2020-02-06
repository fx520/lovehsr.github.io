function checkForm() {
	var username = document.getElementById('logname');
	var psd = document.getElementById('logpass');
	var a = "淮思蕊";
	var b = "520";
	if((username.value == a) && (psd.value == b)) {
		alert("欢迎访问gcwlovehsr的情侣空间！");
		self.location.href = "https://繁星2018.top/nr/";
		return true;
	}
	var a1 = "淮思蕊520";
	var b2 = "1314";
	if((username.value == a1) && (psd.value == b2)) {
		alert("欢迎访问love-H的情侣空间！");
		self.location.href = "https://www.gcwlovehsr.top/html/one/lovehsr.html";
		return true;
	} else {
		alert("写错了哟");
		return false;
	}

}
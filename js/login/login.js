function checkForm() {
	var username = document.getElementById('logname');
	var psd = document.getElementById('logpass');
	var a = "淮思蕊";
	var b = "520";
	if((username.value == a) && (psd.value == b)) {
		alert("欢迎访问暖蕊的情侣空间！");
		self.location.href = "https://h-blog.top/nr/";
		return true;
	}else {
		alert("写错了哟");
		return false;
	}

}
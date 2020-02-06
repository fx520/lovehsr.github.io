function checkForm() {
	var username = document.getElementById('logname');
	var psd = document.getElementById('logpass');

	if((username.value =="淮思蕊") && (psd.value =="520")) {
		alert("欢迎访问gcwlovehsr的情侣空间！");
		window.location.href = "https://繁星2018.top/nr/";
		return true;
	}
	if((username.value == "1314") && (psd.value == "520")) {
		alert("欢迎访问love-H的情侣空间！");
		window.location.href = "https://gcwlovehsr.top/html/one/lovehsr.html";
		return true;
	}
	// if((username.value != name) && (psd.value != pas)){
	// 	alert("写错了哟");
	// 	return false;
	// }
	
}
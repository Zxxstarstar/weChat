//设置cookie
function setCookie(key,value,n){
	if(n != undefined){
		var d = new Date()
		d.setDate(d.getDate()+n);
		console.log(d)
		document.cookie = key+"="+ value +";expires="+d;
	}else{
		document.cookie = key+"="+ value;
	}
}
//删除cookie,利用了设置cookie的函数
function removeCookie(key){
	setCookie(key,"",-1)
}
//读取cookie
function getCookie(key){
	var str = document.cookie;
	arr = str.split("; ")
	for(var i=0;i<arr.length;i++){
		if(arr[i].split("=")[0] == key){
			return arr[i].split("=")[1];
		}
	}
	return "";
}
    
//范围随机数
function random(a,b){
	return Math.round(Math.random()*(a-b)+b)
}
//随机颜色
function randomColor(){
	var r = random(0,255).toString(16);
	var g = random(0,255).toString(16);
	var b = random(0,255).toString(16);
	
	return "#"+createZero(r)+createZero(g)+createZero(b);
}
//补零
function createZero(n){
	if(n.length<2 || n<10){
		return "0" + n;
	}else{
		return "" + n;
	}
}
//格式化日期
function createDate(){
	var d = new Date();
	var y = d.getFullYear()
	var m = d.getMonth()
	var mydate = d.getDate()
	var day = d.getDay()
	var h = d.getHours()
	var min = d.getMinutes()
	var s = d.getSeconds()
	switch(day){
		case 0:day = "星期日";break;
		case 1:day = "星期1";break;
		case 2:day = "星期2";break;
		case 3:day = "星期3";break;
		case 4:day = "星期4";break;
		case 5:day = "星期5";break;
		case 6:day = "星期6";break;
	}
	return y+"年"+createZero(m+1)+"月"+createZero(mydate)+" "+day+" "+createZero(h)+":"+createZero(min)+":"+createZero(s);
}
//兼容问题的解决
//获取样式的兼容解决
function getStyle(ele,attr){
	if(ele.currentStyle){
		return ele.currentStyle[attr];
	}else{
		return getComputedStyle(ele,false)[attr];
	}
}
//取消事件冒泡的兼容
function stopBubble(e){
	if(e.stopPropagation){
		e.stopPropagation()
	}else{
		e.cancelBubble = true;
	}
}
//阻止默认事件
function stopDefault(e){
	if(e.preventDefault){
		e.preventDefault()
	}else{
		e.returnValue = false;
	}
}

//添加事件监听
function addEvent(ele,type,callback){
	if(ele.addEventListener){
		ele.addEventListener(type,callback,false)
	}else if(ele.attachEvent){
		ele.attachEvent("on"+type,callback)
	}else{
		ele["on"+type] = callback
	}
}
//删除事件监听
function removeEvent(ele,type,callback){
	if(ele.removeEventListener){
		ele.removeEventListener(type,callback,false)
	}else if(ele.detachEvent){
		ele.detachEvent("on"+type,callback)
	}else{
		ele["on"+type] = null;
	}
}

//事件委托的封装
function eveEnt(achild,callback){
    return function(eve){
        var e = eve || window.event
	    var target = e.target || e.srcElement;
	    for(var i=0;i<achild.length;i++){
		    if(target === achild[i]){
		        callback.bind(target)();
			    }
			}
		}
    }
//使用方法：
//父元素.onclick = eveEnt(var的所有子元素数组的名称,function(){
//	console.log(this);//根据需求改变
//	})
// JavaScript Document
function dou(obj,attr,plus,target,fn){
	clearInterval(obj.timer);
	var arr = [];
	for(var i = 1 ; i < 20; i++){
		arr.push(i,-i)
	}
	arr.push(0);
	var num = 0 ;
	obj.timer = setInterval(function(){
		var pos = parseInt(getStyle(obj,attr)) + arr[num];
		num++;
		obj.style[attr] = pos + 'px';
		if( pos == target ){
			clearInterval(obj.timer);
			fn && fn();	
		}
	},30)
}
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}
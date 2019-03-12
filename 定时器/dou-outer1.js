// JavaScript Document
function dou(obj,attr,plus,target,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var pos = parseInt(getStyle(obj,attr)) + 'plus';
		if(pos > target && plus > 0){
			pos = target;	
		}
		if(pos < target && plus < 0){
			pos = target;	
		}
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
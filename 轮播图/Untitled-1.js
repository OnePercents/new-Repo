// JavaScript Document

function hct(obj,attr,target,iSpeed){
	var iSpeed = parseInt(getStyle(obj,attr))>target? -iSpeed : iSpeed;
	var hct = document.getElementById('hct');
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var leng = hct.offsetWidth + iSpeed ;
		if(leng >target && iSpeed>0){
			leng = target;
		}
		var hct_leng = leng+ 'px';
	},1000)
}

function getStyle(obj , attr){
	return 	obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
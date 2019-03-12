// JavaScript Document

	function move(obj,plus,target){
		clearInterval(timer);
		timer = setInterval(function(){
			var pos = parseInt(getStyle(obj,'left')) + plus;
			if(pos > target && plus > 0){
				pos = target;
			}
			if(pos < target && plus < 0){
				pos = target;
			}
			obj.style.left = pos + 'px';
			
			if( pos == target ){
				clearInterval(timer);
			}
		},30);
	}

	
	function getStyle(obj , attr){
		return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	}
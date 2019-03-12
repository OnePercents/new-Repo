// JavaScript Document

	function move(obj,plus,target,attr,ftn){
		var plus = target > parseInt(getStyle(obj,attr)) ? plus : -plus;
		clearInterval(timer);
		timer = setInterval(function(){
			var pos = parseInt(getStyle(obj,attr)) + plus;
			if(pos > target && plus > 0){
				pos = target;
			}
			if(pos < target && plus < 0){
				pos = target;
			}
			obj.style[attr] = pos + 'px';
			
			if( pos == target ){
				clearInterval(timer);
				ftn && ftn();
			}
			
		},30);
	}

	
	function getStyle(obj , attr){
		return obj.currentStyle ? obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	}
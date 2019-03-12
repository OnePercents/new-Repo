
function move(obj , attr, plus , target,endF){
	plus = parseInt(getStyle(obj , attr)) < target ? plus:-plus ;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = parseInt(getStyle(obj , attr)) + plus ;
		
		if(speed > target && plus > 0){
			speed=target;
			
		}
		if(speed < target && plus < 0){
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		if(speed ==target){
			clearInterval(obj.timer);
			endF && endF();	
		}
	},10)
	
}

function getStyle(obj , attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}

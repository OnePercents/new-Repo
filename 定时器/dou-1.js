// JavaScript Document

	function dou(obj,attr,endFn){

		var arr = [];
    	for(var i = 20 ; i > 0 ; i--){
			arr.push(i,-i);
		}
		arr.push(0) ;
		var timer = null;
		var num = 0 ;
		var pos = parseInt(getStyle(obj , attr));
		clearInterval(timer);
			
		timer = setInterval(function(){
			obj.style[attr] = pos+arr[num] +'px';
			num++;
			if(num === arr.length){
			clearInterval(timer);
			endFn && endFn();
			}
		},30)
	
    }

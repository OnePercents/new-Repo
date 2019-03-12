// JavaScript Document
window.onload = function(){
	
    var oImg = document.getElementById('img');
	
    oImg.onclick = function(){

		var arr = [];
    	for(var i = 20 ; i > 0 ; i--){
    		arr.push(i,-i);
    	}
    	arr.push(0) ;
		var timer = null;
		var num = 0 ;
		var pos = parseInt(getStyle(oImg , 'left'));
    	clearInterval(timer);
				
		timer = setInterval(function(){
			oImg.style.left = pos+arr[num] +'px';
			num++;
			if(num === arr.length){
				clearInterval(timer);
			}
		},30)
    }
    
}

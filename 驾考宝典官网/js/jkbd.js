// JavaScript Document

	var oPrev = document.getElementsByClassName('prev')[0],
		oNext = document.getElementsByClassName('next')[0],
		oBanner = document.getElementsByClassName('banner')[0],
		oUl = document.getElementsByClassName('ul')[0],
		oLi = document.getElementsByClassName('li'),
		oBanner_box = document.getElementsByClassName('banner_box')[0];
	var	timer1,timer2 ;
	var index = 0,
		flag = true;
		
	function moveImg(dis){
		flag = false;
		var duration = 400;
		var durationEach = 20;
		var disEach = dis/(duration/durationEach);
		var goal = oBanner.offsetLeft + dis;
		
		function move(){
			if( dis > 0 && oBanner.offsetLeft < goal || dis < 0 && oBanner.offsetLeft > goal){
				oBanner.style.left = oBanner.offsetLeft + disEach + 'px';
			}else{
				clearInterval(timer1);
				oBanner.style.left = goal +'px';
				if(oBanner.offsetLeft == -3120){
					oBanner.style.left = -520 + 'px';
				}else if(oBanner.offsetLeft == 0){
					oBanner.style.left = -2600 + 'px';	
				}
				flag = true;
			}
		}
		
		timer1 = setInterval(move,durationEach)
	}
	
	oPrev.onclick = function(){
		if(flag == false) return;
		moveImg(520);
		if(index==0){
			index = 4;
		}else{
			index--;	
		}
		oLiStyle();	
	}
	
	oNext.onclick = function(){
		if(flag == false) return;
		moveImg(-520);
		if(index== 4){
			index= 0 ;
		}else{
			index++;	
		}
		oLiStyle();	
	}
	
	function oLiStyle(){
		oUl.getElementsByClassName('active')[0].className = '';//父级.get..
		oLi[index].className = 'active';
	}
	for( var i = 0 ; i < oLi.length; i++){
		(function(j){
			oLi[j].onclick = function(){
				var offset = (j-index)*-520;
				moveImg(offset)
				index = j;
				oLiStyle();	
				
			}	
		})(i)
	};
	
	timer2 = setInterval(oNext.onclick,2000);
	
	oBanner_box.onmouseover = function(){
		clearInterval(timer2);
	}
	oBanner_box.onmouseout = function(){
		timer2 = setInterval(oNext.onclick,2000);
	}
















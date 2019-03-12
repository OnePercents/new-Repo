// JavaScript Document

var index = 0;

var timer;

var len = $('.picBox li').length;

function init(){
	bindEvent();
	
	slideAuto();
}

init();	
	
function bindEvent(){
	$('.btn a').on('click',function(){
		
		var tar = $(this).attr('class');
		
		move(tar);
		
	});
	
	$('.list li').on('click',function(){
		
		var i = $(this).index();
		
		move(i);
		
	});
	
	$('.wrapper').on('mouseenter',function(){
		clearInterval(timer);
		
	}).on('mouseleave',function(){
		slideAuto();
	})
}

function slideAuto(){
	
	clearInterval(timer);
	timer = setInterval(function(){
		move('right');
	},2000)
}

function move(dir){
	
	if(dir == 'left' || dir == 'right'){
		if(dir == 'left'){
			index --;
			index = index < 0? len-1:index;	
			console.log(index);	
		}else{
			index ++;
			index = index > len-1? 0:index;
		}
	}else{
		index = dir;
	}
	
	$('.picBox').css({
		'left':-index*700+'px'
	});
	
	$('.picBox li').eq(index).animate({'opacity':1},800);
	$('.picBox li').not(index).css('opacity',.3);
	changeLiStyle();
	console.log(index);
}

function changeLiStyle(){
	
	$('.active').removeClass('active');
	$('.list li').eq(index).addClass('active');
}

















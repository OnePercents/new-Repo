var index = 0;
var len = $('.picBox li').length;
var timer;

function init(){
	bindEvent();
	sliderAuto();
}
init();

function bindEvent(){
	$('.btn a').on('click',function(){
		var tar = $(this).attr('class');
		move(tar);
	});
	/*$('.list li').on('click',function(){
		var i = $(this).index();
		move(i);
	})*/
	
	$('.list li').on('click', function () {
        // 获得当前点击li索引
        var i = $(this).index();
        // 调用移动函数
        move(i);
    });
	
	$('.wrapper').on('mouseenter',function(){
		clearInterval(timer);
	}).on('mouseleave',function(){
		sliderAuto();
	});
}

function move( dir ){
	if( dir == 'left' || dir == 'right' ){
		if(dir == 'left'){

			index--;
			index = index < 0 ? len-1 : index;
			sliderAuto();
			console.log(index);
			
		}else{
			
			index ++;
			index = index > len -1 ? 0 : index;
			console.log(index);
			
		}
	}else{
		index = dir;
		console.log(index);
	}
	
	$('.picBox').css({
		'left': -index * 700 + 'px'
	});
	
	$('.picBox li').eq(index).animate({'opacity':1},800);
	$('.picBox li').not(index).css('opacity',0);
	
	changeStyle();
}

function sliderAuto(){
	clearInterval(timer);
	timer = setInterval(function(){
		move('right');
	},2000)
	
}

function changeStyle(){
	$('.active').removeClass('active');
	$('.list li').eq(index).addClass('active');
}







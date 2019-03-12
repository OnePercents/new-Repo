
var index = 0 ;
var timer = '';
var len = $('.picBox li').length;

function init(){
    bindPlay();
    autoPlay();
}

init();

function bindPlay(){
    $('.btn a').on('click',function(){
        var tar = $(this).attr('class');
        move(tar);
    })

    $('.list li').on('click',function(){
        var i = $(this).index();
        move(i);
    })

    $('.wrapper').on('mouseenter',function(){
        clearInterval(timer);
    }).on('mouseleave',function(){
        autoPlay();
    })
}

function autoPlay(){
    clearInterval(timer);
    timer = setInterval(function(){
        move('right');
    },2000)
}

function move(val){
    if(val == 'left' || val == 'right'){
        if(val == 'left'){
            index --;
            index = index < 0 ? len -1 : index;
        }else{
            index++;
            index = index >len-1? 0 : index;
        }
    }else{
        index = val;
    }

    $('.picBox').css({
        'left': - index * 700 +'px'
    })

    $('.picBox li').eq(index).animate({
        'opacity':1
    },500).not(index).css({
        'opacity':0.3
    })
    bannerDot(index);
}

function bannerDot(index){
    $('.active').removeClass('active');
    $('.list li').eq(index).addClass('active');
}
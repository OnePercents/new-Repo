// (function () {
//     var index = 0;
//     var len = $('.picBox li').length;
//     var timer;

//     function init() {
//         bindEvent();
//         sliderAuto();
//     }
//     init();

//     function bindEvent(){
//         $('.btn a').on('click',function () {
//             var tar = $(this).attr('class');
//             move(tar);
//         })
//         $('.list li').on('click',function(){
//             var i = $(this).index();
//             move(i);
//         })

//         $('.wrapper').on('mouseenter',function () {
//             clearInterval(timer)
//         }).on('mouseleave',function () {
//             sliderAuto()
//         })
//     }

//     function sliderAuto(){
//         clearInterval(timer);
//         timer = setInterval(function () {
//             move('right')
//         },2000)
//     }

//     function move(dir){
//         if(dir == 'left' || dir == 'right'){
//             if(dir == 'left'){
//                 index--;
//                 index = index < 0 ? len - 1 : index;
//             }else{
//                 index++;
//                 index = index > len - 1 ? 0 : index;
//             }
//         }else{
//             index = dir;
//         }

//         $('.picBox').css({
//             'left': -index * 700 +'px'
//         })

//         $('.picBox li').eq(index).animate({'opacity':1},800)
//         $('.picBox li').not(index).css('opacity',0.5)

//         changeStyle();

//     }

//     function changeStyle() {
//         $('.active').removeClass('active');
//         $('.list li').eq(index).addClass('active');
//     }

// })()





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

    $('.list>ul li').on('click',function(){
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
        console.log(index)
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
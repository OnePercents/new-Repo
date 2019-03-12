/**
 * Created by Administrator on 2018/12/4.
 */
var minSize = 5;
var maxSize = 50;
var flakeColor = '#fff';
var flake = $('<div></div>').css({'position':'absolute','top':'-50px'}).html('*');
var time = 200;

$(function(){

    var documentWidth = $(document).width();
    var documentHeight = $(document).height();

    setInterval(function(){

        var startPositionLeft = Math.random()*documentWidth;
        var startOpacity = 0.7 + Math.random()*0.3;
        var endPositionLeft = Math.random()*documentWidth;
        var endPositionTop = documentHeight;
        var fontSize = minSize + Math.random()*maxSize;
        var durationFall = 4000+Math.random()*3000;
        flake.clone().appendTo('body').css({
            'left':startPositionLeft,
            'opacity':startOpacity,
            'font-size':fontSize,
            'color':flakeColor
        }).animate({

            'top':endPositionTop,
            'left':endPositionLeft,
            'opacity':0.5

        },durationFall,function(){
            $(this).remove();
        })

    },time)

})

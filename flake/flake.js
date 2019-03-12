/**
 * Created by Administrator on 2018/12/3.
 */
var min = 5;
var max = 50;
var newOn = 50+Math.random()*150;
var flakeColor = '#fff';
var flake = $('<div></div>').css({'position':'absolute','top':'-50px',}).html('*');

$(function(){
    var documentWidth = $(document).width();
    var documentHeight = $(document).height();
    setInterval(function(){
        var startPositionLeft = Math.random()*documentWidth;
        var startOpacity = 0.7+Math.random()*0.3;
        var endPositionLeft = Math.random()*documentWidth;
        var endPositionTop = documentHeight;
        var durationFall = 4000+Math.random()*3000;
        var sizeFlake = min +Math.random()*max;
        flake.clone().appendTo('body').css({
            'left':startPositionLeft,
            'opacity':startOpacity,
            'font-size':sizeFlake,
            'color':flakeColor
        }).animate({
            'top':endPositionTop,
            'left':endPositionLeft,
            'opacity':0.5
        },durationFall,function(){
            $(this).remove();
        });
    },newOn)
})
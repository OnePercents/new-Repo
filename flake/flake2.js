/**
 * Created by Administrator on 2018/12/8.
 */
var min = 5;
var max = 50;
var flakeColor = '#fff';
var time = 200;

var flake = $('<div></div>').css({'position':'absolute','top':'-50px'}).html('*');

$(function () {
    var documentWidth = $(document).width();
    var documentHeight = $(document).height();
    setInterval(function(){

        var startPositionLeft = Math.random()*documentWidth;
        var opacity = 0.7 + Math.random()*0.3;
        var endPositionLeft = Math.random()*documentWidth;
        var endPositionTop = documentHeight;
        var fontSize = min + Math.random()*(max-min);
        var durationFall = 4000+ Math.random()*3000;

        flake.clone().appendTo('body').css({
            left:startPositionLeft,
            opacity:opacity,
            fontSize:fontSize,
            color:flakeColor
        }).animate({
            left:endPositionLeft,
            top:endPositionTop
        },durationFall,function(){
            $(this).remove()
        });


    },time)
})
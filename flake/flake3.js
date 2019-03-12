
var max = 50 ;
var min = 5;
var flakeColor = '#fff';
var interval = 200 ;
var flake = $('<div></div>').css({'position':'absolute','top':'-50px'}).html('*');

$(function(){
    var documentWidth = $(window).width();
    var documentHeight = $(window).height();
    setInterval(function(){
        var startLeft = Math.random()*documentWidth;
        var startOpacity = 0.7+Math.random()*0.3;
        var endLeft = Math.random()*documentWidth;
        var endTop = documentHeight;
        var fontSize = min + Math.random()*(max - min);
        var durationFall = 4000 + Math.random()*3000;
        flake.clone().appendTo('body').css({
            'left':startLeft,
            'opacity':startOpacity,
            'fontSize':fontSize,
            'color':flakeColor
        }).animate({
            'left':endLeft,
            'top':endTop,
            'opacity':0.5,
        },durationFall,function(){
            $(this).remove();
        })
        
    },interval)
})
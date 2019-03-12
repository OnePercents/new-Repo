
var maxSize = 50;
var minSize = 5;
var interval = 200;
var flakeColor = '#fff';
var flake = $('<div></div>').css({'position':'absolute','top':'-50px'}).html('*');

$(function(){
    var documentWidth = $(document).width();
    var documentHeight = $(document).height();

    setInterval(function(){
        var startLeft = Math.random()*documentWidth;
        var startOpacity = 0.7 + Math.random()*0.3;
        var endLeft = Math.random()*documentWidth;
        var endTop = documentHeight;
        var fontSize = minSize + Math.random()*(maxSize - minSize);
        var durationFall = 4000+ Math.random()*3000;

        flake.clone().appendTo('body').css({
            'left':startLeft,
            'opacity':startOpacity,
            'font-size':fontSize,
            'color':flakeColor
        }).animate({
            'left':endLeft,
            'top':endTop,
            'opacity':0.5
        },durationFall,function(){
            $(this).remove();
        })
    },interval)
})
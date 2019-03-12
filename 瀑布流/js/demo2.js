$(function(){
    init();
    $(window).on('resize',function(){
        init();
    })
    function init(){
        var boxWidth = $('.item').outerWidth(true);
        var cols = parseInt($(window).width()/boxWidth);

        var heightArr = [];
        for(var i = 0 ; i < cols ; i++){
            heightArr.push(0);
        }

        $('.item').each(function(index,item){
            var minHeight = heightArr[0];
            var idx = 0;
            for(var i = 0; i < heightArr.length ; i++){
                if(minHeight > heightArr[i]){
                    minHeight = heightArr[i];
                    idx = i;
                }
                $(item).css({
                    left:boxWidth * idx,
                    top:minHeight
                })
            }
            heightArr[idx] += $(item).outerHeight(true);
        })
    }

})
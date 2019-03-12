$(function () {
    init();
    $(window).on('resize',function(){
        init();
    })

    function init() {
        //每行展示列数
        //width()不包含padding,margin ,border;
        //outerWidth(true可加可不加) padding /margin / border;

        var boxWidth = $('.item').outerWidth(true);//每一个宽度
        var cols = parseInt($(window).width() / boxWidth);//列数
        var heightArr = [];//创建一个存放高度的数组
        for (var i = 0; i < cols; i++) {
            heightArr.push(0);
        };
        //遍历每一个图片
        $('.item').each(function (index, item) {
            var idx = 0;
            var minHeight = heightArr[0]
            console.log(minHeight)
            //最小高度
            for (var i = 0; i < heightArr.length; i++) {
                if (minHeight > heightArr[i]) {
                    minHeight = heightArr[i];
                    idx = i;
                    console.log(123)
                }
                $(item).css({
                    left: boxWidth * idx,
                    top: minHeight
                })
            }

            heightArr[idx] += $(item).outerHeight(true);
        })
    }
})
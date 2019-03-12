
var arr = [null , null , null];

$('.list dd').click(function(){
    $(this).addClass('selected').siblings('dd').removeClass('selected');

    // var cloneDom = $(this).clone();
    // $('.result dl').append(cloneDom).find('.select-no').hide();

    var index = $(this).parent().parent().index();
    filterDom(this,index);
})

function filterDom(ele,num){
    if($(ele).hasClass('select-all')){
        arr[num].remove();
        if($('.result .selected').length == 0){
            $('.result .select-no').show();
        }
    }else{
        if(arr[num]){
            arr[num].remove();
        }
        arr[num] = $(ele).clone();
        $('.result dl').append(arr[num]).find($('.select-no')).hide();
    }
}

$('.result').on('click','.selected',function(){
    var _this = this;
    arr.forEach(function(ele,index){
        if(ele == null)return;
        if(_this == ele.get(0)){
            $('li:eq('+index+') .select-all').addClass('selected').siblings().removeClass('selected');
        }
    })
    $(this).remove();
    if($('.result .selected').length == 0){
        $('.result .select-no').show();
    }
})





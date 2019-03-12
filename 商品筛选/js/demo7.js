var arr = [null , null , null]

$('.list dd').on('click',function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    var index = $(this).parent().parent().index();

    filterDom(this,index)
})

function filterDom(ele,index){
    if($(ele).hasClass('select-all')){
        arr[index].remove();
        if($('.result .selected').length == 0){
            $('.result .select-no').show();
        }
    }else{
        if(arr[index]){
            arr[index].remove();
        }
        arr[index] = $(ele).clone();
        $('.result dl').append(arr[index]).find($('.result .select-no')).hide();
    }
}

$('.result').on('click','.selected',function(){
    var _this = this;
    arr.forEach(function(item,i){
        if(item == null)return;
        if(_this == item.get(0)){
            $('li:eq('+i+') .select-all').addClass('selected').siblings().removeClass('selected');
        }
    })
    $(this).remove();
    if($('.result .selected').length == 0){
        $('.select-no').show();
    }
})



var arr = [null , null , null];

$('.list dd').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');

    var index = $(this).parent().parent().index();
    filterDom(this,index);
})

function filterDom(ele,num){
    if($(ele).hasClass('select-all')){
        arr[num].remove();
        $('.result .select-no').show();
    }else{
        if(arr[num]){
            arr[num].remove();
        }
        arr[num] = $(ele).clone();
        $('.result dd').append(arr[num]).find($('.result .select-no')).hide();
    }
}


//事件监听
$('.result').on('click','.selected',function(){
    var _this = this;
    arr.forEach(function(ele,index){
        if(ele == null)return;
        if(_this == ele.get(0)){
            $('.list:eq('+index+') .select-all').addClass('selected').siblings().removeClass('selected');
        }
    })
    $(this).remove();
    if($('.result .selected').length == 0){
        $('.result .select-no').show();
    }
})



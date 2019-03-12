/**
 * Created by Administrator on 2018/12/8.
 */
window.onload = function(){
    //for(var i = 0 ; i < arrImg.length; i ++){
        var img = new Img();
    //}

}
//var img = [];
var arrImg = document.getElementsByTagName('img')[0];

function Img(){
    var _this = this;
    this.onmouseover = function(){
        return _this.shake(_this , 'top' ,20 );
    }
}

var getStyle = function(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

Img.prototype.shake = function(obj ,attr , fudu , endFn){
    var arr = [];
    obj.timer = null;
    var num=0;
    var kk = parseInt(getStyle(obj,attr)); //
    for(var i=fudu;i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        obj.style[attr] = kk+arr[num]+"px";
        num++;
        if(num===arr.length){
            obj.style.top = kk;
            clearInterval(obj.timer);
            endfn && endfn();
        }else{
            obj.style.top = kk;
        }
    },30);
}
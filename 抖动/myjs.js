/**
 * Created by Administrator on 2018/8/18.
 */
function auto (obj,attr,dir,target,endfn){
    dir = parseInt(getstyle(obj,attr))<target?dir:-dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var speed = parseInt(getstyle(obj,attr))+dir;
        if(speed < target && dir<0 || speed < target && dir<0){
            speed = target;
        };
        obj.style[attr] = speed+"px";
        if(speed == target){
            clearInterval(obj.timer); //函数执行完成
            endfn && endfn();
        };
    },30)
};
function getstyle(obj,attr){
    return obj.currentStyle? obj.currentStyle[attr]:getComputedStyle(obj)[attr]; //兼容浏览器
};
function doudou(obj,attr,fudu,endfn){
    var arr = [];
    obj.timer = null;
    var num=0;
    var kk = parseInt(getstyle(obj,attr)); //
    for(var i=fudu;i>0;i-=2){
        arr.push(i,-i);
    };
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
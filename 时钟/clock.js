
var oUl = document.getElementsByClassName('numBox')[0];
var oHour = document.getElementsByClassName('hour')[0];
var oMinute = document.getElementsByClassName('minute')[0];
var oSecond = document.getElementsByClassName('second')[0];

function init(){
	var str = '';
	for(var i = 1 ; i <= 12 ; i++){
		str += '<li class="num" style="transform:rotate('+i*30+'deg)"><span style="transform:rotate('+i*(-30)+'deg)">'+i+'</span></li>';	
	}
	oUl.innerHTML = str;
	time();
};
init();

function time(){
	var myDate = new Date();
	
	var hour = myDate.getHours();
	var minutes = myDate.getMinutes();
	var seconds = myDate.getSeconds();
	var mses = myDate.getMilliseconds();
	
	console.log(hour+':'+minutes+':'+seconds);
	
	var dis = seconds+mses/1000;
	oSecond.style.transform = 'rotate('+dis*6 + 'deg)';
	
	var dim = minutes+dis/60;
	oMinute.style.transform = 'rotate('+dim*6 + 'deg)';
	
	var dih = hour+dim/60;
	oHour.style.transform = 'rotate('+dih*30 + 'deg)';
	setTimeout(time,16.7);
};
time();







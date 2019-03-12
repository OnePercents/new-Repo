// JavaScript Document
var myCanvas = document.getElementById('IdCode');

var context = myCanvas.getContext('2d');


function ranColor(max , min){
	var r = Math.floor(Math.random()*(max - min +1)+min);
	var g = Math.floor(Math.random()*(max - min +1)+min);
	var b = Math.floor(Math.random()*(max - min +1)+min);
	return 'rgb('+r+','+g+','+b+')';
}

function draw(){
	
	context.fillStyle = ranColor(170,250);
	context.fillRect(0 , 0 , 120 ,30);
	var data = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm1234567890';
	for( var i = 0 ; i < 4 ; i++){
		var c = data[ranNum(0,data.length-1)];
		context.font = "30px Calibri";
		context.textAlign = 'center';
		context.fillStyle = ranColor(160,200);
		context.fillText(c,ranNum(100,20),ranNum(30,20),10);
	}
	
}

function ranNum(max,min){
	var r = Math.floor(Math.random()*(max - min + 1)+min);
	return r;
}
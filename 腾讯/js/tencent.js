// JavaScript Document
window.onload=function(){
	var more = document.getElementsByClassName('nav_li_more')[0];
	var nav_div = document.getElementsByClassName('nav_div')[0];
	more.onmouseover = nav_div.onmouseover = function(){
		nav_div.style.display = 'block';
	}
	more.onmouseout = nav_div.onmouseout =  function(){
		var nav_div = document.getElementsByClassName('nav_div')[0];
		nav_div.style.display = 'none';
	}
}
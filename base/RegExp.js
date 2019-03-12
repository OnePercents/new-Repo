// JavaScript Document

function $(ele_id){
	return document.getElementById(ele_id);
}

//验证用户名

function checkUn(){
	var text1 = $('user_name').value;
	var text2 = $('use_name');
	text2.innerHTML = '';
	var Reg = /^[a-zA-z][a-zA-Z0-9]{3,15}$/;
	
	if( Reg.test(text1) == false){
		text2.innerHTML = '用户名不正确！！！';
		return false;
	}
}

//验证密码

function checkPw(){
	var t1 = $('password').value;
	var t2 = $('pw');
	t2.innerHTML = '' ;
	var Reg = /^[a-zA-Z0-9]{4,10}$/;
	if( Reg.test(t1) == false){
		t2.innerHTML = '密码输入错误！！！';
		return false;
	}
}

//再次验证输入密码

function checkRepw(){
	//两次密码不一致，请重新输入
	var Ret1 = $('rePassword').value;
	var Ret2 = $('rePw');
	Ret2.innerHTML = '';
	if( ($('password').value) != Ret1){
		Ret2.innerHTML = '两次密码不一致，请重新输入';
		return false ;
	}
}

//验证邮箱

function checkEm(){
	var em1 = $('email').value;
	var em2	= $('ema');
	em2.innerHTML = '';
	var Reg = /^\w+@\w+\.\w+[(com|cn)]$/;
	
	if(Reg.test(em1) == false){
		em2.innerHTML = '邮箱格式错误，例如：web@sina.com';
		return false;
	}

}

//验证手机号

function checkPhone(){
	var phone = $('phone').value;
	var phoneSpan = $('pho');
	phoneSpan.innerHTML = '';
	var Reg = /^1\d{10}$/;
	if( Reg.test(phone) == false){
		phoneSpan.innerHTML = '手机号码格式错误！！！';
		return false;
	}
}

//验证生日

function checkBirth(){
	var birthday = $('birthday').value;
	var birth = $('birth');
	birth.innerHTML = '';
	var Reg = /^((19\d{2})|(200\d)|(201[0-4]))-((0?[1-9])|(1[0-2]))-((0?[1-9])|([1-2]\d)|(3[0-1]))$/;
	if( Reg.test(birthday) == true){
		var arr =  birthday.split('-');
		var days;
		var year = arr[0];
		var month = arr[1];
		var day = arr[2];
			
		if(month == 2){
			if( year % 4 == 0 && year% 100 != 0 || year % 400 == 0 ){
				days = 29;
			}else{
				days = 28;
			}
		}
		else if( month == 4 || month == 6 ||month == 9 || month == 11 ){
			days =30;
		}
		else{
			days =31;
		}			
		
		if(day >days){
			birth.innerHTML = '日期输入有误！！！';
			return false;
		}
			
	}else{
		birth.innerHTML = '格式错误！！！年份为1900-2014 格式 xxxx-xx-xx'; 
		return false;
	}
}
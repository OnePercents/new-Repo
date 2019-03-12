window.onload = function () {
    //取消默认行为

    // document.addEventListener('touchstart', function (event) {
    //     event.preventDefault();
    // })

    //rem适配
    var width = document.documentElement.clientWidth / 16;
    var styleN = document.createElement('style');
    styleN.innerHTML = "html{font-size:" + width + "px!important}";
    document.head.appendChild(styleN)

    function a() {
        console.log(1234)
    }
    a();

    function changInp() {
        console.log(1111111111111111)
        var inputNode = document.querySelector("#search [type='text']")
        inputNode.addEventListener('touchstart', function (event) {
            inputNode.focus();
            event.stopPropagation();
        })
        document.addEventListener("touchstart", function (event) {
            inputNode.blur();
        })
    }
    setTimeout(changInp, 500)

    function changeMenu() {
        // console.log(123)
        var moreBtn = document.getElementById('more');
        var moreList = document.getElementById('mask');

        moreBtn.addEventListener('touchstart', function () {
            if (moreBtn.className == 'moreList-close') {
                moreBtn.className = 'moreList-open';
                moreList.style.display = 'block';
                // console.log(111)
            } else {
                moreBtn.className = 'moreList-close';
                moreList.style.display = 'none';
                // console.log(222)
            }
        })
    }

    changeMenu();

}

function transformCss(node, name, value) {
    if (!node.transform) {
        node.transform = {}
    }
    if (arguments.length > 2) {
        node.transform[name] = value;
        var result = '';
        for (var item in node.transform) {
            switch (item) {
                case 'rotate':
                case 'skew':
                case 'skewX':
                case 'skewY':
                case 'skewZ':
                    result += item + "(" + node.transform[item] + "deg)"
                    break;
                case 'scale':
                case 'scaleX':
                case 'scaleY':
                case 'scaleZ':
                    result += item + "(" + node.transform[item] + ")"
                    break;
                case 'translate':
                case 'translateX':
                case 'translateY':
                case 'translateZ':
                    result += item + "(" + node.transform[item] + "px)"
                    break;
            }
        }
        node.style.transform = result;
    } else {
        if (typeof node.transform[name] == 'undefined') {
            if (name == 'scale' || name == 'scaleX' || name == 'scaleY') {
                value = 1;
            } else {
                value = 0;
            }
        } else {
            value = node.transform[name];
        }
        return value;
    }
}


drag();
function drag() {
    var nav = document.getElementsByClassName('nav')[0];
    var navList = document.getElementsByClassName('navList')[0];
    var startX = 0;
    var eleX = 0;

    var beginTime = 0;
    var beginValue = 0;
    var disTime = 1;
    var disValue = 0;

    var endTime = 0;
    var endValue = 0;

    nav.addEventListener('touchstart', function (event) {
        var touch = event.changedTouches[0];
        disValue = 0;
        startX = touch.clientX;
        eleX = transformCss(navList, 'translateX')

        beginTime = new Date().getTime();
        beginValue = eleX;
    })
    nav.addEventListener('touchmove', function (event) {
        var touch = event.changedTouches[0];
        var nowX = touch.clientX;
        var disX = nowX - startX;
        var translateX = eleX + disX;
        var minX = document.documentElement.clientWidth - navList.offsetWidth
        if (translateX > 0) {
            var scale = 1 - translateX / document.documentElement.clientWidth;
            translateX = translateX * scale;
        } else if (translateX < minX) {

            var over = minX - translateX;
            var scale = 1 - over / document.documentElement.clientWidth;
            translateX = minX - over * scale;
            //translateX=document.documentElement.clientWidth-navList.offsetWidth
        }
        transformCss(navList, 'translateX', translateX)

        endTime = new Date().getTime();
        endValue = translateX;
        disTime = endTime - beginTime;
        disValue = endValue - beginValue;
    })

    nav.addEventListener('touchend', function (event) {
        var touch = event.changedTouches[0];
        var speed = disValue / disTime;
        var target = transformCss(navList, 'translateX') + speed * 100;

        var minX = document.documentElement.clientWidth - navList.offsetWidth

        if (target > 0) {
            target = 0;
        } else if (target < minX) {
            target = minX;
        }
        navList.style.transition = '0.5s';
        transformCss(navList, 'translateX', target);

    })
}

function changeColor() {
    var activeLi = document.querySelectorAll('.navList li');

    for (var i = 0; i < activeLi.length; i++) {

        // 误触判断
        activeLi[i].addEventListener('touchmove', function () {
            if (!this.isMove) {
                this.isMove = true;
            }
        })

        activeLi[i].addEventListener('touchend', function () {
            if (!this.isMove) {
                for (var j = 0; j < activeLi.length; j++) {
                    activeLi[j].className = '';
                }
                this.className = 'active';
                this.isMove = false;
            }

        })
    }
}

changeColor();






var wrap = document.getElementById('wrap');
var list = document.getElementsByClassName('list')[0];
var elementX = 0;
var startX = 0;
wrap.addEventListener('touchstart',function(event){
    var touch = event.changedTouches[0];
    elementX = list.offsetLeft;
    startX = touch.clientX;
})

wrap.addEventListener('touchmove',function(event){
    var touch = event.changedTouches[0];
    var nowX = touch.clientX;

    list.style.left = elementX + (nowX -startX) + 'px';
})









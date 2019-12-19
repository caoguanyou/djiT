'use strict';


// enterKeyDown(sendBtn) //设置i捷安特键盘按下回车
// timing() //返回现在事件
// randomInt(min, max) //随机数
// randomColor() // 随机颜色
// randomCode(min, max) //随机验证码
// addEvent(dom, type, fn) //注册事件
// removeEvent(dom, type, fn) //解除事件

// 设置监听键盘按下回车键 /输入发送按钮
function enterKeyDown(sendBtn) {
    document.onkeydown = function (e) {
        //获取发送按钮，默认在其他地方已经设置好发送操作

        if (!e) e = window.event;
        if ((e.keyCode || e.which) == 13) {

            sendBtn.focus();  //聚焦

            sendBtn.onclick;//提交按钮触发的方法

        }
    }

}

// 输出当前时间
function timing() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var data = now.getDate();
    var week = now.getDay();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    // 设置分钟和秒钟的时间个位数时候，补0
    minute < 10 ? (minute = '0' + minute) : minute;
    second < 10 ? (second = '0' + second) : second;
    var nowTime = year + '年' + month + '月' + data + '日 ' + hour + '时' + minute + '分' + second + '秒&#160;&#160; '


    return nowTime;
}

// 随机数函数,传入最小值和最大值
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min
}

// 3.写一个函数 randomColor 生成随机的十六进制颜色值 需要用到randomInt(min, max)
function randomColor() {
    var str = '0123456789abcdefg';
    var color = "#";
    for (let i = 0; i < 6; i++) {
        color += str[randomInt(0, str.length - 1)];
    }
    return color;
}


//2.写一个函数 randomCode() 生成6位随机验证码 传入要生成的验证码最短和最长
function randomCode(min, max) {

    var n = randomInt(min, max);/* 设置验证码长度范围 */

    var arr = new Array(n); /* 把随机出来得长度范围赋值给数组 */
    for (let i = 0; i < arr.length; i++) {
        do {
            var num = randomInt(48, 122);
        } while ((num > 57 && num < 65) || (num > 90 && num < 97));  /* 生成随机数,如果是0-Z之间的其他字符,则重新生成一个 */
        arr[i] = String.fromCharCode(num);  /* 把得到的字符ASCII码转换成对应的字符赋值给数组 */
    }

    return arr.join('');/* 返回数组转换后的字符串 */
}


/* 添加事件兼容方法 */
function addEvent(dom, type, fn) {
    if (dom.addEventListener) { //判断浏览器中是否有'addEventListener'方法 ，有就执行这个
        dom.addEventListener(type, fn, false);
    } else {// IE8及8以下的没有这个'addEventListener',undefined ==>false 执行IE的方法
        dom.attachEvent('on' + type, fn);
    }
}
/* 移除事件兼容方法 */
function removeEvent(dom, type, fn) {
    if (dom.removeEventListener) {
        dom.removeEventListener(type, fn, false);
    } else {
        dom.detachEvent('on' + type, fn);
    }
}





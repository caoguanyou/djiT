/*登陆注册*/
var _register = ` <div class="style_register">
                    <div class="register-logo">
                        <img src="./images/logo-b.svg" alt="">
                    </div>
                    <div class="text-center">注册</div>
                    <div class="formArea">
                        <div class="name">
                            <input type="text" name="username" id="register-username">
                            <label class="holder" for="register-username">邮箱/手机*</label>
                        </div>
                        <div class="pass">
                            <input type="password" name="userpw" id="register-userpw">
                            <label class="holder" for="register-userpw">密码*</label>
                        </div>
                        <div class="submit-btn">
                            <input type="button" value="注册" class="btn btn-lg btn-primary btn-register">
                            <p class="tips"></p>
                        </div>
                    </div>
                    <a href="./login_reg.html?login" class="dji-login dji-link">立即登陆</a>
                </div>`;

var _login = `  <div class="style_login">
                   <div class="text-center">登陆</div>
                   <div  class="formArea" >
                       <div class="name">
                           <input type="text" name="username" id="username">
                           <label class="holder" for="username">邮箱/手机*</label>
                       </div>
                       <div class="pass">
                           <input type="password" name="userpw" id="userpw">
                           <label class="holder" for="userpw">密码*</label>
                           <a href="#" class="forget">忘记密码?</a>
                       </div>
                       <div class="submit-btn">
                           <input type="button" value="登陆" class="btn btn-lg btn-primary btn-login">
                           <p class="tips"></p>
                       </div>
                   </div>
                   <a href="./login_reg.html?register" class="dji-register dji-link">注册DJI账号</a>
               </div>`;

/*进入监测href是否带有注册关键字，没有就显示登陆*/
if ((location.href.indexOf("register") === -1)){
    $('.login_register').append(_login);
}else {
    $('.login_register').append(_register);
}

var mySwiper = new Swiper ('#loginSwipre', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.login-swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.login-swiper-button-next',
        prevEl: '.login-swiper-button-prev',
    },
});





/*页面载入就滑动form窗口到中间*/
$(window).ready(function () {
    var scT = $(window).height()/2 - $('.formArea').height()/2;
   setTimeout(function () {
       $('html,body').animate({scrollTop: scT + 'px'}, 800);
   },1000)
});






var entry = $('.login_register');
entry.on("focus",'.formArea input',function () {
    $(this).next().animate({
        'font-size':'14px',
        'top':"-25px"
    },400)
});
entry.on("blur",'.formArea input',function () {
   if ($(this).val() === ""){
       $(this).next().animate({
           'font-size':'14px',
           'top':"0px"
       },400)
   }else{
       $(this).next().animate({
           'font-size':'14px',
           'top':"-25px"
       },400)
   }

});
entry.on("click",'.btn-register',function () {

    if ($('#register-username').val() === '' || $('#register-userpw').val() === '') {
        $('.tips').html("账号密码不能为空");
        return false;
    }

    console.log("注册")
    loginAndRegister('register',{
        user:$('#register-username').val(),
        pass:$('#register-userpw').val()
    })

});
entry.on("click",'.btn-login',function () {
    if ($('#username').val() === '' || $('#userpw').val() === '') {
        $('.tips').html("账号密码不能为空");
        return false;
    }

    loginAndRegister('login',{
        user:$('#username').val(),
        pass:$('#userpw').val()
    });
    // console.log($('#username').val(),$('#userpw').val())
});
// login登陆验证





//使用发布订阅模式 登陆
// 登陆&注册ajax
function loginAndRegister(act,val) {//ajax请求使用ajax
    $.ajax({
        type: 'get',
        url: `http://10.36.135.7:3000/${act}`,
        data: `act=${act}&username=${val.user}&password=${val.pass}`,
        success: function (data) {
            console.log(data)
            var json =data;
            // '{"err":"1","msg":"${result"}';
            if ((json.err === '1')){//如果登陆成功输出1，失败输出0
                // login_register.trigger('登陆成功', json);//TODO:使用发布订阅模式 登陆
                require(['pub-sub.min',"cookie.min"],function (login_register,cookie) {
                    login_register.trigger('登陆成功', json);//TODO:使用发布订阅模式 登陆
                    // 登陆或注册成功的时候把账号密码保存在cookie
                    cookie.setCookie('username',json.msg[0].username,0.005);
                    cookie.setCookie('userpass',json.msg[0].password,0.005);
                });

                //登陆成功延时关闭登陆页面
                (function () {
                    var i = 3;
                    var timer1 = null;
                    $('.tips').html(`登陆成功，${i}秒后返回`);
                    timer1 = setInterval(function () {
                        i--;
                        $('.tips').html(`登陆成功，${i}秒后返回`);
                        console.log(i);
                        if (i < 0){//计时4秒后返回
                            clearInterval(timer1);
                            $('.tips').html('');
                            history.go(-1);/*返回上一页*/
                        }
                    },1000)
                })();
            }else if ((json.err === '0')){
                $('.tips').html(json.msg);
            }else {
                $('.tips').html('出错');
            }
        }
    });
}






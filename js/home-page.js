
/*todo:json home_banner.json*/


//header进入的样式切换
$('.site-header').hover(
    function() {
        $('.header-logo-nav .logo').css('background-image', 'url(../images/logo-b.svg)');
        $('.search-pic').css('background-image', 'url(../images/search-b.svg)');
        $('.login-register-pic').css('background-image', 'url(../images/user-b.svg)');
        $('.site-header').css('background-color', '#fff');
        $('.nav-title').css('color', '#3b3e40');

    },
    function () {
        $('.header-logo-nav .logo').css('background-image', 'url(../images/logo.svg)');
        $('.search-pic').css('background-image', 'url(../images/search.svg)');
        $('.login-register-pic').css('background-image', 'url(../images/user.svg)');
        $('.site-header').css('background-color', 'transparent');
        $('.nav-title').css('color', '#fff');
    },
);

/*跳转商城页面*/
$('.header-user .shops').click(function () {
    var newWindow = window.open('./shops-page.html','_self')
});









function _noSign(){
    var ele = `<li><a href="login_reg.html?login" class="login">登陆</a></li>
               <li><a href="login_reg.html?register" class="register">注册</a></li>`;

    $('.login-register-sub').html("").append(ele);
}/*未登陆状态*/
function _Sign(nickName){
    var ele = `<li><a href="#" class="userNike">欢迎，${nickName} </a></li>
                <li><a href="#" class="userinfo">我的账号 </a></li>
                <li><a href="#" class="signOut">退出 </a></li>`;
    $('.login-register-sub').html("").append(ele);
}/*登陆状态*/
/*cookie自动登陆*/
autoSign(_noSign,_Sign);
function autoSign(_noSign,_Sign){
    require(["pub-sub.min","cookie.min"],function (login_register,cookie)  {
        var user = cookie.getCookie('username');
        var pass = cookie.getCookie('userpass');
        var act = 'login';
        if (user && pass) {
            $.ajax({
                type: 'get',
                url: `/${act}`,
                data: `act=${act}&username=${user}&password=${pass}`,
                success: function (data) {
                    var json = data;
                    // '{"err":"1","msg":"${result"}';
                    if ((json.err === '1')){//如果登陆成功输出1，失败输出0
                        login_register.trigger('登陆成功', json);//TODO:使用发布订阅模式 登陆
                        _Sign(json.msg[0].username)
                    }
                    else if ((json.err === '0')){
                        _noSign();
                        $('.tips').html(json.msg);
                    }else {
                        _noSign();
                        $('.tips').html('出错');
                    }
                }
            });
        }else {
            _noSign();
        }

    });


}









// heder-nav二级菜单
$('.site-header').on('mouseenter','.header-nav-item',function() {
    //显示当前hover项目二级菜单，隐藏其他二级菜单
    $(this).children('.dui-dropdown-menu').css('display', 'block').end().siblings().children('.dui-dropdown-menu').css('display', 'none');
   
    //移出nav列表隐藏所有二级菜单
    $('.header-nav').mouseleave(function () {
        $(this).children().children('.dui-dropdown-menu').css('display', 'none');
    })
});

 //todo:Search 的search-input和search-btn需要动画
$('.search-pic').click(function(){
    $('.search-bar').css('display', 'block');
    $('.search-bar-wrap-btn').animate({
        left:0,
    },400);
    $('.search-bar-wrap-body').animate({
        left: 0,
    }, 400);
    $('.search-input').focus();
});

$('.search-bar-wrap-close').click(function () {
    $('.search-bar').css('display', 'none');
    $('.search-bar-wrap-btn').animate({
        left: '60px',
    }, 1);
    $('.search-bar-wrap-body').animate({
        left: '600px',
    }, 1);
});



/*slider*/
$(document).ready(function () {
        /*大轮播图*/
    ajax({"data":"home_banner"},function (data) {
        bigSlider(data);
    });
    function bigSlider(mainBanner){
        for (var index in mainBanner['title']){
            var imgs = ` <div class="swiper-slide">
                <a href="javascript:;" class="banner-link" style=${mainBanner['background'][index]}>
                    <div class="banner-text ani" swiper-animate-effect="fadeInDown"  swiper-animate-duration="0.4s">
                        <img src=${mainBanner['text'][index]}  class="banner-logo">
                        <p style="color:#ffffff" class="banner-slogan">${mainBanner['title'][index]}</p>
                    </div>
                    <div class="banner-image ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.4s">
                        <img src=${mainBanner['img'][index]} alt="">
                    </div>
                </a>
            </div>`;
            $('.site-banner .swiper-wrapper').append(imgs);
            // $('.swiper-pagination .swiper-pagination-wrap').append(btns);
        }

        var mySwiper = new Swiper ('#swiper-1', {
            direction: 'horizontal', // 垂直切换选项
            effect:'fade',
            loop: true, // 循环模式选项
            autoplay:true,//等同于以下设置
// 如果需要分页器
            pagination: {
                el: '.swiper-pagination-wrap',
                clickable :true,
                bulletElement : 'li',
                // dynamicBullets: true,//动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
                // dynamicMainBullets: 5,
                renderBullet: function (index, className) {
                    // return '<span class="' + className + '">' + (index + 1) + '</span>';
                    var btns = `<li data-index=${index+1} class="${className}"><a href="javascript:;">${mainBanner['product'][index]}</a></li>`;
                    return btns;
                },

            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',

            },

            on:{
                init: function(){
                    swiperAnimateCache(this); //隐藏动画元素
                    swiperAnimate(this); //初始化完成开始动画
                },
                slideChangeTransitionEnd: function(){
                    swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
                }
            }
        });
        /*banner-slider*/

    }


    /*product-slider   轮播图*/
    ajax({"data":"home_main_banner"},function (data) {
        smallSlider(data)
    });
    function smallSlider(productSliderArr) {
    var imgsP = '';
    for (var index in productSliderArr["img"]){
        imgsP += ` <div class="swiper-slide" index="${index}">
                        <img src-data=${productSliderArr["img"][index]} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4156711157,3719769417&fm=15&gp=0.jpg" alt="" class="slide-img">
                        <div class="slide-text">
                            <h3 class="slide-title">${productSliderArr["title"][index]}</h3>
                            <p class="slide-desc">${productSliderArr["desc"][index]}</p>
                        </div>
                    </div>`;
    }
    $('.product-silder .swiper-wrapper').append(imgsP);
    var productFirstImg = $('.product-silder .swiper-wrapper').eq(0).children().find('.slide-img');
    productFirstImg.prop('src', productFirstImg.attr('src-data'));


    var productSlider = new Swiper ('.product-silder', {
        direction: 'horizontal', // 垂直切换选项
        effect:'fade',
        loop: true, // 循环模式选项


        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.product-silder .swiper-button-next',
            prevEl: '.product-silder .swiper-button-prev',
        },
        on:{
            init: function(){
                // swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            }
        }

    });
    $('.product-silder').one('mouseenter',function () {
        var imgs = $('.product-silder .swiper-wrapper').children().find('.slide-img');
        $.each(imgs,function (index,item) {
            $(item).prop('src', $(item).attr('src-data'));
        });
    });

        function anima(){
            $('.swiper-wrapper .swiper-slide').css({
                'top':'0px',
                'left':'0px',
                'padding':'0 0 0 0',
            },300);
            $('.swiper-wrapper .swiper-slide-next').css({
                'top':'10px',
                'padding':'0 0 0 0',
            },300);
            $('.swiper-wrapper .swiper-slide-prev').css({
                'top':'-10px',
                'padding':' 0 20px 0 20px',
            },300);
        }
        $('.product-silder .swiper-button-prev').click(function () {
            anima();
        });
        $('.product-silder .swiper-button-next').click(function () {
            anima();
        });
        $(".product-silder").hover(
            function () {
                anima();
            },
            function () {
                $('.swiper-wrapper .swiper-slide').css({
                    'top':'0px',
                    'left':'0px',
                    'width':'100%',
                    'heihgt':'100%',
                });
            },
        )
    }

});

$('.service-list li').hover(
    function () {
        $(this).siblings().children().css("color","#797d80")
    },
    function () {
        $(this).siblings().children().css("color","#303233")
    }
);





/*ajax请求数据*/
function ajax(data,cb) {
    $.ajax({
        url:'/json',
        type: 'get',
        data: data,
        dataType: "json",
        success: cb,
        error : function (err) {
            console.log(err)
        }
    });
}
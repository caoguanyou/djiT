
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


// heder-nav二级菜单
$('.site-header').on('mouseenter','.header-nav-item',function() {
    //显示当前hover项目二级菜单，隐藏其他二级菜单
    $(this).children('.nav-menu').css('display', 'block').end().siblings().children('.nav-menu').css('display', 'none');
   
    //移出nav列表隐藏所有二级菜单
    $('.header-nav').mouseleave(function () {
        $(this).children().children('.nav-menu').css('display', 'none');
    })
});

 //TODO:Search 的search-input和search-btn需要动画
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
    /*banner-slider*/
    var bannerImgs = [" ","banner1.png","banner2.png","banner3.png","banner4.png","banner5.png","banner6.png","banner7.png"];
    var bannerBtns = [" ","Ronin SC 如影 SC 单手持微单稳定器","机甲大师 RoboMaster S1","灵眸 Osmo 口袋云台相机","经纬 M200 V2 系列","Jimmy Chin × Osmo Action","御 Mavic Mini 航拍小飞机","T20 植保无人飞机","Osmo Mobile 灵眸手机云台 3","DJI FPV 数字图传系统"]
    for (var index in bannerImgs){
        var imgs = ` <div class="swiper-slide">
                <a href="javascript:;" class="banner-link"></a>
                <div class="banner-text ani" swiper-animate-effect="fadeInDown"  swiper-animate-duration="0.4s">
                    <img src="https://www1.djicdn.com/cms/uploads/b7d02e38ba75a512fe05bde383412b9d.svg"  class="banner-logo">
                    <p style="color:#ffffff" class="banner-slogan">玩出名堂</p>
                </div>
                <div class="banner-image ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.4s">
                    <img src="../images/${bannerImgs[index]}" alt="">
                </div>
            </div>`;
        var btns = `<li data-index=${index} class="swiper-scroller-item"><a href="javascript:;">${bannerBtns[index]}</a></li>`;
        $('.site-banner .swiper-wrapper').append(imgs);
        // $('.swiper-pagination .swiper-pagination-wrap').append(btns);
    }

    var mySwiper = new Swiper ('#swiper-1', {
        direction: 'horizontal', // 垂直切换选项
        effect:'fade',
        loop: true, // 循环模式选项

// 如果需要分页器
        pagination: {
            el: '.swiper-pagination-wrap',
            clickable :true,
            bulletElement : 'li',
            // dynamicBullets: true,//动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
            // dynamicMainBullets: 5,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + '</span>';
                var btns = `<li data-index=${index} class="${className}"><a href="javascript:;">${bannerBtns[index]}</a></li>`;

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

    /*product-slider*/
    var productSliderArr = ["product-silder1.jpg","product-silder2.jpg","product-silder3.jpg","product-silder4.jpg","product-silder5.jpg","product-silder6.jpg","product-silder7.jpg","product-silder8.jpg","product-silder9.jpg","product-silder10.jpg","product-silder11.jpg","product-silder12.jpg"];
    var imgsP = '';
    for (var indexP in productSliderArr){
        imgsP += `<div class="ani swiper-slide" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s"><img src="./images/${productSliderArr[indexP]}" alt=""></div>`;
    }
    $('.product-silder .swiper-wrapper').append(imgsP);

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
    /*product-slider*/
    function anima(){
        $('.swiper-wrapper .swiper-slide').css({
            'top':'0px',
            'left':'0px',
            'width':'100%',
            'heihgt':'100%',
        });
        $('.swiper-wrapper .swiper-slide-next').animate({
            'top':'10px',
            'width':'99%',
        });
        $('.swiper-wrapper .swiper-slide-prev').animate({
            'top':'-10px',
            // 'width':'101%',
            // 'heihgt':'101%',
        });
    }
    $(".product-silder").hover(
        function () {
            anima();
            $('.product-silder .swiper-button-prev').click(function () {
                anima();
            });
            $('.product-silder .swiper-button-next').click(function () {
                anima();
            });
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
});



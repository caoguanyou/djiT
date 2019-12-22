
/*header*/
$('.header-search-input').focus(function () {
    $(this).addClass('header-search-input-avtive')
});
$('.header-search-input').blur(function () {
    $(this).removeClass('header-search-input-avtive')
});

$('.SceneItem-text').hover(
    function () {
        $(this).prev('.SceneItem-img-hover').animate({
            'opacity':'1'
        },400);
    },
    function () {
        $(this).prev('.SceneItem-img-hover').animate({
            'opacity':'0'
        },400)
    }
);


$(document).ready(function () {
    var shopSwiper = new Swiper ('#shops-swiper-1', {
        // direction: 'vertical', // 垂直切换选项
        effect : 'fade',
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
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
});

// $('.nvt-t').mouseenter(function () {

//     $(this).next().css('display', 'block');
// });
// $('.nvt-t').mouseleave(function () {
//     $(this).next().css('display', 'none');
// });

$('.site-header').hover(
    function() {
        $('.logo').css('background-image', 'url(../images/logo-b.svg)');
        $('.search-pic').css('background-image', 'url(../images/search-b.svg)');
        $('.login-register-pic').css('background-image', 'url(../images/user-b.svg)');
    },
    function () {
        $('.logo').css('background-image', 'url(../images/logo.svg)');
        $('.search-pic').css('background-image', 'url(../images/search.svg)');
        $('.login-register-pic').css('background-image', 'url(../images/user.svg)');
    }
)


// nav二级菜单
$('.site-header').on('mouseenter','.header-nav-item',function() {
    //显示当前hover项目二级菜单，隐藏其他二级菜单
    $(this).children('.nav-menu').css('display', 'block').end().siblings().children('.nav-menu').css('display', 'none');
   
    //移出nav列表隐藏所有二级菜单
    $('.header-nav').mouseleave(function () {
        $(this).children().children('.nav-menu').css('display', 'none');
    })
})

 //TODO:Search 的search-input和search-btn需要动画
$('.search-pic').click(function(){
    $('.search-bar').css('display', 'grid')
})
$('.search-close').click(function () {
    $('.search-bar').css('display', 'none')
})
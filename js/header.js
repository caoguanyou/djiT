
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




var _Sign = function () {
   var ele =  `<span class="Account__sign-shu">|</span>
            <a href="javascript:;" class="top-item login myAccount">&nbsp;&nbsp;我的账号&nbsp;&nbsp;</a>
            <span class="Account__sign-shu">|</span>
            <ul class="Account__signHover">
                <li><a href="#" class="top-item">我的账号</a></li>
                <li><a href="#" class="top-item">我的订单</a></li>
                <li><a href="#" class="top-item">退出</a></li>
            </ul>`
    $('.Account__sign').html("").append(ele)
    $('.Account__sign').addClass('sign');

};
var _noSign = function () {
   var ele =  ` <span class="Account__sign-shu">|</span>
                    <a href="./login_reg.html?login" class="top-item login">登陆</a>
                    <span class="Account__sign-shu">|</span>
                    <a href="./login_reg.html?register" class="top-item register">注册</a>
                    <span class="Account__sign-shu">|</span>`
    $('.Account__sign').html("").append(ele);
    $('.Account__sign').removeClass('sign');
};
/*登陆状态*/
/*cookie自动登陆*/
autoSign(_noSign,_Sign);/*发布了订阅消息*/
function autoSign(_noSign,_Sign){
    require(["pub-sub.min","cookie.min"],function (login_register,cookie)  {
        var user = cookie.getCookie('username');
        var pass = cookie.getCookie('userpass');
        console.log(user);
        var act = 'login';
        if (user && pass) {
            $.ajax({
                type: 'get',
                url: `/${act}`,
                data: `act=${act}&username=${user}&password=${pass}`,
                success: function (data) {
                    var json = JSON.parse(data);
                    // '{"err":"1","msg":"${result"}';
                    if ((json.err === '1')){//如果登陆成功输出1，失败输出0
                        login_register.trigger('登陆成功', json);//TODO:使用发布订阅模式 登陆
                        _Sign()
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

/*登陆成功的菜单栏hover显示*/
$('.shops-header-top-right .Account__sign').hover(
    function () {
        $(this).find('.Account__signHover').css('display','block')
    },
    function () {
        $(this).find('.Account__signHover').css('display','none')
    }
);





/*二级菜单*/
(function () {
    function subMenuShow(){
        $('.header-sub-menu').css('display','block')
    }
    function subMenuHidden(){
        $('.header-sub-menu').css('display','none')
    }

    $('.all-products').mouseenter(subMenuShow);
    $('.shops-header-menu').mouseleave(subMenuHidden);
    $('.esecondly-item').mouseenter(subMenuHidden);
    var headerSubMenu =  {
        "menuSubTitle":[
            "“御” Mavic",
            "灵眸 Osmo",
            "“晓” Spark",
            "如影 Ronin",
            "机甲大师",
            "DJI FPV",
            "“悟” Inspire",
            "精灵 Phantom",
            "行业应用&amp;农业植保",
            "系统模块",
            "睿炽科技丨特洛",
            "增值服务"],
        "menuSubTxt":[
            "特洛 Tello",
            "特洛 Tello 畅飞套装",
            "盖世小鸡 GameSir T1d遥控器",
            "Tello 飞行电池",
            "Tello 电池管家",
            "Tello 快拆螺旋桨",
            "Tello 桨叶保护罩",
            "Tello 多彩外壳",
            "PGYTECH Tello 玩具扩展接口",
            "PGYTECH Tello 贴纸"],
        "menu_sub_img":[
            "http://product2.djicdn.com/uploads/spu/cover/929cf1848642494cc2e3c920c3aa3af1@small.png",
            "http://product3.djicdn.com/uploads/spu/cover/c6c83868900ea913e1aacdbd0d59cc87@small.png",
            "http://product1.djicdn.com/uploads/spu/cover/38f1d184f656706bec2f5a3dc81a4ccb@small.png",
            "http://product4.djicdn.com/uploads/spu/cover/0989ab05543680ec46759892d63c7993@small.png",
            "http://product1.djicdn.com/uploads/spu/cover/374ae5e6d802068c1d51e91bf78a2ef6@small.png",
            "http://product3.djicdn.com/uploads/sku/covers/31314/small_55e19eff-2d6a-4d75-8e63-b9b5822fd298.png",
            "http://product1.djicdn.com/uploads/bundle/covers/31321/small_4db147ca-8a81-4dcb-a84e-0ef2bc52c0cc.png",
            "http://product2.djicdn.com/uploads/spu/covers/30939/small_65184e3b-5caa-4434-879b-87f884abedee.png",
            "http://product2.djicdn.com/uploads/sku/covers/30934/small_beceb8fe-c7d6-41c9-9d36-e6b608c7f059.png",
            "http://product3.djicdn.com/uploads/bundle/covers/31027/small_8e06abed-16b6-40b4-8f56-caf0ad88c584.png",
            "http://stormsend1.djicdn.com/stormsend/uploads/fbea7f00-d356-0135-d3dd-12530322f90d/store-menu-scene-traveling-outdoor.jpg",
            "http://product3.djicdn.com/uploads/sku/covers/31314/small_55e19eff-2d6a-4d75-8e63-b9b5822fd298.png",
            "http://product2.djicdn.com/uploads/sku/covers/30934/small_beceb8fe-c7d6-41c9-9d36-e6b608c7f059.png",
            "http://product3.djicdn.com/uploads/spu/covers/80180/small_a8cc3e1e-472a-4788-89e4-0a8138e160fc.png",
            "http://product1.djicdn.com/uploads/sku/covers/31505/small_93f9bb7f-b1a4-49d2-82c5-0ed851cedcae.png"]
    };

    /*二级菜单标题*/
    var _html = '';
    for (var i = 0; i < headerSubMenu.menuSubTitle.length;i++ ){
        _html += ` <li  class="sub-menu-item"><a href="#">${headerSubMenu.menuSubTitle[i]}</a><i class="sub-menu-icon">&gt;</i></li>`;
    }
    $('.header-sub-menu-head').append(_html);

    /*二级菜单内容*/
    var _product = '';
    for (var i = 0; i < headerSubMenu.menuSubTxt.length;i++ ){
        _product += `
    <li class="product-item">
       <a href="#">
           <div class="product-img">
               <img src="${headerSubMenu.menu_sub_img[i]}" alt="">
           </div>
           <div class="product-head">${headerSubMenu.menuSubTxt[i]}</div>
       </a>
   </li>
    `;
    }
    $('.shops-header .sub-menu-item-product').append(_product);



    /*二级菜单项目大于5条第二行的padding-top=50px*/
    var subMenuItem = $('.product-type .sub-menu-item-product .product-item');//二级菜单
    $.each(subMenuItem,function (index,item){
        if (index >= 5){
            $(item).css({
                'padding-top':'50px'
            })
        }
    });

})();
/*二级菜单*/
/*header*/
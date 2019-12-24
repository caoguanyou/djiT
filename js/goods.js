
$('.shops__header').load('./shop-header.html');

$('.shops-footer').load('./shop-footer.html');



/*商品展示图*/
var showImg = $('.style__slides .style__slides-item');
$.each(showImg,function (index,item) {
    $(item).attr('index',index) ;
});

/*图片控制功能*/
var ctrlImg = $('.style__paginations .style__paging-item');
$.each(ctrlImg,function (index,item) {
    $(item).attr('index',index) ;
    $(item).css({'opacity':' 0.8'});
});
ctrlImg.click(function () {
    $(this).addClass('style__paging-item-active').siblings().removeClass('style__paging-item-active')

    var ind = $(this).attr('index');
    showImg.eq(ind).addClass('style__slides-item-active').siblings().removeClass('style__slides-item-active');

    bottmSilder();
});

function bottmSilder() {
    var lf = Math.ceil($('.style__paginations .style__paging-item-active').position().left);
    var wid = $('.style__paginations .style__paging-item-active').width();

    $('.active_button').animate({
        'left':lf,
        'width':wid+'px',
    },300)
}

/*控制按钮功能*/
var ctrlLeft = $('.style__paginations-btn .btn-left');
var ctrlRight = $('.style__paginations-btn .btn-right');
var ctrlParentwid = ctrlLeft.parent().width();
var listUl = $('.style__pagings-container .style__paginations');
var lestParentwid = listUl.parent().width();
var runwid = listUl.width() - lestParentwid - ctrlParentwid;
ctrlRight.click(function () {
    listUl.animate({'left':-runwid},300);
});
ctrlLeft.click(function () {
    listUl.animate({'left':0},300);
});




/*大图控制按钮*/
var bigLeft = $('.style__slider-ctrl .left');
var bigRight =  $('.style__slider-ctrl .right');
var close =  $('.style__slider-ctrl .close');
var initIndex = 2;
bigLeft.click(function () {
    initIndex--;
    if (initIndex < 2){
        initIndex = showImg.length;
    }

    showImg.eq(initIndex).addClass('style__slides-item-active').siblings().removeClass('style__slides-item-active');
    ctrlImg.eq(initIndex).addClass('style__paging-item-active').siblings().removeClass('style__paging-item-active');
    bottmSilder();
});
bigRight.click(function () {
    initIndex++;
    if (initIndex >= showImg.length){
        initIndex = 2;
    }

    showImg.eq(initIndex).addClass('style__slides-item-active').siblings().removeClass('style__slides-item-active');
    ctrlImg.eq(initIndex).addClass('style__paging-item-active').siblings().removeClass('style__paging-item-active');
    bottmSilder();
});


/*调整窗口大小就跳*/
$(window).resize(function () {
    console.log(1)
    showImg.eq(initIndex).addClass('style__slides-item-active').siblings().removeClass('style__slides-item-active');
    ctrlImg.eq(initIndex).addClass('style__paging-item-active').siblings().removeClass('style__paging-item-active');
    bottmSilder();
});
/*大图功能完成*/
$('.img-responsive').click(function () {
    var bigImgStyle =  `<link class="bigImgStyle" rel="stylesheet" href="./css/goods-bigImg.min.css">`;
    $('.index__breadcrumbs_wrap').prepend(bigImgStyle);
});
close.click(function () {
    $('.bigImgStyle').remove();
});

/*套餐*/
var chose = $('.product-suit-list .chose');
chose.click(function () {
    if ($(this).is(":checked")) {
        $(this).parent().parent().css({'border-color': '#1897f2','background':'#1897f2'})
            .children().css({"background":"#e6f7ff"}).end()
            .siblings().css({'border-color': '#1897f2','background':'#fff'})
            .children().css({"background":"#fff"}).end();
        $(this).parent().parent().addClass("chose-package").siblings().removeClass("chose-package");
    }
    countSun();
});


/*配件*/
var check = $('.product-fittings .chose');
check.click(function () {
    if ($(this).is(":checked")) {
        $(this).parent().parent().css({'border-color': '#1897f2','background':'#1897f2'})
            .children().css({"background":"#e6f7ff"}).end()
        $(this).parent().parent().addClass("chose-package");

    }else{
        $(this).parent().parent().css({'border-color': '#616466','background':'#fff'})
            .children().css({"background":"#fff"}).end();
        $(this).parent().parent().removeClass("chose-package");
    }
    countSun();
});

/*合计金额*/
var sum = 0;
function countSun() {

    var price = $('.product-suit-list .chose-package').children().find(".price").html();
    var suits = $('.product-fittings .chose-package');
    if (price){
        price = price.replace("￥","");
        price = parseInt(price)
    }else {
        price = 0;
    }
    var suitsSum = 0;
    if (suits){
        $.each(suits,function (index,item) {
            var pp =   $(item).children().find(".price").html();
            pp = pp.replace("￥","");
            suitsSum += parseInt(pp)
        });
    }else {
        suitsSum = 0;
    }
    sum = price + suitsSum;
    $('.variant-actions .curent-price').html("￥"+sum);
    $('.variant-actions .curent-tips .tips').html("￥"+sum/100);
    $('.button_stick_bar .price').html("￥"+(sum));

    return sum;
}

/*开始选购按钮 -跳转添加购物车*/
$('.btn-pay').click(function () {
    var price = $('.product-suit-list .chose-package').children().find(".price").html();
    var suits = $('.product-fittings .chose-package').children().find(".price").html();
    if (!price){
        alert('请选择套餐');
        return ;
    }
    if (!suits){
        alert('请选择配件');
        return ;
    }
    // var remove = $('.main').detach();
    var goods = {
        title:($('#product-title').html()),
        bill:sum
    };
    goods = JSON.stringify(goods);

    setCookie('good',goods,7);
    var newWindow = window.open('./goods-add_to_shoppingCartl.html','_self');
    return sum;
});


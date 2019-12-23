
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
    console.log($(this));
    $('.bigImgStyle').remove();
});

var ckechipt = $('.product-suit-list .product-suit-item input');
/*选择套装*/


    if ($('#product-suit-002').is(":checked")){
        $('#product-suit-001').prop("checked",false);
    } else  if ($('#product-suit-001').is(":checked")){
            $('#product-suit-002').prop("checked",false);
    }



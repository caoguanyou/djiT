
$('.shops__header').load('./shop-header.html');

$('.shops-footer').load('./shop-footer.html');

var code = location.href.split("?")[1];

ajax({"data":code},function (data) {
    console.log(data['product_title']);

    $('.style__slider-container .img-responsive').prop('src',data['cover_image']).prop('title',data['product_title']);
    // $('.style__paginations .smallImg').prop('src',data['cover_image']).prop('title',data['product_title']);

    var _html = `
<div class="info-section product-title1 clearfix">
    <h2 class="product-title" id="product-title">${data['product_title']}</h2>
    <p class="more"><a href="#" class="a-click" title=""mavic-mini-charging-base"">产品概览</a><i class="icon">&gt;</i></p>
</div>
<!--商品-->
<div class="info-section">
    <!--套装-->
  <div class="style__sections1">
      <div class="product-title product-title2 clearfix">
          <h3 class="style__title">选择套装</h3>
         <p class="more"> <a href="#" class="a-click">包装清单对比</a></p>
      </div>
      <div class="product-suit-list">
          <label class="product-suit-item sytle__input_check_radio1 " for="product-suit-001">
              <div>
                  <input type="radio" name="product-suit-chose"  value="on" id="product-suit-001" class=" chose">
                  <div class="product-suit title" >${data['product_title']}</div>
                  <div class="price">￥${(data['original_price_cents']/100)}</div>
              </div>
          </label>
          <label class="product-suit-item sytle__input_check_radio1" for="product-suit-002">
             <div>
                 <input type="radio" name="product-suit-chose"  value="on" id="product-suit-002" class=" chose">
                 <div class="product-suit title" >${data['product_title']}</div>
                 <div class="price">￥${(data['original_price_cents']/100)}</div>
             </div>
          </label>
      </div>
  </div>
    <!--配件-->
    <div class="style__sections1 row-num">
        <div class="input-group numbersgroup text-center">
            <span class="input-group-addon sub-btn numbers-btn">-</span>
            <input type="text" aria-label=" " class="form-control numbers" value="1" data-toggle=" " data-placement="top"
                   data-content="请输入大于0的正整数">
            <span class="input-group-addon add-btn  numbers-btn">+</span>
        </div>
    </div>
  <div class="style__sections1 style__sections-fittings">
      <div class="product-title product-title3 clearfix"><h3 class="style__title">必选配件</h3> </div>
      <div class="product-fittings">
          <label class="product-fittings-item sytle__input_check_radio1 " for="product-fittings-001">
              <div>
                  <input type="checkbox" name="product-fittings-chose"  value="on" id="product-fittings-001" class=" chose">
                  <div class="product-fittings title" >
                      <div class="imgs">
                          <img src="//product4.djicdn.com/uploads/spu/covers/30783/small_8585ef37-707f-46a1-9559-008fe498a05c.png" alt="Cover">
                      </div>
                      <span>闪迪 microSD卡 32GB</span>
                  </div>
                  <div class="price">￥179</div>
              </div>
          </label>
          <label class="product-fittings-item sytle__input_check_radio1 " for="product-fittings-002">
              <div>
                  <input type="checkbox" name="product-fittings-chose"  value="on" id="product-fittings-002" class=" chose">
                  <div class="product-fittings title" >
                      <div class="imgs">
                          <img src="//product4.djicdn.com/uploads/spu/covers/30783/small_8585ef37-707f-46a1-9559-008fe498a05c.png" alt="Cover">
                      </div>
                      <span>闪迪 microSD卡 64GB</span>
                  </div>
                  <div class="price">￥199</div>
              </div>
          </label>
          <label class="product-fittings-item sytle__input_check_radio1 " for="product-fittings-003">
              <div>
                  <input type="checkbox" name="product-fittings-chose"  value="on" id="product-fittings-003" class=" chose">
                  <div class="product-fittings title" >
                      <div class="imgs">
                          <img src="//product1.djicdn.com/uploads/spu/cover/38f1d184f656706bec2f5a3dc81a4ccb@small.png" alt="Cover">                                          </div>
                      <span>御 Mini 机身创作套件</span>
                  </div>
                  <div class="price">￥1233</div>
              </div>
          </label>
      </div>
  </div>
</div>
`;


    $('.info-container-product').html("").append(_html);

});


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
// var chose = $('.product-suit-list .chose');
// chose.click(function () {
//     if ($(this).is(":checked")) {
//         $(this).parent().parent().css({'border-color': '#1897f2','background':'#1897f2'})
//             .children().css({"background":"#e6f7ff"}).end()
//             .siblings().css({'border-color': '#1897f2','background':'#fff'})
//             .children().css({"background":"#fff"}).end();
//         $(this).parent().parent().addClass("chose-package").siblings().removeClass("chose-package");
//     }
//     countSun();
// });
$('.info-container').on('click','.product-suit-list .chose',function () {
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
// var check = $('.product-container .chose');

$('.info-container').on('click','.product-fittings .chose',function () {
    console.log('1')
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

// check.click(function () {
//     if ($(this).is(":checked")) {
//         $(this).parent().parent().css({'border-color': '#1897f2','background':'#1897f2'})
//             .children().css({"background":"#e6f7ff"}).end()
//         $(this).parent().parent().addClass("chose-package");
//
//     }else{
//         $(this).parent().parent().css({'border-color': '#616466','background':'#fff'})
//             .children().css({"background":"#fff"}).end();
//         $(this).parent().parent().removeClass("chose-package");
//     }
//     countSun();
// });

/*合计金额*/
var sum = 0;
function countSun() {

    var price = $('.product-suit-list .chose-package').children().find(".price").html();
    // var suits = $('.product-fittings .chose-package');
    if (price){
        price = price.replace("￥","");
        price = parseInt(price)
    }else {
        price = 0;
    }
    // var suitsSum = 0;
    // if (suits){
    //     $.each(suits,function (index,item) {
    //         var pp =   $(item).children().find(".price").html();
    //         pp = pp.replace("￥","");
    //         suitsSum += parseInt(pp)
    //     });
    // }else {
    //     suitsSum = 0;
    // }
    sum = price/* + suitsSum*/;
    $('.variant-actions .curent-price').html("￥"+sum);
    $('.variant-actions .curent-tips .tips').html("￥"+sum/100);
    $('.button_stick_bar .price').html("￥"+(sum));

    return sum;
}

/*开始选购按钮 -跳转添加购物车*/
// $('.add-to-catr').click(function () {
//     var price = $('.product-suit-list .chose-package').children().find(".price").html();
//     // var suits = $('.product-fittings .chose-package').children().find(".price").html();
//     if (!price){
//         alert('请选择套餐');
//         return ;
//     }
//     // if (!suits){
//     //     alert('请选择配件');
//     //     return ;
//     // }
//     // var remove = $('.main').detach();
//     var goods = {
//         title:($('#product-title').html()),
//         bill:sum
//     };
//     goods = JSON.stringify(goods);
//
//     setCookie('good',goods,7);
//
//
//     if (getCookie('good')){
//
//     }
//
//     // var newWindow = window.open(('./goods-add_to_shoppingCartl.html?'+code),'_self');
//     return sum;
// });
//



$('.style__sections-fittings').css('display','none');


/*ajax请求数据*/
function ajax(data,cb) {
    $.ajax({
        url:'http://10.36.135.7:3000/product',
        type: 'get',
        data: data,
        dataType: "json",
        success: cb,
        error : function (err) {
            console.log(err)
        }
    });
}













var cart =  $('.product-container');
// 数量加减
(function () {
    cart.on('click','.sub-btn',function () {
        var price = $('.product-suit-list .chose-package').children().find(".price").html();
        if (!price){
            alert('请选择套餐');
            return ;
        }
        var number =  $(this).siblings('.numbers');
        if (number.val() <= 1){
            console.log('最少需要加入加入一件');
            number.val(1);
            return false;
        }
        price = price.replace("￥","");
        number.val(parseInt(number.val()) - 1);
        // todo:nums(number);
        $('.curent-price').html('￥'+(price * number.val()))
        console.log(price)
    });
    cart.on('click','.add-btn',function () {

        var number =  $(this).siblings('.numbers');
        var price = $('.product-suit-list .chose-package').children().find(".price").html();
        price = price.replace("￥","");
        number.val(parseInt(number.val()) + 1);
        $('.curent-price').html('￥'+(price * number.val()))
        //todo: nums(number);
    });
    cart.on('input','.numbers',function () {
        var price = $('.product-suit-list .chose-package').children().find(".price").html();
        price = price.replace("￥","");

        // 初始化工具提示和弹出框
        $(function () {
            $('[data-toggle="popover"]').popover()
        });
        var regNums = /^\d+$/g;
        if (regNums.test($(this).val()) && $(this).val() > 0){
            // todo:nums($(this));
            $(this).attr('data-toggle','');
            $(this).parent().removeClass('has-error');
            $('.curent-price').html('￥'+(price * $(this).val()))

        }else {
            console.log('输入有误');
            $(this).attr('data-toggle','popover');
            $(this).parent().addClass('has-error')
            // pullData();
        }
    });

    /*开始选购按钮 -跳转添加购物车*/
    $('.add-to-catr').click(function () {
        var price = $('.product-suit-list .chose-package').children().find(".price").html();
        if (!price){
            alert('请选择套餐');
            return ;
        }

        // localStorage -> key  :  value
        //  goodcodes     : "{"abc2":3,"abc3":1}"
        var _product = code;/*商品名称*/
        var _number = Number($('.product-container .numbers').val());/*商品数量*/

            if (localStorage.getItem('goodcodes')){
            var codeJSON = JSON.parse(localStorage.getItem('goodcodes'));
            var state = [];//设置监听加入购物车的code是否匹配
            for (var ind in codeJSON){
                if (ind === _product){
                    codeJSON[ind] = _number; //检测到添加过购物车的就给数字加1
                    state.push(1);//如果匹配到给状态push1
                }else {
                    state.push(0)
                }
            }
            if (state.indexOf(1) === -1){//检测是否有1-->也就是加入购物车的是否是已经加过的，没有加过就新增一条
                codeJSON[_product] = _number;
                state.length = 0;
            }
        }else {//如果本地存储中为空，则新建一个数组保存code和数量
            var codeJSON = {};
            codeJSON[_product] = _number;
        }

        // 把获得的code添加到从本地数据缓存中拿到的数据，并且赋值回去给缓存数据
        var goodsStr = JSON.stringify(codeJSON);
        console.log(goodsStr);
        localStorage.setItem('goodcodes',goodsStr);
        var __user = getCookie('username');
        console.log(__user);
        // ajax_cart('http://10.36.135.7:3000/cart',{"act":"push","username":getCookie('username'),"data":goodsStr},function (data) {
        //     console.log('成功加入购物车');
        //     $('.showMsg').click()
        // });
        $('.showMsg').click()

    });
})();



// ajax_cart('http://10.36.135.7:3000/cart',{"act":"pull"},function (data) {
//     console.log(357+JSON.stringify(data));
// });

function ajax_cart(url,data,cb) {
    $.ajax({
        url:url,
        type: 'get',
        data: data,
        dataType: "json",
        success: cb,
        error : function (err) {
            console.log(err)
        }
    });
}
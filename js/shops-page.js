
/*加载头尾*/
$('.shops__header').load('./shop-header.html');
$('.shops-footer').load('./shop-footer.html');

/*banner轮播图*/
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
/*banner轮播图*/


/*商品列表自动创建*/
ajax({"data":"goods"},function (data) {
    console.log(data)
    goodListBuild(data)
});

/*创建商品列表*/
function goodListBuild(sectionsData) {
    var _html_sections = '';
    $.each(sectionsData["product"],function (index,item) {
        var indd = 0;
        var loop = 8;
        var _html_ul = '';
        for (let i = indd;i< (indd+loop);i++){
            _html_ul += `
<li class="product-item">
  <a href="http://10.36.135.7:3000/goods.html?${sectionsData["product_link"][i]}" class="product-link hoverStyle">
      <div class="product-img">
          <div class="cover">
              <img src="${sectionsData["cover"][i]}"
                  alt="">
          </div>
          <div class="hover">
              <img src=${sectionsData["hover"][i]}
                  alt="">
              <p class="product-des">${sectionsData["hoverText"][i]}</p>

          </div>
      </div>
      <div class="product-title">${sectionsData["smallTitle"][i]}</div>
      <div class="product-price">${sectionsData["price"][i]}</div>
  </a>
</li>
`;
        }
        indd += loop;
        _html_sections += `
<div class="sections sections1">
    <div class="wrapx1200">
        <div class="sections-header">
            <h2 class="sections-header-title">${sectionsData["product"][index]}</h2>
            <div class="sections-header-more">
                <a href="#">更多&gt;</a>
            </div>
        </div>
        <div class="sections-main">
            <div class="content-grup content-grup1">
                <a href="http://10.36.135.7:3000/goods.html?${sectionsData["product_link"][index]}" class="hoverStyle">
                    <div class="images">
                        <img src="${sectionsData["product_img"][index]}"
                            alt="">
                    </div>
                    <div class="text">
                        <div class="product-title">${sectionsData["product_title"][index]}</div>
                        <div class="product-des">
                            <p class="style__product-dese">${sectionsData["product_des"][index]}
                            </p>
                        </div>
                        <div class="product-price">${sectionsData["product_price"][index]}</div>
                    </div>
                </a>
            </div>
            <div class="content-grup content-grup2">
                <video loop autoplay muted
                    src="${sectionsData["product_veido"][index]}" poster=${sectionsData["product_veidoPoster"][index]}></video>
            </div>
        </div>
        <div class="section-container">
             <ul class="list">${_html_ul}</ul>>
        </div>
    </div>
</div>
`;
    });
    $('.shops-main').append(_html_sections);

}


/*ajax请求数据*/
function ajax(data,cb) {
    $.ajax({
        url:'http://10.36.135.7:3000/json',
        type: 'get',
        data: data,
        dataType: "json",
        success: cb,
        error : function (err) {
            console.log(err)
        }
    });
}


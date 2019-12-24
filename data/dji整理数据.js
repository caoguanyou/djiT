
var fs = require('fs');



toJson(home_banner(),'./data/home_banner.json')
   // banner
function home_banner() {
    var title = ["重塑生产力", "你也能飞", "大，有可为", "随手掌控，一拍即合", "竞速视界，更快更清晰", "轻装上阵，何惧挑战", "玩出名堂", "转动随心，灵感不停", "重塑生产力"]
    var product = ["机甲大师 RoboMaster S1",
        "灵眸 Osmo 口袋云台相机",
        "经纬 M200 V2 系列",
        "Jimmy Chin × Osmo Action",
        "御 Mavic Mini 航拍小飞机",
        "T20 植保无人飞机",
        "Osmo Mobile 灵眸手机云台 3",
        "DJI FPV 数字图传系统",
        "Ronin SC 如影 SC 单手持微单稳定器",
        "机甲大师 RoboMaster S1",]
    var text = ["https//www1.djicdn.com/cms_uploads/banner_logo/icon/129/95cc0f3a01bc7eaa2d3968632a088180.svg",
        "https://www1.djicdn.com/cms/uploads/7705d2c815fe67a829206f3838464cbc.svg",
        "https://www1.djicdn.com/cms/uploads/c0650a87dd2fe231b8c3a38a08fa55fc.png",
        "https://www1.djicdn.com/cms/uploads/37783133be86556bbddd2bee6fef6826.svg",
        "https://www1.djicdn.com/cms/uploads/b5f65751c5c0d49ca85a27009c83154b.svg",
        "https://www1.djicdn.com/cms/uploads/0e0afe716e079059eeff3e09e9d0d125.png",
        "https://www1.djicdn.com/cms/uploads/b7d02e38ba75a512fe05bde383412b9d.svg",
        "//www2.djicdn.com/cms_uploads/banner_logo/icon/1155/39a2ba5d56dade7649190a1cc7e5088b.svg",
        "//www1.djicdn.com/cms_uploads/banner_logo/icon/129/95cc0f3a01bc7eaa2d3968632a088180.svg"]

    var img = ["//www1.djicdn.com/cms_uploads/banner_product/img/131/0401ccc86a1e169a14d44506490d47f1.png",
        "https://www1.djicdn.com/cms/uploads/d6c0dfa94fb2abf048409f3d735edadd.png",
        "https://www1.djicdn.com/cms/uploads/5812df4c2bdd213f425bcb78f7135917.png",
        "https://www1.djicdn.com/cms/uploads/0f966889593c6fac4c530160211b115e.png",
        "https://www1.djicdn.com/cms/uploads/7b2bf80dd0924283b574df3bd1e112e5.png",
        "https://www1.djicdn.com/cms/uploads/9bb97ba38eebbb523d99cd7842977efc.png",
        "https://www1.djicdn.com/cms/uploads/8383c3da186384a9af787671c1beae96.png",
        "//www1.djicdn.com/cms_uploads/banner_product/img/1157/c304c1edb7373ce6e75bc0065df076c8.png",
        "//www1.djicdn.com/cms_uploads/banner_product/img/131/0401ccc86a1e169a14d44506490d47f1.png"]
    var background = [
        'background-image:linear-gradient(top,#282828,#515151);background-image:-webkit-linear-gradient(top,#282828,#515151);background-image:-o-linear-gradient(top,#282828,#515151);background-image:-ms-linear-gradient(top,#282828,#515151);background-image:-moz-linear-gradient(top,#282828,#515151)"',
        'background-image:url(https://www1.djicdn.com/cms/uploads/9fe52c785a81a38675c11dd1ad8aab41.jpg)"',
        'background-image:url(https://www1.djicdn.com/cms/uploads/524884174d1225f3e713385d118a2117.jpg);background-color:#a5a5a5"',
        'background-image:linear-gradient(top,#47576d,#92a7bc);background-image:-webkit-linear-gradient(top,#47576d,#92a7bc);background-image:-o-linear-gradient(top,#47576d,#92a7bc);background-image:-ms-linear-gradient(top,#47576d,#92a7bc);background-image:-moz-linear-gradient(top,#47576d,#92a7bc)"',
        'background-image:url(https://www1.djicdn.com/cms/uploads/dc3100ba286e77fa70446641f73b06e4.png)"',
        'background-image:linear-gradient(top,#151515,#282828);background-image:-webkit-linear-gradient(top,#151515,#282828);background-image:-o-linear-gradient(top,#151515,#282828);background-image:-ms-linear-gradient(top,#151515,#282828);background-image:-moz-linear-gradient(top,#151515,#282828)"',
        'background-image:linear-gradient(top,#101013,#3b3d40);background-image:-webkit-linear-gradient(top,#101013,#3b3d40);background-image:-o-linear-gradient(top,#101013,#3b3d40);background-image:-ms-linear-gradient(top,#101013,#3b3d40);background-image:-moz-linear-gradient(top,#101013,#3b3d40)"',
        'background-image:linear-gradient(top,#16151a,#3d3d49);background-image:-webkit-linear-gradient(top,#16151a,#3d3d49);background-image:-o-linear-gradient(top,#16151a,#3d3d49);background-image:-ms-linear-gradient(top,#16151a,#3d3d49);background-image:-moz-linear-gradient(top,#16151a,#3d3d49)"',
        'background-image:url(//www1.djicdn.com/cms_uploads/banner_background/img/1153/c277c150803fe1b58e35ce05697569f4.jpg);background-color:#79a199"',
        'background-image:linear-gradient(top,#282828,#515151);background-image:-webkit-linear-gradient(top,#282828,#515151);background-image:-o-linear-gradient(top,#282828,#515151);background-image:-ms-linear-gradient(top,#282828,#515151);background-image:-moz-linear-gradient(top,#282828,#515151)"',
        'background-image:url(https://www1.djicdn.com/cms/uploads/9fe52c785a81a38675c11dd1ad8aab41.jpg)'
    ]
    var json = {
        product: product,
        title: title,
        text: text,
        img: img,
        background: background,
    }
    return json;
}


// product_banner
function product_banner() {
    product_h3 = ["天空之城 5 周年航拍大赛", "寂寞的赛车手 ©️ 诗人隆多", "同步 ©️ Andy Leclerc", "跟随 ©️ Thavy.tra", "冰与火 ©️ 行者", "乘风破浪 ©️ Shimon Perlstein", "在撒丁岛风筝冲浪 ©️ Enrico Pescantini", "雪者掠影 ©️ Oberschneider", "巅峰时刻 ©️ Oberschneider", "抓住心中所想 ©️ DJI", "逗号 ©️ Arvids Baranovs", "轨迹延时 ©️ DJI"];
    product_p = ["DJI 大疆创新、尼康和西部数据联合邀你参赛！", "点击查看更多“御”Mavic Pro拍摄的作品。", "点击查看更多“御”Mavic 2拍摄的作品。", "点击查看更多精灵 Phantom 4 Pro拍摄的作品。", "点击查看更多“御”Mavic 2拍摄的作品。", "点击查看更多精灵 Phantom 4 Pro拍摄的作品。", "点击查看更多“御”Mavic 2拍摄的作品。", "点击查看更多“御”Mavic 2拍摄的作品。", "点击查看更多“御”Mavic 2拍摄的作品。", "点击查看更多灵眸 Osmo 口袋云台相机拍摄的作品。 ", "点击查看更多精灵 Phantom 4 Advanced拍摄的作品。", "点击查看更多灵眸 Osmo 口袋云台相机拍摄的作品。"];

    product_img = ["http//www2.djicdn.com/cms_uploads/grid_root/background_image/507/ba490674660d30e9ec2c12a4ae58bf9d.jpg",
        "http//www4.djicdn.com/cms_uploads/grid_root/background_image/497/a7f4887b91842076880d8066df2de65f.jpg",
        "http//www2.djicdn.com/cms_uploads/grid_root/background_image/487/0125e5d885bf9f0127e5f31333b119db.jpg",
        "http//www1.djicdn.com/cms/uploads/fc0666c06d8fcf7d8cfad1b4b89d3fdb.jpg",
        "http//www5.djicdn.com/cms_uploads/grid_root/background_image/467/e51a682d1caa5949bbabad2bd7ca5aa7.jpg",
        "http//www4.djicdn.com/cms_uploads/grid_root/background_image/422/0de76e198386df7fa5bb7ad5e83da368.jpg",
        "http//www3.djicdn.com/cms_uploads/grid_root/background_image/280/29c0e33fa26cb32b50ac9ef7c2c4b4e3.jpg",
        "http//www3.djicdn.com/cms_uploads/grid_root/background_image/423/64669ea3a1990f1a321bec1008674448.jpg",
        "http//www1.djicdn.com/cms/uploads/ee72c0271a07452bedf8562019c8146b.jpg",
        "http//www3.djicdn.com/cms_uploads/grid_root/background_image/537/7c49e3df80c0879e88864d07e9e677b7.jpg",
        "http//www1.djicdn.com/cms/uploads/e4ccc782a6c43e83340cc052ca9f8a05.jpg",
        "http//www1.djicdn.com/cms/uploads/345f48c0e77164b6844cd2d09a7f75bd.jpg",];
    var json = {
        product_h3: product_h3,
        product_p: product_p,
        product_img: product_img
    }
    return json;
}
   
 // shop 二级菜单标题ok  其他数据需要动态获取目前只有第一条的
function shops_header_menu(){
    // 二级菜单标题
    var menuSubTitle = ["“御” Mavic", "灵眸 Osmo", "“晓” Spark", "如影 Ronin", "机甲大师", "DJI FPV", "“悟” Inspire", "精灵 Phantom", "行业应用&amp;农业植保", "系统模块", "睿炽科技丨特洛", "增值服务",]
    var menuSubTxt = ["特洛 Tello",
        "特洛 Tello 畅飞套装",
        "盖世小鸡 GameSir T1d遥控器",
        "Tello 飞行电池",
        "Tello 电池管家",
        "Tello 快拆螺旋桨",
        "Tello 桨叶保护罩",
        "Tello 多彩外壳",
        "PGYTECH Tello 玩具扩展接口",
        "PGYTECH Tello 贴纸", ]
    var menu_sub_img = [
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
        "http://product1.djicdn.com/uploads/sku/covers/31505/small_93f9bb7f-b1a4-49d2-82c5-0ed851cedcae.png",]


    var json = {
        menuSubTitle: menuSubTitle,
        menuSubTxt : menuSubTxt,
        menu_sub_img: menu_sub_img
    }
    return json;
}

// shop banner三张图 每张图配两行字
function shops_banner(){
    var banner_img = [
        "http://stormsend1.djicdn.com/stormsend/uploads/d7433c16940e8bd83585a5902246c6c2.jpg",
        "http://stormsend1.djicdn.com/stormsend/uploads/25ce58f74406859c57d6bf869499c921.jpg",
        "http://stormsend1.djicdn.com/stormsend/uploads/517f48816eb4f84d4af1f31707097219.jpg",];

    // 第一张空白
    var banner_txt = [
        "",
        "",
        "航拍小飞机",
        "你也能飞",
        "灵眸手机云台",
        "随手掌控，一拍即合",
    ]

    json = {
        banner_img: banner_img,
        banner_txt: banner_txt 
    }
return json;

}













// 方法把数据转换成json,传入对象和导出的目录文件名
function toJson(arr, way) {
    var json = {};
        for (var key in arr) {
            json[key] = arr[key];
        }
    
    json = JSON.stringify(json);
   
    var reg1 = /\{|\}|\],|\]|",|:\[/gm;
    
    var txt = json.replace(reg1, function (val){
        return val+"\n";
    });
   

    fs.writeFile(way, txt, function (err, data) {
        if (err) {
            console.log(err);

        } else {
            console.log("成功");
        }
    })

  

}



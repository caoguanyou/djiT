
var fs = require('fs');

// banner
(function() {
    var title = ["重塑生产力", "你也能飞", "大，有可为", "随手掌控，一拍即合", "竞速视界，更快更清晰", "轻装上阵，何惧挑战", "玩出名堂", "转动随心，灵感不停", "重塑生产力"]
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

    var json = {
        title: title,
        text: text,
        img: img
    }
    json = JSON.stringify(json);
    fs.writeFile("./dji-banner-data-json.json", json, function (err, data) {
        if (err) {
            console.log(err);

        } else {
            console.log("成功");

        }
    })
    console.log(json);
})();

//product-banner
(function () {

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
    var product_banner = {
        product_h3: product_h3,
        product_p: product_p,
        product_img: product_img
    }

    product_banner = JSON.stringify(product_banner);
    console.log(product_banner);

    fs.writeFile("./dji-product_banner.json", product_banner, function (err, data) {
        if (err) {
            console.log(err);

        } else {
            console.log("成功");

        }
    })
})();
// 全局配置
let config = require.config({
    /*requiren已经在dist目录里面引用了，html也在dist里面 baseURL默认./在dist内*/
    baseUrl: './js',
    paths: {
        'cookie.min' : 'cookie.min',
        'pub-sub.min' : 'pub-sub.min',//addListener: ƒ (key,cb)  trigger: ƒ (key, msg)  //发布订阅
    },
});





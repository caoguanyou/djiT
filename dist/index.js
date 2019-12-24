let http = require('http');
let fs = require('fs');
// let mysql = require('./login');
let url = require('url');


var homePage = ["/css/plugins-f56e3a2542.css",
    "/css/home-page.min.css",
    "/images/product-container-right1.jpg",
    "/js/require.2.1.9.min.js",
    "/js/plugins-4399b3999e.js",
    "/js/home-page.min.js",
    "/images/product-container-left3.png",
    "/images/product-container-right2.jpg",
    "/images/logo-gray.png",
    "/images/youku.png",
    "/images/wechat.png",
    "/images/weibo.png",
    "/images/product-container-right3.jpg",
    "/js/require.2.1.9.min.js",
    "/js/plugins-4399b3999e.js",
    "/js/home-page.min.js",
];
var _houzui = {
    ".css" : "text/css",
    ".jpg" : "image/jpeg",
    ".png" : "image/png",
    ".js" : "text/javascript",
    ".mp4" : "video/mpeg4",
    '.svg' :'text/xml',
};

var servise = http.createServer(function (req,res) {

    /*访问的路径被存入文件*/
    fs.appendFile('./data/route.txt',(req.url+'\r'),'utf8',function () {
        // console.log(req.url);
        return;
    });
    if (req.url === '/'){
        fs.readFile('./home-page.html','utf8',function (err,data){
            if (!err) {
                res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
                res.end(data);
            }
        });
    }
    res.writeHead(200,{'Content-type':'application/json;charset=utf-8'});
    if (req.url === '/favicon.ico'){
        return ;
    }
    for (var i = 0;i < homePage.length;i++){
        if (req.url === homePage[i]){
            var houzhui = "";
            var reg2 = /\.\w+$/g;
            req.url.replace(reg2,function(val){
                houzhui = val;
            });
            fs.readFile(("."+homePage[i]),'utf8',function (err,data){
                if (!err) {
                    res.writeHead(200,{'Content-type':'text/'+_houzui[houzhui]+';charset=utf-8'});
                    res.end(data);
                }else {
                    res.writeHead(404,{'Content-type':'text/plain;charset=utf-8'});
                    res.end('抱歉，解析失败！');
                }
            });
        }
    }

    // } else {
    //     res.writeHead(404,{'Content-type':'text/plain;charset=utf-8'});
    //     // res.end('抱歉，找不到你想要的资源！');
    //     res.end();
    // }

    // else if (req.url == '/homecss'){
    //     fs.readFile('./css/home-page.min.css','utf8',function (err,data){
    //         if (!err) {
    //             res.writeHead(200,{'Content-type':'text/css;charset=utf-8'});
    //             res.end(data);
    //         }
    //     });
    // }
    // else if (req.url == '/js/home-page.min.js'){
    //     fs.readFile('./js/home-page.min.js','utf8',function (err,data){
    //         if (!err) {
    //             res.writeHead(200,{'Content-type':'text/javascript;charset=utf-8'});
    //             res.end(data);
    //         }
    //     });
    // }


});


servise.listen(9999,'127.0.0.1',function () {//监听9999端口
    console.log('服务启动，请访问http://127.0.0.1:9999')
});


var fsRead = function (url,res) {
    fs.readFile(('.'+url),'utf8',function (err,data){
        if (!err) {
            res.writeHead(200,{'Content-type':'text/css;charset=utf-8'});
            res.end(data);
        }
    });
};
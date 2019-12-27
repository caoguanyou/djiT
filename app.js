//  app.js 首页
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/index'); //  引入路由

/* 配置资源目录为dist */
app.use(express.static('./dist'));

app.use(bodyParser.urlencoded({
    extends: true
}));

//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//  使用路由 /index 是路由指向名称
app.use(`/`,router);


//配置服务端口
var server = app.listen(3000, () => {
    const hostname = '10.36.135.7';
    const port = 3000;
    console.log(`Server running at http://${hostname}:${port}/`);
});
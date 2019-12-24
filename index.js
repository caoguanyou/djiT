let http = require('http');
let fs = require('fs');
let mysql = require('./login');
let url = require('url');
http.createServer(function (req,res) {
    console.log(req.url);
    res.writeHead(200,{'Content-type':'application/json;charset=utf-8'});
    if (req.url === '/favicon.ico'){
        return ;
    }
    if (req.url === '/'){
        fs.readFile('./index.html','utf8',function (err,data){
            if (!err) {
                res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
                res.end(data);
            }
        });
    }else if (req.url === '/jqq'){
        fs.readFile('./node_modules/jquery/dist/jquery.js','utf8',function (err,data){
            if (!err) {
                res.writeHead(200,{'Content-type':'text/javascript;charset=utf-8'});
                res.end(data);
            }
        });
    } else if (req.url.indexOf('/login') !== -1){

        //接收数据
        let option = url.parse(req.url,true).query;
        console.log(option);

        let sql =  `select * from user where username = ${option.username} and password=${option.password}`;

        mysql.query(sql,function (err,data) {
            if (err) {
                console.log('查询失败', err.massage);
            }
            if (data) {
                if (data.length > 0) {
                    res.end(JSON.stringify({ message: '登录成功', status: 1 }))
                } else {
                    res.end(JSON.stringify({ message: '用户名或密码错误', status: 0 }))
                }
                res.end('完成')
            }
            console.log('--------------------------SELECT----------------------------');
            console.log(data);
            console.log('------------------------------------------------------------\n\n');
        });
    }
    else {
        res.writeHead(404,{'Content-type':'text/plain;charset=utf-8'});
        res.end('抱歉，找不到你想要的资源！');
    }
}).listen(8888,'127.0.0.1',function () {//监听8888端口
    console.log('服务启动，请访问http://127.0.0.1:8888')
});
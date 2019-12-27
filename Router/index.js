const express = require(`express`);
const router = express.Router();
const mysql = require('mysql');
const db = require("../db/db");
const fs = require('fs');


router.use((req, res, next) => {
    console.log(`路由执行成功啦~~~`, Date.now());
    next()
});


router.get(`/`, (req, res, next) => {
    res.setHeader("Content-type", "text/html;charset=utf-8");
    res.end('连接成功<a href="http://10.36.135.7:3000/shops-page.html">请访问首页</a>')
});

/* json请求 */
router.get(`/json`, (req, res, next) => {
   console.log("json数据请求");
   console.log(req.query);
    res.writeHead(200, { "Content-Type": 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS' });
   var jsonData = '';
   try {
       if (req.query.data == 'goods') {
         
           fs.readFile('./dist/data/shops_data.json', 'utf8', (err, data) => {
               if (err) {
                   res.end('读取失败')
               } else {
                   console.log('读取成功');
                   res.write(data);//向前台返回数据str
                   res.end();

                   //    res.end(data);
               }
           })
        //    res.writeHead(200, { "Content-Type": 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS' });//可以解决跨域的请求
        //    res.writeHead(200,{"Content-Type":'application/json', 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
        //    str = fs.readFileSync('./dist/data/home_banner.json');//同步读取文件
        //    res.write(str);//向前台返回数据str
        //    res.end();


       }
       else if (req.query.data == 'home_banner') {
           fs.readFile('./dist/data/home_banner.json', 'utf8', (err, data) => {
               if (err) {
                   res.end('读取失败')
               } else {
                   console.log('读取成功');
                   res.write(data);//向前台返回数据str
                   res.end();

                   //    res.end(data);
               }
           })
       }
       else if (req.query.data == 'home_main_banner') {
           fs.readFile('./dist/data/home_main_banner.json', 'utf8', (err, data) => {
               if (err) {
                   res.end('读取失败')
               } else {
                   console.log('读取成功');
                   res.write(data);//向前台返回数据str
                   res.end();

                   //    res.end(data);
               }
           })
       }else{
           res.end("查询失败");
       }
   } catch (error) {
       next(error)//抛错,将错误携带致回调函数,往下传递
   }
});

router.get(`/register`, (req, res, next) => {
    try {
        console.log('用户注册');
        var sql = `SELECT * FROM user WHERE username=${req.query.username}`;/* 检查是否有用户名重名 */
        db.query(sql, [], function (result, fields) {
            /* 根据查询到的结果返回识别码 是否查询到同名用户 */
            if (result.length > 0) {
                var data = {
                    "err": '0',
                    "msg": "此用户名已被占用"
                }
                res.json(data)

            } else {
                try {
                    console.log('用户注册写入成功');
                    var sql = `INSERT INTO user (ID,username,password) VALUES(0,${req.query.username},${req.query.password})`;/* 写入用户信息 */
                    db.query(sql, [], function (result, fields) {
                        /* 根据查询到的结果返回识别码 */
                        var data = {
                            "err": '0',
                            "msg": "注册成功"
                        }
                        res.json(data)

                        console.log('注册成功');
                    });
                } catch (error) {
                    next(error)//抛错,将错误携带致回调函数,往下传递
                }
            }
        });
    } catch (error) {
        next(error)//抛错,将错误携带致回调函数,往下传递
    }
});

router.get(`/all_product`, (req, res, next) => {
    console.log("请求全部商品");
    console.log(req.query);
    res.writeHead(200, { "Content-Type": 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS' });
    try {
        fs.readFile('./dist/data/all.json', 'utf8', (err, data) => {
            if (err) {
                res.end('读取失败')
            } else {
                console.log('读取成功');
                res.write(data);//向前台返回数据str
                res.end();
                //    res.end(data);
            }
        })
    } catch (error) {
        next(error)//抛错,将错误携带致回调函数,往下传递
    }
});


router.get(`/login`, (req, res, next) => {
    try {
        console.log('用户登陆');
        var sql = `SELECT * FROM user WHERE username=${req.query.username} AND password=${req.query.password}`;
        db.query(sql, [], function (result, fields) {
            /* 根据查询到的结果返回识别码 */
            if (result.length > 0) {
                var data = {
                    "err":'1',
                    "msg": result
                }

                res.json(data);
                console.log('登陆成功');
            }else{
                var data = {
                    "err": '0',
                    "msg": "用户名或密码错误"
                }
                res.json(data);
                console.log('登陆失败');
            }
        });
    } catch (error) {
        next(error)//抛错,将错误携带致回调函数,往下传递
    }
});

router.get(`/cart`, (req, res, next) => {
  
    try {
        if (req.query.act == 'pull') {
            console.log('拉取购物车');
            var sql = `SELECT * FROM mycart WHERE username='${req.query.username}'`;
            db.query(sql, [], function (result, fields) {
                // response.writeHead(200, { "Content-Type": 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS' });
                // res.write((result));//向前台返回数据str
                // res.end();
                res.json(result);
                // res.json(JSON.stringify(result));
                res.end();
                console.log(result);
                
                console.log('拉取购物车成功');
            });
        }
        else if (req.query.act == 'push'){
            console.log('写入购物车');
            console.log(req.query.username);
            
            var sql = `SELECT * FROM mycart WHERE username=${req.query.username}`;
            db.query(sql, [], function (result, fields) {
                /* 根据查询到的结果返回识别码 */
                if (result.length > 0) {
                    var sqladd = `UPDATE mycart SET body='${req.query.data}' WHERE username='${req.query.username}'`;
                    db.query(sqladd, [], function (result, fields) {
                        var data = {
                            "err": '1',
                            "msg": result
                        }
                        res.json(data)
                        console.log('写入商品列表成功');

                    });
                } else {

                    var sql = `INSERT INTO mygroup SET  body='${req.query.data}',username='${req.query.username}'`;
                    db.query(sql, [], function (result, fields) {
                        var data = {
                            "err": '1',
                            "msg": result
                        }
                        res.json(data)
                        console.log('无此账号创建新账号写入商品列表成功');

                    });
                    console.log('登陆失败');
                }
            });
        }
    } catch (error) {
        next(error)//抛错,将错误携带致回调函数,往下传递
    }
});



router.get(`/forget`, (req, res, next) => {
    var data = {
        "err": '1',
        "msg": "还未配置"
    }
    res.json(data)
    console.log('找回密码功能还未配置');
    
});


module.exports = router;



// response.writeHead(200, { "Content-Type": 'text/plain;charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS' });//可以解决跨域的请求
// //response.writeHead(200,{"Content-Type":'application/json',            'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
// str = fs.readFileSync('data.txt');//同步读取文件
// response.write(str);//向前台返回数据str
// response.end();
//ok 发布-订阅模式OK  没有依赖// 观察者模式
define(function () {
    var login_register =  {
        clientList : {},//订阅列表
        // {
        //     // 登陆， act =  login——登陆
        //     // 注册，add——注册用户
        //     // 找回密码，forget--找回密码
        // }
        addListener : function (key,cb) {//添加订阅
            if(this.clientList[key]){
                this.clientList[key].push(cb);
            }else{
                this.clientList[key] = [cb];
            }
        },
        trigger : function (key, msg) {//发布消息
            if (!this.clientList[key]){
                return false ;
            }else {
                for (let  i = 0; i < this.clientList[key].length; i++){//把订阅者循环拿出来发布消息
                    this.clientList[key][i](msg);
                }
            }
        },
    };
    return login_register;
});


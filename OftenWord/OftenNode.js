//以下是基于 node框架express的代码  koa我正在了解
var express = require("express");
var app = express();

// 1 node后台获取req.body需要写入的代码如下：
// 1
app.use(express.json());   // req.body 来 获取 POST 请求 提交的 formData 数据 
app.use(express.urlencoded({ extended: false }));


// 2 node后台存储session需要写入的代码如下：
// 2 注意 此代码是基于后端框架express的
var session = require("express-session");
// 设置 session 中间件  在路由中间件之前 
app.use(session({
  secret:"keyboard cat",
  name:"appTest",
  cookie:{maxAge:60*60*1000},
  resave:false,
  saveUninitialized:true
}));


// 3 node后台设置公共的public方便访问（存放js style等各种静态文件）
// 3 此公共文件夹可以做很多事情,如方便放置公共文件直接访问,可以前后端不分离等,写ejs可以直接用里面的文件
app.use(express.static('public')); 


// 4 node后台基于基本Node加密模块写的加密解密代码)(可以写为一个模块)
// 4
var crypto = require("crypto"); // node 模块 

// 加密函数
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

// 解密 
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// daydayup   daydayup+wuhan1807
exports.aesEncrypt = aesEncrypt;   // 加密
exports.aesDecrypt = aesDecrypt;   // 解密
exports.keys = "liwei";        // 密钥 


//5





/*
*** 加密 模块 crypto  Node 

*/ 


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
const keys = "wuhan1901";
// daydayup   daydayup+wuhan1807
exports.aesEncrypt = aesEncrypt;   // 加密
exports.aesDecrypt = aesDecrypt;   // 解密
exports.keys = keys;        // 密钥 



/*
***  数据库错误  500 
**   返回结果给前端
*/ 

exports.setError = function(err,res,db){
    if(err){
        res.json({
            statusCode:500,
            msg:"数据库错误",
            err
        })
        db.close();
        throw err;
    }
}


/*
***  判断用户是否登录  500 
**   
*/ 
exports.checkIsLogin = function(req,res,callback){
    var token = req.session.token;
    if(token){
        callback();  // 书写业务逻辑 
    }else{
        res.send(`<script>alert('session已经过期,请重新登录');location.href='/login'</script>`)
    }
}

/*
***  获取解密的用户名 
**   
*/ 
exports.username = function(req){
    return aesDecrypt(req.session.token,keys)
}


exports.dateFormat = function(time){
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;

}
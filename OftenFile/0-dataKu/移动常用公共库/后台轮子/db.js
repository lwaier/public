

// 封装链接数据库 函数

const config=  {
    hostname: "localhost",
    port:27017,
    dbName:"myvuedatabase"
    //47.100.234.162
}


let {
    hostname,
    port,
    dbName 
} = config;

var CONN_DB_STR =  `mongodb://${hostname}:${port}/${dbName}`;


var {MongoClient} = require("mongodb");
// 造轮子 
exports.conn = function(callback){
    MongoClient.connect(CONN_DB_STR,(err,db)=>{
        if(err){
            callback(err,null);
            console.log("数据库错误");
        }else{
            callback(null,db);
            console.log("数据库链接成功");
        }
    })
}




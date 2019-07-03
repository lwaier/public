


var express = require("express");
var router = express.Router();
var {conn} = require("./utils/db");
var {setError,aesEncrypt,keys,aesDecrypt}  = require("./utils");
var {Movie,Good,User,Car,Liuyan} = require("./utils/schema");
var {ObjectID} = require("mongodb");
var {waterfall } = require("async");



router.get("/index",(req,res)=>{
    res.send("这是 react 项目 接口 地址 .... ")
})



module.exports = router ;


var express = require("express");

var app = express();

var hostname = "0.0.0.0";

var port = 1901;

var http = require("http");

var server = http.createServer(app);
var cookieParser = require('cookie-parser'); // 处理项目的cookies  



app.use(express.json());   // req.body 来 获取 POST 请求 提交的 formData 数据 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  // 处理 cookies 


app.use(express.static('public'));   // 设置 express 静态文件 目录 

// 处理跨域方法   CORS 处理方式 
app.all('*',function(req,res,next){
    // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next();
});



// router.get()
// app.get()
// app.post()
// app.set()
// app.use() 

var {setError,aesEncrypt ,keys} = require("./utils");


var session = require("express-session");

// 设置 session 中间件  在路由中间件之前 
app.use(session({
  secret:"keyboard cat",
  name:"appTest",
  cookie:{maxAge:60*60*1000},
  resave:false,
  saveUninitialized:true
}));

app.post("/vue/register",(req,res)=>{
    res.send("注册成功");
})

var {login} = require("./utils/index");
app.use(login);

var {checkIsLogin} = require("./utils/index");
app.use(checkIsLogin);

app.get("/",(req,res)=>{
    res.send("这是 我 所有项目的接口 服务器 地址 ")
})

app.get("/index",(req,res)=>{
    res.json({
        msg:'获取数据成功 ' + req.query.id ,
        code:200,
        type:1
    })
})

var vue = require("./vue");
app.use("/vue",vue);




server.listen(
    port,hostname,()=>{
        console.log(`my server is running at http://${hostname}:${port}`)
    }
)


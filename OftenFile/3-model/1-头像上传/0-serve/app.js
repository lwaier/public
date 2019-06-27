const Express = require('express')
const App = Express()
const Http = require('http')

const server = Http.createServer(App)

const React = require('./react.js')

App.use(Express.json());   // req.body 来 获取 POST 请求 提交的 formData 数据 
App.use(Express.urlencoded({ extended: false }));



// 处理跨域方法   CORS 处理方式 
App.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next();
});

//设置一个公共文件夹public
App.use(Express.static('public')); 

App.use('/react',React)


const serverObj = {
    port:1228,
    hostname:'0.0.0.0'
}

const {
    port,
    hostname
} = serverObj



server.listen(port,hostname,()=>{
    console.log(`my server is run at http://${hostname}:${port}`)
})



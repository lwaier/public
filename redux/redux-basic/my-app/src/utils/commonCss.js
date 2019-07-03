



//外部的 公共样式

export const css ={
    all:{
        padding:0,
        margin:0,
        listStyle:"none",
        boxSizing:"border-box",
        color:"yellow"
    }
}

export const Myevent ={
    some(){
        console.log("这个是 react 全局变量 函数 写共有函数的地方")
    }
}

export const getQuery = (search)=>{
    var url = require("url");
    return url.parse(search,true).query;
}
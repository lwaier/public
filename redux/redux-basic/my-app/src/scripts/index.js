

console.log("这个是js文件的入口")

import ReactDOM,{render} from 'react-dom'

import {IndexView} from "./views"

import React ,{Component} from 'react'

//导入store
import store from './../scripts/redux/store'

const rootEle = document.getElementById("app");


const  hotRouter = ()=>{
    render(
        <IndexView/>,
        rootEle
        )
        
   
}

hotRouter();

store.subscribe(hotRouter)
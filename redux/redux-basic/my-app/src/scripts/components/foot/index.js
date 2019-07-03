


import React, { Component } from 'react'
import "./index.scss"
import {NavLink} from "react-router-dom";
import {Badge } from "antd-mobile"
export const foots =[
    {txt:"首页",path:"/app/home",name:"home",icon:"icon-home"},
    {txt:"分类",path:"/app/classify",name:"classify",icon:"icon-goodsfill"},
    {txt:"购物车",path:"/app/car",name:"cart",icon:"icon-shop_car"},
    {txt:"我",path:"/app/mine",name:"mine",icon:"icon-minefill"}
]

export class Foot extends Component{
    state = {
        foots
    }
    render(){
        const {foots} =this.state
        return(
            <footer>
                {
                    foots.map((foot,i)=>{
                        return(
                            <div key={i}>
                                  <NavLink to={foot.path} activeClassName="nav-active">
                                    <i className={"iconfont icon " +foot.icon}> </i>
                                    <span> {foot.txt}</span>
                                    {i==2&&<Badge  className="hot" text="10" hot style={{ marginLeft: 12 }} />}                              
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}
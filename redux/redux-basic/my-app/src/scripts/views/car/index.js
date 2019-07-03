

import React, { Component } from 'react'
import {NavLink}from  "react-router-dom"
import { Head } from '../../components/header';
export class Car extends Component{
    render(){
        return(
            <div>
                 <Head title="购物车" show={false}/>
                <h2>购物车</h2>
            </div>
        )
    }
}
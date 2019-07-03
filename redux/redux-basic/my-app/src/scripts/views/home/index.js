import React, { Component } from 'react'
import { Head } from '../../components/header';


export class Home extends Component{
    render(){
        return(
            <div>
                <Head title="首页" show={false}/>
                <h2>主页</h2>
                
            </div>
        )
    }
}
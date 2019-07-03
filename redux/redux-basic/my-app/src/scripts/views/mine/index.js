

import React, { Component } from 'react'
import { Head } from '../../components/header';

export class Mine extends Component{
    render(){
        return(
            <div>
                  <Head title="个人中心" show={false}/>
                <h2>个人中心</h2>
            </div>
        )
    }
}
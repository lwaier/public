
import "./index.scss"
import React, { Component } from 'react';
import {Demo} from "~/components/demo"
import {Swipe} from "~/components/swipe"
export class Guide extends Component{
    render(){
        return(
            <div className="g-box">
                {/* <Demo/> */}
                <Swipe/>
            </div>
        )
    }
}
 


import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import {history} from "&"

const browseHeight = document.documentElement.clientHeight;

export class Swipe extends Component{
    state = {
        data: [
            require("@/assets/images/img1.jpg"),
            require("@/assets/images/img2.jpg"),
            require("@/assets/images/img3.jpg"),
            require("@/assets/images/img4.jpg")
            ],
        // imgHeight: 176,
      }
      componentWillMount(){
        if(localStorage.reactCount){
            localStorage.reactCount++;
            if(localStorage.reactCount>3){
                history.push("/app/home");
            }
        }else{
            localStorage.reactCount = 1;
        }
    }
      gotoApp=(index)=>{
        if(index==this.state.data.length-1){
            history.push("/app/home");
        }
    }
    render(){
        return(
          <div >

         
            <WingBlank>
                <Carousel
                // slideWidth={1.8}

                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={(index)=>this.gotoApp(index)}
                >
                {this.state.data.map((val,i) => (

                    <img
                        
                        key ={i}
                        src={val}
                        alt=""
                        style={{ width: '100%'   , verticalAlign: 'top' ,height:browseHeight+"px"}}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                ))}
                </Carousel>
            </WingBlank>
          </div>
        )
    }
}
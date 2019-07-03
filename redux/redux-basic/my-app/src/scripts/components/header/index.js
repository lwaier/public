

import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {history} from "&"


export class Head extends Component {

    search(){
      history.push("/search")
    }

    render(){
        const {title ,show} =this.props;
        return(
            <NavBar
            style={{height:90,fontSize:50}}
            mode="light"
            icon={show&&<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick ={()=>this.search()} />,
              <Icon key="1" type="ellipsis" />,
            ]}
          >{title}</NavBar>
        )
    }
}
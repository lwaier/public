




import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import React ,{Component} from 'react'

import {Guide} from "./guide"
import { App } from "./app";
import Reducer from "../redux";

export class IndexView extends Component{
    render(){
        return (
            <Router
                basename="/"
            >
                <div id="main">
                    <Route component={Layout}  />
        
                </div>
                
            </Router>
        )
    }
}



//所以路由在里面配置
 class Layout extends Component{
    render(){
        return(
            <div>
                
                <Switch>
                    <Route path="/" component ={Guide} exact/>
                    <Route path="/guide" component ={Guide}/>   
                    <Route path="/app/" component ={App} />
                    <Route path="/reducer" component ={Reducer} />
                    <Route
                    render={
                        ()=>(<Redirect to="/app/home"/>)
                    }
                    
                    />

                </Switch>

    
            </div>
        )
    }
}
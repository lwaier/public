

import React, { Component } from 'react'
import {Switch,HashRouter as Router ,Route,Redirect} from "react-router-dom"
import { Home } from '../home';
import { Car } from '../car';
import { Classify } from '../classify';
import { Mine } from '../mine';
import { Foot } from '../../components/foot';



export class App extends Component{
    render(){
        return(
            <div>
             
                <Switch>
                    <Route path="/app/home" component={Home}/>
                    <Route path="/app/car" component={Car}/>
                    <Route path="/app/classify" component={Classify}/>
                    <Route path="/app/mine" component={Mine}/>
                    {/* <Route  component={Home}/> */}
                    <Route render={
                        ()=>(<Redirect to="/app/home"/>)
                    } />

                </Switch>
                <Foot/>
            </div>
        )
    }
}
import React,{Component} from 'react'

//引入store文件
import store from './store'
import { changeNumFn, changeGoodsListFn } from './actions';
import { changeGoodsList } from './actions/actionConst';



export default class Reducer extends Component{
    render(){
        const {
            test,
            async
        } = store.getState()
        return(
            <div>
                {test.msg}
                <hr/>
                <hr/>
                {test.type}
                <hr/>
                <hr/>
                <h1 style={{fontSize:'.75rem'}}>我是redux</h1>
                <hr/>
                <button onClick={()=>{store.dispatch({type:'changeMsg'})}}>改变msg</button>
                <button onClick={()=>{store.dispatch(changeNumFn(100))}}>测试常量action的按钮</button>
                <hr/>
                <hr/>
                <hr/>
                {
                    async.goodslist.map((item,index)=>{
                        return (
                            <div key={index}>
                                <img src={item.goodimg} alt=""/>
                            </div>
                        )
                    })
                }

                <button onClick={()=>{store.dispatch(changeGoodsListFn("/vue/goodslist"))}}>点击获得异步数据</button>
            </div>
        )
    }
}
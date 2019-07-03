import { changeGoodsList } from "../actions/actionConst";

const obj = {
    goodslist:[]
}

export const async = (state=obj,action)=>{
    switch(action.type){
        case changeGoodsList:
        return {...state,goodslist:action.newGoodsList}
        break;
        default:
            return state
        break;
    }
}
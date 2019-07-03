import { changeNum } from "../actions/actionConst";

const obj={
    msg:'您好好的',
    type:1
}

export const test = (state=obj,action)=>{

    switch(action.type){
        case changeNum:
            let count = action.num
            state.type
            return {...state,type:state.type+action.num}
        break;
        case "changeMsg":
            return {...state,msg:'您一定好好的，爱您'}
        break;
        default:
            return state
        break;
    }
}
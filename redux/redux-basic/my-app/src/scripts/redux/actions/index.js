import {changeNum,changeGoodsList} from './actionConst'
import {axios} from './../../../utils/axios'

export const changeNumFn = (num)=>{
    return {
        type:changeNum,
        num
    }
}

// export const changeGoodsListFn = (url)=>{
//     return axios.get(url).then(res=>{
//         return {
//             type:changeGoodsList,
//             newGoodsList:res.data.result
//         }
//     })
    
// }

export async function changeGoodsListFn(url) {
    const res = await axios.get(url);
    return {
     type:changeGoodsList,
      newGoodsList:res.data.result
     }
}
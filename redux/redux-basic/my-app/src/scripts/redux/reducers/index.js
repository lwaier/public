import {combineReducers} from 'redux'


//引入模块化reducer test
import {test} from './test'
import {async} from './asyncs'

const reducer = combineReducers({
    test,
    async
})

export default reducer


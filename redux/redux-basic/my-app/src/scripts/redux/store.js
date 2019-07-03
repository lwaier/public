import {createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise'

//引入reducer
import reducer from './reducers/index'

const store = createStore(reducer,applyMiddleware(thunk,promise))

//导出store
export default store
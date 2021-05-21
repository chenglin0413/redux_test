/*
本文件專門用於export 一個store對象，整個應用只有一個store對象
*/


//引入createStore, 專門用於創建redux中最為核心的redux對象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入為Count組件服務的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//引入redux-thunk 用於支持異步action
import thunk from 'redux-thunk'

//彙總所有的reducer，變為一個reducer的集合
const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer,
}) 
//export store
export default  createStore(allReducer,applyMiddleware(thunk))



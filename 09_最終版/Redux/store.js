/*
本文件專門用於export 一個store對象，整個應用只有一個store對象
*/

//引入createStore, 專門用於創建redux中最為核心的redux對象
import {createStore,applyMiddleware} from 'redux'
//引入彙總的allReducer
import reducer from './reducers'
//引入redux-thunk 用於支持異步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import{composeWithDevTools} from 'redux-devtools-extension'


//export store
export default  createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))



/*
本文件專門用於export 一個store對象，整個應用只有一個store對象
*/


//引入createStore, 專門用於創建redux中最為核心的redux對象
import {createStore} from 'redux'
//引入為Count組件服務的reducer
import countReducer from './count_reducers'
//export store
export default  createStore(countReducer)



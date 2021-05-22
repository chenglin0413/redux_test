/* 
該文件用於彙總所有的reducer為一個彙總的reducer
*/
//引入combineReducers,用於彙總多個reducer
import {combineReducers} from 'redux'
//引入為Count組件服務的reducer
import count from './count'
//引入為Person組件服務的reducer
import persons from './person'

//彙總所有的reducer，變為一個reducer的集合
export default combineReducers({
    count,
    persons,
}) 

 
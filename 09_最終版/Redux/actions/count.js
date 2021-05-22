/*

專門為count組件建立action對象

*/
import {INCREMENT,DECREMENT} from '../constants'
//同步action, action 的值為 Object 的一般對象
export const  increment = data=>({type:INCREMENT,data})
export const  decrement = data=>({type:DECREMENT,data})
//異步action, 就是指action的值為函數。 異步action中，一般都會調用同步 action;異步action不是必須要用的
export const  incrementAsync = (data,time) => {
    return (dispatch) => {
        setTimeout( () => {
            dispatch(increment(data))
        },time)
    }
}


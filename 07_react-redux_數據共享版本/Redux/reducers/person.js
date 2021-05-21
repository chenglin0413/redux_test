import {ADD_PERSON} from '../constants'

//初始化人的列表
const initState =[{id:'001',name:'tom',age:18}]//初始化狀態
export default function personReducer(preState=initState,action){
    // console.log('personReducer@#@#')
    const {type,data } = action
    switch (type){
        case ADD_PERSON://若是添加一個人，
            return [data,...preState]
        default :
            return preState
    }
}
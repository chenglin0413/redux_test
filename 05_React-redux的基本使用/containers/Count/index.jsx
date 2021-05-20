//引入Count的UI組件
import CountUI from '../../components/Count'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction} from '../../Redux/count_action'
//引入connect用於連接UI組件與Redux
import {connect} from 'react-redux'

/*
1. mapStateToProps函數返回是一個對象
2. 返回對象中的key就作為傳遞給UI組件props的key,value就作為傳遞給UI
組件的props的value
3. mapStateToProps用於傳遞狀態
*/
function mapStateToProps (state){
    return {count:state}
}
/*
1. mapDispatchToProps函數返回是一個對象
2. 返回對象中的key就作為傳遞給UI組件props的key,value就作為傳遞給UI
組件的props的value
3. mapDispatchToProps用於傳遞操作狀態的方法
*/
function mapDispatchToProps (dispatch){
    return {
        jia:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
    }
}
//使用connect()()創建並暴露一個Count的容器組件
export default  connect(mapStateToProps,mapDispatchToProps)(CountUI)



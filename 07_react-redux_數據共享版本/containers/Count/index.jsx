
import React, { Component } from 'react'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction} from '../../Redux/actions/count'
//引入connect用於連接UI組件與Redux
import {connect} from 'react-redux'
//定義UI組件
class Count extends Component {
    state = { car:'奔馳63' }

    //加法
    increment =()=>{
        const {value} = this.selectNumber //選中的數字
        this.props.jia(value*1);
    }
    //剪法
    decrement =()=>{
        const {value} = this.selectNumber //選中的數字
        this.props.jian(value*1);
    }
    //奇數再加
    incrementIfOdd =()=>{
        const {value} = this.selectNumber //選中的數字
        if(this.props.count % 2 !==0){
            this.props.jia(value*1);
        }
    }
    //異步加
    incrementAsync =()=>{
        const {value} = this.selectNumber //選中的數字
        this.props.jiaAsync(value*1,500);
    }

    render() {
        // console.log('ui組件接受到的props是',this.props);
        return (
            <div>
                <h2>我是Count組件,下方組件總人數為{this.props.renShu}</h2>
                <h4>當前的和為: {this.props.count}</h4>
                <select ref={c => this.selectNumber =c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>當前求和為奇數再加</button>&nbsp;
                <button onClick={this.incrementAsync}>異步加</button>
            </div>
        )
    }
}

//使用connect()()創建並暴露一個Count的容器組件
export default  connect(
    state=> ({count:state.he,renShu:state.rens.length}),

    //mapDispatchToProps的簡寫
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
    )(Count)



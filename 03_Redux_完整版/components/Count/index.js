import React, { Component } from 'react'
//引入store,用於取得redux中的保存狀態
import store from '../../Redux/store'
//引入actionCreator,專門用於創建action對象
import {createDecrementAction,createIncrementAction} from '../../Redux/count_action'
export default class Count extends Component {
    state = { car:'奔馳63' }

    // componentDidMount(){
    //     // 檢測render中狀態的變化，只要變化，就調用render
    //         store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    //加法
    increment =()=>{
        const {value} = this.selectNumber //選中的數字
        store.dispatch(createIncrementAction(value*1))
    }
    //剪法
    decrement =()=>{
        const {value} = this.selectNumber //選中的數字
        store.dispatch(createDecrementAction(value*1))
    }
    //奇數再加
    incrementIfOdd =()=>{
        const count = store.getState()
        const {value} = this.selectNumber //選中的數字
        if(count%2!==0){
            store.dispatch(createIncrementAction(value*1))
        };
    }
    //異步加
    incrementAsync =()=>{
        const {value} = this.selectNumber //選中的數字
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value*1))
        },500)
    }

    render() {
        return (
            <div>
                <h1>當前的和為: {store.getState()}</h1>
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

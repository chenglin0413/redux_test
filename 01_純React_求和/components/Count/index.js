import React, { Component } from 'react'

export default class Count extends Component {
    state = { count:0 }

    //加法
    increment =()=>{
        const {value} = this.selectNumber //選中的數字
        const {count} = this.state
        this.setState({count:count+value*1})//*1強制類型轉換為數字
    }
    //減法
    decrement =()=>{
        const {value} = this.selectNumber //選中的數字
        const {count} = this.state
        this.setState({count:count-value*1})//*1強制類型轉換為數字
    }
    //奇數再加
    incrementIfOdd =()=>{
        const {count} = this.state
        const {value} = this.selectNumber //選中的數字
        if(count%2!==0){
            this.setState({count:count+value*1})//*1強制類型轉換為數字
        };
    }
    //異步加
    incrementAsync =()=>{
        const {count} = this.state
        const {value} = this.selectNumber //選中的數字
        setTimeout(()=>{
            this.setState({count:count+value*1})
        },500)
    }

    render() {
        const {count} =this.state
        return (
            <div>
                <h1>當前的和為: {count}</h1>
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

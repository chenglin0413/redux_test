import React, { Component } from 'react'

export default class Count extends Component {
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
                <h1>當前的和為: {this.props.count}</h1>
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

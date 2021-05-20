import React, { Component } from 'react'
import Count from './containers/Count';
import store from './Redux/store';
export default class App extends Component {
    render() {
        return (
            <div>
            {/* 給Component組件傳遞store */}
               <Count store={store}/>
            </div>
        )
    }
}

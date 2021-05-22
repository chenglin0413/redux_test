import React, { Component } from 'react'
import Count from './containers/Count';//引入Count的容器組件
import Person from './containers/Person';//引入Person的容器組件

export default class App extends Component {
    render() {
        return (
            <div>
               <Count />
               <hr></hr>
               <Person />
            </div>
        )
    }
}

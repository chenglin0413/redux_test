import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../Redux/actions/person'
class Person extends Component {
    addPerson=()=>{
        const name =this.nameNode.value
        const age =this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.jiaYiren(personObj)
        this.nameNode.value=''
        this.ageNode.value=''

    }
    render() {
        return (
            <div>
                <h2>我是Person組件,上方組件求和為{this.props.he}</h2>
                <input ref={c=>this.nameNode=c}type="text" placeholder="輸入名字"/>
                <input ref={c=>this.ageNode=c}type="text" placeholder="輸入年齡"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                {
                    this.props.yidurens.map((p)=>{
                        return <li key={p.id}>名字{p.name}----年齡{p.age}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({yidurens:state.rens,he:state.he}),//映射狀態
    {jiaYiren:createAddPersonAction},//映射操作狀態的方法
)(Person)
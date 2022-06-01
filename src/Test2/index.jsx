import React, { Component } from 'react'
import C from './C'
import './index.css'

export default class Test2 extends Component {
    state = {
      list:[
        {
          id: 1,
          text: "Alex"
        },
        {
          id: 2,
          text: "Miyo"
        },
        {
          id: 3,
          text: "Sara"
        },
        {
          id: 4,
          text: "Cahal"
        },
        {
          id: 5,
          text: "Edite"
        }
      ]
    }
  render() {
    return (
      <div>
        <h1>02 Component&props</h1>
        <C name = {this.state.list}/>
      </div>
    )
  }
}

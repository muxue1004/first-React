import React, { Component } from 'react'

export default class C extends Component {
  render() {
    return (
      console.log(this.props.name),
      // <div>{this.props.name[0]}</div>
      <div id="C">
        <ul>
          {
            this.props.name.map(item => 
              <li key = {item.id}>Hello, {item.text}</li>
            )
          }
        </ul>
      </div>
    )
  }
}

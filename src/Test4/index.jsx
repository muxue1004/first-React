import React, { Component } from 'react'
import { message,Button } from 'antd';
import './index.css'

export default class Test4 extends Component {
  state = {
    H : false,
  }

  handleClick = (evt)=>{
    if (evt.target.innerText === 'OFF') {
      this.setState({
        H: true,
      })
    } else {
      this.setState({
        H : false,
      })
    }
  }

  handleDoubleClick = ()=> {
    message.info('你竟然会双击我，有实力！')
  }

  render() {
    return (
      <div>
        <h1 className='Click' onDoubleClick={this.handleDoubleClick}>Click me</h1>
        <Button type="primary" className={["btn", this.state.H ? "Active":null].join('')}  onClick={this.handleClick}>{this.state.H ? 'ON' : 'OFF'}</Button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './index.css'

export default class Jzq extends Component {
  state = [
    {x : []},
    {y : []}
  ]

  handleClick(){
    console.log("click",this.name)
} 

  render() {
    return (
      <>
        <h1>现在是玩家X的回合</h1>
        <div id = 'theBig'>
          <button className='theSmall' name = '1' onClick={this.handleClick}></button>
          <button className='theSmall' name = '2' onClick={this.handleClick}></button>
          <button className='theSmall' name = '3' onClick={this.handleClick}></button>
          <button className='theSmall' name = '4' onClick={this.handleClick}></button>
          <button className='theSmall' name = '5' onClick={this.handleClick}></button>
          <button className='theSmall' name = '6' onClick={this.handleClick}></button>
          <button className='theSmall' name = '7' onClick={this.handleClick}></button>
          <button className='theSmall' name = '8' onClick={this.handleClick}></button>
          <button className='theSmall' name = '9' onClick={this.handleClick}></button>
        </div>
      </>
    )
  }
}

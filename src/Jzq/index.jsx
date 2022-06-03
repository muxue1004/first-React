import React, { Component } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.min.css';
import './index.css'

export default class Jzq extends Component {
  state = {
    turn : 1,
    x : [],
    y : [],
    list : [1,1,1,1,1,1,1,1,1],
    Victory : false,
    lines : [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }

  handleClick = (e) => {
    if (this.state.turn === 1) {
      this.setState ({
        x : [
          ...this.state.x,
          Number(e.target.name)
        ],
        turn : 0
      })
      e.target.innerHTML = 'X'
      e.target.setAttribute("disabled", "disabled")
    } else {
      this.setState ({
        y : [
          ...this.state.y,
          Number(e.target.name)
        ],
        turn : 1
      })
      e.target.innerHTML = 'O'
      e.target.setAttribute("disabled", "disabled")
    }
  }

  componentDidUpdate() {
    let t = []
    if (this.state.turn === 1){
      t = this.state.y
    } else if (this.state.turn === 0) {
      t = this.state.x
    }
    for (let i = 0; i < this.state.lines.length; i++){
      if (this.state.Victory === true) {
        break;
      }
      let truetimes = 0
      const [a, b, c] = this.state.lines[i];
      for (let s = 0; s < t.length; s++){
        if (t[s] === a || t[s] === b || t[s] === c){
          truetimes = truetimes + 1
          // console.log(truetimes)
          if (truetimes === 3){
            this.setState ({
              Victory : true
            })
            break;
          }
        }
      }
    }
  }

  isWinner = ()=> {
    if (this.state.Victory === true && this.state.turn === 1) {
      return <h1>O玩家获胜</h1>
    } else if (this.state.Victory === true && this.state.turn === 0) {
      return <h1>X玩家获胜</h1>
    }
  }

  thetitle = ()=> {
    if (this.state.Victory === true) {
      return <h1>比赛结束</h1>
    } else if (this.state.turn === 1) {
      return <h1>现在是X玩家的回合</h1>
    } else {
      return <h1>现在是O玩家的回合</h1>
    }
  }

  render() {
    return (
      <>
        {this.thetitle()}
        <div className = 'theBig'>
        {
          this.state.list.map((i,index) => (
            <Button key={index} className={["theSmall", this.state.Victory ? "theEnd" : null].join(' ')} name = {index} onClick={this.handleClick}> </Button>
          ))
        }
        </div>
        {this.isWinner()}
      </>
    )
  }
}

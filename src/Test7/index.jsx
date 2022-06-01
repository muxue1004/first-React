import React, { Component } from 'react'

export default class Test7 extends Component {
  state = {
    f : 0,
    c : 0,
  }

  // 转为摄氏度
  toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

  // 转为华氏度
  toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  handleChange = (e, type) => {
    if (type === 'f') {
      const C = this.toCelsius(e.target.value)
      this.setState({
        f : e.target.value,
        c : C
      })
    } else {
      const F = this.toFahrenheit(e.target.value)
      this.setState({
        f : F,
        c : e.target.value 
      })
    }
  }

  water = () => {
    if (this.state.f >= 212 || this.state.c >= 100) {
      return (
        <h1>水开了</h1>
      )
    } else {
      return (
        <h1>水没开</h1>
      )
    }
  }

  render() {
    const { f, c } = this.state
    const F = Math.floor(f * 100) / 100
    const C = Math.floor(c * 100) / 100
    return (
      <div>
        <h2>请输入华氏度</h2>
        <input type="text" value={F} onChange={e => this.handleChange(e, 'f')}/>
        <h2>请输入摄氏度</h2>
        <input type="text" value={C} onChange={e => this.handleChange(e, 'c')}/>
        {this.water()}
      </div>
    )
  }
}

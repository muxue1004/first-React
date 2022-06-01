import React, { Component } from 'react'
import { message, Radio, Space } from 'antd';
import './index.css'

export default class Test5 extends Component {
  state= {
    list: [{
      id: 1,
      quest: '下面关于微处理器的叙述中，不正确的是_______。',
      options: [
        '微处理器通常以单片集成电路制成',
        '它具有运算和控制功能，但不具备数据存储功能',
        'Intel/AMD公司是国际上研制、生产微处理器最有名的公司',
        'Pentium4是目前PC机中使用最广泛的一种微处理器',
      ],
      // 请无视此答案是否合理
      answer: 'A',
    },
    {
      id: 2,
      quest: '任何两个并发进程之间_______。',
      options: [
        '一定存在互斥关系',
        '一定存在同步关系',
        '资源静态分配策略',
        '可能存在同步或互斥关系',
      ],
      // 请无视此答案是否合理
      answer: 'D',
    }],

    value: 0,
  }

  onChange = e => {
    console.log(e.target.name)
    this.setState({
      value: e.target.value,
    });
    this.state.list.map(i => {
      if(e.target.name === i.id) {
        if (e.target.value === 1){
          e.target.value = 'A'
        }else if (e.target.value === 2) {
          e.target.value = 'B'
        }
        else if (e.target.value === 3) {
          e.target.value = 'C'
        }
        else if (e.target.value === 4) {
          e.target.value = 'D'
        }
        if(e.target.value === i.answer){
          message.success('正确')
        }else{
          message.error('错误')
        }
      }
      return ''
    })
  };

  showList () {
    return(
      this.state.list.map((i, index) =>
        <div className='quest'>
          <h1 key={i.id}>{i.id}.{i.quest}</h1>
          <Radio.Group onChange={this.onChange} name={this.state.list[index].id}>
            <Space direction='vertical'>
              {
                i.options.map((i, index) =>
                  <Radio key={index} value={index + 1}>
                    {String.fromCharCode(65 + index)}.&nbsp;&nbsp;
                    {i}
                  </Radio>
                )
              }
            </Space>
          </Radio.Group>
        </div>
      )
    )
  }

  render() {
    return (
      this.showList()
      // <div>
      //   <div className='quest'>
      //   <p>1. {this.state.list[0].quest}</p>
      //   <Radio.Group onChange={this.onChange} name={this.state.list[0].id}>
      //     <Space direction="vertical">
      //       {
      //         this.state.list[0].options.map((item, index) => {
      //           return (
      //             <Radio value={index} key={index}>{item}</Radio>
      //           )
      //         })
      //       }
      //     </Space>
      //   </Radio.Group>
      //   </div>

      //   <div className='quest'>
      //   <p>2. {this.state.list[1].quest}</p>
      //   <Radio.Group onChange={this.onChange2} name={this.state.list[1].id}>
      //     <Space direction="vertical">
      //       {
      //         this.state.list[1].options.map((item, index) => {
      //           return (
      //             <Radio value={index} key={index} name={this.state.list[1].id}>{item}</Radio>
      //           )
      //         })
      //       }
      //     </Space>
      //   </Radio.Group>
      //   </div>
      // </div>
    )
  }
}

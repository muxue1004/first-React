import { Tooltip, Row, Col, Alert } from 'antd';
import React from 'react';
import { useState } from 'react';
import './a.css';

export default function () {
  const[players,setplayers]= useState('O')
  
  function isWin(){  
    return(
      <Alert message={players + ' win!'} type='success'/>
    )
  }

  const hdC = (e) =>{
    if(players === 'X'){
      if(e.target.className === 'ant-col ant-col-8 space'){
        e.target.setAttribute("class", "ant-col ant-col-8 X")
        setplayers('O')
        isWin()
      }
    }else if(players === 'O'){
      if(e.target.className === 'ant-col ant-col-8 space'){
        e.target.setAttribute("class", "ant-col ant-col-8 O")
        setplayers('X')
        isWin()
      }
    }
    console.log(e.target.className)
    // ant-col ant-col-8 space
  }
  
  return (
  <>
    <Tooltip>
      <span>现在是{players}的回合</span>
    </Tooltip>
    <div className='map'>
      <Row>
        <Col span={8} className='space' onClick={hdC} id='1'></Col>
        <Col span={8} className='space' onClick={hdC} id='2'></Col>
        <Col span={8} className='space' onClick={hdC} id='3'></Col>
      </Row>
      <Row>
        <Col span={8} className='space' onClick={hdC} id='4'></Col>
        <Col span={8} className='space' onClick={hdC} id='5'></Col>
        <Col span={8} className='space' onClick={hdC} id='6'></Col>
      </Row>
      <Row>
        <Col span={8} className='space' onClick={hdC} id='7'></Col>
        <Col span={8} className='space' onClick={hdC} id='8'></Col>
        <Col span={8} className='space' onClick={hdC} id='9'></Col>
      </Row>
    </div>
    {isWin()}
  </>
  )
}

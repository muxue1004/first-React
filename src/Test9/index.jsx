import React, { Component } from 'react'
import { Row, Col, Layout } from 'antd';
import './index.css'

const { Header, Footer, Sider, Content } = Layout;

export default class Test9 extends Component {
  render() {
    return (
      <Layout>
      <Sider className='green-block2'>Sider</Sider>
      <Layout>
        <Header className='red-block'>Header</Header>
        <Content>
          <div>
            <Row>
              <Col span = {6}>
                <div className='green-block'>
                  green
                </div>
              </Col>
              <Col span = {6}>
                <div className='red-block'>
                  red
                </div>
              </Col>
              <Col span = {6}>
                <div className='blue-block'>
                  blue
                </div>
              </Col>
              <Col span = {6}>
                <div className='orange-block'>
                  orange
                </div>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer className='orange-block'>Footer</Footer>
      </Layout>
      </Layout>
    )
  }
}

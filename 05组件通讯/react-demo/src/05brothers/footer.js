import React, { Component } from 'react'
import eventBus from './event'

export class footer extends Component {
  // 添加事件监听,监听从header组件发过来的事件
  componentDidMount() {
    eventBus.addListener('send', this.receive)
  }
  // 处理事件监听
  receive = (a, b) => {
    console.log(a, b)
  }

  // 移除事件监听
  componentWillUnmount() {
    eventBus.removeListener('send', this.receive)
  }

  render() {
    return <div>Footer page</div>
  }
}

export default footer

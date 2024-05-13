import React, { Component } from 'react'
import eventBus from './event'

export class header extends Component {
  send = () => {
    let name = 'header'
    let arr = ['header1', 'header2', 'header3']
    // 发送事件eventBus.emit('事件名',参数)
    eventBus.emit('send', name, arr)
  }
  render() {
    return (
      <div>
        Header page
        <button onClick={this.send}>发送事件给footer组件</button>
      </div>
    )
  }
}

export default header

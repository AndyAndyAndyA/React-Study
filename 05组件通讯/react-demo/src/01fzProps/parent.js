import React, { Component } from 'react'
import Son from './son'

export class parent extends Component {
  state = {
    name: 'parent',
    msg: 'parent msg'
  }
  // 如果要让子组件改变父组件的值,就需要定义回调函数
  parentChange = data => {
    //接收到从子组件传给父组件的值之后我们就可以改变父组件的值了
    this.setState({
      msg: data
    })
  }
  render() {
    let { name, msg } = this.state
    return (
      <div>
        <h1> parent page</h1>
        <p>姓名:{name}</p>
        <p>简介:{msg}</p>
        {/* {...this.state}能将state中的值全部传过去 */}
        {/* 想要子组件改变父组件的值，就要把父组件该值的事件传给子组件 */}
        <Son {...this.state} parentChange={this.parentChange.bind(this)} />
      </div>
    )
  }
}

export default parent

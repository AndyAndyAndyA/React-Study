import React, { Component } from 'react'
import World from './world'
import MainContext from './context'

// hello组件是消费组件
export class hello extends Component {
  // 用Class.contextType挂载在class上，然后使用this.context来消费最近Context上的那个值
  // 可以在任何生命周期中访问到它，包括render函数中。（多用于类组件
  // 使用contextType接收context
  //   static contextType = MainContext
  render() {
    return (
      <div>
        hello是父亲组件--{this.context.name}
        <World />
      </div>
    )
  }
}

hello.contextType = MainContext //这行代码等同于:static contextType = MainContext

export default hello

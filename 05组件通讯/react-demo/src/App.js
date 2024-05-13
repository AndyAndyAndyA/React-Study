import React, { Component } from 'react'
// import Fzindex from './01fzProps/index'
// import Zsindex from './02zsProps/index'
// import Context from './03Context/main'
// import Button from './04生命周期/button'
// import Brother from './05brothers/index'
import PureComponent from './06组件优化/PureComponent'

export class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>下面是父子组件互相传值和props传值校验示例</h1>
        <Fzindex/> */}
        {/* <h1>下面是祖孙组件用props层层传递示例</h1>
        <Zsindex /> */}
        {/* <h1>下面是跨组件通信用context</h1>
        <Context /> */}
        {/* <h1>下面是生命周期的组件示例</h1>
        <Button /> */}
        {/* <h1>下面是兄弟组件传值示例</h1>
        <Brother /> */}
        <h1>下面是组件优化</h1>
        <PureComponent />
      </div>
    )
  }
}
export default App

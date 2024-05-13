import React, { Component } from 'react'
import Hello from './hello'
import MainContext from './context'

export class main extends Component {
  render() {
    let obj = { name: 'zs', age: 18 }
    // let arr = [1, 2, 3]
    return (
      <div>
        {/* 传值使用Provider接收value属性,传递给消费组件 */}
        <MainContext.Provider value={obj}>
          main组件是爷爷组件
          <Hello />
        </MainContext.Provider>
      </div>
    )
  }
}

export default main

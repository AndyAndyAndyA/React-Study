import React, { Component } from 'react'
import MainContext from './context'

export class world extends Component {
  render() {
    return (
      // 也可以用<MainContext.Consumer>来接收
      <MainContext.Consumer>
        {context => {
          return <div>这是一个world组件,是孙子组件{context.name}</div>
        }}
      </MainContext.Consumer>
    )
  }
}

export default world

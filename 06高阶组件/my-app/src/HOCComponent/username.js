import React, { Component } from 'react'

export default function Username(WrapComponent) {
  class NewComponent extends Component {
    state = {
      username: ''
    }

    // 在这里进行获取用户名的操作
    componentDidMount() {
      // 获取用户名
      const username = 'admin'
      this.setState({
        username
      })
    }
    render() {
      return <WrapComponent username={this.state.username} />
    }
  }
  return NewComponent
}

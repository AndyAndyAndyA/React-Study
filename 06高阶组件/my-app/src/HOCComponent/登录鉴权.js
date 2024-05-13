import React, { Component } from 'react'

// 登录组件
class Login extends Component {
  render() {
    return (
      <div>
        <h2>登录页面</h2>
      </div>
    )
  }
}

// 管理员组件
class Admin extends Component {
  render() {
    return (
      <div>
        <h2>管理员页面</h2>
      </div>
    )
  }
}

// 利用高阶组件实现登录鉴权

function AuthComponent(Component) {
  const NewComponent = props => {
    if (props.isLogin) {
      return <Component {...props} />
    } else {
      return <Login />
    }
  }
  return NewComponent
}

// 利用高阶组件
const AuthAdmin = AuthComponent(Admin)

export class Hello extends Component {
  state = {
    isLogin: false
  }
  handleChange = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  render() {
    return (
      <div>
        <AuthAdmin isLogin={this.state.isLogin} />
        <button onClick={this.handleChange}>{this.state.isLogin ? '欢迎管理员' : '请登录'}</button>
      </div>
    )
  }
}

export default Hello

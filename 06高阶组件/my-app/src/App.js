import React, { Component } from 'react'
import Login from './HOCComponent/login'
import Logout from './HOCComponent/logout'
import Register from './HOCComponent/register'
import AddProps from './HOCComponent/增强props'
import Hello from './HOCComponent/登录鉴权'

export class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Logout />
        <Register />
        <hr />
        <p>下面是增强pros</p>
        <AddProps />
        <hr />
        <p>下面是登录鉴权</p>
        <Hello />
      </div>
    )
  }
}

export default App

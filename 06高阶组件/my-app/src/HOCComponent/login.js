import React, { Component } from 'react'
import PropUsername from './username'

export class login extends Component {
  render() {
    return (
      <div>
        <h1>login</h1>
        <p>{this.props.username}登陆了</p>
      </div>
    )
  }
}

export default PropUsername(login)

import React, { Component } from 'react'
import PropUsername from './username'

export class register extends Component {
  render() {
    return (
      <div>
        <h1>register</h1>
        <p>{this.props.username}注册了</p>
      </div>
    )
  }
}

export default PropUsername(register)

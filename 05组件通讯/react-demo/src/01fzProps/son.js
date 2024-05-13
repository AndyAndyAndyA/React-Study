import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class son extends Component {
  //   state = {
  //     name: 'son',
  //     msg: 'hello son'
  //   }
  constructor(props) {
    super(props)
    this.state = {
      name: 'son',
      msg: 'hello son',
      parentMsg: props.msg
    }
  }
  handleChange = e => {
    this.setState({
      parentMsg: e.target.value
    })
    // 这里对从父组件传过来的函数进行调用
    this.props.parentChange(e.target.value)
  }
  render() {
    let { name, msg, parentMsg} = this.state
    // 接收父组件传递的属性,用别名直接在props里取值
    // this.state里面的是自己的,this.props里面的是父组件传递的
    // let { name: pName, msg: pMsg } = this.props
    return (
      <div>
        <h1>son page</h1>
        <p>姓名:{name}</p>
        <p>简介:{msg}</p>
        <p>父简介:{parentMsg}</p>
        <input type='text' defaultValue={parentMsg} onChange={this.handleChange} />
      </div>
    )
  }
}

// 使用props校验
son.propTypes = {
  name: PropTypes.string.isRequired, //isRequired表示必传
  msg: PropTypes.string
}

// 默认传值
son.defaultProps = {
  name: 'son',
  msg: 'hello son'
}
export default son

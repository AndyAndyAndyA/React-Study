import React, { Component } from 'react'

class People extends Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <p>我的名字是:{this.props.name}</p>
        <p>我的年龄是:{this.props.age}</p>
        <p>我的爱好是:{this.props.hobby}</p>
      </div>
    )
  }
}

class Boy extends Component {
  render() {
    return (
      <div>
        <h1>Boy</h1>
        <p>我的名字是:{this.props.name}</p>
        <p>我的年龄是:{this.props.age}</p>
        <p>我的爱好是:{this.props.hobby}</p>
      </div>
    )
  }
}

// 需求:给每个组件传多个props
// 用高阶组件实现
const PropsComponent = Component => {
  // 返回一个函数式组件
  const NewComponent = props => {
    return <Component {...props} age='13' hobby='扣篮' />
  }
  return NewComponent
}

const PropsPeople = PropsComponent(People)
const PropsBoy = PropsComponent(Boy)

export class AddProps extends Component {
  render() {
    return (
      <div>
        <People name='张三' age='16' hobby='游泳' />
        <Boy name='里斯' age='18' hobby='篮球' />
        {/* 通过高阶组件去增加props */}
        <PropsPeople name='小红' />
        <PropsBoy name='小明' />
      </div>
    )
  }
}

export default AddProps

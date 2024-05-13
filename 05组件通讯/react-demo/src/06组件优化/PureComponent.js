import React, { PureComponent } from 'react'

export class Root extends PureComponent {
  state = {
    num: 0
  }

  render() {
    console.log('root组件渲染了')
    return (
      <div>
        Root
        <Main />
        <Header /> 
        <Footer />
        <p>{this.state.num}</p>
        {/* 这样就只有root组件会更新 */}
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>增加1</button>
      </div>
    )
  }
}

class Main extends PureComponent {
  render() {
    console.log('main组件渲染了')
    return <div>我是main</div>
  }
}
class Header extends PureComponent {
  render() {
    console.log('header组件渲染了')
    return <div>我是header</div>
  }
}
class Footer extends PureComponent {
  render() {
    console.log('footer组件渲染了')
    return <div>我是footer</div>
  }
}
export default Root

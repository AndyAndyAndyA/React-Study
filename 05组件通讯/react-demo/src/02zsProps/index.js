import React, { Component } from 'react'
import Parent from './parent'

// 这里我们写了一个祖孙三层组件嵌套的组件内容,我们在最上面一层去给孙组件传值
export class index extends Component {
  state = {
    list: [
      { id: 1, value: 'red' },
      { id: 2, value: 'blue' },
      { id: 3, value: 'green' }
    ],
    color: 'red'
  }
  selectChange = e => {
    this.setState({
      color: e.target.value
    })
  }
  render() {
    let { list, color } = this.state
    return (
      <div>
        爷爷
        <select value={color} onChange={this.selectChange}>
          {list.map(item => (
            <option key={item.id}>{item.value}</option>
          ))}
        </select>
        {list.map(item => (
          <Parent key={item.id} value={item.value} color={color} />
        ))}
      </div>
    )
  }
}

export default index

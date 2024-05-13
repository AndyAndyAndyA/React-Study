import React, { useReducer } from 'react'

// 初始值
const initialState = { count: 0 }

// 处理函数
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 }
    case 'prep':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: 'add' })}>+1</button>
      <button onClick={() => dispatch({ type: 'prep' })}>-1</button>
    </div>
  )
}

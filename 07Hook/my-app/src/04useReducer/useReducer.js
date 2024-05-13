import React, { useReducer } from 'react'

export default function App() {
  // useReducer 第一个参数是reducer函数，第二个参数是初始值
  // reducer函数接收两个参数，第一个是state，第二个是action
  // dispatch函数用来触发action，从而更新state
  const [state, dispatch] = useReducer((state, action) => {
    if (action === 'add') {
      return state + 1
    } else if (action === 'prep') {
      return state - 1
    }
    return state
  }, 0)
  return (
    <div>
      <h2>{state}</h2>
      <button onClick={() => dispatch('add')}>+1</button>
      <button onClick={() => dispatch('prep')}>-1</button>
    </div>
  )
}

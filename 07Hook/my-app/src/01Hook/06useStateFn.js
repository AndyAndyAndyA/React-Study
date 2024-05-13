import React, { useState } from 'react'

export default function App() {
  const [state, setState] = useState(() => 100)

  return (
    <div>
      <h1>{state}</h1>
      {/* 如果新的状态值需要根据之前的state计算的话,我们可以使用函数传递给setState
      这个函数就是接收之前的state，并且返回一个新的值 */}
      <button onClick={() => setState(prev => prev + 200)}>+200</button>
    </div>
  )
}

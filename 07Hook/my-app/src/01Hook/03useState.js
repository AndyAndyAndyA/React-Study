import React, { useState } from 'react'

export default function App() {
  // 解构
  const [state, setState] = useState(0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>+1</button>
      <button onClick={() => setState(state - 1)}>-1</button>
    </div>
  )
}

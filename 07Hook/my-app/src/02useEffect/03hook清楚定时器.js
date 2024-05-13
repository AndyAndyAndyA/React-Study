import React, { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // 定时器
    const timer = setInterval(() => {
      setCount(prev => prev + 1)
    }, 1000)
    // 清除定时器
    return () => {
      clearInterval(timer)
    }
  })
  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

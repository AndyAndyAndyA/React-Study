import React, { useState } from 'react'

/* 
useState 是一个函数,调用useState函数会返回一个数组,数组中包含两个元素
第一个元素是当前状态,第二个元素是更新状态的函数
*/
// 函数式组件添加状态
export default function App() {
  // 调用这个函数
  const arr = useState(0)
  console.log(arr)
  const count = arr[0]
  const setCount = arr[1]

  return (
    <div>
      <h1>Hook</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>点击+1</button>
    </div>
  )
}

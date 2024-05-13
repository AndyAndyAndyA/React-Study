import React, { useState, useEffect } from 'react'

function Page() {
  const [age, setage] = useState(18)
  const [money, setmoney] = useState(1800)

  // useEffect(()=>{
  //   console.log('useEffect执行了')
  // },[])
  useEffect(() => {
    console.log('useEffect执行了')
  }, [age.money])
  /* 
    数组传入的是依赖项,只有数组中的状态发生了改变,才会触发useEffect执行
  */

  return (
    <div>
      <h2>Page</h2>
      <h2>{age}</h2>
      <h2>{money}</h2>
      <button onClick={() => setage(age + 1)}>年龄+1</button>
      <button onClick={() => setmoney(money + 100)}>财富+100</button>
    </div>
  )
}

export default function App() {
  const [state, setState] = useState(true)
  return (
    <div>
      <h1>{state.toString()}</h1>
      <button onClick={() => setState(!state)}>切换</button>
      {state && <Page />}
    </div>
  )
}

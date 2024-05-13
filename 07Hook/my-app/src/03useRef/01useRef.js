import React, { useRef, createRef, useEffect } from 'react'

/* 
createRef:存储DOM元素对象,current刚开始创建的时候是null
渲染完成以后,inputRef.current可以获取到对应的DOM元素

createRef:每次渲染的时候都会创建一个新的ref对象
useRef:第一次渲染的时候会创建一个对象,之后重新渲染的时候
如果发现这个对象创建过,就不会在创建新的,对性能优化好一些
*/

export default function App() {
  const inputRef = createRef()
  console.log(inputRef)

  const inputRef1 = useRef()
  console.log(inputRef1)

  // 只能在useEffect中拿到createRef
  useEffect(() => {
    console.log(inputRef)
  })

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        获取焦点
      </button>
      <br />
      <br />
      <input ref={inputRef1} type='text' />
      <button
        onClick={() => {
          inputRef1.current.focus()
        }}
      >
        获取焦点
      </button>
    </div>
  )
}

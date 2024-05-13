import React, { useState } from 'react'

export default function App() {
  const [age, setAge] = useState(18)
  const [money, setMoney] = useState(1000)
  const [friends, setFriends] = useState(['张三', '李四', '王五'])
  const [obj, setObj] = useState({
    name: '李斯丹妮',
    age: 88,
    money: 100000
  })
  return (
    <div>
      <h1>里斯同学</h1>
      <h3>今年{age}岁</h3>
      <p>他的存款:{money}</p>
      <ul>
        他的朋友:
        {friends.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      <h3>
        {obj.name}今年{obj.age}岁，存款{obj.money}
      </h3>
      <button
        onClick={() => {
          setFriends([...friends, '赵六'])
        }}
      >
        给数组添加元素
      </button>
    </div>
  )
}

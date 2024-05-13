import React from 'react'

// 创建一个Context对象,组件会从组件树中离自身最近的那个
// 匹配的Provider中读取到当前的context值
const MainContext = React.createContext()

export default MainContext
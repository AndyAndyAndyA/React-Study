import React from 'react'
import ReactDOM from 'react-dom/client'
// import Add from './01Hook/01Class累加器'
// import Add1 from './01Hook/02Hook累加器'
// import Count from './01Hook/03useState'
// import Counts from './01Hook/04多个状态'
// import Movies from './01Hook/05复杂状态'
// import Fn from './01Hook/06useStateFn'
// import Fn from './02useEffect/01useEffect'
// import Fn from './02useEffect/02清除定时器'
// import Fn from './02useEffect/03hook清楚定时器'
// import Fn from './03useRef/01useRef'
// import Fn from './04useReducer/useReducer'
import Fn from './04useReducer/02useRducer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Add />
    <hr />
    <Add1 />
    <hr />
    <Count />
    <hr />
    <Counts />
    <hr /> */}
    {/* <Movies /> */}
    <Fn />
  </React.StrictMode>
)

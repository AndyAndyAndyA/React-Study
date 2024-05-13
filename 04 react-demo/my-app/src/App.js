import React, { Component } from 'react'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>hello react</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App

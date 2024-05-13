import React, { useState } from 'react'

export default function App() {
  const [movies, setMovies] = React.useState([
    { id: 1, name: '你好李焕英', price: 40 },
    { id: 2, name: '哆啦A梦', price: 30 },
    { id: 3, name: '盗梦空间', price: 15 },
    { id: 4, name: '速度与激情', price: 30 },
    { id: 5, name: '星际穿越', price: 50 }
  ])
  function addPrice(index) {
    console.log(index)
    const moviesCopy = [...movies]
    moviesCopy[index].price += 1
    setMovies(moviesCopy)
  }
  function reducePrice(index) {
    const moviesCopy = [...movies]
    moviesCopy[index].price -= 1
    setMovies(moviesCopy)
  }
  return (
    <div>
      <h2>
        <ul>
          {movies.map((item, index) => {
            return (
              <li key={item.id}>
                <span>电影名:{item.name}</span>
                <span>价格:{item.price}元</span>
                <button onClick={() => addPrice(index)}>涨价了</button>
                <button onClick={() => reducePrice(index)}>降价了</button>
              </li>
            )
          })}
        </ul>
      </h2>
    </div>
  )
}

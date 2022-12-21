import './App.css';
import React from 'react'
import allData from './components/Data'
import Box from './components/Box'

export default function App() {

  const [squares, setSqueres] = React.useState(allData)
  function toggle(id) {
    setSqueres(previousSquares => {
   return previousSquares.map((square) => {
     return square.id === id ? {...square, on: !square.on} : square
   })
    })
  }

  const elements = squares.map(square => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      toggle={toggle}
    />
  ))
  return (
    <main>
      {elements}
    </main>
  )
}

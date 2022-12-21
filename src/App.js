import './App.css';
import React from 'react'
import allData from './components/Data'
import Box from './components/Box'

export default function App() {

  const [squeres, setSqueres] = React.useState(allData)
  function toggle(id) {
    setSqueres(previousSquers => {
      const newSqueresArr = []
      previousSquers.forEach(arr => {
        const currentSqueres = arr
        if (currentSqueres.id === id) {
          const updatedSquere = {
            ...currentSqueres,
            on: !currentSqueres.on
          }
          newSqueresArr.push(updatedSquere)
        } else {
          newSqueresArr.push(currentSqueres)
        }
      })
      return newSqueresArr
    })
  }

  const elements = squeres.map(squere => (
    <Box
      key={squere.id}
      id={squere.id}
      on={squere.on}
      toggle={toggle}
    />
  ))
  return (
    <main>
      {elements}
    </main>
  )
}

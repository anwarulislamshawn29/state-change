import './App.css';
import React from 'react'
import allData from './components/Data'
import Box from './components/Box'

export default function App() {
  const elements = allData.map(data =>(
    <Box key={data.id} on ={data.on} />
  ))
  return (
    <main>
  {elements}
    </main>
  )
}

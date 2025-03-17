import { useState } from 'react'
import './App.css'
import { Course } from './components/Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
    </>
  )
}

export default App

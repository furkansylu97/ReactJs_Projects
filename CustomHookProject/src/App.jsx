import { useState } from 'react'
import './App.css'
import  PersonalInfo  from './components/PersonalInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PersonalInfo />
    </>
  )
}

export default App

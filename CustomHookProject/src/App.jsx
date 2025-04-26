import { useState } from 'react'
import './App.css'
import { TitleOne } from './components/TitleOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TitleOne />
    </>
  )
}

export default App

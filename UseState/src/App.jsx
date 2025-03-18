import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount (count + 1);
  }

  return (
    <>
      <button onClick={ handleClick }>Add Course</button>
      <div>Course Numbers: { count }</div>
    </>
  )
}

export default App

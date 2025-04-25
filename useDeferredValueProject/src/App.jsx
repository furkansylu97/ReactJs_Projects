import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
     <input type="text" value={input} onChange={handleChange} />
    </>
  )
}

export default App

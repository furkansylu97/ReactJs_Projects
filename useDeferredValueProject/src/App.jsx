import { useState } from 'react'
import './App.css'
import { Characters } from './components/Characters';

function App() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
     <input type="text" value={input} onChange={handleChange} />
     <Characters input={input}/>
    </>
  )
}

export default App

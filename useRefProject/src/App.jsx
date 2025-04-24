import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <div className="App">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div>My name is {name}</div>
    </div>
    </>
  )
}

export default App

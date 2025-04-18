import { useState } from 'react'
import './App.css'

function App() {
  const [furkan, setFurkan] = useState(0);
  const [hattap, setHattap] = useState(0);
  return (
    <>
    <div className='App'>
      <button onClick={() => setFurkan(furkan + 1)}>Increase Furkan's vote +1</button>
      <div>Furkan vote value:  {furkan}</div>
      <button onClick={() => setHattap(hattap + 1)}>Increase Hattap's vote +1</button>
      <div>Hattap vote value: {hattap}</div>
    </div>
    </>
  )
}

export default App

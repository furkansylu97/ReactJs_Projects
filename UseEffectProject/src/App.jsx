import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [furkan, setFurkan] = useState(0);
  const [hattap, setHattap] = useState(0);

  useEffect(() => {
    console.log('It always works.');
  })

  useEffect(() => {
    console.log('It works when rendered for the first time, but does not work afterward.');
  },[])

  useEffect(() => {
    console.log('It works when it is rendered for the first time and there is a change in the Furkan value.');
  },[furkan])

  useEffect(() => {
    console.log('It works when it is rendered for the first time and there is a change in the Hattap value.');
  },[hattap])

  useEffect(() => {
    console.log('It works when it is rendered for the first time and there is a change in the Furkan or Hattap value.');
  },[furkan, hattap])

  return (
    <>
    <div className='App'>
      <div className="furkan">
        <button onClick={() => setFurkan(furkan + 1)}>Increase Furkan's vote +1</button>
        <div>Furkan vote value:  {furkan}</div>
      </div>
      <div className="hattap">
        <button onClick={() => setHattap(hattap + 1)}>Increase Hattap's vote +1</button>
        <div>Hattap vote value: {hattap}</div>
      </div>
    </div>
    </>
  )
}

export default App

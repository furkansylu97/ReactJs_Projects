import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(second);
  const renderCount = useRef(0);
  // {current:0}

  useEffect(() => {
  //  setRenderCount(( prev ) => prev + 1 ); //infinite loop
  renderCount.current = renderCount.current + 1;
  })
  

  return (
    <>
      <div className="App">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>{renderCount.current} defa render oldu</div>
    </div>
    </>
  )
}

export default App

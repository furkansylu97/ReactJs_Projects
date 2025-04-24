import { useState, useCallback } from 'react'
import './App.css'
import { Numbers } from './components/Numbers';

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback((incrementValue) => {
    return [
      number + incrementValue, 
      number + 1 + incrementValue, 
      number + 2 + incrementValue
    ];
  },[number]);

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };


  return (
    <>
      <div className='App' style={theme}>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Temayı Değiştir
        </button>
        <Numbers getItems={getItems} />
    </div>
    </>
  )
}
 
export default App

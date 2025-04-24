import { useReducer } from 'react'  
import './App.css'

function App() {
  const initialValue = 0;

  const reducer = (state, action) => {
    switch(action){
      case 'increment' : return state +1;
      case 'decrement' : return state -1;
      case 'reset' : return initialValue;
      default : return state;
    }
  }
  
  const [counter, dispatch] = useReducer(reducer, initialValue )
  return (
    <>
      <div className="App">
          <div>Number = {counter} </div>
          <button onClick={() => dispatch('increment')}>Increase</button>
          <button onClick={() => dispatch('reset')}>Reset</button>
          <button onClick={() => dispatch('decrement')}>Decrease</button>
      </div>
    </>
  )
}

export default App

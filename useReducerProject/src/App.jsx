import React, { useReducer } from 'react'  
import './App.css'
import { Calculate } from './components/Calculate';

export const NumberContext = React.createContext();

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
        <NumberContext.Provider value={{count:counter, dispatch:dispatch}}>
          <Calculate />
        </NumberContext.Provider>
      </div>
    </>
  )
}

export default App

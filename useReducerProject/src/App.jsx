import './App.css'

function App() {
  

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

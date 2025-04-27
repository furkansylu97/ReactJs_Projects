import React from 'react'
import useCounter from './useCounter'

export const Counter = () => {

    const[num, increment, reset, decrement] = useCounter();

  return (
    <div>
        <h2>Number = {num}</h2>
        <button onClick={ increment }>Increase</button>
        <button onClick={ reset }>Reset</button>
        <button onClick={ decrement }>Decrease</button>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'

export const Counter = () => {

    const [num, setNum] = useState(0)

    const increment = () => {
        setNum((prevNum) => prevNum + 1)
    }
    const reset = () => {
        setNum(0)
    }
    const decrement = () => {
        setNum((prevNum) => prevNum - 1)
    }

  return (
    <div>
        <h2>Number = {num}</h2>
        <button onClick={ increment }>Increase</button>
        <button onClick={ reset }>Reset</button>
        <button onClick={ decrement }>Decrease</button>
    </div>
  )
}

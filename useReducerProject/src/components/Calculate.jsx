import React from 'react'
import { useContext } from 'react'
import {NumberContext} from '../App'

export const Calculate = () => {

    const numberContext = useContext(NumberContext);


  return (
    <div>
          <div>Number = {numberContext.count} </div>
          <button onClick={() => numberContext.dispatch('increment')}>Increase</button>
          <button onClick={() => numberContext.dispatch('reset')}>Reset</button>
          <button onClick={() => numberContext.dispatch('decrement')}>Decrease</button>
    </div>
  )
}

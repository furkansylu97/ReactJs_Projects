import React from 'react'
import { useState } from 'react'

function useCounter() {

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

    return [num, increment, reset, decrement]

}

export default useCounter
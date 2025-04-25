import React from 'react'
import { useMemo, useDeferredValue } from 'react'

export const Characters = ({ input }) => {

    const deferredValue = useDeferredValue(input);

    const myList = useMemo(() => {
        const myArray = [];
        for (let i = 0; i < 3000; i++) {
            myArray.push(<div key={i}>{ deferredValue }</div>);     
        }
        return myArray;
    }, [deferredValue]);
  return (
    <div>
        {myList}
    </div>
  )
}

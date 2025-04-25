import React from 'react'
import { useMemo } from 'react'

export const Characters = ({ input }) => {

    const myList = useMemo(() => {
        const myArray = [];
        for (let i = 0; i < 3000; i++) {
            myArray.push(<div key={i}>{ input }</div>);     
        }
        return myArray;
    }, [input]);
  return (
    myList
  )
}

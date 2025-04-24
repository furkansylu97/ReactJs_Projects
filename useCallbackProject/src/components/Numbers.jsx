import React from 'react'
import { useState, useEffect } from 'react'

export const Numbers = ({ getItems }) => {

    useEffect(() => {
      setItems(getItems(2));
      console.log('Updating Items');
    },[getItems]);

    const [items, setItems] = useState([]);

  return items.map((item) => <div key={item}>{item}</div>);
  
}

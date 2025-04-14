import React from 'react'

export const SearchHeader = ({ search }) => {
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        search('car');
    }

  return (
    <div className='searchwrapper'>
        <form onSubmit={ handleFormSubmit }>
            <label>What are you looking for?</label>
            <input type="text" />
        </form>
    </div>
  )
}

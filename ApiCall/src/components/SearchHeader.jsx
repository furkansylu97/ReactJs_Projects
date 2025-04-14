import React from 'react'

export const SearchHeader = () => {
    
    const handleFormSubmit = ({ search }) => {
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

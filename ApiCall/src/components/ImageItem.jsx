import React from 'react'

export const ImageItem = ({ imageItemprps }) => {
  return (
    <div className='imageitemwrapper'>
        <img src={ imageItemprps.urls.small }alt={ imageItemprps.alt_description } />
    </div>
  )
}

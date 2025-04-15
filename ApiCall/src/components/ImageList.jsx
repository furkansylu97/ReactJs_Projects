import React from 'react'
import { ImageItem } from './ImageItem'

export const ImageList = ({ imagesPlaceholder }) => {
  return (
    <div className='imagewraper'>
        { imagesPlaceholder.map((image, index) => {
           return <ImageItem key={ index } imageItemprps = { image }/>
        }) }
    </div>
  )
}

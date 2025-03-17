import React from 'react'

export const Course = ({ title, description }) => {
  /*
  const title = props.title;
  const description = props.description;
  const { title, description } = props;
  */
  return (
    <>
      <div>{ title }</div>
      <div>{ description }</div>
    </>
  )
}

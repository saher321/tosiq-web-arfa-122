import React from 'react'

const Button = ({text, count}) => {
  return (
      <button className='btn'>{text} ({count})</button>
  )
}

export default Button

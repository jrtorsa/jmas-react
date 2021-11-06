import React from 'react'
import '../styles/Display.css'

const Display = ({accountNumber}) => {

  return (
    <div className='display-pin-code-result'>
      <span>{accountNumber}</span>
    </div>
  )
}

export default Display

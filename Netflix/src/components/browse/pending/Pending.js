import React from 'react'
import Spinner from '../../../assets/spinner.png'

export default function Pending() {
  return (
    <div className='pending'>
      <div className="img_container">
        <img src={Spinner} alt="Red spinning circle" />
      </div>
    </div>
  )
}

import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 px-5 py-2 m-2 rounded-lg text-nowrap'>{name}</button>
    </div>
  )
}

export default Button
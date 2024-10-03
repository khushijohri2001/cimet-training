import React from 'react'

const DeleteFromCartButton = ({onClick}) => {
  return (
    <div className='cursor-pointer rounded p-2 bg-red-400 text-gray-800 text-lg font-bold text-center' onClick={onClick}>Delete From Cart</div>
  )
}

export default DeleteFromCartButton
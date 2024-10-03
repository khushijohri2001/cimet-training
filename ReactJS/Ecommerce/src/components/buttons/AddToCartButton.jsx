import React from 'react'

const AddToCartButton = ({onClick}) => {
  return (
    <div className='cursor-pointer rounded p-2 bg-amber-400 text-gray-800 text-lg font-bold text-center' onClick={onClick}>Add To Cart</div>
  )
}

export default AddToCartButton
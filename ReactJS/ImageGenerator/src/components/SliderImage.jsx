import React from 'react'

const SliderImage = ({id, imageUrl}) => {
  return (
    <div className=''>
        <img src={imageUrl} alt="" className='h-[26rem] object-contain min-w-full w-full flex items-center justify-center transition' />
     </div>
  )
}

export default SliderImage
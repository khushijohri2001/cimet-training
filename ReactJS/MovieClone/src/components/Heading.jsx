/* eslint-disable react/prop-types */
import { useState } from 'react'
import Carousel from './Carousel'
import Toggle from './Toggle'

const Heading = ({title, data, buttons}) => {
  const [activeButton, setActiveButton] = useState(buttons.button1);
  const [activeData, setActiveData] = useState(data[0]);

  const route = () => {
      if(activeButton === "Movie"){
        return "movie"
      } else{
        return "tv"
      }
    }
  



  return (
    <div className='flex flex-col gap-4 w-[76rem] mb-8'>
        <div className='flex items-center justify-between'>
            <h4 className='text-white text-3xl'>{title}</h4>
            <Toggle buttons={buttons} activeButton={activeButton} setActiveButton={setActiveButton} setActiveData={setActiveData} data={data} />
        </div>
        <Carousel cardList={activeData} route={route()} title={title} />
    </div>
  )
}

export default Heading
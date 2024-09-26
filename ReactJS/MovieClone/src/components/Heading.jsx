/* eslint-disable react/prop-types */
import Carousel from './Carousel'
import Toggle from './Toggle'

const Heading = ({title, toggle, cardList}) => {
  return (
    <div className='flex flex-col gap-4 w-[70rem] mb-8'>
        <div className='flex items-center justify-between'>
            <h4 className='text-white text-3xl'>{title}</h4>
            <Toggle toggle={toggle} />
        </div>
        <Carousel cardList={cardList} />
    </div>
  )
}

export default Heading
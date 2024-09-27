/* eslint-disable react/prop-types */
import Carousel from './Carousel'
import Toggle from './Toggle'

const Heading = ({title, toggle, isLoading}) => {
  console.log(toggle);
  
const cardListHandler = () => {
  // isLoading && (
  //   title === "Trending" ? toggle.key2.data : toggle.key1.data 
  // )
}
  return (
    <div className='flex flex-col gap-4 w-[76rem] mb-8'>
        <div className='flex items-center justify-between'>
            <h4 className='text-white text-3xl'>{title}</h4>
            <Toggle toggle={toggle} title={title} />
        </div>
        <Carousel cardList={isLoading ? toggle.key2.data : toggle.key1.data} />
    </div>
  )
}

export default Heading
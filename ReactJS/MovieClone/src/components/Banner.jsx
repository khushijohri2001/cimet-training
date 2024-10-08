import { getImageUrl } from "../utils/constants"

const Banner = ({ imagePath }) => {

  return (
    <div style={{ backgroundImage: `url(${getImageUrl}${imagePath})` }} className="h-[40rem] w-full object-contain bg-cover bg-center text-white ">
      <div className='h-[30rem] flex flex-col gap-8 items-center justify-center'>
        <h1 className='text-6xl'>Welcome.</h1>
        <p className='text-2xl'>Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className='flex items-center'>
          <input type="text" className='h-16 w-[34rem] rounded-l-full' />
          <button className='h-16 w-56 bg-orange-500 text-2xl rounded-r-full'>Search</button>
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent to-gray-800 h-40"></div>
    </div>
  )
}

export default Banner
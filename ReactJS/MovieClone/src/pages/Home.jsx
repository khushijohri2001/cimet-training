import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner'
import Heading from '../components/Heading'

const Home = () => {
  const {imagePath, trendingDay, trendingWeek, popularMovie, popularTvShow, topRatedMovie, topRatedTvShow} = useLoaderData();
  
  
  return (
    <div className='bg-gray-800 flex flex-col gap-20 items-center'>
      <Banner imagePath={imagePath}/>
      <Heading title="Trending" data = {[trendingDay, trendingWeek]} buttons={{button1: "Day", button2: "Week"}} />
      <Heading title="Popular" data = {[popularMovie, popularTvShow]} buttons={{button1:"Movie", button2: "Tv Show"}}  />
      <Heading title="Top Rated" data={[topRatedMovie, topRatedTvShow]} buttons={{button1:"Movie", button2: "Tv Show"}} />
    </div>
  )
}

export default Home



  

import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import Trending from '../components/Trending';
import Popular from '../components/Popular';

const Home = () => {
  const {imagePath, trendingDay, trendingWeek, popularMovie, popularTvShow, topRatedMovie, topRatedTvShow} = useLoaderData();
  console.log(popularTvShow);
  
  return (
    <div className='bg-gray-800 flex flex-col gap-20 items-center'>
      <Banner imagePath={imagePath}/>
      <Trending firstData={trendingDay} secondData={trendingWeek} />
      <Popular firstData={popularMovie} secondData={popularTvShow} />
      {/* <Heading title="What's Popular" toggle={{key1:"Movie", key2: "Tv Show"}} cardList="hello"  />
      <Heading title="Trending" toggle={{key1:"Movie", key2: "Tv Show"}} cardList="hello"  /> */}
    </div>
  )
}

export default Home



  

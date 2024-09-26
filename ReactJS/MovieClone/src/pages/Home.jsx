import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner'
import Heading from '../components/Heading'
import { useEffect } from 'react';

const Home = () => {
  const {fetchBannerImage, fetchTrending} = useLoaderData();
  // console.log(fetchBannerImage());

  const getData = async () => {
    const res = await fetchTrending();
    console.log(res);
    
  }

  useEffect(() => {
    getData();
  }, [])
  
  
  
  return (
    <div className='bg-gray-800 flex flex-col gap-20 items-center'>
      {/* <Banner imagePath={imagePath}/> */}
      <Heading title="Trending" toggle={{key1:"Day", key2: "Week"}} cardList="hello"  />
      <Heading title="What's Popular" toggle={{key1:"Movie", key2: "Tv Show"}} cardList="hello"  />
      <Heading title="Trending" toggle={{key1:"Movie", key2: "Tv Show"}} cardList="hello"  />
    </div>
  )
}

export default Home
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner'
import Heading from '../components/Heading'

const Home = () => {
  const imagePath = useLoaderData();
  
  return (
    <div className='bg-gray-800 flex flex-col gap-20 items-center'>
      <Banner imagePath={imagePath}/>
      <Heading title="Trending" toggle={{key1:"Day", key2: "Week"}} cardList="hello"  />
      <Heading title="What's Popular" toggle={{key1:"Movie", key2: "Tv Show"}} cardList="hello"  />
      <Heading title="Trending" toggle={{key1:"Movie", key2: "Tv Show"}} cardList="hello"  />
    </div>
  )
}

export default Home
import React from 'react'
import Banner from '../components/Banner'
import Heading from '../components/Heading'

const Home = () => {
  return (
    <div className='bg-gray-800'>
      <Banner/>
      <Heading title="Trending" toggle={{key1:"Day", key2: "Week"}}  />
    </div>
  )
}

export default Home
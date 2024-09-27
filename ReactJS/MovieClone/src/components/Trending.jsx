import React from 'react'
import Heading from './Heading'
import { useToggle } from '../context/ToggleContext';

const Trending = ({firstData, secondData}) => {
  const {state: {isTrending}} =  useToggle();
  
    const toggle = {
        key1: {
          name: "Day",
          data: firstData
        },
        key2: {
          name: "Week",
          data: secondData
        }
    }
  return (
    <Heading title="Trending" toggle={toggle} isLoading={isTrending}  />
  )
}

export default Trending
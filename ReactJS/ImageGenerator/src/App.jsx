import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import { apiKey, unsplashApi } from './utils/constants';
import axios from "axios"

function App() {
  const [data, setData] = useState({
    query: "",
    count: 5,
    orientation: "",
    isRandom: false
  });

  const fetchImages = async () => {
    if (data.isRandom) {

      const response = await axios.get(`${unsplashApi}/photos/random`, {
        params: {
          client_id: apiKey,
          count: data.count === 0 ? 5 : data.count,
          orientation: data.orientation
        }
      });

      return response.data;

    } else {

      const response = await axios.get(`https://api.unsplash.com/search/photos?client_id=${apiKey}&per_page=30`)
      
      // (`${unsplashApi}/search/photos`, {
      //   params: {
      //     client_id: apiKey,
      //     query: data.query,
      //     per_page: data.count === 0 ? 5 : data.count,
      //     orientation: data.orientation
      //   }
      // });

      return response.data.results;

    }
  }


  return (
    <div>
      <Header  />
      <Form setData={setData} fetchImages={fetchImages} />
    </div>
  )
}

export default App

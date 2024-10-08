import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import { apiKey, unsplashApi } from './utils/constants';
import axios from "axios"
import Slider from './components/Slider';

function App() {
  const [data, setData] = useState({
    query: "",
    count: 5,
    orientation: "landscape",
    isRandom: false
  });

  const [images, setImages] = useState([])


  const fetchImages = async (formData) => {
    try {
      if (formData.isRandom) {
        const response = await axios.get(`${unsplashApi}/photos/random`, {
          params: {
            client_id: apiKey,
            count: formData.count === 0 ? 5 : formData.count,
            orientation: formData.orientation
          }
        });
        return response.data;

      } else {
        const response = await axios.get(`${unsplashApi}/search/photos`, {
          params: {
            client_id: apiKey,
            query: formData.query,
            per_page: formData.count === 0 ? 5 : formData.count,
            orientation: formData.orientation
          }
        });

        return response.data.results;
      }

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='my-10'>
      <Header />
      <Form data={data} setData={setData} fetchImages={fetchImages} setImages={setImages} />
      <Slider/>
    </div>
  )
}

export default App

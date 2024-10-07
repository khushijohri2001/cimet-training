import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import { apiKey, unsplashApi } from './utils/constants';

function App() {
  const [data, setData] = useState({
    query: "",
    count: 5,
    orientation: "",
    isRandom: false
  });

  const fetchImages = async () => {
    if (isRandom) {

      const response = await axios.get(`${unsplashApi}/photos/random`, {
        params: {
          client_id: apiKey,
          count: data.count === 0 ? 5 : data.count,
          orientation: data.orientation
        }
      });

      return response.data;

    } else {

      const response = await axios.get(`${unsplashApi}/search/photos`, {
        params: {
          client_id: apiKey,
          query: data.query,
          per_page: data.count === 0 ? 5 : data.count,
          orientation: data.orientation
        }
      });

      return response.data.results;

    }
  }


  useEffect(() => {
    // console.log(fetchImages());
    
  }, [data])


  return (
    <div>
      <Header />
      <Form setData={setData} />
    </div>
  )
}

export default App

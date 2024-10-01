import { useState } from 'react'
import './App.css'
import FlipCard from './components/FlipCard'
import { shuffleData } from './utils/helper-functions'

function App() {
  

  const totalClickHandler = () => {
    setTotalClicks((prevTotalClick) => prevTotalClick + 1)
  }

  return (
    <div className='flex flex-col items-center justify-center gap-16'>
      <div>
        <h1 className='text-4xl font-extrabold'>How good's your memory</h1>
        <p className='text-xl'>Find all pairs in least time and minimum clicks</p>
      </div>
      <div className='bg-green-700 rounded-md h-[40rem] w-[60rem] flex p-3'>
        <div className='flex flex-wrap gap-2'>
          {
            shuffleData().map((data, index) => <FlipCard key={index} data={data}  />)
          }
        </div>
        <div>
          <p className="px-3 py-2 rounded-full bg-black text-white font-extrabold text-xl">60</p>
          <div>
            <p>CLicks:</p>
            <p className="p-2 text-center rounded-full bg-red-500 text-white font-extrabold text-xl">0</p>
          </div>
          <div>
            <p>Score:</p>
            <p className="p-2 text-center rounded-full bg-red-500 text-white font-extrabold text-xl">0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

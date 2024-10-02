import { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame';

function App() {
 const [isGameOn, setIsGameOn] = useState(false);

const startGameHandler = () => {
  setIsGameOn(true)
 }

 const overGameHandler = () => {
  setIsGameOn(false)
 }

  return (
    <div className='flex flex-col items-center justify-center gap-16'>
      <div>
        <h1 className='text-4xl font-extrabold'>How good's your memory</h1>
        <p className='text-xl'>Find all pairs in least time and minimum clicks</p>
      </div>
      <div>
        {
          isGameOn ? <StartGame isGameOn={isGameOn} overGameHandler={overGameHandler} /> : <button onClick={startGameHandler}>Start Game</button>
        }
      </div>
    </div>
  )
}

export default App

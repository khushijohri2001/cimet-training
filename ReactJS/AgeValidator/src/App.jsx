import { useState } from 'react'
import './App.css'
import DobForm from './components/DobForm'
import Result from './components/Result';

function App() {
  const [isEligible, setIsEligible] = useState(false);
  const [checkingEligiblity, setCheckingEligiblity] = useState(true);

  const eligibleHandler = (checked) => {
    setCheckingEligiblity(false);
    setIsEligible(checked)
  }

  return (
   <div className='bg-gray-200 h-screen py-10'>
    {
      checkingEligiblity ? <DobForm eligibleHandler={eligibleHandler} /> : <Result isEligible={isEligible} setCheckingEligiblity={setCheckingEligiblity}/>
    }
   </div>
  )
}

export default App

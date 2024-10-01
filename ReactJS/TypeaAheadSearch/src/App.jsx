import { useState } from 'react'
import './App.css'
import { suggestionData } from './utils/suggestionData'

function App() {
  const [isSuggestion, setIsSuggestion] = useState(false)
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState("");
  const [autoSuggInput, setAutoSuggInput] = useState("")
  const [currentSuggestion, setCurrentSuggestion] = useState(suggestionData[0])

  const inputHandler = (e) => {
    const currentInput = e.target.value
    setInput(currentInput);

    if (currentInput.includes("@")) {
      setIsSuggestion(true)
      setSuggestions(suggestionData);
      suggestionHandler(currentInput);
      setAutoSuggInput(currentInput)
    } else {
      setIsSuggestion(false)
      // setAutoSuggInput(input)
    }
  }

  const suggestionHandler = (currentInput) => {
    const [prefix, suffix] = currentInput.split("@");
    const filteredSuggestions = suggestionData.filter((suggestion) => suggestion.name.toLowerCase().startsWith(suffix.toLowerCase(), suggestion));
    setSuggestions(filteredSuggestions.length > 0 && filteredSuggestions)
  }

  const clickSuggesstionHandler = (sugg) => {
    setCurrentSuggestion(sugg);
    // setInput(input.split("@")[0] + "@" + sugg.name)
    setIsSuggestion(false)
  }

  const keySuggestionHandler = (e) => {
    const currentIndex = suggestions.indexOf(currentSuggestion);

    if (e.keyCode === 40) { // Down key

      if (suggestions.length > currentIndex + 1) {
        setCurrentSuggestion(suggestions[currentIndex + 1]);
        // setAutoSuggInput(input.split("@")[0] + "@" + suggestions[currentIndex + 1].name);

      }
      // setInput(input.split("@")[0] + "@" + suggestions[currentIndex + 1].name);


    } else if (e.keyCode === 38) { // Up key
      if (currentIndex - 1 >= 0) {
        setCurrentSuggestion(suggestions[currentIndex - 1]);
      }

      // setInput(input.split("@")[0] + "@" + suggestions[currentIndex - 1].name);
      // setAutoSuggInput(input.split("@")[0] + "@" + suggestions[currentIndex - 1].name);

    } else if (e.keyCode === 13) { // Enter Key

    }
      setAutoSuggInput(input.split("@")[0] + "@" + currentSuggestion.name);
  }


  return (
    <div className='flex flex-col items-center gap-4 h-screen relative p-14'>
      <div className='flex items-center'>
        <div className='relative'>
          {isSuggestion &&
            <input className='absolute top-[2px] z-10 text-gray-500' value={autoSuggInput} disabled/>
          }
          <input 
          type="text" 
          className='border-2 border-gray-300 mr-2 w-80 focus:outline-none z-40 text-black' 
          value={input} 
          onChange={inputHandler} 
          onKeyDown={keySuggestionHandler} />
        </div>

        <button className='bg-blue-600 px-4 rounded-sm p-1 text-white border-blue-900'>Submit</button>
      </div>

      {
        isSuggestion && (
          <div className=''>
            <ul className='border-2 border-black w-[25rem] rounded-sm'>
              {
                suggestions.length > 0 ? (
                  suggestions.map((suggestion) =>
                    <li
                      key={suggestion.id}
                      className={`p-1 border-b border-gray-200 ${currentSuggestion.id === suggestion.id && "bg-blue-500"}`} onClick={() => clickSuggesstionHandler(suggestion)}
                    >
                      {suggestion.name}
                    </li>)
                ) : (
                  <li className="p-1 border-b border-gray-200">Match Not Found!</li>
                )
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default App

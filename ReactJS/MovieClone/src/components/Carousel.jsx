/* eslint-disable react/prop-types */

import { useState } from "react"
import MovieCard from "./MovieCard"

const Carousel = ({ cardList, route }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const showCardCount = 5;
  const startIndex = pageIndex * showCardCount;
  const endIndex = Math.min(startIndex + showCardCount, cardList.length);
  const currentCardsList = cardList.slice(startIndex, endIndex)

  const prevHandler = () => {
    setPageIndex((prevPageIndex) => prevPageIndex === 0 ? Math.ceil(cardList.length / showCardCount) - 1 : prevPageIndex - 1)
  }

  const nextHandler = () => {
    setPageIndex((prevPageIndex) => (prevPageIndex + 1) % Math.ceil(cardList.length / showCardCount))
  }

  return (
    <div className="flex text-white">
      <button onClick={prevHandler}>{"<"}</button>

      <div className="flex overflow-x-auto space-x-4 pb-4 m-3 mb-8 gap-6 no-scrollbar">
        {currentCardsList.map((card) => <MovieCard route={route} card={card} />)}
      </div>

      <button onClick={nextHandler}>{">"}</button>
    </div>
  )
}

export default Carousel
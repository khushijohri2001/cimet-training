/* eslint-disable react/prop-types */

import MovieCard from "./MovieCard"

const Carousel = ({cardList}) => {
  
  return (
    <div className="flex flex-wrap gap-4">
      {cardList.filter((card) => card.original_title).map((card) => <MovieCard card={card}/>)}
    </div>
  )
}

export default Carousel
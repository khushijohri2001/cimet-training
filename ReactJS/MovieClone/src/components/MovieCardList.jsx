import React from 'react'
import MovieCard from './MovieCard'

const MovieCardList = ({movies}) => {
  return (
    <div className='flex flex-wrap gap-16 justify-between'>
        {
            movies.map((movie) => <MovieCard card={movie} />)
        }
    </div>
  )
}

export default MovieCardList
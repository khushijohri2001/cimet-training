import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieCardList = ({movies, route}) => {
  return (
    <div className='flex flex-wrap gap-16 justify-between'>
        {
            movies.map((movie) => <MovieCard card={movie} route={route} />)
        }
    </div>
  )
}

export default MovieCardList
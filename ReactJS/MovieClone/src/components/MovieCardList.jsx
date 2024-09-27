import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieCardList = ({movies}) => {
  return (
    <div className='flex flex-wrap gap-16 justify-between'>
        {
            movies.map((movie) => <Link to=":id"><MovieCard card={movie} /></Link>)
        }
    </div>
  )
}

export default MovieCardList
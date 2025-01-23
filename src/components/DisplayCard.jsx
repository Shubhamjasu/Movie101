import React from 'react'

import MovieCard from './MovieCard'

const DisplayCard = (props) => {
  const { movieData, error } = props; // Destructure props for cleaner code
  if (error) {
    return <div>Error: {error}</div>; // Display error if present
  }

  if (!movieData) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className='flex flex-col items-center'>
      <p className='mt-4'>Movie101 Top 20 Movies</p>
      <div className='w-4/5 pt-4 grid grid-cols-5 gap-8'>
         {movieData.map((movie) =>  <MovieCard  className='drop-shadow-lg' movie={movie} key={movie.id}></MovieCard>)}
      </div>
    </div>
  )
}
export default DisplayCard;

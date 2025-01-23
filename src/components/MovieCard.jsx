import React from 'react'

export default function MovieCard({id, movie}) {
  return (
    <div className='border rounded-xl flex flex-col items-start '>
      <img className='h-4/5 min-w-full bg-cover rounded-t-xl' src={movie.poster} alt={`${movie.title} Movie poster`} />
    </div>
  )
}

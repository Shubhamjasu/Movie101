import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default function MovieCard({ movie, index, onDetailBtnClick}) {

  const viewDetail = () =>{
    onDetailBtnClick(movie)
  }
  
  return (
    <div className='border-2 rounded-xl flex flex-col flex-auto relative'>
      <img className='bg-cover rounded-t-xl object-fill' src={movie.poster} alt={`${movie.title} Movie poster`} />
      <div className='flex items-center'>
        <FontAwesomeIcon icon={faStar}  className='text-yellow-300 text-lg pl-2'/> 
        <div className='pt-1 px-2'>{movie.rating}</div> 
        <div className='text-slate-500 text-sm pt-1'>({movie.reviews} Reviews)</div>
      </div>
      <div className='pl-2 text-sm'>
        {`${index}. ${movie.title}`}
      </div>
      <div className='px-2 flex text-slate-500 text-sm tracking-wide'>
        <div >{movie.year}</div>
        <div className='ml-4'>{`${Math.floor(movie.runtime/60)}h ${movie.runtime%60}m`}</div>
      </div>
      <div className='flex justify-center basis-full'>
        <button className=' rounded-full w-4/5 m-2 h-10 self-end hover:border-blue-400 hover:border bg-slate-200 py-1 px-4 hover:bg-slate-200 hover:text-blue-400' onClick={viewDetail}>View details</button>
      </div>
    </div>
  )
}

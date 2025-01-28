import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar, faCircleInfo} from '@fortawesome/free-solid-svg-icons'

export default function MovieList({ movie}) {
  return (
    <div className='border-2 rounded-xl grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-5 gap-2 items-center'>
          <img className='bg-cover rounded-l-xl max-sm:rounded-t-xl max-sm:rounded-bl-none' src={movie.poster} alt={`${movie.title} Movie poster`} />
          <div className='lg:col-span-10 md:col-span-4 sm:col-span-3' >
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faStar}  className='text-yellow-300 text-lg pl-2'/> 
                <div className='pt-1 px-2'>{movie.rating}</div> 
                <div className='text-slate-500 text-sm pt-1'>({movie.reviews} Reviews)</div>
            </div>
            <div className='pl-2 text-sm'>
                {`${movie.id}. ${movie.title}`}
            </div>
            <div className='px-2 flex text-slate-500 text-sm tracking-wide'>
                <div >{movie.year}</div>
                <div className='ml-4'>{`${Math.floor(movie.runtime/60)}h ${movie.runtime%60}m`}</div>
            </div>
          </div>
          <button className='justify-self-center rounded-full w-10 h-10 max-sm:my-2 hover:border-blue-400 hover:border bg-slate-200 hover:bg-slate-200 hover:text-blue-400'><FontAwesomeIcon  icon={faCircleInfo} /></button>
        </div>
  )
}

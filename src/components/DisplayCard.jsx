import React, { useEffect } from 'react'
import { useState } from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList, faGrip} from '@fortawesome/free-solid-svg-icons'

const DisplayCard = (props) => {
  const { movieData, error, pageTitle } = props;
  const [displayType, setDisplayType] = useState('grid')

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!movieData) {
    return <div>Loading...</div>;
  }

  const toggleDisplay = (type) => {
    setDisplayType(type)
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-between max-sm:justify-center items-center mt-4 w-4/5'>
        <div  className='max-sm:hidden'></div>
        <p className=''>{pageTitle}</p>
        <div className='border rounded border-slate-800 px-2 py-1  max-sm:hidden'>
          <button className={ (displayType == 'list' ? "rounded-full text-blue-400 border-black" : '')} onClick={() => {
            toggleDisplay('list')
          }}><FontAwesomeIcon icon={faList} /></button>|
          <button className={  (displayType == 'grid' ? " rounded-full text-blue-400 border-black" : '')} onClick={() => {
            toggleDisplay('grid')
          }}><FontAwesomeIcon className='rotate-90' icon={faGrip} /></button>
        </div>
      </div>
      {displayType != "list" ?
        (<div className='w-4/5 py-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8'>
          {movieData.map((movie, index) => <MovieCard className='shadow-lg w-40 h-80' movie={movie} key={movie.id} index={index+1}></MovieCard>)}
        </div>)
        :
        (<div className='w-4/5 py-4 flex flex-col gap-6'>
          {movieData.map((movie, index) => <MovieList className='shadow-lg w-full h-60 sm:h-30' movie={movie} key={movie.id} index={index+1}></MovieList>)}
        </div>)}
    </div>
  )
}
export default DisplayCard;

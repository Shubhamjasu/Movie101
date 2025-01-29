import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faStar } from '@fortawesome/free-solid-svg-icons'

export default function MovieDetailModal({ movie, isModalOpen, onModalClose }) {
    const modalClose = () => {
        onModalClose();
    }
    const inFormat = (arrItem) => {
        return arrItem?.length ? arrItem?.map((item, index, arr) =>
            <span className='text-blue-400' key={item}>{item}{index < arr.length - 1 ? ", " : ''}</span>
        ) : ('')
    }


    return (
        <div className={`flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-slate-400 h-4/6 lg:h-auto lg:w-3/6 md:w-4/6 min-w-72 max-sm:h-5/6 max-sm:my-2 rounded-xl border-3 border-slate-200 p-8 gap-2 overflow-auto ` + `${isModalOpen ? '' : 'hidden'}`}>
            <div className='flex flex-row  max-sm:flex-col gap-4'>
                <img className='bg-cover rounded max-sm:w-full max-sm:h-44 w-28 h-28' src={movie.poster} alt={`${movie.title} Movie poster`} />
                <div className='basis-3/4'>
                    <div className='text-lg text-slate-50'>
                        {`${movie.title}`}
                    </div>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-300 text-sm' />
                        <div className='pt-1 px-2'>{movie.rating}</div>
                        <div className=' text-sm pt-1'>({movie.reviews} Reviews)</div>
                    </div>
                    <div className='font-thin text-sm'>
                        <p> Genre: {inFormat(movie.genre)}</p>
                    </div>
                    <div className='flex flex-col text-sm tracking-wide'>
                        <div >Year: {movie.year}</div>
                        <div >Duration: {`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`}</div>
                    </div>
                </div>
                <div className='fixed right-1 top-1'><FontAwesomeIcon onClick={modalClose} icon={faCircleXmark} className='text-red-400 text-lg pl-2' /></div>
            </div>
            <div className='font-thin text-sm mt-2 text-slate-300'>
                <p>{movie.plot}</p>
            </div>
            <div className='font-thin text-sm text-slate-300'>
                <p>Director: <span className='text-blue-400'>{movie.director}</span></p>
            </div>
            <div className='font-thin text-sm text-slate-300'>
                <p>Production: <span className='text-blue-400'>{movie.production}</span> </p>
            </div>
            <div className='font-thin text-sm text-slate-300'>
                <p>Actors: {inFormat(movie.actors)}</p>
            </div>
            <div className='font-thin text-sm text-slate-300'>
                <p>Box Office: <span className='text-blue-400'>{movie.boxOffice}</span> </p>
            </div>
            <div className='font-thin text-sm text-slate-300'>
                <p>Language: <span className='text-blue-400'>{movie.language}</span> </p>
            </div>
            <button className='transition delay-50 rounded-full w-4/5 m-2 mb-0 h-10 self-center hover:border-blue-800 hover:border bg-slate-600 py-1 px-4 hover:bg-slate-200 text-blue-400'>Watch trailer</button>
        </div>
    )
}

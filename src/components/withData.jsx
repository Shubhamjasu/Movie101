import React, { useState, useEffect } from 'react'
import data from '../moviesData.json'
const withData = ( WrappedComponent) => {
  return (props) => {
    const [movieData, setMovieData] = useState(null)
    const [error, setError] = useState(null)
    const { isFav, isWatchList } = props;
    const [title, setTitle] = useState('Movie101 Top 20 Movies')

    const fetchMovieData = async() =>{
      try {
        let response = data
        if(isFav){
          setTitle('My Favourite Movies')
          response = response.filter((movie)=>{
            return movie.isFav
          })
        }
        if(isWatchList){
          setTitle('My Watchlist')
          response = response.filter((movie)=>{
            return movie.isWatchList
          })
        }
        // const data = await response.json()
        setMovieData(response)

      } catch(error) {
        setError(error.message)
      }
    }
    useEffect(() => {
      fetchMovieData();
    }, [])

    return( <WrappedComponent {...props} pageTitle={title} error={error} movieData={movieData} />)
  }
}
export default withData; 

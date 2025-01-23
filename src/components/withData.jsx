import React, { useState, useEffect } from 'react'
import data from '../moviesData.json'
const withData = ( WrappedComponent) => {
  return (props) => {
    const [movieData, setMovieData] = useState(null)
    const [error, setError] = useState(null)


    const fetchMovieData = async() =>{
      try {
        const response = data
        // const data = await response.json()
        setMovieData(response)
        console.log(response, " 1")

      } catch(error) {
        setError(error.message)
      }
    }
    useEffect(() => {
      fetchMovieData();
    }, [])

    return( <WrappedComponent {...props} error={error} movieData={movieData} />)
  }
}
export default withData; 

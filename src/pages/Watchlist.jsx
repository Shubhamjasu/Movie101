import fetchMovieData from "../service/fetchMovies";
import DisplayCard from "../components/DisplayCard";
import { useEffect, useState } from "react";

export default function Watchlist() {
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let data = fetchMovieData("http://127.0.0.1:3000/api/v1/movies/watchlists");
    data.then((data) =>
      data.data.movies ? setMovieData(data.data.movies) : setError(data.error)
    );
  }, []);
  return (
    <div>
      <DisplayCard
        movieData={movieData}
        error={error}
        pageTitle={"My Watchlist"}
      ></DisplayCard>
    </div>
  );
}

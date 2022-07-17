import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieApi from '../services/moviesApi';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    movieApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <h2>{movie.original_title}</h2>
          <img src={movie.poster_path} alt="" />
        </>
      )}
    </>
  );
}

export default MovieDetailsPage;

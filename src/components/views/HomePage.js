import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesApi from '../services/moviesApi';

function HomePage() {
  const [movies, setMovies] = useState([]);

  // const url = useLocation();

  // console.log(url.pathname);

  useEffect(() => {
    moviesApi.fetchTrendMovies().then(setMovies);
  }, []);

  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
    </ul>
  );
}

export default HomePage;

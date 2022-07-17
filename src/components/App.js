import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import ErrorPage from './views/ErrorPage';
import MovieDetailsPage from './views/MovieDetailsPage';

export function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

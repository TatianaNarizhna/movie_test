import { Route, Routes, Router } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import ErrorPage from './views/ErrorPage';

export function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

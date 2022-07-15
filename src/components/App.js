import { Route, Routes, Switch } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
}

export default App;

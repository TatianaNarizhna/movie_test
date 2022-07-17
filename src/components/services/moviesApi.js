import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'a746c25728fd41f4fba1ed9293c9d732';

export function fetchTrendMovies() {
  return axios
    .get(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
}

export function fetchMovieDetails(movieId) {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
}

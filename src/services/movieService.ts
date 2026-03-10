import axios, { AxiosResponse } from 'axios';
import { Movie, TMDBResponse } from '../types/movie';

// Отримання токена з файлу .env
const TMDB_TOKEN: string = import.meta.env.VITE_TMDB_TOKEN;

const movieInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDIxNzcxZjczNTk4YzYwYjBmNmE2MjI3ZDZlODNkMyIsIm5iZiI6MTc3Mjc0MjkzMy40ODEsInN1YiI6IjY5YTllOTE1MWE1NzQxYjFkN2U3MDMzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3cNHemzN2UcnBVWt-4l1e5z9s0tR2yotDR3y_n8bfmI`,
  },
});

/**
 * Функція для пошуку фільмів за ключовим словом
 * @param query - текст пошуку
 * @param page - номер сторінки (пагінація)
 * @returns - Promise з масивом об'єктів Movie
 */
export const fetchMovies = async (
  query: string,
  page: number = 1
): Promise<Movie[]> => {
  const response: AxiosResponse<TMDBResponse> = await movieInstance.get('/search/movie', {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page,
    },
  });

  return response.data.results;
};
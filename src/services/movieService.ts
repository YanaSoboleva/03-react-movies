import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Movie, TMDBResponse } from '../types/movie';

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const movieInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
});


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
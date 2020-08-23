/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { fetcher, URL } from '../api';

export const useMoviesGenres = () => {
  const { data, error } = useSWR(URL.moviesGenres, fetcher);
  return {
    moviesGenres: data,
    isLoading: !error && !data,
    isError: error
  };
};

export function useUpcomingMovies() {
  const { data, error } = useSWR(URL.movieUpcoming, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useTopRatedMovies() {
  const { data, error } = useSWR(URL.movieTopRated, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

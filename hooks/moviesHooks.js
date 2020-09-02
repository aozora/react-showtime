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

export function useNowPlayingMovies() {
  const { data, error } = useSWR(URL.movieNowPlaying, fetcher);

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

export function usePopularMovies() {
  const { data, error } = useSWR(URL.moviePopular, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useLatestMovie() {
  const { data, error } = useSWR(URL.latestMovie, fetcher);

  return {
    medium: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useMovieDetails(slug) {
  const { data, error } = useSWR(URL.movieDetails.replace('MOVIE_ID', slug), fetcher);

  return {
    medium: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useMovieCredits(slug) {
  const { data, error } = useSWR(URL.movieCredits.replace('MOVIE_ID', slug), fetcher);

  return {
    credits: data,
    isCreditsLoading: !error && !data,
    isCreditsError: error
  };
}

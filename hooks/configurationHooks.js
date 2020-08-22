/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { fetcher, URL } from '../api';

export const useConfigurationApi = () => {
  const { data, error } = useSWR(URL.configuration, fetcher);
  return {
    api: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useConfigurationMoviesGenres = () => {
  const { data, error } = useSWR(URL.moviesGenres, fetcher);
  return {
    moviesGenres: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useConfigurationTvGenres = () => {
  const { data, error } = useSWR(URL.tvGenres, fetcher);
  return {
    tvGenres: data,
    isLoading: !error && !data,
    isError: error
  };
};

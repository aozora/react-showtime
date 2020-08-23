/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { fetcher, URL } from '../api';

export const useTvGenres = () => {
  const { data, error } = useSWR(URL.tvGenres, fetcher);
  return {
    tvGenres: data,
    isLoading: !error && !data,
    isError: error
  };
};

/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { fetcher, URL } from '../api';

export function useUpcomingMedia() {
  const { data, error } = useSWR(URL.movieUpcoming, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

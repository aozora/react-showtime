/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { fetcher, URL } from '../api';

export function useTrendingMedia(type, time) {
  const url = URL.trending.replace('MEDIA_TYPE', type).replace('TIME_WINDOW', time);

  const { data, error } = useSWR(url, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { fetcher, URL } from '../api';

export function useMultiSearch(keyword) {
  const url = URL.search.replace('KEYWORD', keyword);

  const { data, error } = useSWR(keyword && url, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

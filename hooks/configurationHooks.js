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

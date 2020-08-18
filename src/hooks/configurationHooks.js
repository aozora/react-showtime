/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { URL } from '../api';

export const useConfigurationApi = () => {
  const { data, error } = useSWR(URL.configuration);
  return {
    api: data,
    isLoading: !error && !data,
    isError: error
  };
};

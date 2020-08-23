/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { fetcher, URL } from '../api';

export const useConfigurationApi = () => {
  const { data, error } = useSWR(URL.configuration, fetcher);
  return {
    api: data,
    isLoadingConfigurationApi: !error && !data,
    isError: error
  };
};

export const useConfigurationLanguages = () => {
  const { data, error } = useSWR(URL.languages, fetcher);
  return {
    languages: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useConfigurationCountries = () => {
  const { data, error } = useSWR(URL.countries, fetcher);
  return {
    countries: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useConfigurationPrimaryTranslations = () => {
  const { data, error } = useSWR(URL.primaryTranslations, fetcher);
  return {
    primaryTranslations: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useConfigurationJobs = () => {
  const { data, error } = useSWR(URL.jobs, fetcher);
  return {
    jobs: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useConfigurationTimezones = () => {
  const { data, error } = useSWR(URL.timezones, fetcher);
  return {
    timezones: data,
    isLoading: !error && !data,
    isError: error
  };
};

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

export function usePopularTv() {
  const { data, error } = useSWR(URL.tvPopular, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useOnTheAirTodayTv() {
  const { data, error } = useSWR(URL.tvOnTheAirToday, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useLatestTv() {
  const { data, error } = useSWR(URL.tvLatest, fetcher);

  return {
    medium: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useTvDetails(slug) {
  const { data, error } = useSWR(URL.tvDetails.replace('TV_ID', slug), fetcher);

  return {
    medium: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useTvCredits(slug) {
  const { data, error } = useSWR(URL.tvCredits.replace('TV_ID', slug), fetcher);

  return {
    credits: data,
    isCreditsLoading: !error && !data,
    isCreditsError: error
  };
}

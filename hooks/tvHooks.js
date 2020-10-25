/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { useLocale } from '@react-aria/i18n';
import { fetcher, getUrlWithLanguage, URL } from '../api';

export const useTvGenres = () => {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.tvGenres, locale), fetcher);

  return {
    tvGenres: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useTvCertifications = () => {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.tvCertifications, locale), fetcher);

  return {
    tvCertifications: data,
    isTvCertificationsLoading: !error && !data,
    isTvCertificationsError: error
  };
};

export function usePopularTv() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.tvPopular, locale), fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useOnTheAirTodayTv() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.tvOnTheAirToday, locale), fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useOnTheAirTv() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.tvOnTheAir, locale), fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useTopRatedTv() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.tvTopRated, locale), fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useLatestTv() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.tvLatest, locale), fetcher);

  return {
    medium: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useTvDetails(slug) {
  const { locale } = useLocale();
  // use the swr dependent format
  const { data, error } = useSWR(
    () => (slug !== null ? getUrlWithLanguage(URL.tvDetails.replace('TV_ID', slug), locale) : null),
    fetcher
  );

  return {
    medium: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useTvCredits(slug) {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    getUrlWithLanguage(URL.tvCredits.replace('TV_ID', slug), locale),
    fetcher
  );

  return {
    credits: data,
    isCreditsLoading: !error && !data,
    isCreditsError: error
  };
}

export function useTvKeywords(slug) {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    getUrlWithLanguage(URL.tvKeywords.replace('TV_ID', slug), locale),
    fetcher
  );

  return {
    keywords: data,
    isKeywordsLoading: !error && !data,
    isKeywordsError: error
  };
}

export function useTvSeasons(slug, seasonNumber) {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    getUrlWithLanguage(
      URL.tvSeasons.replace('TV_ID', slug).replace('SEASON_NUMBER', seasonNumber),
      locale
    ),
    fetcher
  );

  return {
    seasons: data,
    isSeasonsLoading: !error && !data,
    isSeasonsError: error
  };
}

/**
 * Discover Tv by genres
 * @param genresIds Must be 1 or more Genre IDs separated by "," or "|"
 * @returns {{isKeywordsError: any, keywords: any, isKeywordsLoading: boolean}}
 */
export function useDiscoverTvByGenres(genresIds) {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    () =>
      genresIds !== null
        ? getUrlWithLanguage(`${URL.tvDiscover}&with_genres=${genresIds}`, locale)
        : null,
    fetcher
  );

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

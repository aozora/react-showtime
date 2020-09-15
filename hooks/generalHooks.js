/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { useLocale } from '@react-aria/i18n';
import { fetcher, getUrlWithLanguage, URL } from '../api';

export function useTrendingMedia(type, time) {
  const { locale } = useLocale();
  const url = getUrlWithLanguage(
    URL.trending.replace('MEDIA_TYPE', type).replace('TIME_WINDOW', time),
    locale
  );

  const { data, error } = useSWR(url, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

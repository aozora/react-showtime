/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { useLocale } from '@react-aria/i18n';
import { fetcher, getUrlWithLanguage, URL } from '../api';

export function useMultiSearch(keyword) {
  const { locale } = useLocale();
  const url = getUrlWithLanguage(URL.search.replace('KEYWORD', keyword), locale);

  const { data, error } = useSWR(keyword && url, fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

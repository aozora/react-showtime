/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { useLocale } from '@react-aria/i18n';
import { fetcher, getUrlWithLanguage, URL } from '../api';

export function usePeopleDetails(slug) {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    getUrlWithLanguage(URL.peopleDetails.replace('PERSON_ID', slug), locale),
    fetcher
  );

  return {
    person: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function usePeopleCredits(slug) {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    getUrlWithLanguage(URL.peopleCombinedCredits.replace('PERSON_ID', slug), locale),
    fetcher
  );

  return {
    credits: data,
    isCreditsLoading: !error && !data,
    isCreditsError: error
  };
}

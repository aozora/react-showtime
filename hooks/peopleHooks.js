/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { fetcher, URL } from '../api';

export function usePeopleDetails(slug) {
  const { data, error } = useSWR(URL.peopleDetails.replace('PERSON_ID', slug), fetcher);

  return {
    person: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function usePeopleCredits(slug) {
  const { data, error } = useSWR(URL.peopleCombinedCredits.replace('PERSON_ID', slug), fetcher);

  return {
    credits: data,
    isCreditsLoading: !error && !data,
    isCreditsError: error
  };
}

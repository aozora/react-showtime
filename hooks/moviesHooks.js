/* eslint-disable import/prefer-default-export */
import useSWR from 'swr';
import { useLocale } from '@react-aria/i18n';
import { getRandomInt } from '@/lib/shared';
import { fetcher, getUrlWithLanguage, URL } from '../api';

export const useMoviesGenres = () => {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.moviesGenres, locale), fetcher);
  return {
    moviesGenres: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useMoviesCertifications = () => {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.movieCertifications, locale), fetcher);
  return {
    moviesCertifications: data,
    isMoviesCertificationsLoading: !error && !data,
    isMoviesCertificationsError: error
  };
};

export const useMoviesReleaseDates = slug => {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    getUrlWithLanguage(URL.movieReleaseDates.replace('MOVIE_ID', slug), locale),
    fetcher
  );
  return {
    releases: data,
    isReleasesLoading: !error && !data,
    isReleasesError: error
  };
};

export function useUpcomingMovies() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.movieUpcoming, locale), fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useNowPlayingMovies() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.movieNowPlaying, locale), fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useTopRatedMovies() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.movieTopRated, locale), fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function usePopularMovies() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.moviePopular, locale), fetcher);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useLatestMovie() {
  const { locale } = useLocale();
  const { data, error } = useSWR(getUrlWithLanguage(URL.latestMovie, locale), fetcher);

  return {
    medium: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useMovieDetails(slug) {
  const { locale } = useLocale();

  // use the swr dependent format
  const { data, error } = useSWR(
    () =>
      slug !== null ? getUrlWithLanguage(URL.movieDetails.replace('MOVIE_ID', slug), locale) : null,
    fetcher
  );

  return {
    medium: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useRandomMovieDetails(media) {
  const { locale } = useLocale();
  const medium = media && media.results[getRandomInt(media.results.length)];
  // use the swr dependent format
  const { data, error } = useSWR(
    () =>
      media ? getUrlWithLanguage(URL.movieDetails.replace('MOVIE_ID', medium.id), locale) : null,
    fetcher
  );

  return {
    medium: data,
    isLoading: !error && !data,
    isError: error
  };
}

export function useMovieCredits(slug) {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    getUrlWithLanguage(URL.movieCredits.replace('MOVIE_ID', slug), locale),
    fetcher
  );

  return {
    credits: data,
    isCreditsLoading: !error && !data,
    isCreditsError: error
  };
}

export function useMovieKeywords(slug) {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    getUrlWithLanguage(URL.movieKeywords.replace('MOVIE_ID', slug), locale),
    fetcher
  );

  return {
    keywords: data,
    isKeywordsLoading: !error && !data,
    isKeywordsError: error
  };
}

/**
 * Discover movies by genres
 * @param genresIds Must be 1 or more Genre IDs separated by "," or "|"
 * @returns {{isKeywordsError: any, keywords: any, isKeywordsLoading: boolean}}
 */
export function useDiscoverMoviesByGenres(genresIds) {
  const { locale } = useLocale();
  const { data, error } = useSWR(
    () =>
      genresIds !== null
        ? getUrlWithLanguage(`${URL.movieDiscover}&with_genres=${genresIds}`, locale)
        : null,
    fetcher
  );

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

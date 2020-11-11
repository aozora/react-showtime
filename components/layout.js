import React, { useRef } from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { useDispatch } from 'react-redux';
import {
  setApiConfiguration,
  setTranslations,
  setLanguages,
  setCountries,
  setJobs,
  setTimezones,
  setGenresMovies,
  setGenresTv,
  setMoviesCertifications,
  setTvCertifications
} from '@/store/features/tmdb/configuration/configuration-slice';
import Splash from '@/components/Splash';
import { useIntersection } from 'react-use';
import {
  useConfigurationApi,
  useConfigurationLanguages,
  useConfigurationTimezones,
  useConfigurationCountries,
  useConfigurationJobs,
  useConfigurationPrimaryTranslations
} from '../hooks/configurationHooks';
import { useMoviesCertifications, useMoviesGenres } from '../hooks/moviesHooks';
import { useTvCertifications, useTvGenres } from '../hooks/tvHooks';

export default function Layout({ preview, children }) {
  const dispatch = useDispatch();
  const { api, isLoadingConfigurationApi, isError } = useConfigurationApi();

  const { moviesGenres, isLoading: isLoadingMoviesGenres } = useMoviesGenres();
  const { tvGenres, isLoading: isLoadingTvGenres } = useTvGenres();

  const { languages } = useConfigurationLanguages();
  const { timezones } = useConfigurationTimezones();
  const { countries } = useConfigurationCountries();
  const { jobs } = useConfigurationJobs();
  const { primaryTranslations } = useConfigurationPrimaryTranslations();
  const { tvCertifications, isTvCertificationsLoading } = useTvCertifications();
  const { moviesCertifications, isMoviesCertificationsLoading } = useMoviesCertifications();

  const intersectionRef = useRef(null);
  const intersection = null;
  // const intersection = useIntersection(intersectionRef, {
  //   root: null,
  //   rootMargin: '200px',
  //   threshold: 0
  // });

  if (api && !isLoadingConfigurationApi) {
    dispatch(setApiConfiguration(api));
  }

  if (languages) {
    dispatch(setLanguages(languages));
  }

  if (timezones) {
    dispatch(setTimezones(timezones));
  }

  if (countries) {
    dispatch(setCountries(countries));
  }

  if (jobs) {
    dispatch(setJobs(jobs));
  }

  if (primaryTranslations) {
    dispatch(setTranslations(primaryTranslations));
  }

  if (moviesGenres) {
    dispatch(setGenresMovies(moviesGenres));
  }

  if (tvGenres) {
    dispatch(setGenresTv(tvGenres));
  }

  if (moviesCertifications) {
    dispatch(setMoviesCertifications(moviesCertifications));
  }

  if (tvCertifications) {
    dispatch(setTvCertifications(tvCertifications));
  }

  if (
    isLoadingConfigurationApi ||
    isLoadingMoviesGenres ||
    isLoadingTvGenres ||
    isTvCertificationsLoading ||
    isMoviesCertificationsLoading
  ) {
    return <Splash configurationApi={api} moviesGenres={moviesGenres} />;
  }

  return (
    <>
      <a href="#main" tabIndex="0">
        Skip to main content
      </a>
      <SiteHeader scrolled={intersection && intersection.isIntersecting} />
      <main id="main" className="wrapper" role="main">
        <div ref={intersectionRef} className="visuallyhidden" />
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

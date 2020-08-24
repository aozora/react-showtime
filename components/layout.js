import React, { useEffect } from 'react';
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
  setGenresTv
} from '@/store/features/tmdb/configuration/configuration-slice';
import Splash from '@/components/Splash';
import {
  useConfigurationApi,
  useConfigurationLanguages,
  useConfigurationTimezones,
  useConfigurationCountries,
  useConfigurationJobs,
  useConfigurationPrimaryTranslations
} from '../hooks/configurationHooks';
import { useMoviesGenres } from '../hooks/moviesHooks';
import { useTvGenres } from '../hooks/tvHooks';

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

  if (isLoadingConfigurationApi || isLoadingMoviesGenres || isLoadingTvGenres) {
    return <Splash configurationApi={api} moviesGenres={moviesGenres} />;
  }

  return (
    <>
      <a href="#main" tabIndex="0">
        Skip to main content
      </a>
      <main id="main" role="main">
        <SiteHeader />
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { useDispatch } from 'react-redux';
import { setApiConfiguration } from '@/store/features/tmdb/configuration/configuration-slice';
import Splash from '@/components/Splash';
import Preload from '@/components/Preload';
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

  if (api && !isLoadingConfigurationApi && !isError) {
    dispatch(setApiConfiguration(api));
  }

  if (isLoadingConfigurationApi && (isLoadingMoviesGenres || isLoadingTvGenres)) {
    return <Preload />;
  }

  if (!isLoadingConfigurationApi && !isLoadingMoviesGenres && !isLoadingTvGenres) {
    return <Splash />;
  }

  return (
    <>
      <a href="#main" tabIndex="0">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" role="main">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

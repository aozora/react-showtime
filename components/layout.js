import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { useDispatch } from 'react-redux';
import { setApiConfiguration } from '@/store/features/tmdb/configuration/configuration-slice';
import Splash from '@/components/Splash';
import { useConfigurationApi } from '../hooks/configurationHooks';

export default function Layout({ preview, children }) {
  const dispatch = useDispatch();
  const { api, isLoading, isError } = useConfigurationApi();

  if (api && !isLoading && !isError) {
    dispatch(setApiConfiguration(api));
  }

  if (isLoading) {
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

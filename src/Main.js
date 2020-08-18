import { useDispatch } from 'react-redux';
import React from 'react';
import { useConfigurationApi } from './hooks/configurationHooks';
import { setApiConfiguration } from './store/features/tmdb/configuration/configuration-slice';

const Main = ({ children }) => {
  const dispatch = useDispatch();
  const { api, isLoading, isError } = useConfigurationApi();

  if (api && !isLoading && !isError) {
    dispatch(setApiConfiguration(api));
  }

  return (
    <main id="main" role="main">
      {children}
    </main>
  );
};
export default Main;

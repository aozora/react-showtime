import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import UpcomingMedium from 'containers/UpcomingMedium';
import Splash from 'components/Splash';
import { SWRConfig } from 'swr';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Main from './Main';

function App() {
  // useEffect(() => {
  //   async function init() {
  //     await dispatch(setApiConfigurationAsync(api));
  //   }
  //
  //   init();
  // }, [dispatch]);

  return (
    <>
      <Helmet>
        <html lang="en" dir="ltr" className="spectrum spectrum--medium spectrum--dark" />
      </Helmet>

      <SWRConfig
        value={{
          fetcher: async url => {
            const res = await fetch(url, {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
              }
            });
            return res.json();
          }
        }}
        suspense
      >
        <Suspense fallback={Splash}>
          <Main>
            <SiteHeader />
            <UpcomingMedium />
          </Main>
          <SiteFooter />
        </Suspense>
      </SWRConfig>
    </>
  );
}

export default App;

import React, { Suspense } from 'react';
import { defaultTheme, Link, Provider } from '@adobe/react-spectrum';
import { Grid } from '@react-spectrum/layout';
import { View } from '@react-spectrum/view';
import { Helmet } from 'react-helmet';
import UpcomingMedium from 'containers/UpcomingMedium';
import Splash from 'components/Splash';
import { SWRConfig } from 'swr';
import Sidenav from './Sidenav';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <Provider theme={defaultTheme}>
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
      >
        <Suspense fallback={Splash}>
          <SiteHeader />
          <main>
            <UpcomingMedium />
          </main>
          <SiteFooter />
        </Suspense>
      </SWRConfig>
    </Provider>
  );
}

export default App;

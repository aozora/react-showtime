import React, { Suspense } from 'react';
import { defaultTheme, Link, Provider } from '@adobe/react-spectrum';
import { Grid } from '@react-spectrum/layout';
import { View } from '@react-spectrum/view';
import { Helmet } from 'react-helmet';
import UpcomingMedium from 'containers/UpcomingMedium';
import Splash from 'components/Splash';
import Sidenav from './Sidenav';
import MainHeader from './MainHeader';

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <Helmet>
        <html lang="en" dir="ltr" className="spectrum spectrum--medium spectrum--dark" />
      </Helmet>

      <Suspense fallback={Splash}>
        <Grid
          areas={['header  header', 'sidebar content', 'footer  footer']}
          columns={['1fr', '3fr']}
          rows={['size-1000', 'auto', 'size-1000']}
          height="size-6000"
          gap="size-100"
        >
          <View gridArea="header">
            <MainHeader />
          </View>

          <View gridArea="sidebar">
            <Sidenav />
          </View>

          <View gridArea="content">
            <main>
              <UpcomingMedium />
            </main>
          </View>

          <View gridArea="footer">
            <footer>
              <Link>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by <img src="/vercel.svg" alt="Vercel Logo" />
                </a>
              </Link>
            </footer>
          </View>
        </Grid>
      </Suspense>
    </Provider>
  );
}

export default App;

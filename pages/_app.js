import React, { Suspense } from 'react';
import Layout from '@/components/layout';
// import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { APP_TITLE } from '@/lib/constants';
import { OverlayProvider } from '@react-aria/overlays';
import { SSRProvider } from '@react-aria/ssr';
import { useLocale } from '@react-aria/i18n';
import { Helmet } from 'react-helmet';
import { useStore } from '../store';

// app styles
import '@/styles/fonts.css';
import '@/styles/app.scss';

function MyApp({ Component, pageProps, router }) {
  const { locale, direction } = useLocale();
  const store = useStore(pageProps.initialReduxState);

  return (
    <SSRProvider>
      <Provider store={store}>
        <OverlayProvider>
          <Layout>
            <Helmet>
              <html lang={locale} dir={direction} />
              <title>{APP_TITLE}</title>
            </Helmet>

            <Component {...pageProps} key={router.route} />
          </Layout>
        </OverlayProvider>
      </Provider>
    </SSRProvider>
  );
}

export function reportWebVitals(metric) {
  // eslint-disable-next-line no-console
  console.log(metric);
}

export default MyApp;

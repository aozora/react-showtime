import React, { Suspense } from 'react';
// import App from 'next/app';
import Layout from '@/components/layout';
import Head from 'next/head';
import { SWRConfig } from 'swr';
// import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import Splash from '@/components/Splash';
import { APP_TITLE } from '@/lib/constants';
import { useStore } from '../store';

// app styles
import '@/styles/app.scss';

function MyApp({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>{APP_TITLE}</title>
        </Head>

        <Component {...pageProps} key={router.route} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

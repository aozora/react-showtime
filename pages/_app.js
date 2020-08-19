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

        {/* <AnimatePresence exitBeforeEnter> */}
        {/* <SWRConfig */}
        {/*  value={{ */}
        {/*    fetcher: async url => { */}
        {/*      const res = await fetch(url, { */}
        {/*        headers: { */}
        {/*          'Content-Type': 'application/json', */}
        {/*          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}` */}
        {/*        } */}
        {/*      }); */}
        {/*      return res.json(); */}
        {/*    } */}
        {/*  }} */}
        {/*  suspense */}
        {/* > */}
        {/* <Suspense fallback={Splash}> */}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} key={router.route} />
        {/* </Suspense> */}
        {/* </SWRConfig> */}
        {/* </AnimatePresence> */}
      </Layout>
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// MyApp.getInitialProps = async appContext => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps };
// };

export default MyApp;

import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import TvDetails from '../../components/TvDetails';

export default function Medium({ preview }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return <>{router.isFallback ? <div>Loading…</div> : <TvDetails slug={slug} />}</>;
}

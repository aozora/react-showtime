import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import TvSeasonDetails from '@/components/TvSeasonDetails';

export default function Season({ preview }) {
  const router = useRouter();
  const { slug, num } = router.query;

  if (!router.isFallback && !slug && !num) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? <div>Loading…</div> : <TvSeasonDetails slug={slug} seasonNumber={num} />}
    </>
  );
}

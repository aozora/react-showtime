import React from 'react';
import ScrollableCardsList from 'components/ScrollableCardsList';
import { useNowPlayingMovies } from '../hooks/moviesHooks';

const NowPlayingMedium = () => {
  const { media, isLoading, isError } = useNowPlayingMovies();

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <ScrollableCardsList media={media.results} />
    </>
  );
};

export default NowPlayingMedium;

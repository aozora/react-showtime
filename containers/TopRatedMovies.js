import React from 'react';
import { mediaType } from '@/lib/shared';
import ScrollableCardsList from '../components/ScrollableCardsList';
import { useTopRatedMovies } from '../hooks/moviesHooks';
import MediaContextProvider from './MediaContextProvider';

const TopRatedMovies = ({ motionKey }) => {
  const { media, isLoading, isError } = useTopRatedMovies();

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <MediaContextProvider type={mediaType.movie}>
      <ScrollableCardsList media={media.results} motionKey={motionKey} />
    </MediaContextProvider>
  );
};

export default TopRatedMovies;

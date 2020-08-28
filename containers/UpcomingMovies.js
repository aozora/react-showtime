import React from 'react';
import MediaContextProvider from '@/containers/MediaContextProvider';
import { mediaType } from '@/lib/shared';
import ScrollableCardsList from '../components/ScrollableCardsList';
import { useUpcomingMovies } from '../hooks/moviesHooks';

const UpcomingMovies = ({ motionKey }) => {
  const { media, isLoading, isError } = useUpcomingMovies();

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

export default UpcomingMovies;

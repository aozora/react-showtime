import React from 'react';
import ScrollableCardsList from '../components/ScrollableCardsList';
import { useUpcomingMovies } from '../hooks/moviesHooks';

const UpcomingMedium = ({ motionKey }) => {
  const { media, isLoading, isError } = useUpcomingMovies();
  // setUpcomingMedia(media);

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <ScrollableCardsList media={media.results} motionKey={motionKey} />
    </>
  );
};

export default UpcomingMedium;

import React from 'react';
import ScrollableCardsList from 'components/ScrollableCardsList';
import { useUpcomingMedia } from '../hooks/mediaHooks';

const UpcomingMedium = () => {
  const { media, isLoading, isError } = useUpcomingMedia();
  // setUpcomingMedia(media);

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

export default UpcomingMedium;

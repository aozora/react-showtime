import React from 'react';
import MediaContextProvider from '@/containers/MediaContextProvider';
import { mediaType } from '@/lib/shared';
import ScrollableCardsList from '../components/ScrollableCardsList';
import { useTopRatedTv } from '../hooks/tvHooks';

const TopRatedTv = ({ motionKey }) => {
  const { media, isLoading, isError } = useTopRatedTv();

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <MediaContextProvider type={mediaType.tv}>
      <ScrollableCardsList media={media.results} motionKey={motionKey} />
    </MediaContextProvider>
  );
};

export default TopRatedTv;

import React from 'react';
import MediaContextProvider from '@/containers/MediaContextProvider';
import { mediaType } from '@/lib/shared';
import ScrollableCardsList from '../components/ScrollableCardsList';
import { usePopularTv } from '../hooks/tvHooks';

const PopularTv = ({ motionKey }) => {
  const { media, isLoading, isError } = usePopularTv();

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

export default PopularTv;

import React from 'react';
import { mediaType } from '@/lib/shared';
import ScrollableCardsList from '../components/ScrollableCardsList';
import MediaContextProvider from './MediaContextProvider';
import { useTrendingMedia } from '../hooks/generalHooks';

const TrendingMedia = ({ motionKey, type, time }) => {
  const { media, isLoading, isError } = useTrendingMedia(type, time);

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

export default TrendingMedia;

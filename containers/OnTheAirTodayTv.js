import React from 'react';
import MediaContextProvider from '@/containers/MediaContextProvider';
import { mediaType } from '@/lib/shared';
import ScrollableCardsList from '../components/ScrollableCardsList';
import { useOnTheAirTodayTv } from '../hooks/tvHooks';

const OnTheAirTodayTv = ({ motionKey }) => {
  const { media, isLoading, isError } = useOnTheAirTodayTv();

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

export default OnTheAirTodayTv;

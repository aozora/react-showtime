import React from 'react';
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
    <>
      <ScrollableCardsList media={media.results} motionKey={motionKey} />
    </>
  );
};

export default OnTheAirTodayTv;

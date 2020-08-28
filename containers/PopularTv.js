import React from 'react';
import ScrollableCardsList from '../components/ScrollableCardsList';
import { usePopularTv } from "../hooks/tvHooks";

const PopularTv = ({ motionKey }) => {
  const { media, isLoading, isError } = usePopularTv();

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

export default PopularTv;

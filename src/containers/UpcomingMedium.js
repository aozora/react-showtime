import React from 'react';
import ScrollableCardsList from 'components/ScrollableCardsList';
import useSWR from 'swr';
import { URL } from 'api';

function useUpcomingMedia() {
  const { data, error } = useSWR(URL.movieUpcoming);

  return {
    media: data,
    isLoading: !error && !data,
    isError: error
  };
}

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

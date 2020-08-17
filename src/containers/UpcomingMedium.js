import React from 'react';
import ScrollableCardsList from 'components/ScrollableCardsList';
import useSWR from 'swr';
import { fetcher } from 'api/index';

const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`;

function useUpcomingMedia() {
  const { data, error } = useSWR(url, fetcher);

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

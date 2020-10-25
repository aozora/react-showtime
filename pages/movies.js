import React from 'react';
import BrowserMovieGenres from '@/components/BrowseMovieGenres';

function Movies() {
  return (
    <>
      <BrowserMovieGenres />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API

  // Pass data to the page via props
  return { props: {} };
}

export default Movies;

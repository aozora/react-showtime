import React from 'react';
import { Footer } from '@adobe/react-spectrum';

const SiteFooter = () => {
  return (
    <Footer>
      <p>&copy; All rights reserved.</p>
      <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
      <img width="93" height="67" src="/img/tmdb-blue_square_2.svg" alt="The Movie DB logo" />
    </Footer>
  );
};
export default SiteFooter;

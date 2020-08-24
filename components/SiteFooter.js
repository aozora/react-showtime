import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <p>&copy; All rights reserved.</p>
      <div className="site-footer__credits">
        <a href="https://www.themoviedb.org" rel="noreferrer noopener nofollow">
          <img
            className="tmdb"
            width="56"
            height="40"
            src="/img/tmdb-blue_square_2.svg"
            alt="The Movie DB logo"
          />
        </a>
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
      </div>
    </footer>
  );
};
export default SiteFooter;

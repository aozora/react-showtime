import React from 'react';
import styles from './SiteFooter.module.scss';

const SiteFooter = () => {
  return (
    <footer className={styles.siteFooter}>
      <p className={styles.siteFooterCopyright}>&copy; All rights reserved.</p>
      <div className={styles.siteFooterCredits}>
        <a href="https://www.themoviedb.org" rel="noreferrer noopener nofollow">
          <img
            className={styles.tmdb}
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

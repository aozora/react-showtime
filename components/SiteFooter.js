import React from 'react';
import styles from './SiteFooter.module.scss';

const SiteFooter = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.siteFooterInner}>
        <p className={styles.siteFooterCopyright}>&copy; All rights reserved.</p>
        <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
        <div className={styles.siteFooterCredits}>
          <a href="https://www.themoviedb.org" rel="noreferrer noopener nofollow">
            <img
              className={styles.tmdb}
              width="190.24"
              height="81.52"
              src="/img/tmdb-blue_square_2.svg"
              alt="The Movie DB logo"
            />
          </a>
        </div>
        <p>
          This site is built with{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">
            Next.js
          </a>
          &nbsp;and hosted on
          <a href="https://react-showtime.vercel.app/" target="_blank" rel="noreferrer noopener">
            Vercel
          </a>
          . The source code is hosted on
          <a
            href="https://github.com/aozora/react-showtime"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
export default SiteFooter;

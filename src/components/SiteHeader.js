import React from 'react';
import styles from './SiteHeader.module.css';

const SiteHeader = () => {
  return (
    <header className={styles.siteHeader}>
      <nav>
        <h1>Showtime</h1>
      </nav>
    </header>
  );
};

export default SiteHeader;

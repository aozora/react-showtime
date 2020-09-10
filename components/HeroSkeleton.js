import React from 'react';
import ReelLoader from './ReelLoader';
import styles from './HeroMedium.module.scss';

// eslint-disable-next-line react/display-name
const HeroSkeleton = React.memo(() => (
  <section className="full-width">
    <article className={`${styles.hero} ${styles.heroSkeleton}`}>
      <ReelLoader className={styles.reel} />
      <header>
        <div className={styles.heroTitle} />
        <div className={styles.heroMeta} />
        <div className={styles.heroDescription} />
        <div className={styles.heroFooter} />
      </header>
    </article>
  </section>
));

export default HeroSkeleton;

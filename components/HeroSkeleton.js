import React from 'react';
import ReelLoader from '@/components/ReelLoader';
import styles from './HeroMedium.module.scss';

// eslint-disable-next-line react/display-name
const HeroSkeleton = React.memo(() => (
  <section className="full-bleed">
    <article className={`${styles.hero} ${styles.heroSkeleton}`}>
      <ReelLoader className={styles.heroSkeletonBackground} />
      {/* <svg */}
      {/*  className={styles.heroSkeletonBackground} */}
      {/*  width="100%" */}
      {/*  height="100%" */}
      {/*  viewBox="0 0 1440 810" */}
      {/*  xmlns="http://www.w3.org/2000/svg" */}
      {/* > */}
      {/*  <g fill="none" fillRule="evenodd"> */}
      {/*    <path fill="#606065" d="M0 0h1440v810H0z" /> */}
      {/*    <g fill="#0C1115" fillRule="nonzero"> */}
      {/*      <path fillOpacity=".81" d="M0 331h1440v479H0z" /> */}
      {/*      <path fillOpacity=".41" d="M0 0h1095v479H0z" /> */}
      {/*      <path fillOpacity=".47" d="M811 529h629v281H811z" /> */}
      {/*      <path fillOpacity=".63" d="M20 298h365v512H20z" /> */}
      {/*      <path fillOpacity=".43" d="M1095 0h345v579h-345z" /> */}
      {/*      <path fillOpacity=".51" d="M466 264h791v149H466z" /> */}
      {/*    </g> */}
      {/*    <path */}
      {/*      fillOpacity=".499" */}
      {/*      fill="#F6F6F6" */}
      {/*      d="M100 409h158v16H100zM100 531h297v45H100zM100 596h599v109H100zM100 445h639v78H100z" */}
      {/*    /> */}
      {/*  </g> */}
      {/* </svg> */}
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

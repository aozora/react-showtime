import React from 'react';
import styles from './ReelLoader.module.scss';
//  className="film-strip-loader loading"

const ReelLoader = () => {
  return <div className={`${styles.filmStripLoader} ${styles.loading}`} role="presentation" />;
};

export default ReelLoader;

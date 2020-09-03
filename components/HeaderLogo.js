import React from 'react';
import { APP_TITLE } from '../lib/constants';
import styles from './HeaderLogo.module.scss';

const HeaderLogo = ({ children, isHome }) => {
  if (isHome) {
    return (
      <h1 aria-label={APP_TITLE} className={styles.headerLogo}>
        {children}
      </h1>
    );
  }

  return <div className={styles.headerLogo}>{children}</div>;
};

export default HeaderLogo;

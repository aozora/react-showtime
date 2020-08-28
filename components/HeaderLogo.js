import React from 'react';
import styles from './HeaderLogo.module.scss';

const HeaderLogo = ({ children, isHome }) => {
  if (isHome) {
    return <h1 className={styles.headerLogo}>{children}</h1>;
  }

  return <div className={styles.headerLogo}>{children}</div>;
};

export default HeaderLogo;

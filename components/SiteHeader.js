/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuToogle from '@/components/MenuToggle';
import MiniSearch from './MiniSearch';
import HeaderLogo from './HeaderLogo';
import styles from './SiteHeader.module.scss';

const SiteHeader = ({ scrolled }) => {
  const router = useRouter();

  return (
    <header
      id="site-header"
      className={`${styles.siteHeader} ${scrolled ? '' : styles.siteHeaderScrolled}`}
    >
      <div className={styles.siteHeaderWrapper}>
        <MenuToogle />

        <nav id="main-menu" className={styles.mainMenu}>
          <ul className={styles.mainMenuItems}>
            <li>
              <Link href="/">
                <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/movies">
                <a className={router.pathname === '/movies' ? 'active' : ''}>Movies</a>
              </Link>
            </li>
            <li>
              <Link href="/tv">
                <a className={router.pathname === '/tv' ? 'active' : ''}>TV Shows</a>
              </Link>
            </li>
            <li>
              <Link href="/people">
                <a className={router.pathname === '/people' ? 'active' : ''}>People</a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a>Search</a>
              </Link>
            </li>
          </ul>
          {/* <div className={styles.mainMenuSearch}> */}
          {/*  <MiniSearch /> */}
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import MenuToogle from '@/components/MenuToggle';
// import MiniSearch from './MiniSearch';
// import HeaderLogo from './HeaderLogo';
import styles from './SiteHeader.module.scss';

const SiteHeader = ({ scrolled }) => {
  const router = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);
  //
  // // DOM element refs to be used for animation
  // const mainMenuRef = useRef(null);
  // const menuHeaderRef = useRef(null);
  // const menuFooterRef = useRef(null);
  // const menuLink1Ref = useRef(null);
  // const menuLink2Ref = useRef(null);
  // const menuLink3Ref = useRef(null);
  // const menuLink4Ref = useRef(null);
  // const menuLink5Ref = useRef(null);
  //
  // // Gsap timeline ref
  // const tl = useMemo(() => gsap.timeline({ paused: true }), []);
  //
  // useEffect(() => {
  //   tl.to(mainMenuRef.current, { duration: 0, css: { display: 'flex' } });
  //   tl.fromTo(
  //     [
  //       menuHeaderRef.current,
  //       menuLink1Ref.current,
  //       menuLink2Ref.current,
  //       menuLink3Ref.current,
  //       menuLink4Ref.current,
  //       menuLink5Ref.current,
  //       menuFooterRef.current
  //     ],
  //     { x: '-100%' },
  //     { x: 0, duration: 1, ease: 'power1.inOut', stagger: { amount: 0.3 } }
  //   );
  // }, [tl]);
  //
  // useEffect(() => {
  //   if (toggleMenu) {
  //     tl.play();
  //   } else {
  //     tl.reverse();
  //   }
  // }, [toggleMenu, tl]);

  return (
    <header
      id="site-header"
      className={`${styles.siteHeader} ${toggleMenu ? styles.siteHeaderOpen : ''} ${
        scrolled ? '' : styles.siteHeaderScrolled
      }`}
    >
      <div className={styles.siteHeaderWrapper}>
        <nav
          id="main-menu"
          className={`${styles.mainMenu} ${toggleMenu ? styles.mainMenuOpen : ''}`}
        >
          <div className={styles.mainMenuHeader}>
            <Link href="/login">
              <a>Login</a>
            </Link>
            <Link href="/login">
              <a>Language</a>
            </Link>
          </div>

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

          <div className={styles.mainMenuFooter}>
            <MenuToogle onPress={() => setToggleMenu(!toggleMenu)} visible={toggleMenu} />
            {/* <button type="button" onClick={() => setToggleMenu(!toggleMenu)}> */}
            {/*  Close ↑ */}
            {/* </button> */}
          </div>
          {/* <div className={styles.mainMenuSearch}> */}
          {/*  <MiniSearch /> */}
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;

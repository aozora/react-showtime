import React from 'react';
import styles from './SiteHeader.module.css';
import HeaderLogo from './HeaderLogo';

const SiteHeader = () => {
  return (
    <header id="site-header" className={styles.siteHeader}>
      <a href="#main">Skip to main content</a>

      <nav>
        <HeaderLogo isHome>
          <a href="/">
            <svg width="431" height="73" viewBox="0 0 431 73" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient
                  cx="78%"
                  cy="0%"
                  fx="78%"
                  fy="0%"
                  r="69.599%"
                  gradientTransform="matrix(0 1 -.5606 0 .78 -.78)"
                  id="a"
                >
                  <stop offset="0%" />
                  <stop stopColor="#141515" offset="100%" />
                </radialGradient>
              </defs>
              <g fillRule="nonzero" fill="none">
                <g fontFamily="Montserrat-Medium, Montserrat" fontSize="60" fontWeight="400">
                  <text fill="#E6B91E" transform="translate(82)">
                    <tspan x="0" y="58">
                      SHOW
                    </tspan>
                  </text>
                  <text fill="#FFF" transform="translate(82)">
                    <tspan x="198.84" y="58">
                      TIME
                    </tspan>
                  </text>
                </g>
                <path fill="#FFF" opacity=".219" d="M0 0h73v73H0z" />
                <g opacity=".509" fill="#000">
                  <rect x=".118" width="8.303" height="10.633" rx="3" transform="translate(5 4)" />
                  <rect x=".118" width="8.303" height="10.633" rx="3" transform="translate(5 4)" />
                  <rect x=".515" width="8.303" height="10.633" rx="3" transform="translate(22 4)" />
                  <rect x=".515" width="8.303" height="10.633" rx="3" transform="translate(22 4)" />
                  <g>
                    <rect
                      x=".912"
                      width="8.303"
                      height="10.633"
                      rx="3"
                      transform="translate(39 4)"
                    />
                    <rect
                      x=".912"
                      width="8.303"
                      height="10.633"
                      rx="3"
                      transform="translate(39 4)"
                    />
                  </g>
                  <g>
                    <rect
                      x=".528"
                      width="8.303"
                      height="10.633"
                      rx="3"
                      transform="translate(57 4)"
                    />
                    <rect
                      x=".528"
                      width="8.303"
                      height="10.633"
                      rx="3"
                      transform="translate(57 4)"
                    />
                  </g>
                </g>
                <path fill="url(#a)" opacity=".477" d="M4 18h66v37H4z" />
                <g opacity=".509" fill="#000">
                  <rect x=".118" width="8.303" height="10.633" rx="3" transform="translate(5 58)" />
                  <rect x=".118" width="8.303" height="10.633" rx="3" transform="translate(5 58)" />
                  <rect
                    x=".515"
                    width="8.303"
                    height="10.633"
                    rx="3"
                    transform="translate(22 58)"
                  />
                  <rect
                    x=".515"
                    width="8.303"
                    height="10.633"
                    rx="3"
                    transform="translate(22 58)"
                  />
                  <g>
                    <rect
                      x=".912"
                      width="8.303"
                      height="10.633"
                      rx="3"
                      transform="translate(39 58)"
                    />
                    <rect
                      x=".912"
                      width="8.303"
                      height="10.633"
                      rx="3"
                      transform="translate(39 58)"
                    />
                  </g>
                  <g>
                    <rect
                      x=".528"
                      width="8.303"
                      height="10.633"
                      rx="3"
                      transform="translate(57 58)"
                    />
                    <rect
                      x=".528"
                      width="8.303"
                      height="10.633"
                      rx="3"
                      transform="translate(57 58)"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </HeaderLogo>
      </nav>
    </header>
  );
};

export default SiteHeader;

import React from 'react';
import HeroMovie from '@/components/HeroMovie';
import HeroTv from '@/components/HeroTv';

/**
 * Big hero component that display a full screen media
 * @returns {JSX.Element}
 * @constructor
 */
const HomeHero = () => {
  const time = new Date().getTime();
  const isOdd = time % 2 !== 0;

  // if (isOdd) {
  return <HeroTv />;
  // }
  // return <HeroMovie />;
};

export default HomeHero;

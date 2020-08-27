import React from 'react';
import UpcomingMedium from '@/containers/UpcomingMedium';
import HomeHero from '@/containers/HomeHero';
import NowPlayingMedium from '@/containers/NowPlayingMedium';
// import { motionVariants } from '@/lib/helpers';

export default function Index({}) {
  return (
    <>
      <HomeHero />
      <h2>Upcoming</h2>
      <UpcomingMedium />

      <h2>Now Playing</h2>
      <NowPlayingMedium />
    </>
  );
}

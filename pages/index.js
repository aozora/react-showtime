import React from 'react';
import UpcomingMedium from '@/containers/UpcomingMedium';
import HomeHero from '@/containers/HomeHero';
import NowPlayingMedium from '@/containers/NowPlayingMedium';
import CategorySwitch, { CategoryRadio } from '@/components/CategorySwitch';
// import { motionVariants } from '@/lib/helpers';

export default function Index({}) {
  return (
    <>
      <HomeHero />

      <CategorySwitch label="Movies" onChange={value => console.log(value)}>
        <CategoryRadio label="Upcoming" value="upcoming" />
        <CategoryRadio label="Now Playing" value="now-playing" />
      </CategorySwitch>

      <h2>Upcoming</h2>
      <UpcomingMedium />

      <h2>Now Playing</h2>
      <NowPlayingMedium />
    </>
  );
}

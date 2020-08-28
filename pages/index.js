import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UpcomingMedium from '@/containers/UpcomingMedium';
import HomeHero from '@/containers/HomeHero';
import NowPlayingMedium from '@/containers/NowPlayingMedium';
import CategorySwitch, { CategoryRadio } from '@/components/CategorySwitch';
import { movieCategory } from '@/lib/shared';

export default function Index({}) {
  const [selectedMovieCategory, setSelectedMovieCategory] = useState(movieCategory.upcoming);

  return (
    <>
      <HomeHero />

      <CategorySwitch label="Movies" onChange={value => setSelectedMovieCategory(value)}>
        <CategoryRadio label="Upcoming" value={movieCategory.upcoming} />
        <CategoryRadio label="Now Playing" value={movieCategory.nowPlaying} />
      </CategorySwitch>

      <div className="cards-list-container">
        <AnimatePresence>
          {selectedMovieCategory === movieCategory.upcoming && <UpcomingMedium />}
          {selectedMovieCategory === movieCategory.nowPlaying && <NowPlayingMedium />}
        </AnimatePresence>
      </div>
    </>
  );
}

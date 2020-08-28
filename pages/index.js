import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import UpcomingMovies from '@/containers/UpcomingMovies';
import HomeHero from '@/containers/HomeHero';
import NowPlayingMovies from '@/containers/NowPlayingMovies';
import CategorySwitch, { CategoryRadio } from '@/components/CategorySwitch';
import { movieCategory, tvCategory } from '@/lib/shared';
import OnTheAirTodayTv from '@/containers/OnTheAirTodayTv';
import PopularTv from '@/containers/PopularTv';

export default function Index({}) {
  const [selectedMovieCategory, setSelectedMovieCategory] = useState(movieCategory.upcoming);
  const [selectedTvCategory, setSelectedTvCategory] = useState(tvCategory.onTheAirToday);

  return (
    <>
      <HomeHero />

      <CategorySwitch
        label="Movies"
        value={movieCategory.upcoming}
        onChange={value => setSelectedMovieCategory(value)}
      >
        <CategoryRadio label="Upcoming" value={movieCategory.upcoming} />
        <CategoryRadio label="Now Playing" value={movieCategory.nowPlaying} />
      </CategorySwitch>

      <div className="cards-list-container">
        <AnimatePresence>
          {selectedMovieCategory === movieCategory.upcoming && <UpcomingMovies />}
          {selectedMovieCategory === movieCategory.nowPlaying && <NowPlayingMovies />}
        </AnimatePresence>
      </div>

      <CategorySwitch
        label="TV Shows"
        value={tvCategory.onTheAirToday}
        onChange={value => setSelectedTvCategory(value)}
      >
        <CategoryRadio label="On The Air Today" value={tvCategory.onTheAirToday} />
        <CategoryRadio label="Popular" value={tvCategory.popular} />
      </CategorySwitch>

      <div className="cards-list-container">
        <AnimatePresence>
          {selectedTvCategory === tvCategory.onTheAirToday && <OnTheAirTodayTv />}
          {selectedTvCategory === tvCategory.popular && <PopularTv />}
        </AnimatePresence>
      </div>
    </>
  );
}

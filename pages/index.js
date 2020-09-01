import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import UpcomingMovies from '@/containers/UpcomingMovies';
import HomeHero from '@/containers/HomeHero';
import NowPlayingMovies from '@/containers/NowPlayingMovies';
import CategorySwitch, { CategoryRadio } from '@/components/CategorySwitch';
import { mediaListType, movieCategory, tvCategory } from '@/lib/shared';
import OnTheAirTodayTv from '@/containers/OnTheAirTodayTv';
import PopularTv from '@/containers/PopularTv';

export default function Index({}) {
  const [selectedMovieCategory, setSelectedMovieCategory] = useState(movieCategory.upcoming);
  const [selectedTvCategory, setSelectedTvCategory] = useState(tvCategory.onTheAirToday);

  return (
    <>
      <HomeHero />

      <CategorySwitch
        label="Media"
        initialValue={movieCategory.upcoming}
        radios={[
          { label: `Upcoming`, value: movieCategory.upcoming },
          { label: `Now Playing`, value: movieCategory.nowPlaying }
        ]}
        onChange={value => setSelectedMovieCategory(value)}
      />

      <div className="cards-list-container">
        <AnimatePresence>
          {selectedMovieCategory === movieCategory.upcoming && (
            <UpcomingMovies key={movieCategory.upcoming} />
          )}
          {selectedMovieCategory === movieCategory.nowPlaying && (
            <NowPlayingMovies key={movieCategory.nowPlaying} />
          )}
        </AnimatePresence>
      </div>

      <CategorySwitch
        label="Media"
        initialValue={tvCategory.onTheAirToday}
        radios={[
          { label: `On The Air Today`, value: tvCategory.onTheAirToday },
          { label: `Popular`, value: tvCategory.popular }
        ]}
        onChange={value => setSelectedTvCategory(value)}
      />

      <div className="cards-list-container">
        <AnimatePresence>
          {selectedTvCategory === tvCategory.onTheAirToday && (
            <OnTheAirTodayTv key={tvCategory.onTheAirToday} />
          )}
          {selectedTvCategory === tvCategory.popular && <PopularTv key={tvCategory.popular} />}
        </AnimatePresence>
      </div>
    </>
  );
}

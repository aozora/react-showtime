import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import UpcomingMovies from '@/containers/UpcomingMovies';
import HomeHero from '@/containers/HomeHero';
import NowPlayingMovies from '@/containers/NowPlayingMovies';
import CategorySwitch from '@/components/CategorySwitch';
import { movieCategory, tvCategory } from '@/lib/shared';
import OnTheAirTodayTv from '@/containers/OnTheAirTodayTv';
import PopularTv from '@/containers/PopularTv';
import PopularMovies from '@/containers/PopularMovies';
import TopRatedMovies from '@/containers/TopRatedMovies';
import OnTheAirTv from '@/containers/OnTheAirTv';
import TopRatedTv from '@/containers/TopRatedTv';

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
          { label: `Now Playing`, value: movieCategory.nowPlaying },
          { label: `Popular`, value: movieCategory.popular },
          { label: `Top Rated`, value: movieCategory.topRated }
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
          {selectedMovieCategory === movieCategory.popular && (
            <PopularMovies key={movieCategory.popular} />
          )}
          {selectedMovieCategory === movieCategory.topRated && (
            <TopRatedMovies key={movieCategory.topRated} />
          )}
        </AnimatePresence>
      </div>

      <CategorySwitch
        label="Media"
        initialValue={tvCategory.onTheAirToday}
        radios={[
          { label: `On The Air Today`, value: tvCategory.onTheAirToday },
          { label: `Popular`, value: tvCategory.popular },
          { label: `Top Rated`, value: tvCategory.topRated },
          { label: `On The Air`, value: tvCategory.onTheAir }
        ]}
        onChange={value => setSelectedTvCategory(value)}
      />

      <div className="cards-list-container">
        <AnimatePresence>
          {selectedTvCategory === tvCategory.onTheAirToday && (
            <OnTheAirTodayTv key={tvCategory.onTheAirToday} />
          )}
          {selectedTvCategory === tvCategory.popular && <PopularTv key={tvCategory.popular} />}
          {selectedTvCategory === tvCategory.topRated && <TopRatedTv key={tvCategory.topRated} />}
          {selectedTvCategory === tvCategory.onTheAir && <OnTheAirTv key={tvCategory.onTheAir} />}
        </AnimatePresence>
      </div>
    </>
  );
}

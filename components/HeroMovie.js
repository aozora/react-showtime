import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { getRandomInt, getYearDate, cardType, formatDate } from '@/lib/shared';
import HeroTitle from '@/components/HeroTitle';
import HeroSkeleton from '@/components/HeroSkeleton';
import PlayTrailerButton from '@/components/PlayTrailerButton';
import MediumImage from './MediumImage';
import { useUpcomingMovies, useMoviesGenres, useMovieDetails } from '../hooks/moviesHooks';
import styles from './HeroMedium.module.scss';

const HeroMovie = () => {
  // let medium;
  const [randomMedium, setRandomMedium] = useState();
  const { media, isLoading, isError } = useUpcomingMovies();
  const { medium, isLoading: isLoadingMedium } = useMovieDetails(
    randomMedium ? randomMedium.id : null
  );

  // load genres; don't care for error, in that case the medium genres will not be displayed
  const { moviesGenres, isLoading: isLoadingGenres } = useMoviesGenres();

  useEffect(() => {
    if (media && media.results) {
      setRandomMedium(media.results[getRandomInt(media.results.length)]);
    }
  }, [media]);

  const getAbstract = useCallback(() => {
    if (medium) {
      const abstract = medium.tagline || medium.overview;
      return abstract.length > 160 ? `${abstract.slice(0, 160)}...` : abstract;
    }

    return undefined;
  }, [medium]);

  const getGenre = useCallback(
    id => {
      if (moviesGenres) {
        const genre = moviesGenres.genres.find(g => g.id === id);
        if (genre) {
          return genre.name;
        }
        return undefined;
      }

      return '';
    },
    [moviesGenres]
  );

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading || !medium) {
    return <HeroSkeleton />;
  }

  return (
    <section className="full-width">
      <article className={styles.hero}>
        <MediumImage medium={medium} imageType={cardType.backdrop} />
        <header>
          <div className={styles.heroTitle}>
            <span role="doc-subtitle">Movie ({getYearDate(medium.release_date)})</span>
            <h1>
              <Link passHref href="/movie/[slug]" as={`/movie/${medium.id}`}>
                <HeroTitle title={medium.title} />
              </Link>
            </h1>
          </div>
          <div className={styles.heroMeta}>
            {!isLoadingGenres && (
              <p className={styles.heroGenres}>
                {moviesGenres &&
                  medium.genres.map(genre => <span key={genre.name}>{genre.name}</span>)}
              </p>
            )}
          </div>
          <div className={styles.heroDescription}>
            <p className={styles.heroAbstract}>{getAbstract(medium)}</p>
            <p className={styles.heroInfoSmall}>Popularity: {medium.vote_average * 10}%</p>
          </div>

          <div className={styles.heroFooter}>
            <p className={styles.heroActions}>
              <Link href="/movie/[slug]" as={`/movie/${medium.id}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="button">Details</a>
              </Link>
              {/* <button type="button" className="button button--primary"> */}
              {/*  Play trailer */}
              {/* </button> */}
              {medium.videos && medium.videos.results && medium.videos.results.length > 0 && (
                <PlayTrailerButton video={medium.videos.results[0]} />
              )}
            </p>
          </div>
        </header>
      </article>
    </section>
  );
};

export default HeroMovie;

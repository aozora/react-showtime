import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getRandomInt, getYearDate } from '@/lib/shared';
import { cardType, formatDate } from '../lib/shared';
import MediumImage from './MediumImage';
import { useUpcomingMovies, useMoviesGenres } from '../hooks/moviesHooks';
import styles from './HeroMedium.module.scss';

const HeroMovie = () => {
  let medium;
  const { media, isLoading, isError } = useUpcomingMovies();
  // load genres; don't care for error, in that case the medium genres will not be displayed
  const { moviesGenres } = useMoviesGenres();
  const router = useRouter();

  const getAbstract = () => {
    const abstract = medium.tagline || medium.overview;
    return abstract.length > 160 ? `${abstract.slice(0, 160)}...` : abstract;
  };

  const getGenre = id => {
    if (moviesGenres) {
      const genre = moviesGenres.genres.find(g => g.id === id);
      if (genre) {
        return genre.name;
      }
      return undefined;
    }

    return '';
  };

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  // if the media has been loaded, take randomly a medium from the array
  if (!isLoading && !isError && media) {
    // eslint-disable-next-line prefer-destructuring
    medium = media.results[getRandomInt(media.results.length)];
  }

  return (
    <section className="full-width">
      <article className={styles.hero}>
        <MediumImage medium={medium} imageType={cardType.backdrop} />
        <header>
          <div className={styles.heroTitle}>
            <span role="doc-subtitle">Movie ({getYearDate(medium.release_date)})</span>
            <h1>
              <Link href="/movie/[slug]" as={`/movie/${medium.id}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>{medium.title}</a>
              </Link>
            </h1>
          </div>
          <div className={styles.heroMeta}>
            <p className={styles.heroGenres}>
              {moviesGenres && medium.genre_ids.map(id => <span key={id}>{getGenre(id)}</span>)}
            </p>
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
              <button type="button" className="button button--primary">
                Play trailer
              </button>
            </p>
          </div>
        </header>
      </article>
    </section>
  );
};

export default HeroMovie;

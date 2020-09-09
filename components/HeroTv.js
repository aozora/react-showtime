import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
// import Splitting from 'splitting';
import { cardType, getRandomInt, getYearDate } from '../lib/shared';
import MediumImage from './MediumImage';
import styles from './HeroMedium.module.scss';
import { useTvGenres, usePopularTv } from '../hooks/tvHooks';

const HeroTv = () => {
  let medium;
  const { media, isLoading, isError } = usePopularTv();
  // load genres; don't care for error, in that case the medium genres will not be displayed
  const { tvGenres } = useTvGenres();
  // create a ref object to our text to split
  const splitRef = useRef(null);

  const getAbstract = () => {
    const abstract = medium.tagline || medium.overview;
    return abstract.length > 160 ? `${abstract.slice(0, 160)}...` : abstract;
  };

  const getGenre = id => {
    if (tvGenres) {
      const genre = tvGenres.genres.find(g => g.id === id);
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
            <span role="doc-subtitle">TV Show ({getYearDate(medium.first_air_date)})</span>
            <h1>
              <Link href="/tv/[slug]" as={`/tv/${medium.id}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a data-splitting aria-label={medium.name}>
                  {Array.from(medium.name).map((char, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span key={index} aria-hidden="true">
                      {char}
                    </span>
                  ))}
                </a>
              </Link>
            </h1>
          </div>
          <div className={styles.heroMeta}>
            <p className={styles.heroGenres}>
              {tvGenres && medium.genre_ids.map(id => <span key={id}>{getGenre(id)}</span>)}
            </p>
          </div>
          <div className={styles.heroDescription}>
            <p className={styles.heroAbstract}>{getAbstract(medium)}</p>
            <p className={styles.heroInfoSmall}>Popularity: {medium.vote_average * 10}%</p>
          </div>
          <div className={styles.heroFooter}>
            <p className={styles.heroActions}>
              <Link href="/tv/[slug]" as={`/tv/${medium.id}`}>
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

export default HeroTv;

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import HeroSkeleton from '@/components/HeroSkeleton';
import { cardType, getRandomInt, getYearDate } from '@/lib/shared';
import PlayTrailerButton from '@/components/PlayTrailerButton';
import HeroTitle from './HeroTitle';
import MediumImage from './MediumImage';
import styles from './HeroMedium.module.scss';
import { useTvGenres, usePopularTv, useTvDetails } from '../hooks/tvHooks';

const HeroTv = () => {
  const heroImageRef = useRef(null);
  const [randomMedium, setRandomMedium] = useState();
  const { media, isLoading, isError } = usePopularTv();
  const { medium, isLoading: isLoadingMedium } = useTvDetails(
    randomMedium ? randomMedium.id : null
  );
  // load genres; don't care for error, in that case the medium genres will not be displayed
  const { tvGenres, isLoading: isLoadingGenres } = useTvGenres();

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
      if (tvGenres) {
        const genre = tvGenres.genres.find(g => g.id === id);
        if (genre) {
          return genre.name;
        }
        return undefined;
      }

      return '';
    },
    [tvGenres]
  );

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading || !medium) {
    return <HeroSkeleton />;
  }

  return (
    <section className="full-bleed">
      <article className={styles.hero}>
        <MediumImage ref={heroImageRef} medium={medium} imageType={cardType.backdrop} />

        <header>
          <div className={styles.heroTitle}>
            <span role="doc-subtitle">TV Show ({getYearDate(medium.first_air_date)})</span>
            <h1>
              <Link passHref href="/tv/[slug]" as={`/tv/${medium.id}`}>
                <HeroTitle title={medium.name} />
              </Link>
            </h1>
          </div>
        </header>

        <section>
          <div className={styles.heroMeta}>
            {!isLoadingGenres && (
              <p className={styles.heroGenres}>
                {tvGenres && medium.genres.map(genre => <span key={genre.name}>{genre.name}</span>)}
              </p>
            )}
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
              {/* <button type="button" className="button button--primary"> */}
              {/*  Play trailer */}
              {/* </button> */}
              {medium.videos && medium.videos.results && medium.videos.results.length > 0 && (
                <PlayTrailerButton video={medium.videos.results[0]} />
              )}
            </p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default HeroTv;

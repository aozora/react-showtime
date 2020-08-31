import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { cardType, formatDate, getRandomInt } from '../lib/shared';
import MediumImage from './MediumImage';
import styles from './HeroMedium.module.scss';
import { useTvGenres, usePopularTv } from '../hooks/tvHooks';

const HeroTv = () => {
  let medium;
  const { media, isLoading, isError } = usePopularTv();
  // load genres; don't care for error, in that case the medium genres will not be displayed
  const { tvGenres } = useTvGenres();
  const router = useRouter();

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
        <figure>
          <MediumImage medium={medium} imageType={cardType.backdrop} />
          {/* // <v-lazy-image v-if="pictureExist" */}
          {/* //                 sizes="(max-width: 1280px) 100vw, 1280px" */}
          {/* //   :srcset="`${backdropPath(medium, 'w300')} 320w,${backdropPath(medium, 'w780')} 768w,${backdropPath(medium, 'w1280')} 1280w`" */}
          {/* //   :src="backdropPath(medium, 'w1280')" */}
          {/* // /> */}

          {/* //   <img v-else */}
          {/* //   :src="placeholder" */}
          {/* //          alt="" */}
          {/* // > */}
          <figcaption>
            <span className={styles.heroTag}>TV</span>
            <h1>
              <Link href="/tv/[slug]" as={`/tv/${medium.id}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>{medium.name}</a>
              </Link>
            </h1>
            <p className={styles.heroGenres}>
              {tvGenres &&
                medium.genre_ids.map((id, index) => <span key={index}>{getGenre(id)}</span>)}
            </p>
            <p className={styles.heroInfoSmall}>Released {formatDate(medium.release_date)}</p>
            <p className={styles.heroInfoSmall}>Popularity: {medium.vote_average * 10}%</p>
            <p className={styles.heroAbstract}>{getAbstract(medium)}</p>
            <p className={styles.heroActions}>
              <Link href="/tv/[slug]" as={`/tv/${medium.id}`}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="button">Details</a>
              </Link>
              <button type="button" className="button button--primary">
                Play trailer
              </button>
            </p>
          </figcaption>
        </figure>
      </article>
    </section>
  );
};

export default HeroTv;

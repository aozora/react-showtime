import React from 'react';
import MediumImage from '@/components/MediumImage';
import { cardType, formatDate } from '@/lib/shared';
import Link from 'next/link';
import { useUpcomingMedia } from '../hooks/mediaHooks';
import { useConfigurationTvGenres } from '../hooks/configurationHooks';

/**
 * Big hero component that display a full screen media
 * @returns {JSX.Element}
 * @constructor
 */
const HomeHero = () => {
  // TODO: randomly get a movie or a tv medium

  let medium;
  const { media, isLoading, isError } = useUpcomingMedia();
  // load genres; don't care for error, in that case the medium genres will not be displayed
  const { tvGenres } = useConfigurationTvGenres();

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  // get the first medium
  if (!isLoading && !isError && media) {
    // eslint-disable-next-line prefer-destructuring
    medium = media[0];
  }

  const getAbstract = () => {
    const abstract = medium.tagline || medium.overview;
    return abstract.length > 160 ? `${abstract.slice(0, 160)}...` : abstract;
  };

  const getGenre = id => {
    if (tvGenres) {
      const genre = tvGenres.find(g => g.id === id);
      return genre.name || undefined;
    }

    return '';
  };

  if (isError) {
    return <div>failed to load</div>;
  }

  if (isLoading && !medium) {
    return <div>loading...</div>;
  }

  return (
    <section className="full-width">
      <article className="hero">
        {medium && console.log('***DEBUG***', medium)}
        {medium && (
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
              <span className="hero__tag">Movies</span>
              <h1>
                <Link href={`/media/${medium.id}`}>{medium.title}</Link>
              </h1>
              <p className="hero__genres">
                {tvGenres &&
                  medium.genre_ids.map((id, index) => <span key={index}>{getGenre(id)}</span>)}
              </p>
              <p className="hero__info-small">{formatDate(medium.release_date)}</p>
              <p className="hero__info-small">Popularity: {medium.vote_average * 10}%</p>
              <p className="hero__abstract">{getAbstract(medium)}</p>
              <button className="button button--icon" type="button">
                Play trailer
                {/* <span className="button__icon" aria-hidden="true"> */}
                {/*      <svg> */}
                {/*        <use xlink:href="#icon-film-solid"></use> */}
                {/*      </svg> */}
                {/*    </span> */}
              </button>
            </figcaption>
          </figure>
        )}
      </article>
    </section>
  );
};

export default HomeHero;

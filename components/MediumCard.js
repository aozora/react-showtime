import React, { useContext } from 'react';
import Link from 'next/link';
import { cardType, formatDate, mediaType } from '../lib/shared';
import MediumImage from './MediumImage';
import styles from './MediumCard.module.scss';
import { MediaContext } from '../containers/MediaContextProvider';

const MediumCard = ({ medium, card }) => {
  const contextMediaType = useContext(MediaContext);

  return (
    <article
      className={`${styles.card} ${
        card === cardType.poster ? styles.cardPoster : styles.cardBackdrop
      }`}
    >
      <Link
        href={`${contextMediaType === mediaType.movie ? '/movie' : '/tv'}/[slug]`}
        as={`/${contextMediaType === mediaType.movie ? 'movie' : 'tv'}/${medium.id}`}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <MediumImage medium={medium} imageType={card} />
          {card === cardType.backdrop && (
            <header>
              <p>Released {formatDate(medium.release_date)}</p>
              <h3 lang={medium.original_language}>{medium.original_title}</h3>
              {medium.original_title !== medium.title && <h4>{medium.title}</h4>}
            </header>
          )}
        </a>
      </Link>
    </article>
  );
};

export default MediumCard;

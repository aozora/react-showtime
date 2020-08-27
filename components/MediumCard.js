import React from 'react';
import Link from 'next/link';
import { cardType, formatDate } from '../lib/shared';
import MediumImage from './MediumImage';
import styles from './MediumCard.module.scss';

const MediumCard = ({ medium, card }) => {
  return (
    <article
      className={`${styles.card} ${
        card === cardType.poster ? styles.cardPoster : styles.cardBackdrop
      }`}
    >
      <Link href="/movie/[slug]" as={`/movie/${medium.id}`}>
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

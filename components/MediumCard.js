import React, { useCallback } from 'react';
import { format, parse } from 'date-fns';
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
      <MediumImage medium={medium} imageType={card} />
      {card === cardType.backdrop && (
        <header>
          <p>Released {formatDate(medium.release_date)}</p>
          <h3 lang={medium.original_language}>{medium.original_title}</h3>
          {medium.original_title !== medium.title && <h4>{medium.title}</h4>}
        </header>
      )}
    </article>
  );
};

export default MediumCard;

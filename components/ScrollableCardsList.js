import React from 'react';
import MediumCard from 'components/MediumCard';
import { cardType } from '../lib/shared';
import styles from './ScrollableCardsList.module.scss';

const ScrollableCardsList = ({ media }) => {
  return (
    <section className={`${styles.cardsList} ${styles.cardsListScrollable}`}>
      <div className={`${styles.cardsListContainer}`}>
        {media &&
          media.map((medium, index) => (
            <MediumCard key={index} medium={medium} card={cardType.poster} />
          ))}
      </div>
    </section>
  );
};

export default ScrollableCardsList;

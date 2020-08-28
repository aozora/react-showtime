/* eslint-disable react/no-array-index-key */
import React from 'react';
import { motion } from 'framer-motion';
import MediumCard from './MediumCard';
import { cardType } from '../lib/shared';
import styles from './ScrollableCardsList.module.scss';

const ScrollableCardsList = ({ media, motionKey }) => {
  return (
    <motion.section
      className={`${styles.cardsList} ${styles.cardsListScrollable}`}
      key={motionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.cardsListContainer}`}>
        {media &&
          media.map((medium, index) => (
            <MediumCard key={index} medium={medium} card={cardType.poster} />
          ))}
      </div>
    </motion.section>
  );
};

export default ScrollableCardsList;

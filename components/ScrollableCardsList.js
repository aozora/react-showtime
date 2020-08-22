import React from 'react';
import MediumCard from 'components/MediumCard';
import { cardType } from '../lib/shared';

const ScrollableCardsList = ({ media }) => {
  return (
    <section className="cards-list cards-list--scrollable">
      <div className="cards-list__container">
        {media &&
          media.map((medium, index) => (
            <MediumCard key={index} medium={medium} card={cardType.poster} />
          ))}
      </div>
    </section>
  );
};

export default ScrollableCardsList;

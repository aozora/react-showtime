import React from 'react';
import MediumCard from 'components/MediumCard';
import { cardType } from '../lib/shared';

const ScrollableCardsList = ({ media }) => {
  return (
    <section className="cards-list cards-list--scrollable">
      <div
        className="cards-list__container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyItems: 'flex-start',
          alignItems: 'center'
        }}
      >
        {media &&
          media.map((medium, index) => (
            <MediumCard key={index} medium={medium} cardType={cardType.poster} />
          ))}
      </div>
    </section>
  );
};

export default ScrollableCardsList;

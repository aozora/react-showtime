import React, { useCallback } from 'react';
import { format, parse } from 'date-fns';
import MediumImage from './MediumImage';

const MediumCard = ({ medium, cardType }) => {
  const formatDate = useCallback(date => {
    const d = parse(date, 'yyyy-MM-dd', new Date());
    return format(d, 'MMM d, yyyy');
  }, []);

  return (
    <article
      className="card"
      role="figure"
      style={{
        width: 240,
        margin: '0 1rem 1rem 0'
      }}
    >
      <MediumImage medium={medium} imageType={cardType} />
      {cardType === cardType.backdrop && (
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

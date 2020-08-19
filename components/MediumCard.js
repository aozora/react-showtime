import React, { useCallback } from 'react';
import { format, parse } from 'date-fns';
import { cardType } from '@/lib/shared';
import MediumImage from './MediumImage';

const MediumCard = ({ medium, card }) => {
  const formatDate = useCallback(date => {
    const d = parse(date, 'yyyy-MM-dd', new Date());
    return format(d, 'MMM d, yyyy');
  }, []);

  return (
    <article className={`card ${card === cardType.poster ? 'card--poster' : 'card--backdrop'}`}>
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

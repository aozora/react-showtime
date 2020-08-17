import React, { useCallback } from 'react';
import { format, parse } from 'date-fns';

const MediumCard = ({ medium }) => {
  const baseUrl = 'http://image.tmdb.org/t/p/';
  const size = 'w342';

  const formatDate = useCallback(date => {
    const d = parse(date, 'yyyy-MM-dd', new Date());
    return format(d, 'MMM d, yyyy');
  }, []);

  return (
    <div
      className="spectrum-Card"
      role="figure"
      style={{
        width: 240,
        margin: '0 1rem 1rem 0'
      }}
    >
      <div
        className="spectrum-Card-coverPhoto"
        style={{
          backgroundImage: `url(${baseUrl}${size}${medium.poster_path})`
        }}
      />
      <div className="spectrum-Card-body">
        <div className="spectrum-Card-header">
          <div className="spectrum-Card-title">{medium.title}</div>
        </div>
        <div className="spectrum-Card-content">
          <div className="spectrum-Card-subtitle">{medium.original_title}</div>
        </div>
      </div>
      <div className="spectrum-Card-footer">
        <p>Released {formatDate(medium.release_date)}</p>
      </div>
    </div>
  );
};

export default MediumCard;

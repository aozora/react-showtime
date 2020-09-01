import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CategorySwitch from './CategorySwitch';
import { mediaListType } from '../lib/shared';
import ScrollableMediaList from './ScrollableMediaList';
import styles from './MediumDetails.module.scss';

const MediumMediaList = ({ medium }) => {
  const [selectedMediaListType, setSelectedMediaListType] = useState(mediaListType.videos);

  return (
    <section className={styles.mediumMedia}>
      <CategorySwitch
        label="Media"
        initialValue={mediaListType.videos}
        radios={[
          { label: `Videos (${medium.videos.results.length})`, value: mediaListType.videos },
          { label: `Posters (${medium.images.posters.length})`, value: mediaListType.posters },
          { label: `Backdrops (${medium.images.backdrops.length})`, value: mediaListType.backdrops }
        ]}
        onChange={value => setSelectedMediaListType(value)}
      />

      <div className="media-list-container">
        <AnimatePresence>
          {selectedMediaListType === mediaListType.videos && (
            <ScrollableMediaList
              key={mediaListType.videos}
              media={medium.videos.results}
              mediaType={mediaListType.videos}
            />
          )}
          {selectedMediaListType === mediaListType.posters && (
            <ScrollableMediaList
              key={mediaListType.posters}
              media={medium.images.posters}
              mediaType={mediaListType.posters}
            />
          )}
          {selectedMediaListType === mediaListType.backdrops && (
            <ScrollableMediaList
              key={mediaListType.backdrops}
              media={medium.images.backdrops}
              mediaType={mediaListType.backdrops}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MediumMediaList;

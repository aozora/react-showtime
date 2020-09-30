import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CategorySwitch from './CategorySwitch';
import { mediaListType } from '../lib/shared';
import ScrollableMediaList from './ScrollableMediaList';
import styles from './MediumDetails.module.scss';

const MediumMediaList = ({ medium }) => {
  const [selectedMediaListType, setSelectedMediaListType] = useState(mediaListType.videos);
  const [radios, setRadios] = useState([]);

  useEffect(() => {
    if (medium) {
      if (medium.videos && medium.videos.results) {
        setRadios([
          ...radios,
          { label: `Videos (${medium.videos.results.length})`, value: mediaListType.videos }
        ]);
      }

      if (medium.images.posters) {
        setRadios([
          ...radios,
          { label: `Posters (${medium.images.posters.length})`, value: mediaListType.posters }
        ]);
      }

      if (medium.images.backdrops) {
        setRadios([
          ...radios,
          { label: `Backdrops (${medium.images.backdrops.length})`, value: mediaListType.backdrops }
        ]);
      }

      if (medium.images.profiles) {
        setRadios([
          ...radios,
          { label: `Profiles (${medium.images.profiles.length})`, value: mediaListType.profiles }
        ]);
      }
    }
  }, [medium]);

  return (
    <section className={styles.mediumMedia}>
      <CategorySwitch
        label="Media"
        initialValue={mediaListType.videos}
        radios={radios}
        onChange={value => setSelectedMediaListType(value)}
      />

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
        {selectedMediaListType === mediaListType.profiles && (
          <ScrollableMediaList
            key={mediaListType.profiles}
            media={medium.images.profiles}
            mediaType={mediaListType.profiles}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MediumMediaList;

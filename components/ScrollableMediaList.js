import React from 'react';
import { motion } from 'framer-motion';
import LazyYouTubeVideo from './LazyYouTubeVideo';
import MediumImage from './MediumImage';
import { cardType, mediaListType } from '../lib/shared';
import styles from './ScrollableMediaList.module.scss';

const ScrollableMediaList = ({ media, motionKey, mediaType }) => {
  return (
    <motion.section
      className={`${styles.mediaList} ${styles.mediaListScrollable}`}
      key={motionKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={`${styles.mediaListContainer}`}>
        {media &&
          media.map((medium, index) => {
            switch (mediaType) {
              case mediaListType.posters:
                return (
                  <article className={styles.mediaPoster}>
                    <MediumImage
                      key={index}
                      medium={{ poster_path: medium.file_path }}
                      imageType={cardType.poster}
                    />
                  </article>
                );
              case mediaListType.backdrops:
                return (
                  <article className={styles.mediaBackdrop}>
                    <MediumImage
                      key={index}
                      medium={{ backdrop_path: medium.file_path }}
                      imageType={cardType.backdrop}
                    />
                  </article>
                );
              case mediaListType.videos:
              default:
                return (
                  <article className={styles.mediaVideo}>
                    <LazyYouTubeVideo key={index} url={medium.key} alt={medium.name} />
                  </article>
                );
            }
          })}
      </div>
    </motion.section>
  );
};

export default ScrollableMediaList;

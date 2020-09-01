import React, { useCallback, useState } from 'react';
import { URL } from '../api';
import styles from './LazyYouTubeVideo.module.scss';

const LazyYouTubeVideo = ({ url, alt, label }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // const getYouTubeUrl = key => {
  //   return URL.youtubeTrailer.replace('YOUTUBEKEY', key);
  // };
  //
  // const getYouTubePosterUrl = key => {
  //   return URL.youtubePoster.replace('YOUTUBEKEY', key);
  // };

  // const id = useCallback(() => {
  //   return getYouTubeUrl(url);
  //   // const regExp = /^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/;
  //   // return regExp.exec(getYouTubeUrl(url))[1];
  //   // return this.url.replace('https://www.youtube.com/watch?v=', '');
  // }, []);

  // const generateURL = useCallback(() => {
  //   const query = '?rel=0&showinfo=0&autoplay=1';
  //   return `https://www.youtube.com/embed/${id}${query}`;
  // }, []);

  const clickHandler = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  const getPaddingBottom = useCallback(() => {
    const [a, b] = '16:9'.split(':');
    return {
      paddingBottom: `${(b / a) * 100}%`
    };
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={styles.video} onClick={clickHandler}>
      <div className={styles.videoInner} style={getPaddingBottom()}>
        {!isVideoLoaded && (
          <>
            {/* <picture> */}
            {/*  <source */}
            {/*    srcSet={`https://i.ytimg.com/vi_webp/${url}/hqdefault.webp`} */}
            {/*    type="image/webp" */}
            {/*  /> */}
            <img
              className={styles.videoMedia}
              src={`https://i.ytimg.com/vi/${url}/hqdefault.jpg`}
              alt={alt}
            />
            {/* </picture> */}
            <button type="button" className={styles.videoButton} aria-label={label}>
              <svg viewBox="0 0 68 48" version="1.1" width="100%" height="100%">
                <path
                  className={styles.videoButtonShape}
                  d="M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1a89.6 89.6 0 0 0 0 32.5c.8 3 2.5 5.5 5.4 6.3C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.6c3-.7 4.6-3.2 5.4-6.1C68 35 68 24 68 24s0-11-1.5-16.3z"
                />
                <path className={styles.videoButtonIcon} d="M45 24L27 14v20" />
              </svg>
            </button>
          </>
        )}
        {isVideoLoaded && (
          <iframe
            title="youtube video"
            src={`https://www.youtube.com/embed/${url}?rel=0&showinfo=0&autoplay=1`}
            allowFullScreen
            allow="autoplay"
            className={styles.videoMedia}
          />
        )}
      </div>
    </div>
  );
};

export default LazyYouTubeVideo;

import React, { useCallback } from 'react';

const LazyYouTubeVideo = ({ url, alt, label, aspectRatio }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const id = useCallback(() => {
    const regExp = /^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/;
    return regExp.exec(url)[1];
    // return this.url.replace('https://www.youtube.com/watch?v=', '');
  }, []);

  const generateURL = useCallback(() => {
    const query = '?rel=0&showinfo=0&autoplay=1';
    return `https://www.youtube.com/embed/${this.id}${query}`;
  }, []);

  const clickHandler = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  const getPaddingBottom = useCallback(() => {
    const [a, b] = aspectRatio.split(':');
    return {
      paddingBottom: `${(b / a) * 100}%`
    };
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="y-video" onClick={clickHandler}>
      <div className="y-video__inner" style={getPaddingBottom()}>
        {!isVideoLoaded && (
          <>
            <picture>
              <source
                srcSet={`https://i.ytimg.com/vi_webp/${id()}/hqdefault.webp`}
                type="image/webp"
              />
              <img
                className="y-video__media"
                src={`https://i.ytimg.com/vi/${id()}/hqdefault.jpg`}
                alt={alt}
              />
            </picture>
            <button type="button" className="y-video__button" aria-label={label}>
              <svg viewBox="0 0 68 48" version="1.1" width="100%" height="100%">
                <path
                  className="y-video__button-shape"
                  d="M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1a89.6 89.6 0 0 0 0 32.5c.8 3 2.5 5.5 5.4 6.3C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.6c3-.7 4.6-3.2 5.4-6.1C68 35 68 24 68 24s0-11-1.5-16.3z"
                />
                <path className="y-video__button-icon" d="M45 24L27 14v20" />
              </svg>
            </button>
          </>
        )}
        {isVideoLoaded && (
          <iframe
            title="youtube video"
            src={generateURL()}
            allowFullScreen
            allow="autoplay"
            className="y-video__media"
          />
        )}
      </div>
    </div>
  );
};

export default LazyYouTubeVideo;

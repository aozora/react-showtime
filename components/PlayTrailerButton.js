import React from 'react';
import Button from '@/components/Button';
import { useOverlayTriggerState } from '@react-stately/overlays';
import VideoPlayer from '@/components/VideoPlayer';

const PlayTrailerButton = ({ video }) => {
  const state = useOverlayTriggerState({});

  const onPlay = () => {
    state.open();
  };

  const onClose = () => {
    state.close();
  };

  return (
    <>
      <Button className="button button--primary" onPress={onPlay}>
        <span>Play Trailer</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 6.741c0-1.544 1.674-2.505 3.008-1.728l9.015 5.26c1.323.771 1.323 2.683 0 3.455l-9.015 5.258C7.674 19.764 6 18.803 6 17.26V6.741zM17.015 12L8 6.741V17.26L17.015 12z"
            fill="currentColor"
          />
        </svg>
      </Button>

      {state.isOpen && <VideoPlayer medium={video} onClose={onClose} />}
    </>
  );
};

export default PlayTrailerButton;

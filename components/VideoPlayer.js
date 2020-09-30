import React from 'react';
import { VimePlayer, VimeYoutube, VimeUi, VimeSkeleton } from '@vime/react';
import {
  useOverlay,
  usePreventScroll,
  useModal,
  OverlayProvider,
  OverlayContainer
} from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = props => {
  const { medium: video, onClose } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = React.useRef();
  const { overlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <OverlayContainer>
      <div className={styles.videoPlayer}>
        <FocusScope contain restoreFocus autoFocus>
          <div className={styles.videoPlayerToolbar}>
            <button type="button" onClick={onClose}>
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
                  d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <VimePlayer
            controls
            autoplay
            currentPoster={`https://i.ytimg.com/vi/${video.key}/hqdefault.jpg`}
          >
            <VimeYoutube videoId={video.key} />

            {/* ... */}
            <VimeUi>
              {/* ... */}
              <VimeSkeleton />
            </VimeUi>
          </VimePlayer>
        </FocusScope>
      </div>
    </OverlayContainer>
  );
};

export default VideoPlayer;

import React from 'react';
import PLayTrailerButton from '@/components/PlayTrailerButton';
import { OverlayProvider } from '@react-aria/overlays';

export default {
  title: 'Components/PLayTrailerButton',
  component: PLayTrailerButton
};

const video = {
  title: 'My Hero Academia: Heroes Rising',
  original_title: '僕のヒーローアカデミア THE MOVIE ヒーローズ：ライジング',
  key: 'ezHmHHt0B78',
  type: 'Trailer',
  site: 'youTube'
};

export const Player = () => (
  <OverlayProvider>
    <PLayTrailerButton video={video} />
  </OverlayProvider>
);

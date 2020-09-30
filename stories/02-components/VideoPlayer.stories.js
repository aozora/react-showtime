import React from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import { OverlayProvider } from '@react-aria/overlays';

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayer
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
    <VideoPlayer medium={video} />
  </OverlayProvider>
);

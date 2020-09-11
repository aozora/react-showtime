import React from 'react';
import ReelLoader from '@/components/ReelLoader';
import { withProvider } from '../story-redux-helper';

export default {
  title: 'Components/ReelLoader',
  component: ReelLoader,
  decorators: [Story => withProvider(Story)]
};

export const HeroLoader = () => <ReelLoader />;

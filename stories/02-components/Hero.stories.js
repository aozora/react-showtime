import React from 'react';
import HeroSkeleton from '../../components/HeroSkeleton';
import { withProvider } from '../story-redux-helper';

export default {
  title: 'Components/Hero',
  component: HeroSkeleton,
  decorators: [Story => withProvider(Story)]
};

export const Skeleton = () => <HeroSkeleton />;

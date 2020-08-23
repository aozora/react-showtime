import React from 'react';
import Splash from '../components/Splash';
import { withProvider } from './story-redux-helper';

export default {
  title: 'Components/Splash',
  component: Splash,
  decorators: [Story => withProvider(Story)]
};

export const SplashScreen = () => <Splash />;

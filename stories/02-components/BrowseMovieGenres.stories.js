import React from 'react';
import BrowserMovieGenres from '@/components/BrowseMovieGenres';
import { withProvider } from '../story-redux-helper';

export default {
  title: 'Components/BrowserMovieGenres',
  component: BrowserMovieGenres,
  decorators: [Story => withProvider(Story)]
};

const Template = args => <BrowserMovieGenres {...args} />;

export const Default = Template.bind({});

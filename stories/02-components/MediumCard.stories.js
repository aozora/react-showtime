import React from 'react';
import MediumCard from '../../components/MediumCard';
import { withProvider } from '../story-redux-helper';

export default {
  title: 'Components/MediumCard',
  component: MediumCard,
  decorators: [Story => withProvider(Story)]
};

const medium = {
  popularity: 42.861,
  vote_count: 0,
  video: false,
  poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
  id: 337401,
  adult: false,
  backdrop_path: '/xl5oCFLVMo4d4Pgxvrf8Jmc2IlA.jpg',
  original_language: 'en',
  original_title: 'Mulan',
  genre_ids: [28, 18, 14, 10752],
  title: 'Mulan',
  vote_average: 0,
  overview:
    'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.',
  release_date: '2020-09-04'
};

const Template = args => <MediumCard {...args} />;

export const MediumCardPoster = Template.bind({});
MediumCardPoster.args = {
  card: 'poster',
  medium
};

export const MediumCardBackdrop = Template.bind({});
MediumCardBackdrop.args = {
  card: 'backdrop',
  medium
};

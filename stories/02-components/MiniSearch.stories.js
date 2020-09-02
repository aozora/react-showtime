import React from 'react';
import MiniSearch from '../../components/MiniSearch';

export default {
  title: 'Components/MiniSearch',
  component: MiniSearch
};

export const Search = () => (
  <MiniSearch label="Search" placeholder="Search..." onSubmit={text => alert(text)} />
);

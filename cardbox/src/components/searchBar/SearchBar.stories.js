import React from 'react';
import SearchBar from './SearchBar'

export default {
  component: SearchBar,
  title: 'my Search Bar',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <SearchBar />;
};
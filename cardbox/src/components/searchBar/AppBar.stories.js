import React from 'react';


import AppBar from './AppBar';

export default {
  component: AppBar,
  title: 'My AppBar',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
    return <AppBar/> ;
  };
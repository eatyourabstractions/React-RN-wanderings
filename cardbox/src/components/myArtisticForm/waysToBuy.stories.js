import React from 'react';
import WaysToBuy from './waysToBuy';

export default {
  component: WaysToBuy,
  title: 'ways to buy',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
    return <WaysToBuy/> ;
  };
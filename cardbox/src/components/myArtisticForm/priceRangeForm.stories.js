import React from 'react';
import SizeSlider from './sizeForm';

export default {
  component: SizeSlider,
  title: 'set-Width-Heigth',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
    return <SizeSlider/> ;
  };
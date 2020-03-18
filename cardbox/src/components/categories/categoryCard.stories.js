import React from 'react';
import imageFile from './lizard.jpg';
import MediaCard from './categoryCard';

const image = {
    src: imageFile,
    alt: 'my image',
    title: 'erasmo',
  };

export default {
  component: MediaCard,
  title: 'category-card',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
    return <MediaCard myImg={image} /> ;
  };
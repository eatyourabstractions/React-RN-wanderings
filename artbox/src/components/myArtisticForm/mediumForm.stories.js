import React from 'react';


import RadioBtnForm from './mediumForm';

export default {
  component: RadioBtnForm,
  title: 'radio btn form',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
    return <RadioBtnForm/> ;
  };
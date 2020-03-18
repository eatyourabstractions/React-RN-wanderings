import React from 'react';


import NestedList from './nestedForm';

export default {
  component: NestedList,
  title: 'nested form',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
    return <NestedList/> ;
  };
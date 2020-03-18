import React from 'react';
import OrderToggle from './OrderToggle'

export default {
  component: OrderToggle,
  title: 'Toggle btn',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <OrderToggle />;
};
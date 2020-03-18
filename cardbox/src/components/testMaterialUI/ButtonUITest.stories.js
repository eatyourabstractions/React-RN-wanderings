import React from 'react';
import { action } from '@storybook/addon-actions';

import MyButton from './ButtonUITest';

export default {
  component: MyButton,
  title: 'MyButton',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => {
    return <MyButton clickMe={action('My-Button was clicked!')}/> ;
  };
import React from 'react';
import { action } from '@storybook/addon-actions';

import DeleteItemBtn from './DeleteItemBtn'

export default {
    component: DeleteItemBtn,
    title: 'Delete-Item-Btn',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };


  export const actionsData = {
    onDelete: action('onDelete'),
 
  };
  

  export const Default = () => <DeleteItemBtn content={"hello there!"} delete={actionsData.onDelete}/>;

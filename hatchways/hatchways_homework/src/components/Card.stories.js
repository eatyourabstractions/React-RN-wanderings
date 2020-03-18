import React from 'react';
import { action } from '@storybook/addon-actions';

import Card from './Card';

export default {
  component: Card,
  title: 'Worker Card',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
    order: {
        id: '480cb439',
        name: 'Worker Order Name',
        description: 'This is a description for the work order...',
        deadline: '1558249206',
        workerid: 4
    },

    
 worker: { 
    id: '1',
    name: 'john doe',
    email: 'johndoe@gmail.com',
    companyName: 'fitness factory',
             }
};



export const Default = () => {
  return <Card identity={{...taskData.worker}} orderInfo={{...taskData.order}}/>;
};
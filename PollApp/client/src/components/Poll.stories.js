import React from 'react';
import { action } from '@storybook/addon-actions';

import Poll from './Poll';

export default {
  component: Poll,
  title: 'Poll-elem',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Data = {
    title: 'OS',
    options: ["windows","macOS", "linux", "other"],
    updatedAt: new Date(2018, 0, 1, 9, 0),
    results:  [
      {
        name: 'Windows', votes: 400
      },
      {
        name: 'MacOS', votes: 300
      },
      {
        name: 'Linux', votes: 200
      },
      {
        name: 'Other', votes: 278
      },    
    ]
  };



export const Default = () => <Poll  Data={Data}/>;


import React from 'react';
import { action } from '@storybook/addon-actions';

import ResultsBarChart from './ResultCanvas';

export default {
    component: ResultsBarChart,
    title: 'Bar Chart',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };

const Data = [
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
  ];


  export const Default = () => <ResultsBarChart data={Data}/>;

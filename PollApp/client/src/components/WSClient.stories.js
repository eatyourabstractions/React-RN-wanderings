import React from 'react';


import WSClient from './wsClient';

export default {
  component: WSClient,
  title: 'socket-test',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};



export const Default = () => <WSClient/>;


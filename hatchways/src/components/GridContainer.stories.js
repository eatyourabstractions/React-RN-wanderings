import React from 'react';

import GridContainer from './GridContainer'


export default {
  component: GridContainer,
  title: 'GridContainer',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const tileData = {
  "orders": [
    {
      "deadline": 1582149510, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "7c9f61bb", 
      "name": "Work order 7c9f61bb", 
      "workerId": 0
    }, 
    {
      "deadline": 1582153480, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "20798253", 
      "name": "Work order 20798253", 
      "workerId": 1
    }, 
    {
      "deadline": 1582008030, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "7d4995e4", 
      "name": "Work order 7d4995e4", 
      "workerId": 3
    }, 
    {
      "deadline": 1582154523, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "5767e80b", 
      "name": "Work order 5767e80b", 
      "workerId": 0
    }, 
    {
      "deadline": 1582264928, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "82e72b6c", 
      "name": "Work order 82e72b6c", 
      "workerId": 4
    }, 
    {
      "deadline": 1581897034, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "05577e16", 
      "name": "Work order 05577e16", 
      "workerId": 4
    }, 
    {
      "deadline": 1581973376, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "f46d191b", 
      "name": "Work order f46d191b", 
      "workerId": 3
    }, 
    {
      "deadline": 1582072192, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "e6ffcb93", 
      "name": "Work order e6ffcb93", 
      "workerId": 2
    }, 
    {
      "deadline": 1581879175, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "a21df545", 
      "name": "Work order a21df545", 
      "workerId": 1
    }, 
    {
      "deadline": 1582116333, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "ec6f1cfa", 
      "name": "Work order ec6f1cfa", 
      "workerId": 1
    }, 
    {
      "deadline": 1582260210, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "163b77a0", 
      "name": "Work order 163b77a0", 
      "workerId": 2
    }, 
    {
      "deadline": 1582186501, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "ba25a356", 
      "name": "Work order ba25a356", 
      "workerId": 2
    }, 
    {
      "deadline": 1581860106, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "f6b9cf98", 
      "name": "Work order f6b9cf98", 
      "workerId": 2
    }, 
    {
      "deadline": 1582186788, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "bd1b88b7", 
      "name": "Work order bd1b88b7", 
      "workerId": 1
    }, 
    {
      "deadline": 1582081205, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "75c52cab", 
      "name": "Work order 75c52cab", 
      "workerId": 3
    }, 
    {
      "deadline": 1582224560, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "02fbde8a", 
      "name": "Work order 02fbde8a", 
      "workerId": 3
    }, 
    {
      "deadline": 1582099364, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "ae9b1a43", 
      "name": "Work order ae9b1a43", 
      "workerId": 2
    }, 
    {
      "deadline": 1582388832, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "2947130e", 
      "name": "Work order 2947130e", 
      "workerId": 4
    }, 
    {
      "deadline": 1582030275, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "cb5a4446", 
      "name": "Work order cb5a4446", 
      "workerId": 3
    }, 
    {
      "deadline": 1582095702, 
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      "id": "a9be8811", 
      "name": "Work order a9be8811", 
      "workerId": 3
    }
  ]
}
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
  return <GridContainer tileData={tileData} workerInfo={taskData.worker} />;
};
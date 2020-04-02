import React from 'react';
import CreatePoll from './CreatePoll'
import generateName from './names'


function buildData(n){
    let result = []
    let i;
    for (i = 0; i < n; i++){
        result.push(generateName());
    }
    return result
}

export default {
    component: CreatePoll,
    title: 'create poll component',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };





  export const Default = () => <CreatePoll elems={buildData(10)}/>;

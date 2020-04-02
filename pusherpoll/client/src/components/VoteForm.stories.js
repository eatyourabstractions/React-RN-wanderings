// src/components/Task.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import VoteForm from './VoteForm';

export default {
  component: VoteForm,
  title: 'VoteForm',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Data = {
  title: 'OS',
  state: ["windows","macOS", "linux", "other"],
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <VoteForm title={Data.title} elems={Data.state}/>;


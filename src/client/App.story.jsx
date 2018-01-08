/* eslint-disable import/no-unresolved,import/extensions,import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './App.jsx';

storiesOf('App', module)
  .add('main application', () => (
    <App />
  ));

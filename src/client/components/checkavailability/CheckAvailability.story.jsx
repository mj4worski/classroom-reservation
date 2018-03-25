import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckAvailability from './CheckAvailability';

storiesOf('CheckAvailability', module)
  .add('simple', () => <CheckAvailability />);

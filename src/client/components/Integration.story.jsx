import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckAvailability from './checkavailability';
import Calendar from './calendar';

storiesOf('Integration', module)
  .add('calendar and check availability', () => (
    <div>
      <CheckAvailability />
      <Calendar />
    </div>
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckAvailability from './CheckAvailability';
import FindReservedClass from './FindReservedClass';

// TODO Extract decorator (DRY)
const Decorator = storyFn => (
  <div className="mt-5">
    { storyFn() }
  </div>
);

storiesOf('Search panels', module)
  .addDecorator(Decorator)
  .add('CheckAvailability', () => <CheckAvailability />)
  .add('FindReservedClass', () => <FindReservedClass />);

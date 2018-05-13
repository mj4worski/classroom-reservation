/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Calendar from './Calendar';

const events = [
  {
    when: new Date(2018, 3, 10),
    startTime: new Date(2018, 3, 10, 10, 35),
    endTime: new Date(2018, 3, 10, 11, 35),
    name: 'Spotkanie 1',
  },
  {
    when: new Date(2018, 3, 10),
    startTime: new Date(2018, 3, 10, 12, 35),
    endTime: new Date(2018, 3, 10, 13, 35),
    name: 'Spotkanie 2',
  },
  {
    when: new Date(2018, 3, 15),
    startTime: new Date(2018, 3, 15, 12, 35),
    endTime: new Date(2018, 3, 15, 13, 35),
    name: 'Spotkanie 3',
  },
  {
    when: new Date(2018, 4, 15),
    startTime: new Date(2018, 4, 15, 12, 35),
    endTime: new Date(2018, 4, 15, 13, 35),
    name: 'Spotkanie 4',
  },
];

storiesOf('Calendar', module)
  .add('simple', () => <div className="mt-3"><Calendar events={events} /></div>);

import React from 'react';
import WeekDays from './WeekDays';
import { CalendarRow as Row, CalendarCell as Cell } from './layout';

const Week = () => (
  <div>
    <WeekDays />
    <Row>
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Cell>3</Cell>
      <Cell>4</Cell>
      <Cell>5</Cell>
      <Cell>6</Cell>
      <Cell>7</Cell>
    </Row>
  </div>
);

export default Week;

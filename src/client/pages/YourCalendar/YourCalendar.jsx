import React from 'react';
import Calendar from '../../components/calendar';
import { FindReservedClass } from '../../components/checkavailability';
import './YourCalendar.scss';

const YourCalendar = () => (
  <div className="your-calendar-layout">
    <Calendar>
      <FindReservedClass />
    </Calendar>
  </div>
);

export default YourCalendar;

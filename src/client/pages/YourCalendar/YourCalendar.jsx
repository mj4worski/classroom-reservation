import React from 'react';
import Calendar from '../../components/calendar';
import { FindReservedClass } from '../../components/checkavailability';

const YourCalendar = () => (
  <div className="m-4">
    <Calendar>
      <FindReservedClass />
    </Calendar>
  </div>
);

export default YourCalendar;

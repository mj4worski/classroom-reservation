import React from 'react';
import Calendar from '../../components/calendar';
import ClassSearch from '../../components/ClassSearch';
import './YourCalendar.scss';

const YourCalendar = () => (
  <div className="your-calendar-layout">
    <Calendar>
      <ClassSearch />
    </Calendar>
  </div>
);

export default YourCalendar;

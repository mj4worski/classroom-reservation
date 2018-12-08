import React from 'react';
import Calendar from '../../components/calendar';
import LayoutContent from '../../components/shared/LayoutContent';
import './Calendar.scss';


const CalendarPage = () => (
  <LayoutContent className="calendar-page">
    <Calendar />
  </LayoutContent>
);

export default CalendarPage;

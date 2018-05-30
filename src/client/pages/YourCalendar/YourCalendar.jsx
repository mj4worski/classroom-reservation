import React from 'react';
import Calendar from '../../components/calendar';
import ClassSearch from '../../components/ClassSearch';
import './YourCalendar.scss';

const CalendarPanel = () => (
  <div className="calendar-panel">
    <span className="calendar-panel__label">Wyszukaj</span>
    <ClassSearch placeholder="Wpisz sale ktora Cie interesuje" containerClassTheme="calendar-panel__input" />
    <button type="button" className="btn btn-danger calendar-panel__find-button">Szukaj</button>
  </div>
);

const YourCalendar = () => (
  <div className="your-calendar-layout">
    <Calendar>
      <CalendarPanel />
    </Calendar>
  </div>
);

export default YourCalendar;

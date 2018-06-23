import React from 'react';
import Calendar from '../../components/calendar';
import ClassSearch from '../../components/classSearch';
import './YourCalendar.scss';
import LayoutContent from '../../components/LayoutContent';

const CalendarPanel = () => (
  <div className="calendar-panel">
    <span className="calendar-panel__label">Wyszukaj</span>
    <div className="calendar-panel__input">
      <ClassSearch placeholder="Wpisz sale ktora Cie interesuje" />
    </div>
    <button type="button" className="btn btn-danger calendar-panel__find-button">Szukaj</button>
  </div>
);

const YourCalendar = () => (
  <LayoutContent>
    <Calendar>
      <CalendarPanel />
    </Calendar>
  </LayoutContent>
);

export default YourCalendar;

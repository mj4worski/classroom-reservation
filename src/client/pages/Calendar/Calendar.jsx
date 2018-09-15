import React from 'react';
import Calendar from '../../components/calendar';
import ClassSearch from '../../components/classSearch';
import './Calendar.scss';
import LayoutContent from '../../components/LayoutContent';

// TODO:: Move it
const CalendarPanel = () => (
  <div className="calendar-panel">
    <span className="calendar-panel__label">Wyszukaj</span>
    <div className="calendar-panel__input">
      <ClassSearch placeholder="Wpisz sale ktora Cie interesuje" />
    </div>
    <button type="button" className="btn btn-danger calendar-panel__find-button">Szukaj</button>
  </div>
);

const CalendarPage = () => (
  <LayoutContent>
    <Calendar>
      <CalendarPanel />
    </Calendar>
  </LayoutContent>
);

export default CalendarPage;

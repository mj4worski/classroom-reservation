import React from 'react';
import CalendarRow from './CalendarRow';
import './WeekDays.scss';

const WeekDays = () => (
  <CalendarRow>
    <div className="week-days">Niedziela</div>
    <div className="week-days">Poniedziałek</div>
    <div className="week-days">Wtorek</div>
    <div className="week-days">Środa</div>
    <div className="week-days">Czwartek</div>
    <div className="week-days">Piątek</div>
    <div className="week-days">Sobota</div>
  </CalendarRow>
);

export default WeekDays;

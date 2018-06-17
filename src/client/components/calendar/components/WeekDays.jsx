import React from 'react';
import { CalendarRow as Row, CalendarCell as Cell } from './layout';
import './WeekDays.scss';

const WeekDays = () => (
  <Row>
    <Cell><div className="week-days">Niedziela</div></Cell>
    <Cell><div className="week-days">Poniedziałek</div></Cell>
    <Cell><div className="week-days">Wtorek</div></Cell>
    <Cell><div className="week-days">Środa</div></Cell>
    <Cell><div className="week-days">Czwartek</div></Cell>
    <Cell><div className="week-days">Piątek</div></Cell>
    <Cell><div className="week-days">Sobota</div></Cell>
  </Row>
);

export default WeekDays;

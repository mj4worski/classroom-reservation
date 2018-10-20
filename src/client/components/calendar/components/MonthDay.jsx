import React from 'react';
import PropTypes from 'prop-types';
import { CalendarCell as Cell } from './layout';
import { eventsType } from './types';

import './MonthDay.scss';

const MonthDay = ({ dayNumber, events, inactive }) => (
  <Cell>
    <span className={`month-day ${inactive ? 'month-day--inactive' : ''}`}>
      <span className="month-day__day-number">{dayNumber}</span>
      {events.length > 0 && events.map(event => <span key={event._id} className="month-day__content" >{event.name}</span>)}
    </span>
  </Cell>
);

MonthDay.propTypes = {
  dayNumber: PropTypes.number.isRequired,
  events: eventsType.isRequired,
  inactive: PropTypes.bool,
};

MonthDay.defaultProps = {
  inactive: false,
};

export default MonthDay;

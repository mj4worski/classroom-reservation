import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CalendarCell as Cell } from './layout';
import { ReservationsType } from '../../reservation';

import './MonthDay.scss';

const onLinkClick = reservations => (event) => {
  if (reservations.length === 0) {
    event.preventDefault();
  }
};

const MonthDay = ({ dayNumber, events: reservations, inactive }) => (
  <Cell>
    <Link
      to={{
         pathname: '/myreservation',
         state: { reservations },
      }}
      className={`month-day ${inactive ? 'month-day--inactive' : ''}`}
      onClick={onLinkClick(reservations)}
    >
      <span className="month-day__day-number">{dayNumber}</span>
      {reservations.length > 0 && reservations.map(reservation => <span key={reservation._id} className="month-day__content" >{reservation.name}</span>)}
    </Link>
  </Cell>
);

MonthDay.propTypes = {
  dayNumber: PropTypes.number.isRequired,
  events: ReservationsType.isRequired,
  inactive: PropTypes.bool,
};

MonthDay.defaultProps = {
  inactive: false,
};

export default MonthDay;

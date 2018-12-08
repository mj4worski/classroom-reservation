/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { Link } from 'react-router-dom';
import { CalendarCell as Cell } from './layout';
import { ReservationsType } from '../../reservation';

import './MonthDay.scss';

const onLinkClick = reservations => (event) => {
  if (reservations.length === 0) {
    event.preventDefault();
  }
};

const MonthDay = ({ date, reservations, inactive }) => (
  <Cell>
    <Link
      to={{
         pathname: '/myreservation',
         state: { reservations, date: date.toObject() },
      }}
      className={`month-day ${inactive ? 'month-day--inactive' : ''}`}
      onClick={onLinkClick(reservations)}
    >
      <span className="month-day__day-number">{date.date()}</span>
      {reservations.length > 0 && reservations.map(reservation => <span key={reservation._id} className="month-day__content" >{reservation.name}</span>)}
    </Link>
  </Cell>
);

MonthDay.propTypes = {
  date: momentPropTypes.momentObj.isRequired,
  reservations: ReservationsType.isRequired,
  inactive: PropTypes.bool,
};

MonthDay.defaultProps = {
  inactive: false,
};

export default MonthDay;

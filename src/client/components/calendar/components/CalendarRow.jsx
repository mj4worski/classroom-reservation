import React from 'react';
import PropTypes from 'prop-types';
import './CalendarRow.scss';

// TODO:: Children length validation
const CalendarRow = ({ children }) => (
  <div className="calendar-row">
    {children}
  </div>
);

CalendarRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalendarRow;

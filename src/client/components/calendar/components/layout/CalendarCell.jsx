import React from 'react';
import PropTypes from 'prop-types';
import './CalendarCell.scss';

const CalendarCell = ({ children }) => (
  <div className="calendar-cell">
    {children}
  </div>
);

CalendarCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalendarCell;
